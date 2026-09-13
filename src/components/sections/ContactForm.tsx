"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/content/site";

const fieldClass = "mt-2 min-h-12 w-full border border-navy/25 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-gold-deep focus:ring-2 focus:ring-gold-deep/25";

export default function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Business: ${data.get("business")}`,
      `Help needed: ${data.get("service")}`,
      "",
      String(data.get("message")),
    ].join("\n"));

    setNotice("Your email application has been opened with this enquiry. Review it there, then send it to complete your submission.");
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="border border-navy/10 bg-white p-6 sm:p-9">
      <h2 className="font-display text-3xl text-navy">Send an enquiry</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">Submitting this form opens a prepared message in your email application.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">Name
          <input className={fieldClass} name="name" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold text-navy">Email Address
          <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">Business Name
          <input className={fieldClass} name="business" autoComplete="organization" required />
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">What Do You Need Help With?
          <select className={fieldClass} name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Bookkeeping</option>
            <option>Financial Reporting</option>
            <option>Budgeting & Forecasting</option>
            <option>Tax & Advisory</option>
            <option>Finance Process Setup</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">Message
          <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required />
        </label>
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:bg-gold-light active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep">
        Send Enquiry <span className="ml-2" aria-hidden="true">→</span>
      </button>
      <p className="mt-5 text-sm leading-relaxed text-muted">{contact.trustMessage}</p>
      <p className="mt-3 text-sm leading-relaxed text-navy" aria-live="polite">{notice}</p>
    </form>
  );
}
