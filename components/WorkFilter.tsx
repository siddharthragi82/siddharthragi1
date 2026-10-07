"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Option = { label: string; value: string; count: number };

/**
 * Filter chips for the work grid. The cards themselves are server-rendered;
 * this only flips a data attribute on the grid and CSS shows the matching
 * cards (see the <style> in WorkSection). Without JavaScript every card shows.
 */
export default function WorkFilter({ options, gridId }: { options: Option[]; gridId: string }) {
  const [active, setActive] = useState("all");
  const current = options.find((o) => o.value === active)!;

  function select(value: string) {
    setActive(value);
    const grid = document.getElementById(gridId);
    if (grid) grid.dataset.filter = value;
  }

  return (
    <>
      <div role="group" aria-label="Filter products by industry" className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {options.map((o) => {
            const on = active === o.value;
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={on}
                aria-controls={gridId}
                onClick={() => select(o.value)}
                className={cn(
                  "inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  on ? "border-ink bg-ink text-bg" : "border-line bg-surface text-muted hover:border-ink/40 hover:text-ink",
                )}
              >
                {o.label}
                <span className={cn("rounded-full px-1.5 text-[11px] tabular", on ? "bg-bg/15 text-bg" : "bg-surface-2 text-muted")}>
                  {o.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {`Showing ${current.count} ${current.count === 1 ? "product" : "products"}${active === "all" ? "" : ` in ${current.label}`}.`}
      </p>
    </>
  );
}
