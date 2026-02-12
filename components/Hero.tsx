"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  key: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  img: string; // ✅ AQUÍ se define la imagen por servicio
  href: string;
  bullets: { color: "green" | "blue" | "warning"; text: string }[];
  tag: string;
};

export default function Hero() {
  const slides: Slide[] = useMemo(
    () => [
      {
        key: "consultoria",
        eyebrow: "Energía para empresas",
        title: "Consultoría eléctrica",
        subtitle: "Estrategia, costos y decisiones con datos en el MEM",
        img: "/imagen/services/consultoria.jpg", // ✅ CAMBIA ESTA RUTA por tu imagen de consultoría
        href: "/servicios/consultoria",
        tag: "Estrategia • MEM",
        bullets: [
          { color: "green", text: "Decisiones energéticas con sustento y viabilidad" },
          { color: "blue", text: "Análisis de suministro, tarifas y escenarios" },
          { color: "warning", text: "Ruta clara de ejecución para tu proyecto" },
        ],
      },
      {
        key: "gestoria",
        eyebrow: "Trámites sin fricción",
        title: "Gestoría e interconexión",
        subtitle: "Acompañamiento técnico–regulatorio con CFE/CENACE",
        img: "/imagen/services/interconexion.jpg", // ✅ CAMBIA ESTA RUTA por tu imagen de gestoría
        href: "/servicios/gestoria",
        tag: "Trámites • Cumplimiento",
        bullets: [
          { color: "green", text: "Interconexión y seguimiento paso a paso" },
          { color: "blue", text: "Revisión técnica y soporte documental" },
          { color: "warning", text: "Coordinación y gestión sin sorpresas" },
        ],
      },
      {
        key: "fotovoltaico",
        eyebrow: "Autoconsumo industrial y comercial",
        title: "Integrador fotovoltaico",
        subtitle: "Ingeniería, instalación e interconexión con ROI claro",
        img: "/imagen/services/fotovoltaico.jpg", // ✅ CAMBIA ESTA RUTA por tu imagen FV
        href: "/servicios/fotovoltaico",
        tag: "Ingeniería • ROI",
        bullets: [
          { color: "green", text: "Evaluación técnica y dimensionamiento" },
          { color: "blue", text: "Ingeniería, ejecución y puesta en marcha" },
          { color: "warning", text: "Optimización de retorno (ROI) y riesgos" },
        ],
      },
      {
        key: "capacitacion",
        eyebrow: "Equipos que deciden mejor",
        title: "Capacitación energética",
        subtitle: "Talleres prácticos para energía, regulación y operación",
        img: "/imagen/services/capacitacion.jpg", // ✅ CAMBIA ESTA RUTA por tu imagen de capacitación
        href: "/servicios/capacitacion",
        tag: "Talleres • Skills",
        bullets: [
          { color: "green", text: "Conceptos claros aplicados a tu operación" },
          { color: "blue", text: "Marco regulatorio y mejores prácticas" },
          { color: "warning", text: "Casos y ejercicios orientados a resultados" },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) return;
    if (paused) return;

    intervalRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [paused, slides.length]);

  const s = slides[active];

  const dotColor = (c: Slide["bullets"][number]["color"]) => {
    if (c === "green") return "bg-brand-green";
    if (c === "blue") return "bg-brand-blue";
    return "bg-warning";
  };

  return (
    <section className="bg-white">
      {/* Background decoration (claro) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              Consultoría • Fotovoltaico • Capacitación
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Consultoría eléctrica y datos para decidir con certeza en el{" "}
              <span className="text-brand-blue">Mercado Eléctrico Mexicano</span>
            </h1>

            <p className="text-lg leading-relaxed text-slate-700">
              Convertimos{" "}
              <span className="font-semibold text-slate-900">datos técnicos</span>{" "}
              y del sistema eléctrico en decisiones claras: interconexión, nuevas
              cargas, generación y transición energética con sustento y viabilidad.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-brand-green-dark hover:shadow-lg"
              >
                Solicitar cotización
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl border-2 border-brand-blue px-6 py-3 text-base font-semibold text-brand-blue bg-white transition hover:bg-brand-blue-soft"
              >
                Ver soluciones
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 border border-slate-200">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                Enfoque técnico y regulatorio
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 border border-slate-200">
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Viabilidad financiera (ROI)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 border border-slate-200">
                <span className="h-2 w-2 rounded-full bg-warning" />
                Ruta clara de ejecución
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/15 bg-white/95 shadow-xl">
              {/* IMAGE HEADER */}
              <Link href={s.href} className="block">
                <div className="relative h-60 w-full sm:h-72">
                  <Image src={s.img} alt={s.title} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-white">{s.eyebrow}</p>
                    <p className="mt-1 text-xs text-white/85">
                      {s.title} • {s.tag}
                    </p>
                  </div>
                </div>
              </Link>

              {/* CONTENT */}
              <div className="p-6">
                {/* ❌ Quitamos el botón "Ver →" y dejamos solo el header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-soft">
                    <Image
                      src="/branding/energia-mexico-logo.png"
                      alt="Energía México"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-base font-bold text-slate-900">{s.title}</p>
                    <p className="text-sm text-slate-600">{s.subtitle}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {s.bullets.map((b, i) => (
                    <li key={`${s.key}-b-${i}`} className="flex gap-2">
                      <span className={`mt-1.5 h-2 w-2 rounded-full ${dotColor(b.color)}`} />
                      {b.text}
                    </li>
                  ))}
                </ul>

                {/* mini “ventanas” clicables */}
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {slides.map((item, idx) => {
                    const isActive = idx === active;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setActive(idx)}
                        className={[
                          "group flex items-center gap-3 rounded-2xl border bg-white px-3 py-2 text-left transition",
                          isActive
                            ? "border-brand-blue/30 shadow-sm"
                            : "border-slate-200 hover:bg-slate-50",
                        ].join(" ")}
                        aria-current={isActive ? "true" : "false"}
                      >
                        <div className="relative h-10 w-14 overflow-hidden rounded-xl border border-slate-200">
                          <Image src={item.img} alt={item.title} fill className="object-cover" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-slate-900">
                            {item.title}
                          </p>
                          <p className="truncate text-xs text-slate-600">{item.tag}</p>
                        </div>

                        <Link
                          href={item.href}
                          className="rounded-xl px-2 py-1 text-xs font-semibold text-brand-blue opacity-0 transition group-hover:opacity-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ir
                        </Link>
                      </button>
                    );
                  })}
                </div>

                {/* ❌ Quitamos el texto "Cambia cada 5s"/"Pausado" y dejamos solo los dots */}
                <div className="mt-4 flex items-center gap-2">
                  {slides.map((item, i) => (
                    <button
                      key={`dot-${item.key}`}
                      type="button"
                      onClick={() => setActive(i)}
                      className={[
                        "h-2 rounded-full transition",
                        i === active
                          ? "w-8 bg-brand-blue"
                          : "w-2 bg-surface-border hover:bg-ink-soft",
                      ].join(" ")}
                      aria-label={`Ir a ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-green/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
