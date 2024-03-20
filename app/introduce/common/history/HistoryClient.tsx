"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiArrowRightSLine } from "react-icons/ri";
import PicCeo from "@/public/img/page_top/ceo_top.jpg"

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

const HistoryClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("일반현황");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicCeo}
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

        <section className="py-[20px] pl-[40px] w-full hidden md:flex flex-col justify-start items-start">
          <ContentTitle title={location} />
            <div className="w-full px-[20px] h-[30px] flex mt-[40px]">
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
                2023.12
              </div>
              <div className="w-[30%] flex justify-start items-start mr-[10px] text-black pt-1">
                한국방폭협회 현판식,
              </div>
            </div>
            <div className="w-full px-[20px] h-[40px] flex">
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
              <div className="w-[30%] flex justify-start items-start mr-[10px] text-black">
                (재)울산테크노파크 업무 협약
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
                2023.11
              </div>
              <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
                전남여수공단협의회 업무협약 체결
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
                2023.10
              </div>
              <div className="w-[30%] flex justify-start items-center mr-[10px] text-black">
                선진 안전문화 확산 극대화 방안 세미나
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
                2023.05
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

        {/* -----------모바일 버전--------------- */}
        <section className="md:py-[20px] w-full flex md:hidden flex-col justify-start items-start text-[14px]">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/introduce/common/ceo/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> CEO 인사말</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/vistion/"}>
                <div className="h-12 border border-gray-200 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 비전/미션</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                    <span> 연혁</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/ci/"}>
                <div className="h-12 border border-t-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> CI</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="w-full px-[47px] h-[10px] flex justify-start items-center text-[16px] text-title text-secondary font-bold mt-[50px]">
              2023&apos;
          </div>
          <div className="w-full px-[20px] h-[30px] flex mt-[15px] border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              2023.12
            </div>
            <div className="w-[80%] flex justify-start items-start mr-[10px] text-black pt-1">
              한국방폭협회 현판식,
            </div>
          </div>
          <div className="w-full px-[20px] h-[40px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[80%] flex justify-start items-start mr-[10px] text-black">
              (재)울산테크노파크 업무 협약
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              2023.11
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              전남여수공단협의회 업무협약 체결
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              2023.10
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              선진 안전문화 확산 극대화 방안 세미나
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              2023.07
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              (사)한국방폭협회 국제안전세미나
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              2023.05
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              (사)한국방폭협회 설립 인가
            </div>
          </div>
          <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              2023.02
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              고용노동부 산하 협회 인가 추진
            </div>
          </div>

          <div className="w-full px-[47px] h-[10px] flex justify-start items-center text-[16px] text-title text-secondary font-bold mt-[40px]">
              2022&apos;
          </div>
            <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.12
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                울산테크노파크 협약
              </div>
            </div>
            <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.11
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국방폭협회 창립총회 및 세미나
              </div>
            </div>
            <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.10
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국조선해양기자재연구원 MOU체결
              </div>
            </div>
            <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.09
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국방폭산업안전연구회 준비위원 간담회 개최
              </div>
            </div>
            <div className="w-full px-[20px] h-[100px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.05
                <br />
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                헥사곤, 화학네트워크포럼 산업안전 및<br />
                방폭산업 발전 모색 세미나 개최
              </div>
            </div>
            <div className="w-full px-[20px] h-[150px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.04
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                울산과학대학교, 한국가스안전공사 울산본부,
                <br />
                한국산업인력공단 울산지사, <br />
                중소기업융합울산연합회,
                <br />
                공장장협의회 MOU체결
              </div>
            </div>
            <div className="w-full px-[20px] h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center mr-[10px]">
                2022.02
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국방폭산업안전연구회 창립총회
              </div>
            </div>
        </section>

      </main>
    </section>
  );
};

export default HistoryClient;
