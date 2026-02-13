// app/servicios/fotovoltaico/diseno/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function DisenoPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-24">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link href="/servicios" className="font-semibold text-brand-green hover:underline">Servicios</Link>
          <span className="text-ink-soft">/</span>
          <Link href="/servicios/fotovoltaico" className="font-semibold text-ink hover:underline">Integrador Fotovoltaico</Link>
          <span className="text-ink-soft">/</span>
          <span className="font-semibold text-ink">Diseño de solución</span>
        </div>

        <section className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green">Integrador Fotovoltaico</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Diseño de solución</h1>

            <p className="mt-4 max-w-2xl text-base text-ink-muted">
              Convertimos la viabilidad en una solución clara: layout, capacidad, configuración eléctrica preliminar,
              criterios de seguridad y estimación de producción.
            </p>

            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Problema</p>
                <p className="mt-1 text-sm text-ink">
                  Sin un diseño claro, es fácil sobredimensionar o fallar en criterios técnicos, generando cambios
                  costosos en etapas posteriores.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-border bg-white/70 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Solución</p>
                <p className="mt-1 text-sm text-ink">
                  Diseñamos una solución consistente con el sitio, el consumo y restricciones, dejando listo el camino
                  para ingeniería detallada.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark">
                Solicitar propuesta
              </Link>
              <Link href="/servicios/fotovoltaico" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft">
                Volver a Fotovoltaico
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white/75 shadow-sm backdrop-blur">
              <div className="relative h-52 w-full sm:h-64">
                <Image src="/imagen/fotovoltaico/diseno.jpg" alt="Diseño de solución" fill className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-ink">¿Qué incluye?</p>
                <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" /><span>Layout preliminar y criterios</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" /><span>Estimación de producción</span></li>
                  <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" /><span>Configuración inicial eléctrica</span></li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark">
                    Hablar con un experto
                  </Link>
                  <Link href="/servicios/fotovoltaico/ingenieria" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-soft">
                    Siguiente: Ingeniería →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-surface-border pt-12">
          <div className="rounded-3xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">Diseño claro = ejecución sin sorpresas</h2>
                <p className="mt-2 text-sm text-ink-muted">Definimos la solución para avanzar a detalle con confianza.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contacto" className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-dark">
                  Contactar
                </Link>
                <Link href="/servicios/fotovoltaico" className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-soft">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
