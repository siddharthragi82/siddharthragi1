import { profile, research, sideProjects } from "@/data/portfolio";
import { ArrowUpRight, Cpu, Github } from "../Icons";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import StatRows from "../StatRows";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line bg-surface/50 cv-auto">
      <div className="container py-20 sm:py-28">
        <SectionHeading
          id="projects-title"
          eyebrow="AI & side projects"
          title="Building with AI, not just talking about it"
          description="Small tools I build to make product work faster — and the research behind my view of AI-augmented teams."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {sideProjects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08} className="card flex flex-col p-6 sm:p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Cpu />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5">
                <StatRows items={p.metrics} />
              </div>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              {p.links.length ? (
                <div className="mt-auto pt-6">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github width={16} height={16} />
                      {l.label}
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}

          <Reveal as="li" delay={0.16} className="card flex flex-col p-6 sm:p-7">
            <p className="eyebrow">{research.title}</p>
            <p className="mt-5 font-display text-metric-lg font-bold text-accent">{research.metric.value}</p>
            <p className="mt-2 text-sm font-medium">{research.metric.label}</p>
            <ul className="mt-6 space-y-3 border-t border-line pt-5">
              {research.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <a href={profile.orcid} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                {research.orcidLabel}
                <ArrowUpRight width={15} height={15} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
