const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);

const project = path.resolve(__dirname, "..");
const node = "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe";
const next = path.join(project, "node_modules", "next", "dist", "bin", "next");
const baseUrl = "http://127.0.0.1:3011";

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

async function inspect(page, route, screenshot) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  const result = await page.evaluate(() => ({
    title: document.title,
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    h1: document.querySelector("h1")?.textContent?.trim(),
    hasRemovedModel:
      document.body.innerText.includes("Bonxur 44") ||
      document.body.innerText.includes("44 plantas") ||
      document.body.innerText.includes("2 metros"),
  }));
  await page.screenshot({ path: path.join(__dirname, screenshot), fullPage: true });
  return result;
}

async function run() {
  const stdout = fs.openSync(path.join(__dirname, "storefront-server-stdout.log"), "w");
  const stderr = fs.openSync(path.join(__dirname, "storefront-server-stderr.log"), "w");
  const server = spawn(node, [next, "start", "-p", "3011"], {
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
    const desktopPage = await desktop.newPage();
    desktopPage.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    desktopPage.on("pageerror", (error) => errors.push(error.message));

    const home = await inspect(desktopPage, "/", "storefront-home-desktop.png");
    const homeProducts = await desktopPage.locator("article").filter({
      has: desktopPage.getByText("Comprar torre", { exact: true }),
    }).count();
    const bundleVisible = await desktopPage.getByText("Más recomendado", { exact: true }).isVisible();
    const homePaymentHrefs = {
      torre: await desktopPage.getByRole("link", { name: /Comprar torre/ }).getAttribute("href"),
      starterPack: await desktopPage
        .getByRole("link", { name: /Configurar Starter Pack/ })
        .getAttribute("href"),
      bundle: await desktopPage.getByRole("link", { name: /Comprar Bundle/ }).getAttribute("href"),
    };

    const tower = await inspect(desktopPage, "/torre", "storefront-tower-desktop.png");
    const faqCount = await desktopPage.locator("details").count();
    const priceVisible = await desktopPage.getByText("179,99 €", { exact: true }).first().isVisible();
    const towerHeroPaymentHref = await desktopPage
      .getByRole("link", { name: /Comprar torre/ })
      .first()
      .getAttribute("href");

    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobilePage = await mobile.newPage();
    mobilePage.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    mobilePage.on("pageerror", (error) => errors.push(error.message));

    const simulator = await inspect(
      mobilePage,
      "/simulador",
      "storefront-simulator-mobile.png",
    );
    const modelSelectorCount = await mobilePage.locator('input[name="tower-model"]').count();
    await mobilePage.locator("#towers").fill("10000");
    const simulatorValues = {
      plants: await mobilePage.getByText("300.000", { exact: true }).first().isVisible(),
      occupiedArea: await mobilePage.getByText("5.000", { exact: true }).first().isVisible(),
      hasNaN: await mobilePage.getByText("NaN", { exact: true }).count(),
      hasInfinity: await mobilePage.getByText("Infinity", { exact: true }).count(),
    };

    const contact = await inspect(
      mobilePage,
      "/contacto",
      "storefront-contact-mobile.png",
    );
    const contactFields = {
      product: await mobilePage.locator("#product-interest").isVisible(),
      substrate: await mobilePage.locator("#substrate").isVisible(),
      seeds: await mobilePage.locator("#seed-kit").isVisible(),
      nutrients: await mobilePage.locator("#nutrients").isVisible(),
    };

    console.log(
      JSON.stringify(
        {
          home,
          homeProducts,
          bundleVisible,
          homePaymentHrefs,
          tower,
          faqCount,
          priceVisible,
          towerHeroPaymentHref,
          simulator,
          modelSelectorCount,
          simulatorValues,
          contact,
          contactFields,
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
