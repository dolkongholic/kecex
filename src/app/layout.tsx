import Providers from "../components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { SessionProvider } from "next-auth/react";
const inter = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한국방폭협회 :: Kecex",
  description: "한국방폭협회",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className="text-[#757575]">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
