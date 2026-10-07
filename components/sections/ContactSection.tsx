import { profile } from "@/data/portfolio";
import ContactForm from "../ContactForm";
import CopyButton from "../CopyButton";
import { Github, Linkedin, Mail, MapPin, Phone, WhatsApp } from "../Icons";
import Reveal from "../Reveal";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container py-20 sm:py-28 cv-auto">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="mt-3 text-4xl font-semibold sm:text-5xl">
            Let&apos;s build what&apos;s next.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Hiring for a Senior PM, Head of Product or CPO role in the UK or India? I&apos;d love to hear about it.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex flex-wrap items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Mail />
              </span>
              <a href={`mailto:${profile.email}`} className="link-underline text-[17px] font-medium">
                {profile.email}
              </a>
              <CopyButton text={profile.email} label="Copy email address" />
            </li>
            {profile.phones.map((ph) => (
              <li key={ph.href} className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {ph.href.startsWith("https://wa.me") ? <WhatsApp /> : <Phone />}
                </span>
                <a
                  href={ph.href}
                  className="link-underline font-medium"
                  {...(ph.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {ph.display}
                </a>
                <span className="text-sm text-muted">{ph.label}</span>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MapPin />
              </span>
              <span className="font-medium">{profile.location}</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin width={16} height={16} />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github width={16} height={16} />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
