import Link from "next/link";

export default function NosotrosPage() {
  return (
    <main className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D5E0DA]/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E482A]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#583F66]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* HERO */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#0E482A]">Nosotros</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Claridad energética para tomar mejores decisiones
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            En Energía México acompañamos a empresas a entender, optimizar y
            ejecutar su estrategia energética con un enfoque técnico,
            regulatorio y financiero.
          </p>
        </div>

        {/* QUIÉNES SOMOS */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Quiénes somos?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Somos un equipo especializado en consultoría y gestoría energética,
              integración fotovoltaica y capacitación. Trabajamos con empresas
              que necesitan claridad para reducir costos, cumplir regulación y
              ejecutar proyectos con confianza.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              No vendemos soluciones genéricas. Analizamos cada caso con datos
              reales y priorizamos lo que genera impacto en costos, operación y
              toma de decisiones.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0E482A]/15 bg-[#D5E0DA]/40 p-8">
            <p className="text-sm font-semibold text-[#0E482A]">
              Nuestro principio
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Primero entendemos el problema. Después definimos la estrategia.
              Finalmente acompañamos la ejecución. Si algo no conviene, lo
              decimos.
            </p>
          </div>
        </section>

        {/* ENFOQUE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestro enfoque
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Técnico",
                desc: "Análisis de consumo, demanda, ingeniería eléctrica y viabilidad real.",
              },
              {
                title: "Regulatorio",
                desc: "Conocimiento del Mercado Eléctrico Mexicano y cumplimiento normativo.",
              },
              {
                title: "Financiero",
                desc: "Evaluación de costos, ahorros, ROI y toma de decisiones informadas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#0E482A]" />
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CÓMO AYUDAMOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">
            ¿Cómo ayudamos a nuestros clientes?
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Reducir costos energéticos",
              "Tomar decisiones con información clara",
              "Cumplir regulación sin fricciones",
              "Ejecutar proyectos con menor riesgo",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-24 rounded-3xl border border-[#0E482A]/20 bg-[#0E482A] p-10 text-white">
          <h2 className="text-3xl font-bold">
            ¿Quieres trabajar con un socio energético?
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Agenda un diagnóstico y conversemos sobre tu situación energética,
            objetivos y siguientes pasos.
          </p>

          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0E482A] shadow-sm transition hover:brightness-95"
          >
            Agendar diagnóstico
          </Link>
        </section>
      </div>
    </main>
  );
}
