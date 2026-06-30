// Genera la imagen para compartir en redes (Open Graph / Twitter), 1200x630,
// con la identidad de la Fundación CRC: fondo marino, logo del abrazo y lema.
//
// Uso: node scripts/make-og.mjs
import sharp from "sharp";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "og-image.png");
const MARK = join(ROOT, "public", "logo-crc-mark.png");

const W = 1200;
const H = 630;

// Lienzo de fondo con sutiles destellos cálidos sobre azul marino.
const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="18%" cy="22%" r="55%">
      <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="88%" cy="85%" r="50%">
      <stop offset="0%" stop-color="#B86B4A" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#B86B4A" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#1B2A4A"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>
  <rect x="0" y="0" width="${W}" height="10" fill="#C9A84C"/>
</svg>`);

// Capa de texto. Usamos serifa del sistema (Georgia/DejaVu) para el render.
const text = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .kicker { font-family: Georgia, 'Times New Roman', serif; fill:#C9A84C; font-size:26px; letter-spacing:6px; text-transform:uppercase; }
    .title  { font-family: Georgia, 'Times New Roman', serif; fill:#FEFCF9; font-size:78px; font-weight:700; }
    .tag    { font-family: Georgia, 'Times New Roman', serif; fill:#D9BE73; font-size:42px; font-style:italic; }
    .sub    { font-family: Georgia, 'Times New Roman', serif; fill:#FEFCF9; fill-opacity:0.78; font-size:28px; }
  </style>
  <text x="470" y="180" class="kicker">Fundación CRC</text>
  <text x="470" y="270" class="title">Estamos aquí.</text>
  <text x="470" y="356" class="title">Contigo.</text>
  <text x="470" y="436" class="sub">Acompañamiento comunitario · Ciudad de México</text>
  <line x1="472" y1="476" x2="700" y2="476" stroke="#C9A84C" stroke-width="3"/>
  <text x="470" y="528" class="tag">“Para que nadie esté solo.”</text>
</svg>`);

const markResized = await sharp(MARK)
  .resize({ width: 300, height: 300, fit: "inside" })
  .toBuffer();

await sharp(bg)
  .composite([
    // tarjeta blanca redondeada detrás del logo para que el isotipo resalte
    {
      input: Buffer.from(
        `<svg width="360" height="360" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="360" rx="40" fill="#FEFCF9"/></svg>`
      ),
      left: 70,
      top: 135,
    },
    { input: markResized, left: 100, top: 165 },
    { input: text, left: 0, top: 0 },
  ])
  .png()
  .toFile(OUT);

console.log("✓ OG image generada: public/og-image.png (1200x630)");
