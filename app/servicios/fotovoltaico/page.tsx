import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrador Fotovoltaico | Ingeniería, instalación y gestión FV",
  description:
    "Desarrollamos proyectos fotovoltaicos de punta a punta: viabilidad, diseño, ingeniería, instalación, pruebas, mantenimiento, financiamiento y gestoría ante CFE.",
  keywords: [
    "integrador fotovoltaico",
    "proyecto fotovoltaico",
    "paneles solares para empresas",
    "ingeniería fotovoltaica",
    "instalación de paneles solares",
    "mantenimiento fotovoltaico",
    "gestoría cfe paneles solares",
    "viabilidad fotovoltaica",
    "financiamiento solar",
    "sistema fotovoltaico industrial",
  ],
  alternates: {
    canonical: "/servicios/fotovoltaico",
  },
  openGraph: {
    title: "Integrador Fotovoltaico | Energía México",
    description:
      "Proyectos fotovoltaicos con ingeniería, ejecución y acompañamiento técnico integral para empresas.",
    url: "/servicios/fotovoltaico",
    type: "website",
  },
};

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

const subservices = [
  {
    title: "Estudio de viabilidad",
    desc: "Evaluamos si el proyecto fotovoltaico tiene sentido técnico y financiero antes de comprometer inversión, tiempo y recursos. Analizamos consumo, sitio, restricciones, interconexión y potencial de ahorro para construir una base de decisión más clara.",
    problem: "Problema habitual",
    problemList: [
      "Muchos proyectos arrancan con entusiasmo comercial, pero sin validar si realmente son viables.",
      "No siempre se analiza con suficiente profundidad el perfil de consumo, el sitio disponible o las restricciones de interconexión.",
      "Esto puede llevar a expectativas irreales de ahorro o retorno.",
      "También puede provocar rediseños, sobrecostos o incluso proyectos que no se justifican financieramente.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Perfil de consumo y dimensionamiento preliminar.",
      "Estimación de generación, ahorro y retorno.",
      "Revisión del sitio y restricciones técnicas.",
      "Identificación de riesgos, supuestos y condicionantes clave.",
      "Ruta inicial para decidir si conviene avanzar, ajustar o detener el proyecto.",
    ],
  },
  {
    title: "Diseño de solución",
    desc: "Definimos la arquitectura general del sistema fotovoltaico con enfoque técnico, operativo y económico. Seleccionamos la solución más adecuada para el sitio, el perfil de consumo y los objetivos del cliente.",
    problem: "Problema habitual",
    problemList: [
      "No basta con poner paneles: una mala definición de la solución puede afectar desempeño, costo y escalabilidad.",
      "Con frecuencia se eligen equipos o configuraciones sin considerar bien sombras, layout, estrategia de interconexión o fases de crecimiento.",
      "Esto genera sistemas menos eficientes o difíciles de ejecutar.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Definición de arquitectura preliminar del sistema.",
      "Selección técnica inicial de equipos y componentes.",
      "Layout preliminar y consideraciones de sombra.",
      "Estrategia general de interconexión.",
      "Estimación de CAPEX y planteamiento de fases de implementación.",
    ],
  },
  {
    title: "Ingeniería detallada",
    desc: "Desarrollamos la ingeniería necesaria para construir con orden, seguridad y claridad técnica. Traducimos la estrategia del proyecto en criterios, memorias, planos, especificaciones y bases documentales para ejecución e interconexión.",
    problem: "Problema habitual",
    problemList: [
      "Muchos proyectos avanzan a ejecución con documentación incompleta o poco consistente.",
      "La falta de memorias, criterios y especificaciones claras puede provocar errores en obra, diferencias entre proveedores y retrabajos.",
      "También complica la coordinación con contratistas y autoridades.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Memorias y criterios de diseño.",
      "Planos y especificaciones técnicas.",
      "Lista de materiales (BOM) y alcances.",
      "Base documental para construcción e interconexión.",
      "Plan de calidad y seguridad como referencia de ejecución.",
    ],
  },
  {
    title: "Suministro e instalación",
    desc: "Ejecutamos el proyecto con control técnico y operativo: suministro, logística, montaje y coordinación en sitio para asegurar una implementación ordenada, segura y alineada con el diseño aprobado.",
    problem: "Problema habitual",
    problemList: [
      "En la ejecución suelen aparecer desviaciones entre lo proyectado y lo instalado.",
      "La mala coordinación entre suministro, contratistas, seguridad y avance físico genera retrasos, errores y sobrecostos.",
      "Además, sin control documental, el proyecto pierde trazabilidad.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Suministro y logística de materiales y equipos.",
      "Instalación mecánica y eléctrica del sistema.",
      "Coordinación de actividades y seguridad en sitio.",
      "Supervisión de calidad en ejecución.",
      "Documentación de avance y control del proyecto.",
    ],
  },
  {
    title: "Pruebas y puesta en marcha",
    desc: "Validamos el sistema antes de su operación formal para asegurar que funcione conforme a diseño, con condiciones adecuadas de seguridad, desempeño y confiabilidad.",
    problem: "Problema habitual",
    problemList: [
      "No todos los proyectos cierran con una verificación rigurosa.",
      "Cuando faltan pruebas, validaciones o checklists claros, pueden pasar desapercibidos errores eléctricos, problemas de configuración o riesgos operativos.",
      "Esto impacta el desempeño y la seguridad desde el arranque.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Pruebas eléctricas y funcionales del sistema.",
      "Verificación de protecciones y configuración.",
      "Checklists y evidencias de calidad.",
      "Validación previa a operación formal.",
      "Puesta en marcha con arranque controlado.",
    ],
  },
  {
    title: "Mantenimiento preventivo y correctivo",
    desc: "Acompañamos la operación del sistema fotovoltaico para conservar su desempeño, reducir fallas y minimizar pérdidas de generación mediante rutinas preventivas y atención correctiva oportuna.",
    problem: "Problema habitual",
    problemList: [
      "Muchos sistemas pierden rendimiento con el tiempo por falta de seguimiento técnico.",
      "La ausencia de mantenimiento preventivo, limpieza, inspecciones o diagnóstico oportuno incrementa el riesgo de fallas y de menor generación.",
      "Cuando no se mide bien el desempeño, también se pierde visibilidad del retorno real del proyecto.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Rutinas preventivas de inspección y limpieza.",
      "Diagnóstico de fallas y acciones correctivas.",
      "Monitoreo operativo y recomendaciones de mejora.",
      "Reportes de desempeño del sistema.",
      "Acciones orientadas a reducir paros y pérdidas.",
    ],
  },
  {
    title: "Financiamiento",
    desc: "Estructuramos el análisis económico del proyecto para facilitar la toma de decisiones y abrir opciones de inversión, CAPEX o financiamiento según el perfil del cliente y los objetivos financieros del proyecto.",
    problem: "Problema habitual",
    problemList: [
      "Aun cuando la solución técnica es viable, muchas decisiones se frenan por falta de claridad financiera.",
      "No siempre se comparan correctamente escenarios de inversión, ahorro, retorno, sensibilidad o crecimiento.",
      "Sin un modelo financiero claro, el proyecto pierde fuerza frente a la evaluación interna.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Modelo financiero y ROI por escenarios.",
      "Análisis de supuestos y sensibilidad.",
      "Comparación de estrategias CAPEX y financiamiento.",
      "Base documental para evaluación interna.",
      "Enfoque en viabilidad económica y toma de decisión ejecutiva.",
    ],
  },
  {
    title: "Gestoría de CFE",
    desc: "Acompañamos la ruta de interconexión con CFE para que el proyecto avance con orden documental, seguimiento claro y menor fricción en el proceso técnico-administrativo.",
    problem: "Problema habitual",
    problemList: [
      "La interconexión puede convertirse en un cuello de botella cuando no se integran bien los requisitos o no se da seguimiento puntual.",
      "Errores documentales, omisiones o falta de coordinación pueden retrasar el proceso y generar desgaste innecesario.",
      "Muchas veces el problema no es el proyecto, sino cómo se presenta y cómo se gestiona.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Definición de ruta de interconexión y requisitos.",
      "Integración documental base para el trámite.",
      "Seguimiento y coordinación con CFE.",
      "Acompañamiento para aclaraciones y avance del proceso.",
      "Cierre con evidencia de cumplimiento y continuidad operativa.",
    ],
  },
].map((s) => ({ ...s, id: toId(s.title) }));

export default function FotovoltaicoPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* Background global */}
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
          <span className="font-semibold text-ink">Integrador Fotovoltaico</span>
        </div>

        {/* HERO */}
        <section className="relative">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
            {/* Left */}
            <div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Proyectos <span className="text-brand-blue">fotovoltaicos</span> con{" "}
                <span className="text-brand-blue">ingeniería</span>,{" "}
                <span className="text-brand-blue">ejecución</span> y acompañamiento de punta a punta
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Desarrollamos soluciones fotovoltaicas para empresas con una visión integral:
                evaluamos viabilidad, diseñamos la solución, construimos, probamos, damos
                mantenimiento y acompañamos la interconexión para que el proyecto avance con
                claridad técnica y sentido financiero.
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
                <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px]">
                  <Image
                    src="/imagen/fotovoltaico/diseno.jpg"
                    alt="Proyectos fotovoltaicos para empresas"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alcances */}
        <section id="subservicios" className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Alcances</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Qué ofrece nuestro servicio
              </h2>
              <p className="mt-2 max-w-none whitespace-pre-line text-sm text-ink-muted">
                {`En Energía México desarrollamos proyectos fotovoltaicos de manera integral, alineando ingeniería, ejecución y retorno esperado desde las primeras decisiones.`}
              </p>

              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <span className="font-semibold text-ink">Viabilidad técnica y financiera:</span>{" "}
                  evaluamos consumo, sitio, restricciones y escenarios para saber si el proyecto
                  realmente conviene antes de comprometer inversión.
                </li>

                <li>
                  <span className="font-semibold text-ink">Diseño e ingeniería:</span>{" "}
                  definimos la solución adecuada, desarrollamos criterios, planos y
                  especificaciones para construir con orden y certidumbre.
                </li>

                <li>
                  <span className="font-semibold text-ink">Ejecución y puesta en marcha:</span>{" "}
                  coordinamos suministro, instalación, pruebas y arranque controlado con
                  enfoque en calidad y seguridad.
                </li>

                <li>
                  <span className="font-semibold text-ink">Operación y continuidad:</span>{" "}
                  acompañamos mantenimiento, monitoreo, financiamiento y gestoría de
                  interconexión para que el proyecto mantenga su valor en el tiempo.
                </li>
              </ul>
            </div>
          </div>

          {/* Problema / solución */}
          <section className="mt-10">
            <div className="rounded-3xl border border-surface-border bg-white/80 p-8 shadow-sm backdrop-blur">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Problema */}
                <div>
                  <p className="text-sm font-semibold text-brand-green">
                    Problema que resolvemos
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    ¿Qué frena un proyecto FV bien ejecutado?
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Proyectos que arrancan sin validar correctamente su viabilidad técnica,
                        financiera o regulatoria.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Soluciones mal dimensionadas o definidas solo desde lo comercial, sin una
                        ruta clara de ingeniería y ejecución.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Retrasos y sobrecostos por falta de coordinación entre diseño, suministro,
                        instalación, pruebas e interconexión.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Sistemas que pierden desempeño con el tiempo por falta de mantenimiento,
                        monitoreo o seguimiento técnico.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Solución */}
                <div>
                  <p className="text-sm font-semibold text-brand-green">Solución</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    Un integrador que conecta estrategia, ingeniería y ejecución
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Evaluamos primero la viabilidad del proyecto para reducir decisiones mal
                        fundamentadas.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Diseñamos la solución y desarrollamos la ingeniería necesaria para ejecutar
                        con claridad y consistencia.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Coordinamos suministro, instalación, pruebas y puesta en marcha con enfoque
                        en calidad, seguridad y trazabilidad.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Acompañamos la operación con mantenimiento, análisis financiero y gestoría
                        para maximizar continuidad y retorno.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-green">Subservicios</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                  Conoce nuestra variedad de servicios
                </h2>
              </div>
            </div>
          </section>

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

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Problema
                      </p>

                      <p className="mt-1 text-sm font-semibold text-ink">{s.problem}</p>

                      <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                        {s.problemList.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-0.5 flex-none text-brand-green">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Solución
                      </p>

                      <p className="mt-1 text-sm font-semibold text-ink">{s.solution}</p>

                      <p className="mt-4 text-sm font-semibold text-ink">Esto incluye:</p>
                      <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                        {s.solutionList.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-0.5 flex-none text-brand-green">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar diagnóstico
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
                  Un proyecto FV sólido empieza con una ruta clara
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Te ayudamos a evaluar, diseñar, ejecutar e interconectar tu sistema con
                  claridad técnica y visión financiera.
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
        </section>
      </div>
    </main>
  );
}