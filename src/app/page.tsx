"use client";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<string | null>(null);

  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <Content menu={menu} setMenu={setMenu} />
      <Footer />
    </div>
  );
}
