"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type NestedItem = { label: string; href?: string };
type SubMenu = {
  label: string;
  href?: string; // nivel 2 (página)
  items: NestedItem[]; // nivel 3 (anclas o informativo)
};

type MenuTop = {
  label: string;
  href: string;
  columns: Array<
    | { type: "accordion"; label: string; href?: string; sections: SubMenu[] }
    | { type: "list"; label: string; href?: string; items: NestedItem[] }
  >;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function anchorHref(pageHref: string, itemLabel: string) {
  return `${pageHref}#${slugify(itemLabel)}`;
}

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | "servicios">(null);
  const [isServicesPanelVisible, setIsServicesPanelVisible] = useState(false);

  const closeTimer = useRef<number | null>(null);
  const desktopWrapRef = useRef<HTMLDivElement | null>(null);

  const [openSubDesktop, setOpenSubDesktop] = useState<Record<string, boolean>>({});

  const [mServicios, setMServicios] = useState(false);
  const [mTopOpen, setMTopOpen] = useState<string | null>(null);
  const [mSubOpen, setMSubOpen] = useState<string | null>(null);

  const menu = useMemo<MenuTop>(() => {
    const consultoriaBase = "/servicios/consultoria";
    const consultoriaPages = {
      pref: `${consultoriaBase}/prefactibilidad`,
      esp: `${consultoriaBase}/estudios-especificos`,
      ant: `${consultoriaBase}/anticipacion`,
      ing: `${consultoriaBase}/ingenieria`,
      mod: `${consultoriaBase}/modelos-financieros`,
    };

    const consultoriaSections: SubMenu[] = [
      {
        label: "Estudios de prefactibilidad",
        href: consultoriaPages.pref,
        items: ["Generación", "Carga", "Incremento de Demanda", "Migración", "Sistemas de Almacenamiento"].map((x) => ({
          label: x,
          href: anchorHref(consultoriaPages.pref, x),
        })),
      },
      {
        label: "Estudios específicos",
        href: consultoriaPages.esp,
        items: [
          "Análisis de mercado Eléctrico Mayorista",
          "Investigación específica (cualquier cosa no listada)",
          "Análisis de contrato de cobertura eléctrica",
          "Análisis de consumo",
          "Asesoría de Migración a MEM",
        ].map((x) => ({
          label: x,
          href: anchorHref(consultoriaPages.esp, x),
        })),
      },
      {
        label: "Anticipación estratégica de tendencias",
        href: consultoriaPages.ant,
        items: ["Prospección de precios de energía (por nodo, hora y zona)", "Simulación de despacho a corto - mediano"].map(
          (x) => ({
            label: x,
            href: anchorHref(consultoriaPages.ant, x),
          })
        ),
      },
      {
        label: "Servicios de Ingeniería",
        href: consultoriaPages.ing,
        items: ["Diseño de microgrids", "Diseño de proyectos de transición energética"].map((x) => ({
          label: x,
          href: anchorHref(consultoriaPages.ing, x),
        })),
      },
      {
        label: "Modelos financieros",
        href: consultoriaPages.mod,
        items: ["Generación", "Microgrids"].map((x) => ({
          label: x,
          href: anchorHref(consultoriaPages.mod, x),
        })),
      },
    ];

    const gestoriaSections: SubMenu[] = [
      {
        label: "CFE Baja tensión y media",
        href: "/servicios/gestoria",
        items: ["Prefactibilidad de carga", "Cambio de nombre", "Nuevo servicio", "Incremento de demanda", "Interconexión"].map(
          (x) => ({ label: x, href: "/servicios/gestoria" })
        ),
      },
      {
        label: "CENACE y CFE > 1MW",
        href: "/servicios/gestoria",
        items: [
          "Prefactibilidad de carga",
          "Estrategia de promoción",
          "Manejo de SIASIC",
          "Modelo matemático",
          "Perfiles de carga",
          "Diseño de red interna",
          "Seguimiento, atención y representación",
          "Coordinación de adquisiciones",
          "Coordinación del proyecto",
          "Reuniones con CFE",
          "Carpeta de proyecto",
          "Demanda controlable",
        ].map((x) => ({ label: x, href: "/servicios/gestoria" })),
      },
    ];

    const integradorItems: NestedItem[] = [
      "Estudio de viabilidad",
      "Diseño de solución",
      "Ingeniería detallada",
      "Suministro de instalación",
      "Pruebas",
      "Mantenimiento Preventivo y correctivo",
      "Financiamiento",
      "Gestoría de CFE",
    ].map((x) => ({ label: x, href: "/servicios/fotovoltaico" }));

    const capacitacionItems: NestedItem[] = [
      "MEM",
      "Análisis de riesgos y oportunidades",
      "Modelo de despacho en Calliope",
      "Cursos de preparación para certificaciones",
      "Análisis de datos MEM",
    ].map((x) => ({ label: x, href: "/servicios/capacitacion" }));

    return {
      label: "Servicios",
      href: "/servicios",
      columns: [
        { type: "accordion", label: "Consultoría", href: "/servicios/consultoria", sections: consultoriaSections },
        { type: "accordion", label: "Gestoría", href: "/servicios/gestoria", sections: gestoriaSections },
        { type: "list", label: "Integrador Fotovoltaico", href: "/servicios/fotovoltaico", items: integradorItems },
        { type: "list", label: "Capacitaciones", href: "/servicios/capacitacion", items: capacitacionItems },
      ],
    };
  }, []);

  // ✅ Cierra el menú + scroll suave si hay hash
  const handleNav = (href?: string) => (e: React.MouseEvent) => {
    if (!href) return;

    const hasHash = href.includes("#");
    if (!hasHash) {
      setOpenDesktopMenu(null);
      setIsServicesPanelVisible(false);
      setOpenMobile(false);
      return;
    }

    e.preventDefault();
    setOpenDesktopMenu(null);
    setIsServicesPanelVisible(false);
    setOpenMobile(false);

    const [path, hash] = href.split("#");
    const id = hash?.trim();

    window.history.pushState(null, "", href);

    requestAnimationFrame(() => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  // Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMobile(false);
        setOpenDesktopMenu(null);
        setIsServicesPanelVisible(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock scroll mobile
  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  // Click afuera desktop
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!openDesktopMenu) return;
      const el = desktopWrapRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) {
        setOpenDesktopMenu(null);
        setIsServicesPanelVisible(false);
      }
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [openDesktopMenu]);

  function safeCloseDesktopSoon() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setIsServicesPanelVisible(false);
      setOpenDesktopMenu(null);
    }, 160);
  }

  function safeOpenDesktop(menuKey: "servicios") {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenDesktopMenu(menuKey);
    setIsServicesPanelVisible(true);
  }

  const topServiceLinkClass =
    "text-xs font-semibold uppercase tracking-wide text-brand-green hover:text-brand-green-dark transition";

  const itemLinkClass =
    "block rounded-lg px-2 py-1.5 text-sm text-ink hover:bg-surface-soft whitespace-normal break-words";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-soft">
            <Image
              src="/branding/energia-mexico-logo.png"
              alt="Energía México"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-ink">Energía México</p>
            <p className="text-xs text-ink-muted">Consultoría • FV • Capacitación</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <nav ref={desktopWrapRef} className="relative flex items-center gap-6 text-sm font-medium text-ink-muted">
            {/* Servicios */}
            <div className="relative" onMouseEnter={() => safeOpenDesktop("servicios")} onMouseLeave={() => safeCloseDesktopSoon()}>
              <button
                type="button"
                onClick={() => {
                  setOpenDesktopMenu((v) => (v === "servicios" ? null : "servicios"));
                  setIsServicesPanelVisible((v) => !v);
                }}
                onFocus={() => safeOpenDesktop("servicios")}
                aria-haspopup="menu"
                aria-expanded={openDesktopMenu === "servicios"}
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                Servicios <span className="text-xs">▾</span>
              </button>

              {openDesktopMenu === "servicios" && (
                <div
                  role="menu"
                  className={[
                    "fixed left-1/2 top-[72px] w-[min(1280px,96vw)] -translate-x-1/2 rounded-2xl border border-surface-border bg-white p-6 shadow-xl",
                    "origin-top transition duration-200 ease-out",
                    isServicesPanelVisible
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none",
                  ].join(" ")}
                  onMouseEnter={() => safeOpenDesktop("servicios")}
                  onMouseLeave={() => safeCloseDesktopSoon()}
                >
                  <div className="max-h-[70vh] overflow-auto pr-2">
                    <div className="grid gap-6 xl:grid-cols-4">
                      {menu.columns.map((col) => {
                        if (col.type === "list") {
                          return (
                            <div key={col.label} className="min-w-0">
                              <Link href={col.href ?? "#"} onClick={() => setOpenDesktopMenu(null)} className={topServiceLinkClass}>
                                {col.label}
                              </Link>

                              <ul className="mt-3 space-y-1">
                                {col.items.map((it) => (
                                  <li key={it.label}>
                                    <Link href={it.href ?? "#"} onClick={handleNav(it.href)} className={itemLinkClass}>
                                      {it.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        }

                        return (
                          <div key={col.label} className="min-w-0">
                            <Link href={col.href ?? "#"} onClick={() => setOpenDesktopMenu(null)} className={topServiceLinkClass}>
                              {col.label}
                            </Link>

                            <div className="mt-3 space-y-1">
                              {col.sections.map((sec) => {
                                const key = `${col.label}__${sec.label}`;
                                const isOpen = !!openSubDesktop[key];

                                return (
                                  <div key={sec.label} className="min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <Link
                                        href={sec.href ?? "#"}
                                        onClick={() => {
                                          setOpenDesktopMenu(null);
                                          setIsServicesPanelVisible(false);
                                        }}
                                        className="min-w-0 flex-1 rounded-lg px-2 py-1.5 text-sm font-medium text-ink hover:bg-surface-soft"
                                      >
                                        {sec.label}
                                      </Link>

                                      <button
                                        type="button"
                                        className="rounded-lg px-2 py-1.5 text-xs font-semibold text-ink-muted hover:bg-surface-soft"
                                        onClick={() =>
                                          setOpenSubDesktop((prev) => ({ ...prev, [key]: !prev[key] }))
                                        }
                                        aria-expanded={isOpen}
                                        aria-label={`Desplegar ${sec.label}`}
                                      >
                                        {isOpen ? "▴" : "▾"}
                                      </button>
                                    </div>

                                    {isOpen && (
                                      <ul className="mt-1 space-y-1 pl-2">
                                        {sec.items.map((it) => (
                                          <li key={it.label}>
                                            <Link href={it.href ?? "#"} onClick={handleNav(it.href)} className={itemLinkClass}>
                                              {it.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer del panel */}
                  <div className="mt-5 flex items-center justify-between border-t border-surface-border pt-4">
                    <Link
                      href="/servicios"
                      className="text-sm font-semibold text-ink hover:underline"
                      onClick={() => {
                        setOpenDesktopMenu(null);
                        setIsServicesPanelVisible(false);
                      }}
                    >
                      Ver todos los servicios
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setOpenDesktopMenu(null);
                        setIsServicesPanelVisible(false);
                      }}
                      className="rounded-xl border border-surface-border px-3 py-1.5 text-xs font-semibold text-ink hover:bg-surface-soft"
                      aria-label="Cerrar menú"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link href="/nosotros" className="transition hover:text-ink">
              Quiénes somos
            </Link>

            <Link href="/contacto" className="transition hover:text-ink">
              Contacto
            </Link>
          </nav>

          <Link
            href="/contacto"
            className="rounded-xl bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
          >
            Cotiza ahora
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contacto"
            className="rounded-xl bg-brand-green px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
          >
            Cotiza
          </Link>

          <button
            onClick={() => setOpenMobile(true)}
            aria-label="Abrir menú"
            className="rounded-xl border border-surface-border bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-surface-soft"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {openMobile && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button aria-label="Cerrar menú" onClick={() => setOpenMobile(false)} className="absolute inset-0 bg-black/40" />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-soft">
                  <Image src="/branding/energia-mexico-logo.png" alt="Energía México" width={34} height={34} className="object-contain" />
                </div>
                <div className="leading-tight">
                  <p className="font-semibold text-ink">Menú</p>
                  <p className="text-xs text-ink-muted">Energía México</p>
                </div>
              </div>
              <button
                onClick={() => setOpenMobile(false)}
                aria-label="Cerrar"
                className="rounded-xl border border-surface-border px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                ✕
              </button>
            </div>

            <nav className="px-6 py-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/" onClick={() => setOpenMobile(false)} className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft">
                    Inicio
                  </Link>
                </li>

                <li className="rounded-xl border border-surface-border">
                  <button
                    type="button"
                    onClick={() => setMServicios((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-3 font-semibold text-ink"
                    aria-expanded={mServicios}
                  >
                    <span>Servicios</span>
                    <span className="text-sm">{mServicios ? "–" : "+"}</span>
                  </button>

                  {mServicios && (
                    <div className="px-2 pb-2">
                      <div className="space-y-2">
                        {menu.columns.map((top) => {
                          const topKey = top.label;
                          const isTopOpen = mTopOpen === topKey;

                          return (
                            <div key={topKey} className="rounded-xl border border-surface-border">
                              <div className="flex items-center justify-between px-3 py-2">
                                <Link href={top.href ?? "#"} onClick={() => setOpenMobile(false)} className="text-sm font-semibold text-brand-green">
                                  {top.label}
                                </Link>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setMSubOpen(null);
                                    setMTopOpen((v) => (v === topKey ? null : topKey));
                                  }}
                                  className="rounded-lg border border-surface-border px-2 py-1 text-xs font-semibold text-ink hover:bg-surface-soft"
                                  aria-label={`Desplegar ${top.label}`}
                                >
                                  {isTopOpen ? "–" : "+"}
                                </button>
                              </div>

                              {isTopOpen && (
                                <div className="px-2 pb-2">
                                  {top.type === "list" ? (
                                    <ul className="space-y-1">
                                      {top.items.map((it) => (
                                        <li key={it.label}>
                                          <Link href={it.href ?? "#"} onClick={() => setOpenMobile(false)} className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface-soft">
                                            {it.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <div className="space-y-2">
                                      {top.sections.map((sec) => {
                                        const subKey = `${top.label}__${sec.label}`;
                                        const isSubOpen = mSubOpen === subKey;

                                        return (
                                          <div key={sec.label} className="rounded-xl bg-surface-soft/40">
                                            <div className="flex items-center justify-between px-3 py-2">
                                              <Link href={sec.href ?? "#"} onClick={() => setOpenMobile(false)} className="text-sm font-semibold text-ink">
                                                {sec.label}
                                              </Link>

                                              <button
                                                type="button"
                                                onClick={() => setMSubOpen((v) => (v === subKey ? null : subKey))}
                                                className="rounded-lg px-2 py-1 text-xs font-semibold text-ink-muted hover:bg-surface-soft"
                                                aria-expanded={isSubOpen}
                                              >
                                                {isSubOpen ? "▴" : "▾"}
                                              </button>
                                            </div>

                                            {isSubOpen && (
                                              <ul className="space-y-1 pb-2">
                                                {sec.items.map((it) => (
                                                  <li key={it.label}>
                                                    <Link href={it.href ?? "#"} onClick={() => setOpenMobile(false)} className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface-soft">
                                                      {it.label}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <Link href="/servicios" onClick={() => setOpenMobile(false)} className="mt-3 block rounded-xl px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-soft">
                        Ver todos los servicios
                      </Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link href="/nosotros" onClick={() => setOpenMobile(false)} className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft">
                    Quiénes somos
                  </Link>
                </li>

                <li>
                  <Link href="/contacto" onClick={() => setOpenMobile(false)} className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft">
                    Contacto
                  </Link>
                </li>
              </ul>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contacto"
                  onClick={() => setOpenMobile(false)}
                  className="block w-full rounded-xl bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
                >
                  Solicitar cotización
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
