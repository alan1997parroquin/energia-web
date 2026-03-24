import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Ingeniería",
  description:
    "Diseño de microgrids y proyectos de transición energética con enfoque técnico, estratégico y financiero para decisiones de inversión mejor fundamentadas.",
  keywords: [
    "servicios de ingeniería",
    "microgrids",
    "transición energética",
    "consultoría energética",
    "diseño de microgrids",
    "proyectos de transición energética",
    "rentabilidad energética",
    "ingeniería energética",
    "planeación energética",
  ],
  alternates: { canonical: "/servicios/consultoria/ingenieria" },
  openGraph: {
    title: "Servicios de Ingeniería | Energía México",
    description:
      "Diseño de microgrids y proyectos de transición energética con visión técnica y de negocio.",
    url: "/servicios/consultoria/ingenieria",
    type: "website",
  },
};

const subservices = [
  {
    id: "diseno-de-microgrids",
    title: "Diseño Conceptual y Técnico para Microgrids",
    desc: "El diseño de microgrids constituye la creación de sistemas energéticos locales inteligentes que integran generación renovable, sistemas de almacenamiento de energía y una gestión de carga avanzada. En un entorno donde las prospecciones energéticas pueden carecer de realismo frente a la regulación estatal actual, evaluamos cada proyecto bajo escenarios complejos, asegurando la compatibilidad de la zona y una estrategia de implementación sólida que transforme la eficiencia y la sostenibilidad en una ventaja competitiva medible.",
    problem:
      "Existe un proceso complejo para la implementación de proyectos de autoabasto aislado; las prospecciones de retorno de inversión pueden carecer de realismo frente a un escenario complejo con una participación activa del estado.",
    solution:
      "Evaluamos y diseñamos estos proyectos en función de la rentabilidad para los inversionistas, sumado a la compatibilidad de la zona y la estrategia de promoción del proyecto.",
  },
  {
    id: "diseno-de-proyectos-de-transicion-energetica",
    title: "Diseño de proyectos de transición energética",
    desc: "Diseño y estructuración de proyectos de transición energética con enfoque técnico y de negocio: ruta, criterios, riesgos y siguientes pasos.",
  },
];

export default function IngenieriaPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
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
            className="font-semibold text-brand-green hover:underline"
          >
            Consultoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Ingeniería</span>
        </div>

        {/* HERO */}
        <section className="mt-8">
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
            <div>
              <p className="text-sm font-semibold text-brand-green">
                Consultoría
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Servicios de <span className="text-brand-blue">Ingeniería</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Evaluamos y diseñamos estos{" "}
                <span className="font-semibold text-brand-green">
                  proyectos
                </span>{" "}
                en función de la{" "}
                <span className="font-semibold text-brand-green">
                  rentabilidad
                </span>{" "}
                para los{" "}
                <span className="font-semibold text-brand-green">
                  inversionistas
                </span>
                , sumado a la{" "}
                <span className="font-semibold text-brand-green">
                  compatibilidad de la zona
                </span>{" "}
                y{" "}
                <span className="font-semibold text-brand-green">
                  estrategia de promoción
                </span>{" "}
                del proyecto.
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
                  Ver subservicios
                </Link>
              </div>
            </div>

            <div className="lg:pt-6">
              <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagen/consultoria/ingenieria.jpg"
                    alt="Servicios de Ingeniería"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subservicios */}
        <section id="subservicios" className="mt-14 scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">
                Alcances
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Conoce nuestros servicios de ingeniería en negocios
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {subservices.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>

                  <p className="mt-2 max-w-none text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>

                  {s.problem && s.solution ? (
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
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar ingeniería
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
                  Ingeniería para habilitar decisiones e implementación
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Diseñamos con criterios técnicos y visión de rentabilidad para
                  que avances con claridad.
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