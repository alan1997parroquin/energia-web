"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Servicio =
  | ""
  | "consultoria"
  | "gestoria"
  | "fotovoltaico"
  | "capacitacion"
  | "otro";

type Urgencia = "" | "inmediata" | "este_mes" | "trimestre" | "solo_info";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;

  servicio: Servicio;
  objetivo: string;
  situacion: string;
  datos: string;
  urgencia: Urgencia;

  mensaje: string;
  aceptaPrivacidad: boolean;
};

const initial: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",

  servicio: "",
  objetivo: "",
  situacion: "",
  datos: "",
  urgencia: "",

  mensaje: "",
  aceptaPrivacidad: false,
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ⚠️ Pega tu endpoint real aquí
  const FORM_ENDPOINT = "https://formspree.io/f/XXXXYYYY";

  // ⚠️ Ajusta estos 2 cuando tengas los datos reales:
  const WHATSAPP_NUMBER = "5215575007413";
  const EMAIL_TO = "tomas@energia-mexico.com";

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  // ✅ Tipado seguro
  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const serviceLabel = useMemo(() => {
    return form.servicio === "consultoria"
      ? "Consultoría"
      : form.servicio === "gestoria"
      ? "Gestoría"
      : form.servicio === "fotovoltaico"
      ? "Integrador Fotovoltaico"
      : form.servicio === "capacitacion"
      ? "Capacitación"
      : form.servicio === "otro"
      ? "Otro"
      : "(Servicio)";
  }, [form.servicio]);

  const urgencyLabel = useMemo(() => {
    return form.urgencia === "inmediata"
      ? "Inmediata (0–2 semanas)"
      : form.urgencia === "este_mes"
      ? "Este mes"
      : form.urgencia === "trimestre"
      ? "Este trimestre"
      : form.urgencia === "solo_info"
      ? "Solo información"
      : "(Urgencia)";
  }, [form.urgencia]);

  const whatsappText = useMemo(() => {
    return encodeURIComponent(
      `Hola, soy ${form.nombre || "(Nombre)"}.\n` +
        `Quiero información sobre: ${serviceLabel}.\n` +
        `Empresa: ${form.empresa || "(Empresa)"}\n` +
        `Teléfono: ${form.telefono || "(Teléfono)"}\n` +
        `Correo: ${form.email || "(Correo)"}\n\n` +
        `Objetivo:\n${form.objetivo || "(¿Qué quieres lograr?)"}\n\n` +
        `Situación actual:\n${form.situacion || "(Contexto)"}\n\n` +
        `Datos disponibles:\n${form.datos || "(Recibos, demanda, contrato, etc.)"}\n\n` +
        `Urgencia: ${form.urgencia ? urgencyLabel : "(Urgencia)"}\n\n` +
        `Detalles extra:\n${form.mensaje || "(Mensaje)"}`
    );
  }, [form, serviceLabel, urgencyLabel]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  const canNextStep1 =
    form.nombre.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.servicio !== "" &&
    form.objetivo.trim().length >= 10;

  const canNextStep2 =
    form.situacion.trim().length >= 20 &&
    form.datos.trim().length >= 10 &&
    form.urgencia !== "";

  const canSubmit = canNextStep1 && canNextStep2 && form.aceptaPrivacidad && !sending;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const payload = {
        nombre: form.nombre,
        empresa: form.empresa,
        email: form.email,
        telefono: form.telefono,
        servicio: serviceLabel,
        objetivo: form.objetivo,
        situacion: form.situacion,
        datos: form.datos,
        urgencia: form.urgencia ? urgencyLabel : "",
        mensaje: form.mensaje,
        _subject: `Nuevo contacto: ${serviceLabel} — ${form.empresa || form.nombre}`,
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "No se pudo enviar el formulario. Intenta de nuevo.");
      }

      setSent(true);
      setTimeout(() => setSent(false), 4000);

      // Opcional: limpiar todo
      // setForm(initial);
      // setStep(1);
    } catch (err: any) {
      setError(err?.message || "Ocurrió un error al enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    // ✅ Forzamos base blanca + min-h para eliminar “gris” heredado
    <main className="relative isolate min-h-screen overflow-hidden bg-white">
      {/* ✅ Base blanca por si algún parent mete gris */}
      <div className="absolute inset-0 -z-20 bg-white" />

      {/* background (igual al de servicios) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-blue">Contacto</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Agenda un diagnóstico energético
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Te guiamos paso a paso para entender tu necesidad y darte una ruta clara: ahorro,
            cumplimiento regulatorio y/o viabilidad fotovoltaica.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Formulario guiado</h2>
                  <p className="mt-1 text-sm text-slate-600">
                  Responderemos con los siguientes pasos y una propuesta de ruta.
                  </p>
                </div>

                {sent && (
                  <div className="rounded-2xl border border-brand-green/20 bg-brand-green-soft/60 px-4 py-2 text-sm font-semibold text-brand-green-dark">
                    ✅ Enviado correctamente
                  </div>
                )}
              </div>

              {error && (
                <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Paso {step} de 3</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-brand-blue transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className={cx(
                      "rounded-xl px-3 py-2 text-left transition",
                      step === 1
                        ? "bg-brand-blue-soft/60 font-semibold text-brand-blue"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    1) Datos
                  </button>

                  <button
                    type="button"
                    onClick={() => (canNextStep1 ? setStep(2) : null)}
                    className={cx(
                      "rounded-xl px-3 py-2 text-left transition",
                      step === 2
                        ? "bg-brand-blue-soft/60 font-semibold text-brand-blue"
                        : canNextStep1
                        ? "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        : "bg-slate-50 text-slate-400 cursor-not-allowed"
                    )}
                  >
                    2) Contexto
                  </button>

                  <button
                    type="button"
                    onClick={() => (canNextStep1 && canNextStep2 ? setStep(3) : null)}
                    className={cx(
                      "rounded-xl px-3 py-2 text-left transition",
                      step === 3
                        ? "bg-brand-blue-soft/60 font-semibold text-brand-blue"
                        : canNextStep1 && canNextStep2
                        ? "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        : "bg-slate-50 text-slate-400 cursor-not-allowed"
                    )}
                  >
                    3) Enviar
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6">
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Nombre Completo</label>
                      <input
                        value={form.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        required
                        placeholder="Tu nombre"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Empresa</label>
                      <input
                        value={form.empresa}
                        onChange={(e) => handleChange("empresa", e.target.value)}
                        placeholder="Nombre de la empresa"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Correo</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="correo@empresa.com"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Teléfono</label>
                      <input
                        value={form.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        placeholder="+52 ..."
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-slate-900">¿Qué necesitas?</label>
                      <select
                        value={form.servicio}
                        onChange={(e) => handleChange("servicio", e.target.value as Servicio)}
                        required
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      >
                        <option value="" disabled>
                          Selecciona un servicio
                        </option>
                        <option value="consultoria">Consultoría</option>
                        <option value="gestoria">Gestoría</option>
                        <option value="fotovoltaico">Integrador fotovoltaico</option>
                        <option value="capacitacion">Capacitación</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-slate-900">
                        ¿Qué quieres lograr?
                      </label>
                      <textarea
                        value={form.objetivo}
                        onChange={(e) => handleChange("objetivo", e.target.value)}
                        rows={3}
                        placeholder="Ej: reducir costo de energía, revisar contrato/tarifa, viabilidad FV, cumplimiento, entender el MEM, etc."
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                      <p className="mt-2 text-xs text-slate-500">
                        Tip: entre más específico, más rápido te damos una ruta clara.
                      </p>
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!canNextStep1}
                        className={cx(
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition",
                          canNextStep1
                            ? "bg-brand-green text-white hover:bg-brand-green-dark"
                            : "bg-slate-200 text-slate-500 cursor-not-allowed"
                        )}
                      >
                        Siguiente
                      </button>

                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        Enviar por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="grid gap-5">
                    <div>
                      <label className="text-sm font-semibold text-slate-900">Situación actual</label>
                      <textarea
                        value={form.situacion}
                        onChange={(e) => handleChange("situacion", e.target.value)}
                        rows={5}
                        placeholder="Cuéntanos el contexto: tarifa, dolor principal, qué ha pasado, qué te preocupa, qué decisión necesitas tomar."
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                      <p className="mt-2 text-xs text-slate-500">
                        Ej: “Tengo variación fuerte en facturas”, “quiero migrar suministro”, “necesito interconexión”, etc.
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-900">¿Qué datos tienes?</label>
                      <textarea
                        value={form.datos}
                        onChange={(e) => handleChange("datos", e.target.value)}
                        rows={4}
                        placeholder="Ej: últimos recibos, demanda (kW), consumo (kWh), contrato, horario de operación, ubicación, fotos de techo, etc."
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-900">Urgencia</label>
                      <select
                        value={form.urgencia}
                        onChange={(e) => handleChange("urgencia", e.target.value as Urgencia)}
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="inmediata">Inmediata (0–2 semanas)</option>
                        <option value="este_mes">Este mes</option>
                        <option value="trimestre">Este trimestre</option>
                        <option value="solo_info">Solo información</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        Atrás
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!canNextStep2}
                        className={cx(
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition",
                          canNextStep2
                            ? "bg-brand-green text-white hover:bg-brand-green-dark"
                            : "bg-slate-200 text-slate-500 cursor-not-allowed"
                        )}
                      >
                        Siguiente
                      </button>

                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        Enviar por WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="grid gap-5">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Resumen</p>
                      <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                        <div>
                          <span className="text-xs font-semibold text-slate-500">Servicio</span>
                          <p className="font-semibold text-slate-900">{serviceLabel}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-slate-500">Urgencia</span>
                          <p className="font-semibold text-slate-900">
                            {form.urgencia ? urgencyLabel : "—"}
                          </p>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-xs font-semibold text-slate-500">Objetivo</span>
                          <p className="text-slate-800">{form.objetivo || "—"}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-900">
                        Detalles extra (opcional)
                      </label>
                      <textarea
                        value={form.mensaje}
                        onChange={(e) => handleChange("mensaje", e.target.value)}
                        rows={5}
                        placeholder="Cualquier detalle que no quieras olvidar: fechas, restricciones, presupuesto, proveedores, etc."
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                      <input
                        type="checkbox"
                        checked={form.aceptaPrivacidad}
                        onChange={(e) => handleChange("aceptaPrivacidad", e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">
                        Acepto el{" "}
                        <Link
                          href="/aviso-de-privacidad"
                          className="underline hover:text-brand-blue"
                        >
                          aviso de privacidad
                        </Link>
                        .
                      </span>
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        Atrás
                      </button>

                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className={cx(
                          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition",
                          !canSubmit
                            ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                            : "bg-brand-green text-white hover:bg-brand-green-dark"
                        )}
                      >
                        {sending ? "Enviando..." : "Enviar"}
                      </button>

                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        Enviar por WhatsApp
                      </a>
                    </div>

                    <p className="text-xs text-slate-500">
                      En esta versión, “Enviar” ya manda a Formspree (cuando pegues tu endpoint).
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Canales directos</p>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">Email</p>
                  <p className="mt-1 font-semibold text-slate-900">{EMAIL_TO}</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-500">WhatsApp</p>
                  <p className="mt-1 font-semibold text-slate-900">+52 (5575007413)</p>
                  <a
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir WhatsApp
                  </a>
                </div>

                <div className="rounded-2xl bg-brand-blue-soft/60 p-4">
                  <p className="text-xs font-semibold text-slate-500">Horario</p>
                  <p className="mt-1 font-semibold text-slate-900">Lunes a Viernes</p>
                  <p className="text-sm text-slate-700">9:00 a.m. – 6:00 p.m.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">
                ¿Qué necesitamos para empezar?
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-green" />
                  Últimos recibos (si los tienes)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-blue" />
                  Objetivo: ahorro, FV, cumplimiento o capacitación
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-400" />
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
