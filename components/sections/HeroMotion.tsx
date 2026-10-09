"use client";

import { m } from "framer-motion";
import { getProduct, profile } from "@/data/portfolio";
import Counter from "../Counter";
import { BrowserFrame, PhoneFrame } from "../DeviceFrames";

const ease = [0.22, 1, 0.36, 1] as const;

/** Three animated stat pills under the hero headline. */
export function HeroStats() {
  return (
    <m.ul
      aria-label="Headline results"
      className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
    >
      {profile.heroStats.map((s) => (
        <m.li
          key={s.label}
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
          className="rounded-2xl border border-line bg-surface px-4 py-3.5 shadow-card"
        >
          <Counter value={s.value} className="block font-display text-metric-sm font-bold text-ink" />
          <span className="mt-1.5 block text-sm font-medium text-ink">{s.label}</span>
          <span className="block text-xs text-muted">{s.context}</span>
        </m.li>
      ))}
    </m.ul>
  );
}

const rise = (delay: number, y = 24) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

/** Staggered collage of real product screens in CSS device frames. */
export function HeroCollage() {
  const why = getProduct("we-hear-you")!;
  const getflexi = getProduct("getflexi")!;
  const incubez = getProduct("incubez")!;
  const snr = getProduct("scores-n-ranks")!;

  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[36rem] lg:max-w-none">
      <m.div className="absolute right-0 top-0 w-[78%]" {...rise(0.1)}>
        <BrowserFrame image={getflexi.cover[0]} label="GetFlexi" sizes="(min-width: 1024px) 440px, 72vw" />
      </m.div>
      <m.div className="absolute bottom-[2%] left-[16%] w-[62%]" {...rise(0.25)}>
        <BrowserFrame image={incubez.cover[0]} label="Incubez" sizes="(min-width: 1024px) 360px, 58vw" />
      </m.div>
      <m.div className="absolute bottom-[2%] right-[3%] w-[22%]" {...rise(0.4, 32)}>
        <PhoneFrame image={snr.cover[0]} sizes="(min-width: 1024px) 150px, 24vw" />
      </m.div>
      <m.div className="absolute left-0 top-[15%] w-[26%]" {...rise(0.55, 32)}>
        <PhoneFrame image={why.cover[0]} sizes="(min-width: 1024px) 180px, 28vw" />
      </m.div>
    </div>
  );
}
