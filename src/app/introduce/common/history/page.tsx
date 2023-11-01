"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import PicCheck from "../../../../../public/img/icon/content_icon_check.png";
import PicVision from "../../../../../public/img/pages/introduce/vision.png";

const MainList = [
  {
    title: "일반현황",
    url: "#",
    sub: [
      { title: "CEO 인사말", url: "/introduce/common/ceo" },
      { title: "비전/미션", url: "/introduce/common/vistion" },
      { title: "연혁", url: "/introduce/common/history" },
      { title: "CI", url: "/introduce/common/ci" },
    ],
  },
  {
    title: "조직안내",
    url: "#",
    sub: [
      { title: "조직도", url: "/introduce/group/group" },
      // { title: "부서소개", url: "/introduce/group/introduce" },
    ],
  },
  {
    title: "찾아오시는 길",
    url: "/introduce/map",
    sub: null,
  },
];

const location = "연혁";

export default function HistoryPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("일반현황");

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
              협회소개 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              일반현황 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"협회소개"} />
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="w-full px-[20px] h-[50px] flex mt-[40px]">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              2023&apos;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              2023.07
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              (사)한국방폭협회 국제안전세미나
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              2023.06
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              (사)한국방폭협회 설립 인가
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              2023.02
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              고용노동부 산하 협회 인가 추진
            </div>
          </div>
          <div className="w-full px-[20px] h-[150px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              울산테크노파크 협약
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.12
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              2022&apos;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold px-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              한국방폭협회 창립총회 및 세미나
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.11
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              한국조선해양기자재연구원 MOU체결
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.10
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              한국방폭산업안전연구회 준비위원 간담회 개최
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.09
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[100px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              헥사곤, 화학네트워크포럼 산업안전 및<br />
              방폭산업 발전 모색 세미나 개최
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.05
              <br />
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[150px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              울산과학대학교, 한국가스안전공사 울산본부,
              <br />
              한국산업인력공단 울산지사, <br />
              중소기업융합울산연합회,
              <br />
              공장장협의회 MOU체결
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.04
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex">
            <div className="w-[30%] flex justify-end text-right items-center mr-[10px] text-black">
              한국방폭산업안전연구회 창립총회
            </div>
            <div className="w-[10%] flex justify-end text-right items-center mr-[10px]">
              2022.02
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold border-r border-gray px-[10px] ">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[10%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
              &nbsp;
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
