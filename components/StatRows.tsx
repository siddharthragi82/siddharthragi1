import type { Metric } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Compact "stat sheet": big value on the left, label on the right.
 * The value column widens (and the type steps down) for long values
 * such as "88% → 96%" so they never wrap.
 */
export default function StatRows({ items, className }: { items: Metric[]; className?: string }) {
  const longest = Math.max(...items.map((m) => m.value.length));
  const wide = longest > 6;
  return (
    <dl className={cn("space-y-3", className)}>
      {items.map((mtr) => (
        <div
          key={mtr.label}
          className={cn("grid items-baseline gap-3", wide ? "grid-cols-[8.25rem_1fr]" : "grid-cols-[6.25rem_1fr]")}
        >
          <dt className="sr-only">{mtr.label}</dt>
          <dd
            className={cn(
              "whitespace-nowrap font-display font-bold leading-none tracking-tight text-ink tabular",
              wide ? "text-[1.35rem]" : "text-[1.65rem]",
            )}
          >
            {mtr.value}
          </dd>
          <dd aria-hidden="true" className="line-clamp-2 text-sm leading-snug text-muted">
            {mtr.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
