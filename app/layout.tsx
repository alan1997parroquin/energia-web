import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
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
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-white text-gray-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}