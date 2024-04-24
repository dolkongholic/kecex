"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import PicCircle from "@/public/img/icon/content_icon_circle.png";
import PicConsulting from "@/public/img/pages/business/consulting.png";
import PicConsulting_M from "@/public/img/pages/business/consulting_m.png";
import PicBusiness_03 from "@/public/img/page_top/business_03.jpg"

const MainList = [
  {
    title: "회원",
    url: "#",
    sub: [
      { title: "회원가입", url: "/business/member/join" },
      { title: "회원회칙", url: "/business/member/rule" },
      { title: "경력관리", url: "/business/member/career" },
      { title: "경력수첩", url: "/business/member/careercard" },
    ],
  },
  {
    title: "교육",
    url: "#",
    sub: [
      { title: "방폭기초교육", url: "/business/education/course01" },
      { title: "방폭인력양성 교육", url: "/business/education/course02" },
      { title: "기업형 교육", url: "/business/education/course03" },
      // { title: "교육개발", url: "/business/education/develop" },
      { title: "CoPC 과정", url: "/business/education/copc" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      // { title: "방폭기기선정", url: "/business/consulting/equipment" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "PSM";

const PSMClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("컨설팅");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_03}
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
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              컨설팅 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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
                <SubNavHeader title={"사업안내"} />
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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/consulting/inspection/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center cursor-default">
                  <span> 방폭사전진단</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> PSM</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/consulting/sapa/"}>
                <div className="h-12 border border-gray-200 border-r-0 border-t-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 중대재해처벌법</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/consulting/danger/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 위험성 평가</span>
                </div>
              </Link>
            </li>
          </ul>
              <ContentSubTitle title="PSM 컨설팅" />
              <ul className="-translate-y-[20px] text-[15px] mb-5 w-full">
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      01
                    </div>
                    <p className="ml-3">공정안전보고서(PSM) 작성</p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      02
                    </div>
                    <p className="ml-3">PSM 운영 및 이행상태평가 컨설팅</p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      03
                    </div>
                    <p className="ml-3">PSM 변경관리 컨설팅</p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      04
                    </div>
                    <p className="ml-3">
                      PSM 자체감사 컨설팅<br className="md:hidden"/>
                      (점검 면제용 포함)
                    </p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      05
                    </div>
                    <p className="ml-3">
                      공정위험성평가 컨설팅<br className="md:hidden"/>
                      (HAZOP, K-PSR, CHECKLIST,
                      <br />
                      JSA, 빈도, 강도범)
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      06
                    </div>
                    <p className="ml-3">
                      PSM 운영 System 구축<br className="md:hidden"/>
                      (Web 전산 프로그램)
                    </p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      07
                    </div>
                    <p className="ml-3">
                      폭발위험장소 산정(2D or 3D Scan) <br className="md:hidden"/>
                      컨설팅
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 hidden md:flex items-center">
                        &nbsp;
                  </div>
                </li>
              </ul>


        </section>
      </main>
    </section>
  );
};

export default PSMClient;
