"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

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
      { title: "교육개발", url: "/business/education/develop" },
      { title: "CoPC 과정", url: "/business/education/copc" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      // { title: "방폭기기선정", url: "/business/consulting/equipment" },
      { title: "산업진단, 컨설팅", url: "/business/consulting/industry" },
    ],
  },
];

const location = "방폭기초교육";

const Course01Client = () => {
  const [pageMenu, setPageMenu] = useState<any>("교육");

  return (
    <section>
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

        <section className="py-[20px] px-[20px] md:px-0 md:pl-[40px] w-full flex flex-col justify-start items-start">
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
          <div className="w-full md:px-[20px] mb-[40px]">
            <div className="flex flex-col justify-center items-start h-[80px] md:px-[20px] md:border border-gray w-full">
              <span>
                폭발위험성이 존재하는 각 산업내 종사자들의 방폭안전관리에 관한
                업무수행능력과 자질을 향상시켜 방폭설비의 안정적 운용으로 국민의
                생명과 재산을 보호하기 위함
              </span>
            </div>
          </div>

          <ContentSubTitle title="교육대상" />
          <div className="w-full">
            <div className="w-full md:h-[270px] mb-[40px] border border-gray">
              <div className="hidden md:flex justify-center items-start w-full">
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center border-r border-gray font-medium">
                  분 류
                </div>
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center font-medium">
                  대 상
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    분류
                  </div>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    &nbsp;
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    · 방폭시공기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    · 방폭검사기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    · 방폭설계기술자 I (폭발위험장소 구분)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    · 방폭설계기술자 II (방폭기기 선정)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    · 방폭정비기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
                    · 방폭감리기술자(시공/검사/설계 I,II 보유자 응시 가능)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center md:border-r border-gray">
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
                    · 방폭 시공 및 관리 업무를 수행하는 자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭 검사 및 관리 업무를 수행하는 자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 폭발위험장소 구분 및 관리 업무를 수행하는 자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭 기기 선정 및 관리 업무를 수행하는 자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭 기기 수리, 정비 및 관리 업무를 수행하는 자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭 감리 업무를 수행하는 자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>없음</span>
              </div>
            </div>
            <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="교육내용 및 시간" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>
                  5시간
                  <br />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-full md:w-[49%] flex flex-col">
              <ContentSubTitle title="갱신교육기간" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>3년(기관 코드 및 가이드 갱신 주기 반영)</span>
              </div>
            </div>
          </div>

          <ContentSubTitle title="교육내용 및 시간" />
          <div className="w-full">
            <div className="w-full md:h-[220px] mb-[40px] border border-lightgray">
              <div className="hidden md:flex justify-center items-start w-full">
                <div className="w-1/5 h-[40px] bg-gray flex justify-center items-center border-r border-gray">
                  일 정
                </div>
                <div className="w-3/5 h-[40px] bg-gray flex justify-center items-center">
                  교육 내용
                </div>
                <div className="w-1/5 h-[40px] bg-gray flex justify-center items-center">
                  교육시간
                </div>
              </div>
              <div className="md:flex justify-between items-start w-full">
                <div className="md:w-1/5 flex flex-col justify-start items-center md:h-[180px]">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    일정
                  </div>
                  <span className="w-full h-full flex justify-center items-center border-r border-gray py-7 md:py-0">
                    이론 교육
                  </span>
                </div>
                <div className="md:w-3/5 flex flex-col justify-center items-center md:h-[180px] border-r border-gray">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center mb-5">
                    교육 내용
                  </div>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭 관련 국내 산업안전 보건법
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 폭발위험이 있는 환경에서 안전 작업 절차
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 화재 및 폭발 이론
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭 이론(기본) - 정의, 방폭 기술, 방폭 규정 등
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭전기기계, 기구 인증 및 표기
                  </span>
                </div>
                <div className="md:w-1/5 flex flex-col justify-center items-center md:h-[180px] mt-5 md:mt-0">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    교육 시간
                  </div>
                  <span className="w-full h-[70px] md:h-[20px] flex justify-center items-center">
                    5시간
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:flex justify-between items-center mb-[40px]">
            <div className="md:w-[49%] flex flex-col">
              <ContentSubTitle title="혜택" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>교육 수료증 발급 (추후 전자경력 카드 발급)</span>
              </div>
            </div>
            <div className="md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="발급비용" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>-</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Course01Client;
