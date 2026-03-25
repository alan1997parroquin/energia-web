// app/servicios/capacitacion/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Video = {
  title: string;
  desc: string;
  embedUrl: string;
  bullets: string[];
};

type Topic = {
  slug: "mem" | "riesgos" | "calliope" | "certificaciones" | "datos";
  title: string;
  intro: string;
  desc: string;
  extraText: string;
  videos: Video[];
};

export const metadata: Metadata = {
  title: "Capacitación energética en video | MEM, riesgos, Calliope y datos",
  description:
    "Explora videos de capacitación energética sobre Mercado Eléctrico Mayorista, análisis de riesgos y oportunidades, modelo de despacho en Calliope, preparación para certificaciones y análisis de datos MEM.",
  keywords: [
    "capacitación energética",
    "videos de energía",
    "Mercado Eléctrico Mayorista",
    "MEM",
    "análisis de riesgos energéticos",
    "oportunidades energéticas",
    "Calliope",
    "modelo de despacho",
    "certificaciones energéticas",
    "análisis de datos MEM",
    "mercado eléctrico mexicano",
    "consultoría energética",
    "Energía México",
  ],
  alternates: {
    canonical: "/servicios/capacitacion",
  },
  openGraph: {
    title: "Capacitación energética en video | Energía México",
    description:
      "Videos sobre MEM, análisis de riesgos y oportunidades, Calliope, certificaciones y análisis de datos del mercado eléctrico.",
    url: "/servicios/capacitacion",
    siteName: "Energía México",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Capacitación energética | Energía México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacitación energética en video | Energía México",
    description:
      "Videos sobre MEM, riesgos y oportunidades, Calliope, certificaciones y análisis de datos MEM.",
    images: ["/og/og-home.jpg"],
  },
};

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white shadow-sm">
          <div className="relative p-4 sm:p-5">
            <div className="relative w-full overflow-hidden rounded-2xl border border-surface-border bg-black/5">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-3xl border border-surface-border bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-ink">¿Qué verás en este video?</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{video.desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {video.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="/contacto#formulario-cotizacion"
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopicSection({ topic, index }: { topic: Topic; index: number }) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={topic.slug}
      className={`relative scroll-mt-28 overflow-hidden border-t border-surface-border ${
        isAlt ? "bg-white" : "bg-surface-soft/50"
      }`}
    >
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
        <div className="max-w-5xl">
          <p className="text-sm font-semibold text-brand-green">Capacitación</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {topic.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink">
            {topic.intro}
          </p>

          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {topic.desc}
          </p>

          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {topic.extraText}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {topic.videos.map((video) => (
            <div key={`${topic.slug}-${video.title}`}>
              <div className="mb-6">
                <p className="text-sm font-semibold text-brand-green">Video</p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                  {video.title}
                </h3>
              </div>

              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CapacitacionLanding() {
  const topics: Topic[] = [
    {
      slug: "mem",
      title: "Mercado Eléctrico Mayorista (MEM)",
      intro:
        "Esta sección reúne contenido en video para comprender mejor los fundamentos del Mercado Eléctrico Mayorista y su lógica de operación.",
      desc:
        "El objetivo es ofrecer una base clara para equipos técnicos, operativos y de decisión que necesitan entender cómo funciona el mercado, quiénes participan y qué conceptos son clave para interpretar información, escenarios y oportunidades dentro del sector eléctrico.",
      extraText:
        "Este material es útil para quienes buscan una base más clara sobre el entorno del Mercado Eléctrico Mayorista y necesitan conectar conceptos técnicos con una mejor comprensión del mercado, su lógica operativa y su impacto en la toma de decisiones.",
      videos: [
        {
          title: "Mercado Eléctrico Mayorista (MEM)",
          desc:
            "Introducción general al MEM para entender su funcionamiento, participantes y conceptos principales del mercado.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/kCZ02WDfaH4?rel=0&modestbranding=1",
          bullets: [
            "Qué es el Mercado Eléctrico Mayorista",
            "Participantes y lógica del sistema",
            "Conceptos básicos para comenzar",
          ],
        },
      ],
    },
    {
      slug: "riesgos",
      title: "Análisis de riesgos y oportunidades",
      intro:
        "Esta sección presenta contenido orientado a identificar factores que impactan proyectos, operación y toma de decisiones en materia energética.",
      desc:
        "Aquí se abordan elementos que ayudan a reconocer riesgos técnicos, regulatorios y económicos, así como oportunidades de optimización y mejora. El enfoque busca apoyar una lectura más estratégica del entorno energético y facilitar decisiones con mayor contexto.",
      extraText:
        "Este contenido resulta especialmente útil para empresas y equipos que necesitan anticipar impactos, evaluar sensibilidad ante cambios del entorno y reconocer dónde existen oportunidades de mejora operativa, regulatoria o económica. Busca aportar una lectura práctica para decidir con mayor contexto.",
      videos: [
        {
          title: "Análisis de riesgos y oportunidades",
          desc:
            "Contenido para identificar riesgos y oportunidades relevantes dentro del entorno energético y regulatorio.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/03jlWG0L6JQ?rel=0&modestbranding=1",
          bullets: [
            "Factores de riesgo más comunes",
            "Oportunidades de mejora y ahorro",
            "Lectura estratégica de escenarios",
          ],
        },
      ],
    },
    {
      slug: "calliope",
      title: "Modelo de despacho en Calliope",
      intro:
        "Esta sección agrupa videos relacionados con el modelado y análisis de escenarios mediante Calliope.",
      desc:
        "El contenido está pensado para quienes buscan entender de manera práctica cómo se estructuran modelos, cómo se construyen escenarios y cómo se interpretan resultados para apoyar procesos de planeación, simulación y toma de decisiones en energía.",
      extraText:
        "Los videos de esta sección ayudan a aterrizar cómo los modelos y escenarios pueden convertirse en herramientas útiles para analizar decisiones, comparar supuestos y comunicar resultados técnicos de una forma más clara para equipos y responsables del proyecto.",
      videos: [
        {
          title: "Creación de un Gemelo Digital",
          desc:
            "Conceptos y pasos clave para estructurar un gemelo digital y conectar modelos con decisiones.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/KeKBqK59qXE?rel=0&modestbranding=1",
          bullets: [
            "Concepto de gemelo digital aplicado a energía",
            "Datos, supuestos y estructura del modelo",
            "Cómo se conecta con decisiones y KPIs",
          ],
        },
        {
          title: "Gemelo Digital",
          desc:
            "Complemento para entender el enfoque y aplicaciones típicas del gemelo digital en análisis y operación.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/FiqMtrvsL1s?rel=0&modestbranding=1",
          bullets: [
            "Aplicaciones del gemelo digital en proyectos",
            "Cómo se usa para reducir incertidumbre",
            "Mensajes ejecutivos y decisiones típicas",
          ],
        },
      ],
    },
    {
      slug: "certificaciones",
      title: "Preparación para certificaciones",
      intro:
        "Esta sección concentra material de apoyo para reforzar conocimientos y acompañar procesos de preparación en temas energéticos.",
      desc:
        "Los videos disponibles sirven como referencia para estudio, repaso y consolidación de conceptos importantes. La intención es ofrecer un punto de apoyo útil mientras se desarrolla una estructura más completa de capacitación y temarios especializados.",
      extraText:
        "Esta sección funciona como apoyo para repasar conceptos y fortalecer conocimientos técnicos. El contenido puede servir como referencia para estudio, preparación y consolidación de temas importantes dentro del entorno energético.",
      videos: [
        {
          title: "Preparación para certificaciones - Video 1",
          desc:
            "Video de apoyo para reforzar conocimientos y preparar contenidos clave.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/BiTCG5pL4-E?start=1&rel=0&modestbranding=1",
          bullets: [
            "Repaso de conceptos",
            "Refuerzo de contenido técnico",
            "Apoyo para preparación",
          ],
        },
        {
          title: "Preparación para certificaciones - Video 2",
          desc:
            "Complemento en video para continuar el repaso y profundizar en temas relevantes.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/6pcFY1ZuRVI?rel=0&modestbranding=1",
          bullets: [
            "Continuidad del repaso",
            "Profundización en puntos clave",
            "Referencia útil para estudio",
          ],
        },
      ],
    },
    {
      slug: "datos",
      title: "Análisis de datos MEM",
      intro:
        "Esta sección está enfocada en el uso e interpretación de datos del Mercado Eléctrico Mayorista.",
      desc:
        "El contenido busca mostrar cómo la información del MEM puede convertirse en una herramienta útil para análisis técnico y toma de decisiones. Es una base inicial para equipos que necesitan familiarizarse con la lectura, interpretación y aprovechamiento de datos del mercado.",
      extraText:
        "El enfoque aquí está en mostrar cómo la información del MEM puede leerse con mayor criterio y aprovecharse como insumo para análisis más claros. Es una base útil para quienes necesitan familiarizarse con datos, indicadores y su interpretación práctica.",
      videos: [
        {
          title: "Análisis de datos MEM",
          desc:
            "Video enfocado en la lectura de datos del MEM y su aplicación en análisis energético.",
          embedUrl:
            "https://www.youtube-nocookie.com/embed/BiTCG5pL4-E?start=1&rel=0&modestbranding=1",
          bullets: [
            "Uso de datos del MEM",
            "Lectura e interpretación de información",
            "Base para análisis y decisiones",
          ],
        },
      ],
    },
  ];

  return (
    <main className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-24">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link
            href="/servicios"
            className="font-semibold text-brand-green hover:underline"
          >
            Servicios
          </Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Capacitación</span>
        </div>

        <section className="relative mt-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
            <div>
              <p className="text-sm font-semibold text-brand-green">
                Capacitación
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Videos de <span className="text-brand-blue">capacitación energética</span>{" "}
                para equipos técnicos y de decisión
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Reunimos material en video sobre temas clave del sector eléctrico
                y del Mercado Eléctrico Mayorista para facilitar el aprendizaje,
                la consulta técnica y la comprensión de conceptos que apoyan la
                toma de decisiones.
              </p>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Actualmente esta página concentra los videos disponibles por tema.
                Más adelante podremos estructurar una oferta más completa con
                cursos, temarios y rutas de capacitación específicas.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#indice-capacitacion"
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                >
                  Ver temas
                </Link>
                <Link
                  href="/contacto#formulario-cotizacion"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Solicitar información
                </Link>
              </div>
            </div>

            <div className="lg:pt-6">
              <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
                <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[460px]">
                  <Image
                    src="/imagen/capacitacion/mem1.jpg"
                    alt="Capacitación energética para empresas"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="indice-capacitacion" className="mt-14">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-8 rounded-3xl border border-surface-border bg-surface-soft/50 p-6">
              <p className="text-sm font-semibold text-brand-green">
                Qué encontrarás aquí
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Contenido organizado por tema
              </h2>

              <p className="mt-3 max-w-none text-sm leading-relaxed text-ink-muted">
                La sección está organizada para que puedas explorar el contenido
                disponible de forma clara. Cada tema incluye una breve explicación
                del subservicio, contexto general y los videos publicados hasta ahora.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <span className="font-semibold text-ink">Videos por tema:</span>{" "}
                  cada bloque concentra el material disponible para un subservicio
                  específico.
                </li>
                <li>
                  <span className="font-semibold text-ink">Descripción de cada área:</span>{" "}
                  añadimos contexto para entender qué cubre cada tema y cómo puede
                  ser útil.
                </li>
                <li>
                  <span className="font-semibold text-ink">Consulta directa:</span>{" "}
                  puedes reproducir los videos dentro de la página.
                </li>
                <li>
                  <span className="font-semibold text-ink">Base para futuras rutas formativas:</span>{" "}
                  esta página servirá como punto de partida para estructurar una oferta
                  de capacitación más completa.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 rounded-3xl border border-surface-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-ink">Índice de temas</p>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="#mem"
                  className="rounded-2xl border border-surface-border px-4 py-3 text-sm font-medium text-ink hover:bg-surface-soft"
                >
                  Mercado Eléctrico Mayorista (MEM)
                </Link>
                <Link
                  href="#riesgos"
                  className="rounded-2xl border border-surface-border px-4 py-3 text-sm font-medium text-ink hover:bg-surface-soft"
                >
                  Análisis de riesgos y oportunidades
                </Link>
                <Link
                  href="#calliope"
                  className="rounded-2xl border border-surface-border px-4 py-3 text-sm font-medium text-ink hover:bg-surface-soft"
                >
                  Modelo de despacho en Calliope
                </Link>
                <Link
                  href="#certificaciones"
                  className="rounded-2xl border border-surface-border px-4 py-3 text-sm font-medium text-ink hover:bg-surface-soft"
                >
                  Preparación para certificaciones
                </Link>
                <Link
                  href="#datos"
                  className="rounded-2xl border border-surface-border px-4 py-3 text-sm font-medium text-ink hover:bg-surface-soft"
                >
                  Análisis de datos MEM
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8">
        {topics.map((topic, index) => (
          <TopicSection key={topic.slug} topic={topic} index={index} />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <section className="mt-16 border-t border-surface-border pt-12">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  ¿Quieres capacitación para tu equipo?
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Podemos ayudarte a identificar el contenido adecuado y plantear
                  una capacitación más alineada a tus objetivos.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto#formulario-cotizacion"
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