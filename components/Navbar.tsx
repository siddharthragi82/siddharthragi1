"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Close, Download, Menu } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const sectionIds = nav.map((n) => n.href.split("#")[1]);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Transparent at the top, solid once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu on Escape and when the route changes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main" className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5 rounded-lg" aria-label={`${profile.name} — home`}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-bg transition-colors group-hover:bg-accent group-hover:text-accent-ink">
            {profile.initials}
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight sm:block">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const id = item.href.split("#")[1];
            const isActive = active === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative inline-flex flex-col items-center rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent transition-all duration-300",
                      isActive ? "w-4" : "w-0",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a href={profile.cvHref} download className="btn-primary hidden sm:inline-flex">
            <Download width={16} height={16} />
            Download CV
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line lg:hidden">
        <ul className="container flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 font-display text-lg font-medium text-ink hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 flex items-center gap-3 border-t border-line px-2 pt-4">
            <a href={profile.cvHref} download className="btn-primary flex-1">
              <Download width={16} height={16} />
              Download CV
            </a>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}
