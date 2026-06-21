const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto("file:///C:/Users/cacha/Downloads/Copia%20de%20LOGO%20BONXUR.pdf#page=2");
  await page.waitForTimeout(2500);
  await page.screenshot({
    path: path.join(__dirname, "logo-pdf-preview-page-2.png"),
    fullPage: false,
  });
  console.log(await page.title());
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
