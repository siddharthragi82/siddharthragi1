import { writing } from "@/data/portfolio";
import { cn, isPlaceholderUrl } from "@/lib/utils";
import { ArrowUpRight, Doc } from "../Icons";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const platformStyle = {
  Canva: "bg-[#7D2AE8]/10 text-[#6D28D9] dark:text-[#C4A5FF]",
  Notion: "bg-ink/10 text-ink",
};

export default function WritingSection() {
  return (
    <section id="case-studies" aria-labelledby="writing-title" className="container py-20 sm:py-28 cv-auto">
      <SectionHeading
        id="writing-title"
        eyebrow="Case studies & writing"
        title="How I think about products"
        description="PRDs, teardowns and design exercises — the working documents behind the job titles."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {writing.map((item, i) => {
          const placeholder = isPlaceholderUrl(item.url);
          const inner = (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-surface-2 text-ink">
                  <Doc />
                </span>
                <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", platformStyle[item.platform])}>
                  {item.platform}
                </span>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{item.kind}</p>
              <h3 className="mt-1.5 text-lg font-semibold leading-snug">{item.title}</h3>
              <span className={cn("mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold", placeholder ? "text-muted" : "text-accent")}>
                {placeholder ? (
                  "Link coming soon"
                ) : (
                  <>
                    Read on {item.platform}
                    <ArrowUpRight width={15} height={15} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </>
                )}
              </span>
            </>
          );
          return (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.06} className="h-full">
              {placeholder ? (
                <div className="card flex h-full flex-col p-6">{inner}</div>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex h-full flex-col p-6"
                >
                  {inner}
                </a>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
