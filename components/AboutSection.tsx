// components/AboutSection.tsx
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white border-t border-surface-border">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D5E0DA]/45 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#1F4FD8]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#2EAD4A]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: Title + lead */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-brand-green">Nosotros</p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink lg:text-4xl">
              Claridad y estrategia en el Mercado Eléctrico Mayorista para concretar tu proyecto
            </h2>

            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Energía México surge para resolver la necesidad de un servicio especializado 
              en el Mercado Eléctrico Mayorista. Cubrimos los requerimientos de usuarios, 
              inversionistas y emprendedores que buscan optimizar su generación de energía o 
              realizar con éxito una solicitud de servicio CFE.

            </p>

            {/* Small cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                className="
                  rounded-2xl border border-surface-border bg-surface p-5 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <p className="text-xs font-semibold text-ink-soft">Dato clave</p>
                <p className="mt-2 text-2xl font-bold text-ink">+80%</p>
                <p className="mt-1 text-sm text-ink-muted">
                  de solicitudes a CFE y CENACE no se concretan por inviabilidad.
                </p>
              </div>

              <div
                className="
                  rounded-2xl border border-surface-border bg-surface p-5 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <p className="text-xs font-semibold text-ink-soft">Experiencia</p>
                <p className="mt-2 text-2xl font-bold text-ink">23+ años</p>
                <p className="mt-1 text-sm text-ink-muted">
                  Equipo altamente capacitado para entregar resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Right: How we improve it (centered vertically) */}
          <div className="lg:col-span-7 self-center">
            <div
              className="
                rounded-2xl border border-surface-border bg-white p-6 shadow-sm lg:p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <h3 className="text-lg font-semibold text-ink">
                Ya sea que busques implementar energía solar en México, energía eólica o sistemas de almacenamiento, mejoramos tu tasa de éxito a través de:
              </h3>

              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-ink">
                      Consultoría de Energía y Modelos Matemáticos
                    </p>
                    <p className="text-sm text-ink-muted">
                      Acompañamiento experto basado en un modelo matemático robusto 
                      para predecir escenarios. Te explicamos qué es un modelo matemático 
                      aplicado a tu rentabilidad y cómo los diferentes tipos de modelos 
                      matemáticos aseguran decisiones informadas.

                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-ink">
                      Análisis de Prefactibilidad y Diagnóstico CFE
                    </p>
                    <p className="text-sm text-ink-muted">
                      Detectamos riesgos y viabilidad antes de procesar 
                      cualquier solicitud de energía CFE. Analizamos las normas de 
                      CFE para instalaciones eléctricas y los requisitos de las subestaciones 
                      eléctricas CFE para evitar retrasos en tu acometida eléctrica.

                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-warning/20 text-warning">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-ink">
                      Estrategia de Interconexión CFE y Promoción
                    </p>
                    <p className="text-sm text-ink-muted">
                      Trazamos una ruta clara para gestionar tu interconexión 
                      CFE y la solicitud de interconexión CFE. Preparamos el 
                      formato de solicitud de servicio de energía eléctrica CFE y 
                      la documentación técnica para CENACE México, justificando el
                       proyecto con datos de generación de energía eléctrica reales.

                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-surface-soft p-5">
                <p className="text-sm leading-relaxed text-ink-muted">
                  Somos un equipo altamente capacitado con más de{" "}
                  <span className="font-semibold text-ink">23 años</span> de
                  experiencia en la Comisión Federal de Electricidad (CFE) 
                  y el MEM. No dejes tu inversión al azar; utiliza nuestra 
                  consultoría administrativa y técnica para empezar a tomar 
                  decisiones basadas en microgrids y eficiencia energética.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
                  >
                    Contáctanos
                  </Link>

                  <Link
                    href="/nosotros"
                    className="inline-flex items-center justify-center rounded-xl border border-surface-border bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-surface-soft"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
