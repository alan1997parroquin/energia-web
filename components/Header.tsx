"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type MenuItem = { label: string; href: string; desc?: string };
type MenuGroup = { title: string; items: MenuItem[] };
type MegaMenu = { label: string; href: string; groups: MenuGroup[] };

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

function makeServiceHref(section: string, group: string, item?: string) {
  const s = slugify(section);
  const g = slugify(group);
  if (!item) return `/${s}#${g}`;
  return `/${s}/${g}/${slugify(item)}`;
}

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  // Desktop dropdown state (solo Servicios)
  const [openDesktopMenu, setOpenDesktopMenu] = useState<null | "servicios">(null);
  const closeTimer = useRef<number | null>(null);

  // Refs para cerrar al click afuera
  const desktopWrapRef = useRef<HTMLDivElement | null>(null);

  const serviciosMega: MegaMenu = useMemo(() => {
    const consultoria = [
      "Prefactibilidad para conexión",
      "Análisis de mercadoo Eléctrico Mayorista",
      "Investigación especifica",
      "Análisis de contrato de cobertura eléctrica",
      "Análisis de consumo",
      "Asesoria de Migración a MEM",
      "Modelos financieros para proyectos de Energía",
      "Diseño de microgrids",
      "Diseño de proyectos de transición energética",
      "Prospección de precios de energía",
      "Simulación de despacho a corto -mediano",
      "Apertura de mercado",
    ];

    const gestoria = ["CFE Baja testion y media", "CENACE y CFE > 1MW"];

    const integradorFV = [
      "Estudio de viabilidad",
      "Diseño de solución",
      "Ingenieria detallada",
      "Suministro de instalación",
      "Pruebas",
      "Mantenimiento Preventivo y correctivo",
      "Financiamiento",
      "Gestoria de CFE",
    ];

    const capacitaciones = [
      "MEM",
      "Analisis de riesgos y oportunidades",
      "Modelo de despacho en Calliope",
      "Cursos de preparación para certificaciones",
      "Analisis de datos MEM",
    ];

    return {
      label: "Servicios",
      href: "/servicios",
      groups: [
        {
          title: "Consultoría",
          items: consultoria.map((label) => ({
            label,
            href: makeServiceHref("servicios", "consultoria", label),
          })),
        },
        {
          title: "Gestoría",
          items: gestoria.map((label) => ({
            label,
            href: makeServiceHref("servicios", "gestoria", label),
          })),
        },
        {
          title: "Integrador Fotovoltaico",
          items: integradorFV.map((label) => ({
            label,
            href: makeServiceHref("servicios", "integrador-fotovoltaico", label),
          })),
        },
        {
          title: "Capacitaciones",
          items: capacitaciones.map((label) => ({
            label,
            href: makeServiceHref("servicios", "capacitaciones", label),
          })),
        },
      ],
    };
  }, []);

  // Escape para cerrar
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMobile(false);
        setOpenDesktopMenu(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll en mobile drawer
  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  // Click afuera para cerrar dropdown desktop
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!openDesktopMenu) return;
      const el = desktopWrapRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpenDesktopMenu(null);
    }
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [openDesktopMenu]);

  function safeCloseDesktopSoon() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDesktopMenu(null), 140);
  }

  function safeOpenDesktop(menu: "servicios") {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenDesktopMenu(menu);
  }

  // Mobile accordion states
  const [mServicios, setMServicios] = useState(false);
  const [mServiciosOpenGroup, setMServiciosOpenGroup] = useState<string | null>(null);

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

        {/* Desktop Nav */}
        <div className="hidden items-center gap-4 md:flex">
          <nav
            ref={desktopWrapRef}
            className="relative flex items-center gap-6 text-sm font-medium text-ink-muted"
          >
            {/* Servicios (Mega Menu) */}
            <div
              className="relative"
              onMouseEnter={() => safeOpenDesktop("servicios")}
              onMouseLeave={() => safeCloseDesktopSoon()}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenDesktopMenu((v) => (v === "servicios" ? null : "servicios"))
                }
                onFocus={() => safeOpenDesktop("servicios")}
                aria-haspopup="menu"
                aria-expanded={openDesktopMenu === "servicios"}
                className="inline-flex items-center gap-2 transition hover:text-ink"
              >
                {serviciosMega.label}
                <span className="text-xs">▾</span>
              </button>

              {openDesktopMenu === "servicios" && (
                <div
                  role="menu"
                  className="fixed left-1/2 top-[72px] w-[min(1280px,96vw)] -translate-x-1/2 rounded-2xl border border-surface-border bg-white p-6 shadow-xl"
                  onMouseEnter={() => safeOpenDesktop("servicios")}
                  onMouseLeave={() => safeCloseDesktopSoon()}
                >
                  {/* Header del mega menú */}
                  <div className="mb-4 flex items-center justify-between">
                    <Link
                      href={serviciosMega.href}
                      className="text-sm font-semibold text-ink hover:underline"
                      onClick={() => setOpenDesktopMenu(null)}
                    >
                      Ver todos los servicios →
                    </Link>

                    <button
                      type="button"
                      onClick={() => setOpenDesktopMenu(null)}
                      className="rounded-xl border border-surface-border px-3 py-1.5 text-xs font-semibold text-ink hover:bg-surface-soft"
                      aria-label="Cerrar menú"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Contenido (con scroll si crece) */}
                  <div className="max-h-[70vh] overflow-auto pr-2">
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                      {serviciosMega.groups.map((group) => (
                        <div key={group.title} className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                            {group.title}
                          </p>

                          <ul className="mt-3 space-y-2">
                            {group.items.map((it) => (
                              <li key={it.label} className="min-w-0">
                                <Link
                                  href={it.href}
                                  onClick={() => setOpenDesktopMenu(null)}
                                  className="block rounded-xl px-2 py-2 text-sm font-medium text-ink hover:bg-surface-soft whitespace-normal break-words"
                                >
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quiénes somos */}
            <Link href="/nosotros" className="transition hover:text-ink">
              Quiénes somos
            </Link>

            {/* Contacto */}
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
          {/* Overlay */}
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpenMobile(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
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
                className="rounded-xl border border-surface-border px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
              >
                ✕
              </button>
            </div>

            <nav className="px-6 py-4">
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

                {/* Servicios (accordion) */}
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
                      <Link
                        href="/servicios"
                        onClick={() => setOpenMobile(false)}
                        className="mb-2 block rounded-xl px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-soft"
                      >
                        Ver todos los servicios →
                      </Link>

                      <div className="space-y-2">
                        {serviciosMega.groups.map((group) => {
                          const isOpen = mServiciosOpenGroup === group.title;
                          return (
                            <div key={group.title} className="rounded-xl bg-surface-soft/40">
                              <button
                                type="button"
                                onClick={() =>
                                  setMServiciosOpenGroup((v) =>
                                    v === group.title ? null : group.title
                                  )
                                }
                                className="flex w-full items-center justify-between px-3 py-2 text-sm font-semibold text-ink"
                                aria-expanded={isOpen}
                              >
                                <span>{group.title}</span>
                                <span className="text-sm">{isOpen ? "–" : "+"}</span>
                              </button>

                              {isOpen && (
                                <ul className="space-y-1 pb-2">
                                  {group.items.map((it) => (
                                    <li key={it.label}>
                                      <Link
                                        href={it.href}
                                        onClick={() => setOpenMobile(false)}
                                        className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface-soft whitespace-normal break-words"
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
                    </div>
                  )}
                </li>

                {/* Quiénes somos */}
                <li>
                  <Link
                    href="/nosotros"
                    onClick={() => setOpenMobile(false)}
                    className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-surface-soft"
                  >
                    Quiénes somos
                  </Link>
                </li>

                {/* Contacto */}
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
