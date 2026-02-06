import Link from "next/link";
import Image from "next/image";

export default function ConsultoriaPage() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-brand-blue">Servicios</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              Consultoría Energética
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Te ayudamos a tomar decisiones energéticas con datos y estrategia:
              consumo, tarifas, suministro y escenarios para reducir costo y riesgo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/servicios/gestoria"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Ver gestoría
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/15 bg-white/95 shadow-xl">
              <div className="relative h-64 w-full sm:h-72">
                <Image
                  src="/imagen/services/consultoria.jpg"
                  alt="Consultoría energética"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">
                    Estrategia energética
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Tarifas • Suministro • Análisis
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">
                  En qué te apoyamos
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Diagnóstico de consumo y demanda</li>
                  <li>• Optimización tarifaria y contractual</li>
                  <li>• Estrategia de suministro eléctrico</li>
                  <li>• Análisis costo-beneficio y escenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RESTO DE CONTENIDO */}
        <section className="mt-20 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            ¿Cuándo conviene una consultoría energética?
          </h2>
          <p className="max-w-3xl text-slate-600">
            Cuando el gasto eléctrico crece, hay incertidumbre en tarifas o contratos,
            o necesitas justificar decisiones con números (no con suposiciones).
          </p>
        </section>
      </div>
    </main>
  );
}
