"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicCeo from "@/public/img/page_top/ceo_top.jpg";

const MainList = [
  {
    title: "회원",
    url: "#",
    sub: [
      // { title: "회원가입", url: "/business/member/join" },
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
    // sub: [
    //   { title: "방폭사전진단", url: "/business/consulting/inspection" },
    //   { title: "PSM", url: "/business/consulting/psm" },
    //   { title: "중대재해처벌법", url: "/business/consulting/sapa" },
    //   { title: "위험성 평가", url: "/business/consulting/danger" },
    // ],
  },
];

const location = "교육개발";

const DevelopClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("교육");

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
              Home{" "}
              <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내{" "}
              <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              교육{" "}
              <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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
                <div className="h-12 border border-b-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭기초교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course02/"}>
                <div className="h-12 border border-b-0 border-gray-200 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
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
              <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                <span> 교육개발</span>
              </div>
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
            <div className="flex flex-col justify-center items-start h-[80px] md:px-[20px] md:border border-gray w-full">
              <span>
                방폭 기술을 세분화하여 산업체가 요구하는 질 높고 다양한 방폭
                인력을 양성하기 위함
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
                <div className="w-full md:w-1/2 md:h-[228px] flex flex-col justify-start items-center md:border-r border-gray">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    분류
                  </div>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭시공기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭검사기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭설계기술자 I (폭발위험장소 구분)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭설계기술자 II (방폭기기 선정)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭정비기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭감리기술자(시공/검사/설계 I,II 보유자 응시 가능)
                  </span>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
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
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:flex justify-between items-center mb-[40px]">
            <div className="md:w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-start py-[20px] items-start md:h-[90px] px-[20px] border border-gray w-full">
                <span>
                  일반전기공사업 5년 경력자 / 관련 학과 학사 학위 소지자 /{" "}
                  <br />
                  2년제 전공 및 2년 이상 경력자 / 3년제 전공 및 1년 이상 경력자
                </span>
              </div>
            </div>
            <div className="md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="교육내용 및 시간" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[90px] px-[20px] border border-gray w-full">
                <span>
                  24시간 (추후 내용 추가) <br />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:flex justify-between items-center mb-[40px]">
            <div className="md:w-[49%] flex flex-col">
              <ContentSubTitle title="갱신교육기간" />
              <div className="flex flex-col justify-start py-[20px] items-start md:h-[140px] px-[20px] border border-gray w-full">
                <span>5년 (표준 갱신 주기 반영, 실습교육 및 평가 제외)</span>
              </div>
            </div>
            <div className="md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="발급조건" />
              <div className="flex flex-col justify-start py-[20px] items-start md:h-[140px] px-[20px] border border-gray w-full">
                <span>
                  · 초급 : 방폭인력양성교육 이수자, 전문교육기관 60시간 이상
                  이수자
                </span>
                <span>
                  · 중급 : 경력수첩 초급 취득 후 방폭 관련 업무 5년 경력자
                </span>
                <span>
                  · 고급 : IECEx CoPC 보유 및 방폭 관련 업무 5년 경력자
                </span>
                <span>
                  · 특급 : IECEx CoPC Unit Ex 010 보유자 (방폭감리기술자 발급)
                </span>
              </div>
            </div>
          </div>

          <ContentSubTitle title="교육내용 및 시간" />
          <div className="w-full">
            <div className="w-full md:h-[261px] mb-[40px] border border-lightgray">
              <div className="hidden md:flex justify-center items-start w-full">
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center border-r border-gray">
                  분 류
                </div>
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center">
                  대 상
                </div>
              </div>
              <div className="md:flex justify-between items-start w-full">
                <div className="md:w-1/2 flex flex-col justify-start items-center border-r border-gray">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    분류
                  </div>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭시공기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭검사기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭설계기술자 I (폭발위험장소 구분)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭설계기술자 II (방폭기기 선정)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭정비기술자
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 방폭감리기술자(시공/검사/설계 I,II 보유자 응시 가능)
                  </span>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                </div>
                <div className="md:w-1/2 flex flex-col justify-start items-center">
                  <div className="w-full h-11 bg-darkgray flex md:hidden justify-center items-center">
                    대상
                  </div>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 180만원 (IECEx CoPC Unit Ex 001 + 036)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 140만원 (IECEx CoPC Unit Ex 001 + 478)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 100만원 (IECEx CoPC Unit Ex 001 + 002)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 100만원 (IECEx CoPC Unit Ex 001 + 009)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 170만원 (IECEx CoPC Unit Ex 001 + 005)
                  </span>
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    · 200만원 (IECEx CoPC Unit Ex 010)
                  </span>
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:flex justify-between items-center mb-[40px]">
            <div className="md:w-[49%] flex flex-col">
              <ContentSubTitle title="혜택" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>경력수첩 발급 (추후 전자경력 카드 발급)</span>
              </div>
            </div>
            <div className="md:w-[49%] flex flex-col mt-5 md:mt-0">
              <ContentSubTitle title="발급비용" />
              <div className="flex flex-col justify-center py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>경력 수첩 5만원</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default DevelopClient;
