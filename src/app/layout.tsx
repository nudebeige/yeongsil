import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./home.css";
import "./note.css";

const noto = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
  preload: false,
});

export const metadata: Metadata = {
  title: { default: "전기 도와주는 영실", template: "%s · 전기 도와주는 영실" },
  description: "집 전기, 어디가 이상해요? 전기를 몰라도 직접 보고 확인하고, 기사님께 정확히 말할 수 있게 도와주는 안내서.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
