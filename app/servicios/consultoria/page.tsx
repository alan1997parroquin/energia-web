// app/servicios/consultoria/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría de Energía e Interconexión CFE",
  description:
    "Optimiza tu interconexión al MEM con modelos matemáticos avanzados. Reducimos riesgos en proyectos de generación y carga ante CFE y CENACE.",
  keywords: [
    "MEM",
    "CENACE",
    "CFE",
    "modelos matemáticos",
    "consultoría de energía",
    "interconexión",
  ],
  alternates: { canonical: "/servicios/consultoria" },
  openGraph: {
    title: "Consultoría | Energía México",
    description:
      "Diagnóstico, estrategia y modelos para reducir riesgos y maximizar resultados en proyectos energéticos.",
    url: "/servicios/consultoria",
    type: "website",
  },
};

type Service = {
  slug:
    | "prefactibilidad"
    | "estudios-especificos"
    | "anticipacion"
    | "ingenieria"
    | "modelos-financieros";
  title: string;
  desc: string;
  problem?: string;
  solution?: string;
  bullets: string[];
  eyebrow: string;
  image: string;
};

const services: Service[] = [
  {
    slug: "prefactibilidad",
    eyebrow: "Consultoría",
    title: "Estudios de prefactibilidad",
    desc: "Maximiza la rentabilidad de tu capital mediante un estudio de prefactibilidad ágil diseñado para identificar la viabilidad técnica y los retos operativos de tu proyecto. Antes de comprometer recursos en trámites formales ante CENACE, validamos el potencial de tu ubicación utilizando modelos basados en información pública estratégica.",
    bullets: [
      "Infraestructura de Red: Localización de subestaciones eléctricas CFE cercanas y análisis de capacidad.",
      "Factibilidad Técnica: Determinación de los niveles de tensión disponibles para interconexión o carga.",
      "Diagnóstico Estratégico: Conclusiones preliminares y comentarios expertos sobre la viabilidad del sitio desde una perspectiva eléctrica y regulatoria.",
    ],
    image: "/imagen/consultoria/prefactibilidad.jpg",
  },
  {
    slug: "estudios-especificos",
    eyebrow: "Consultoría",
    title: "Estudios específicos",
    desc: "Mediante estadística descriptiva e inferencial, transformamos millones de datos del Mercado Eléctrico Mayorista (MEM) en decisiones de negocio rentables y con una base técnica sólida.",
    bullets: ["Análisis de MEM", "Análisis de consumo", "Asesoría de migración a MEM"],
    image: "/imagen/consultoria/estudios-especificos.jpg",
  },
  {
    slug: "anticipacion",
    eyebrow: "Consultoría",
    title: "Anticipación estratégica de tendencias",
    desc: "Planeación con escenarios: proyecciones y simulaciones para decidir con anticipación y reducir incertidumbre.",
    bullets: [
      "Prospección de precios de energía (nodo/hora/zona)",
      "Simulación de despacho (corto–mediano plazo)",
      "Escenarios y sensibilidad",
    ],
    image: "/imagen/consultoria/anticipacion.jpg",
  },
  {
    slug: "ingenieria",
    eyebrow: "Consultoría",
    title: "Servicios de Ingeniería",
    desc: "Diseño técnico conceptual para soluciones energéticas, microgrids y proyectos de transición energética.",
    bullets: [
      "Diseño de microgrids",
      "Diseño de proyectos de transición energética",
      "Arquitectura y criterios técnicos",
    ],
    image: "/imagen/consultoria/ingenieria.jpg",
  },
  {
    slug: "modelos-financieros",
    eyebrow: "Consultoría",
    title: "Modelos financieros",
    desc: "Modelos para evaluar inversión, retorno y riesgo por escenarios: decisiones sólidas con números claros.",
    bullets: ["Modelos para proyectos de generación", "Modelos para microgrids", "Sensibilidad y riesgos"],
    image: "/imagen/consultoria/modelos-financieros.jpg",
  },
];

function ServiceSection({ s, index }: { s: Service; index: number }) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={s.slug}
      className={`relative scroll-mt-24 overflow-hidden border-t border-surface-border ${
        isAlt ? "bg-white" : "bg-surface-soft/60"
      }`}
    >
      {/* accents */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-20 -left-24 h-72 w-72 rounded-full blur-3xl ${
            isAlt ? "bg-brand-green/10" : "bg-brand-blue/10"
          }`}
        />
        <div
          className={`absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl ${
            isAlt ? "bg-brand-blue/10" : "bg-brand-green/10"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* text */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">{s.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {s.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-ink-muted">{s.desc}</p>

            {s.problem && s.solution ? (
              <div className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Problema</p>
                  <p className="mt-1 text-sm text-ink">{s.problem}</p>
                </div>

                <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Solución</p>
                  <p className="mt-1 text-sm text-ink">{s.solution}</p>
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/servicios/consultoria/${s.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
              >
                Ver el servicio
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </div>

          {/* highlights */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-surface-border bg-white/70 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-ink">Incluye</p>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={`/servicios/consultoria/${s.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
                >
                  Ver subservicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ConsultoriaLanding() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-24">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left */}
            <div className="lg:col-span-7">
              {/* Breadcrumb + pill */}
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/servicios" className="font-semibold text-brand-green hover:underline">
                  Servicios
                </Link>
                <span className="text-ink-soft">/</span>
                <p className="text-sm font-semibold text-ink">Consultoría</p>

                
              </div>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <span className="font-extrabold text-brand-blue">Consultoría de Energía</span>: Interconexión y Modelos Matemáticos para Proyectos en México
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Optimiza tu inversión en el{" "}
                <span className="font-semibold text-brand-green">
                  Mercado Eléctrico Mayorista (MEM)
                </span>{" "}
                mediante un análisis integral diseñado para reducir riesgos y maximizar resultados.
                No solo entregamos datos; utilizamos{" "}
                <span className="font-semibold text-brand-green">
                  modelos matemáticos
                </span>{" "}
                avanzados y estadística inferencial para transformar la complejidad técnica en una
                hoja de ruta financiera clara.
              </p>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Optimiza tu toma de decisiones con un diagnóstico que reduce la incertidumbre y acelera tu entrada al
                Mercado Eléctrico Mayorista.
              </p>

              {/* mini métricas */}
              <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Enfoque</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Reducción de Riesgos Financieros</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Resultado</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Mejora de Resultados Operativos</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Formato</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Aseguramiento de Cumplimiento</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                >
                  Solicitar diagnóstico
                </Link>
                <Link
                  href="#prefactibilidad"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Right - Proceso en 4 pasos */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
                <div className="relative h-44 w-full sm:h-52">
                  <Image
                    src="/imagen/consultoria/prefactibilidad.jpg"
                    alt="Proceso de consultoría"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Cómo trabajamos</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">Ruta clara de inicio a cierre</p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                      Proceso de consultoría en 4 pasos
                    </h3>
                  </div>
                </div>

                <div className="relative p-5">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

                  <div className="relative">
                    <p className="text-sm text-ink-muted">
                      De datos a decisiones accionables, con entregables claros y respaldo técnico.
                    </p>

                    <ol className="mt-4 space-y-3">
                      {[
                        { t: "Diagnóstico y alcance", d: "Objetivo, supuestos, datos requeridos y entregables." },
                        { t: "Datos y modelado", d: "Limpieza, estructura y análisis (MEM/consumo/restricciones)." },
                        { t: "Escenarios y recomendaciones", d: "Alternativas, riesgos, mitigaciones y decisión sugerida." },
                        { t: "Entregable y siguiente paso", d: "Documento ejecutivo + respaldo técnico listo para comité." },
                      ].map((step, i) => (
                        <li
                          key={step.t}
                          className="flex gap-3 rounded-2xl border border-surface-border bg-white/70 p-3 backdrop-blur"
                        >
                          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                            {i + 1}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-ink">{step.t}</p>
                            <p className="mt-0.5 text-xs text-ink-muted">{step.d}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-4 rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Resultado</p>
                      <p className="mt-1 text-sm text-ink">
                        Claridad para decidir <span className="font-semibold">si conviene o no</span> y cuál ruta maximiza
                        valor con menor riesgo.
                      </p>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
            {/* /Right */}
          </div>
        </div>
      </section>

      {/* SECCIONES apiladas */}
      <div className="mt-4">
        {services.map((s, i) => (
          <ServiceSection key={s.slug} s={s} index={i} />
        ))}
      </div>

      {/* CTA final */}
      <section className="border-t border-surface-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  Contáctanos y conoce como mejorar tu proyecto
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Cuéntanos tu objetivo (ahorro, expansión, MEM, nueva carga, etc.) y te proponemos el camino.
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
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Volver a servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}