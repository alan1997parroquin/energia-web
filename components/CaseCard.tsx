import Link from "next/link";

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  location?: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  tags?: string[];
};

export default function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <Link
      href={`/casos/${c.slug}`}
      className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-[#0E482A]">{c.sector}</p>
          <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-[#0E482A]">
            {c.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {c.location ? c.location : "México"}
          </p>
        </div>

        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#0E482A] via-[#7D968B] to-[#583F66]" />
      </div>

      <div className="mt-5 space-y-3 text-sm text-gray-700">
        <p>
          <span className="font-semibold text-gray-900">Problema:</span>{" "}
          {c.problem}
        </p>
        <p>
          <span className="font-semibold text-gray-900">Solución:</span>{" "}
          {c.solution}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {c.results.slice(0, 3).map((r) => (
          <div
            key={r.label}
            className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3"
          >
            <p className="text-[11px] font-semibold text-gray-500">{r.label}</p>
            <p className="mt-1 text-sm font-bold text-gray-900">{r.value}</p>
          </div>
        ))}
      </div>

      {c.tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {c.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
        Ver caso
        <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}
