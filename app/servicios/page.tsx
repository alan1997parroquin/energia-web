// app/servicios/page.tsx
import Link from "next/link";
import { Brain, FileText, Sun, GraduationCap, Search, Map, Handshake } from "lucide-react";

export default function ServiciosPage() {
  const services = [
    {
      icon: Brain,
      title: "Consultoría",
      desc: "Optimización de costos, estrategia de suministro, análisis técnico-regulatorio y toma de decisiones basada en datos.",
      href: "/servicios/consultoria",
      tags: ["Estrategia", "MEM", "Análisis"],
    },
    {
      icon: FileText,
      title: "Gestoría",
      desc: "Acompañamiento en trámites, integración de expedientes, seguimiento y coordinación con actores clave del proceso.",
      href: "/servicios/gestoria",
      tags: ["Trámites", "Seguimiento", "Expedientes"],
    },
    {
      icon: Sun,
      title: "Integrador Fotovoltaico",
      desc: "Evaluación, ingeniería, interconexión e instalación para autoconsumo industrial y comercial.",
      href: "/servicios/fotovoltaico",
      tags: ["ROI", "Interconexión", "Ingeniería"],
    },
    {
      icon: GraduationCap,
      title: "Capacitación Energética",
      desc: "Programas técnicos y ejecutivos a la medida para mejorar la toma de decisiones energéticas.",
      href: "/servicios/capacitacion",
      tags: ["In-company", "Talleres", "Ejecutivo"],
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* background (misma línea visual que tus páginas nuevas) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-16 space-y-16">
        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-green">Servicios</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Soluciones energéticas para empresas en México
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Elegimos contigo el camino más eficiente: consultoría, gestoría,
            integración fotovoltaica o capacitación para tu equipo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href="https://wa.me/5215578403155?text=Hola%20me%20interesa%20una%20asesor%C3%ADa%20con%20Energ%C3%ADa%20M%C3%A9xico"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white px-6 py-3 text-base font-semibold text-ink shadow-sm transition hover:bg-surface-soft"
            >
              Agendar llamada
            </a>
          </div>
        </section>

        {/* Grid de servicios */}
        <section className="space-y-6" id="lista-servicios">
          <h2 className="text-3xl font-bold text-ink">
            Elige el servicio que necesitas
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group rounded-3xl border border-surface-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    {/* recuadro verde + icono lucide */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green-soft">
                      <Icon className="h-5 w-5 text-brand-green" />
                    </div>

                    <h3 className="font-bold text-ink group-hover:text-brand-green">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-ink-muted">{s.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-brand-green-soft px-3 py-1 text-xs font-semibold text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-semibold text-brand-green">
                    Ver detalles <span className="ml-1">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Cómo trabajamos */}
<section className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm space-y-6">
  <h2 className="text-3xl font-bold text-ink">Cómo trabajamos</h2>

  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        Icon: Search,
        t: "Diagnóstico",
        d: "Revisamos tu caso y objetivos para definir el camino más eficiente.",
      },
      {
        Icon: Map,
        t: "Estrategia y propuesta",
        d: "Propuesta clara con alcances, tiempos y siguientes pasos.",
      },
      {
        Icon: Handshake,
        t: "Ejecución y seguimiento",
        d: "Acompañamiento continuo con comunicación y control.",
      },
    ].map(({ Icon, t, d }) => (
      <div
        key={t}
        className="rounded-2xl border border-surface-border bg-surface-soft p-6"
      >
        {/* icon badge (verde) */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green-soft">
            <Icon className="h-5 w-5 text-brand-green" />
          </div>
          <h3 className="font-bold text-ink">{t}</h3>
        </div>

        <p className="mt-3 text-ink-muted">{d}</p>
      </div>
    ))}
  </div>
</section>


        {/* CTA FINAL (misma paleta que tu ejemplo) */}
        <section className="mt-6 rounded-3xl border border-brand-green/25 bg-brand-green p-10 text-white shadow-sm">
          <h2 className="text-3xl font-bold">¿Listo para avanzar con tu proyecto?</h2>

          <p className="mt-4 max-w-2xl text-white/90">
            Cuéntanos tu caso y te proponemos el siguiente paso con claridad:
            diagnóstico, ruta y ejecución.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-brand-green shadow-sm transition hover:brightness-95"
            >
              Solicitar diagnóstico
            </Link>

            <a
              href="https://wa.me/5215578403155?text=Hola%20me%20interesa%20una%20asesor%C3%ADa%20con%20Energ%C3%ADa%20M%C3%A9xico"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-white/10"
            >
              Agendar llamada
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
