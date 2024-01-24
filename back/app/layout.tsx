"use client";
import { Nunito } from "next/font/google";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
// import getCurrentUser from "./actions/getCurrentUser";
import InsertMainBanner from "./components/modals/InsertMainBanner";

import { Noto_Sans_KR } from "next/font/google";
import Footer from "./components/Footer";
import { useState } from "react";
import { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";

const font = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentUser = await getCurrentUser();
  const currentUser: any = [];
  const [menu, setMenu] = useState<string | null>(null);
  return (
    <html lang="kr">
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
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <InsertMainBanner />
          <Navbar currentUser={currentUser} menu={menu} setMenu={setMenu} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
