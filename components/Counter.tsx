"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { parseMetric } from "@/lib/utils";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts a metric up from zero the first time it scrolls into view.
 * Screen readers and crawlers always get the final value; values with
 * more than one number (e.g. "88% → 96%") are shown as-is. Skipped
 * entirely for people who prefer reduced motion.
 */
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseMetric(value), [value]);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fmt = new Intl.NumberFormat("en-GB", {
      minimumFractionDigits: parsed.decimals,
      maximumFractionDigits: parsed.decimals,
      useGrouping: parsed.grouped,
    });
    const render = (n: number) => `${parsed.prefix}${fmt.format(n)}${parsed.suffix}`;
    let frame = 0;

    const run = () => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setDisplay(render(parsed.target * easeOutExpo(t)));
        if (t < 1) frame = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      setDisplay(render(0));
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [parsed, value]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true" className="tabular">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
