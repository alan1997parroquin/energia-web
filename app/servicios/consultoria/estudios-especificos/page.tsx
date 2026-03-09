// app/servicios/consultoria/estudios-especificos/page.tsx
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría MEM: Análisis de Mercado y Migración",
  description:
    "Optimizamos tu estrategia en el Mercado Eléctrico Mayorista. Análisis de contratos PPA, consumo de energía y asesoría para migración al MEM con datos reales.",
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
      "Consultoría MEM: Análisis de Mercado y Migración | Energía México",
    description:
      "¿Qué es un estudio de prefactibilidad y por qué lo necesitas? Evaluamos la viabilidad de tu proyecto ante CFE y CENACE en tiempo récord. Reduce riesgos aquí.",
    url: "/servicios/consultoria/prefactibilidad",
    type: "website",
  },
};

const subservices = [
  {
    title: "Análisis de Mercado Electrico Mayorista (MEM)",
    desc: "Convertimos datos del MEM en información útil: precios, nodos, tendencias y escenarios para decidir con claridad.",
    problem:
      "La saturación de datos públicos del mercado eléctrico hace que entender su dinámica sea casi imposible sin las herramientas adecuadas.",
    solution:
      "Mediante estadística descriptiva e inferencial, procesamos millones de datos del MEM para convertirlos en inteligencia de negocio. Aplicamos un modelo matemático avanzado para analizar tendencias y precios marginales locales (LMP), permitiéndote tomar decisiones informadas sobre compra, venta y riesgos energéticos.",
  },
  {
    title: "Investigación Específica y Consultoría a Medida",
    desc: "Estudios personalizados para preguntas puntuales: análisis de tecnologías, auditorías regulatorias, y más, con enfoque comercial.",
    problem:
      "La mayoría de los consultores ofrecen soluciones rígidas y excesivamente técnicas que descuidan el valor comercial y el retorno de inversión.",
    solution:
      "Desarrollamos estudios personalizados orientados a decisiones de negocio. Hablamos el lenguaje del inversionista con una base técnica sólida. Ya sea un análisis de nuevas tecnologías o una auditoría regulatoria única, entregamos resultados accionables, sencillos y confiables.",
  },
  {
    title: "Análisis de Contratos de Cobertura Eléctrica (PPA)",
    desc: "Interpretación técnica y financiera de coberturas: entendimiento de cláusulas, pagos, riesgos y mitigaciones.",
    problem:
      "Interpretar un contrato de cobertura requiere una especialización híbrida entre derecho energético y técnica eléctrica que la mayoría de las empresas no posee.",
    solution:
      "Actuamos como tu brazo técnico para interpretar cláusulas complejas y esquemas de pagos. Protegemos tus intereses ante el nuevo contexto de Usuario Calificado, mitigando riesgos financieros y asegurando que los términos del contrato estén alineados con tu core business.",
  },
  {
    title: "Análisis de Consumo y Eficiencia Energética",
    desc: "Diagnóstico de consumo y demanda: patrones, desviaciones y oportunidades de mejora con impacto real en costo.",
    problem:
      "Muchas empresas ven su factura eléctrica como una (caja negra) inevitable, ignorando que el gasto energético es una de las mayores fugas de capital.",
    solution:
      "Desmitificamos tu recibo y analizamos tus patrones de consumo de energía. Detectamos oportunidades de mejora con baja inversión que generan grandes impactos financieros. Identificamos fugas de dinero y optimizamos tus procesos para reducir costos sin afectar tu productividad.",
  },
  {
    title: "Asesoría y Migración a MEM",
    desc: "Acompañamiento para evaluar y ejecutar migración: requisitos, ruta de trabajo, riesgos y decisión informada.",
    problem:
      "Con una regulación de más de 100 documentos y lineamientos, el camino hacia el Mercado Eléctrico Mayorista parece una ruta imposible de navegar.",
    solution:
      "Simplificamos la transición. Nuestro enfoque no es forzar la migración, sino decirte con honestidad si te conviene o no. Si la viabilidad es positiva, gestionamos todo el proceso por ti, desde el análisis técnico hasta el cumplimiento ante CENACE, dándote total claridad en cada paso.",
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
          <Link href="/servicios" className="font-semibold text-brand-green hover:underline">
            Servicios
          </Link>
          <span className="text-ink-soft">/</span>
          <Link href="/servicios/consultoria" className="font-semibold text-brand-green hover:underline">
            Consultoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Estudios específicos</span>
        </div>

   {/* HERO */}
<section className="mt-8">
  <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
    {/* Left */}
    <div>
      <p className="text-sm font-semibold text-brand-green">Consultoría</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        <span className="text-brand-blue">Estudios de Especialidad</span>: Inteligencia de Datos para el Sector Eléctrico
      </h1>

      <p className="mt-4 max-w-2xl text-base text-ink-muted">
        Transformamos la complejidad técnica del sector
        energético en activos estratégicos para tu empresa.
        Ofrecemos estudios puntuales analizando los componentes
        críticos (técnicos, económicos y regulatorios) para responder
        a las preguntas específicas de tu negocio. A diferencia de un
        análisis superficial, realizamos un estudio de cobertura y consumo
        profunda del{" "}
        <span className="font-semibold text-brand-green">
          Mercado Eléctrico Mayorista
        </span>
        : esto nos permite diseñar
        la estrategia de suministro y el modelo de cobertura idóneo que el
        perfil de consumo de energía de tu proyecto requiere para maximizar su rentabilidad.
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

    {/* Right visual */}
    <div className="lg:pt-6">
      <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/imagen/consultoria/estudios-especificos.jpg"
            alt="Análisis de datos e inteligencia para el sector eléctrico"
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
                Conoce nuestros servicios en estudios de especilidad
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Cada subservicio incluye Problema/Solución provisto por el cliente. Las descripciones son propuestas
                iniciales y se pueden ajustar.
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

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Problema</p>
                      <p className="mt-1 text-sm text-ink">{s.problem}</p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Solución</p>
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
                  Si tienes una pregunta concreta, armamos el alcance correcto y te damos conclusiones accionables.
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
