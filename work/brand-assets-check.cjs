const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3010";

async function inspect(page, route, screenshot) {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });

  const metrics = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    images: Array.from(document.images).map((image) => ({
      alt: image.alt,
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      renderedWidth: Math.round(image.getBoundingClientRect().width),
      renderedHeight: Math.round(image.getBoundingClientRect().height),
    })),
  }));

  await page.screenshot({
    path: path.join(__dirname, screenshot),
    fullPage: true,
  });

  return { ...metrics, errors };
}

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });

  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });

  const result = {
    homeDesktop: await inspect(
      await desktop.newPage(),
      "/",
      "brand-home-desktop.png",
    ),
    towerDesktop: await inspect(
      await desktop.newPage(),
      "/torre",
      "brand-tower-desktop.png",
    ),
    homeMobile: await inspect(
      await mobile.newPage(),
      "/",
      "brand-home-mobile.png",
    ),
    towerMobile: await inspect(
      await mobile.newPage(),
      "/torre",
      "brand-tower-mobile.png",
    ),
  };

  console.log(JSON.stringify(result, null, 2));
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
