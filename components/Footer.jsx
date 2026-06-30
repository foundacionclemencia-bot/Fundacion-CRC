import Image from "next/image";

const EMAIL = "foundacion.clemencia@gmail.com";

// Rellena con las URLs reales para que aparezcan los íconos sociales.
// Mientras estén vacías, no se muestran (evita enlaces rotos/genéricos).
const SOCIAL = {
  instagram: "",
  facebook: "",
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-marino-900 text-crema/80">
      <div className="container-crc grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
              <Image
                src="/logo-crc-mark.png"
                alt="Logo de la Fundación CRC: dos figuras abrazándose formando un corazón."
                width={44}
                height={46}
                className="h-auto w-full object-contain"
              />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg font-semibold text-crema">Fundación CRC</p>
              <p className="text-xs uppercase tracking-[0.18em] text-crema/50">
                Clemencia Romero Castillo
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm font-serif text-lg italic text-dorado-light">
            “Solo vives en aquellos a quienes amaste.”
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-crema/60">
            Acompañamiento comunitario en la Ciudad de México. Para que nadie enfrente un
            momento difícil en soledad.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dorado">
            Navegación
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#historia" className="hover:text-dorado">Su historia</a></li>
            <li><a href="#programas" className="hover:text-dorado">Programas</a></li>
            <li><a href="#impacto" className="hover:text-dorado">Impacto</a></li>
            <li><a href="#transparencia" className="hover:text-dorado">Transparencia</a></li>
            <li><a href="#ayudar" className="hover:text-dorado">Cómo ayudar</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dorado">
            Contacto
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-dorado">
                {EMAIL}
              </a>
            </li>
            <li className="text-crema/60">Ciudad de México, México</li>
          </ul>
          {(SOCIAL.instagram || SOCIAL.facebook) && (
            <div className="mt-6 flex gap-3">
              {SOCIAL.instagram && (
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-crema/20 transition-colors hover:border-dorado hover:text-dorado"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              )}
              {SOCIAL.facebook && (
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-crema/20 transition-colors hover:border-dorado hover:text-dorado"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-crema/10">
        <div className="container-crc flex flex-col items-center justify-between gap-3 py-6 text-xs text-crema/50 sm:flex-row">
          <p>© {year} Fundación CRC · Clemencia Romero Castillo</p>
          <p className="text-center sm:text-right">
            Proyecto comunitario en proceso de constitución como A.C.
          </p>
        </div>
      </div>
    </footer>
  );
}
