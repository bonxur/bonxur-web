const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);

const project = path.resolve(__dirname, "..");
const node = "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe";
const next = path.join(project, "node_modules", "next", "dist", "bin", "next");
const baseUrl = "http://127.0.0.1:3012";

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  throw new Error("El servidor de QA no respondió.");
}

async function layout(page) {
  return page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
  }));
}

async function run() {
  const stdout = fs.openSync(path.join(__dirname, "content-server-stdout.log"), "w");
  const stderr = fs.openSync(path.join(__dirname, "content-server-stderr.log"), "w");
  const server = spawn(node, [next, "start", "-p", "3012"], {
    cwd: project,
    stdio: ["ignore", stdout, stderr],
    windowsHide: true,
  });

  let browser;
  try {
    await waitForServer();
    browser = await chromium.launch({
      executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
      headless: true,
    });

    const errors = [];
    const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await desktop.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`${page.url()}: ${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`${page.url()}: ${error.message}`));

    await page.goto(`${baseUrl}/cultivos`, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    const cropCards = await page.locator("article").filter({
      has: page.getByText("Ver más información", { exact: true }),
    }).count();
    await page.getByText("Ver más información", { exact: true }).first().click();
    const cropDetailsVisible = await page.getByText("Consejos básicos", { exact: true }).first().isVisible();
    const cropImages = await page.locator("article img").evaluateAll((images) =>
      images.map((image) => ({
        src: image.getAttribute("src"),
        loaded: image.complete && image.naturalWidth > 0,
      })),
    );
    const cropsLayout = await layout(page);
    await page.screenshot({
      path: path.join(__dirname, "content-crops-desktop.png"),
      fullPage: true,
    });

    await page.goto(`${baseUrl}/simulador`, { waitUntil: "networkidle" });
    const cropOptions = await page.locator("select").first().locator("option").allTextContents();

    await page.goto(`${baseUrl}/soluciones`, { waitUntil: "networkidle" });
    const solutionCards = await page.locator("article").count();
    const solutionButtons = await page.getByRole("link", { name: /Consultar solución/ }).count();
    const darkSolutionCards = await page.locator("article.bg-forest-950").count();
    const solutionsLayout = await layout(page);
    await page.screenshot({
      path: path.join(__dirname, "content-solutions-desktop.png"),
      fullPage: true,
    });

    await page.goto(`${baseUrl}/proyecto`, { waitUntil: "networkidle" });
    const futureVision = {
      section: await page.getByText("Visión de futuro", { exact: true }).isVisible(),
      ph: await page.getByText("Sensores de pH y EC", { exact: true }).isVisible(),
      remote: await page.getByText("Monitorización remota", { exact: true }).isVisible(),
      solar: await page.getByText("Integración solar", { exact: true }).isVisible(),
    };

    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobilePage = await mobile.newPage();
    mobilePage.on("console", (message) => {
      if (message.type() === "error") errors.push(`${mobilePage.url()}: ${message.text()}`);
    });
    mobilePage.on("pageerror", (error) => errors.push(`${mobilePage.url()}: ${error.message}`));

    await mobilePage.goto(`${baseUrl}/contacto`, { waitUntil: "networkidle" });
    const contactFields = {
      name: await mobilePage.locator("#name").isVisible(),
      email: await mobilePage.locator("#email").isVisible(),
      phone: await mobilePage.locator("#phone").isVisible(),
      product: await mobilePage.locator("#product-interest").isVisible(),
      substrate: await mobilePage.locator("#substrate").isVisible(),
      seeds: await mobilePage.locator("#seed-kit").isVisible(),
      nutrients: await mobilePage.locator("#nutrients").isVisible(),
      quantity: await mobilePage.locator("#quantity").isVisible(),
      city: await mobilePage.locator("#city").isVisible(),
      messageCount: await mobilePage.locator("textarea").count(),
    };
    const contactLayout = await layout(mobilePage);
    await mobilePage.screenshot({
      path: path.join(__dirname, "content-contact-mobile.png"),
      fullPage: true,
    });

    await mobilePage.goto(`${baseUrl}/cultivos`, { waitUntil: "networkidle" });
    await mobilePage.waitForTimeout(600);
    const cropsMobileLayout = await layout(mobilePage);
    await mobilePage.screenshot({
      path: path.join(__dirname, "content-crops-mobile.png"),
      fullPage: true,
    });

    console.log(
      JSON.stringify(
        {
          cropCards,
          cropDetailsVisible,
          cropImagesLoaded: cropImages.filter((image) => image.loaded).length,
          cropImagesTotal: cropImages.length,
          cropsLayout,
          cropOptions,
          solutionCards,
          solutionButtons,
          darkSolutionCards,
          solutionsLayout,
          futureVision,
          contactFields,
          contactLayout,
          cropsMobileLayout,
          consoleErrors: errors,
        },
        null,
        2,
      ),
    );
  } finally {
    if (browser) await browser.close();
    server.kill();
    fs.closeSync(stdout);
    fs.closeSync(stderr);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
