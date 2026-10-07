"use client";

import { type FormEvent, useState } from "react";
import { profile, site } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowRight } from "./Icons";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const field =
  "mt-1.5 block w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

/**
 * Contact form. If `site.formspreeEndpoint` is set it POSTs there;
 * otherwise it opens the visitor's email app with the message pre-filled.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (site.formspreeEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(site.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus({ kind: "ok", message: "Thanks — your message is on its way. I'll reply within a couple of days." });
      } catch {
        setStatus({
          kind: "error",
          message: `Something went wrong sending that. Please email me directly at ${profile.email}.`,
        });
      }
      return;
    }

    // mailto: fallback
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      kind: "ok",
      message: `Opening your email app… If nothing happens, email me at ${profile.email}.`,
    });
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium">
            Name
          </label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={field}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="cf-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className={cn(field, "resize-y")}
          placeholder="Tell me about the role or product…"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary px-6 py-3 text-[15px]" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send message"}
          <ArrowRight width={16} height={16} />
        </button>
        <p className="text-xs text-muted">
          {site.formspreeEndpoint ? "Sent securely via Formspree." : "Opens your email app — nothing is stored."}
        </p>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={cn(
          "mt-4 text-sm",
          status.kind === "error" ? "text-red-600 dark:text-red-400" : "text-accent",
          status.kind === "idle" && "sr-only",
        )}
      >
        {status.message ?? ""}
      </p>
    </form>
  );
}
