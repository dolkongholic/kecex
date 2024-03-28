"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
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

const location = "기업형 교육";

const Course03Client = () => {
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
                발주처의 현황, 요구, 이슈, 문제점을 진단, 분석하여 가장 효과적인 방폭 교육 개발 및 교육을 통해 
                해당 현장에서 즉시 투입 가능한 현장 기술 인력 양성
              </span>
            </div>
          </div>

          <ContentSubTitle title="교육대상" />
          <div className="w-full mb-[40px]">
          <div className="flex flex-col justify-center items-start p-[20px] md:border border-gray w-full">
              <span>
                육/해양 플랜트 관련 방폭 설계 및 시운전, 유지관리 업무 담당자
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                <span>
                  없음
                </span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="교육 비용" />
              <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                <span>
                  별도 협의
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="교육 혜택" />
              <div className="flex flex-col justify-start items-start h-[102px] p-[20px] border border-gray w-full leading-[30px]">
                <span>
                  교육 수료증 발급<br/>
                  (추후 전자경력 카드 발급)
                </span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="기대효과" />
              <div className="flex flex-col justify-start items-start h-[102px] p-[20px] border border-gray w-full leading-[30px]">
                <span>
                  안전한 작업환경 유지를 위해 정확한 안전 지식과 숙련된 방폭기술습득을 통해 
                  산업현장에서 발생하는 재해사고를 미연에 방지
                </span>
              </div>
            </div>
          </div>
          
          <ContentSubTitle title="교육 시간별 세부 내용" />
          <div className="w-full border border-[#ccc] flex">
            <div className="w-[180px] text-[16px] flex flex-col justify-center items-center font-medium bg-[#e8e8e8] text-center">
              교육시간 : <br/>
              협의 후 결정
            </div>
            <div className="text-[16px] font-medium border-x border-[#ccc]">
              <div className="w-[180px] h-[75px] bg-lightgray flex flex-col justify-center items-center border-b border-[#ccc] text-center font-bold relative">
                Safety procedure<br/>
                안전작업절차 
              </div>
              <div className="w-[180px] h-[75px]  flex flex-col justify-center items-center relative text-secondary">
                방폭 기본설계
                <div className="absolute -bottom-[11px] left-[calc(50% - 11px)] bg-lightgray  border-[#ccc] rounded-full w-[22px] h-[22px] flex flex-col justify-center items-center">
                  <RiArrowDownSLine className="w-[20px] h-[20px] absolute text-secondary" />
                </div>
              </div>
              <div className="w-[180px] h-[75px]  flex flex-col justify-center items-center relative">
                위험장소 구분
                <div className="absolute -bottom-[11px] left-[calc(50% - 11px)] border border-[#ccc] rounded-full w-[22px] h-[22px] flex flex-col justify-center items-center">
                  <RiArrowDownSLine className="w-[20px] h-[20px] absolute text-[#60B86F]" />
                </div>
              </div>
              <div className="w-[180px] h-[75px]  flex flex-col justify-center items-center relative">
                장비 선정
                <div className="absolute -bottom-[11px] left-[calc(50% - 11px)] border border-[#ccc] rounded-full w-[22px] h-[22px] flex flex-col justify-center items-center">
                  <RiArrowDownSLine className="w-[20px] h-[20px] absolute text-[#60B86F]" />
                </div>
              </div>
              <div className="w-[180px] h-[75px] flex flex-col justify-center items-center relative">
                시공 및 시험
                <div className="absolute -bottom-[11px] left-[calc(50% - 11px)] border border-[#ccc] rounded-full w-[22px] h-[22px] flex flex-col justify-center items-center">
                  <RiArrowDownSLine className="w-[20px] h-[20px] absolute text-[#60B86F]" />
                </div>
              </div>
              <div className="w-[180px] h-[75px] flex flex-col justify-center items-center">
                검사 및 유지보수
              </div>
            </div>
            <ul className="w-full">
              <li className="w-full h-[75px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6 font-bold bg-lightgray">
                설비 주기에 따른 교육 과정
              </li>
              <li className="w-full h-[75px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                위험 지역에서의 방폭 기본 원리 과정
              </li>
              <li className="w-full h-[75px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                위험 지역 구분 과정
              </li>
              <li className="w-full h-[75px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                위험 지역 내 전기 설비 설계 과정
              </li>
              <li className="w-full h-[75px] flex flex-col justify-center items-start border-b border-[#ccc] pl-6">
                방폭 장비, 배선 설치 및 전기 설비 테스트
              </li>
              <li className="w-full h-[75px] flex flex-col justify-center items-start pl-6">
                위험 지역에서의 장비 유지보수 및 정밀 검사
              </li>
            </ul>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Course03Client;
