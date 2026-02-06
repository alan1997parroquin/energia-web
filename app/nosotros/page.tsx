import Link from "next/link";
import Imagen from "next/image";

export default function NosotrosPage() {
  return (
    <main className="relative overflow-hidden">
      {/* background (verde deslavado + halos azul/verde) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-soft/70 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      

      {/* Contenido */}
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

          {/* IMAGEN HERO (tomas.jpg) */}
          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-surface-border bg-white shadow-sm">
              <Imagen
                src="/imagen/services/tom.png"
                alt="Tomás Reyes — Energía México"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Gradiente suave para mejorar legibilidad (opcional) */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">¿Quiénes somos?</h2>

            <p className="mt-4 leading-relaxed text-ink-muted">
              Somos un equipo de consultoría energética fundado en{" "}
              <span className="font-semibold text-ink">2023</span> por{" "}
              <span className="font-semibold text-ink">Tomás Reyes</span>,
              especialista con{" "}
              <span className="font-semibold text-ink">
                más de 22 años de experiencia
              </span>{" "}
              en el Mercado Eléctrico Mexicano. Nacimos para ser un socio
              confiable en decisiones críticas: desde evaluar viabilidad hasta
              coordinar el camino correcto para ejecutar un proyecto.
            </p>

            <p className="mt-4 leading-relaxed text-ink-muted">
              Nos distingue un enfoque{" "}
              <span className="font-semibold text-ink">personalizado</span> y
              orientado a resultados: analizamos cada caso, identificamos riesgos
              y oportunidades, y proponemos acciones concretas. Nos mantenemos
              al día con regulaciones y tendencias del sector para que tomes
              decisiones con certidumbre, no con suposiciones.
            </p>
          </div>

          <div className="relative rounded-3xl border border-brand-green/20 bg-brand-green-soft/60 p-8 shadow-sm">
            {/* Logo */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Imagen
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
            La interconexión o conexión a red puede sentirse como un laberinto de
            requisitos y tiempos. Tú no tienes que volverte experto: te guiamos
            paso a paso para hacerlo simple, claro y ejecutable.
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
