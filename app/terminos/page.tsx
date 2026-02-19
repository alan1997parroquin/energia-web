// app/terminos/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | Energía México",
  description:
    "Términos y Condiciones de uso del sitio de Energía México: uso permitido, propiedad intelectual, limitación de responsabilidad y ley aplicable.",
};

// ✅ Ajusta estos placeholders cuando tengas los datos finales
const RESPONSABLE = "Energía México";
const DOMICILIO = "Ciudad de México, México";
const EMAIL_CONTACTO = "contacto@energia-mexico.com";

export default function TerminosPage() {
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
            Términos y Condiciones
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-900">
            Estos Términos regulan el acceso y uso del sitio web de {RESPONSABLE}
            . Al navegar o utilizar el sitio, aceptas estos Términos.
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
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder, navegar o utilizar este sitio, reconoces haber leído y
              aceptado estos Términos y Condiciones. Si no estás de acuerdo, por
              favor no utilices el sitio.
            </p>

            <h2>2. Objeto del sitio</h2>
            <p>
              El sitio tiene fines informativos sobre los servicios de{" "}
              {RESPONSABLE}, incluyendo consultoría, gestoría, integración
              fotovoltaica y capacitación. El contenido puede actualizarse sin
              previo aviso.
            </p>

            <h2>3. Uso permitido</h2>
            <p>
              Te comprometes a utilizar el sitio de manera lícita y conforme a
              estos Términos. En particular, aceptas:
            </p>
            <ul>
              <li>No realizar actividades que afecten la disponibilidad del sitio.</li>
              <li>No intentar acceder sin autorización a sistemas o cuentas.</li>
              <li>
                No copiar, reproducir o explotar el contenido de forma masiva o
                con fines comerciales sin autorización.
              </li>
              <li>No introducir código malicioso (virus, bots, scraping abusivo, etc.).</li>
            </ul>

            <h2>4. Información, cotizaciones y contratación</h2>
            <p>
              La información publicada en el sitio no constituye una oferta
              vinculante ni sustituye una asesoría formal. Cualquier alcance,
              precio, tiempos y condiciones de servicios se confirmarán por
              escrito mediante propuesta, orden de servicio o contrato.
            </p>

            <h2>5. Propiedad intelectual</h2>
            <p>
              El contenido del sitio (textos, diseños, logotipos, marcas, imágenes,
              videos, software y demás materiales) es propiedad de {RESPONSABLE} o
              se utiliza con autorización. Queda prohibida su reproducción,
              distribución o modificación sin consentimiento previo y por escrito.
            </p>

            <h2>6. Enlaces a sitios de terceros</h2>
            <p>
              El sitio puede contener enlaces a páginas de terceros. {RESPONSABLE}{" "}
              no controla ni se responsabiliza por el contenido, disponibilidad o
              políticas de dichos sitios.
            </p>

            <h2>7. Limitación de responsabilidad</h2>
            <p>
              {RESPONSABLE} procura que la información del sitio sea precisa y
              esté actualizada, sin embargo, el sitio y su contenido se ofrecen
              “tal cual”. No garantizamos que el sitio opere sin interrupciones,
              errores o que esté libre de componentes dañinos. En la máxima medida
              permitida por la ley, {RESPONSABLE} no será responsable por daños
              indirectos o consecuenciales derivados del uso o imposibilidad de uso
              del sitio.
            </p>

            <h2>8. Privacidad y cookies</h2>
            <p>
              El tratamiento de datos personales se rige por nuestro{" "}
              <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>. El uso
              de cookies y tecnologías similares se describe en la{" "}
              <Link href="/cookies">Política de Cookies</Link>.
            </p>

            <h2>9. Modificaciones a los Términos</h2>
            <p>
              {RESPONSABLE} puede modificar estos Términos en cualquier momento.
              Las actualizaciones se publicarán en esta misma página y entrarán en
              vigor desde su publicación.
            </p>

            <h2>10. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos.
              Para la interpretación y cumplimiento, las partes se someten a los
              tribunales competentes de {DOMICILIO}, renunciando a cualquier otro
              fuero que pudiera corresponderles por razón de su domicilio presente
              o futuro.
            </p>

            <h2>11. Contacto</h2>
            <p>
              Si tienes dudas sobre estos Términos y Condiciones, contáctanos en{" "}
              <a href={`mailto:${EMAIL_CONTACTO}`}>{EMAIL_CONTACTO}</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
