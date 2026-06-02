import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const imageData = readFileSync(
    path.join(process.cwd(), "public", "joseph.jpg.PNG")
  );
  const base64 = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64}
          width={32}
          height={32}
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
