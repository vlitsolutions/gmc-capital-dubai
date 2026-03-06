import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GMC Capital - Dubai Marketing Management & Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#0A1628",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                fontFamily: "Georgia, serif",
              }}
            >
              GMC
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#C9A84C",
                letterSpacing: "0.05em",
                marginLeft: 16,
                fontFamily: "Georgia, serif",
              }}
            >
              CAPITAL
            </span>
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.3em",
              color: "rgba(201,168,76,0.7)",
              textTransform: "uppercase",
              marginBottom: 48,
            }}
          >
            Dubai & Europe
          </div>
          <div
            style={{
              width: 80,
              height: 1,
              backgroundColor: "rgba(201,168,76,0.3)",
              marginBottom: 48,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Strategic Marketing Management & Consultancy
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
