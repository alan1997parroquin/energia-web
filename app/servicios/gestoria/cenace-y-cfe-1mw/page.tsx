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
    "prefacribilidad de carga",
    "nuevo servicio cfe",
    "incremento de demanda cfe",
    "cambio de nombre cfe",
    "interconexión cfe",
  ],
  alternates: {
    canonical: "/servicios/gestoria/cenace-y-cfe-1mw",
  },
  openGraph: {
    title: "Interconexión ante CENACE >1MW | Usuarios Calificados MEM | Energía México",
    description:
      "Especialistas en gestión de grandes cargas (>1MW) ante CENACE y CFE. Estudios de factibilidad, subestaciones e interconexión al Mercado Eléctrico Mayorista.",
    url: "/servicios/gestoria/cenace-y-cfe-1mw",
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
    title: "Prefactibilidad",
    desc: "Evaluación temprana para dimensionar viabilidad y ruta del proyecto antes de invertir tiempo y capital en el proceso formal.",
    problem:
      "Para saber si el sitio es viable normalmente hay que pagar estudios caros y esperar semanas.",
    solution:
      "Estudio rápido con información pública y criterios técnicos para entregar: ",
    desc2: `- Dictamen preliminar del sitio (viable / viable con retos / no recomendable).
            - Estimación de complejidad y principales restricciones.
            - Riesgos de refuerzo y recomendaciones para selección de punto/sitio.`,
  },
  {
    title: "Manejo de SIASIC",
    desc: "Ofrecemos una gestión especializada del SIASIC en CENACE (Sistema de Atención a Solicitudes de Interconexión y Conexión), asegurando la correcta integración, validación y carga estratégica de la información desde el inicio. Anticipamos errores frecuentes, prevenimos inconsistencias técnicas y reducimos requerimientos de aclaración para evitar retrasos y reprocesos en el trámite.",
    problem:
      "Incertidumbre en la factibilidad de proyectos por costos elevados de obras de refuerzo.",
    solution:
      "Estrategia por proyecto específico, incluyendo información no solicitada pero que ayuda a una mejor promoción alineada con las necesidades de la zona.",
  },
  {
  title: "Modelo matemático para estudios ante CENACE",
  desc: "En los procesos de interconexión de centros de carga >1 MW, uno de los puntos más críticos es el modelo matemático requerido para los estudios eléctricos. Aunque muchos se preguntan qué es un modelo matemático o qué información debe incluir, en la práctica el reto no es conceptual, sino técnico: cómo estructurarlo correctamente para que cumpla con los criterios de análisis de CENACE y no genere prevenciones o rechazos.",
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
  title: "Perfiles de carga realistas y optimizados para centros de carga >1 MW",
  desc: "En los estudios de interconexión ante CENACE, el perfil de carga es un elemento determinante. Representa cómo se comporta la demanda eléctrica a lo largo del tiempo y sirve como base para evaluar capacidad de red, posibles restricciones y necesidad de obras de refuerzo.",
  problem: "Problema habitual",
  problemList: [
    "Con frecuencia se utiliza un perfil continuo o plano, que asume una demanda constante durante todo el periodo de análisis.",
    "Aunque es una aproximación sencilla, rara vez refleja la operación real del proceso productivo.",
    "El resultado puede ser:",
    "Sobredimensionamiento de infraestructura.",
    "Requerimientos de refuerzo innecesarios.",
    "Incremento significativo en costos de interconexión.",
    "Evaluaciones más conservadoras de lo técnicamente necesario.",
    "Un perfil mal definido puede encarecer el proyecto desde la etapa de estudio.",
  ],
  solution: "Nuestra solución",
  solutionList: [
    "Desarrollamos perfiles de carga realistas y técnicamente sustentados, alineados al comportamiento operativo real del centro de carga.",
    "Nuestro enfoque incluye:",
    "Análisis detallado del proceso productivo y sus ciclos de operación.",
    "Identificación de picos reales vs. picos teóricos.",
    "Evaluación de demanda controlable, cuando es técnicamente viable.",
    "Comparación técnica y económica entre ajustes operativos y obras de refuerzo.",
    "Proyección de escenarios futuros de crecimiento.",
  ],
},
 {
  title: "Diseño de redes eléctricas para interconexión y suministro",
  desc: "El diseño de redes eléctricas es un proceso técnico que implica planificar componentes, esquemas de conexión, niveles de tensión e infraestructura —aérea o subterránea— para distribuir energía de forma segura, confiable y económicamente eficiente.\n\nEn proyectos industriales o centros de carga mayores a 1 MW, el diseño puede abarcar alta, media y baja tensión, incluyendo subestaciones, alimentadores, protecciones, sistemas de medición y puesta a tierra.",
  problem: "Problema habitual",
  problemList: [
    "Se subestima el alcance real de la infraestructura necesaria para interconexión y suministro.",
    "No siempre está claro qué nivel de tensión, configuración o esquema de conexión conviene técnica y económicamente.",
    "Una mala definición puede provocar rediseños, retrasos, sobrecostos y observaciones durante la revisión del proyecto.",
    "La falta de coordinación entre memoria técnica, protecciones, medición y obras civiles puede afectar la viabilidad integral.",
  ],
  solution: "Nuestra solución",
  solutionList: [
    "Desarrollamos diseños eléctricos consistentes con la demanda real, el punto de interconexión y los criterios técnicos aplicables.",
    "Definimos niveles de tensión, esquemas de conexión y componentes principales con enfoque en seguridad, confiabilidad y costo total.",
    "Alineamos el diseño de subestaciones, alimentadores, protecciones, medición y puesta a tierra dentro de una sola lógica técnica.",
    "Entregamos una base sólida para avanzar con mayor certidumbre hacia ingeniería de detalle, trámites y ejecución.",
  ],
},
{
  title: "Acompañamiento completo: Seguimiento, coordinación de adquisiciones y proyecto",
  desc: "Brindamos un acompañamiento integral de inicio a fin, asegurando que tu línea de comunicación con CENACE y CFE sea directa, clara y estratégica, evitando conflictos, malentendidos y reprocesos que retrasen el proyecto.\n\nGracias a nuestra experiencia en atención y gestión técnica, reducimos tiempos, esfuerzos y costos, evitando que las solicitudes en SIASIC sean planas; además, agregamos contenido que ayude a promover el proyecto como resultado del estudio de prefactibilidad y facilite su correcta evaluación y seguimiento.\n\nAdemás, evaluamos la viabilidad de participar en esquemas de demanda controlable, analizando la posibilidad de seccionar cargas no prioritarias y garantizar su disponibilidad operativa. Esto puede traducirse en un beneficio económico sustancial, alineando la estrategia energética del usuario con oportunidades regulatorias y operativas.",
  problem: "Problema habitual",
  problemList: [
    "La comunicación con CENACE y CFE suele fragmentarse entre distintas áreas, generando retrasos y falta de trazabilidad.",
    "Muchas solicitudes en SIASIC se presentan de forma plana, sin contenido adicional que fortalezca o promueva el proyecto.",
    "La falta de coordinación entre ingeniería, adquisiciones, contratistas y autoridades puede provocar reprocesos y sobrecostos.",
    "Sin una conducción técnica adecuada, las reuniones y aclaraciones pueden extenderse innecesariamente o no resolver el fondo del problema.",
  ],
  solution: "Nuestra solución",
  solutionList: [
    "Seguimiento, atención, representación y coordinación integral del proyecto en un solo servicio.",
    "Gestión activa de aclaraciones, control de trazabilidad y acompañamiento técnico durante todo el proceso.",
    "Validación de proveedores y aseguramiento de cumplimiento con especificaciones de CFE y normativa aplicable.",
    "Alineación de ingenierías, contratistas y autoridades para cumplir objetivos técnicos, regulatorios y financieros.",
    "Preparación y conducción de reuniones técnicas con CFE, con argumentos sólidos para evitar sobrecostos y optimizar acuerdos.",
    "Incorporación de contenido técnico y estratégico derivado del estudio de prefactibilidad para fortalecer la evaluación y promoción del proyecto.",
    "Evaluación de esquemas de demanda controlable para identificar beneficios operativos y económicos cuando sean viables.",
  ],
},
  {
  title: "Control de la demanda eléctrica y aprovechamiento de beneficios económicos",
  desc: "En muchos centros de carga mayores a 1 MW existe un desconocimiento importante: sí hay esquemas de remuneración y beneficios para usuarios que participan activamente en el control de la demanda eléctrica, especialmente cuando pueden gestionar o modular cargas no prioritarias.",
  problem: "Problema habitual",
  problemList: [
    "Gran parte de los proyectos no evalúan la posibilidad de aplicar control de demanda eléctrica.",
    "Operan con perfiles rígidos que no consideran flexibilidad operativa.",
    "Desconocen que pueden obtener ingresos o ahorros por apoyar la confiabilidad del sistema.",
    "Como consecuencia, se pierde la oportunidad de reducir costos energéticos.",
    "También se desaprovecha la posibilidad de compensar inversiones.",
    "Y se limita la mejora de la viabilidad financiera del proyecto.",
  ],
  solution: "Nuestra solución",
  solutionList: [
    "Realizamos una evaluación técnica y económica integral para determinar si el proyecto puede participar en esquemas de control de la demanda.",
    "Identificación y seccionamiento de cargas no prioritarias.",
    "Análisis de factibilidad operativa sin afectar procesos críticos.",
    "Cuantificación de beneficios económicos potenciales.",
    "Diseño de una estrategia para implementar el control de la demanda eléctrica sin comprometer continuidad ni productividad.",
  ],
},
].map((s) => ({ ...s, id: toId(s.title) }));

export default function CenaceCfe1mwPage() {
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
              {/* Left */}
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
                  Este nivel de consumo requiere una 
                  integración estratégica al{" "}
                  <span className="font-semibold text-brand-green">
                    Mercado Eléctrico Mayorista (MEM)
                  </span>, 
                  donde la gestión ya no es solo con{" "}
                  <span className="font-semibold text-brand-green">CFE</span>, 
                  sino directamente con el{" "}
                  <span className="font-semibold text-brand-green">CENACE</span> 
                  para garantizar el control operativo y el acceso a la Red 
                  Nacional de Transmisión.
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
                Que ofrece nuestro servicio
              </h2>
              <p className="mt-2 max-w-none whitespace-pre-line text-sm text-ink-muted">
                    {`En Energía México, facilitamos esta transición técnica y regulatoria mediante:`}
                  </p>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li>
                      <span className="font-semibold text-ink">Gestión Integral ante CENACE y CFE:</span>{" "}
                      Administramos los requisitos técnicos estrictos para asegurar el acceso imparcial a las Redes Generales de Distribución (RGD).
                    </li>

                    <li>
                      <span className="font-semibold text-ink">Infraestructura de Alta Tensión:</span>{" "}
                      Diseñamos y supervisamos la construcción de subestaciones eléctricas y redes dedicadas necesarias para grandes cargas industriales.
                    </li>

                    <li>
                      <span className="font-semibold text-ink">Estudios de Factibilidad e Interconexión:</span>{" "}
                      Realizamos los análisis obligatorios exigidos por la CRE para asegurar que la capacidad de la red soporte tu demanda, manteniendo los márgenes de reserva y estabilidad del sistema.
                    </li>

                    <li>
                      <span className="font-semibold text-ink">Estrategia de Suministro:</span>{" "}
                      Te asesoramos en la contratación de energía con CFE Calificados o Suministradores Independientes, buscando las tarifas más competitivas bajo condiciones de mercado.
                    </li>
                  </ul>
            </div>
          </div>


            {/* Sub-sección: problema y solución */}
            <section className="mt-10">

            <div className="rounded-3xl border border-surface-border bg-white/80 p-8 shadow-sm backdrop-blur">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Problema */}
                <div>
                  <p className="text-sm font-semibold text-brand-green">Problema que resolvemos</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    ¿Qué frena este tipo de proyectos?
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Incertidumbre sobre si el sitio es viable para interconectarse en media o alta tensión.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Alto costo y tiempo de estudios formales, con pagos relevantes y tiempos de espera largos para una primera definición.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Proyectos que se encarecen por perfiles de carga poco realistas o por documentación técnica insuficiente.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Complejidad de SIASIC y dificultad para dar seguimiento sin un canal directo y claro.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Solución */}
                <div>
                  <p className="text-sm font-semibold text-brand-green">Solución</p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    Validar primero, invertir después
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        <span className="font-semibold text-ink">Prefactibilidad rápida (5 días)</span> y de bajo costo para estimar viabilidad, complejidad y riesgos.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Con un presupuesto equivalente al de un solo estudio formal, puedes <span className="font-semibold text-ink">evaluar varios sitios</span> en menos tiempo y elegir mejor.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Estrategia técnica “lista para análisis”, con entregables claros y consistentes para reducir rondas de aclaraciones.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-0.5 flex-none text-brand-green">✔</span>
                      <span>
                        Gestión integral del proceso: SIASIC, modelo, perfiles, diseño interno, seguimiento y documentación.
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
          <Link
            href={`/servicios/gestoria/cenace-y-cfe-1mw#${s.id}`}
            className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
          >
            Copiar enlace
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
                  Si tu proyecto es &gt; 1MW, armamos ruta, entregables y
                  seguimiento para avanzar con claridad.
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
