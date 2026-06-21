const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3010";

async function inspect(page, route, requiredTexts, screenshot) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });

  const texts = {};
  for (const text of requiredTexts) {
    texts[text] = (await page.getByText(text, { exact: true }).count()) > 0;
  }

  const layout = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
  }));

  if (screenshot) {
    await page.screenshot({ path: path.join(__dirname, screenshot), fullPage: true });
  }

  return { texts, layout };
}

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });

  const errors = [];
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await desktopContext.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`${page.url()}: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`${page.url()}: ${error.message}`));

  const home = await inspect(
    page,
    "/",
    ["Dos modelos Bonxur", "Bonxur 30", "Bonxur 44"],
    "two-models-home-desktop.png",
  );
  const tower = await inspect(
    page,
    "/torre",
    ["Modelos de torres Bonxur", "Torre Bonxur 30", "Torre Bonxur 44", "Uso recomendado"],
    "two-models-tower-desktop.png",
  );

  await page.goto(`${baseUrl}/simulador`, { waitUntil: "networkidle" });
  await page
    .locator('input[name="tower-model"]')
    .nth(1)
    .evaluate((element) => element.click());
  await page.locator("#area").fill("100");
  await page.locator("#towers").fill("10");
  const simulator44 = {
    modelSelected: await page.getByText("Bonxur 44", { exact: true }).last().isVisible(),
    plantsPerTower: await page.getByText("44", { exact: true }).first().isVisible(),
    plantsTotal: await page.getByText("440", { exact: true }).first().isVisible(),
    occupiedArea: await page.getByText("6", { exact: true }).first().isVisible(),
    occupancy: await page.getByText("6%", { exact: true }).isVisible(),
  };
  await page.locator("#area").fill("5");
  const simulatorOverflow = {
    warning: await page
      .getByText(
        "Con esta configuración, las torres ocuparían más superficie de la disponible. Reduce el número de torres o aumenta el espacio.",
        { exact: true },
      )
      .first()
      .isVisible(),
    capacityEight: await page.getByText("Usar capacidad (8)", { exact: true }).isVisible(),
  };
  await page.screenshot({
    path: path.join(__dirname, "two-models-simulator-desktop.png"),
    fullPage: true,
  });

  await page.goto(`${baseUrl}/contacto`, { waitUntil: "networkidle" });
  const modelOptions = await page.locator("#model-interest option").allTextContents();
  const contact = {
    fieldVisible: await page.locator("#model-interest").isVisible(),
    modelOptions,
  };

  const solutions = await inspect(
    page,
    "/soluciones",
    ["Recomendado: Bonxur 44", "Recomendado: Bonxur 30", "Bonxur 30 o combinación 30 + 44"],
  );
  const crops = await inspect(
    page,
    "/cultivos",
    ["Combina cultivos en una torre de 30 o 44 plantas."],
  );

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobile = await mobileContext.newPage();
  mobile.on("console", (message) => {
    if (message.type() === "error") errors.push(`${mobile.url()}: ${message.text()}`);
  });
  mobile.on("pageerror", (error) => errors.push(`${mobile.url()}: ${error.message}`));

  const homeMobile = await inspect(
    mobile,
    "/",
    ["Dos modelos Bonxur"],
    "two-models-home-mobile.png",
  );
  const towerMobile = await inspect(
    mobile,
    "/torre",
    ["Modelos de torres Bonxur"],
    "two-models-tower-mobile.png",
  );
  await mobile.goto(`${baseUrl}/simulador`, { waitUntil: "networkidle" });
  await mobile
    .locator('input[name="tower-model"]')
    .nth(1)
    .evaluate((element) => element.click());
  await mobile.locator("#towers").fill("10000");
  const simulatorMobile = await mobile.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    hasNaN: document.body.innerText.includes("NaN"),
    hasInfinity: document.body.innerText.includes("Infinity"),
    hasBonxur44: document.body.innerText.includes("Bonxur 44"),
    hasPlants440k: document.body.innerText.includes("440.000"),
  }));
  await mobile.screenshot({
    path: path.join(__dirname, "two-models-simulator-mobile.png"),
    fullPage: true,
  });

  console.log(
    JSON.stringify(
      {
        home,
        tower,
        simulator44,
        simulatorOverflow,
        contact,
        solutions,
        crops,
        homeMobile,
        towerMobile,
        simulatorMobile,
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
