// app/servicios/gestoria/cfe-baja-tension-y-media/page.tsx
import Link from "next/link";
import Image from "next/image";

function toId(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const subservices = [
  {
    title: "Prefactibilidad de carga",
    desc: "Evaluación preliminar para estimar viabilidad, restricciones y próximos pasos antes de entrar al trámite formal con CFE.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Cambio de nombre",
    desc: "Acompañamiento para actualizar titularidad del servicio: requisitos, documentación y seguimiento hasta el cierre.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Nuevo servicio",
    desc: "Gestión integral para alta de nuevo servicio: checklist por caso, documentación y seguimiento con CFE.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Incremento de demanda",
    desc: "Evaluación y gestión del incremento de demanda, considerando restricciones técnicas y ruta de atención con CFE.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Interconexión",
    desc: "Acompañamiento para interconexión: ruta del trámite, entregables, observaciones y cierre del proceso.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
].map((s) => ({ ...s, id: toId(s.title) }));

export default function CfeBajaTensionYMediaPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* Background global (misma línea visual) */}
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
          <Link href="/servicios/gestoria" className="font-semibold text-ink hover:underline">
            Gestoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">CFE baja tensión y media</span>
        </div>

        {/* HERO */}
        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Gestoría</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              CFE baja tensión y media
            </h1>

            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Trámites y acompañamiento para avanzar con CFE de forma clara: prefactibilidad, alta de
              servicio, cambios administrativos, incrementos y procesos de interconexión. Reducimos
              fricción, tiempos y errores con una ruta definida.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="#subservicios"
                className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                Ver subservicios
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
              <div className="relative h-52 w-full sm:h-64">
                <Image
                  src="/imagen/gestoria/cfe-baja-media.jpg"
                  alt="CFE baja tensión y media"
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
                    <span>Ruta de trámite y checklist por caso</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Documentación, formatos y validaciones</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Seguimiento y resolución de observaciones</span>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
                  >
                    Hablar con un consultor
                  </Link>
                  <Link
                    href="/servicios/gestoria"
                    className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                  >
                    Volver a Gestoría
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subservicios */}
        <section id="subservicios" className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Alcances</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Subservicios de CFE baja tensión y media
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                El Problema/Solución es el mismo para este bloque. Las descripciones son propuestas
                iniciales y se pueden ajustar.
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
            {subservices.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">{s.title}</h3>

                  <p className="mt-2 max-w-3xl text-sm text-ink-muted">{s.desc}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Problema
                      </p>
                      <p className="mt-1 text-sm text-ink">{s.problem}</p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Solución
                      </p>
                      <p className="mt-1 text-sm text-ink">{s.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar trámite
                    </Link>

                    {/* útil si luego quieres copiar/pegar el link exacto */}
                    <Link
                      href={`/servicios/gestoria/cfe-baja-tension-y-media#${s.id}`}
                      className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                    >
                      Copiar enlace
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
                  Menos fricción, más claridad con CFE
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Te ayudamos a avanzar con una ruta clara, documentación completa y seguimiento puntual.
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
                  href="/servicios/gestoria"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Volver a Gestoría
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
