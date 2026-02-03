import Link from "next/link";

export default function Caso1Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">
        Optimización de costos por estrategia de tarifa y demanda
      </h1>
      <p className="mt-4 text-gray-600">
        Placeholder del caso: contexto, diagnóstico, acciones, resultados y aprendizajes.
      </p>

      <Link
        href="/contacto"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
      >
        Quiero un diagnóstico
      </Link>
    </main>
  );
}
