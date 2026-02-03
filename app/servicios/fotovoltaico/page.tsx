import Link from "next/link";
import Image from "next/image";

export default function FotovoltaicoPage() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D5E0DA]/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#7D968B]/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#0E482A]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* HERO (2 columnas) */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: copy */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#0E482A]">Servicios</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Integrador Fotovoltaico
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Diseñamos, instalamos e interconectamos sistemas fotovoltaicos para
              autoconsumo industrial y comercial, con enfoque técnico, regulatorio
              y financiero.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Evaluar mi proyecto
              </Link>
              <Link
                href="/servicios/consultoria-gestoria"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Ver consultoría
              </Link>
            </div>
          </div>

          {/* RIGHT: image card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[#0E482A]/15 bg-white/95 shadow-xl">
              <div className="relative h-64 w-full sm:h-72">
                <Image
                  src="/imagen/services/fotovoltaico.jpg"
                  alt="Integrador fotovoltaico para autoconsumo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">
                    Integración fotovoltaica
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Ingeniería • Interconexión • Ejecución
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-[#0E482A]">
                  Lo que cuidamos desde el inicio
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Viabilidad técnica (sitio, sombras, estructura)</li>
                  <li>• Viabilidad financiera (ROI, payback, escenarios)</li>
                  <li>• Interconexión y cumplimiento (CFE / normativa)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CUANDO CONVIENE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">
            ¿Cuándo conviene un sistema fotovoltaico?
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            No todos los casos son iguales. Un proyecto FV bien ejecutado requiere
            análisis previo para asegurar ahorro real y cumplimiento.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Alto consumo eléctrico durante el día",
              "Tarifas elevadas o cargos por demanda",
              "Superficie disponible (techo o terreno)",
              "Horizonte de inversión de mediano/largo plazo",
              "Interés en reducir costos y huella ambiental",
              "Necesidad de certidumbre financiera",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#7D968B]" />
                <p className="text-sm font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUE HACEMOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">
            ¿Qué incluye nuestro servicio como integrador?
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <ul className="space-y-4 text-gray-700">
                <li>• Evaluación técnica del sitio</li>
                <li>• Dimensionamiento del sistema FV</li>
                <li>• Ingeniería y layout eléctrico</li>
                <li>• Análisis financiero (ROI, payback)</li>
                <li>• Gestión de interconexión y permisos</li>
                <li>• Instalación y puesta en marcha</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#0E482A]/15 bg-[#D5E0DA]/40 p-8">
              <p className="text-sm font-semibold text-[#0E482A]">
                Diferencial Energía México
              </p>
              <p className="mt-3 text-gray-700">
                No somos solo instaladores. Analizamos primero si el proyecto tiene
                sentido técnico y financiero. Si no conviene, lo decimos. Si conviene,
                lo ejecutamos bien.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">
            Proceso de integración fotovoltaica
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Evaluación", "Análisis técnico y financiero"],
              ["Ingeniería", "Diseño y dimensionamiento"],
              ["Interconexión", "Trámites y permisos"],
              ["Instalación", "Ejecución y puesta en marcha"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mt-24 rounded-3xl border border-[#7D968B]/30 bg-[#7D968B] p-10 text-white">
          <h2 className="text-3xl font-bold">
            ¿Un sistema solar tiene sentido para tu empresa?
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Evalúa tu proyecto con datos reales: ahorro esperado, inversión, tiempos
            y requisitos de interconexión.
          </p>

          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0E482A] shadow-sm transition hover:brightness-95"
          >
            Evaluar mi proyecto
          </Link>
        </section>
      </div>
    </main>
  );
}
