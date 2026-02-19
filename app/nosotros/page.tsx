"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Target, Brain, Eye, CheckCircle2 } from "lucide-react";

export default function NosotrosPage() {
  const slides = useMemo(
    () => [
      { src: "/imagen/services/tom1.jpg", alt: "Energía México — Equipo" },
      { src: "/imagen/services/foto1.jpg", alt: "Tomás Reyes — Energía México" },
      { src: "/imagen/services/foto2.jpg", alt: "Energía México — Consultoría" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <main className="relative overflow-hidden bg-white">
      {/* background halos (suaves) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green">Nosotros</p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Claridad energética para decidir con confianza
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              En <span className="font-semibold text-ink">Energía México</span>{" "}
              acompañamos a empresas e inversionistas a navegar el sistema
              eléctrico mexicano con una ruta clara:{" "}
              <span className="font-semibold text-ink">
                diagnóstico, estrategia y ejecución
              </span>
              . Convertimos información técnica y regulatoria en decisiones
              aterrizadas para interconexión, nuevas cargas y proyectos de
              generación.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Agendar diagnóstico
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white px-6 py-3 text-base font-semibold text-ink shadow-sm transition hover:bg-surface-soft"
              >
                Ver soluciones
              </Link>
            </div>
          </div>

          {/* CARRUSEL HERO */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-surface-border bg-white shadow-sm">
              {slides.map((s, i) => (
                <div
                  key={s.src}
                  className={[
                    "absolute inset-0 transition-opacity duration-700 ease-out",
                    i === index ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
            </div>

            {/* Dots */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === index
                      ? "bg-brand-green"
                      : "bg-ink/15 hover:bg-ink/25",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">¿Quiénes somos?</h2>

            <p className="mt-4 leading-relaxed text-ink-muted">
              Energía México nace con una idea simple: que tomar decisiones
              energéticas no debería sentirse como caminar a ciegas. En un
              entorno técnico y cambiante, nuestro trabajo es darte claridad
              para avanzar con certidumbre.
            </p>

            <p className="mt-4 leading-relaxed text-ink-muted">
              Somos un equipo de consultoría energética fundado en{" "}
              <span className="font-semibold text-ink">2023</span> por{" "}
              <span className="font-semibold text-ink">Tomás Reyes</span>,
              especialista con{" "}
              <span className="font-semibold text-ink">
                más de 22 años de experiencia
              </span>{" "}
              en el Mercado Eléctrico Mexicano. Acompañamos decisiones críticas
              desde la viabilidad hasta la ejecución: sin adornos, con datos y
              con una ruta realista.
            </p>
          </div>

          <div className="relative rounded-3xl border border-brand-green/20 bg-brand-green-soft/40 p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Image
                  src="/branding/energia-mexico-logo.png"
                  alt="Energía México"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-brand-green">
                Nuestro principio
              </p>
            </div>

            <p className="leading-relaxed text-ink-muted">
              Primero entendemos tu contexto y restricciones. Después definimos
              una estrategia viable. Finalmente acompañamos la ejecución y los
              trámites.{" "}
              <span className="font-semibold text-ink">
                Si una ruta no conviene o no es viable, lo decimos con claridad.
              </span>
            </p>
          </div>
        </section>

        {/* OBJETIVO / MISIÓN / VISIÓN + VALORES (Timeline con íconos) */}
        <section className="mt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-blue">
              Objetivo, misión y visión
            </p>

            <h2 className="mt-2 text-3xl font-bold text-ink">
              Nuestra brújula: del dato a la decisión
            </h2>

            <p className="mt-4 leading-relaxed text-ink-muted">
              La energía cambia, las reglas cambian y los proyectos cambian. Por
              eso trabajamos con una brújula clara: lo que perseguimos
              (objetivo), lo que hacemos todos los días (misión) y hacia dónde
              vamos (visión).
            </p>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-5 top-0 h-full w-px bg-surface-border" />

            <div className="space-y-6">
              {/* Objetivo */}
              <div className="relative pl-14">
                <div className="absolute left-1 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-white shadow-sm ring-4 ring-brand-green/15">
                  <Target className="h-5 w-5" />
                </div>

                <div className="rounded-3xl border border-surface-border bg-white p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-wide text-brand-green">
                    OBJETIVO
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    Ser referentes en consultoría energética
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    Consolidarnos como una consultoría referente en México en
                    energía eléctrica, transición energética y nuevos modelos de
                    negocio asociados, con un equipo de alto desempeño que se
                    adapta y encuentra soluciones reales.
                  </p>
                </div>
              </div>

              {/* Misión */}
              <div className="relative pl-14">
                <div className="absolute left-1 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white shadow-sm ring-4 ring-brand-blue/15">
                  <Brain className="h-5 w-5" />
                </div>

                <div className="rounded-3xl border border-surface-border bg-white p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-wide text-brand-blue">
                    MISIÓN
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    Conocimiento accionable
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    Generar conocimiento nuevo para tomar la mejor decisión
                    energética.
                  </p>

                  <div className="mt-4 rounded-2xl border border-surface-border bg-surface-soft p-4">
                    <p className="text-sm text-ink-muted">
                      Traducimos información técnica en{" "}
                      <span className="font-semibold text-ink">
                        decisiones claras, ejecutables y con sustento
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Visión */}
              <div className="relative pl-14">
                <div className="absolute left-1 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-warning text-white shadow-sm ring-4 ring-warning/20">
                  <Eye className="h-5 w-5" />
                </div>

                <div className="rounded-3xl border border-surface-border bg-white p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-wide text-warning">
                    VISIÓN
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    Develar lo no evidente y hacerlo entendible
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    Develar lo no evidente en los datos disponibles y traducirlo
                    en conclusiones sintetizadas y entendibles. Aportamos mayor
                    valor en etapas tempranas (prefactibilidad) y también
                    ayudamos a organizaciones establecidas a consumir menos
                    energía con soluciones agnósticas e innovadoras.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-surface-border bg-white p-4">
                      <p className="text-sm font-semibold text-ink">
                        Etapas tempranas
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">
                        Prefactibilidad, riesgos, ruta y viabilidad antes de
                        ejecutar.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-surface-border bg-white p-4">
                      <p className="text-sm font-semibold text-ink">
                        Empresas establecidas
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">
                        Optimización, eficiencia y consumo inteligente de
                        energía.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valores */}
              <div className="relative pl-14">
                <div className="absolute left-1 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white shadow-sm ring-4 ring-ink/10">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div className="rounded-3xl border border-brand-green/20 bg-brand-green-soft/35 p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-wide text-ink">
                    VALORES
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    La forma de trabajar importa
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    Más allá del resultado, cuidamos cómo llegamos: con
                    responsabilidad, honestidad y veracidad.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {[
                      {
                        title: "Responsabilidad",
                        desc: "Actuar coherentemente con nuestro objetivo y misión.",
                      },
                      {
                        title: "Honestidad",
                        desc: "Hablar y actuar con sinceridad y respeto.",
                      },
                      {
                        title: "Veracidad",
                        desc: "Validar datos y supuestos con evidencia y realidad.",
                      },
                    ].map((v) => (
                      <div
                        key={v.title}
                        className="rounded-2xl border border-surface-border bg-white/75 p-4"
                      >
                        <p className="text-sm font-semibold text-ink">
                          {v.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                          {v.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENFOQUE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-ink">Nuestro enfoque</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Técnico",
                desc: "Diagnóstico de demanda, interconexión y viabilidad real del proyecto con base en datos.",
                bar: "bg-brand-green",
              },
              {
                title: "Regulatorio",
                desc: "Acompañamiento alineado al Mercado Eléctrico Mexicano y cumplimiento normativo aplicable.",
                bar: "bg-brand-blue",
              },
              {
                title: "Financiero",
                desc: "Escenarios de costos, ahorros y retorno para decidir con claridad antes de ejecutar.",
                bar: "bg-warning",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-surface-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`mb-4 h-2 w-10 rounded-full ${item.bar}`} />
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUÉ HACEMOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-ink">¿Qué hacemos?</h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
            La interconexión o conexión a red puede sentirse como un laberinto
            de requisitos y tiempos. Tú no tienes que volverte experto: te
            guiamos paso a paso para hacerlo simple, claro y ejecutable.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Diagnóstico y estrategia",
                desc: "Definimos la ruta correcta con restricciones, riesgos y prioridades claras.",
              },
              {
                title: "Trámites y documentación",
                desc: "Alineamos requisitos y entregables para evitar retrabajos y demoras.",
              },
              {
                title: "Coordinación y seguimiento",
                desc: "Acompañamos la ejecución para reducir tiempos muertos y fricción.",
              },
              {
                title: "Decisiones con datos",
                desc: "Modelamos escenarios para anticipar problemas y decidir con certeza.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-surface-border bg-white p-6 shadow-sm"
              >
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-24 rounded-3xl border border-brand-green/25 bg-brand-green p-10 text-white shadow-sm">
          <h2 className="text-3xl font-bold">¿Listo para tener una ruta clara?</h2>

          <p className="mt-4 max-w-2xl text-white/90">
            Agenda un diagnóstico y revisamos tu situación energética, objetivos
            y siguientes pasos para avanzar con certidumbre.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-brand-green shadow-sm transition hover:brightness-95"
            >
              Agendar diagnóstico
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              Ver soluciones
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
