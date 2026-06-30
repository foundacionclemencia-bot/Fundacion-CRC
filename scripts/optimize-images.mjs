// Optimiza y normaliza las fotos de Clemencia para uso web.
// - Corrige la orientacion segun EXIF (varias fotos vienen rotadas 90 grados).
// - Redimensiona a un ancho/alto razonable para web.
// - Exporta a JPG con calidad equilibrada hacia /public/clemencia.
//
// Uso: npm run optimize-images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "fotos de Clemencia");
const OUT = join(ROOT, "public", "clemencia");

// filename de origen -> { out, maxW, maxH }
const JOBS = [
  { in: "retratos/clemencia-retrato-principal.jpg", out: "clemencia-retrato-principal.jpg", w: 1100 },
  { in: "retratos/clemencia-retrato-azul.jpg", out: "clemencia-retrato-azul.jpg", w: 1100 },
  { in: "retratos/clemencia-retrato-medio.jpg", out: "clemencia-retrato-medio.jpg", w: 1400 },
  { in: "retratos/clemencia-retrato-sonriente.jpg", out: "clemencia-retrato-sonriente.jpg", w: 1200 },
  { in: "retratos/clemencia-retrato-cuerpo-entero.jpg", out: "clemencia-retrato-cuerpo-entero.jpg", w: 1200 },
  { in: "actividades/clemencia-cocinando.jpg", out: "clemencia-cocinando.jpg", w: 1400 },
  { in: "actividades/clemencia-en-restaurante.jpg", out: "clemencia-en-restaurante.jpg", w: 1600 },
];

await mkdir(OUT, { recursive: true });

for (const job of JOBS) {
  const inputPath = join(SRC, job.in);
  const outputPath = join(OUT, job.out);
  try {
    const info = await sharp(inputPath)
      .rotate() // auto-orientar segun EXIF
      .resize({ width: job.w, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outputPath);
    console.log(`✓ ${job.out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.error(`✗ Error procesando ${job.in}:`, err.message);
    process.exitCode = 1;
  }
}

console.log("\nListo. Imagenes optimizadas en /public/clemencia");
