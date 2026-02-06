import CaseCard, { CaseStudy } from "@/components/CaseCard";

const cases: CaseStudy[] = [
  {
    slug: "ejemplo-industrial-1",
    title: "Optimización eléctrica en planta industrial",
    sector: "Industrial",
    location: "CDMX",
    problem: "Alta demanda y variación de cargas en horarios pico.",
    solution: "Diagnóstico, estrategia de operación y plan de interconexión.",
    results: [
      { label: "Ahorro", value: "12–18%" },
      { label: "ROI", value: "18–24 meses" },
      { label: "Tiempo", value: "6 semanas" },
    ],
    tags: ["Diagnóstico", "Interconexión", "ROI"],
  },
];

export default function CasesSection() {
  return (
    <section className="relative bg-surface-soft border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-brand-blue">Casos</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Casos de éxito y proyectos
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Resultados reales: problema, solución y métricas clave.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
