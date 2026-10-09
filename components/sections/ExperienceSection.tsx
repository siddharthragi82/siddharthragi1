import Link from "next/link";
import { experience, getProduct } from "@/data/portfolio";
import { ArrowRight, MapPin } from "../Icons";
import LogoTile from "../LogoTile";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line bg-surface/50 cv-auto">
      <div className="container py-20 sm:py-28">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="From engineer to founder to product leader"
          description="Most recent first. Founder-level ownership, PM rigour, and now banking and consulting in the UK."
        />

        <ol className="relative mt-14 space-y-10 before:absolute before:bottom-2 before:left-[1.35rem] before:top-2 before:w-px before:bg-line md:before:left-[15.75rem]">
          {experience.map((role) => (
            <Reveal as="li" key={`${role.company}-${role.title}`} className="relative grid gap-3 md:grid-cols-[12rem_1fr] md:gap-10">
              <div className="hidden pt-3 text-right md:block">
                <p className="font-display text-sm font-semibold text-ink tabular">{role.dates}</p>
                <p className="mt-1 text-xs text-muted">{role.location}</p>
              </div>

              <div className="relative pl-10 md:pl-12">
                {/* timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute left-[1.05rem] top-6 size-[0.6rem] rounded-full border-2 border-accent bg-bg md:left-[0.95rem]"
                />

                <div className="card p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-snug sm:text-xl">{role.title}</h3>
                      <p className="mt-0.5 font-medium text-ink/80">{role.company}</p>
                      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-muted md:hidden">
                        <span className="tabular">{role.dates}</span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin width={12} height={12} />
                          {role.location}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {role.logos.map((logo) => (
                        <LogoTile key={logo.name} logo={logo} size="sm" mono={false} />
                      ))}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {role.related?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                      {role.related.map((slug) => {
                        const p = getProduct(slug);
                        if (!p) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/work/${slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20"
                          >
                            {p.name} case study
                            <ArrowRight width={13} height={13} />
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
