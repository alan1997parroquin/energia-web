import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.energia-mexico.com"),

  title: {
    default: "Energía México",
    template: "%s | Energía México",
  },

  description:
    "Consultoría y gestoría energética en México: estudios de prefactibilidad, interconexión ante CFE/CENACE, integración fotovoltaica y capacitación para el MEM.",

  keywords: [
    "mercado eléctrico mayorista",
    "MEM",
    "CENACE",
    "CFE",
    "prefactibilidad",
    "interconexión",
    "fotovoltaico",
    "gestoría energética",
    "consultoría energética",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "Energía México",
    locale: "es_MX",
    title: "Energía México",
    description:
      "Consultoría y gestoría energética en México: estudios de prefactibilidad, interconexión ante CFE/CENACE, integración fotovoltaica y capacitación para el MEM.",
    images: [
      {
        url: "/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Energía México",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Energía México",
    description:
      "Consultoría y gestoría energética en México: prefactibilidad, interconexión CFE/CENACE, FV y capacitación MEM.",
    images: ["/og/og-home.jpg"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Energía México",
  url: "https://www.energia-mexico.com",
  logo: "https://www.energia-mexico.com/branding/energia-mexico-logo.png",
  image: "https://www.energia-mexico.com/og/og-home.jpg",
  description:
    "Consultoría y gestoría energética en México: estudios de prefactibilidad, interconexión ante CFE/CENACE, integración fotovoltaica y capacitación para el MEM.",
  areaServed: "MX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  email: "contacto@energia-mexico.com",
  telephone: "+52 55 7500 7413",
  brand: {
    "@type": "Brand",
    name: "Energía México",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52 55 7500 7413",
    contactType: "customer service",
    areaServed: "MX",
    availableLanguage: ["es"],
  },
};

const GTM_ID = "GTM-TF5BZSGC";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>

      <body
        className={`${inter.className} min-h-screen overflow-x-hidden bg-white text-gray-900`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />
          <div aria-hidden="true" className="h-[88px] bg-white" />
          {children}
          <Footer />
      </body>
    </html>
  );
}