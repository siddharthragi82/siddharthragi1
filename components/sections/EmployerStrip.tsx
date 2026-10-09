import { employerLogos } from "@/data/portfolio";
import LogoTile from "../LogoTile";

export default function EmployerStrip() {
  return (
    <section aria-labelledby="built-at" className="border-y border-line bg-surface/60">
      <div className="container py-8">
        <h2 id="built-at" className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Where I&apos;ve built products and teams
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {employerLogos.map((logo) => (
            <li key={logo.name}>
              <LogoTile logo={logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
