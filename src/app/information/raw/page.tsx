"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const MainList = [
  {
    title: "관계법령",
    url: "/information/raw",
    sub: null,
  },
  {
    title: "카드뉴스",
    url: "/information/news",
    sub: null,
  },
];

const Items = [
  {
    id: 1,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 2,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 3,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 4,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 5,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 6,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 7,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 8,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
];

const location = "관계법령";

export default function RawPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("관계법령");

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
              정보공개 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"정보공개"} />
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
          <ContentTitle title="관계법령" />
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray">
            1/100 페이지 (전체 155건)
          </div>

          {Items.map((item, index) => (
            <Link
              key={index}
              passHref
              href={"./raw/detail/"}
              className="w-full"
            >
              <div
                className={`cursor-pointer flex justify-between items-center w-full h-[80px] border-b  leading-[80px] text-black text-base hover:text-secondary ${
                  index % 7 == 0 && index != 0 ? "border-black" : "border-gray"
                }`}
              >
                <div className="flex ">
                  <div className="w-[50px] text-center text-darkgray text-subtitle">
                    {item.id}
                  </div>
                  <div className="">{item.title}</div>
                </div>
                <div className="w-[50px] text-darkgray ">
                  <RiArrowRightSLine className="text-[26px]" />
                </div>
              </div>
            </Link>
          ))}
          <div className="w-full flex justify-center items-center h-[50px]">
            <div className="flex mr-[20px] cursor-pointer">
              <RiArrowLeftSLine className="text-[20px] pt-[3px]" />
            </div>
            <div className="flex space-x-[10px]">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index == 0 && "text-secondary font-bold"
                  } hover:text-secondary hover:font-bold cursor-pointer`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex ml-[20px] cursor-pointer">
              <RiArrowRightSLine className="text-[20px] pt-[3px]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
