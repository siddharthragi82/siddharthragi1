import { awards, partnerLogos, press } from "@/data/portfolio";
import { Award, Mic } from "../Icons";
import LogoTile from "../LogoTile";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function RecognitionSection() {
  return (
    <section id="recognition" aria-labelledby="recognition-title" className="container py-20 sm:py-28 cv-auto">
      <SectionHeading
        id="recognition-title"
        eyebrow="Recognition & press"
        title="Recognised for building in mental health"
        description="Awards and coverage for Havoc Therapy and We Hear You."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal as="li" key={a.title} delay={(i % 4) * 0.05} className="card flex gap-4 p-5">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              {a.title.includes("Speaker") ? <Mic /> : <Award />}
            </span>
            <div>
              <h3 className="text-[15px] font-semibold leading-snug">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.issuer}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Featured in</h3>
        <ul className="flex flex-wrap gap-2">
          {press.map((p) => (
            <li key={p} className="chip text-ink/80">
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 rounded-3xl border border-line bg-surface-2/60 p-6 sm:p-8">
        <h3 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Worked with · Partners
        </h3>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {partnerLogos.map((logo) => (
            <li key={logo.name}>
              <LogoTile logo={logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
