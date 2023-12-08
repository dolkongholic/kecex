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

const location = "비전/미션";

export default function VisionPage() {
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
          <ContentSubTitle title="비전" />
          <p className="px-[30px]">
            한국방폭협회는 방폭기술에 대한 연구 개발과 산업안전의 기술기반의
            확대, 방폭전문인력의 양성, 방폭기술의 글로벌 경쟁력 확보, 일자리
            창출을 통해 선진안전 수준을 제고하며 방폭산업의 경제적 발전을
            고도화하고 관련기술인의 사회적 지위향상에 기여함을 그 목적으로 한다.
          </p>
          <div className="w-full p-[60px] flex justify-between items-center gap-2">
            <div className="w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 1
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">산업아전 기술기반의 확대</span>
              </div>
            </div>
            <div className="w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 2
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">방폭전문인력 양성</span>
              </div>
            </div>
            <div className="w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 3
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">방폭기술 글로벌 경쟁력 확보</span>
              </div>
            </div>
            <div className="w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 3
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">일자리 창출</span>
              </div>
            </div>
          </div>
          <Image src={PicVision} alt="vision" className="px-[30px]" />
          <ContentSubTitle title="미션" />
          <div className="w-full p-[60px] flex justify-between items-center">
            <div className="w-[90%] py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                MISSION
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">방폭 안전문화를 선도하는 기관</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
