import Link from "next/link";

const pains = [
  {
    title: "Costos altos y sin control",
    desc: "Pagos elevados por demanda, energía o penalizaciones sin una estrategia clara.",
  },
  {
    title: "Proyectos detenidos o con incertidumbre",
    desc: "Falta de ruta, requisitos o viabilidad técnica y financiera para ejecutar.",
  },
  {
    title: "Riesgo regulatorio y decisiones sin datos",
    desc: "Contratos, cumplimiento y decisiones energéticas sin fundamentos técnicos.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative bg-surface-soft border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT – Cards */}
          <div className="grid gap-6 self-start">
            {pains.map((p) => (
              <div
                key={p.title}
                className="
                  relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* Accent bar */}
                <div className="mb-4 h-1.5 w-14 rounded-full bg-brand-green" />

                <h3 className="text-lg font-bold text-slate-900">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT – Copy */}
          <div className="space-y-6 self-start lg:pl-12">
            <p className="text-sm font-semibold tracking-wide text-brand-blue">
              Problemas que resolvemos
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Si esto te suena familiar, hay una solución
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-slate-700">
              Antes de invertir o ejecutar, ayudamos a entender el problema real,
              reducir riesgos y definir una ruta clara y viable.
            </p>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="
                  inline-flex items-center justify-center rounded-xl
                  bg-brand-green px-6 py-3 text-sm font-semibold text-white
                  shadow-sm transition hover:bg-brand-green-dark
                "
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
