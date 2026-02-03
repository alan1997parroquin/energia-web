import Link from "next/link";

export default function SectorAlimentosRefrigeracionPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Alimentos y Refrigeración</h1>
      <p className="mt-4 text-gray-600">
        Placeholder: soluciones para operación 24/7, cadena de frío, confiabilidad y eficiencia.
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
