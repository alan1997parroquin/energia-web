"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-soft border border-brand-green/15">
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
            <p className="font-bold text-slate-900">Energía México</p>
            <p className="text-xs text-slate-600">
              Consultoría • FV • Capacitación
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="rounded-xl bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-green-dark hover:shadow-lg"
          >
            Cotiza ahora
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contacto"
            className="rounded-xl bg-brand-green px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-green-dark"
          >
            Cotiza
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="rounded-xl border border-brand-blue/20 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-brand-blue-soft"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/45"
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-soft border border-brand-green/15">
                  <Image
                    src="/branding/energia-mexico-logo.png"
                    alt="Energía México"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
                <div className="leading-tight">
                  <p className="font-semibold text-slate-900">Menú</p>
                  <p className="text-xs text-slate-600">Energía México</p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                ✕
              </button>
            </div>

            <nav className="px-6 py-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-semibold text-slate-900 transition hover:bg-brand-blue-soft"
                  >
                    Inicio
                  </Link>
                </li>

                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 font-semibold text-slate-900 transition hover:bg-brand-blue-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-brand-green-dark"
                >
                  Solicitar cotización
                </Link>

                <a
                  href="https://wa.me/5215578403155?text=Hola%20me%20interesa%20una%20asesor%C3%ADa%20con%20Energ%C3%ADa%20M%C3%A9xico"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Agendar llamada
                </a>
              </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 px-6 py-4">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Energía México
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
