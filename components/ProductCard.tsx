import Link from "next/link";
import type { Product } from "@/data/portfolio";
import { ArrowRight } from "./Icons";
import ProductMedia from "./ProductMedia";
import StatRows from "./StatRows";

export default function ProductCard({ product }: { product: Product }) {
  const headline = product.metrics.slice(0, 3);
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/11] overflow-hidden border-b border-line bg-surface-2">
        <ProductMedia product={product} />
        <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm backdrop-blur">
          {product.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-muted">
          {product.company} · {product.years}
        </p>
        <h3 className="mt-1.5 text-xl font-semibold">
          {/* Stretched link: the whole card is clickable, but only this text is announced. */}
          <Link
            href={`/work/${product.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">
          <span className="font-medium text-ink">{product.role}</span> — {product.roleLine}
        </p>

        <StatRows items={headline} className="mt-5 border-t border-line pt-5" />

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tags">
          {product.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">
          View case study
          <ArrowRight width={16} height={16} className="transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
