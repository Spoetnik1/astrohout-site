// QR redirect: /kijk/<code> sends the visitor on to the page set in src/data/qr.ts, and logs the scan in D1.
// No cookies and no raw IP addresses: repeat scans are recognised by a hash that changes every day.
//
// Scans per flyer (Cloudflare dashboard > D1 > astrohout-qr > Console):
//   SELECT code, COUNT(*) AS scans, COUNT(DISTINCT visitor) AS people
//   FROM scans WHERE is_bot = 0 AND is_repeat = 0 GROUP BY code;
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { qrCodes } from '../../data/qr';

export const prerender = false;

// crawlers, link checkers and chat-app previews (WhatsApp, iMessage, Slack ...) name themselves here
const BOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|telegram|discord|skype|curl|wget|python|java\/|go-http|headless|lighthouse|monitor/i;
// the same person scanning the same code again within this time counts once
const HERHALING_MINUTEN = 30;

const SCHEMA = `CREATE TABLE IF NOT EXISTS scans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  scanned_at TEXT NOT NULL DEFAULT (datetime('now')),
  visitor TEXT,
  is_bot INTEGER NOT NULL,
  is_repeat INTEGER NOT NULL,
  device TEXT,
  city TEXT,
  country TEXT
)`;

const sha256 = async (s: string) =>
  [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)))]
    .map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 16);

const apparaat = (ua: string) =>
  /iphone|ipad/i.test(ua) ? 'iOS' : /android/i.test(ua) ? 'Android' : /mobile/i.test(ua) ? 'mobile' : 'desktop';

async function logScan(request: Request, code: string) {
  const ua = request.headers.get('user-agent') ?? '';
  const ip = request.headers.get('CF-Connecting-IP') ?? '';
  const cf = (request as Request & { cf?: { city?: string; country?: string } }).cf;
  const bezoeker = await sha256(`${new Date().toISOString().slice(0, 10)}|${ip}|${ua}`);
  const bot = !ua || BOT.test(ua) ? 1 : 0;

  await env.QR_DB.prepare(SCHEMA).run();
  const eerder = await env.QR_DB.prepare(
    `SELECT 1 FROM scans WHERE code = ? AND visitor = ? AND scanned_at > datetime('now', ?) LIMIT 1`,
  ).bind(code, bezoeker, `-${HERHALING_MINUTEN} minutes`).first();
  await env.QR_DB.prepare(
    `INSERT INTO scans (code, visitor, is_bot, is_repeat, device, city, country) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).bind(code, bezoeker, bot, eerder ? 1 : 0, apparaat(ua), cf?.city ?? null, cf?.country ?? null).run();
}

export const GET: APIRoute = ({ params, request, locals }) => {
  const code = (params.code ?? '').toLowerCase();
  const qr = qrCodes[code];
  // unknown code (typo, old flyer): just the homepage, and nothing is logged
  const naar = new URL(qr?.naar ?? '/', request.url);

  if (qr) {
    // the visitor doesn't wait for the database
    locals.cfContext.waitUntil(logScan(request, code).catch((err) => console.error('qr: logging failed', err)));
  }

  return new Response(null, {
    status: 302,
    headers: {
      location: naar.href,
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
};

// link checkers peek with HEAD: same redirect, not counted
export const HEAD: APIRoute = ({ params, request }) =>
  new Response(null, {
    status: 302,
    headers: { location: new URL(qrCodes[(params.code ?? '').toLowerCase()]?.naar ?? '/', request.url).href },
  });
