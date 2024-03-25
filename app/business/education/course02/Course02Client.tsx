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

        <section className="py-[20px] md:pl-[40px] px-[20px] md:px-0 w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/education/course01/"}>
                <div className="h-12 border border-gray-200 border-b-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭기초교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 방폭인력양성 교육</span>
                </div>
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
            <div className="flex flex-col justify-center items-start h-[100px] md:px-[20px] md:border border-gray w-full">
              <span>
                국제ㆍ국내 법규 및 관련 표준, 지침에 따라 폭발 위험성이 존재하는
                산업현장에서는 각 공정별 적격자에 의한 작업 및 관리가 요구된다.
                <br /> 이에 따라 해당 교육을 통한 국제적 수준의 방폭 전문가 또는
                적격자를 양성하고 표준과 지침에 맞는 공정별 작업을 유도함으로써
                산업현장의 폭발 위험 예방 및 안전 시스템을 구축하기 위함
              </span>
            </div>
          </div>

          <ContentSubTitle title="교육대상" />
          <div className="w-full">
            <div className="w-full md:h-[270px] mb-[40px] border border-gray">
              <div className="hidden md:flex justify-center items-start w-full">
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center border-r border-gray">
                  분 류
                </div>
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center">
                  대 상
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    분류
                  </div>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center border-r border-gray">
                    &nbsp;
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    · 방폭시공기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    · 방폭검사기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    · 방폭설계기술자 I (폭발위험장소 구분)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    · 방폭설계기술자 II (방폭기기 선정)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    · 방폭정비기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    · 방폭감리기술자(시공/검사/설계 I,II 보유자 응시 가능)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    &nbsp;
                  </span>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    대상
                  </div>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 각 업무에 맞는 IECEx CoPC 국제방폭자격증 취득을 원하는 자
                  </span>
                  <span className="w-full h-[60px] px-[20px] flex justify-start items-center">
                    · 산업안전보건공단, 가스안전공사로부터 PSM,SMS 심사를 받는
                    기업체 설계, 공무 및 안전부서 근로자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-center py-[20px] items-start px-[20px] border border-gray w-full">
                <span>각 IECEx Unit 별 취득 자격 요건 참조</span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="교육내용 및 시간" />
              <div className="flex flex-col justify-center py-[20px] items-start px-[20px] border border-gray w-full">
                <span>각 IECEx Unit 별 교육 시간 참조</span>
              </div>
            </div>
          </div>

          <div className="w-full flex-col md:flex-row justify-center flex md:justify-between items-start mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="갱신교육기간" />
              <div className="flex flex-col justify-start py-[20px] items-start px-[20px] border border-gray w-full">
                <span>5년 (IEC 규정)</span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="CoPC Unit 별 교육과정" />
              <div className="flex flex-col justify-start py-[20px] items-start px-[20px] border border-gray w-full">
                <span>· 방폭시공기술자(IECEx CoPC Unit Ex 001 + 036)</span>
                <span>· 방폭검사기술자(IECEx CoPC Unit Ex 001 + 478)</span>
                <span>
                  · 방폭설계기술자 I - 폭발위험장소 구분 <br className="inline md:hidden"/>
                  &nbsp;&nbsp;&nbsp;(IECEx CoPC Unit Ex 001
                  + 002)
                </span>
                <span>
                  · 방폭설계기술자 II - 방폭기기 선정 <br className="inline md:hidden"/>
                  &nbsp;&nbsp;&nbsp;(IECEx CoPC Unit Ex 001 + 009)
                </span>
                <span>· 방폭정비기술자 (IECEx CoPC Unit Ex 001 + 005)</span>
                <span>· 방폭감리기술자 (IECEx CoPC Unit Ex 001 + 010)</span>
              </div>
            </div>
          </div>

          <div className="w-full flex-col md:flex-row justify-center flex md:justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="혜택" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>수료증</span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="발급비용" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>IECEx Cert 발급 비용 참조</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Course02Client;
