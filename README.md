# Fundación CRC — Sitio web

Sitio web oficial de la **Fundación CRC (Clemencia Romero Castillo)**, una iniciativa de
acompañamiento comunitario en la Ciudad de México.

> _“Solo vives en aquellos a quienes amaste.”_

Construido con **Next.js 14 (App Router)** y **Tailwind CSS**, listo para desplegarse en
**Vercel** sin configuración adicional.

## Stack

| Componente | Tecnología |
|------------|------------|
| Framework  | Next.js 14 (App Router) |
| Estilos    | Tailwind CSS 3 |
| Imágenes   | next/image + sharp |
| Fuentes    | Fraunces (títulos) · Inter (texto) |
| Hosting    | Vercel |

## Requisitos

- Node.js 18.17 o superior

## Desarrollo local

```bash
npm install
npm run optimize-images   # genera /public/clemencia a partir de "fotos de Clemencia"
node scripts/process-logo.mjs  # genera el logo, isotipo y favicons desde logocrc.png
npm run dev               # http://localhost:3000
```

> El script `optimize-images` corrige la orientación EXIF, redimensiona y comprime las fotos
> originales hacia `public/clemencia/`. Solo necesitas correrlo cuando cambien las fotos.

## Producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Next.js automáticamente. No requiere variables de entorno.
4. **Deploy.** Listo.

## Estructura

```
app/
  layout.jsx        Metadatos, fuentes y SEO
  page.jsx          Página principal (todas las secciones)
  globals.css       Estilos base + paleta CRC
components/
  Navbar.jsx        Navegación fija responsive
  Footer.jsx        Pie de página y contacto
  Reveal.jsx        Animación de aparición al hacer scroll
scripts/
  optimize-images.mjs   Optimización de fotos
public/
  clemencia/        Fotos optimizadas (generadas)
  favicon.svg
fotos de Clemencia/   Fotos originales + metadata.json
```

## Paleta de marca

| Color | Hex | Uso |
|-------|-----|-----|
| Azul marino profundo | `#1B2A4A` | Primario, encabezados |
| Dorado cálido | `#C9A84C` | Acentos, calidez |
| Beige arena | `#F5F0EB` | Fondos de respiro |
| Terracota suave | `#B86B4A` | CTAs secundarios |
| Blanco cálido | `#FEFCF9` | Fondo principal |

## Contacto

📧 foundacion.clemencia@gmail.com · Ciudad de México, México
