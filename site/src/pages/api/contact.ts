// Contact form: checks the message, checks Turnstile (anti-spam), then mails it to our own inbox.
// Runs on Cloudflare for every request; all other pages stay static HTML.
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { contactform } from '../../data/site';

export const prerender = false;

// Cloudflare's test secret: always passes. Only used by `npm run dev`, never in a real build.
const TURNSTILE_TEST_SECRET = '1x0000000000000000000000000000000AA';

const reply = (status: number, body: { ok: boolean; error?: string }) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

// one line, no control characters, not endlessly long
const line = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? '').replace(/[\x00-\x1f\x7f]+/g, ' ').trim().slice(0, max);

export const POST: APIRoute = async ({ request }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return reply(400, { ok: false, error: 'invalid' });
  }

  const naam = line(data.get('naam'), 120);
  const woonplaats = line(data.get('woonplaats'), 120);
  const email = line(data.get('email'), 200);
  const telefoon = line(data.get('telefoon'), 40);
  const bericht = String(data.get('bericht') ?? '').replace(/\r\n?/g, '\n').trim().slice(0, 5000);
  const token = String(data.get('cf-turnstile-response') ?? '');

  if (!naam || !woonplaats || !bericht || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply(400, { ok: false, error: 'invalid' });
  }

  // Turnstile: was this sent by a person on our own site?
  const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: import.meta.env.DEV ? TURNSTILE_TEST_SECRET : env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') ?? '',
    }),
  }).then(r => r.json() as Promise<{ success: boolean; 'error-codes'?: string[] }>)
    .catch(() => ({ success: false, 'error-codes': ['siteverify-unreachable'] }));
  if (!check.success) {
    console.warn('contact: turnstile failed', check['error-codes']);
    return reply(403, { ok: false, error: 'turnstile' });
  }

  // replying in the mail program goes straight to the visitor
  try {
    await env.EMAIL.send({
      from: contactform.from,
      to: contactform.to,
      replyTo: { name: naam, email },
      subject: `Contactformulier: ${naam} (${woonplaats})`,
      text: [
        `Naam: ${naam}`,
        `Woonplaats: ${woonplaats}`,
        `E-mail: ${email}`,
        `Telefoon: ${telefoon || '-'}`,
        '',
        bericht,
        '',
        '--',
        'Verstuurd via het contactformulier op astrohout.nl. Beantwoorden gaat direct naar de afzender.',
      ].join('\n'),
    });
  } catch (err) {
    console.error('contact: sending failed', err);
    return reply(502, { ok: false, error: 'send' });
  }

  return reply(200, { ok: true });
};
