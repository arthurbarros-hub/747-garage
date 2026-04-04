"use client";

import { useState } from "react";

interface ReservationFormProps {
  carId: string;
  carTitle: string;
}

export default function ReservationForm({ carId, carTitle }: ReservationFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carId,
          ...formData,
        }),
      });

      if (response.ok) {
        setMessage("Reserva enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", message: "" });
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
        onClick={() => setIsOpen(true)}
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
            className="mt-1 block w-full rounded-md border border-off/25 bg-ink px-3 py-2 text-off placeholder-off/50 focus:border-gold focus:outline-none"
          />
        </div>
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