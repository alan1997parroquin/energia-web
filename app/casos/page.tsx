import Link from "next/link";
import CaseCard, { CaseStudy } from "@/components/CaseCard";

const cases: CaseStudy[] = [
  {
    slug: "optimizacion-tarifa-industria",
    title: "Optimización de costos por estrategia de tarifa y demanda",
    sector: "Industria / Manufactura",
    location: "México",
    problem:
      "Costos altos por demanda y estrategia de consumo sin priorización de acciones.",
    solution:
      "Diagnóstico energético, análisis de demanda/tarifa y plan de optimización con seguimiento.",
    results: [
      { label: "Ahorro estimado", value: "—" },
      { label: "Tiempo", value: "—" },
      { label: "Enfoque", value: "Tarifa/Demanda" },
    ],
    tags: ["Consultoría", "Optimización", "Tarifas"],
  },
  {
    slug: "interconexion-fv-comercio",
    title: "Proyecto FV con ruta de interconexión y viabilidad financiera",
    sector: "Comercio / Retail",
    location: "México",
    problem:
      "Proyecto solar sin claridad en viabilidad, requisitos y ruta de interconexión.",
    solution:
      "Evaluación técnica/financiera, ingeniería base y acompañamiento en interconexión.",
    results: [
      { label: "Capacidad", value: "—" },
      { label: "Payback", value: "—" },
      { label: "Estatus", value: "Ruta clara" },
    ],
    tags: ["Fotovoltaico", "Interconexión", "ROI"],
  },
  {
    slug: "capacitacion-mem-equipo",
    title: "Capacitación MEM y toma de decisiones para equipo directivo",
    sector: "Servicios / Corporativo",
    location: "México",
    problem:
      "Equipo sin claridad del MEM y criterios de decisión para contratos/proyectos.",
    solution:
      "Programa a la medida con fundamentos, casos prácticos y checklist de decisiones.",
    results: [
      { label: "Formato", value: "In-company" },
      { label: "Nivel", value: "Ejecutivo" },
      { label: "Resultado", value: "Decisión clara" },
    ],
    tags: ["Capacitación", "MEM", "Decisiones"],
  },
];

export default function CasosPage() {
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
          <p className="text-sm font-semibold text-[#0E482A]">Casos de éxito</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Resultados medibles y ejecución con claridad
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Presentamos ejemplos de cómo abordamos retos energéticos con enfoque
            técnico, regulatorio y financiero.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Quiero un diagnóstico
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
        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl border border-[#0E482A]/20 bg-[#0E482A] p-10 text-white">
          <h2 className="text-3xl font-bold">
            ¿Quieres un caso similar en tu empresa?
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Agenda un diagnóstico y te damos una ruta clara con prioridades,
            tiempos y siguientes pasos.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0E482A] shadow-sm transition hover:brightness-95"
          >
            Solicitar diagnóstico
          </Link>
        </section>
      </div>
    </main>
  );
}
