const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const path = require("node:path");

async function inspect(page, route, fileName) {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(`http://127.0.0.1:3000${route}`, { waitUntil: "networkidle" });
  const metrics = await page.evaluate(() => ({
    title: document.title,
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    h1: document.querySelector("h1")?.textContent?.trim(),
  }));
  if (fileName) {
    await page.screenshot({ path: path.join(__dirname, fileName), fullPage: true });
  }
  return { ...metrics, errors };
}

async function run() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });

  const homeDesktop = await inspect(
    await desktopContext.newPage(),
    "/",
    "global-home-desktop.png",
  );
  const towerDesktop = await inspect(
    await desktopContext.newPage(),
    "/torre",
    "global-tower-desktop.png",
  );
  const simulatorDesktop = await inspect(
    await desktopContext.newPage(),
    "/simulador",
    "global-simulator-desktop.png",
  );
  const cropsDesktop = await inspect(await desktopContext.newPage(), "/cultivos");
  const contactDesktop = await inspect(await desktopContext.newPage(), "/contacto");

  const mobilePage = await mobileContext.newPage();
  const homeMobile = await inspect(mobilePage, "/", "global-home-mobile.png");
  await mobilePage.getByRole("button", { name: "Abrir menú" }).click();
  const mobileMenuVisible = await mobilePage
    .getByRole("navigation", { name: "Navegación móvil" })
    .isVisible();

  const simulatorMobile = await inspect(
    await mobileContext.newPage(),
    "/simulador",
    "global-simulator-mobile.png",
  );

  console.log(
    JSON.stringify(
      {
        homeDesktop,
        towerDesktop,
        simulatorDesktop,
        cropsDesktop,
        contactDesktop,
        homeMobile,
        simulatorMobile,
        mobileMenuVisible,
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
