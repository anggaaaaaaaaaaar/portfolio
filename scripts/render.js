// Regenerates assets/og.png and assets/Anggar-Pujianto-CV.pdf (from cv.html).
// Run after editing cv.html: node scripts/render.js (needs Playwright with Chromium).
// For a private copy with a phone number, which stays out of the repo:
//   CV_PHONE="08xx..." CV_OUT=/some/path.pdf node scripts/render.js
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
  await cv.goto(url('cv.html'));
  if (process.env.CV_PHONE) {
    await cv.evaluate((phone) => {
      const el = document.querySelector('.phone');
      el.textContent = phone;
      el.hidden = false;
    }, process.env.CV_PHONE);
  }
  await cv.pdf({
    path: process.env.CV_OUT || path.join(root, 'assets/Anggar-Pujianto-CV.pdf'),
    preferCSSPageSize: true,
  });

  await browser.close();
})();
