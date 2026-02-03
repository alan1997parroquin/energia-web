"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicio: "consultoria" | "fotovoltaico" | "capacitacion" | "otro";
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  servicio: "consultoria",
  mensaje: "",
};

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  // ⚠️ Ajusta estos 2 cuando tengas los datos reales:
  const WHATSAPP_NUMBER = "521XXXXXXXXXX"; // formato: 521 + número (sin +, sin espacios)
  const EMAIL_TO = "contacto@energia-mexico.com";

  const whatsappText = useMemo(() => {
    const serviceLabel =
      form.servicio === "consultoria"
        ? "Consultoría y Gestoría"
        : form.servicio === "fotovoltaico"
        ? "Integrador Fotovoltaico"
        : form.servicio === "capacitacion"
        ? "Capacitación"
        : "Otro";

    return encodeURIComponent(
      `Hola, soy ${form.nombre || "(Nombre)"}.\n` +
        `Quiero información sobre: ${serviceLabel}.\n` +
        `Empresa: ${form.empresa || "(Empresa)"}\n` +
        `Teléfono: ${form.telefono || "(Teléfono)"}\n` +
        `Correo: ${form.email || "(Correo)"}\n\n` +
        `Mensaje:\n${form.mensaje || "(Escribe aquí tu necesidad)"}`
    );
  }, [form]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder: por ahora simulamos envío
    // En el siguiente paso lo conectamos a: Formspree / Resend / Nodemailer / API route
    setSent(true);
    setTimeout(() => setSent(false), 3500);

    // Opcional: reset
    // setForm(initial);
  };

  return (
    <main className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D5E0DA]/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#0E482A]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#583F66]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0E482A]">Contacto</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Agenda un diagnóstico energético
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Cuéntanos tu situación y te damos una ruta clara: oportunidades de ahorro,
            cumplimiento regulatorio y/o viabilidad fotovoltaica.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Formulario</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Responderemos lo antes posible con los siguientes pasos.
                  </p>
                </div>

                {sent && (
                  <div className="rounded-2xl border border-[#0E482A]/20 bg-[#D5E0DA]/40 px-4 py-2 text-sm font-semibold text-[#0E482A]">
                    ✅ Mensaje listo (placeholder)
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-sm font-semibold text-gray-900">Nombre</label>
                  <input
                    value={form.nombre}
                    onChange={(e) => handleChange("nombre", e.target.value)}
                    required
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0E482A]/60"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-sm font-semibold text-gray-900">Empresa</label>
                  <input
                    value={form.empresa}
                    onChange={(e) => handleChange("empresa", e.target.value)}
                    placeholder="Nombre de la empresa"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0E482A]/60"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-sm font-semibold text-gray-900">Correo</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    placeholder="correo@empresa.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0E482A]/60"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-sm font-semibold text-gray-900">Teléfono</label>
                  <input
                    value={form.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                    placeholder="+52 ..."
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0E482A]/60"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-gray-900">¿Qué necesitas?</label>
                  <select
                    value={form.servicio}
                    onChange={(e) => handleChange("servicio", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0E482A]/60"
                  >
                    <option value="consultoria">Consultoría y gestoría</option>
                    <option value="fotovoltaico">Integrador fotovoltaico</option>
                    <option value="capacitacion">Capacitación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-gray-900">Mensaje</label>
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => handleChange("mensaje", e.target.value)}
                    rows={5}
                    placeholder="Cuéntanos brevemente tu situación: recibos, tarifa, consumo, objetivo, proyecto FV, capacitación, etc."
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#0E482A]/60"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0E482A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                  >
                    Enviar
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
                  >
                    Enviar por WhatsApp
                  </a>
                </div>

                <p className="sm:col-span-2 text-xs text-gray-500">
                  Al enviar aceptas nuestro{" "}
                  <Link href="/aviso-de-privacidad" className="underline hover:text-[#0E482A]">
                    aviso de privacidad
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-gray-900">Canales directos</p>

              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500">Email</p>
                  <p className="mt-1 font-semibold text-gray-900">{EMAIL_TO}</p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500">WhatsApp</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    +52 (pendiente)
                  </p>
                  <a
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#0E482A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir WhatsApp
                  </a>
                </div>

                <div className="rounded-2xl bg-[#D5E0DA]/40 p-4">
                  <p className="text-xs font-semibold text-gray-500">Horario</p>
                  <p className="mt-1 font-semibold text-gray-900">Lunes a Viernes</p>
                  <p className="text-sm text-gray-700">9:00 a.m. – 6:00 p.m.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-gray-900">
                ¿Qué necesitamos para empezar?
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#0E482A]" />
                  Últimos recibos (si los tienes)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#583F66]" />
                  Objetivo: ahorro, FV, cumplimiento o capacitación
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#7D968B]" />
                  Datos básicos de operación (horarios, cargas, etc.)
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
