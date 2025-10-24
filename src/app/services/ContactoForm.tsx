// File: src/app/services/ContactoForm.tsx
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactoForm.module.css";

// Inicializa EmailJS con la Public Key solo una vez
if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}

export default function ContactoForm() {
  const form = useRef<HTMLFormElement>(null);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => setEnviado(true))
      .catch(() => alert("Error al enviar mensaje, intenta nuevamente"));
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.formLabel}>
        Nombre:
        <input type="text" name="nombre" required className={styles.input} />
      </label>
      <label className={styles.formLabel}>
        Email:
        <input type="email" name="email" required className={styles.input} />
      </label>
      <label className={styles.formLabel}>
        Mensaje:
        <textarea name="mensaje" rows={6} required className={styles.textarea} />
      </label>
      <button type="submit" className={styles.submitBtn}>Enviar Mensaje</button>
      {enviado && <p className={styles.confirmado}>¡Mensaje enviado correctamente!</p>}
    </form>
  );
}
