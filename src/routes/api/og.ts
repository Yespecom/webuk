import { createFileRoute } from "@tanstack/react-router";
import { createElement as h } from "react";

// ─── Font cache ───────────────────────────────────────────────────────────────
let fontRegular: ArrayBuffer | null = null;
let fontBold: ArrayBuffer | null = null;

async function getFonts() {
  if (!fontRegular || !fontBold) {
    const [r, b] = await Promise.all([
      fetch("https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gozuTWB.woff2"),
      fetch("https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mF71Q-gozuThf.woff2"),
    ]);
    if (r.ok) fontRegular = await r.arrayBuffer();
    else {
      const fb = await fetch("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2Sewovd.woff");
      fontRegular = await fb.arrayBuffer();
    }
    fontBold = b.ok ? await b.arrayBuffer() : fontRegular;
  }
  return { fontRegular: fontRegular!, fontBold: fontBold! };
}

// ─── OG card layout ───────────────────────────────────────────────────────────
function OgCard({ title, description, tag }: { title: string; description: string; tag: string }) {
  const BG = "#0d1117";
  const BRAND = "#2563eb";

  return h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: BG,
        padding: "72px 80px",
        fontFamily: "Space Grotesk, sans-serif",
        position: "relative",
        overflow: "hidden",
      },
    },
    // Faint Y watermark
    h("div", {
      style: {
        position: "absolute",
        right: "-80px",
        top: "-120px",
        fontSize: "720px",
        fontWeight: "800",
        color: "rgba(255,255,255,0.025)",
        lineHeight: 1,
      },
    }, "Y"),
    // Logo row
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "auto" } },
      h("div", {
        style: {
          width: "36px",
          height: "36px",
          backgroundColor: BRAND,
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          fontWeight: "800",
          color: "#fff",
        },
      }, "Y"),
      h("span", { style: { fontSize: "22px", fontWeight: "700", color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em" } }, "Yesp"),
    ),
    // Tag badge
    tag
      ? h("div", { style: { display: "flex", alignItems: "center", marginBottom: "20px" } },
          h("span", {
            style: {
              backgroundColor: "rgba(37,99,235,0.18)",
              color: "#60a5fa",
              fontSize: "13px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "2px",
              fontWeight: "500",
            },
          }, tag),
        )
      : null,
    // Title
    h("div", {
      style: {
        fontSize: title.length > 55 ? "42px" : "52px",
        fontWeight: "700",
        color: "#ffffff",
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
        maxWidth: "860px",
        marginBottom: "24px",
      },
    }, title),
    // Description
    description
      ? h("div", {
          style: { fontSize: "22px", color: "rgba(255,255,255,0.55)", lineHeight: 1.55, maxWidth: "780px" },
        }, description.length > 130 ? description.slice(0, 130) + "…" : description)
      : null,
    // Footer bar
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: "28px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        },
      },
      h("div", { style: { display: "flex", alignItems: "center", gap: "16px" } },
        h("span", { style: { fontSize: "15px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: "500" } }, "yesp.uk"),
        h("span", { style: { width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.15)" } }),
        h("span", { style: { fontSize: "15px", color: "rgba(255,255,255,0.25)" } }, "United Kingdom"),
      ),
      h("div", { style: { display: "flex", alignItems: "center", gap: "6px" } },
        h("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: BRAND } }),
        h("span", { style: { fontSize: "14px", color: "rgba(255,255,255,0.3)" } }, "Operational · Digital · AI Transformation"),
      ),
    ),
  );
}

// ─── Route ────────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        try {
          const [{ default: satori }, { default: sharp }] = await Promise.all([
            import("satori"),
            import("sharp"),
          ]);

          const url = new URL(request.url);
          const title = url.searchParams.get("title") ?? "Yesp — Transforming Operations";
          const description = url.searchParams.get("description") ?? "UK Operational Excellence, Digital & AI Transformation for mid-market businesses.";
          const tag = url.searchParams.get("tag") ?? "";

          const { fontRegular, fontBold } = await getFonts();

          const svg = await satori(OgCard({ title, description, tag }), {
            width: 1200,
            height: 630,
            fonts: [
              { name: "Space Grotesk", data: fontRegular, weight: 400, style: "normal" },
              { name: "Space Grotesk", data: fontBold, weight: 700, style: "normal" },
            ],
          });

          const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
          const png = new Uint8Array(pngBuffer);

          return new Response(png, {
            status: 200,
            headers: {
              "Content-Type": "image/png",
              "Cache-Control": "public, max-age=86400, s-maxage=604800",
            },
          });
        } catch (err) {
          console.error("[OG] generation error:", err);
          return new Response("OG image generation failed", { status: 500 });
        }
      },
    },
  },
});
