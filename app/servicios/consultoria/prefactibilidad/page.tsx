// app/servicios/consultoria/prefactibilidad/page.tsx
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio de Prefactibilidad Eléctrica: Validación de Sitios y Nodos",
  description:
    "¿Qué es un estudio de prefactibilidad y por qué lo necesitas? Evaluamos la viabilidad de tu proyecto ante CFE y CENACE en tiempo récord. Reduce riesgos aquí.",
  keywords: [
    "MEM",
    "demanda electrica",
    "mercado eléctrico mayorista",
    "CENACE",
    "CFE",
    "modelos matemáticos",
    "consultoría de energía",
    "interconexión",
  ],
  alternates: { canonical: "/servicios/consultoria/prefactibilidad" },
  openGraph: {
    title:
      "Estudio de Prefactibilidad Eléctrica: Validación de Sitios y Nodos | Energía México",
    description:
      "¿Qué es un estudio de prefactibilidad y por qué lo necesitas? Evaluamos la viabilidad de tu proyecto ante CFE y CENACE en tiempo récord. Reduce riesgos aquí.",
    url: "/servicios/consultoria/prefactibilidad",
    type: "website",
  },
};

const subservices = [
  {
    title: "Análisis de Nodo para Generación (Centrales Eléctricas y Renovables)",
    desc: "Para desarrolladores de generación de energía eléctrica, realizamos un análisis técnico-estratégico del nodo para determinar la viabilidad de inyección a la red de CFE. Evaluamos la tendencia del mix energético y la presencia de otros activos de generación en la zona para identificar posibles riesgos de congestión o curtailment. Este estudio incluye proyecciones de precios de energía y la identificación de la subestación eléctrica óptima, entregando conclusiones sólidas que respaldan tu modelo financiero ante inversionistas y autoridades regulatorias.",
  },
  {
    title: "Análisis de Nodo para Cargas Industriales",
    desc: "Si tu proyecto representa una demanda de energía significativa, validamos tu modelo económico mediante un estudio profundo del nodo de interconexión asignado por CENACE. Analizamos los precios marginales locales (LMP) históricos y generamos una proyección de costos para identificar la subestación más idónea. Evaluamos el mix de generación en la zona para asegurar fuentes de suministro competitivas, permitiéndote prever el monto de inversión y los niveles de tensión necesarios para una operación eficiente y sin sobrecostos en el Mercado Eléctrico Mayorista.",
  },
  {
    title: "Incremento de Demanda Eléctrica",
    desc: "Realizamos un diagnóstico técnico-legal para evaluar la factibilidad de aumentar tu carga ante la red de CFE. Mediante un análisis de puntos críticos y capacidad en subestaciones eléctricas, identificamos la complejidad del proceso antes de iniciar trámites formales. Aseguramos que tu incremento de demanda cumpla con el Código de Red, evitando multas y garantizando la continuidad operativa de tu proyecto industrial o comercial.",
  },
  {
    title: "Migración de Proyectos de Energía",
    desc: "Evaluamos las implicaciones técnicas y regulatorias para definir la ruta más rentable en la migración de tus contratos actuales. Analizamos el costo-beneficio de transitar hacia la figura de Usuario Calificado, gestionando los requisitos ante CENACE y CFE Energía. Simplificamos la transición para que tu proyecto aproveche las ventajas competitivas del Mercado Eléctrico Mayorista con el menor riesgo posible.",
  },
  {
    title: "Sistemas de Almacenamiento de Energía",
    desc: "Implementamos soluciones de sistemas de almacenamiento para optimizar tu perfil de consumo, realizar arbitraje de energía y asegurar el respaldo ante fallas de red. Analizamos la integración tecnológica con energía solar y otras fuentes de generación de energía eléctrica, permitiéndote gestionar picos de demanda y mejorar la calidad de potencia bajo los estándares más exigentes del sector eléctrico mexicano.",
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

export default function PrefactibilidadPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* Background global (mismo lenguaje visual) */}
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
          <span className="font-semibold text-ink">Prefactibilidad</span>
        </div>

        {/* HERO con imagen a la derecha */}
        <section className="mt-8">
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
            <div>
              <p className="text-sm font-semibold text-brand-green">Consultoría</p>

              <div className="mt-2 max-w-none">
                <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  Estudios de <span className="text-brand-blue">prefactibilidad</span>
                </h1>

                <p className="mt-4 text-base text-ink-muted">
                    Maximiza la rentabilidad de tu capital mediante un estudio de
                    prefactibilidad ágil diseñado para identificar la viabilidad
                    técnica y los retos operativos de tu proyecto. Antes de
                    comprometer recursos en trámites formales ante{" "}
                    <span className="font-semibold text-brand-green">CENACE</span>,
                    validamos el potencial de tu ubicación utilizando{" "}
                    <span className="font-semibold text-brand-green">
                      modelos matemáticos
                    </span>{" "}
                    basados en información pública estratégica.
                  </p>

                  <p className="mt-6 text-base text-ink-muted">
                    Nuestro informe ejecutivo proporciona claridad inmediata sobre
                    un sitio específico, detallando:
                  </p>

                <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex-none text-brand-green">✅</span>
                    <span>
                      <strong className="font-semibold text-ink">
                        Infraestructura de Red:
                      </strong>{" "}
                      Localización de subestaciones eléctricas{" "}
                      <span className="font-semibold text-brand-green">CFE</span>{" "}
                      cercanas y análisis de capacidad.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-0.5 flex-none text-brand-green">✅</span>
                    <span>
                      <strong className="font-semibold text-ink">
                        Factibilidad Técnica:
                      </strong>{" "}
                      Determinación de los niveles de tensión disponibles para{" "}
                      <span className="font-semibold text-brand-green">
                        interconexión
                      </span>{" "}
                      o carga.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-0.5 flex-none text-brand-green">✅</span>
                    <span>
                      <strong className="font-semibold text-ink">
                        Diagnóstico Estratégico:
                      </strong>{" "}
                      Conclusiones preliminares y comentarios expertos sobre la
                      viabilidad del sitio desde una perspectiva eléctrica y
                      regulatoria.
                    </span>
                  </li>
                </ul>

                      <p className="mt-6 text-base text-ink-muted">
                        Optimiza tu toma de decisiones con un diagnóstico que reduce
                        la incertidumbre y acelera tu entrada al{" "}
                        <span className="font-semibold text-brand-green">MEM</span> con{" "}
                        <span className="font-semibold text-brand-green">
                          consultoría de energía
                        </span>
                        .
                      </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
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
            </div>

            <div className="lg:pt-6">
              <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/imagen/consultoria/prefactibilidad.jpg"
                    alt="Equipo técnico evaluando prefactibilidad eléctrica en campo"
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
              <p className="text-sm font-semibold text-brand-green">Estudios</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Conoce nuestra variedad de estudios
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Selecciona el alcance que mejor describa tu necesidad. Si tu
                caso no encaja, lo ajustamos a la medida.
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
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-none text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar prefactibilidad
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
                  Evalúa varios sitios antes de iniciar el estudio formal
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Con prefactibilidad puedes comparar alternativas rápido y
                  tomar mejores decisiones antes de pagar estudios de alto
                  costo.
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