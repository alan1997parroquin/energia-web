// app/servicios/gestoria/cenace-y-cfe-1mw/page.tsx
import Link from "next/link";
import Image from "next/image";

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
      "Es necesario realizar estudios, para ello hay que pagar aproximadamente 321,000 MXN y esperar hasta 40 días para tener una ídea si el lugar en donde se pretende desarrollar el proyecto es viable.",
    solution:
      "Estudio rápido de bajo costo que arroja en 5 días un estimado de la complegidad y retos a enfrentar, con el costo de lo que se paga a CENACE se pueden evaluar al menos 6 sitios distintos en menos de 20 días.",
  },
  {
    title: "Estrategia de promocion",
    desc: "Plan y enfoque para promover el proyecto con sustento técnico y argumentos adecuados, anticipando los puntos críticos del proceso.",
    problem:
      "Incertidumbre en la factibilidad de proyectos por costos elevados de obras de refuerzo.",
    solution:
      "Estrategia por proyecto específico, incluyendo información no solicitada pero que ayuda a una mejor promoción alineada con las necesidades de la zona.",
  },
  {
    title: "Manejo de SIASIC",
    desc: "Operación y acompañamiento del sistema SIASIC: carga correcta de información, trazabilidad y resolución de observaciones.",
    problem:
      "Dificultad en su manejo, entendimiento de términos y funcionamiento, indiponibilidad de la plataforma.",
    solution:
      "Experiencia probada, conocimiento de fallas comunes y aseguramiento de la correcta carga de información que agilice el proceso.",
  },
  {
    title: "Modelo matemático",
    desc: "Elaboración/validación del modelo matemático requerido para sustentar los estudios del proceso con CENACE.",
    problem: "Falta de clarida de lo que se requiere en los estudios de CENACE",
    solution:
      "Simplificamos el proceso tomando la responsabilidad total del trámite de estudios",
  },
  {
    title: "Perfiles de carga",
    desc: "Construcción de perfiles de carga realistas alineados al proceso productivo, para evitar sobredimensionamientos y costos innecesarios.",
    problem:
      "Perfiles de carga continua que no refleja la verdadera naturaleza del proceso productivo, encareciendo como consecuencia el proyecto con obras de refuerzo excesivas.",
    solution:
      "Aprovechamiento de demanda controlable si es factible, determinación de perfil adoc al proceso e identificación de areas de mejora, valorización de adaptación futura contra obras de refuerzo.",
  },
  {
    title: "Diseño de red interna",
    desc: "Diseño conceptual de red interna con criterios claros, documentación básica y consistencia técnica para responder sin retrasos.",
    problem:
      "Inexistente, o carente de detalles técnicos, generando retrasos en las respuestas de CENACE.",
    solution:
      "Anticipamos los requerimientos con diseños sencillos pero realistas alineados a las necesidades de los analistas de CENACE.",
  },
  {
    title: "Seguimiento, atención y representación",
    desc: "Gestión del seguimiento: atención a dudas/aclaraciones, representación técnica y continuidad del proceso hasta el cierre.",
    problem:
      "El CENACE no tiene una línea de comunicación directa, todo se realiza a través del SIASIC, lo cual puede causar confusión para el seguimiento de dudas o aclraciones.",
    solution:
      "Experiencia de atención con áreas específicas, y uso de mecanismos de contacto probados por trámites previos.",
  },
  {
    title: "Coordinación de adquisiciones",
    desc: "Coordinación para selección de proveedores y cumplimiento de especificaciones/normas durante ejecución de obras.",
    problem:
      "Cuando se ejecutan las obras, es necsario cumplir con especificaciones de CFE y normas específicas, no hacerlo representa grandes sobre costos y retrazos.",
    solution:
      "Experiencia de participación en múltiples proyectos ayudando a una correcta selección de proveedores y validación de cumplimiento de acuerdo a los requerimientos de las autoridades.",
  },
  {
    title: "Coordinación del proyecto",
    desc: "Orquestación completa de actores, dependencias y entregables para mantener el proyecto avanzando sin fricciones.",
    problem: "Dificultad de coordinar diversos actores para un fin específico.",
    solution:
      "Experiencia probada en muchos mas de 100 proyectos nacionales e internacionales",
  },
  {
    title: "Reuniones con CFE",
    desc: "Preparación y acompañamiento en reuniones: agenda, argumentos técnicos, alineación con especificaciones y seguimiento de acuerdos.",
    problem:
      "Vacíos técnicos que pueden generar sobre costos por inexperiencia en la negociación con CFE",
    solution:
      "Adecuado manejo de objecciones con argumentos técnicos sólidos y atención a las necesidades del cliente, y en cumplimiento con especificaciones de CFE.",
  },
  {
    title: "Carpeta de proyecto",
    desc: "Integración y control documental del expediente: acuerdos, trazabilidad, consistencia de información y estandarización.",
    problem:
      "Falta de documentación de acuerdos, reuniones, trazabilidad que generan retrazos y sobre costos.",
    solution: "Documentación completa conforme al estándar de CFE.",
  },
  {
    title: "Demanda controlable",
    desc: "Evaluación de participación en programas de demanda controlable: identificación de cargas, beneficios y ruta de implementación.",
    problem:
      "Desconocimiento de que existe un programa de remuneración para usuarios que participen, equivalente a la satisfación de sus requerimientos de potencia y energía.",
    solution:
      "Llevamos a cabo la evaluación de los beneficios de participar en le programa seccionando cargas no prioritarias y garantizándolas generando un beneficio económico sustancial a los usuarios.",
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
            className="font-semibold text-ink hover:underline"
          >
            Gestoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">CENACE y CFE &gt; 1MW</span>
        </div>

        {/* HERO */}
        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Gestoría</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              CENACE y CFE &gt; 1MW
            </h1>

            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Acompañamiento técnico-regulatorio para proyectos mayores a 1MW:
              desde prefactibilidad y estrategia, hasta documentación,
              coordinación y seguimiento con CENACE/CFE. Enfocado en reducir
              incertidumbre, retrabajos, tiempos y costos.
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
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
              <div className="relative h-52 w-full sm:h-64">
                <Image
                  src="/imagen/gestoria/cenace-cfe-1mw.jpg"
                  alt="CENACE y CFE > 1MW"
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
                    <span>Estrategia, expediente y control documental</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Gestión de observaciones y seguimiento puntual</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span>Coordinación técnica con actores del proyecto</span>
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
                    href="/servicios/gestoria"
                    className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                  >
                    Volver a Gestoría
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
                Subservicios CENACE y CFE &gt; 1MW
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Problema/Solución provistos por el cliente. Las descripciones
                son propuestas iniciales y se pueden ajustar.
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
