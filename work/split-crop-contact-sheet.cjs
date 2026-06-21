const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const source = path.join(__dirname, "crop-contact-sheet.png");
const outputDir = path.join(__dirname, "..", "public", "images", "cultivos");
const names = [
  "lechuga",
  "espinaca",
  "acelga",
  "kale",
  "canonigos",
  "rucula",
  "albahaca",
  "cilantro",
  "perejil",
  "menta",
  "hierbabuena",
  "cebollino",
  "fresas",
  "tomate-cherry",
];

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const metadata = await sharp(source).metadata();
  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    throw new Error("No se pudo leer el mosaico de cultivos.");
  }

  const gutterTrim = Math.max(4, Math.round(width * 0.005));

  await Promise.all(
    names.map((name, index) => {
      const column = index % 4;
      const row = Math.floor(index / 4);
      const x0 = Math.round((column * width) / 4);
      const x1 = Math.round(((column + 1) * width) / 4);
      const y0 = Math.round((row * height) / 4);
      const y1 = Math.round(((row + 1) * height) / 4);

      return sharp(source)
        .extract({
          left: x0 + gutterTrim,
          top: y0 + gutterTrim,
          width: x1 - x0 - gutterTrim * 2,
          height: y1 - y0 - gutterTrim * 2,
        })
        .resize(800, 800, { fit: "cover" })
        .jpeg({ quality: 88, mozjpeg: true })
        .toFile(path.join(outputDir, `${name}.jpg`));
    }),
  );

  console.log(`Creadas ${names.length} imágenes en ${outputDir}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
