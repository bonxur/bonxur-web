const { chromium } = require(
  "C:\\Users\\cacha\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\.pnpm\\playwright@1.60.0\\node_modules\\playwright",
);
const sharp = require(
  "C:\\Users\\cacha\\Documents\\Codex\\2026-06-10\\crea-una-web-para-bonxur-con\\node_modules\\sharp",
);
const path = require("node:path");

const workspace =
  "C:\\Users\\cacha\\Documents\\Codex\\2026-06-10\\crea-una-web-para-bonxur-con";
const outputDir = path.join(workspace, "public", "images");
const sourceLogo = path.join(workspace, "work", "bonxur-logo-page.png");
const sourceViewer = path.join(workspace, "work", "bonxur-logo-viewer.png");

async function makeTransparent(input, output, crop, width, light = false) {
  const { data, info } = await sharp(input)
    .extract(crop)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const minimum = Math.min(red, green, blue);

    if (minimum > 248) {
      data[index + 3] = 0;
      continue;
    }

    if (minimum > 210) {
      data[index + 3] = Math.min(255, (248 - minimum) * 7);
    }

    if (light && red < 90 && green < 90 && blue < 90) {
      data[index] = 255;
      data[index + 1] = 255;
      data[index + 2] = 255;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .resize({ width, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(output);
}

async function prepareLogo() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 1000 },
  });
  const page = await context.newPage();
  await page.goto(
    "file:///C:/Users/cacha/Downloads/Copia%20de%20LOGO%20BONXUR.pdf#page=1",
  );
  await page.waitForTimeout(2500);
  await page.screenshot({
    path: sourceViewer,
  });
  await browser.close();

  await sharp(sourceViewer)
    .extract({ left: 450, top: 48, width: 500, height: 500 })
    .toFile(sourceLogo);

  await makeTransparent(
    sourceLogo,
    path.join(outputDir, "bonxur-logo-stacked.png"),
    { left: 55, top: 55, width: 390, height: 400 },
    760,
  );
  await makeTransparent(
    sourceLogo,
    path.join(outputDir, "bonxur-symbol.png"),
    { left: 135, top: 55, width: 230, height: 300 },
    420,
  );
  await makeTransparent(
    sourceLogo,
    path.join(outputDir, "bonxur-wordmark.png"),
    { left: 55, top: 360, width: 390, height: 100 },
    720,
  );
  await makeTransparent(
    sourceLogo,
    path.join(outputDir, "bonxur-wordmark-light.png"),
    { left: 55, top: 360, width: 390, height: 100 },
    720,
    true,
  );
}

async function preparePhotos() {
  const photos = [
    ["C:\\Users\\cacha\\Downloads\\image0.jpeg", "bonxur-30.webp", 1600],
    ["C:\\Users\\cacha\\Downloads\\image1.jpeg", "bonxur-44.webp", 1600],
    ["C:\\Users\\cacha\\Downloads\\image2.png", "bonxur-cultivo.webp", 1400],
  ];

  for (const [input, fileName, width] of photos) {
    await sharp(input)
      .autoOrient()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 6 })
      .toFile(path.join(outputDir, fileName));
  }
}

async function run() {
  await Promise.all([prepareLogo(), preparePhotos()]);

  for (const fileName of [
    "bonxur-logo-stacked.png",
    "bonxur-symbol.png",
    "bonxur-wordmark.png",
    "bonxur-wordmark-light.png",
    "bonxur-30.webp",
    "bonxur-44.webp",
    "bonxur-cultivo.webp",
  ]) {
    const metadata = await sharp(path.join(outputDir, fileName)).metadata();
    console.log(fileName, `${metadata.width}x${metadata.height}`, metadata.format);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
