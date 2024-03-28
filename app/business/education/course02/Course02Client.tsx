"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicBusiness_02 from "@/public/img/page_top/business_02.jpg"

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

const location = "방폭인력양성 교육";

const Course02Client = () => {
  const [pageMenu, setPageMenu] = useState<any>("교육");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_02}
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
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              교육 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
        <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 방폭기초교육</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course02/"}>
                <div className="h-12 border border-gray-200 border-b-0 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭인력양성 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course03/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 기업형 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/develop/"}>
                <div className="h-12 border border-l-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 교육개발</span>
                </div>
              </Link>
            </li>
            <li className="w-full">
              <Link passHref href={"/business/education/copc/"}>
                <div className="h-12 border border-t-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> CoPC 과정</span>
                </div>
              </Link>
            </li>
          </ul>
          <ContentSubTitle title="교육목적" />
          <div className="w-full mb-[40px]">
            <div className="flex flex-col justify-center items-start p-[20px] md:border border-gray w-full leading-[30px]">
              <span>
              폭발 위험 장소에서 전계장 설치 업무를 수행하는 현장기술자들을 위한 과정으로, 
              고객사 시방서 제공 시 시방서에 따라 현장 맞춤형 교육 제공. 방폭 기본, 설치 이론 및 실습 교육을 통해 
              방폭에 대한 개념 확립과 올바른 기기 설치를 통해 안전한 사업장을 구축
              </span>
            </div>
          </div>

          <ContentSubTitle title="교육대상" />
          <div className="w-full mb-[40px]">
          <div className="flex flex-col justify-center items-start p-[20px] md:border border-gray w-full">
              <span>
              폭발위험장소 내 현장 기술자 (방폭시공 기술자 등) 
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                <span>
                  방폭 기본 교육 이수 및 방폭 관련 경력 2년 이상
                  </span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="교육 비용" />
              <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                <span>
                  1인당 20만원 (교육비: 15만원 / 자재비: 5만원)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="교육 혜택" />
              <div className="flex flex-col justify-start items-start h-[132px] p-[20px] border border-gray w-full leading-[30px]">
                <span>
                  교육 수료증 발급<br/>
                  (추후 전자경력 카드 발급)
                </span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="기대효과" />
              <div className="flex flex-col justify-start items-start h-[132px] p-[20px] border border-gray w-full leading-[30px]">
                <span>
                  현장 기술자를 대상으로 폭발위험장소의 케이블 배선/결선, 방폭기기 설치, 
                  검사에 대한 교육을 통해, 시공 부적합을 최소화하여 재작업을 방지하며, 
                  시공 비용 절감의 효과를 기대할 수 있음.
                </span>
              </div>
            </div>
          </div>
          
          <ContentSubTitle title="교육 시간별 세부 내용" />
          <div className="w-full border border-[#ccc] flex">
            <div className="w-[80px] text-[18px] flex flex-col justify-center items-center font-medium bg-[#eeeeee]">
              8H
            </div>
            <div className="text-[18px] font-medium border-x border-[#ccc]">
              <div className="w-[80px] h-[195px] bg-lightgray flex flex-col justify-center items-center border-b border-[#ccc]">
                4H
              </div>
              <div className="w-[80px] h-[130px] bg-lightgray flex flex-col justify-center items-center">
                4H
              </div>
            </div>
            <ul className="w-full">
              <li className="w-full h-[65px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                화재이론 및 폭발 위험 장소 구분의 이해
              </li>
              <li className="w-full h-[65px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                방폭 기기의 형식 표시 기호, 방폭 원리 및 구조 이해
              </li>
              <li className="w-full h-[65px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                방폭기기 별 설치기준(d, e, i) 및 실제 부적합 사례 확인(PSM, SMS)
              </li>
              <li className="w-full h-[65px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                Sealing Device 실습 
              </li>
              <li className="w-full h-[65px] flex flex-col justify-center items-start pl-6">
                Double Compression Gland 실습, 설치 후 검사
              </li>
            </ul>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Course02Client;
