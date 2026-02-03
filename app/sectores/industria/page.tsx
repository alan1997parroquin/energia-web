import Link from "next/link";

export default function SectorIndustriaPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Industria / Manufactura</h1>
      <p className="mt-4 text-gray-600">
        Placeholder: soluciones energéticas para industria (ahorro, demanda, MEM, FV y capacitación).
      </p>

      <Link
        href="/contacto"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
      >
        Solicitar diagnóstico
      </Link>
    </main>
  );
}
