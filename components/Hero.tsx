import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
    
      {/* Background decoration (claro) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" />
      </div>

      {/* Padding top para que el header sticky no encime */}
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
              cargas, generación y transición energética con sustento y
              viabilidad.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* CTA principal */}
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-brand-green-dark hover:shadow-lg"
              >
                Solicitar cotización
              </Link>

              {/* CTA secundario */}
              <Link
                href="/nuestras-soluciones"
                className="inline-flex items-center justify-center rounded-xl border-2 border-brand-blue px-6 py-3 text-base font-semibold text-brand-blue bg-white transition hover:bg-brand-blue-soft"
              >
                Ver soluciones
              </Link>
            </div>

            {/* Trust row */}
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
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/15 bg-white/95 shadow-xl">
              {/* IMAGE HEADER */}
              <div className="relative h-60 w-full sm:h-72">
                <Image
                  src="/imagen/hero/hero-energy.jpg"
                  alt="Consultoría energética e integración fotovoltaica"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">
                    Energía para empresas
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Consultoría • Fotovoltaico • Capacitación
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
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
                    <p className="text-base font-bold text-slate-900">
                      Energía México
                    </p>
                    <p className="text-sm text-slate-600">
                      Socios estratégicos en energía
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-green" />
                    Decisiones energéticas con sustento y viabilidad
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-blue" />
                    Interconexión y estrategia con base en datos
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-warning" />
                    Ruta clara de ejecución para tu proyecto
                  </li>
                </ul>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-green/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
