import Link from "next/link";

export default function ServiciosPage() {
  const services = [
    {
      icon: "🧠",
      title: "Consultoría y Gestoría",
      desc: "Optimización de costos, estrategia de suministro, cumplimiento y acompañamiento técnico-regulatorio.",
      href: "/servicios/consultoria-gestoria",
      tags: ["Estrategia", "MEM", "Cumplimiento"],
    },
    {
      icon: "☀️",
      title: "Integrador Fotovoltaico",
      desc: "Evaluación, ingeniería, interconexión e instalación para autoconsumo industrial y comercial.",
      href: "/servicios/fotovoltaico",
      tags: ["ROI", "Interconexión", "Ingeniería"],
    },
    {
      icon: "🎓",
      title: "Capacitación Energética",
      desc: "Programas técnicos y ejecutivos a la medida para mejorar la toma de decisiones energéticas.",
      href: "/servicios/capacitacion",
      tags: ["In-company", "Talleres", "Ejecutivo"],
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* fondo suave alineado a tu paleta */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-14">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold text-brand-blue">Servicios</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Soluciones energéticas para empresas en México
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Elegimos contigo el camino más eficiente: consultoría/gestoría,
            integración fotovoltaica o capacitación para tu equipo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-xl bg-brand-green px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href="https://wa.me/5215578403155?text=Hola%20me%20interesa%20una%20asesor%C3%ADa%20con%20Energ%C3%ADa%20M%C3%A9xico"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-brand-blue/20 bg-white px-6 py-3 text-center font-semibold text-slate-900 shadow-sm transition hover:bg-brand-blue-soft"
            >
              Agendar llamada
            </a>
          </div>
        </section>

        {/* Grid de servicios */}
        <section className="space-y-6" id="lista-servicios">
          <h2 className="text-2xl font-bold text-slate-900">
            Elige el servicio que necesitas
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-brand-blue-soft flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-lg">
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-blue">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-3 text-slate-600">{s.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-semibold text-brand-green">
                  Ver detalles <span className="ml-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Cómo trabajamos</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Diagnóstico",
                d: "Revisamos tu caso y objetivos para definir el camino más eficiente.",
              },
              {
                n: "02",
                t: "Estrategia y propuesta",
                d: "Propuesta clara con alcances, tiempos y siguientes pasos.",
              },
              {
                n: "03",
                t: "Ejecución y seguimiento",
                d: "Acompañamiento continuo con comunicación y control.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-bold text-brand-blue">{p.n}</p>
                <h3 className="mt-2 font-bold text-slate-900">{p.t}</h3>
                <p className="mt-2 text-slate-600">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="rounded-3xl bg-slate-900 p-10 text-white">
          <h2 className="text-2xl font-bold">
            ¿Listo para avanzar con tu proyecto?
          </h2>
          <p className="mt-2 text-white/85 max-w-2xl">
            Cuéntanos tu caso y te proponemos el siguiente paso con claridad.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-xl bg-brand-green px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href="https://wa.me/5215578403155?text=Hola%20me%20interesa%20una%20asesor%C3%ADa%20con%20Energ%C3%ADa%20M%C3%A9xico"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 text-center font-semibold transition hover:bg-white/10"
            >
              Agendar llamada
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
