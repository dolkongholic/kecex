"use client";
import Header from "@/components/Header";
import Index from "@/components/Index";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<string | null>(null);

  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <Index />
      <Footer />
    </div>
  );
}
