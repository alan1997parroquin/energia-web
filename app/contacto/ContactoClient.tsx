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
type SendMethod = "form" | "whatsapp";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  servicio: Servicio;
  foco: string[];
  datos: string[];
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

export default function ContactoClient() {
  const [emailError, setEmailError] = useState("");
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const NO_DOCUMENTS_OPTION = "No tengo datos";
  const NEED_GUIDE_OPTION = "No sé / necesito guía";

  const EXCLUSIVE_DATA_OPTIONS = [
    "No tengo datos",
    "No lo sé aún",
    "Nada por ahora",
  ];
  const [form, setForm] = useState<FormState>(initial);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedOk, setSubmittedOk] = useState(false);
  const [sendMethod, setSendMethod] = useState<SendMethod>("form");

  const cardRef = useRef<HTMLDivElement | null>(null);

  const FORM_ENDPOINT = "https://formspree.io/f/mbdaarno";
  const WHATSAPP_NUMBER = "525644671599";
  const WHATSAPP_VISIBLE = "+52 56 4467 1599";
  const EMAIL_TO = "ventas@energia-mexico.com";


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

  
  const emailTrimmed = form.email.trim();
  const hasValidEmail = isValidEmail(emailTrimmed);

  const canNextStep1 =
    form.nombre.trim().length > 0 &&
    hasValidEmail &&
    form.servicio !== "";
  const canNextStep2 = form.foco.length >= 1 && form.urgencia !== "";
  const canSend = canNextStep1 && canNextStep2 && form.aceptaPrivacidad;
  const canSubmit = canSend && !sending;
  const canSendWhatsapp = canSend;

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

  const handleWhatsappSend = () => {
    if (!canSendWhatsapp) return;

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

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
      setSendMethod("form");
      setForm(initial);
      setStep(1);
      scrollToCard();
    };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white">
      

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-green">Contacto</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Agenda un diagnóstico energético
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Compártenos lo esencial y te indicamos la ruta inicial más conveniente para tu
            proyecto.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
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
                      <label className="text-sm font-semibold text-slate-900">Correo</label>
                      <input
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            const value = e.target.value;
                            handleChange("email", value);

                            if (value.trim() && !isValidEmail(value.trim())) {
                              setEmailError("Ingresa un correo electrónico válido.");
                            } else {
                              setEmailError("");
                            }
                          }}
                          required
                          placeholder="correo@empresa.com"
                          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-blue/60"
                        />
                      {emailError && (
                        <p className="mt-2 text-xs text-red-600">{emailError}</p>
                      )}
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
                            : "cursor-not-allowed bg-slate-200 text-slate-500"
                        )}
                      >
                        Siguiente
                      </button>

                      
                    </div>

                    <p className="sm:col-span-2 text-xs text-slate-500">
                      Este formulario es un primer acercamiento. Después afinamos contigo los
                      detalles técnicos y siguientes pasos.
                    </p>
                  </div>
                )}

                {step === 2 && (
  <div className="grid gap-6">
    <div>
      <p className="text-sm font-semibold text-slate-900">{micro.focoTitle}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {micro.foco.map((item) => {
          const isNeedGuide = item === NEED_GUIDE_OPTION;

          return (
            <Chip
              key={item}
              label={item}
              active={form.foco.includes(item)}
              onClick={() => {
                if (isNeedGuide) {
                  handleChange(
                    "foco",
                    form.foco.includes(NEED_GUIDE_OPTION)
                      ? []
                      : [NEED_GUIDE_OPTION]
                  );
                  return;
                }

                const currentFoco = form.foco.filter(
                  (value) => value !== NEED_GUIDE_OPTION
                );

                const nextFoco = toggleInArray(currentFoco, item);

                handleChange("foco", nextFoco);
              }}
            />
          );
        })}
      </div>

      <p className="mt-2 text-xs text-slate-500">Elige al menos 1 opción.</p>
    </div>

    <div>
      <p className="text-sm font-semibold text-slate-900">{micro.datosTitle}</p>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {micro.datos.map((item) => {
          const isExclusiveDataOption = EXCLUSIVE_DATA_OPTIONS.includes(item);

          return (
            <CheckPill
              key={item}
              label={item}
              checked={form.datos.includes(item)}
              onToggle={() => {
                if (isExclusiveDataOption) {
                  handleChange(
                    "datos",
                    form.datos.includes(item) ? [] : [item]
                  );
                  return;
                }

                const currentDatos = form.datos.filter(
                  (value) => !EXCLUSIVE_DATA_OPTIONS.includes(value)
                );

                const nextDatos = toggleInArray(currentDatos, item);

                handleChange("datos", nextDatos);
              }}
            />
          );
        })}
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Opcional. Selecciona lo que tengas a la mano.
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
            : "cursor-not-allowed bg-slate-200 text-slate-500"
        )}
      >
        Siguiente
      </button>
    </div>
  </div>
)}

                {step === 3 && (
                  <div className="grid gap-5">
                    {submittedOk ? (
                      <div className="rounded-3xl border border-brand-green/25 bg-brand-green-soft/60 p-6">
                        <p className="text-sm font-semibold text-brand-green-dark">✅ Enviado</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                          ¡Listo! Recibimos tu solicitud
                        </h3>
                        <p className="mt-2 text-sm text-slate-700">
                          Revisaremos tu solicitud y te contactaremos a la brevedad. Si deseas
                          atención más rápida, también puedes escribirnos por WhatsApp.
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
                              Te contactamos para una llamada corta y aclarar dudas.
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
                              <span className="text-xs font-semibold text-slate-500">
                                {micro.focoTitle}
                              </span>
                              <p className="text-slate-800">
                                {form.foco.length ? form.foco.join(", ") : "—"}
                              </p>
                            </div>

                            <div className="sm:col-span-2">
                              <span className="text-xs font-semibold text-slate-500">
                                {micro.datosTitle}
                              </span>
                              <p className="text-slate-800">
                                {form.datos.length ? form.datos.join(", ") : "—"}
                              </p>
                            </div>

                            <div className="sm:col-span-2 mt-2">
                              <label className="text-xs font-semibold text-slate-500">
                                Mensaje (opcional)
                              </label>
                              <textarea
                                value={form.mensaje}
                                onChange={(e) => handleChange("mensaje", e.target.value)}
                                rows={4}
                                placeholder="Algo extra que debamos saber."
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

                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="text-sm font-semibold text-slate-900">
                            ¿Cómo prefieres enviar tu solicitud?
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Elige solo un canal. No es necesario enviar ambos.
                          </p>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <button
                              type="button"
                              onClick={() => setSendMethod("form")}
                              className={cx(
                                "rounded-2xl border p-4 text-left transition",
                                sendMethod === "form"
                                  ? "border-brand-green/40 bg-brand-green-soft/60"
                                  : "border-slate-200 bg-white hover:bg-slate-50"
                              )}
                            >
                              <span className="block text-sm font-bold text-slate-900">
                                Enviar formulario
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-slate-600">
                                Ideal para dejar registrada tu solicitud y recibir seguimiento formal por correo.
                              </span>
                            </button>

                            <button
                              type="button"
                              onClick={() => setSendMethod("whatsapp")}
                              className={cx(
                                "rounded-2xl border p-4 text-left transition",
                                sendMethod === "whatsapp"
                                  ? "border-brand-green/40 bg-brand-green-soft/60"
                                  : "border-slate-200 bg-white hover:bg-slate-50"
                              )}
                            >
                              <span className="block text-sm font-bold text-slate-900">
                                Enviar por WhatsApp
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-slate-600">
                                Ideal si buscas una respuesta más rápida con el mensaje ya preparado.
                              </span>
                            </button>
                          </div>
                        </div>

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

                          {sendMethod === "form" ? (
                            <button
                              type="submit"
                              disabled={!canSubmit}
                              className={cx(
                                "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition",
                                !canSubmit
                                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                                  : "bg-brand-green text-white hover:bg-brand-green-dark"
                              )}
                            >
                              {sending ? "Enviando..." : "Enviar formulario"}
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={handleWhatsappSend}
                              disabled={!canSendWhatsapp}
                              className={cx(
                                "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition",
                                !canSendWhatsapp
                                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                                  : "bg-brand-green text-white hover:bg-brand-green-dark"
                              )}
                            >
                              Abrir WhatsApp
                            </button>
                          )}
                        </div>

                        {!form.aceptaPrivacidad && (
                          <p className="text-xs text-slate-500">
                            Para continuar, primero acepta el aviso de privacidad.
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>

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
                  <p className="mt-1 font-semibold text-slate-900">{WHATSAPP_VISIBLE}</p>
                  
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
                Si no tienes datos, marca “No tengo datos” y “No sé / necesito guía”.
                Con eso es suficiente para orientarte y definir el siguiente paso.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}