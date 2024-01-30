import Providers from "../components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import ToasterProvieder from "./providers/ToasterProvider";
import ClientOnly from "@/components/ClientOnly";
import InsertMainBanner from "../components/modal/InsertMainBanner";
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
      <head>
        <meta
          name="naver-site-verification"
          content="7429e7d93e93ff83dc0e8772f750d750588f7798"
        />
        <title>한국방폭협회</title>
        <meta name="description" content="사단법인 한국방폭협회"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="한국방폭협회"></meta>
        <meta property="og:description" content="사단법인 한국방폭협회"></meta>
        {/* <meta property="og:image" content="http://www.mysite.com/myimage.jpg"></meta> */}
        <meta property="og:url" content="https://www.kecex.or.kr"></meta>
        <link
          href="https://webfontworld.github.io/kopus/KoPubWorldBatang.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${inter.className} `}>
        <ClientOnly>
          <ToasterProvieder />
          <InsertMainBanner />
          <Providers>{children}</Providers>
        </ClientOnly>
      </body>
    </html>
  );
}
