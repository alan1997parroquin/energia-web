// app/servicios/capacitacion/certificaciones/page.tsx
import Link from "next/link";
import Image from "next/image";

const modules = [
  { title: "Ruta de preparación", desc: "Diagnóstico inicial, metas, plan de estudio y enfoque por perfil." },
  { title: "Conceptos y normativa clave", desc: "Marco regulatorio y fundamentos que suelen evaluarse." },
  { title: "Ejercicios guiados", desc: "Resolución paso a paso y práctica orientada a examen." },
  { title: "Simulaciones", desc: "Simulacros, retroalimentación y cierre de brechas antes de presentar." },
];

export default function CapacitacionCertificacionesPage() {
  // YouTube (Energía México)
  const YT_URL = "https://youtu.be/BiTCG5pL4-E";
  const YT_EMBED = "https://www.youtube-nocookie.com/embed/BiTCG5pL4-E?rel=0&modestbranding=1";

  // YouTube (Referencia CENACE)
  const REF_URL = "https://www.youtube.com/watch?v=6pcFY1ZuRVI&t=13s";
  const REF_EMBED = "https://www.youtube-nocookie.com/embed/6pcFY1ZuRVI?start=13&rel=0&modestbranding=1";

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
          <span className="font-semibold text-ink">Preparación para certificaciones</span>
        </div>

        {/* HERO */}
        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Capacitación</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Preparación para certificaciones
            </h1>

            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Sesiones estructuradas para preparar a tu equipo: diagnóstico, plan, ejercicios, simulaciones y feedback.
              Enfocado en cerrar brechas y mejorar resultados.
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
                  src="/imagen/capacitacion/certificaciones1.jpg"
                  alt="Capacitación: Certificaciones"
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
                    <span>Diagnóstico y plan por perfil</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Ejercicios y simulaciones</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Retroalimentación para cerrar brechas</span>
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
              <p className="text-sm font-semibold text-brand-green">Videos</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Material clave para certificaciones</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Video principal (Energía México) + referencia externa (CENACE) para ubicar el uso del SIM / Web SIM.
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
            {/* Video principal */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">Introducción al Sistema de Información de Mercado (SIM)</p>
                      <p className="mt-1 text-sm text-ink-muted">
                        Base práctica para preparación: qué consultar, cómo navegar y qué datos suelen pedirse.
                      </p>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-surface-border bg-white px-3 py-1 text-xs font-semibold text-ink">
                      Energía México
                    </span>
                  </div>

                  <div className="mt-4 relative w-full overflow-hidden rounded-2xl border border-surface-border bg-black/5">
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={YT_EMBED}
                        title="Introducción al Sistema de Información de Mercado (SIM)"
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
                      Solicitar esta preparación
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card lateral */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <p className="text-sm font-semibold text-ink">¿Qué te llevas?</p>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                      <span>Checklist de temas y ejercicios por certificación</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                      <span>Práctica guiada y simulaciones con feedback</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                      <span>Enfoque en brechas reales del equipo</span>
                    </li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Recomendación</p>
                    <p className="mt-1 text-sm text-ink">
                      Si tienes fecha de examen, armamos un plan con hitos semanales, simulacros y revisión de errores.
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

              {/* Video referencia (CENACE) */}
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">¿Qué es el WEB SIM de CENACE?</p>
                      <p className="mt-1 text-sm text-ink-muted">
                        Referencia externa para ubicar el portal y su propósito.
                      </p>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-surface-border bg-white px-3 py-1 text-xs font-semibold text-ink">
                      Referencia (CENACE)
                    </span>
                  </div>

                  <div className="mt-4 relative w-full overflow-hidden rounded-2xl border border-surface-border bg-black/5">
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={REF_EMBED}
                        title="¿Qué es el WEB SIM de CENACE? (Referencia)"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={REF_URL}
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
                      Preparar a mi equipo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ruta / módulos */}
        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Contenido</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Ruta sugerida</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Ajustamos el plan según fecha objetivo, nivel de entrada y temas prioritarios.
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
                      Solicitar preparación
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
                <h2 className="text-2xl font-bold tracking-tight text-ink">Prepárate con estructura</h2>
                <p className="mt-2 text-sm text-ink-muted">Plan, práctica y simulaciones para mejorar resultados.</p>
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
