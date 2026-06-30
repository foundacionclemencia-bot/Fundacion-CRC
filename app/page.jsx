import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const EMAIL = "foundacion.clemencia@gmail.com";

const VALORES = [
  {
    titulo: "Presencia",
    texto:
      "Estar ahí, no solo “ayudar”. La diferencia entre entregar una despensa y sentarse a comer con alguien.",
  },
  {
    titulo: "Empatía radical",
    texto:
      "Sin juicio, sin condiciones previas. Clemencia no preguntaba por qué necesitabas ayuda; simplemente la daba.",
  },
  {
    titulo: "Sencillez",
    texto:
      "Las acciones más poderosas son las más simples. Un caldo caliente, una escucha atenta, una conexión oportuna.",
  },
  {
    titulo: "Comunidad",
    texto:
      "Construir vínculos, no dependencias. El objetivo es que la comunidad se sostenga a sí misma.",
  },
  {
    titulo: "Transparencia",
    texto:
      "Cada peso recibido y cada acción realizada es visible para todos. La tecnología al servicio de la confianza.",
  },
];

const PROGRAMAS = [
  {
    id: "mesa",
    nombre: "La Mesa de Clemencia",
    bajada: "Alimentación + acompañamiento comunitario",
    texto:
      "Jornadas donde se prepara y comparte comida con personas en situación de vulnerabilidad. Los voluntarios no sirven y se van: se sientan a comer, escuchan y construyen vínculos. El alimento nutre el cuerpo; la presencia nutre el espíritu.",
    imagen: "/clemencia/clemencia-cocinando.jpg",
    alt: "Clemencia cocinando con utensilios tradicionales y ollas de barro.",
    detalle: ["Jornadas quincenales", "50–100 personas por jornada", "8–15 voluntarios"],
  },
  {
    id: "escucha",
    nombre: "Alguien Te Escucha",
    bajada: "Red de acompañamiento emocional",
    texto:
      "Una red de voluntarios capacitados en escucha activa y primeros auxilios emocionales, disponibles para personas que necesitan hablar. No es terapia profesional: cuando se detecta una necesidad clínica, se canaliza a instituciones especializadas. Escuchar sin juzgar, acompañar sin condiciones.",
    imagen: "/clemencia/clemencia-retrato-sonriente.jpg",
    alt: "Clemencia sonriendo cálidamente, en una pose relajada.",
    detalle: ["Sesiones 1:1 de 30–60 min", "Voluntarios capacitados", "Supervisión profesional"],
  },
  {
    id: "puente",
    nombre: "Puente CRC",
    bajada: "Conexión de necesidades con recursos comunitarios",
    texto:
      "Clemencia era un nodo natural de conexión: sabía quién necesitaba qué y quién podía darlo. Puente CRC sistematiza esa función. Alguien necesita trabajo, alguien más está contratando; alguien necesita ropa de invierno, otro tiene de sobra. Conectamos dentro de la misma comunidad, sin intermediarios.",
    imagen: "/clemencia/clemencia-retrato-cuerpo-entero.jpg",
    alt: "Clemencia de pie en su hogar, posando con las manos cruzadas.",
    detalle: ["Plataforma web + WhatsApp", "Empleo, ropa, servicios pro-bono", "Verificación comunitaria"],
  },
];

const POBLACION = [
  {
    titulo: "Adultos mayores en soledad",
    texto:
      "La CDMX tiene más de 1.4 millones de personas de 60+ años. Muchos viven solos o con redes familiares debilitadas.",
  },
  {
    titulo: "Familias en crisis temporal",
    texto:
      "No en pobreza extrema permanente, sino atravesando un momento difícil: pérdida de empleo, enfermedad, separación. Necesitan un puente.",
  },
  {
    titulo: "Jóvenes en riesgo de aislamiento",
    texto:
      "Adolescentes y jóvenes adultos sin redes de apoyo sólidas, en riesgo de deserción escolar o conductas autodestructivas.",
  },
  {
    titulo: "Personas en situación de calle",
    texto:
      "Para “La Mesa de Clemencia”. El contacto humano digno es tan importante como el alimento.",
  },
];

const METRICAS = [
  { valor: "1,000", label: "Personas atendidas", meta: "Meta año 1" },
  { valor: ">30%", label: "Tasa de retorno", meta: "Personas que regresan" },
  { valor: "50+", label: "Voluntarios activos", meta: "Comunidad" },
  { valor: "<15%", label: "Gasto en administración", meta: "85% va a programas" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        {/* ───────────────────────── HERO ───────────────────────── */}
        <section className="relative overflow-hidden bg-marino-800 text-crema">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #C9A84C 0, transparent 45%), radial-gradient(circle at 85% 70%, #B86B4A 0, transparent 40%)",
            }}
          />
          <div className="container-crc relative grid gap-12 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-40">
            <div className="animate-fade-up">
              <span className="eyebrow text-dorado">
                <span className="h-px w-8 bg-dorado" /> Fundación CRC
              </span>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                Para que nadie enfrente un momento difícil{" "}
                <span className="italic text-dorado-light">en soledad.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-crema/80">
                Creamos y sostenemos redes de acompañamiento comunitario en la Ciudad de México.
                No repartimos despensas y nos vamos: nos sentamos contigo. Es lo que hacía
                Clemencia, hecho comunidad.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#ayudar" className="btn-primary">
                  Quiero ayudar
                </a>
                <a href="#historia" className="btn-on-dark">
                  Conoce a Clemencia
                </a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-crema/65">
                <div>
                  <p className="font-serif text-2xl font-semibold text-crema">3</p>
                  <p>programas activos</p>
                </div>
                <div className="hidden h-10 w-px bg-crema/15 sm:block" />
                <div>
                  <p className="font-serif text-2xl font-semibold text-crema">CDMX</p>
                  <p>raíz comunitaria</p>
                </div>
                <div className="hidden h-10 w-px bg-crema/15 sm:block" />
                <div>
                  <p className="font-serif text-2xl font-semibold text-crema">100%</p>
                  <p>transparencia pública</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-dorado/20 blur-sm" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] ring-1 ring-white/15 shadow-2xl">
                  <Image
                    src="/clemencia/clemencia-retrato-principal.jpg"
                    alt="Retrato de Clemencia Romero Castillo, inspiración de la Fundación CRC."
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 28rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-marino-900/80 to-transparent p-6">
                    <p className="font-serif text-lg italic text-crema">
                      “Solo vives en aquellos a quienes amaste.”
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-dorado-light">
                      Clemencia Romero Castillo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-10 bg-gradient-to-b from-transparent to-crema" />
        </section>

        {/* ───────────────────────── HISTORIA ───────────────────────── */}
        <section id="historia" className="bg-crema py-24 lg:py-32">
          <div className="container-crc grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -bottom-5 -left-5 hidden h-40 w-40 rounded-2xl border border-dorado/40 sm:block" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="/clemencia/clemencia-retrato-medio.jpg"
                    alt="Clemencia en el interior de su hogar, vistiendo blusa estampada."
                    fill
                    sizes="(max-width: 1024px) 90vw, 32rem"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <span className="eyebrow">
                <span className="h-px w-8 bg-terracota" /> Origen y filosofía
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-marino sm:text-4xl">
                Una mujer sencilla que vivió para los demás
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-marino/75">
                <p>
                  Clemencia Romero Castillo no fundó empresas ni salió en periódicos. Sin embargo,
                  el día de su funeral, la cantidad de personas que llegaron a despedirse contó una
                  historia más poderosa que cualquier currículum: Clemencia vivió para los demás, y
                  los demás la mantuvieron viva.
                </p>
                <p>
                  Quien la necesitara —sin importar quién fuera, sin importar la hora— encontraba en
                  ella presencia. Un consejo cuando las cosas se ponían difíciles. Un plato de comida
                  cuando el hambre apretaba. Una plática cuando la soledad pesaba. Clemencia no
                  “hacía caridad”; Clemencia estaba ahí.
                </p>
              </div>
              <blockquote className="mt-8 rounded-2xl border-l-4 border-dorado bg-arena p-6">
                <p className="font-serif text-xl italic text-marino">
                  “La pregunta no es cómo ayudamos a más gente, sino cómo hacemos que más personas
                  nunca enfrenten un momento difícil solas.”
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── MISIÓN / VISIÓN ───────────────────────── */}
        <section className="bg-marino-800 py-24 text-crema lg:py-28">
          <div className="container-crc grid gap-10 md:grid-cols-2">
            <Reveal className="rounded-3xl bg-marino-700/50 p-9 ring-1 ring-white/10">
              <p className="eyebrow text-dorado">Misión</p>
              <p className="mt-5 text-xl leading-relaxed text-crema/90">
                Crear y sostener redes de acompañamiento comunitario en la Ciudad de México donde las
                personas en situación de vulnerabilidad encuentren lo que necesitan —comida, escucha,
                orientación o conexión— sin burocracia, sin juicio, con la calidez y dignidad que toda
                persona merece.
              </p>
            </Reveal>
            <Reveal className="rounded-3xl bg-marino-700/50 p-9 ring-1 ring-white/10" delay={120}>
              <p className="eyebrow text-dorado">Visión</p>
              <p className="mt-5 text-xl leading-relaxed text-crema/90">
                Que en cada comunidad donde CRC tenga presencia, nadie enfrente un momento difícil en
                soledad. Que el acompañamiento humano deje de ser un privilegio y se convierta en un
                derecho ejercido por la comunidad misma.
              </p>
            </Reveal>
          </div>

          <div className="container-crc mt-16">
            <Reveal>
              <p className="eyebrow text-terracota">Nuestros valores</p>
            </Reveal>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {VALORES.map((v, i) => (
                <Reveal
                  key={v.titulo}
                  delay={i * 80}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="font-serif text-lg font-semibold text-dorado-light">{v.titulo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-crema/70">{v.texto}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── PROGRAMAS ───────────────────────── */}
        <section id="programas" className="bg-crema py-24 lg:py-32">
          <div className="container-crc">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">
                <span className="h-px w-8 bg-terracota" /> Modelo de intervención
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-marino sm:text-4xl">
                Tres programas, un mismo principio
              </h2>
              <p className="mt-5 text-lg text-marino/70">
                Cada uno atiende una dimensión distinta de la vulnerabilidad. Todos comparten lo
                mismo: presencia humana con dignidad.
              </p>
            </Reveal>

            <div className="mt-16 space-y-16">
              {PROGRAMAS.map((p, i) => (
                <Reveal
                  key={p.id}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-lg">
                      <Image
                        src={p.imagen}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 1024px) 92vw, 28rem"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-dorado font-serif text-lg font-bold text-marino-800 shadow-lg">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracota">
                      {p.bajada}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-marino sm:text-3xl">{p.nombre}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-marino/75">{p.texto}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.detalle.map((d) => (
                        <li
                          key={d}
                          className="rounded-full bg-arena px-4 py-1.5 text-sm font-medium text-marino/80"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── POBLACIÓN OBJETIVO ───────────────────────── */}
        <section className="relative overflow-hidden bg-arena py-24 lg:py-28">
          <div className="container-crc grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-terracota" /> A quién servimos
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-marino sm:text-4xl">
                No definimos a alguien por lo que le falta
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-marino/75">
                Sino por lo que necesita. Y lo que todos estos grupos necesitan es lo mismo que
                Clemencia daba: presencia. “Vulnerabilidad” aquí no se limita a la pobreza económica
                —incluye la soledad, el aislamiento y la falta de redes de apoyo.
              </p>
              <a href="#ayudar" className="btn-primary mt-8">
                Sumarte como voluntario
              </a>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {POBLACION.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 80} className="card">
                  <h3 className="font-serif text-lg font-semibold text-marino">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-marino/70">{p.texto}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── IMPACTO ───────────────────────── */}
        <section id="impacto" className="bg-marino-900 py-24 text-crema lg:py-28">
          <div className="container-crc">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center text-dorado">
                <span className="h-px w-8 bg-dorado" /> Métricas de impacto
              </span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Lo que no se mide, no se mejora
              </h2>
              <p className="mt-5 text-lg text-crema/70">
                No medimos “despensas entregadas”, sino personas que dejaron de estar solas. Estas
                son nuestras metas para el primer año.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {METRICAS.map((m, i) => (
                <Reveal
                  key={m.label}
                  delay={i * 80}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center"
                >
                  <p className="font-serif text-4xl font-bold text-dorado-light sm:text-5xl">
                    {m.valor}
                  </p>
                  <p className="mt-3 font-medium text-crema">{m.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-crema/50">{m.meta}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── TRANSPARENCIA ───────────────────────── */}
        <section id="transparencia" className="bg-crema py-24 lg:py-32">
          <div className="container-crc grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-terracota" /> Transparencia e impacto
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-marino sm:text-4xl">
                La tecnología al servicio de la confianza
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-marino/75">
                El problema número uno de las fundaciones es la desconfianza. Por eso construimos un
                dashboard público donde cualquier persona podrá ver en tiempo real: ingresos recibidos,
                gastos realizados con evidencia y métricas de impacto. Cada peso, visible para todos.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Ingresos y gastos publicados mensualmente",
                  "Cuenta bancaria separada de finanzas personales",
                  "Regla de oro: nunca más del 15% en administración",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-marino/80">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-dorado/20 text-dorado">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-marino/10 bg-white p-7 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="font-serif text-lg font-semibold text-marino">Dashboard de impacto</p>
                  <span className="rounded-full bg-dorado/15 px-3 py-1 text-xs font-semibold text-terracota">
                    Próximamente
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Asignado a programas", pct: 85, color: "bg-marino" },
                    { label: "Ingresos recurrentes", pct: 40, color: "bg-dorado" },
                    { label: "Gasto administrativo", pct: 15, color: "bg-terracota" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-sm text-marino/70">
                        <span>{bar.label}</span>
                        <span className="font-semibold text-marino">{bar.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-arena">
                        <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-marino/60">
                  Estamos construyendo la plataforma de transparencia. Mientras tanto, puedes
                  solicitar nuestros reportes escribiéndonos directamente.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── CÓMO AYUDAR ───────────────────────── */}
        <section id="ayudar" className="relative overflow-hidden bg-marino-800 py-24 text-crema lg:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 10%, #C9A84C 0, transparent 40%), radial-gradient(circle at 10% 90%, #B86B4A 0, transparent 40%)",
            }}
          />
          <div className="container-crc relative">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center text-dorado">
                <span className="h-px w-8 bg-dorado" /> Cómo ayudar
              </span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Tú puedes ser como Clemencia para alguien más
              </h2>
              <p className="mt-5 text-lg text-crema/75">
                Hay muchas formas de sostener esta red. Elige la tuya.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  titulo: "Donar",
                  texto:
                    "Con una donación recurrente desde $50 MXN al mes haces posible las jornadas de La Mesa y la capacitación de voluntarios.",
                  cta: "Quiero donar",
                  href: `mailto:${EMAIL}?subject=Quiero%20donar%20a%20Fundaci%C3%B3n%20CRC`,
                  destacado: true,
                },
                {
                  titulo: "Ser voluntario",
                  texto:
                    "Con un compromiso mínimo de 4 horas al mes puedes cocinar, acompañar, escuchar o sumar tus habilidades.",
                  cta: "Quiero sumarme",
                  href: `mailto:${EMAIL}?subject=Quiero%20ser%20voluntario%20en%20Fundaci%C3%B3n%20CRC`,
                },
                {
                  titulo: "Aliados RSE",
                  texto:
                    "¿Tu empresa busca impacto social documentado? Construyamos una alianza con transparencia y métricas reales.",
                  cta: "Conversemos",
                  href: `mailto:${EMAIL}?subject=Alianza%20RSE%20con%20Fundaci%C3%B3n%20CRC`,
                },
              ].map((c, i) => (
                <Reveal
                  key={c.titulo}
                  delay={i * 100}
                  className={`flex flex-col rounded-3xl p-8 ring-1 ${
                    c.destacado
                      ? "bg-dorado text-marino-800 ring-dorado"
                      : "bg-white/[0.04] text-crema ring-white/10"
                  }`}
                >
                  <h3
                    className={`font-serif text-2xl font-semibold ${
                      c.destacado ? "text-marino-800" : "text-crema"
                    }`}
                  >
                    {c.titulo}
                  </h3>
                  <p
                    className={`mt-4 flex-1 leading-relaxed ${
                      c.destacado ? "text-marino-800/80" : "text-crema/70"
                    }`}
                  >
                    {c.texto}
                  </p>
                  <a
                    href={c.href}
                    className={`mt-7 ${c.destacado ? "btn bg-marino-800 text-crema hover:bg-marino-900" : "btn-on-dark"}`}
                  >
                    {c.cta}
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
              <p className="text-crema/80">
                ¿Prefieres escribirnos directamente? Estamos para conversar.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 inline-block font-serif text-xl font-semibold text-dorado-light hover:text-dorado"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
