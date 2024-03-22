"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicIntroduce_01 from "@/public/img/page_top/introduce_01.jpg"

// Image
import PicCheck from "@/public/img/icon/content_icon_check.png";
import PicVision from "@/public/img/pages/introduce/vision.png";

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

const VisionClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("일반현황");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicIntroduce_01}
            layout="fill"
            objectFit="cover"
            alt="item.title"
            className="object-cover"
          />
          <div className="bg-neutral-900/50 absolute w-full h-full left-0 top-0 z-20 text-center text-white font-medium text-[36px] leading-[200px]">
            {location}
          </div>
        </div>
      </figure>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
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

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
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

        <section className="px-[20px] md:px-0 md:py-[20px] md:pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full p-[20px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/introduce/common/ceo/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> CEO 인사말</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 비전/미션</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/history/"}>
                <div className="h-12 border border-r-0 border-t-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 연혁</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/ci/"}>
                <div className="h-12 border border-t-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> CI</span>
                </div>
              </Link>
            </li>
          </ul>
          <ContentSubTitle title="비전" />
          <p className="">
            한국방폭협회는 방폭기술에 대한 연구 개발과 산업안전의 기술기반의
            확대, 방폭전문인력의 양성, 방폭기술의 글로벌 경쟁력 확보, 일자리
            창출을 통해 선진안전 수준을 제고하며 방폭산업의 경제적 발전을
            고도화하고 관련기술인의 사회적 지위향상에 기여함을 그 목적으로 한다.
          </p>
          <div className="w-full space-y-4 md:space-y-0 md:py-[60px] md:flex justify-between items-center gap-2 mb-[40px] md:mb-0">
            <div className="md:w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray mt-[30px] md:mt-0">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 1
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">산업안전 기술기반의 확대</span>
              </div>
            </div>
            <div className="md:w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 2
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">방폭전문인력 양성</span>
              </div>
            </div>
            <div className="md:w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 3
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">방폭기술 글로벌 경쟁력 확보</span>
              </div>
            </div>
            <div className="md:w-1/4 py-[30px] flex flex-col justify-center items-center border border-gray">
              <div className="flex justify-center items-center mb-[20px]">
                VISION 4
              </div>
              <div className="flex justify-center items-center">
                <Image src={PicCheck} alt="check" width={20} height={20} />
                <span className="ml-[10px]">일자리 창출</span>
              </div>
            </div>
          </div>
          <Image src={PicVision} alt="vision" className="hidden md:block" />
          <ContentSubTitle title="미션" />
          <div className="w-full md:py-[60px] flex justify-center items-center">
            <div className="w-full md:w-[90%] py-[30px] flex flex-col justify-center items-center border border-gray">
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
    </section>
  );
};

export default VisionClient;
