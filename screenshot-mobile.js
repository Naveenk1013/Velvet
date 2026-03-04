const puppeteer = require("puppeteer");
const path = require("path");

const pages = [
  { name: "index", file: "index.html" },
  { name: "services", file: "services.html" },
  { name: "gallery", file: "gallery.html" },
  { name: "contact", file: "contact.html" },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  // iPhone X viewport
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });

  for (const p of pages) {
    const filePath =
      "file:///" + path.join(__dirname, p.file).replace(/\\/g, "/");
    console.log(`Mobile Screenshotting: ${filePath}`);
    try {
      await page.goto(filePath, { waitUntil: "networkidle2", timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({
        path: `screenshot-mobile-${p.name}.png`,
        fullPage: true,
      });
      console.log(`Saved: screenshot-mobile-${p.name}.png`);
    } catch (e) {
      console.error(`Failed to screenshot ${p.name}: ${e.message}`);
    }
  }

  await browser.close();
  console.log("Done!");
})();
