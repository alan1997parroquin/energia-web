// app/servicios/consultoria/estudios-especificos/page.tsx
import Link from "next/link";
import Image from "next/image";

const subservices = [
  {
    title: "Análisis de mercado Eléctrico Mayorista",
    // ✅ Descripción particular (propuesta)
    desc: "Convertimos datos del MEM en información útil: precios, nodos, tendencias y escenarios para decidir con claridad.",
    // ✅ Problema / Solución (cliente)
    problem:
      "Aunque la información de mercado es pública y disponible, no es sencillo realizar un análisis que ayude a comprender su dinámica.",
    solution:
      "A través de estadística descriptiva e inferencial procesamos millones de datos para convertirlos en decisiones informadas y valiosas.",
  },
  {
    title: "Investigación específica (cualquier cosa no listada)",
    desc: "Estudios a la medida para responder preguntas específicas del negocio: definimos alcance, método y entregables claros.",
    problem:
      "La oferta de servicios de consultoría en México está muy definida, y enfocada a soluciones técnicas complejas y difíciles de entender, lo que hace difícil encontrar el balance adecuado entre investigación y valor comercial.",
    solution:
      "Desarrollamos estudios orientados a decisiones de negocio y no solo técnicas, dando la posibilidad de evaluar proyectos desde el punto de vista del inversionista con un lenguaje sencillo pero con una base técnica sólida y confiable.",
  },
  {
    title: "Análisis de contrato de cobertura eléctrica",
    desc: "Interpretación técnica y financiera de coberturas: entendimiento de cláusulas, pagos, riesgos y mitigaciones.",
    problem:
      "En México para poder interpretar un contrato de cobertura se requiere de un alto grado de especialización en materia de mercados eléctricos combinada con una comprensión de limitantes técnicas. Los usuarios finales no pueden tener dicho perfil y se enfrentan a contratos que no son su negocio principal.",
    solution:
      "Interpretamos clausulas complejas, calculos de pagos, y prevenimos a los usuarios finales de posibles riesgos y su mitigación ante el nuevo contexto como usuario calificado.",
  },
  {
    title: "Análisis de consumo",
    desc: "Diagnóstico de consumo y demanda: patrones, desviaciones y oportunidades de mejora con impacto real en costo.",
    problem:
      "Los usuarios de energía eléctrica, ven el pago de su factura como un mal necesario, como una caja negra que solo puede ser interpretada como CFE, al fin y al cabo no es su core business el análisis de su consumo.",
    solution:
      "Detectamos oportunidades de mejora con baja inversión pero con grandes impactos a través de modificación de patrones de consumo si el proceso lo permite, y detectamos de manera sencilla en donde están las fugas de dinero que se pueden evitar.",
  },
  {
    title: "Asesoría de Migración a MEM",
    desc: "Acompañamiento para evaluar y ejecutar migración: requisitos, ruta de trabajo, riesgos y decisión informada.",
    problem:
      "El proceso parece abrumador, con mas de 100 documentos que conforman el sector eléctrico mexicano, es difícil perder el rumbo.",
    solution:
      "Lo simplificamos todo, nuestro interés es que se tomen decisiones informadas, no lograr migraciones, al MEM, te decimos si te conviene o no y lo realizamos todo por ti.",
  },
];

export default function EstudiosEspecificosPage() {
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
          <Link
            href="/servicios"
            className="font-semibold text-brand-green hover:underline"
          >
            Servicios
          </Link>
          <span className="text-ink-soft">/</span>
          <Link
            href="/servicios/consultoria"
            className="font-semibold text-ink hover:underline"
          >
            Consultoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Estudios específicos</span>
        </div>

        {/* HERO */}
        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Consultoría</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Estudios específicos
            </h1>

            {/* ✅ Descripción general (propuesta) */}
            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Estudios puntuales para responder preguntas concretas con base
              técnica sólida, lenguaje claro y foco en decisiones de negocio.
              Desde análisis del MEM y coberturas, hasta consumo y migración,
              aterrizamos información compleja en conclusiones accionables.
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
                Ver subservicios ↓
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
              <div className="relative h-52 w-full sm:h-64">
                <Image
                  src="/imagen/consultoria/estudios-especificos.jpg"
                  alt="Estudios específicos"
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
                    <span>Alcance claro y entregables definidos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Base técnica sólida + lenguaje ejecutivo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Recomendaciones accionables para decidir</span>
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
                    href="/servicios/consultoria"
                    className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                  >
                    Volver a Consultoría
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
                Subservicios de estudios específicos
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Cada subservicio incluye Problema/Solución provisto por el
                cliente. Las descripciones son propuestas iniciales y se pueden
                ajustar.
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
                key={s.title}
                className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>

                  {/* ✅ Descripción particular (propuesta) */}
                  <p className="mt-2 max-w-3xl text-sm text-ink-muted">
                    {s.desc}
                  </p>

                  {/* Problema / Solución (cliente) */}
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
                      Solicitar estudio
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                    >
                      Hacer una pregunta
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
                  Un estudio puntual para una decisión específica
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Si tienes una pregunta concreta, armamos el alcance correcto y
                  te damos conclusiones accionables.
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
                  href="/servicios/consultoria"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Volver a Consultoría
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
