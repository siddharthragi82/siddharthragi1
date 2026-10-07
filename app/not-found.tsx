import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-display text-metric-lg font-bold text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This page didn&apos;t ship.</h1>
      <p className="mt-3 max-w-md text-muted">The link may be out of date. Everything I&apos;ve built is on the home page.</p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft width={16} height={16} />
        Back to the portfolio
      </Link>
    </section>
  );
}
