import Link from "next/link";
import Image from "next/image";

export default function CapacitacionPage() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-brand-green">Servicios</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              Capacitación Energética
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Programas técnicos y ejecutivos diseñados para que tu equipo tome
              mejores decisiones energéticas con criterio y claridad.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
              >
                Solicitar programa
              </Link>
              <Link
                href="/servicios/consultoria-gestoria"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Ver consultoría
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-brand-green/15 bg-white/95 shadow-xl">
              <div className="relative h-64 w-full sm:h-72">
                <Image
                  src="/imagen/services/capacitacion.jpg"
                  alt="Capacitación energética"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">
                    Formación energética
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Técnica • Ejecutiva • In-company
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-brand-green">
                  Tipos de capacitación
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Equipos técnicos y de ingeniería</li>
                  <li>• Directivos y tomadores de decisión</li>
                  <li>• Programas personalizados por sector</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RESTO */}
        <section className="mt-20 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            ¿Por qué capacitar a tu equipo?
          </h2>
          <p className="max-w-3xl text-slate-600">
            Un equipo informado reduce errores, identifica oportunidades y
            mejora el retorno de las decisiones energéticas.
          </p>
        </section>
      </div>
    </main>
  );
}
