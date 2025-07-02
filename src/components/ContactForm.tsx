"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.nombre || !form.email || !form.telefono || !form.mensaje) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("¡Mensaje enviado exitosamente! Pronto nos pondremos en contacto.");
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
        formRef.current?.reset();
      } else {
        setError("Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.");
      }
    } catch {
      setError("Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.");
    }
    setLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-sm">{error}</div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-sm">{success}</div>
      )}
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={form.nombre}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div>
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={form.telefono}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div>
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={form.mensaje}
          onChange={handleChange}
          disabled={loading}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}