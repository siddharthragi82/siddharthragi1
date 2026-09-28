import type { Config } from "tailwindcss";

// Colours come from CSS variables in app/globals.css so light/dark themes
// are defined in one place. Each variable holds space-separated RGB channels,
// which lets Tailwind apply opacity modifiers (e.g. bg-accent/10).
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("ink-muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        band: token("band"),
        "band-ink": token("band-ink"),
        "band-muted": token("band-muted"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Big-number scale — the site's signature element.
        "metric-sm": ["2rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        metric: ["2.75rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "metric-lg": ["clamp(3rem, 6vw, 4.5rem)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--shadow) / 0.06), 0 8px 24px -12px rgb(var(--shadow) / 0.18)",
        lift: "0 2px 4px rgb(var(--shadow) / 0.08), 0 24px 48px -20px rgb(var(--shadow) / 0.35)",
        device: "0 30px 60px -25px rgb(var(--shadow) / 0.55), 0 12px 24px -12px rgb(var(--shadow) / 0.35)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "card-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        // Replays whenever a filtered card is shown again.
        "card-in": "card-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  // A fluid container (see .container in globals.css) replaces Tailwind's stepped one.
  corePlugins: { container: false },
  plugins: [],
};

export default config;
