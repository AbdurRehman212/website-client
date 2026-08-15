"use client";

import { FormEvent, useState } from "react";
import { services } from "@/content/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-gold/40 bg-white p-8 text-center"
      >
        <h3 className="font-display text-xl text-navy">Thank you</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This is a prototype form — your message was not actually sent. A
          real enquiry handler will be connected before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-gold-deep focus:outline-none"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-gold-deep focus:outline-none"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-gold-deep focus:outline-none"
          />
        </Field>
        <Field label="Company" htmlFor="company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-gold-deep focus:outline-none"
          />
        </Field>
      </div>

      <Field label="Service Interested In" htmlFor="service" optional>
        <select
          id="service"
          name="service"
          className="w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-gold-deep focus:outline-none"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-navy/20 bg-white px-4 py-2.5 text-sm text-ink focus:border-gold-deep focus:outline-none"
        />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional = false,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-[0.08em] text-navy">
        {label}
        {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : null}
      </label>
      {children}
    </div>
  );
}
