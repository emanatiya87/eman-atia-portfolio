import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eman Atia — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0F1E",
          position: "relative",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.15 }}
        >
          <path
            d="M0 180 H280 V90 H600 M600 90 V450 H930 V750"
            stroke="#4CD9E8"
            strokeWidth="2"
            fill="none"
          />
          <path d="M0 630 H360 V750 H750" stroke="#4CD9E8" strokeWidth="2" fill="none" />
          <circle cx="280" cy="180" r="6" fill="#4CD9E8" />
          <circle cx="600" cy="450" r="6" fill="#4CD9E8" />
        </svg>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#4CD9E8",
            marginBottom: 16,
          }}
        >
          Electrical Engineer by Degree · Developer by Craft
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#EDEFF5",
            marginBottom: 20,
          }}
        >
          Eman Atia
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9AA3B8" }}>
          Front-End Developer — React · Next.js · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
