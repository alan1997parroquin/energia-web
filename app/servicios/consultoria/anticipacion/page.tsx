import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anticipación estratégica de tendencias",
  description:
    "Forecasts y simulaciones para anticipar precios de energía, evaluar escenarios y tomar decisiones con menor incertidumbre en el Mercado Eléctrico Mayorista.",
  keywords: [
    "MEM",
    "demanda electrica",
    "mercado eléctrico mayorista",
    "CENACE",
    "CFE",
    "modelos matemáticos",
    "consultoría de energía",
    "interconexión",
    "simulación de despacho",
    "forecasts",
    "prospección de precios",
  ],
  alternates: { canonical: "/servicios/consultoria/anticipacion" },
  openGraph: {
    title: "Anticipación estratégica de tendencias | Energía México",
    description:
      "Forecasts y simulaciones para anticipar precios de energía, evaluar escenarios y tomar decisiones con menor incertidumbre.",
    url: "/servicios/consultoria/anticipacion",
    type: "website",
  },
};

const subservices = [
  {
    id: "prospeccion-de-precios-de-energia-por-nodo-hora-y-zona",
    title: "Prospección de Precios de Energía (PML)",
    desc: "Forecasts y escenarios de precio con granularidad por nodo/hora/zona para planear inversiones y estrategia comercial.",
    problem:
      "Los pronósticos de mercado públicos carecen de la granularidad necesaria (nodo, hora, zona) para un modelo financiero robusto de mediano o largo plazo. Además, adquirir software especializado es costoso y requiere procesar volúmenes masivos de datos inaccesibles para la mayoría de las empresas.",
    solution:
      "La Solución: Adaptamos procesos complejos de prospección de precios a tus necesidades específicas. Entregamos forecasts y escenarios de precio con granularidad horaria por nodo o zona de carga/generación. Obtienes la información precisa que tu proyecto requiere, respaldada por un análisis sólido y transparente que inversionistas y técnicos pueden validar para sus proyecciones de flujo de caja.",
  },
  {
    id: "simulacion-de-despacho-a-corto-mediano",
    title: "Simulación de Despacho (Corto y Mediano Plazo)",
    desc: "Simulación de despacho para evaluar rentabilidad y riesgos con escenarios sobre proyectos actuales y futuros.",
    problem:
      "La mayoría de los proyectos energéticos fracasan o pierden rentabilidad por utilizar modelos financieros simplistas que no consideran la dinámica real de la red eléctrica.",
    solution:
      "Evaluamos la rentabilidad y los riesgos mediante una simulación de despacho avanzada. Integramos tu proyecto en un entorno que simula la interacción con centrales actuales y futuras bajo diversos escenarios de mercado. No entregamos una caja negra; brindamos transparencia total sobre la viabilidad de tu inversión, permitiéndote ajustar tu estrategia comercial antes de comprometer capital.",
  },
];

export default function AnticipacionPage() {
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
          <span className="font-semibold text-ink">Anticipación</span>
        </div>

        {/* HERO */}
        <section className="mt-8">
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
            <div>
              <p className="text-sm font-semibold text-brand-green">
                Consultoría
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <span className="text-brand-blue">
                  Anticipación estratégica{" "}
                </span>
                de tendencias
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                <span className="text-brand-green">
                  Modelos matemáticos avanzados
                </span>{" "}
                para asegurar la rentabilidad de tus activos en el sector
                eléctrico.
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
                    src="/imagen/consultoria/anticipacion.jpg"
                    alt="Anticipación estratégica de tendencias"
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
                Conoce nuestros servicios de anticipación de tendencias
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Cada subservicio incluye problema y solución para ayudar a
                evaluar la viabilidad económica y estratégica de tus decisiones
                energéticas.
              </p>
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

                  <p className="mt-2 max-w-3xl text-sm text-ink-muted">
                    {s.desc}
                  </p>

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
                      Solicitar análisis
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
                  Transparencia para decidir si tu proyecto es rentable
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Forecasts y simulaciones para reducir incertidumbre y tomar
                  decisiones con escenarios claros.
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