// app/servicios/gestoria/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Service = {
  slug: "cfe-baja-tension-y-media" | "cenace-y-cfe-1mw";
  title: string;
  desc: string;
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
            Catálogo de gestoría
          </p>
          <p className="mt-1 text-sm font-semibold text-white/90">{current.eyebrow}</p>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
            {current.title}
          </h3>
        </div>
      </div>

      <div className="relative p-5">
        <div key={current.slug} className="animate-[fadeIn_.35s_ease-out]">
          <p className="text-sm text-ink-muted">{current.desc}</p>

          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {current.bullets.slice(0, 4).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/servicios/gestoria/${current.slug}`}
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
  const services = useMemo<Service[]>(
    () => [
      {
        slug: "cfe-baja-tension-y-media",
        eyebrow: "Gestoría",
        title: "CFE baja tensión y media",
        desc: "Trámites y acompañamiento para avanzar con CFE con claridad, checklist y seguimiento, reduciendo fricción y tiempos perdidos.",
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
        title: "CENACE y CFE > 1MW",
        desc: "Gestión técnica-regulatoria para proyectos mayores: coordinación, documentación, comunicación con áreas y soporte para cumplir requisitos.",
        bullets: [
          "Prefactibilidad",
          "Manejo de SIASIC",
          "Modelo matemático",
          "Perfiles de carga",
          "Carpeta de proyecto",
        ],
        image: "/imagen/gestoria/cenace-cfe-1mw.jpg",
      },
    ],
    []
  );

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
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-brand-green">Servicios</p>
                <span className="text-ink-soft">/</span>
                <p className="text-sm font-semibold text-ink">Gestoría</p>

                <span className="ml-2 rounded-full border border-surface-border bg-white/70 px-3 py-1 text-xs font-semibold text-ink">
                  Trámites • Coordinación • Cumplimiento
                </span>
              </div>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Gestoría energética para avanzar sin fricciones
              </h1>

              <p className="mt-4 max-w-2xl text-base text-ink-muted">
                Acompañamos trámites y coordinación técnico-regulatoria con CFE y CENACE.
                Checklist, documentación y seguimiento para reducir incertidumbre y acelerar decisiones.
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

            <div className="lg:col-span-5">
              <Catalog items={services} />
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
