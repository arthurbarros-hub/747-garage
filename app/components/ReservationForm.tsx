"use client";

import { useState } from "react";

interface ReservationFormProps {
  carId: string;
  carTitle: string;
}

export default function ReservationForm({ carId, carTitle }: ReservationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const ensureCsrfToken = async (): Promise<string | null> => {
    if (csrfToken) {
      return csrfToken;
    }

    const response = await fetch("/api/csrf", {
      method: "GET",
      credentials: "same-origin",
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { token?: string };
    if (!data.token) {
      return null;
    }

    setCsrfToken(data.token);
    return data.token;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const token = await ensureCsrfToken();
      if (!token) {
        setMessage("Erro de segurança ao iniciar a reserva. Recarregue a página.");
        return;
      }

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": token,
        },
        credentials: "same-origin",
        body: JSON.stringify({
          carId,
          ...formData,
        }),
      });

      if (response.ok) {
        setMessage("Reserva enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", message: "", website: "" });
        setIsOpen(false);
      } else {
        const error = await response.json();
        setMessage(error.error || "Erro ao enviar reserva.");
      }
    } catch (error: unknown) {
      console.error("Erro ao enviar reserva:", error);
      setMessage("Erro ao enviar reserva. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) {
    return (
      <button
        onClick={async () => {
          setIsOpen(true);
          await ensureCsrfToken();
        }}
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-ink font-medium hover:opacity-90"
      >
        Reservar
      </button>
    );
  }

  return (
    <div className="mt-4 rounded-lg border border-off/10 bg-off/5 p-4">
      <h3 className="text-lg font-semibold text-gold">Reservar {carTitle}</h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-off">
            Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            className="mt-1 block w-full rounded-md border border-off/25 bg-ink px-3 py-2 text-off placeholder-off/50 focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-off">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={255}
            autoComplete="email"
            className="mt-1 block w-full rounded-md border border-off/25 bg-ink px-3 py-2 text-off placeholder-off/50 focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-off">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            minLength={8}
            maxLength={40}
            autoComplete="tel"
            className="mt-1 block w-full rounded-md border border-off/25 bg-ink px-3 py-2 text-off placeholder-off/50 focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-off">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            maxLength={1000}
            className="mt-1 block w-full rounded-md border border-off/25 bg-ink px-3 py-2 text-off placeholder-off/50 focus:border-gold focus:outline-none"
          />
        </div>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-ink font-medium hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar Reserva"}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-md border border-off/25 px-4 py-2 text-off font-medium hover:bg-off/10"
          >
            Cancelar
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-4 text-sm text-gold">{message}</p>
      )}
    </div>
  );
}