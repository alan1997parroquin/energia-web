import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Consultoría y Gestoría",
    desc: "Optimización de costos, estrategia de suministro y acompañamiento técnico-regulatorio.",
    href: "/servicios/consultoria-gestoria",
    icon: "🧠",
    img: "/imagen/services/consultoria.jpg",
    tag: "Estrategia • MEM",
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
    desc: "Programas técnicos y ejecutivos a la medida para mejorar decisiones energéticas.",
    href: "/servicios/capacitacion",
    icon: "🎓",
    img: "/imagen/services/capacitacion.jpg",
    tag: "In-company • Talleres",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative bg-white">
      {/* fondo suave (como tu referencia) */}
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
            className="hidden sm:inline-flex rounded-xl border border-brand-blue/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm transition hover:bg-brand-blue-soft"
          >
            Ver todos
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Link
              key={s.title}
              href={s.href}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.04]"
                  priority={idx === 0}
                />

                {/* Overlay para que siempre se lea */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

                {/* Tag */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                  <span>{s.icon}</span>
                  {s.tag}
                </div>

                {/* Copy */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/85">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-5">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
                  Ver servicio
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green" />
                </span>

                <span className="text-sm text-slate-400 transition group-hover:text-brand-blue">
                  →
                </span>
              </div>

              {/* Accent line (pro feel) */}
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
