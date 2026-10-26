// Regenerates assets/og.png and assets/Anggar-Pujianto-CV.pdf.
// Run after editing index.html: node scripts/render.js (needs Playwright with Chromium).
const path = require('path');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const url = (file) => 'file://' + path.join(root, file);

(async () => {
  const browser = await chromium.launch();

  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(url('scripts/og.html'));
  await og.screenshot({ path: path.join(root, 'assets/og.png') });

  const cv = await browser.newPage();
  await cv.goto(url('index.html'));
  await cv.emulateMedia({ media: 'print', colorScheme: 'light' });
  await cv.pdf({
    path: path.join(root, 'assets/Anggar-Pujianto-CV.pdf'),
    format: 'A4',
    margin: { top: '16mm', bottom: '16mm', left: '18mm', right: '18mm' },
    printBackground: false,
  });

  await browser.close();
})();
