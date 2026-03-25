"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);

  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | "servicios">(
    null
  );
  // 👇 solo controla la animación del panel (fade/slide)
  const [isServicesPanelVisible, setIsServicesPanelVisible] = useState(false);

  const closeTimer = useRef<number | null>(null);
  const openTimer = useRef<number | null>(null);

  const desktopWrapRef = useRef<HTMLDivElement | null>(null);

  // submenus desktop (acordeón por sección)
  const [openSubDesktop, setOpenSubDesktop] = useState<Record<string, boolean>>(
    {}
  );

  // mobile states
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
        items: [
          "Generación",
          "Carga",
          "Incremento de Demanda",
          "Migración",
          "Sistemas de Almacenamiento",
        ].map((x) => ({
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
        items: [
          "Prospección de precios de energía (por nodo, hora y zona)",
          "Simulación de despacho a corto - mediano",
        ].map((x) => ({
          label: x,
          href: anchorHref(consultoriaPages.ant, x),
        })),
      },
      {
        label: "Servicios de Ingeniería",
        href: consultoriaPages.ing,
        items: [
          "Diseño de microgrids",
          "Diseño de proyectos de transición energética",
        ].map((x) => ({
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

    const gestoriaPages = {
  cfe: "/servicios/gestoria/cfe-baja-tension-y-media",
  cenace: "/servicios/gestoria/cenace-y-cfe-1mw",
};

const gestoriaSections: SubMenu[] = [
  {
    label: "CFE Baja tensión y media",
    href: gestoriaPages.cfe,
    items: [
      "Prefactibilidad de carga",
      "Cambio de nombre",
      "Nuevo servicio",
      "Incremento de demanda",
      "Interconexión",
    ].map((x) => ({
      label: x,
      href: anchorHref(gestoriaPages.cfe, x),
    })),
  },
  {
    label: "CENACE y CFE > 1MW",
    href: gestoriaPages.cenace,
    items: [
      "Prefactibilidad",
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
    ].map((x) => ({
      label: x,
      href: anchorHref(gestoriaPages.cenace, x),
    })),
  },
];


  const fvBase = "/servicios/fotovoltaico";

const integradorItems: NestedItem[] = [
  { label: "Estudio de viabilidad", href: `${fvBase}#estudio-de-viabilidad` },
  { label: "Diseño de solución", href: `${fvBase}#diseno-de-solucion` },
  { label: "Ingeniería detallada", href: `${fvBase}#ingenieria-detallada` },
  { label: "Suministro e instalación", href: `${fvBase}#suministro-e-instalacion` },
  { label: "Pruebas y puesta en marcha", href: `${fvBase}#pruebas-y-puesta-en-marcha` },
  {
    label: "Mantenimiento preventivo y correctivo",
    href: `${fvBase}#mantenimiento-preventivo-y-correctivo`,
  },
  { label: "Financiamiento", href: `${fvBase}#financiamiento` },
  { label: "Gestoría de CFE", href: `${fvBase}#gestoria-de-cfe` },
];


  const capacitacionItems: NestedItem[] = [
  { label: "MEM", href: "/servicios/capacitacion#mem" },
  { label: "Análisis de riesgos y oportunidades", href: "/servicios/capacitacion#riesgos" },
  { label: "Modelo de despacho en Calliope", href: "/servicios/capacitacion#calliope" },
  { label: "Preparación para certificaciones", href: "/servicios/capacitacion#certificaciones" },
  { label: "Análisis de datos MEM", href: "/servicios/capacitacion#datos" },
];


    return {
      label: "Servicios",
      href: "/servicios",
      columns: [
        {
          type: "accordion",
          label: "Consultoría",
          href: "/servicios/consultoria",
          sections: consultoriaSections,
        },
        {
          type: "accordion",
          label: "Gestoría",
          href: "/servicios/gestoria",
          sections: gestoriaSections,
        },
        {
          type: "list",
          label: "Integrador Fotovoltaico",
          href: "/servicios/fotovoltaico",
          items: integradorItems,
        },
        {
          type: "list",
          label: "Capacitación",
          href: "/servicios/capacitacion",
          items: capacitacionItems,
        },
      ],
    };
  }, []);

 // ✅ Cierra el menú + navega bien si hay hash
const handleNav = (href?: string) => (e: React.MouseEvent) => {
  if (!href) return;

  const hasHash = href.includes("#");

  // sin hash: deja el <Link> navegar normal
  if (!hasHash) {
    closeDesktopServices();
    setOpenMobile(false);
    return;
  }

  e.preventDefault();
  closeDesktopServices();
  setOpenMobile(false);

  const [targetPath, hash] = href.split("#");
  const id = (hash || "").trim();

  // ✅ Si cambia de página, usa Next router (esto arregla tu caso /nosotros -> /servicios/...)
  if (targetPath && targetPath !== pathname) {
    router.push(href);
    return;
  }

  // ✅ Si estás en la misma página, solo scroll suave
  if (!id) return;

  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
};


  // -------------------------
  // Helpers: abrir/cerrar desktop smooth + reset submenus
  // -------------------------
  function clearTimers() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (openTimer.current) window.clearTimeout(openTimer.current);
    closeTimer.current = null;
    openTimer.current = null;
  }

  function closeDesktopServices() {
    clearTimers();
    // animación out
    setIsServicesPanelVisible(false);
    // reset de acordeones desktop (lo que pediste)
    setOpenSubDesktop({});
    // desmontar después del fade
    window.setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 180);
  }

  function safeCloseDesktopSoon() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    // un pelín más lento para que se sienta suave al salir
    closeTimer.current = window.setTimeout(() => {
      closeDesktopServices();
    }, 220);
  }

  function safeOpenDesktopSmooth(menuKey: "servicios") {
    // delay de apertura para evitar “se abre rapidísimo” con solo pasar el mouse
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);

    openTimer.current = window.setTimeout(() => {
      setOpenDesktopMenu(menuKey);
      // forzar que primero monte y luego anime
      requestAnimationFrame(() => setIsServicesPanelVisible(true));
    }, 140);
  }

  const topServiceLinkClass =
    "text-xs font-semibold uppercase tracking-wide text-brand-green hover:text-brand-green-dark transition";

  const itemLinkClass =
    "block rounded-lg px-2 py-1.5 text-sm text-ink hover:bg-surface-soft whitespace-normal break-words";

  // Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMobile(false);
        closeDesktopServices();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        closeDesktopServices();
      }
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDesktopMenu]);

  // Cuando cierres MOBILE, resetea acordeones para que no se queden abiertos
  useEffect(() => {
    if (!openMobile) {
      setMServicios(false);
      setMTopOpen(null);
      setMSubOpen(null);
    }
  }, [openMobile]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-green/40 bg-brand-green/55 shadow-sm backdrop-blur-md">

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
            <p className="text-xs text-ink-muted">
              Consultoría en Mercado Eléctrico Mayorista
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <nav
            ref={desktopWrapRef}
            className="relative flex items-center gap-6 text-sm font-medium text-ink-muted"
          >
            {/* Servicios */}
            <div
              className="relative"
              onMouseEnter={() => safeOpenDesktopSmooth("servicios")}
              onMouseLeave={() => safeCloseDesktopSoon()}
            >
              <button
                type="button"
                onClick={() => {
                  // toggle click (pero con animación + reset al cerrar)
                  if (openDesktopMenu === "servicios") {
                    closeDesktopServices();
                  } else {
                    safeOpenDesktopSmooth("servicios");
                    // si abre por click, que sea inmediato (sin esperar el timer)
                    if (openTimer.current) window.clearTimeout(openTimer.current);
                    setOpenDesktopMenu("servicios");
                    requestAnimationFrame(() => setIsServicesPanelVisible(true));
                  }
                }}
                onFocus={() => {
                  // apertura suave también al focus
                  safeOpenDesktopSmooth("servicios");
                }}
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
                    "origin-top transition-all duration-300 ease-out",
                    isServicesPanelVisible
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none",
                  ].join(" ")}
                  onMouseEnter={() => {
                    // mantener abierto sin cerrar por timer
                    if (closeTimer.current) window.clearTimeout(closeTimer.current);
                    setOpenDesktopMenu("servicios");
                    setIsServicesPanelVisible(true);
                  }}
                  onMouseLeave={() => safeCloseDesktopSoon()}
                >
                  <div className="max-h-[70vh] overflow-auto pr-2">
                    <div className="grid gap-6 xl:grid-cols-4">
                      {menu.columns.map((col) => {
                        if (col.type === "list") {
                          return (
                            <div key={col.label} className="min-w-0">
                              <Link
                                href={col.href ?? "#"}
                                onClick={() => closeDesktopServices()}
                                className={topServiceLinkClass}
                              >
                                {col.label}
                              </Link>

                              <ul className="mt-3 space-y-1">
                                {col.items.map((it) => (
                                  <li key={it.label}>
                                    <Link
                                      href={it.href ?? "#"}
                                      onClick={handleNav(it.href)}
                                      className={itemLinkClass}
                                    >
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
                            <Link
                              href={col.href ?? "#"}
                              onClick={() => closeDesktopServices()}
                              className={topServiceLinkClass}
                            >
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
                                        onClick={() => closeDesktopServices()}
                                        className="min-w-0 flex-1 rounded-lg px-2 py-1.5 text-sm font-medium text-ink hover:bg-surface-soft"
                                      >
                                        {sec.label}
                                      </Link>

                                      <button
                                        type="button"
                                        className="rounded-lg px-2 py-1.5 text-xs font-semibold text-ink-muted hover:bg-surface-soft"
                                        onClick={() =>
                                          setOpenSubDesktop((prev) => ({
                                            ...prev,
                                            [key]: !prev[key],
                                          }))
                                        }
                                        aria-expanded={isOpen}
                                        aria-label={`Desplegar ${sec.label}`}
                                      >
                                        {isOpen ? "▴" : "▾"}
                                      </button>
                                    </div>

                                    {/* ✅ animación del submenu (smooth) */}
                                    <div
                                      className={[
                                        "overflow-hidden transition-all duration-250 ease-out",
                                        isOpen
                                          ? "max-h-[520px] opacity-100 translate-y-0"
                                          : "max-h-0 opacity-0 -translate-y-1",
                                      ].join(" ")}
                                    >
                                      <ul className="mt-1 space-y-1 pl-2">
                                        {sec.items.map((it) => (
                                          <li key={it.label}>
                                            <Link
                                              href={it.href ?? "#"}
                                              onClick={handleNav(it.href)}
                                              className={itemLinkClass}
                                            >
                                              {it.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
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
                      onClick={() => closeDesktopServices()}
                    >
                      Ver todos los servicios
                    </Link>
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
            href="/contacto#formulario-cotizacion"
            className="rounded-xl bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
          >
            Cotiza ahora
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
              href="/contacto#formulario-cotizacion"
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

     {openMobile && (
  <div className="fixed inset-0 z-[80] md:hidden">
    {/* Overlay */}
    <button
      aria-label="Cerrar menú"
      onClick={() => setOpenMobile(false)}
      className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
    />

    {/* Panel */}
    <div className="absolute right-0 top-0 h-dvh w-[88%] max-w-sm bg-white shadow-2xl">
      <div className="flex h-full flex-col">
        {/* Header del panel */}
        <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-soft">
              <Image
                src="/branding/energia-mexico-logo.png"
                alt="Energía México"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="font-semibold text-ink">Menú</p>
              <p className="text-xs text-ink-muted">Energía México</p>
            </div>
          </div>

          <button
            onClick={() => setOpenMobile(false)}
            aria-label="Cerrar"
            className="rounded-xl border border-surface-border bg-white px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
          >
            ✕
          </button>
        </div>

        {/* Contenido con scroll */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpenMobile(false)}
                  className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft"
                >
                  Inicio
                </Link>
              </li>

              <li className="rounded-xl border border-surface-border bg-white">
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
                          <div
                            key={topKey}
                            className="rounded-xl border border-surface-border bg-white"
                          >
                            <div className="flex items-center justify-between px-3 py-2">
                              <Link
                                href={top.href ?? "#"}
                                onClick={() => setOpenMobile(false)}
                                className="text-sm font-semibold text-brand-green"
                              >
                                {top.label}
                              </Link>

                              <button
                                type="button"
                                onClick={() => {
                                  setMSubOpen(null);
                                  setMTopOpen((v) => (v === topKey ? null : topKey));
                                }}
                                className="rounded-lg border border-surface-border bg-white px-2 py-1 text-xs font-semibold text-ink hover:bg-surface-soft"
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
                                        <Link
                                          href={it.href ?? "#"}
                                          onClick={handleNav(it.href)}
                                          className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface-soft"
                                        >
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
                                        <div
                                          key={sec.label}
                                          className="rounded-xl bg-surface-soft/40"
                                        >
                                          <div className="flex items-center justify-between px-3 py-2">
                                            <Link
                                              href={sec.href ?? "#"}
                                              onClick={() => setOpenMobile(false)}
                                              className="text-sm font-semibold text-ink"
                                            >
                                              {sec.label}
                                            </Link>

                                            <button
                                              type="button"
                                              onClick={() =>
                                                setMSubOpen((v) =>
                                                  v === subKey ? null : subKey
                                                )
                                              }
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
                                                  <Link
                                                    href={it.href ?? "#"}
                                                    onClick={handleNav(it.href)}
                                                    className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface-soft"
                                                  >
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

                    <Link
                      href="/servicios"
                      onClick={() => setOpenMobile(false)}
                      className="mt-3 block rounded-xl px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                    >
                      Ver todos los servicios
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/nosotros"
                  onClick={() => setOpenMobile(false)}
                  className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft"
                >
                  Quiénes somos
                </Link>
              </li>

              <li>
                <Link
                  href="/contacto"
                  onClick={() => setOpenMobile(false)}
                  className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft"
                >
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <Link
                  href="/contacto#formulario-cotizacion"
                  onClick={() => setOpenMobile(false)}
                  className="block w-full rounded-xl bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
                >
                  Solicitar cotización
                </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
)}
    </header>
  );
}
