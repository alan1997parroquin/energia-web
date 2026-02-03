import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu caso, objetivos y restricciones para ubicar el problema real.",
  },
  {
    n: "02",
    title: "Estrategia y propuesta",
    desc: "Definimos el camino: alcances, tiempos, costos, riesgos y siguientes pasos.",
  },
  {
    n: "03",
    title: "Ejecución y gestión",
    desc: "Acompañamos la implementación, trámites y coordinación técnica sin sorpresas.",
  },
  {
    n: "04",
    title: "Seguimiento y optimización",
    desc: "Medimos resultados, ajustamos y dejamos una ruta clara para mantener mejoras.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* fondo suave (similar al mockup) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/35 via-white to-white" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT copy */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-brand-blue">Cómo trabajamos</p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Un proceso simple, técnico y sin sorpresas
            </h2>

            <p className="text-sm leading-relaxed text-slate-600">
              Nos enfocamos en claridad: primero diagnóstico, luego estrategia y
              después ejecución con seguimiento. Así evitas decisiones a ciegas y
              reduces riesgos técnicos y regulatorios.
            </p>

            <div className="pt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-green-dark hover:shadow-lg"
              >
                Solicitar diagnóstico
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl border-2 border-brand-blue bg-white px-6 py-3 text-sm font-semibold text-brand-blue shadow-sm transition hover:bg-brand-blue-soft"
              >
                Ver servicios
              </Link>
            </div>

            {/* mini trust row */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                Enfoque MEM / CFE
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Viabilidad financiera (ROI)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-warning" />
                Cumplimiento y riesgo
              </span>
            </div>
          </div>

          {/* RIGHT steps */}
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-brand-blue">
                      {s.n}
                    </p>
                    <h3 className="text-base font-bold text-slate-900">
                      {s.title}
                    </h3>
                  </div>

                  {/* badge */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-green-soft border border-brand-green/15">
                    <span className="text-brand-green font-bold">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>

                {/* accent line */}
                <div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green opacity-30 transition group-hover:opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
