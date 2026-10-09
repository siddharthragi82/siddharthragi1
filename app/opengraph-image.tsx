import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — product leader across fintech, mental-health tech and edtech`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

// Social preview card, generated at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0B1324 0%, #0F1A30 60%, #0B2B33 100%)",
          color: "#ECF0F6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#2DD4BF",
              color: "#0B1324",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{profile.name}</div>
        </div>
        <div style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 1000 }}>
          Product leader who has shipped fintech, mental-health and edtech products from 0 → 1 and 1 → scale.
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          {profile.heroStats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 60, fontWeight: 700, color: "#2DD4BF", letterSpacing: -2 }}>{s.value}</div>
              <div style={{ fontSize: 22, color: "#A3ADC2" }}>
                {`${s.label} · ${s.context}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
