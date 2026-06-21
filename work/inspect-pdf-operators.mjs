import fs from "node:fs/promises";

globalThis.DOMMatrix = class DOMMatrix {};
globalThis.ImageData = class ImageData {};
globalThis.Path2D = class Path2D {};

const pdfjs = await import(
  "file:///C:/Users/cacha/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pdfjs-dist/legacy/build/pdf.mjs"
);

const data = new Uint8Array(
  await fs.readFile("C:/Users/cacha/Downloads/Copia de LOGO BONXUR.pdf"),
);
const document = await pdfjs.getDocument({ data, disableFontFace: true }).promise;
const page = await document.getPage(1);
const operations = await page.getOperatorList();

console.log("pages", document.numPages, "viewport", page.getViewport({ scale: 1 }));

for (let index = 0; index < operations.fnArray.length; index += 1) {
  const name =
    Object.entries(pdfjs.OPS).find(([, value]) => value === operations.fnArray[index])?.[0] ??
    operations.fnArray[index];
  console.log(index, name, JSON.stringify(operations.argsArray[index]));
}
