import { CATEGORIES, products } from "@/data/portfolio";
import ProductCard from "../ProductCard";
import SectionHeading from "../SectionHeading";
import WorkFilter from "../WorkFilter";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const GRID_ID = "work-grid";

export default function WorkSection() {
  const options = [
    { label: "All", value: "all", count: products.length },
    ...CATEGORIES.map((c) => ({
      label: c,
      value: slug(c),
      count: products.filter((p) => p.categories.includes(c)).length,
    })),
  ];

  // One CSS rule per category: when the grid's data-filter matches, only matching cards show.
  const filterCss =
    `#${GRID_ID}:not([data-filter="all"]) > li { display: none; }\n` +
    CATEGORIES.map((c) => `#${GRID_ID}[data-filter="${slug(c)}"] > li[data-cats~="${slug(c)}"] { display: block; }`).join("\n");

  return (
    <section id="work" aria-labelledby="work-title" className="container py-20 sm:py-28 cv-auto">
      <style>{filterCss}</style>
      <SectionHeading
        id="work-title"
        eyebrow="Featured work"
        title="Products I've shipped"
        description={`${products.length} products across ${CATEGORIES.length} industries — from 0 → 1 MVPs to platforms at scale. Each card opens a full case study.`}
      />
      <div className="mt-10">
        <WorkFilter options={options} gridId={GRID_ID} />
        <ul id={GRID_ID} data-filter="all" className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug} data-cats={p.categories.map(slug).join(" ")} className="animate-card-in">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
