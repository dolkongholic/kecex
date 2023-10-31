"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image
import Picceo from "../../../../public/img/pages/introduce/intro_ceo.png";
import Image from "next/image";

const MainList = [
  {
    title: "교육신청",
    url: "/education/apply",
  },
  {
    title: "나의 학습활동",
    url: "/education/apply",
  },
];

const location = "교육신청";

export default function CeoPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("교육센터");

  return (
    <section>
      <Header menu={menu} setMenu={setMenu} />

      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              교육센터 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-[1400px] flex justify-between items-start m-auto">
        <section className="flex flex-col justify-start items-center">
          <div className=" bg-white flex justify-center item-start">
            <div className="w-full flex items-start">
              <div className="w-[240px] flex flex-col">
                <SubNavHeader title={"교육신청"} />
                <div className="flex flex-col w-full">
                  <SubNav
                    MainList={MainList}
                    pageMenu={pageMenu}
                    setPageMenu={setPageMenu}
                    location={location}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="flex justify-between w-full h-[50px] leading-[50px]">
            <div className="w-1/5 text-center h-full border border-gray">
              교육 신청
            </div>
            <div className="w-1/5 text-center h-full border border-gray">
              재교육 신청
            </div>
            <div className="w-1/5 text-center h-full border border-gray">
              재시험 신청
            </div>
            <div className="w-1/5 text-center h-full border border-gray">
              세미나 신청
            </div>
            <div className="w-1/5 text-center h-full border border-gray">
              컨설팅 신청
            </div>
          </div>
          <div className="flex flex-col text-title text-black w-full h-[400px] p-[40px] bg-lightgray">
            <p>안녕하십니까?</p>
            <p>한국방폭협회 홈페이지를</p>
            <p>방문해 주신 여러분 반갑습니다.</p>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
