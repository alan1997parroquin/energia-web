// app/servicios/gestoria/cfe-baja-tension-y-media/page.tsx
import Link from "next/link";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CFE Alta y Media Tensión | Prefactibilidad y Trámites",
  description:
    "Reduce la incertidumbre antes de solicitar a CFE. Prefactibilidad rápida con información pública y soporte en nuevo servicio, incremento de demanda, cambio de nombre e interconexión.",
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
    canonical: "/servicios/gestoria/cfe-baja-tension-y-media",
  },
  openGraph: {
    title: "CFE Alta y Media Tensión | Prefactibilidad y Trámites | Energía México",
    description:
      "Reduce la incertidumbre antes de solicitar a CFE. Prefactibilidad rápida con información pública y soporte en nuevo servicio, incremento de demanda, cambio de nombre e interconexión.",
    url: "/servicios/gestoria/cfe-baja-tension-y-media",
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
  title: "Prefactibilidad de carga",
  desc: `Evaluación preliminar para estimar viabilidad técnica del suministro en media tensión CFE o alta tensión, riesgos y posibles obras asociadas.

        Ejemplos Entregables:

        - Dictamen preliminar (viable / viable con obras / no recomendable).
        - Recomendación de punto y nivel de tensión.
        - Lista de información faltante y siguientes pasos para CFE.`,
        problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
        solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
},
  {
    title: "Cambio de nombre",
    desc: "Gestión y soporte para cambio de titularidad del servicio, evitando retrasos por inconsistencias documentales.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Nuevo servicio",
    desc: "Acompañamiento para estructurar y preparar la solicitud de nuevo servicio en media o alta tensión, considerando requerimientos técnicos y documentales.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Incremento de demanda",
    desc: "Análisis y estrategia para solicitar aumento de carga, identificando impactos en infraestructura, posibles refuerzos y probables tiempos de atención.",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
  {
    title: "Interconexión (relacionada al suministro del proyecto)",
    desc: "Soporte para el proceso de interconexión asociado al proyecto cuando aplique (por ejemplo, adecuaciones para conexión a la red o integración de infraestructura requerida por CFE).",
    problem:
      "Incertidumbre de si un proyecto es factible; se requiere interacción con CFE en un proceso que es complejo para los usuarios.",
    solution:
      "Realizamos un estudio rápido con información pública que puede indicar rápidamente al usuario si su proyecto es viable o no antes de solicitar a CFE.",
  },
].map((s) => ({ ...s, id: toId(s.title) }));

export default function CfeBajaTensionYMediaPage() {
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
          <Link href="/servicios/gestoria" className="font-semibold text-brand-green hover:underline">
            Gestoría
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">CFE baja tensión y media</span>
        </div>

        {/* HERO */}
            <section className="mt-8">
              <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
                {/* Left */}
                <div>
                  <p className="text-sm font-semibold text-brand-green">Gestoría</p>
                  <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                    Gestoría en <span className="text-brand-blue">Media y Alta Tensión CFE</span>
                  </h1>

                  <p className="mt-4 max-w-2xl text-base text-ink-muted">
                    Conectar o ampliar un servicio eléctrico en{" "}
                    <span className="font-semibold text-brand-green">
                      baja media y alta tension cfe
                    </span>{" "}
                    puede convertirse en un proceso lento y
                    confuso: criterios técnicos, capacidad disponible, posibles obras
                    (líneas, equipos, adecuaciones) y tiempos que dependen de la zona.
                    El principal riesgo es avanzar sin claridad y descubrir tarde que el
                    proyecto requiere infraestructura adicional o no es viable en el punto deseado.
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
                        src="/imagen/gestoria/cfe-baja-media.jpg"
                        alt="CFE baja tensión y media"
                        fill
                        className="object-cover"
                        priority
                      />
                  </div>
                </div>
              </div>


                
              </div>
            </section>

                    {/* Bloque adicional de contexto */}
              <section className="mt-10">
                <div className="rounded-3xl border border-surface-border bg-white/80 p-8 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-brand-green">Contexto</p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    ¿Qué problema resolvemos?
                  </h2>

                  <div className="mt-4 max-w-4xl space-y-4 text-sm leading-relaxed text-ink-muted">
                    <p>
                      Reducimos la incertidumbre de factibilidad antes
                      de que inviertas tiempo y dinero en trámites formales.
                      Muchos proyectos fallan por no validar a tiempo condiciones
                      básicas como capacidad de la red local, nivel de tensión,
                      necesidades de subestación/transformación o restricciones operativas.
                    </p>

                    <p>
                      Nuestra solución: Prefactibilidad rápida con información pública.
                      Realizamos un estudio ágil de prefactibilidad de carga usando
                      información pública y criterios técnicos para darte una señal
                      temprana y accionable.
                    </p>

                    <ul className="space-y-3 text-sm text-ink-muted">
                      <li className="flex gap-3">
                        <span className="mt-0.5 flex-none text-brand-green">✔</span>
                        <span>
                          Si el proyecto es viable en el punto propuesto (con o sin obras).
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-0.5 flex-none text-brand-green">✔</span>
                        <span>
                          Qué nivel de tensión es el más probable (media o alta tensión).
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-0.5 flex-none text-brand-green">✔</span>
                        <span>
                          Qué tipo de estructuras de media tensión o adecuaciones podrían requerirse.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-0.5 flex-none text-brand-green">✔</span>
                        <span>
                          Recomendaciones para llegar a CFE con un expediente y estrategia más sólidos.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-0.5 flex-none text-brand-green">✔</span>
                        <span>
                          Resultado: tomas decisiones con claridad antes de iniciar la solicitud con CFE.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

        {/* Subservicios */}
        <section id="subservicios" className="mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-green">Alcances</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Conoce nuestros servicios de baja media y alta tension cfe​
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
                  <h3 className="text-xl font-bold tracking-tight text-ink">{s.title}</h3>

                  <p className="mt-2 max-w-none whitespace-pre-line text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>
                 // <p className="mt-2 max-w-none text-sm leading-relaxed text-ink-muted"></p>
                  

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
                  ¿Para quién es este servicio?
                </h2>
                <p className="mt-2 max-w-3xl whitespace-pre-line text-sm text-ink-muted">
                  Industrias, parques industriales, naves, centros comerciales y espacios públicos.
                  Proyectos que requieren media o alta tensión por su demanda.
                  Usuarios que necesitan una respuesta rápida sobre si su proyecto es viable antes de iniciar el proceso formal con CFE
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
