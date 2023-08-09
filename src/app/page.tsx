"use client";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<string | null>(null);

  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
    </div>
  );
}
