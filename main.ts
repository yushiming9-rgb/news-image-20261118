// Hands the day's news image in: copies entry.png to /output/entry.png, as the bounty asks.
// The image was drawn by the entrant's own agent in the bundled sessions (poster.html, rendered
// with headless Chromium); this program only places the file where the grader reads it.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY_NAME = "The World in One Image — Wednesday, 18 November 2026";
const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

console.log(`handing in entry: ${ENTRY_NAME}`);
mkdirSync(out, { recursive: true });
const target = join(out, 'entry.png');
copyFileSync(join(here, 'entry.png'), target);
// sanity: report what was handed in, so a grader log names the image even if it is later replaced
console.log('entry.png written to', target);
