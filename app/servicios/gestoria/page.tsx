// app/servicios/gestoria/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestoría CFE y CENACE | Solicitud de Interconexión y Servicio",
  description:
    "Expertos en normas de CFE, subestaciones y trámites del Mercado.",
  keywords: [
    "gestoría energética",
    "CFE",
    "CENACE",
    "trámites eléctricos",
    "interconexión",
    "GESTORIA CFE",
    "gestoría",
    "proyectos eléctricos México",
    "solicitud de servicio CFE",
    "interconexión CENACE",
    "interconexión CFE",
    "energía electrcia CFE",
    "formato de solicitud de servicio de energía electrica CFE",
    "CFE calificados",
    "red eléctrica",
  ],
  alternates: {
    canonical: "/servicios/gestoria",
  },
  openGraph: {
    title: "Gestoría CFE y CENACE | Solicitud de Interconexión y Servicio | Energía México",
    description:
      "Expertos en normas de CFE, subestaciones y trámites del Mercado.",
    url: "/servicios/gestoria",
    type: "website",
  },
};

type Service = {
  slug: "cfe-baja-tension-y-media" | "cenace-y-cfe-1mw";
  title: string;
  desc: string;
  bullets: string[];
  eyebrow: string;
  image: string;
};

const services: Service[] = [
  {
    slug: "cfe-baja-tension-y-media",
    eyebrow: "Gestoría",
    title: "Gestoría Especializada ante CFE: Baja y Media Tensión",
    desc: "Mediante un análisis técnico y administrativo elimina la incertidumbre y déjanos el trabajo pesado a nosotros.",
    bullets: [
      "Prefactibilidad de carga",
      "Cambio de nombre",
      "Nuevo servicio",
      "Incremento de demanda",
      "Interconexión",
    ],
    image: "/imagen/gestoria/cfe-baja-media.jpg",
  },
  {
    slug: "cenace-y-cfe-1mw",
    eyebrow: "Gestoría",
    title: "Gestoría CENACE y CFE para Grandes Usuarios (>1MW)",
    desc: "Gestionamos la factibilidad, los estudios y los trámites necesarios para conectar tu proyecto o centro de carga mayor a 1 MW a la red eléctrica, cumpliendo los requisitos de CENACE, CFE y la regulación aplicable. Te acompañamos en el proceso de interconexión (alta o media tensión), definición de infraestructura requerida (p. ej., subestación) y coordinación con Suministradores de Servicios Calificados o CFE Calificados ",
    bullets: [
      "Prefactibilidad",
      "Manejo de SIASIC",
      "Modelo matemático",
      "Perfiles de carga",
      "Carpeta de proyecto",
    ],
    image: "/imagen/gestoria/cenace-cfe-1mw.jpg",
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
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">{s.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {s.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-ink-muted">{s.desc}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/servicios/gestoria/${s.slug}`}
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
                  href={`/servicios/gestoria/${s.slug}`}
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

export default function GestoriaLanding() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      {/* HERO */}
<section className="relative">
  <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-24">
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/servicios" className="font-semibold text-brand-green hover:underline">
            Servicios
          </Link>
          <span className="text-ink-soft">/</span>
          <p className="text-sm font-semibold text-ink">Gestoría</p>
        </div>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <span className="text-brand-blue">Gestoría de Energía</span> en México:{" "}
          <span className="text-brand-blue">Trámites</span> ante{" "}
          <span className="text-brand-blue">CFE</span> y{" "}
          <span className="text-brand-blue">CENACE</span> para{" "}
          <span className="text-brand-blue">Proyectos Eléctricos</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-ink-muted">
          Simplificamos tu{" "}
          <span className="font-semibold text-brand-green">
            solicitud de servicio CFE
          </span>{" "}
          y los procesos de{" "}
          <span className="font-semibold text-brand-green">interconexión</span>{" "}
          ante <span className="font-semibold text-brand-green">CENACE</span>. Nuestra{" "}
          <span className="font-semibold text-brand-green">gestoría</span> técnica y administrativa asegura que tu proyecto cumpla con las normas de{" "}
          <span className="font-semibold text-brand-green">CFE</span> para instalaciones eléctricas, garantizando una acometida eléctrica CFE eficiente y sin retrasos. Dividimos nuestra especialización en dos niveles críticos:
          <br />
          <br />
          Proyectos de Baja y Media Tensión: Gestionamos tu solicitud de energía CFE, el{" "}
          <span className="font-semibold text-brand-green">
            formato de solicitud de servicio de energía eléctrica CFE
          </span>{" "}
          y la validación de subestaciones eléctricas CFE para negocios e industrias ligeras.
          <br />
          <br />
          Proyectos de Alta Demanda (&gt; 1MW): Expertos en el Mercado Eléctrico Mayorista, gestionamos la demanda CENACE y la{" "}
          <span className="font-semibold text-brand-green">
            interconexión CFE
          </span>{" "}
          para grandes centrales y usuarios industriales, analizando precios marginales locales para optimizar tu contrato.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
          >
            Solicitar diagnóstico
          </Link>
          <Link
            href="#cfe-baja-tension-y-media"
            className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
          >
            Ver servicios
          </Link>
        </div>
      </div>

      <div className="lg:pt-4">
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
            <div className="relative h-[240px] w-full">
              <Image
                src="/imagen/gestoria/cfe-baja-media.jpg"
                alt="Gestoría para proyectos en baja y media tensión con CFE"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-5">
              
              <h3 className="mt-1 text-lg font-bold tracking-tight text-ink">
                CFE baja tensión y media
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Trámites, documentación y seguimiento para nuevos servicios,
                incrementos de demanda, cambios de nombre e interconexión.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-surface-border bg-white shadow-sm">
            <div className="relative h-[220px] w-full">
              <Image
                src="/imagen/gestoria/cenace-cfe-1mw.jpg"
                alt="Gestión técnica-regulatoria ante CENACE y CFE para proyectos mayores a 1 MW"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              
              <h3 className="mt-1 text-lg font-bold tracking-tight text-ink">
                CENACE y CFE &gt; 1 MW
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Soporte técnico-regulatorio para proyectos mayores, con enfoque en
                requisitos, coordinación documental y ruta de cumplimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="mt-4">
        {services.map((s, i) => (
          <ServiceSection key={s.slug} s={s} index={i} />
        ))}
      </div>

      <section className="border-t border-surface-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  ¿Quieres que armemos la ruta y checklist para tu caso?
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Te decimos qué aplica, qué documentos necesitas y cómo avanzar con menor incertidumbre.
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