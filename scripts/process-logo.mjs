// Genera las variantes web del logo de la Fundación CRC a partir de logocrc.png.
// - logo-crc.png       : lockup completo (isotipo + wordmark + lema), recortado.
// - logo-crc-mark.png  : solo el isotipo (abrazo/corazón + CRC) para navbar/footer.
// - favicon.png        : icono cuadrado del isotipo.
// - apple-touch-icon.png
//
// Uso: node scripts/process-logo.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "logocrc.png");
const OUT = join(ROOT, "public");

await mkdir(OUT, { recursive: true });

// 1) Lockup completo: recorta el margen blanco sobrante y normaliza ancho.
await sharp(SRC)
  .trim({ threshold: 10 })
  .resize({ width: 700, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(join(OUT, "logo-crc.png"));

// 2) Isotipo: toma la franja superior (abrazo + corazón + CRC) y la ajusta.
//    Nota: sharp aplica trim() antes que extract() en una misma cadena, por eso
//    extraemos primero a un buffer y recortamos en una segunda pasada.
const meta = await sharp(SRC).metadata();
const markHeight = Math.round(meta.height * 0.6); // el isotipo vive en el ~60% superior
const extracted = await sharp(SRC)
  .extract({ left: 0, top: 0, width: meta.width, height: markHeight })
  .toBuffer();

const markBuf = await sharp(extracted).trim({ threshold: 10 }).toBuffer();

await sharp(markBuf)
  .resize({ width: 320, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(join(OUT, "logo-crc-mark.png"));

// 3) Favicon e icono touch: isotipo centrado sobre lienzo blanco cuadrado con aire.

for (const [name, size, pad] of [
  ["favicon.png", 64, 6],
  ["apple-touch-icon.png", 180, 22],
]) {
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 254, g: 252, b: 249, alpha: 1 }, // blanco cálido CRC
    },
  })
    .composite([
      {
        input: await sharp(markBuf)
          .resize({ width: size - pad * 2, height: size - pad * 2, fit: "inside" })
          .toBuffer(),
        gravity: "center",
      },
    ])
    .png()
    .toFile(join(OUT, name));
}

console.log("✓ Logo procesado: logo-crc.png, logo-crc-mark.png, favicon.png, apple-touch-icon.png");
