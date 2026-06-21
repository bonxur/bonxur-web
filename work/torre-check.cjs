const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");

async function inspect(page, fileName) {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("http://127.0.0.1:3000/torre", { waitUntil: "networkidle" });
  const metrics = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    heading: document.querySelector("h1")?.textContent?.trim(),
    howItWorks: Array.from(document.querySelectorAll("h2")).some((heading) =>
      heading.textContent?.includes("El agua hace un recorrido circular"),
    ),
  }));
  await page.screenshot({ path: path.join(__dirname, fileName), fullPage: true });
  return { ...metrics, errors };
}

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });

  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const desktop = await inspect(await desktopContext.newPage(), "torre-desktop.png");
  const mobile = await inspect(await mobileContext.newPage(), "torre-mobile.png");

  console.log(JSON.stringify({ desktop, mobile }, null, 2));
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
