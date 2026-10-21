// Turns a client file into a PDF offerte: node offertes/maak-offerte.mjs offertes/2026-001-schaap-hendriksen.json
// Fills template.html with bedrijf.json + the client file and prints it with headless Chrome (or Edge).
// The PDF lands next to the client file, with the same name.

import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const hier = dirname(fileURLToPath(import.meta.url));
const klantbestand = process.argv[2];
if (!klantbestand) {
  console.error('Gebruik: node offertes/maak-offerte.mjs <klantbestand.json>');
  process.exit(1);
}

const data = {
  bedrijf: JSON.parse(readFileSync(join(hier, 'bedrijf.json'), 'utf8')),
  offerte: JSON.parse(readFileSync(klantbestand, 'utf8')),
};

// The filled-in page sits next to the template so the fonts and logo in assets/ resolve.
const template = readFileSync(join(hier, 'template.html'), 'utf8');
const json = JSON.stringify(data).replace(/</g, '\\u003c');
const tijdelijk = join(hier, `.render-${process.pid}.html`);
writeFileSync(tijdelijk, template.replace('/*DATA*/', json));

const browsers = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];
const browser = process.env.CHROME ?? browsers.find(existsSync);
if (!browser) throw new Error('Geen Chrome of Edge gevonden; zet het pad in de omgevingsvariabele CHROME.');

const pdf = resolve(dirname(klantbestand), basename(klantbestand, '.json') + '.pdf');
try {
  execFileSync(browser, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=5000', `--print-to-pdf=${pdf}`, pathToFileURL(tijdelijk).href,
  ], { stdio: 'ignore' });
} finally {
  rmSync(tijdelijk, { force: true });
}
console.log(`Klaar: ${pdf}`);
