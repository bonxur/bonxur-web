const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });

  const errors = [];
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(__dirname, "home-desktop.png"), fullPage: true });

  await page.goto("http://127.0.0.1:3000/simulador", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Añadir torres" }).click();
  const plants = await page.getByText("150", { exact: true }).first().textContent();
  await page.screenshot({ path: path.join(__dirname, "simulator-desktop.png"), fullPage: true });

  await page.goto("http://127.0.0.1:3000/contacto", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Enviar consulta" }).click();
  const validationErrors = await page.locator("form .text-red-600").count();

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
  });
  const mobilePage = await mobile.newPage();
  await mobilePage.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await mobilePage.getByRole("button", { name: "Abrir menú" }).click();
  const mobileMenuVisible = await mobilePage
    .getByRole("navigation", { name: "Navegación móvil" })
    .isVisible();
  await mobilePage.screenshot({ path: path.join(__dirname, "home-mobile.png"), fullPage: true });

  console.log(
    JSON.stringify(
      {
        title: await page.title(),
        plantsAfterIncrement: plants,
        validationErrors,
        mobileMenuVisible,
        consoleErrors: errors,
      },
      null,
      2,
    ),
  );

  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
