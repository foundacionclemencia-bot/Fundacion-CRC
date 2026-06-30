import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://fundacion-crc.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fundación CRC — Clemencia Romero Castillo",
    template: "%s · Fundación CRC",
  },
  description:
    "Acompañamiento comunitario en la Ciudad de México. Creamos redes para que nadie enfrente un momento difícil en soledad. Inspirados en Clemencia Romero Castillo.",
  keywords: [
    "Fundación CRC",
    "Clemencia Romero Castillo",
    "acompañamiento comunitario",
    "voluntariado CDMX",
    "ayuda social Ciudad de México",
  ],
  authors: [{ name: "Fundación CRC" }],
  openGraph: {
    title: "Fundación CRC — Clemencia Romero Castillo",
    description:
      "Creamos redes de acompañamiento para que nadie enfrente un momento difícil en soledad.",
    url: SITE_URL,
    siteName: "Fundación CRC",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fundación CRC — Estamos aquí. Contigo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación CRC — Clemencia Romero Castillo",
    description:
      "Creamos redes de acompañamiento para que nadie enfrente un momento difícil en soledad.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport = {
  themeColor: "#1B2A4A",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundación CRC — Clemencia Romero Castillo",
  alternateName: "Fundación CRC",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-crc.png`,
  image: `${SITE_URL}/og-image.png`,
  slogan: "Estamos aquí. Contigo.",
  description:
    "Acompañamiento comunitario en la Ciudad de México. Creamos redes para que nadie enfrente un momento difícil en soledad.",
  email: "foundacion.clemencia@gmail.com",
  foundingLocation: "Ciudad de México, México",
  areaServed: { "@type": "City", name: "Ciudad de México" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
