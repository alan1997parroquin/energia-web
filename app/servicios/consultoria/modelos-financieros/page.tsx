// app/servicios/consultoria/modelos-financieros/page.tsx
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelado Matemático de Sistemas Eléctricos y Modelos Financieros",
  description:
    "Optimizamos tu inversión con el modelado matemático de sistemas eléctricos. Modelos financieros basados en simulaciones de despacho y precios reales del MEM.",
  keywords: [
    "MEM",
    "demanda electrica",
    "mercado eléctrico mayorista",
    "que es un modelo matematico",
    "modelos financieros",
    "modelos matemáticos",
    "sistemas eléctricos",
    "modelos matemáticos de sistemas eléctricos",
  ],
  alternates: { canonical: "/servicios/consultoria/modelos-financieros" },
  openGraph: {
    title:
      "CModelado Matemático de Sistemas Eléctricos y Modelos Financieros | Energía México",
    description:
      "Optimizamos tu inversión con el modelado matemático de sistemas eléctricos. Modelos financieros basados en simulaciones de despacho y precios reales del MEM.",
    url: "/servicios/consultoria/modelos-financieros",
    type: "website",
  },
};

const sharedProblem =
  "Se utilizan modelos financieros simplistas para proyectos complejos de energía.";

const sharedSolution =
  "Integramos las predicciones de precios de energía y la operación real de las plantas, para construir modelos que reflejen la realidad del proyecto.";

const subservices = [
  {
    title: "Generación",
    desc: "Modelos financieros para proyectos de generación: supuestos claros, escenarios y sensibilidad para evaluar rentabilidad.",
  },
  {
    title: "Microgrids",
    desc: "Modelos financieros para microgrids: estructura de costos, operación, escenarios y rentabilidad bajo distintos supuestos.",
  },
];

function toId(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ModelosFinancierosPage() {
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
          <Link href="/servicios" className="font-semibold text-brand-green hover:underline">
            Servicios
          </Link>
          <span className="text-ink-soft">/</span>
          <Link 
            href="/servicios/consultoria" 
            className="font-semibold text-brand-green hover:underline">
            Consultoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Modelos financieros</span>
        </div>

{/* HERO */}
<section className="mt-8">
  <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
    {/* Left */}
    <div>
      <p className="text-sm font-semibold text-brand-green">Consultoría</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
  <span className="text-brand-blue">Modelos</span> financieros
</h1>

     <p className="mt-4 max-w-2xl text-base text-ink-muted">
  Más allá de una simple proyección, desarrollamos un
  <span className="font-semibold text-brand-green"> modelo matemático</span> robusto que actúa como el motor de tu
  estrategia financiera. Al entender{" "}
  <span className="font-semibold text-brand-green">qué es un modelo matemático</span>
  {" "}aplicado a la energía, integramos variables críticas como
  predicciones de precios y despacho real. Existen diversos
  tipos de <span className="font-semibold text-brand-green">modelos matemáticos</span>, pero nuestra especialidad
  es el modelado matemático de{" "}
  <span className="font-semibold text-brand-green">sistemas eléctricos</span>, transformando
  datos complejos en ejemplos de{" "}
  <span className="font-semibold text-brand-green">modelos financieros</span>
  {" "}que reflejan con exactitud la rentabilidad de tus activos en México.
</p>

      {/* Problema / Solución (cliente) — compartido */}
      <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Problema</p>
          <p className="mt-1 text-sm text-ink">{sharedProblem}</p>
        </div>

        <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Solución</p>
          <p className="mt-1 text-sm text-ink">{sharedSolution}</p>
        </div>
      </div>

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

    {/* Right visual */}
    <div className="lg:pt-6">
      <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/imagen/consultoria/modelos-financieros.jpg"
            alt="Modelos financieros"
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
              <p className="text-sm font-semibold text-brand-green">Alcances</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
               Conoce nuestros servicios en modelos matematicos 
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                El Problema/Solución aplica a ambos subservicios. Las descripciones son propuestas iniciales y se pueden ajustar.
              </p>
            </div>

           
          </div>

          <div className="mt-8 space-y-6">
            {subservices.map((s) => (
              <div
                key={s.title}
                id={toId(s.title)}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-surface-border bg-white/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink">{s.title}</h3>
                  <p className="mt-2 max-w-none text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                  

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar modelo
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
                  Modelos realistas para decisiones de inversión
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Integramos precio de energía y operación real para evaluar con escenarios claros.
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
