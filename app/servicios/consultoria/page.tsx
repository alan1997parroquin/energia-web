// app/servicios/consultoria/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Service = {
  slug:
    | "prefactibilidad"
    | "estudios-especificos"
    | "anticipacion"
    | "ingenieria"
    | "modelos-financieros";
  title: string;
  desc: string;
  problem?: string;
  solution?: string;
  bullets: string[];
  eyebrow: string;
  image: string;
};

const ROTATE_MS = 5000;

function Catalog({ items }: { items: Service[] }) {
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
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

        {/* Título encima */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Catálogo de servicios
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
              href={`/servicios/consultoria/${current.slug}`}
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

function ServiceSection({ s, index }: { s: Service; index: number }) {
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

            {s.problem && s.solution ? (
  <div className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">
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
) : null}


            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/servicios/consultoria/${s.slug}`}
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
                  href={`/servicios/consultoria/${s.slug}`}
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

export default function ConsultoriaLanding() {
  const services = useMemo<Service[]>(
    () => [
      {
        slug: "prefactibilidad",
        eyebrow: "Consultoría",
        title: "Estudios de prefactibilidad",
        desc: "Evaluamos viabilidad técnica y económica antes de invertir: alcance, riesgos, restricciones y próximos pasos.",
        problem:
          "Es necesario realizar estudios, para ello hay que pagar aproximadamente 321,000 MXN y esperar hasta 40 días para tener una idea si el lugar en donde se pretende desarrollar el proyecto es viable.",
        solution:
          "Estudio rápido de bajo costo que arroja en 5 días un estimado de la complejidad y retos a enfrentar; con lo que se paga a CENACE se pueden evaluar al menos 6 sitios distintos en menos de 20 días.",

        bullets: [
          "Generación",
          "Carga",
          "Incremento de demanda",
          "Migración",
          "Sistemas de almacenamiento",
        ],
        image: "/imagen/consultoria/prefactibilidad.jpg",
      },
      {
        slug: "estudios-especificos",
        eyebrow: "Consultoría",
        title: "Estudios específicos",
        desc: "Análisis puntuales para resolver preguntas concretas del negocio y del mercado eléctrico con datos y criterio técnico.",
        bullets: [
          "Análisis de mercado eléctrico mayorista",
          "Contratos de cobertura eléctrica",
          "Análisis de consumo",
          "Asesoría de migración a MEM",
          "Investigación a la medida",
        ],
        image: "/imagen/consultoria/estudios-especificos.jpg",
      },
      {
        slug: "anticipacion",
        eyebrow: "Consultoría",
        title: "Anticipación estratégica de tendencias",
        desc: "Planeación con escenarios: proyecciones y simulaciones para decidir con anticipación y reducir incertidumbre.",
        bullets: [
          "Prospección de precios de energía (nodo/hora/zona)",
          "Simulación de despacho (corto–mediano plazo)",
          "Escenarios y sensibilidad",
        ],
        image: "/imagen/consultoria/anticipacion.jpg",
      },
      {
        slug: "ingenieria",
        eyebrow: "Consultoría",
        title: "Servicios de Ingeniería",
        desc: "Diseño técnico conceptual para soluciones energéticas, microgrids y proyectos de transición energética.",
        bullets: [
          "Diseño de microgrids",
          "Diseño de proyectos de transición energética",
          "Arquitectura y criterios técnicos",
        ],
        image: "/imagen/consultoria/ingenieria.jpg",
      },
      {
        slug: "modelos-financieros",
        eyebrow: "Consultoría",
        title: "Modelos financieros",
        desc: "Modelos para evaluar inversión, retorno y riesgo por escenarios: decisiones sólidas con números claros.",
        bullets: [
          "Modelos para proyectos de generación",
          "Modelos para microgrids",
          "Sensibilidad y riesgos",
        ],
        image: "/imagen/consultoria/modelos-financieros.jpg",
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
              {/* Breadcrumb + pill */}
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-brand-green">Servicios</p>
                <span className="text-ink-soft">/</span>
                <p className="text-sm font-semibold text-ink">Consultoría</p>

                <span className="ml-2 rounded-full border border-surface-border bg-white/70 px-3 py-1 text-xs font-semibold text-ink">
                  Diagnóstico • Estrategia • Modelos
                </span>
              </div>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Consultoría energética para decisiones claras y rentables
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Toma decisiones energéticas con claridad: análisis técnico,
                financiero y estratégico para reducir riesgos y mejorar resultados.
              </p>

              {/* mini métricas */}
              <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Enfoque</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Técnico + Financiero
                  </p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Resultado</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Menos riesgo
                  </p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white/70 px-4 py-3 backdrop-blur">
                  <p className="text-xs font-semibold text-ink-soft">Formato</p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Estudios y acompañamiento
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
                >
                  Solicitar diagnóstico
                </Link>
                <Link
                  href="#prefactibilidad"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft"
                >
                  Ver servicios 
                </Link>
              </div>
            </div>

            {/* Right - catálogo interactivo */}
            <div className="lg:col-span-5">
              <Catalog items={services} />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIONES apiladas */}
      <div className="mt-4">
        {services.map((s, i) => (
          <ServiceSection key={s.slug} s={s} index={i} />
        ))}
      </div>

      {/* CTA final */}
      <section className="border-t border-surface-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  ¿Quieres que armemos el alcance para tu caso?
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Cuéntanos tu objetivo (ahorro, expansión, MEM, nueva carga,
                  etc.) y te proponemos el camino.
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
