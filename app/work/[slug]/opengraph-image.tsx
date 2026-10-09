import { ImageResponse } from "next/og";
import { getProduct, products, profile } from "@/data/portfolio";

export const alt = "Case study preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Per-case-study social card with the headline metrics.
export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug)!;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: `linear-gradient(135deg, #0B1324 0%, #0F1A30 55%, ${p.brand} 160%)`,
          color: "#ECF0F6",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, color: "#2DD4BF", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
            {`Case study · ${p.industry}`}
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2.5, marginTop: 14 }}>{p.name}</div>
          <div style={{ fontSize: 28, color: "#A3ADC2", marginTop: 6 }}>
            {`${p.role} · ${p.company} · ${p.years}`}
          </div>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          {p.metrics.slice(0, 3).map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column", maxWidth: 320 }}>
              <div style={{ fontSize: 60, fontWeight: 700, color: "#2DD4BF", letterSpacing: -2 }}>{m.value}</div>
              <div style={{ fontSize: 22, color: "#A3ADC2" }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 22, color: "#A3ADC2" }}>{`${profile.name} — Portfolio`}</div>
      </div>
    ),
    size,
  );
}
