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
  await page.setViewport({ width: 1440, height: 900 });

  for (const p of pages) {
    const filePath =
      "file:///" + path.join(__dirname, p.file).replace(/\\/g, "/");
    console.log(`Screenshotting: ${filePath}`);
    await page.goto(filePath, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({
      path: `screenshot-${p.name}.png`,
      fullPage: false,
    });
    console.log(`Saved: screenshot-${p.name}.png`);
  }

  await browser.close();
  console.log("Done!");
})();
