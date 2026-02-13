// app/servicios/capacitacion/mem/page.tsx
import Link from "next/link";
import Image from "next/image";

const modules = [
  {
    title: "Fundamentos del sector eléctrico",
    desc: "Actores, reglas, productos y conceptos clave para leer el mercado sin perderte.",
  },
  {
    title: "Estructura del MEM",
    desc: "Cómo se forma el precio, qué son nodos, zonas, horarios y productos del mercado.",
  },
  {
    title: "Interpretación de datos del mercado",
    desc: "Qué indicadores revisar y cómo convertirlos en señales útiles para tu negocio.",
  },
  {
    title: "Casos de uso y decisiones",
    desc: "Aplicaciones típicas: costos, estrategia, riesgos, coberturas, proyectos y expansión.",
  },
];

export default function CapacitacionMemPage() {
  // YouTube
  const YT_URL = "https://www.youtube.com/watch?v=kCZ02WDfaH4&t=2s";
  const YT_EMBED = "https://www.youtube-nocookie.com/embed/kCZ02WDfaH4?start=2&rel=0&modestbranding=1";

  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* Background global */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-24">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href="/servicios" className="font-semibold text-brand-green hover:underline">
            Servicios
          </Link>
          <span className="text-ink-soft">/</span>
          <Link href="/servicios/capacitacion" className="font-semibold text-ink hover:underline">
            Capacitación
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Mercado Eléctrico Mexicano</span>
        </div>

        {/* HERO */}
        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Capacitación</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Mercado Eléctrico Mexicano (MEM)
            </h1>

            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Entiende el MEM con claridad: conceptos, productos, formación de precios y lectura de datos
              para tomar mejores decisiones técnicas y de negocio.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
              >
                Solicitar capacitación
              </Link>
              <Link
                href="/servicios/capacitacion"
                className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                Volver a Capacitación
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
              <div className="relative h-52 w-full sm:h-64">
                <Image
                  src="/imagen/capacitacion/mem1.jpg"
                  alt="Capacitación: Mercado Eléctrico Mexicano"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-ink">¿Qué incluye?</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Explicación clara (sin “jerga” innecesaria)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Ejemplos y casos típicos de negocio</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Lectura e interpretación de datos del MEM</span>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
                  >
                    Hablar con un asesor
                  </Link>
                  <Link
                    href="/servicios/capacitacion"
                    className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                  >
                    Ver cursos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO (estilo card) */}
        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Video</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Introducción al Mercado Eléctrico Mexicano
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Un vistazo rápido para ubicar actores, estructura del mercado y conceptos clave.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
            >
              Cotizar
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            {/* Video */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative p-4 sm:p-5">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-surface-border bg-black/5">
                    {/* ratio 16:9 sin plugin */}
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={YT_EMBED}
                        title="Introducción al Mercado Eléctrico Mexicano (MEM)"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={YT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Ver en YouTube
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                    >
                      Solicitar esta capacitación
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card lateral: “Qué verás” */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <p className="text-sm font-semibold text-ink">¿Qué verás en el video?</p>

                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                      <span>Panorama del sector eléctrico y actores</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                      <span>Cómo se organiza el MEM (alto nivel)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                      <span>Conceptos para empezar a “leer” el mercado</span>
                    </li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Recomendación</p>
                    <p className="mt-1 text-sm text-ink">
                      Si tu equipo es mixto (técnico + comercial), hacemos una sesión con ejemplos y casos reales para
                      aterrizar decisiones.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
                    >
                      Hablar con un asesor
                    </Link>
                    <Link
                      href="/servicios/capacitacion"
                      className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                    >
                      Ver más cursos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Temario / módulos */}
        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Contenido</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Temario sugerido</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Ajustamos profundidad y enfoque según el perfil del equipo (técnico, comercial, financiero o directivo).
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
            >
              Cotizar
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {modules.map((m) => (
              <div
                key={m.title}
                className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">{m.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-ink-muted">{m.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar curso
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                    >
                      Hacer una pregunta
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-16 border-t border-surface-border pt-12">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  Capacitación práctica para entender el MEM
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Diseñamos la sesión al nivel de tu equipo y a las decisiones que necesitan tomar.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
                >
                  Contactar
                </Link>
                <Link
                  href="/servicios/capacitacion"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Volver a Capacitación
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
