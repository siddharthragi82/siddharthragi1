import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Counter from "@/components/Counter";
import { BrowserFrame, FigureFrame, PhoneFrame } from "@/components/DeviceFrames";
import Gallery from "@/components/Gallery";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from "@/components/Icons";
import LogoTile from "@/components/LogoTile";
import { Placeholder, brandTint } from "@/components/ProductMedia";
import Reveal from "@/components/Reveal";
import { getProduct, type Product, products, profile } from "@/data/portfolio";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = `${product.name} — ${product.role}, ${product.company}`;
  const description = `${product.summary} ${product.metrics
    .slice(0, 3)
    .map((m) => `${m.value} ${m.label}`)
    .join(" · ")}.`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${product.slug}` },
    openGraph: { type: "article", url: `/work/${product.slug}`, title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Large media block under the case-study header. */
function HeroMedia({ product }: { product: Product }) {
  const phones = product.gallery.flatMap((g) => g.images).filter((i) => i.frame === "phone");
  const first = product.cover[0];

  if (!first) {
    return (
      <div className="aspect-[16/7] overflow-hidden rounded-3xl border border-line">
        <Placeholder product={product} large />
      </div>
    );
  }

  if (first.frame === "phone") {
    const shown = phones.slice(0, 3);
    return (
      <div className="overflow-hidden rounded-3xl border border-line" style={brandTint(product.brand)}>
        <div className="flex items-end justify-center gap-[4%] px-6 pb-0 pt-10 sm:pt-14">
          {shown.map((img, i) => (
            <PhoneFrame
              key={img.src}
              image={img}
              priority={i === 1}
              sizes="(min-width: 1024px) 240px, 30vw"
              className={
                i === 1 ? "w-[30%] max-w-[15rem] translate-y-[6%]" : "w-[26%] max-w-[13rem] translate-y-[14%]"
              }
            />
          ))}
        </div>
      </div>
    );
  }

  if (first.frame === "browser") {
    return (
      <div className="overflow-hidden rounded-3xl border border-line px-4 pt-8 sm:px-12 sm:pt-12" style={brandTint(product.brand)}>
        <BrowserFrame
          image={first}
          label={product.name}
          priority
          sizes="(min-width: 1280px) 1100px, 92vw"
          className="mx-auto max-w-5xl translate-y-2 rounded-b-none"
        />
      </div>
    );
  }

  return <FigureFrame image={first} priority sizes="(min-width: 1280px) 1200px, 100vw" className="rounded-3xl" />;
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section aria-labelledby={id} className="border-t border-line pt-8">
        <h2 id={id} className="text-2xl font-semibold sm:text-[1.7rem]">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </section>
    </Reveal>
  );
}

function Bullets({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 text-[17px] leading-relaxed text-ink/85">
          {ordered ? (
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent"
            >
              {i + 1}
            </span>
          ) : (
            <span aria-hidden="true" className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </List>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const index = products.findIndex((p) => p.slug === product.slug);
  const prev = products[(index - 1 + products.length) % products.length];
  const next = products[(index + 1) % products.length];
  const cs = product.caseStudy;

  return (
    <article>
      {/* Header */}
      <header className="container pb-10 pt-8 sm:pt-12">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
          <ArrowLeft width={16} height={16} />
          All work
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">
              {product.industry} · {product.company}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">{product.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{product.summary}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {product.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {product.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink hover:bg-accent/90"
              >
                {l.label}
                <ArrowUpRight width={13} height={13} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Big numbers */}
      <section aria-label="Key results" className="container">
        <Reveal>
          {/* Cell outlines draw the internal grid lines; empty cells stay clean. */}
          <ul className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-3 xl:grid-cols-4">
            {product.metrics.map((mtr) => (
              <li key={mtr.label} className="p-5 outline outline-1 outline-line sm:p-6">
                <Counter
                  value={mtr.value}
                  className="block font-display text-[clamp(1.6rem,6.5vw,2.75rem)] font-bold leading-none tracking-[-0.035em] text-ink"
                />
                <span className="mt-3 block text-sm leading-snug text-muted">{mtr.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="container mt-12">
        <HeroMedia product={product} />
      </div>

      {/* Story */}
      <div className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[17rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">At a glance</h2>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Role", product.role],
                ["Company", product.company],
                ["Timeline", product.years],
                ["Location", product.location],
                ["Industry", product.industry],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-muted">{k}</dt>
                  <dd className="mt-0.5 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            {product.clients?.length ? (
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-sm text-muted">{product.categories.includes("Manufacturing") ? "Company" : "Clients"}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.clients.map((c) => (
                    <li key={c.name}>
                      <LogoTile logo={c} className="h-12 px-3" />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <a href={profile.cvHref} download className="btn-secondary mt-6 w-full">
              <Download width={16} height={16} />
              Download CV
            </a>
          </div>
        </aside>

        <div className="max-w-prose space-y-12">
          <Block id="problem" title="The problem">
            <p className="text-[17px] leading-relaxed text-ink/85">{cs.problem}</p>
          </Block>
          <Block id="role" title="My role">
            <p className="text-[17px] leading-relaxed text-ink/85">{cs.role}</p>
          </Block>
          <Block id="approach" title="Approach">
            <Bullets items={cs.approach} ordered />
          </Block>
          <Block id="outcome" title="Outcome">
            <Bullets items={cs.outcome} />
            {cs.evidence ? (
              <div className="mt-8 rounded-2xl border border-line bg-surface-2/60 p-5 sm:p-6">
                <h3 className="text-base font-semibold">{cs.evidence.title}</h3>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {cs.evidence.items.map((e) => (
                    <div key={e.label}>
                      <dt className="sr-only">{e.label}</dt>
                      <dd className="font-display text-2xl font-bold tracking-tight">{e.value}</dd>
                      <dd aria-hidden="true" className="mt-1 text-sm text-muted">
                        {e.label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs text-muted">Source: {cs.evidence.source}</p>
              </div>
            ) : null}
          </Block>
          <Block id="learnings" title="Learnings">
            <Bullets items={cs.learnings} />
          </Block>
        </div>
      </div>

      {/* Gallery */}
      {product.gallery.length ? (
        <section aria-labelledby="gallery-title" className="border-t border-line bg-surface/50">
          <div className="container py-16 sm:py-20">
            <p className="eyebrow">Gallery</p>
            <h2 id="gallery-title" className="mt-3 text-3xl font-semibold">
              Inside {product.name}
            </h2>
            <div className="mt-10">
              <Gallery groups={product.gallery} productName={product.name} />
            </div>
          </div>
        </section>
      ) : null}

      {/* Prev / next */}
      <nav aria-label="More case studies" className="container grid gap-4 py-14 sm:grid-cols-2">
        {[
          { p: prev, dir: "Previous" as const },
          { p: next, dir: "Next" as const },
        ].map(({ p, dir }) => (
          <Link
            key={dir}
            href={`/work/${p.slug}`}
            className={`card card-hover group flex flex-col p-6 ${dir === "Next" ? "sm:items-end sm:text-right" : ""}`}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {dir === "Previous" ? <ArrowLeft width={14} height={14} /> : null}
              {dir} case study
              {dir === "Next" ? <ArrowRight width={14} height={14} /> : null}
            </span>
            <span className="mt-2 font-display text-2xl font-semibold tracking-tight group-hover:text-accent">
              {p.name}
            </span>
            <span className="mt-1 text-sm text-muted">
              {p.metrics[0].value} {p.metrics[0].label}
            </span>
          </Link>
        ))}
      </nav>

      <section className="container pb-20">
        <div className="band relative overflow-hidden rounded-3xl bg-band p-8 text-band-ink sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative max-w-xl text-3xl font-semibold sm:text-4xl">Want results like these on your product?</h2>
          <p className="relative mt-3 max-w-lg text-band-muted">
            I&apos;m open to Senior PM, Head of Product and CPO roles in the UK and India.
          </p>
          <div className="relative mt-7 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary px-6 py-3">
              Get in touch
              <ArrowRight width={16} height={16} />
            </Link>
            <Link href="/#work" className="btn border border-white/20 px-6 py-3 text-band-ink hover:border-white/50">
              See all work
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
