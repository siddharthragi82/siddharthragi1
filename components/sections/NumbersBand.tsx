import { bigNumbers } from "@/data/portfolio";
import Counter from "../Counter";
import Reveal from "../Reveal";

export default function NumbersBand() {
  return (
    <section aria-labelledby="numbers-title" className="band relative overflow-hidden bg-band text-band-ink cv-auto">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 size-[30rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container relative py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">By the numbers</p>
          <h2 id="numbers-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Outcomes, not output.
          </h2>
          <p className="mt-4 text-base text-band-muted sm:text-lg">
            A few results from products and teams I&apos;ve led — across lending, mental health, banking and IT services.
          </p>
        </div>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {bigNumbers.map((n, i) => (
            <Reveal as="li" key={n.label} delay={(i % 3) * 0.08} className="border-t border-white/15 pt-6">
              <Counter value={n.value} className="block font-display text-metric-lg font-bold text-accent" />
              <span className="mt-4 block text-base font-medium leading-snug text-band-ink">{n.label}</span>
              <span className="mt-1 block text-sm text-band-muted">{n.context}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
