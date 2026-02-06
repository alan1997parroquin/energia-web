import Link from "next/link";

const links = {
  servicios: [
    { label: "Consultoría", href: "/servicios/consultoria" },
    { label: "Gestoría", href: "/servicios/gestoria" },
    { label: "Integrador Fotovoltaico", href: "/servicios/fotovoltaico" },
    { label: "Capacitación", href: "/servicios/capacitacion" },
    { label: "Todos los servicios", href: "/servicios" },
  ],
  empresa: [
    { label: "Quiénes somos", href: "/nosotros" },
    { label: "Casos de éxito", href: "/casos" },
    { label: "Recursos", href: "/recursos" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-surface-border bg-white">
      {/* subtle background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#583F66]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15">
                <span className="text-sm font-bold text-brand-green-dark">EM</span>
              </div>
              <div>
                <p className="text-base font-bold text-ink">Energía México</p>
                <p className="text-sm text-ink-muted">
                  Más que consultores, tus socios de negocio
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-ink-muted">
              Consultoría y gestoría energética, integración fotovoltaica y capacitación
              para empresas que necesitan claridad, cumplimiento y ejecución.
            </p>

            {/* Contact mini */}
            <div className="rounded-2xl border border-surface-border bg-surface-soft p-4 text-sm">
              <p className="font-semibold text-ink">Contacto</p>
              <p className="mt-1 text-ink-muted">Cobertura: México</p>
              <p className="mt-1 text-ink-muted">
                Email:{" "}
                <span className="font-medium text-ink">tomas@energia-mexico.com</span>
              </p>
              <p className="mt-1 text-ink-muted">
                WhatsApp:{" "}
                <span className="font-medium text-ink">+52 (56) 4467 1599</span>
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-sm font-semibold text-ink">Servicios</p>
            <ul className="mt-4 space-y-3 text-sm">
              {links.servicios.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <Link
                    href={l.href}
                    className="text-ink-muted transition hover:text-brand-green-dark"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-sm font-semibold text-ink">Empresa</p>
            <ul className="mt-4 space-y-3 text-sm">
              {links.empresa.map((l) => (
                <li key={`${l.href}-${l.label}`}>
                  <Link
                    href={l.href}
                    className="text-ink-muted transition hover:text-brand-green-dark"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA box (verde más claro) */}
          <div className="rounded-3xl border border-brand-green/20 bg-brand-green-soft p-6">
            <p className="text-sm font-semibold text-brand-green-dark">Diagnóstico</p>
            <p className="mt-2 text-lg font-bold text-ink">
              Agenda una llamada y recibe una ruta clara.
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Te orientamos para reducir costos, cumplir regulación y evaluar FV.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green-dark px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/recursos"
                className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-surface-soft"
              >
                Ver recursos
              </Link>
            </div>

            <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-brand-green-dark via-brand-green to-[#583F66]" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-surface-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © {year} Energía México. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link
              href="/aviso-de-privacidad"
              className="text-ink-soft hover:text-brand-green-dark"
            >
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="text-ink-soft hover:text-brand-green-dark">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
