import Link from "next/link";

const sectors = [
  {
    title: "Industria / Manufactura",
    desc: "Operaciones con alto consumo, demanda y continuidad crítica. Enfoque en ahorro, confiabilidad y cumplimiento.",
    pains: ["Altos costos por demanda", "Procesos 24/7", "Riesgo por paros", "Optimización de tarifa"],
    href: "/sectores/industria",
    accent: "bg-[#0E482A]",
  },
  {
    title: "Comercio / Retail",
    desc: "Sucursales, centros comerciales y cargas variables. Enfoque en control, estandarización y eficiencia.",
    pains: ["Variación de consumo", "Múltiples medidores", "Control de gasto", "FV en techos"],
    href: "/sectores/comercio",
    accent: "bg-[#7D968B]",
  },
  {
    title: "Alimentos y Refrigeración",
    desc: "Cadena de frío y operación constante. Enfoque en continuidad, eficiencia y soporte técnico.",
    pains: ["Cargas constantes", "Riesgo por fallas", "Costos altos", "Mejora de operación"],
    href: "/sectores/alimentos-refrigeracion",
    accent: "bg-[#583F66]",
  },
  {
    title: "Servicios / Corporativo",
    desc: "Edificios, oficinas y servicios. Enfoque en eficiencia, cumplimiento y proyectos FV.",
    pains: ["Consumo diurno", "Eficiencia energética", "Gestión de contratos", "Capacitación interna"],
    href: "/sectores/corporativo",
    accent: "bg-[#0E482A]",
  },
];

export default function SectoresPage() {
  return (
    <main className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D5E0DA]/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E482A]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#583F66]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#0E482A]">Sectores</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Soluciones energéticas por sector
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Cada industria tiene retos distintos. Adaptamos consultoría/gestoría,
            fotovoltaico y capacitación según tu operación y objetivos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Solicitar diagnóstico
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Grid */}
        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          {sectors.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#0E482A]">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {s.desc}
                  </p>
                </div>
                <div className={`h-10 w-10 rounded-2xl ${s.accent}`} />
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.pains.map((p) => (
                  <div
                    key={p}
                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800"
                  >
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                Ver soluciones del sector
                <span className="transition group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-[#0E482A]/20 bg-[#0E482A] p-10 text-white">
          <h2 className="text-3xl font-bold">
            ¿No ves tu sector? No pasa nada.
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Cuéntanos tu operación y adaptamos la estrategia energética a tu caso.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0E482A] shadow-sm transition hover:brightness-95"
          >
            Hablar con un experto
          </Link>
        </section>
      </div>
    </main>
  );
}
