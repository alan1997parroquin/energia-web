// app/servicios/fotovoltaico/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Service = {
  slug:
    | "viabilidad"
    | "diseno"
    | "ingenieria"
    | "instalacion"
    | "pruebas"
    | "mantenimiento"
    | "financiamiento"
    | "gestoria-cfe";
  title: string;
  desc: string;
  bullets: string[];
  eyebrow: string;
  image: string;
};

const ROTATE_MS = 5000;

function Catalog({ items, baseHref }: { items: Service[]; baseHref: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((p) => (p + 1) % items.length);
    }, ROTATE_MS);
    return () => window.clearInterval(t);
  }, [items.length]);

  const current = items[active];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
      {/* Foto superior */}
      <div className="relative h-44 w-full sm:h-52">
        <Image
          src={current.image}
          alt={current.title}
          fill
          className="object-cover"
          priority={active === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Catálogo FV
          </p>
          <p className="mt-1 text-sm font-semibold text-white/90">
            {current.eyebrow}
          </p>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
            {current.title}
          </h3>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative p-5">
        <div key={current.slug} className="animate-[fadeIn_.35s_ease-out]">
          <p className="text-sm text-ink-muted">{current.desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {current.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`${baseHref}/${current.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
            >
              Ver detalle
            </Link>

            <Link
              href={`#${current.slug}`}
              className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
            >
              Ir a sección
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver ${items[i].title}`}
              className={`h-2.5 w-2.5 rounded-full border border-surface-border transition ${
                i === active ? "bg-brand-blue" : "bg-white hover:bg-surface-soft"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceSection({
  s,
  index,
  baseHref,
}: {
  s: Service;
  index: number;
  baseHref: string;
}) {
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

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${baseHref}/${s.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
              >
                Ver el servicio
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                Solicitar cotización
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
                  href={`${baseHref}/${s.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark"
                >
                  Ver alcance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FotovoltaicoLanding() {
  const baseHref = "/servicios/fotovoltaico";

  const services = useMemo<Service[]>(
    () => [
      {
        slug: "viabilidad",
        eyebrow: "Integrador Fotovoltaico",
        title: "Estudio de viabilidad",
        desc: "Validamos si el proyecto FV tiene sentido técnico y financiero: consumo, sitio, interconexión y escenarios de retorno.",
        bullets: [
          "Perfil de consumo y dimensionamiento preliminar",
          "Estimación de generación y ahorro",
          "Revisión de sitio y restricciones",
          "Riesgos y supuestos del caso",
        ],
        image: "/imagen/fotovoltaico/viabilidad.jpg",
      },
      {
        slug: "diseno",
        eyebrow: "Integrador Fotovoltaico",
        title: "Diseño de solución",
        desc: "Definimos la solución FV óptima: arquitectura, equipos, layout preliminar y estrategia de implementación.",
        bullets: [
          "Arquitectura y selección de equipos (preliminar)",
          "Layout / arreglo y consideraciones de sombra",
          "Estrategia de interconexión (vista general)",
          "Estimación de CAPEX y plan de fases",
        ],
        image: "/imagen/fotovoltaico/diseno.jpg",
      },
      {
        slug: "ingenieria",
        eyebrow: "Integrador Fotovoltaico",
        title: "Ingeniería detallada",
        desc: "Ingeniería para construir: criterios, planos y especificaciones para ejecución e interconexión.",
        bullets: [
          "Memorias y criterios de diseño",
          "Planos y especificaciones",
          "Lista de materiales (BOM) y alcances",
          "Plan de calidad y seguridad (base)",
        ],
        image: "/imagen/fotovoltaico/ingenieria.jpg",
      },
      {
        slug: "instalacion",
        eyebrow: "Integrador Fotovoltaico",
        title: "Suministro e instalación",
        desc: "Ejecución del proyecto: suministro, logística, montaje y coordinación en sitio con control de calidad.",
        bullets: [
          "Suministro y logística",
          "Instalación mecánica y eléctrica",
          "Coordinación y seguridad en sitio",
          "Documentación de avance",
        ],
        image: "/imagen/fotovoltaico/instalacion.jpg",
      },
      {
        slug: "pruebas",
        eyebrow: "Integrador Fotovoltaico",
        title: "Pruebas",
        desc: "Verificación y validación del sistema para asegurar desempeño y seguridad antes de la operación formal.",
        bullets: [
          "Pruebas eléctricas y funcionales",
          "Verificación de protecciones",
          "Checklist y evidencias de calidad",
          "Puesta en marcha (arranque controlado)",
        ],
        image: "/imagen/fotovoltaico/pruebas.jpg",
      },
      {
        slug: "mantenimiento",
        eyebrow: "Integrador Fotovoltaico",
        title: "Mantenimiento preventivo y correctivo",
        desc: "Cuidamos el desempeño del sistema con rutinas preventivas y atención correctiva para minimizar paros y pérdidas.",
        bullets: [
          "Rutinas preventivas (inspección y limpieza)",
          "Diagnóstico de fallas y correctivos",
          "Monitoreo y recomendaciones",
          "Reportes de desempeño",
        ],
        image: "/imagen/fotovoltaico/mantenimiento.jpg",
      },
      {
        slug: "financiamiento",
        eyebrow: "Integrador Fotovoltaico",
        title: "Financiamiento",
        desc: "Estructuración para facilitar inversión: análisis económico, escenarios y acompañamiento para decisiones de CAPEX/financiamiento.",
        bullets: [
          "Modelo financiero y ROI por escenarios",
          "Supuestos y sensibilidad (precio/producción)",
          "Estrategias CAPEX/financiamiento",
          "Documentación para evaluación interna",
        ],
        image: "/imagen/fotovoltaico/financiamiento.jpg",
      },
      {
        slug: "gestoria-cfe",
        eyebrow: "Integrador Fotovoltaico",
        title: "Gestoría de CFE",
        desc: "Acompañamiento para interconexión: requisitos, documentación, seguimiento y coordinación para avanzar sin fricciones.",
        bullets: [
          "Ruta de interconexión y requisitos",
          "Integración de documentación (base)",
          "Seguimiento y coordinación con CFE",
          "Cierre y evidencia de cumplimiento",
        ],
        image: "/imagen/fotovoltaico/gestoria-cfe.jpg",
      },
    ],
    []
  );

  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* Background global */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:pt-24">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-brand-green">Servicios</p>
                <span className="text-ink-soft">/</span>
                <p className="text-sm font-semibold text-ink">Integrador Fotovoltaico</p>

                <span className="ml-2 rounded-full border border-surface-border bg-white/70 px-3 py-1 text-xs font-semibold text-ink">
                  Diseño • Interconexión • Instalación
                </span>
              </div>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Proyectos fotovoltaicos con ingeniería y ejecución sin sorpresas
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                De la evaluación a la puesta en marcha: diseñamos, construimos y acompañamos tu
                proyecto FV con enfoque técnico, calidad y ROI.
              </p>

              <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Enfoque</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Ingeniería + ROI</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Calidad</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Entregables claros</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Ruta</p>
                  <p className="mt-1 text-sm font-semibold text-ink">De punta a punta</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                >
                  Solicitar cotización
                </Link>
                <Link
                  href="#viabilidad"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <Catalog items={services} baseHref={baseHref} />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIONES */}
      <div className="mt-4">
        {services.map((s, i) => (
          <ServiceSection key={s.slug} s={s} index={i} baseHref={baseHref} />
        ))}
      </div>

      {/* CTA final */}
      <section className="border-t border-surface-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  ¿Listo para evaluar tu proyecto FV?
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Compártenos tu perfil de consumo y datos del sitio; te damos un primer diagnóstico
                  y siguientes pasos.
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
