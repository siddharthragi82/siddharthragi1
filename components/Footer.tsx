import Link from "next/link";
import { nav, profile } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Product leader across fintech, mental-health tech and edtech. {profile.location}.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Siddharth"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface hover:border-ink/40"
            >
              <Mail />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siddharth on LinkedIn (opens in a new tab)"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface hover:border-ink/40"
            >
              <Linkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siddharth on GitHub (opens in a new tab)"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface hover:border-ink/40"
            >
              <Github />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Quick links</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/80 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.cvHref} download className="text-ink/80 hover:text-accent">
                Download CV
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:flex-col md:items-end">
          <ThemeToggle />
          <span className="text-xs text-muted md:mt-1">Theme</span>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
