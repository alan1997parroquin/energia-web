import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Diagnóstico Energético para Empresas",
  description:
    "Agenda un diagnóstico energético con Energía México. Cuéntanos tu caso y te ayudamos con consultoría, gestoría, integración fotovoltaica o capacitación especializada.",
  keywords: [
    "contacto Energía México",
    "diagnóstico energético",
    "consultoría energética México",
    "gestoría CFE",
    "gestoría CENACE",
    "integración fotovoltaica",
    "capacitación energética",
    "mercado eléctrico mexicano",
    "contacto consultoría energética",
    "contacto energía solar empresas",
    "contacto MEM",
  ],
  alternates: {
    canonical: "https://www.energia-mexico.com/contacto",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contacto | Diagnóstico Energético para Empresas | Energía México",
    description:
      "Cuéntanos tu caso y te ayudamos con consultoría, gestoría, integración fotovoltaica o capacitación especializada.",
    url: "https://www.energia-mexico.com/contacto",
    siteName: "Energía México",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.energia-mexico.com/imagen/services/consultoria.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Energía México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Diagnóstico Energético para Empresas | Energía México",
    description:
      "Agenda un diagnóstico energético con Energía México y da el siguiente paso con claridad.",
    images: ["https://www.energia-mexico.com/imagen/services/consultoria.jpg"],
  },
};

export default function Page() {
  return <ContactoClient />;
}