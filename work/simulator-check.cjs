const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");
const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3000";

const scaleCases = [
  [2, "Ideal para autoconsumo o prueba pequeña."],
  [3, "Interesante para restaurante, terraza amplia o pequeño proyecto."],
  [11, "Adecuado para prueba piloto agrícola."],
  [31, "Instalación agrícola o comercial de tamaño medio."],
  [201, "Proyecto productivo grande que requiere estudio técnico."],
  [1001, "Instalación profesional a gran escala. Recomendamos estudio personalizado."],
];

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });

  const errors = [];
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await desktopContext.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(`${baseUrl}/simulador`, { waitUntil: "networkidle" });

  const area = page.locator("#area");
  const towers = page.locator("#towers");
  const defaults = {
    area: await area.inputValue(),
    towers: await towers.inputValue(),
  };

  await area.fill("100001");
  await towers.fill("10001");
  const maximumClamp = {
    area: await area.inputValue(),
    towers: await towers.inputValue(),
  };

  await area.fill("100000");
  await towers.fill("10000");
  const largeProject = {
    plantsFormatted: await page.getByText("300.000", { exact: true }).first().isVisible(),
    occupiedAreaFormatted: await page.getByText("5000", { exact: true }).first().isVisible(),
    occupancyFormatted: await page.getByText("5%", { exact: true }).first().isVisible(),
    recommendation: await page
      .getByText(
        "Instalación profesional a gran escala. Recomendamos estudio personalizado.",
        { exact: true },
      )
      .isVisible(),
  };

  await area.fill("1");
  await towers.fill("10000");
  const warningText =
    "Con esta configuración, las torres ocuparían más superficie de la disponible. Reduce el número de torres o aumenta el espacio.";
  const overflow = {
    occupancyFormatted: await page.getByText("500.000%", { exact: true }).isVisible(),
    warningVisible: (await page.getByText(warningText, { exact: true }).count()) >= 1,
  };

  await area.fill("");
  await towers.fill("");
  const bodyWithEmptyInputs = await page.locator("body").innerText();
  const emptyInputsAreSafe =
    !bodyWithEmptyInputs.includes("NaN") && !bodyWithEmptyInputs.includes("Infinity");
  await page.getByText("Resultado visual", { exact: true }).click();
  const emptyBlurClamp = {
    area: await area.inputValue(),
    towers: await towers.inputValue(),
  };

  await area.fill("0");
  await towers.fill("0");
  const minimumClamp = {
    area: await area.inputValue(),
    towers: await towers.inputValue(),
  };

  await area.fill("100");
  const scaleRecommendations = [];
  for (const [towerCount, message] of scaleCases) {
    await towers.fill(String(towerCount));
    scaleRecommendations.push({
      towerCount,
      visible: await page.getByText(message, { exact: true }).isVisible(),
    });
  }

  await towers.fill("3");
  const decimalFormatting = {
    occupiedArea: await page.getByText("1,5", { exact: true }).first().isVisible(),
    occupancy: await page.getByText("1,5%", { exact: true }).isVisible(),
  };

  await page.screenshot({
    path: path.join(__dirname, "simulator-scalable-desktop.png"),
    fullPage: true,
  });

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobile = await mobileContext.newPage();
  mobile.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  mobile.on("pageerror", (error) => errors.push(error.message));
  await mobile.goto(`${baseUrl}/simulador`, { waitUntil: "networkidle" });
  await mobile.locator("#area").fill("1");
  await mobile.locator("#towers").fill("10000");
  const mobileMetrics = await mobile.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    hasNaN: document.body.innerText.includes("NaN"),
    hasInfinity: document.body.innerText.includes("Infinity"),
  }));
  await mobile.screenshot({
    path: path.join(__dirname, "simulator-scalable-mobile.png"),
    fullPage: true,
  });

  console.log(
    JSON.stringify(
      {
        defaults,
        maximumClamp,
        largeProject,
        overflow,
        emptyInputsAreSafe,
        emptyBlurClamp,
        minimumClamp,
        scaleRecommendations,
        decimalFormatting,
        mobile: mobileMetrics,
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
