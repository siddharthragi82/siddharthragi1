/** Join class names, skipping falsy values. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** True for placeholder links like "#" that shouldn't render as real links. */
export function isPlaceholderUrl(url: string | undefined) {
  return !url || url === "#" || url.trim() === "";
}

/** Hex colour → rgba string with the given alpha (0–1). */
export function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/(.)/g, "$1$1") : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

/** Darken a hex colour by mixing it towards black. */
export function shade(hex: string, amount = 0.35) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  const mix = (c: number) => Math.round(c * (1 - amount));
  const r = mix((n >> 16) & 255);
  const g = mix((n >> 8) & 255);
  const b = mix(n & 255);
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Split a metric string into prefix / number / suffix so it can be animated.
 * Returns null when there isn't exactly one number (e.g. "88% → 96%").
 */
export function parseMetric(value: string) {
  const matches = value.match(/\d[\d,]*(?:\.\d+)?/g);
  if (!matches || matches.length !== 1) return null;
  const numStr = matches[0];
  const idx = value.indexOf(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix: value.slice(0, idx),
    suffix: value.slice(idx + numStr.length),
    target: parseFloat(numStr.replace(/,/g, "")),
    decimals,
    grouped: numStr.includes(","),
  };
}
