// app/servicios/capacitacion/calliope/page.tsx
import Link from "next/link";
import Image from "next/image";

const modules = [
  { title: "Introducción a Calliope", desc: "Qué es, para qué sirve y cómo se usa en planeación energética." },
  { title: "Estructura del modelo", desc: "Tecnologías, nodos, demandas, restricciones y costos: cómo se representa el sistema." },
  { title: "Escenarios y sensibilidad", desc: "Cómo diseñar escenarios y entender el impacto en despacho y resultados." },
  { title: "Interpretación de resultados", desc: "KPIs, costos, utilización, mix tecnológico y mensajes ejecutivos." },
];

export default function CapacitacionCalliopePage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-24">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href="/servicios" className="font-semibold text-brand-green hover:underline">Servicios</Link>
          <span className="text-ink-soft">/</span>
          <Link href="/servicios/capacitacion" className="font-semibold text-ink hover:underline">Capacitación</Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Modelo de despacho en Calliope</span>
        </div>

        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Capacitación</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Modelo de despacho en Calliope
            </h1>

            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Capacitación práctica para comprender y utilizar modelos de despacho con Calliope:
              estructura, escenarios, ejecución e interpretación de resultados.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark">
                Solicitar capacitación
              </Link>
              <Link href="/servicios/capacitacion" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft">
                Volver a Capacitación
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
              <div className="relative h-52 w-full sm:h-64">
                <Image
                  src="/imagen/capacitacion/calliope1.jpg"
                  alt="Capacitación: Calliope"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-ink">¿Qué incluye?</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" /><span>Estructura del modelo y supuestos</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" /><span>Escenarios, sensibilidad y KPIs</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" /><span>Interpretación ejecutiva de resultados</span></li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark">
                    Hablar con un asesor
                  </Link>
                  <Link href="/servicios/capacitacion" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft">
                    Ver cursos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Contenido</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Temario sugerido</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Podemos adaptar el curso a: planeación, análisis de escenarios, valuación de proyectos o soporte a decisión.
              </p>
            </div>

            <Link href="/contacto" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft">
              Cotizar
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {modules.map((m) => (
              <div key={m.title} className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">{m.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-ink-muted">{m.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark">
                      Solicitar curso
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft">
                      Hacer una pregunta
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-surface-border pt-12">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">Modelos para decidir mejor</h2>
                <p className="mt-2 text-sm text-ink-muted">Aprende a estructurar y leer escenarios con enfoque práctico.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark">
                  Contactar
                </Link>
                <Link href="/servicios/capacitacion" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft">
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
