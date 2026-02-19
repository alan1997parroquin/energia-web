// app/aviso-de-privacidad/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | Energía México",
  description:
    "Aviso de Privacidad Integral de Energía México: tratamiento de datos personales, finalidades, derechos ARCO y medios de contacto.",
};

// ✅ Ajusta estos placeholders cuando tengas los datos finales
const RESPONSABLE = "Energía México";
const DOMICILIO = "Ciudad de México, México";
const EMAIL_PRIVACIDAD = "privacidad@energia-mexico.com";

export default function AvisoDePrivacidadPage() {
  return (
    <main className="relative isolate overflow-hidden bg-white">
      {/* background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/45 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* back */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-surface-border bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Volver al inicio
          </Link>
        </div>

        {/* header */}
        <header className="mb-10">
          <p className="text-sm font-semibold tracking-wide text-brand-blue">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Aviso de Privacidad Integral
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-900">
            En {RESPONSABLE} estamos comprometidos con la protección de tus datos
            personales. Este Aviso describe cómo recabamos, usamos y protegemos
            tu información cuando visitas nuestro sitio o te pones en contacto
            con nosotros.
          </p>
        </header>

        {/* content card */}
        <section className="rounded-3xl border border-surface-border bg-white p-6 shadow-sm md:p-8">
          {/* simple: solo texto + saltos de línea */}
          <div
            className="
              prose prose-gray max-w-none
              text-gray-900
              prose-p:text-gray-900 prose-li:text-gray-900
              prose-strong:text-gray-900
              prose-h2:text-gray-900 prose-h3:text-gray-900
              prose-a:text-brand-blue prose-a:font-medium prose-a:underline prose-a:underline-offset-4
              prose-h2:mt-10 prose-h2:mb-3
              prose-h3:mt-6 prose-h3:mb-2
              prose-p:my-4
              prose-ul:my-4
            "
          >
            <h2>1. Identidad y domicilio del responsable</h2>
            <p>
              <strong>{RESPONSABLE}</strong> (en adelante, “Energía México”), con
              domicilio en <strong>{DOMICILIO}</strong>, es responsable del
              tratamiento de tus datos personales.
            </p>

            <h2>2. Datos personales que recabamos</h2>
            <p>
              Para las finalidades descritas en este Aviso, podremos recabar,
              según el medio de contacto, los siguientes datos:
            </p>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Teléfono</li>
              <li>Empresa, puesto o área</li>
              <li>Mensaje y cualquier información que voluntariamente compartas</li>
              <li>
                En su caso, datos de facturación cuando contrates servicios
                (razón social, RFC, domicilio fiscal y datos de contacto)
              </li>
            </ul>

            <h2>3. Finalidades del tratamiento</h2>
            <h3>Finalidades primarias (necesarias)</h3>
            <ul>
              <li>
                Atender solicitudes de información, contacto y elaboración de
                cotizaciones.
              </li>
              <li>
                Prestar servicios de consultoría, gestoría, integración
                fotovoltaica y/o capacitación.
              </li>
              <li>
                Dar seguimiento a proyectos, soporte y comunicación relacionada
                con el servicio.
              </li>
              <li>
                Gestión administrativa y, en su caso, emisión de comprobantes
                fiscales.
              </li>
            </ul>

            <h3>Finalidades secundarias (opcionales)</h3>
            <ul>
              <li>
                Enviar contenidos, invitaciones, novedades y comunicaciones de
                mercadotecnia o prospección comercial.
              </li>
              <li>
                Realizar análisis estadístico y de desempeño del sitio para
                mejorar la experiencia (cuando aplique).
              </li>
            </ul>

            <p>
              Si no deseas que tus datos se utilicen para finalidades
              secundarias, puedes solicitarlo escribiendo a{" "}
              <a href={`mailto:${EMAIL_PRIVACIDAD}`}>{EMAIL_PRIVACIDAD}</a>.
            </p>

            <h2>4. Opciones y medios para limitar el uso o divulgación</h2>
            <p>
              Puedes solicitar la limitación del uso o divulgación de tus datos
              enviando un correo a{" "}
              <a href={`mailto:${EMAIL_PRIVACIDAD}`}>{EMAIL_PRIVACIDAD}</a> con
              el asunto: <em>“Limitación de uso de datos”</em>.
            </p>

            <h2>5. Derechos ARCO y revocación del consentimiento</h2>
            <p>
              Tienes derecho a <strong>Acceder</strong>,{" "}
              <strong>Rectificar</strong>, <strong>Cancelar</strong> u{" "}
              <strong>Oponerte</strong> al tratamiento de tus datos personales
              (derechos ARCO), así como a revocar tu consentimiento cuando sea
              aplicable.
            </p>
            <p>
              Para ejercerlos, envía tu solicitud a{" "}
              <a href={`mailto:${EMAIL_PRIVACIDAD}`}>{EMAIL_PRIVACIDAD}</a>.
            </p>
            <p>Tu solicitud deberá incluir, al menos:</p>
            <ul>
              <li>Nombre completo y medio para responderte</li>
              <li>Documento que acredite tu identidad (o representación)</li>
              <li>
                Descripción clara de los datos y el derecho que deseas ejercer
              </li>
            </ul>

            <h2>6. Transferencias y proveedores (encargados)</h2>
            <p>
              Tus datos podrán ser tratados por proveedores que nos apoyan para
              operar el sitio y la comunicación (por ejemplo, hosting, formularios
              y herramientas de analítica o correo, si se habilitan). Dichos
              proveedores actúan como <strong>encargados</strong> bajo nuestras
              instrucciones.
            </p>

            <h2>7. Cookies y tecnologías similares</h2>
            <p>
              Este sitio puede usar cookies y tecnologías similares para su
              funcionamiento, medición y mejora. Puedes consultar el detalle en
              nuestra <Link href="/cookies">Política de Cookies</Link>.
            </p>

            <h2>8. Cambios al Aviso de Privacidad</h2>
            <p>
              {RESPONSABLE} puede modificar este Aviso en cualquier momento.
              Publicaremos cualquier actualización en esta misma página.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Si tienes dudas sobre este Aviso de Privacidad, contáctanos en{" "}
              <a href={`mailto:${EMAIL_PRIVACIDAD}`}>{EMAIL_PRIVACIDAD}</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
