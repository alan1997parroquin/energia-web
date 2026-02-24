import Link from "next/link";
import Image from "next/image";

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

// ✅ Tus links
const LINKEDIN_URL = "https://www.linkedin.com/company/energia-m%C3%A9xico/posts/?feedView=all";
const INSTAGRAM_URL =
  "https://www.instagram.com/tomas.reyes.sanchez?igsh=MWo5a21obWVlajhtNQ==";
// ⚠️ Cambia esto por el link real de Facebook (perfil o página)
const FACEBOOK_URL = "https://web.facebook.com/profile.php?id=61556298763464";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.75-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.0V9h3.104v1.561h.045c.432-.817 1.49-1.679 3.065-1.679 3.276 0 3.879 2.157 3.879 4.962v6.608zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.956 20.452H3.717V9h3.239v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.99H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.885h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

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
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-brand-green/15">
                  <Image
                    src="/branding/energia-mexico-logo.png"
                    alt="Energía México"
                    fill
                    className="object-contain p-1"
                    priority={false}
                  />
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

          {/* CTA box */}
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

          {/* Derecha: Búscanos + iconos + links legales */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-ink-soft">Búscanos en</span>

              <div className="flex items-center gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink-soft transition hover:text-brand-green-dark"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-ink-soft transition hover:text-brand-green-dark"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-ink-soft transition hover:text-brand-green-dark"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/aviso-de-privacidad"
                className="text-ink-soft hover:text-brand-green-dark"
              >
                Aviso de privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-ink-soft hover:text-brand-green-dark"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
