import { about } from "@/data/portfolio";
import { Check } from "../Icons";
import Reveal from "../Reveal";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line bg-surface/50 cv-auto">
      <div className="container grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Engineer → founder → PM → MBA
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/85">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-5">
            <p className="flex items-start gap-3 text-sm leading-relaxed">
              <Check width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
              <span>
                <strong className="font-semibold">Work authorisation.</strong> {about.workAuthorisation}
              </span>
            </p>
            <p className="mt-3 pl-[1.9rem] text-sm text-muted">
              <strong className="font-semibold text-ink">Languages:</strong> {about.languages}
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.05}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Education</h3>
            <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
              {about.education.map((e) => (
                <li key={e.title} className="px-5 py-3.5">
                  <p className="font-medium leading-snug">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.org}
                    {e.detail ? <span className="text-ink/70"> · {e.detail}</span> : null}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Certifications</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.certifications.map((c) => (
                <li key={c} className="chip text-ink/80">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Skills</h3>
            <div className="mt-4 space-y-4">
              {about.skills.map((g) => (
                <div key={g.group}>
                  <p className="text-sm font-semibold">{g.group}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
