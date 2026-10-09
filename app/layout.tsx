import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import AnchorScrollFix from "@/components/AnchorScrollFix";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { profile, site } from "@/data/portfolio";
import "./globals.css";

// Fonts are self-hosted through next/font (no layout shift, no third-party request).
const display = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
});
const body = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${profile.name}` },
  description: site.description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    "Siddharth Ragi",
    "Product Manager",
    "Head of Product",
    "Chief Product Officer",
    "Senior Product Manager",
    "Fintech product manager",
    "Mental health tech",
    "EdTech",
    "Cambridge UK",
    "Product portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title: site.title,
    description: site.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#080C17" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-accent px-4 py-2 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Providers>
          <AnchorScrollFix />
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
        {/* If JavaScript is off, show content that would otherwise fade in on scroll. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
