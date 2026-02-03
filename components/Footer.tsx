import Link from "next/link";

const links = {
  servicios: [
    { label: "Consultoría y Gestoría", href: "/servicios/consultoria-gestoria" },
    { label: "Integrador Fotovoltaico", href: "/servicios/fotovoltaico" },
    { label: "Capacitación", href: "/servicios/capacitacion" },
    { label: "Todos los servicios", href: "/servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Casos de éxito", href: "/casos" },
    { label: "Recursos", href: "/recursos" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white">
      {/* subtle background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E482A]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#583F66]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5E0DA]">
                <span className="text-sm font-bold text-[#0E482A]">em</span>
              </div>
              <div>
                <p className="text-base font-bold text-gray-900">Energía México</p>
                <p className="text-sm text-gray-600">
                  Más que consultores, tus socios de negocio
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              Consultoría y gestoría energética, integración fotovoltaica y capacitación
              para empresas que necesitan claridad, cumplimiento y ejecución.
            </p>

            {/* Contact mini */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm">
              <p className="font-semibold text-gray-900">Contacto</p>
              <p className="mt-1 text-gray-600">Cobertura: México</p>
              <p className="mt-1 text-gray-600">
                Email:{" "}
                <span className="font-medium text-gray-900">
                  contacto@energia-mexico.com
                </span>
              </p>
              <p className="mt-1 text-gray-600">
                WhatsApp:{" "}
                <span className="font-medium text-gray-900">+52 (___) ___ ____</span>
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Servicios</p>
            <ul className="mt-4 space-y-3 text-sm">
              {links.servicios.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-600 transition hover:text-[#0E482A]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Empresa</p>
            <ul className="mt-4 space-y-3 text-sm">
              {links.empresa.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-600 transition hover:text-[#0E482A]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA box */}
          <div className="rounded-3xl border border-[#0E482A]/15 bg-[#D5E0DA]/35 p-6">
            <p className="text-sm font-semibold text-[#0E482A]">Diagnóstico</p>
            <p className="mt-2 text-lg font-bold text-gray-900">
              Agenda una llamada y recibe una ruta clara.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Te orientamos para reducir costos, cumplir regulación y evaluar FV.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/recursos"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Ver recursos
              </Link>
            </div>

            <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-[#0E482A] via-[#7D968B] to-[#583F66]" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Energía México. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/aviso-de-privacidad" className="text-gray-500 hover:text-[#0E482A]">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-[#0E482A]">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
