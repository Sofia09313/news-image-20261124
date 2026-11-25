import { chromium } from '/opt/hatch/skills/spaces/ts-runtime/dist/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath: '/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
  args: ['--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + join(dir, 'index.html'));
await page.waitForTimeout(300);
await page.screenshot({ path: join(dir, 'entry.png') });
await browser.close();
console.log('rendered');
