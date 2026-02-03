import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E482A] via-[#0E482A] to-[#583F66]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur lg:grid-cols-2 lg:p-12">
          {/* Copy */}
          <div>
            <p className="text-sm font-semibold text-white/90">
              Diagnóstico energético
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para optimizar tu energía y tomar decisiones con claridad?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Agenda una llamada y te damos una ruta clara: oportunidades de
              ahorro, cumplimiento regulatorio y/o viabilidad fotovoltaica.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0E482A] shadow-sm transition hover:brightness-95"
              >
                Solicitar diagnóstico
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-transparent px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-white/10"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          {/* Bullets */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
            <p className="text-sm font-semibold text-white">
              En la primera conversación revisamos:
            </p>

            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-white" />
                Tu situación actual (consumo, tarifa, operación y objetivos)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#7D968B]" />
                Oportunidades rápidas de ahorro y prioridades
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-white" />
                Ruta recomendada: consultoría/gestoría, FV o capacitación
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#7D968B]" />
                Siguientes pasos con tiempos y responsables
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-white/90">
              <span className="font-semibold text-white">Tip:</span>{" "}
              Si ya tienes recibos, contrato o datos de demanda, mejor.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
