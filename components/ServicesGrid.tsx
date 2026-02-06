// components/ServicesGrid.tsx
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Consultoría",
    desc: "Optimización de costos, estrategia de suministro y análisis para mejores decisiones energéticas.",
    href: "/servicios/consultoria",
    icon: "🧠",
    img: "/imagen/services/consultoria.jpg",
    tag: "Estrategia • MEM",
  },
  {
    title: "Gestoría",
    desc: "Trámites, interconexión y acompañamiento técnico-regulatorio para avanzar sin fricciones.",
    href: "/servicios/gestoria",
    icon: "🧾",
    img: "/imagen/services/interconexion.jpg",
    tag: "Trámites • Cumplimiento",
  },
  {
    title: "Integrador Fotovoltaico",
    desc: "Evaluación, ingeniería, interconexión e instalación para autoconsumo industrial y comercial.",
    href: "/servicios/fotovoltaico",
    icon: "☀️",
    img: "/imagen/services/fotovoltaico.jpg",
    tag: "ROI • Interconexión",
  },
  {
    title: "Capacitación Energética",
    desc: "Programas técnicos y ejecutivos a la medida para fortalecer capacidades internas.",
    href: "/servicios/capacitacion",
    icon: "🎓",
    img: "/imagen/services/capacitacion.jpg",
    tag: "In-company • Talleres",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-surface-soft border-t border-surface-border">
      {/* fondo suave */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-blue-soft/30 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-blue">Servicios</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Soluciones clave para empresas en México
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              De la estrategia a la ejecución: claridad técnica, cumplimiento y
              viabilidad financiera.
            </p>
          </div>

          <Link
            href="/servicios"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-brand-blue/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm transition hover:bg-brand-blue-soft"
          >
            Ver todos
          </Link>
        </div>

        {/* Grid (4 en desktop) */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
            >
              {/* Imagen (más baja para card rectangular) */}
              
              <div className="relative h-60 w-full sm:h-64 lg:h-72">
  
                
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.04]"
                  priority={idx === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                {/* Tag */}
                <div className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm backdrop-blur">
                  <span className="shrink-0">{s.icon}</span>
                  <span className="truncate">{s.tag}</span>
                </div>

                {/* Copy */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-white/85 sm:text-sm">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Footer (siempre abajo) */}
              <div className="mt-auto flex items-center justify-between px-4 py-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Ver servicio
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green" />
                </span>

                <span className="text-sm text-slate-400 transition group-hover:text-brand-blue">
                  →
                </span>
              </div>

              {/* Accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-blue to-brand-green opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 sm:hidden">
          <Link
            href="/servicios"
            className="inline-flex w-full items-center justify-center rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm font-semibold text-brand-blue shadow-sm transition hover:bg-brand-blue-soft"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
