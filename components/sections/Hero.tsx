import { profile } from "@/data/portfolio";
import { ArrowRight, Check } from "../Icons";
import { HeroCollage, HeroStats } from "./HeroMotion";

// Server-rendered hero; only the stat pills and collage are client components.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container grid items-center gap-14 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.lookingFor}
          </p>

          <h1 id="hero-title" className="mt-6">
            <span className="block font-display text-lg font-semibold tracking-tight text-accent sm:text-xl">
              {profile.name}
            </span>
            <span className="mt-3 block text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]">
              Product leader who has shipped fintech, mental-health and edtech products from{" "}
              <span className="whitespace-nowrap text-accent">0 → 1</span> and{" "}
              <span className="whitespace-nowrap text-accent">1 → scale</span>.
            </span>
          </h1>

          {/* Non-breaking space keeps each separator on the same line as the item before it. */}
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {profile.subline.join(" · ")}
          </p>

          <HeroStats />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary px-6 py-3 text-[15px]">
              See my work
              <ArrowRight width={16} height={16} />
            </a>
            <a href="#contact" className="btn-secondary px-6 py-3 text-[15px]">
              Get in touch
            </a>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
            <Check width={16} height={16} className="text-accent" />
            {profile.workRightBadge}
          </p>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}
