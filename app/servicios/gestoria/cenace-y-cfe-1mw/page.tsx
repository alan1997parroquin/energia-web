// app/servicios/gestoria/cenace-y-cfe-1mw/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interconexión ante CENACE >1MW | Usuarios Calificados MEM",
  description:
    "Especialistas en gestión de grandes cargas (>1MW) ante CENACE y CFE. Estudios de factibilidad, subestaciones e interconexión al Mercado Eléctrico Mayorista.",
  keywords: [
    "baja media y alta tension cfe",
    "media tensión cfe",
    "alta tensión cfe",
    "estructura de media tensión cfe",
    "prefactibilidad de carga",
    "nuevo servicio cfe",
    "incremento de demanda cfe",
    "interconexión cfe",
    "CENACE",
    "SIASIC",
    "modelo matemático",
    "perfiles de carga",
    "demanda controlable",
  ],
  alternates: {
    canonical: "/servicios/gestoria/cenace-y-cfe-1mw",
  },
  openGraph: {
    title:
      "Interconexión ante CENACE >1MW | Usuarios Calificados MEM | Energía México",
    description:
      "Especialistas en gestión de grandes cargas (>1MW) ante CENACE y CFE. Estudios de factibilidad, subestaciones e interconexión al Mercado Eléctrico Mayorista.",
    url: "/servicios/gestoria/cenace-y-cfe-1mw",
    type: "website",
  },
};

const subservices = [
  {
    id: "prefactibilidad",
    title: "Prefactibilidad",
    desc: "Evaluación temprana para dimensionar viabilidad y ruta del proyecto antes de invertir tiempo y capital en el proceso formal.",
    problem:
      "Para saber si el sitio es viable normalmente hay que pagar estudios caros y esperar semanas.",
    solution:
      "Estudio rápido con información pública y criterios técnicos para entregar:",
    desc2: `- Dictamen preliminar del sitio (viable / viable con retos / no recomendable).
- Estimación de complejidad y principales restricciones.
- Riesgos de refuerzo y recomendaciones para selección de punto/sitio.`,
  },
  {
    id: "estrategia-de-promocion",
    title: "Estrategia de promoción",
    desc: "Definimos la mejor ruta técnica y documental para presentar el proyecto con mayor claridad, sustento y posibilidades de avance desde sus primeras etapas.",
    problem:
      "Muchos proyectos se presentan de forma plana, sin una estrategia que fortalezca su evaluación y reduzca incertidumbre.",
    solution:
      "Diseñamos una estrategia específica por proyecto, integrando información útil para su mejor promoción, alineada con las necesidades de la zona y del proceso.",
  },
  {
    id: "manejo-de-siasic",
    title: "Manejo de SIASIC",
    desc: "Ofrecemos una gestión especializada del SIASIC en CENACE, asegurando la correcta integración, validación y carga estratégica de la información desde el inicio.",
    problem:
      "Errores frecuentes, inconsistencias técnicas y cargas documentales mal estructuradas provocan prevenciones, aclaraciones y retrasos en el trámite.",
    solution:
      "Anticipamos errores frecuentes, prevenimos inconsistencias técnicas y reducimos requerimientos de aclaración para evitar retrasos y reprocesos en el trámite.",
  },
  {
    id: "modelo-matematico",
    title: "Modelo matemático para estudios ante CENACE",
    desc: "En los procesos de interconexión de centros de carga >1 MW, uno de los puntos más críticos es el modelo matemático requerido para los estudios eléctricos.",
    problem: "No siempre está claro:",
    problemList: [
      "Qué variables debe incluir el modelo.",
      "Qué nivel de detalle exige el estudio.",
      "Cómo integrar correctamente el perfil de carga real.",
      "Cómo presentar la información para que sea técnicamente consistente.",
      "Errores en el armado del modelo pueden traducirse en solicitudes de aclaración, reprocesos y retrasos significativos.",
    ],
    solution:
      "Nos hacemos responsables del armado integral, validación técnica y entrega del modelo matemático requerido para el trámite ante CENACE.",
    solutionList: [
      "Definición correcta de parámetros eléctricos.",
      "Integración coherente del perfil de carga.",
      "Revisión de consistencia entre memoria técnica y modelo.",
      "Preparación del archivo conforme a los criterios de estudio.",
    ],
  },
  {
    id: "perfiles-de-carga",
    title: "Perfiles de carga realistas y optimizados para centros de carga >1 MW",
    desc: "En los estudios de interconexión ante CENACE, el perfil de carga es un elemento determinante para evaluar capacidad de red, restricciones y necesidad de obras de refuerzo.",
    problem: "Problema habitual",
    problemList: [
      "Con frecuencia se utiliza un perfil continuo o plano, que asume una demanda constante durante todo el periodo de análisis.",
      "Aunque es una aproximación sencilla, rara vez refleja la operación real del proceso productivo.",
      "El resultado puede ser sobredimensionamiento, requerimientos de refuerzo innecesarios e incremento significativo en costos de interconexión.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Desarrollamos perfiles de carga realistas y técnicamente sustentados, alineados al comportamiento operativo real del centro de carga.",
      "Análisis detallado del proceso productivo y sus ciclos de operación.",
      "Identificación de picos reales vs. picos teóricos.",
      "Evaluación de demanda controlable, cuando es técnicamente viable.",
      "Proyección de escenarios futuros de crecimiento.",
    ],
  },
  {
    id: "diseno-de-red-interna",
    title: "Diseño de redes eléctricas para interconexión y suministro",
    desc: "Diseñamos componentes, esquemas de conexión, niveles de tensión e infraestructura para distribuir energía de forma segura, confiable y económicamente eficiente.",
    problem: "Problema habitual",
    problemList: [
      "Se subestima el alcance real de la infraestructura necesaria para interconexión y suministro.",
      "No siempre está claro qué nivel de tensión, configuración o esquema de conexión conviene técnica y económicamente.",
      "Una mala definición puede provocar rediseños, retrasos, sobrecostos y observaciones durante la revisión del proyecto.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Desarrollamos diseños eléctricos consistentes con la demanda real, el punto de interconexión y los criterios técnicos aplicables.",
      "Definimos niveles de tensión, esquemas de conexión y componentes principales con enfoque en seguridad, confiabilidad y costo total.",
      "Alineamos subestaciones, alimentadores, protecciones, medición y puesta a tierra dentro de una sola lógica técnica.",
    ],
  },
  {
    id: "seguimiento-atencion-y-representacion",
    title: "Seguimiento, atención y representación",
    desc: "Brindamos acompañamiento integral para que la comunicación con CENACE y CFE sea directa, clara y estratégica, evitando conflictos y reprocesos.",
    problem:
      "La comunicación con CENACE y CFE suele fragmentarse entre distintas áreas, generando retrasos y falta de trazabilidad.",
    solution:
      "Gestión activa de aclaraciones, control de trazabilidad y acompañamiento técnico durante todo el proceso.",
  },
  {
    id: "coordinacion-de-adquisiciones",
    title: "Coordinación de adquisiciones",
    desc: "Validamos proveedores y materiales críticos para asegurar que el proyecto cumpla con especificaciones técnicas y normativa aplicable.",
    problem:
      "La selección de proveedores sin validación técnica adecuada puede generar incumplimientos, sobrecostos y reprocesos.",
    solution:
      "Coordinamos y validamos adquisiciones con enfoque en cumplimiento, especificaciones y compatibilidad con el proyecto.",
  },
  {
    id: "coordinacion-del-proyecto",
    title: "Coordinación del proyecto",
    desc: "Alineamos ingeniería, contratistas y autoridades para mantener una sola ruta técnica, regulatoria y operativa.",
    problem:
      "La falta de coordinación entre ingeniería, adquisiciones, contratistas y autoridades puede provocar retrasos y sobrecostos.",
    solution:
      "Alineación integral del proyecto para cumplir objetivos técnicos, regulatorios y financieros.",
  },
  {
    id: "reuniones-con-cfe",
    title: "Reuniones con CFE",
    desc: "Preparamos y conducimos reuniones técnicas con argumentos sólidos para evitar sobrecostos, aclarar criterios y optimizar acuerdos.",
    problem:
      "Sin una conducción técnica adecuada, las reuniones y aclaraciones pueden extenderse innecesariamente o no resolver el fondo del problema.",
    solution:
      "Preparamos la información clave y acompañamos reuniones con enfoque técnico y estratégico.",
  },
  {
    id: "carpeta-de-proyecto",
    title: "Carpeta de proyecto",
    desc: "Integramos la base documental y el contenido técnico necesario para fortalecer la evaluación del proyecto y facilitar su seguimiento.",
    problem:
      "La documentación incompleta o poco consistente debilita la evaluación y genera más solicitudes de aclaración.",
    solution:
      "Integramos una carpeta de proyecto clara, consistente y útil para el trámite y el seguimiento.",
  },
  {
    id: "demanda-controlable",
    title: "Control de la demanda eléctrica y aprovechamiento de beneficios económicos",
    desc: "Evaluamos la posibilidad de participar en esquemas de control de demanda eléctrica, especialmente cuando existen cargas no prioritarias que pueden modularse.",
    problem: "Problema habitual",
    problemList: [
      "Gran parte de los proyectos no evalúan la posibilidad de aplicar control de demanda eléctrica.",
      "Operan con perfiles rígidos que no consideran flexibilidad operativa.",
      "Desconocen que pueden obtener ingresos o ahorros por apoyar la confiabilidad del sistema.",
    ],
    solution: "Nuestra solución",
    solutionList: [
      "Evaluación técnica y económica integral para determinar si el proyecto puede participar en esquemas de control de la demanda.",
      "Identificación y seccionamiento de cargas no prioritarias.",
      "Cuantificación de beneficios económicos potenciales.",
      "Diseño de una estrategia para implementar el control de la demanda eléctrica sin comprometer continuidad ni productividad.",
    ],
  },
];

export default function CenaceCfe1mwPage() {
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
            href="/servicios/gestoria"
            className="font-semibold text-brand-green hover:underline"
          >
            Gestoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">CENACE y CFE &gt; 1MW</span>
        </div>

        {/* HERO */}
        <section className="mt-8">
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
            <div>
              <p className="text-sm font-semibold text-brand-green">Gestoría</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <span className="text-brand-blue">Gestoría CENACE</span> y{" "}
                <span className="text-brand-blue">CFE</span> para{" "}
                <span className="text-brand-blue">Grandes Usuarios</span> (&gt;1MW)
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Cuando la demanda de tu proyecto supera el{" "}
                <span className="font-semibold text-brand-green">1 MW (1,000 kW)</span>,
                tu empresa deja de ser un consumidor convencional para convertirse
                en un <span className="font-semibold text-brand-green">Usuario Calificado</span>.
                Este nivel de consumo requiere una integración estratégica al{" "}
                <span className="font-semibold text-brand-green">
                  Mercado Eléctrico Mayorista (MEM)
                </span>
                , donde la gestión ya no es solo con{" "}
                <span className="font-semibold text-brand-green">CFE</span>,
                sino directamente con el{" "}
                <span className="font-semibold text-brand-green">CENACE</span>.
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
                <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px]">
                  <Image
                    src="/imagen/gestoria/cenace-cfe-1mw.jpg"
                    alt="CENACE y CFE > 1MW"
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
        <section id="subservicios" className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Alcances</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Qué ofrece nuestro servicio
              </h2>
              <p className="mt-2 max-w-none whitespace-pre-line text-sm text-ink-muted">
                {`En Energía México, facilitamos esta transición técnica y regulatoria mediante:`}
              </p>

              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <span className="font-semibold text-ink">Gestión Integral ante CENACE y CFE:</span>{" "}
                  Administramos los requisitos técnicos estrictos para asegurar el acceso imparcial a las Redes Generales de Distribución.
                </li>
                <li>
                  <span className="font-semibold text-ink">Infraestructura de Alta Tensión:</span>{" "}
                  Diseñamos y supervisamos la construcción de subestaciones eléctricas y redes dedicadas necesarias para grandes cargas industriales.
                </li>
                <li>
                  <span className="font-semibold text-ink">Estudios de Factibilidad e Interconexión:</span>{" "}
                  Realizamos los análisis obligatorios exigidos para asegurar que la capacidad de la red soporte tu demanda.
                </li>
                <li>
                  <span className="font-semibold text-ink">Estrategia de Suministro:</span>{" "}
                  Te asesoramos en la contratación de energía con CFE Calificados o Suministradores Independientes.
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-10">
            <div className="rounded-3xl border border-surface-border bg-white/80 p-8 shadow-sm backdrop-blur">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-brand-green">Problema que resolvemos</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    ¿Qué frena este tipo de proyectos?
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Incertidumbre sobre si el sitio es viable para interconectarse en media o alta tensión.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Alto costo y tiempo de estudios formales, con pagos relevantes y tiempos de espera largos para una primera definición.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Proyectos que se encarecen por perfiles de carga poco realistas o por documentación técnica insuficiente.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Complejidad de SIASIC y dificultad para dar seguimiento sin un canal directo y claro.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-brand-green">Solución</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    Validar primero, invertir después
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span><span className="font-semibold text-ink">Prefactibilidad rápida</span> y de bajo costo para estimar viabilidad, complejidad y riesgos.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Con un presupuesto equivalente al de un solo estudio formal, puedes <span className="font-semibold text-ink">evaluar varios sitios</span> y elegir mejor.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Estrategia técnica lista para análisis, con entregables claros y consistentes para reducir rondas de aclaraciones.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>Gestión integral del proceso: SIASIC, modelo, perfiles, diseño interno, seguimiento y documentación.</span>
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
                      {s.problem && (
                        <p className="mt-1 text-sm font-semibold text-ink">{s.problem}</p>
                      )}
                      {s.problemList && (
                        <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                          {s.problemList.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-0.5 flex-none text-brand-green">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Solución
                      </p>
                      {s.solution && (
                        <p className="mt-1 text-sm text-ink">{s.solution}</p>
                      )}

                      {s.solutionList && (
                        <>
                          <p className="mt-4 text-sm font-semibold text-ink">
                            Esto incluye:
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                            {s.solutionList.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="mt-0.5 flex-none text-brand-green">✔</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {s.desc2 && (
                    <p className="mt-4 max-w-3xl whitespace-pre-line text-sm text-ink-muted">
                      {s.desc2}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                    >
                      Solicitar trámite
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
                  Un expediente sólido reduce tiempos y observaciones
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Si tu proyecto es &gt; 1MW, armamos ruta, entregables y seguimiento para avanzar con claridad.
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
                  href="/servicios/gestoria"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Volver a Gestoría
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}