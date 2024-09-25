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
      { title: "방폭교육 과정", url: "/business/education/course01" },
      { title: "산업안전 교육", url: "/business/education/course02" },
      { title: "위험성 평가 교육", url: "/business/education/course03" },
      { title: "정량적위험성평가 교육", url: "/business/education/course04" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "정량적위험성평가 교육";

const Course04Client = () => {
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
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              교육 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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
          <ul className="flex md:hidden flex-wrap w-full py-[20px] md:px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/education/course01/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center">
                  <span> 방폭교육 과정</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course02/"}>
                <div className="h-12 border border-gray-200 border-b-0 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 산업안전 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course03/"}>
                <div className="h-12 border border-r-0 border-gray-200 flex flex-col justify-center items-center cursor-default">
                    <span> 위험성평가 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 정량적위험성평가 교육</span>
                </div>
            </li>
          </ul>

        {/* 1. 초급 과정 (경영자 과정)*/}
        <div className={`w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">1. 초급 과정 (경영자 과정)</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                경영자들이 정량적위험성평가(QRA)의 기본 개념과 중요성을 이해하고, 사업장의 안전관리 체계를 효과적으로 구축할 수 있도록 지원합니다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                공장장, 경영자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>
                  <h5 className="font-semibold">1.	안전관리 패러다임의 변화 및 관련 법규 (50분)</h5>
                    <p className="pl-5">·	법규 위주에서 위험성 평가에 의한 자율 위험 관리로의 변화</p>
                    <p className="pl-5">·	QRA의 개념과 중요성</p> 
                </li>
                <li>
                  <h5 className="font-semibold mt-1">2.	허용 위험 범위 및 위험 경감 대책 사례 (50분)</h5>
                    <p className="pl-5">·	허용 위험의 정의와 설정 방법</p>
                    <p className="pl-5">·	위험 경감 대책 사례 연구</p> 
                </li>
                <li>
                  <h5 className="font-semibold mt-1">3.	위험성 평가의 목적 및 단위 공장 내 위험 발견 (50분)</h5>
                    <p className="pl-5">·	위험성 평가의 목적과 필요성</p>
                    <p className="pl-5">·	단위 공장 내 위험 요소 발견 방법</p> 
                </li>
                <li>
                  <h5 className="font-semibold mt-1">4.	사고 시나리오 작성 및 빈도 분석 (50분)</h5>
                    <p className="pl-5">·	잠재적 사고 시나리오 작성 방법</p>
                    <p className="pl-5">·	사고 발생 빈도 분석 방법</p> 
                </li>
                <li>
                  <h5 className="font-semibold mt-1">5.	사고 피해 예측 및 위험 표현 (50분)</h5>
                    <p className="pl-5">·	화재, 폭발 및 독성물질 누출 시 피해 예측 방법</p>
                    <p className="pl-5">·	위험 표현 및 허용 위험과의 비교</p> 
                </li>
                <li>
                  <h5 className="font-semibold mt-1">6.	위험 경감 대책 수립 및 적용 (50분)</h5>
                    <p className="pl-5">·	사고 빈도 및 피해를 최소화하기 위한 대책 수립</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">7.	사례 연구 및 적용 방안 토론 (50분)</h5>
                    <p className="pl-5">·	사례 연구를 통한 실무 적용 방안 논의</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">8.	질의 응답 (50분)</h5>
                    <p className="pl-5">·	교육 내용에 대한 질의응답 및 토론</p> 
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>8시간 (1일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    200,000원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 중급 과정 (실무자 과정) */}
        <div className={` w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">2. 중급 과정 (실무자 과정)</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                실무자들이 정량적위험성평가(QRA)의 세부적인 방법론과 실무 적용 방법을 학습하여, 실제 현장에서 위험 평가와 관리를 효과적으로 수행할 수 있도록 지원합니다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                공정안전설계자, 환경·안전·보건 관리자, 공정 운전자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
            <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>
                  <h5 className="font-semibold">1.	경영자 과정 1교시와 동일 (50분)</h5>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">2.	경영자 과정 2교시와 동일 (50분)</h5>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">3.	공정위험 발견 (HAZID, HAZOP) 및 사고 사례 (50분)</h5>
                    <p className="pl-5">·	공정 위험 요소 발견 기법</p>
                    <p className="pl-5">·	HAZID, HAZOP 기법 소개 및 사고 사례 분석</p> 
                </li>
                <li>
                  <h5 className="font-semibold mt-1">4.	시나리오 작성 방법 (50분)</h5>
                    <p className="pl-5">·	잠재적 사고 시나리오 작성 기법</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">5.	빈도 분석 (50분)</h5>
                    <p className="pl-5">·	사고 발생 빈도 분석 방법</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">6.	피해 분석 (50분)</h5>
                    <p className="pl-5">·	화재, 폭발 및 독성물질 누출 시 피해 예측 기법</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">7.	위험 표현 및 비교, 위험 경감 대책 수립 및 위험 감시 (50분)</h5>
                    <p className="pl-5">·	위험 표현 방법 및 허용 위험과의 비교</p>
                    <p className="pl-5">·	위험 경감 대책 수립 및 위험 감시 방법</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">8.	질의 응답 (50분)</h5>
                    <p className="pl-5">·	교육 내용에 대한 질의응답 및 토론</p> 
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>8시간 (1일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    200,000원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>          

        {/* 3. 고급 과정 (심화 과정) */}
        <div className={` w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">3. 고급 과정 (심화 과정)</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                심화된 정량적위험성평가(QRA) 기법과 실습을 통해, 복잡한 위험 요소를 평가하고 관리할 수 있는 능력을 배양합니다. 또한, 사고빈도 및 피해 예측 실습을 통해 실무 적용 능력을 강화합니다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                중급 과정을 이수한 자, 위험성 평가 담당자, 고급 위험 관리 전문가
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
            <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>
                  <h5 className="font-semibold">1.	실무자 과정 1~8교시 내용 (Day 1)</h5>
                  <p className="pl-5">·	실무자 과정 전반 복습 및 심화 학습</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">2.	사고 빈도 분석 실습 (Day 2)</h5>
                  <p className="pl-5">·	Failure Data 및 ETA를 활용한 사고 빈도 분석 실습</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">3.	사고 피해 예측 실습 (Day 3)</h5>
                    <p className="pl-5">·	Pool Fire, Jet Fire, Flash Fire, VCE, BLEVE, 독성가스 누출 시 피해 예측 실습</p>
                </li>
                <li>
                  <h5 className="font-semibold mt-1">4.	위험 경감 대책 적용 및 질의 응답, 토론 (Day 4)</h5>
                    <p className="pl-5">·	위험 경감 대책 적용 실습</p>
                    <p className="pl-5">·	질의 응답 및 토론을 통한 실무 적용 방안 논의</p>
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>32시간 (4일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    800,000원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>           

        </section>
      </main>
    </section>
  );
};

export default Course04Client;
