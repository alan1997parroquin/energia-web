"use client";

import { useMemo, useRef, useState } from "react";
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

  // Micro-form (dinámico por servicio)
  foco: string[]; // chips: qué busca / qué trámite / qué tema
  datos: string[]; // checks: qué tiene a la mano
  urgencia: Urgencia;

  mensaje: string; // opcional
  aceptaPrivacidad: boolean;
};

const initial: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  servicio: "",
  foco: [],
  datos: [],
  urgencia: "",
  mensaje: "",
  aceptaPrivacidad: false,
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function toggleInArray(arr: string[], value: string) {
  return arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-full border px-3 py-2 text-sm font-semibold transition",
        active
          ? "border-brand-blue/30 bg-brand-blue-soft/60 text-brand-blue"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
      )}
    >
      {label}
    </button>
  );
}

function CheckPill({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      className={cx(
        "flex cursor-pointer items-center gap-2 rounded-2xl border px-3 py-2 text-sm transition",
        checked
          ? "border-brand-green/25 bg-brand-green-soft/60"
          : "border-slate-200 bg-white hover:bg-slate-50"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="h-4 w-4 rounded border-slate-300"
      />
      <span className="text-slate-800">{label}</span>
    </label>
  );
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Éxito final (pantalla de confirmación)
  const [submittedOk, setSubmittedOk] = useState(false);

  // ✅ ref para autoscroll (opción 2)
  const cardRef = useRef<HTMLDivElement | null>(null);

  // ✅ Tu endpoint real de Formspree (pruebas)
  const FORM_ENDPOINT = "https://formspree.io/f/mbdaarno";

  // ⚠️ Ajusta cuando tengas los datos reales
  const WHATSAPP_NUMBER = "5215575007413";
  const EMAIL_TO = "alan.parroquin@energia-mexico.com";

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

  // Opciones micro-form por servicio
  const micro = useMemo(() => {
    const base = {
      focoTitle: "¿Qué buscas?",
      foco: [
        "Reducir costo",
        "Revisar contrato/tarifa",
        "Variación en recibos",
        "Optimizar demanda",
        "Evaluar suministro/MEM",
        "No sé / necesito guía",
      ],
      datosTitle: "¿Qué tienes a la mano?",
      datos: [
        "Recibos (3–6 meses)",
        "Tarifa/contrato",
        "Demanda (kW)",
        "Consumo (kWh)",
        "Medición/intervalos",
        "No tengo datos",
      ],
    };

    if (form.servicio === "gestoria") {
      return {
        focoTitle: "¿Qué trámite necesitas?",
        foco: [
          "Interconexión",
          "Cambio de contrato",
          "Regularización",
          "Cumplimiento / UVIE",
          "Permisos / gestión",
          "No sé / necesito guía",
        ],
        datosTitle: "¿Qué tienes a la mano?",
        datos: [
          "Número de servicio",
          "Documentos del sitio",
          "Planos/diagrama",
          "Trámite iniciado",
          "Ubicación del sitio",
          "No tengo datos",
        ],
      };
    }

    if (form.servicio === "fotovoltaico") {
      return {
        focoTitle: "¿Cuál es tu objetivo?",
        foco: [
          "Ahorro en recibo",
          "Autoconsumo",
          "Reducir demanda",
          "Evaluación/ROI",
          "ESG / Sustentabilidad",
          "No sé / necesito guía",
        ],
        datosTitle: "¿Qué tienes a la mano?",
        datos: [
          "Recibo con consumo (kWh)",
          "Fotos del techo",
          "Ubicación del sitio",
          "Horario de operación",
          "Espacio disponible",
          "No tengo datos",
        ],
      };
    }

    if (form.servicio === "capacitacion") {
      return {
        focoTitle: "¿Qué tema te interesa?",
        foco: [
          "MEM básico",
          "Precios/nodos/zonas",
          "Datos del mercado",
          "Riesgos y estrategia",
          "Taller para equipo",
          "No sé / necesito guía",
        ],
        datosTitle: "¿Qué necesitas definir?",
        datos: [
          "Online",
          "Presencial",
          "Híbrido",
          "1–5 personas",
          "6–15",
          "16–30",
          "30+",
          "No lo sé aún",
        ],
      };
    }

    if (form.servicio === "otro") {
      return {
        focoTitle: "¿En qué te podemos ayudar?",
        foco: [
          "Diagnóstico general",
          "Ahorro/costos",
          "Trámites",
          "Fotovoltaico",
          "Capacitación",
          "No sé / necesito guía",
        ],
        datosTitle: "¿Qué tienes a la mano?",
        datos: ["Recibos", "Contrato", "Ubicación", "Fotos", "Nada por ahora"],
      };
    }

    return base;
  }, [form.servicio]);

  // ✅ Requisito: correo o teléfono
  const hasEmail = form.email.trim().length > 0;

  // Step 1
  const canNextStep1 = form.nombre.trim().length > 0 && hasEmail && form.servicio !== "";

  // Step 2: mínimo 1 foco + urgencia
  const canNextStep2 = form.foco.length >= 1 && form.urgencia !== "";

  const canSubmit = canNextStep1 && canNextStep2 && form.aceptaPrivacidad && !sending;

  const whatsappText = useMemo(() => {
    const focoTxt = form.foco.length ? `• ${form.foco.join("\n• ")}` : "(Sin selección)";
    const datosTxt = form.datos.length ? `• ${form.datos.join("\n• ")}` : "(Sin selección)";
    return encodeURIComponent(
      `Hola, soy ${form.nombre || "(Nombre)"}.\n` +
        `Servicio: ${serviceLabel}\n` +
        `Empresa: ${form.empresa || "(Empresa)"}\n` +
        `Contacto: ${form.email || "(Correo)"}${form.telefono ? ` / ${form.telefono}` : ""}\n\n` +
        `${micro.focoTitle}:\n${focoTxt}\n\n` +
        `${micro.datosTitle}:\n${datosTxt}\n\n` +
        `Urgencia: ${form.urgencia ? urgencyLabel : "(Urgencia)"}\n\n` +
        `Mensaje:\n${form.mensaje || "(Opcional)"}`
    );
  }, [form, serviceLabel, urgencyLabel, micro]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  // Reset micro selecciones al cambiar servicio (para que no se mezclen)
  const onServiceChange = (value: Servicio) => {
    setSubmittedOk(false);
    setForm((prev) => ({
      ...prev,
      servicio: value,
      foco: [],
      datos: [],
      urgencia: "",
    }));
  };

  const scrollToCard = () => {
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // ✅ Envío a Formspree usando FormData (más compatible)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      const fd = new FormData();
      fd.append("nombre", form.nombre);
      fd.append("empresa", form.empresa);
      fd.append("email", form.email);
      fd.append("telefono", form.telefono);
      fd.append("servicio", serviceLabel);
      fd.append("foco", form.foco.join(" | "));
      fd.append("datos", form.datos.join(" | "));
      fd.append("urgencia", form.urgencia ? urgencyLabel : "");
      fd.append("mensaje", form.mensaje);
      fd.append("_subject", `Nuevo contacto: ${serviceLabel} — ${form.empresa || form.nombre}`);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "No se pudo enviar el formulario. Intenta de nuevo.");
      }

      // ✅ éxito: pantalla final + autoscroll
      setSubmittedOk(true);
      setSent(true);
      setStep(3);
      scrollToCard();

      setTimeout(() => setSent(false), 4500);
    } catch (err: any) {
      setError(err?.message || "Ocurrió un error al enviar. Intenta de nuevo.");
      scrollToCard();
    } finally {
      setSending(false);
    }
  };

  const resetAll = () => {
    setSubmittedOk(false);
    setSent(false);
    setError(null);
    setSending(false);
    setForm(initial);
    setStep(1);
    scrollToCard();
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white">
      {/* background (igual al de servicios) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-blue">Contacto</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Agenda un diagnóstico energético
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Este es un primer acercamiento. Con 1 minuto de información te decimos el mejor siguiente paso.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div
              ref={cardRef}
              className="rounded-3xl border border-brand-blue/15 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Formulario rápido</h2>
                  <p className="mt-1 text-sm text-slate-600">Paso {step} de 3. Lo esencial para iniciar.</p>
                </div>

                {sent && (
                  <div className="rounded-2xl border border-brand-green/20 bg-brand-green-soft/60 px-4 py-2 text-sm font-semibold text-brand-green-dark">
                    ✅ Enviado
                  </div>
                )}
              </div>

              {error && (
                <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6">
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Nombre completo</label>
                      <input
                        value={form.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        required
                        placeholder="Ej. Juan Pérez"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Empresa</label>
                      <input
                        value={form.empresa}
                        onChange={(e) => handleChange("empresa", e.target.value)}
                        placeholder="Nombre de la empresa (opcional)"
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="text-sm font-semibold text-slate-900">Correo </label>
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
                      <label className="text-sm font-semibold text-slate-900">Teléfono (opcional)</label>
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
                        onChange={(e) => onServiceChange(e.target.value as Servicio)}
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

                    <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => {
                          setStep(2);
                          scrollToCard();
                        }}
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

                    <p className="sm:col-span-2 text-xs text-slate-500">
                      Este formulario es un primer acercamiento. Luego afinamos con datos más específicos.
                    </p>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="grid gap-6">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{micro.focoTitle}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {micro.foco.map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            active={form.foco.includes(item)}
                            onClick={() => handleChange("foco", toggleInArray(form.foco, item))}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-slate-500">Elige al menos 1 opción (rápido).</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">{micro.datosTitle}</p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {micro.datos.map((item) => (
                          <CheckPill
                            key={item}
                            label={item}
                            checked={form.datos.includes(item)}
                            onToggle={() => handleChange("datos", toggleInArray(form.datos, item))}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        Opcional. Selecciona lo que tengas (o “No tengo datos”).
                      </p>
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
                        onClick={() => {
                          setStep(1);
                          scrollToCard();
                        }}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        Atrás
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setStep(3);
                          scrollToCard();
                        }}
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
                    {submittedOk ? (
                      <div className="rounded-3xl border border-brand-green/25 bg-brand-green-soft/60 p-6">
                        <p className="text-sm font-semibold text-brand-green-dark">✅ Enviado</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                          ¡Listo! Recibimos tu solicitud
                        </h3>
                        <p className="mt-2 text-sm text-slate-700">
                          Te contactaremos en menos de <b>24 horas hábiles</b>. Si lo necesitas más rápido,
                          escríbenos por WhatsApp.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-dark"
                          >
                            Abrir WhatsApp
                          </a>

                          <button
                            type="button"
                            onClick={resetAll}
                            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                          >
                            Enviar otro
                          </button>
                        </div>

                        <div className="mt-6 rounded-2xl bg-white/70 p-4">
                          <p className="text-sm font-semibold text-slate-900">Siguientes pasos</p>
                          <ul className="mt-2 space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-brand-green" />
                              Revisamos tu información.
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue" />
                              Te contactamos para 10–15 min y aclarar dudas.
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                              Te proponemos una ruta inicial con opciones.
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm font-semibold text-slate-900">Resumen rápido</p>

                          <div className="mt-3 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
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
                              <span className="text-xs font-semibold text-slate-500">{micro.focoTitle}</span>
                              <p className="text-slate-800">
                                {form.foco.length ? form.foco.join(", ") : "—"}
                              </p>
                            </div>

                            <div className="sm:col-span-2">
                              <span className="text-xs font-semibold text-slate-500">{micro.datosTitle}</span>
                              <p className="text-slate-800">
                                {form.datos.length ? form.datos.join(", ") : "—"}
                              </p>
                            </div>

                            <div className="sm:col-span-2 mt-2">
                              <label className="text-xs font-semibold text-slate-500">Mensaje (opcional)</label>
                              <textarea
                                value={form.mensaje}
                                onChange={(e) => handleChange("mensaje", e.target.value)}
                                rows={4}
                                placeholder="Algo extra que debamos saber (opcional)."
                                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                              />
                            </div>
                          </div>
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
                            <Link href="/aviso-de-privacidad" className="underline hover:text-brand-blue">
                              aviso de privacidad
                            </Link>
                            .
                          </span>
                        </label>

                        <div className="flex flex-col gap-3 sm:flex-row">
                          <button
                            type="button"
                            onClick={() => {
                              setStep(2);
                              scrollToCard();
                            }}
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
                      </>
                    )}
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
              <p className="text-sm font-semibold text-slate-900">Tip</p>
              <p className="mt-3 text-sm text-slate-700">
                Si no tienes datos, marca “No tengo datos” y “No sé / necesito guía”. Con eso nos basta para
                agendar una llamada corta.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
