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
import PicCircle from "../../../../../public/img/icon/content_icon_circle.png";
import PicConsulting from "../../../../../public/img/pages/business/consulting.png";

const MainList = [
  {
    title: "회원",
    url: "#",
    sub: [
      { title: "회원가입", url: "/business/member/join" },
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
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      { title: "방폭기기선정", url: "/business/consulting/equipment" },
    ],
  },
];

const location = "교육개발";

export default function DevelopPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("교육");

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

      <main className="w-[1400px] flex justify-between items-start m-auto">
        <section className="flex flex-col justify-start items-center">
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ContentSubTitle title="교육목적" />
          <div className="w-full px-[20px] mb-[40px]">
            <div className="flex flex-col justify-center items-start h-[80px] px-[20px] border border-gray w-full">
              <span>
                방폭 기술을 세분화하여 산업체가 요구하는 질 높고 다양한 방폭
                인력을 양성하기 위함
              </span>
            </div>
          </div>

          <ContentSubTitle title="교육대상" />
          <div className="w-full px-[20px]">
            <div className="w-full h-[270px] mb-[40px] border border-lightgray">
              <div className="flex justify-center items-start w-full">
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center border-r border-gray">
                  분 류
                </div>
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center">
                  대 상
                </div>
              </div>
              <div className="flex justify-between items-start w-full">
                <div className="w-1/2 flex flex-col justify-start items-center">
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
                <div className="w-1/2 flex flex-col justify-start items-center">
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

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[90px] px-[20px] border border-gray w-full">
                <span>
                  일반전기공사업 5년 경력자 / 관련 학과 학사 학위 소지자 /{" "}
                  <br />
                  2년제 전공 및 2년 이상 경력자 / 3년제 전공 및 1년 이상 경력자
                </span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="교육내용 및 시간" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[90px] px-[20px] border border-gray w-full">
                <span>
                  24시간 (추후 내용 추가) <br />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="갱신교육기간" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[140px] px-[20px] border border-gray w-full">
                <span>5년 (표준 갱싱 주기 반영, 실습교육 및 평가 제외)</span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="발급조건" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[140px] px-[20px] border border-gray w-full">
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
          <div className="w-full px-[20px]">
            <div className="w-full h-[270px] mb-[40px] border border-lightgray">
              <div className="flex justify-center items-start w-full">
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center border-r border-gray">
                  분 류
                </div>
                <div className="w-1/2 h-[40px] bg-gray flex justify-center items-center">
                  대 상
                </div>
              </div>
              <div className="flex justify-between items-start w-full">
                <div className="w-1/2 flex flex-col justify-start items-center">
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
                <div className="w-1/2 flex flex-col justify-start items-center">
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
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center">
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="혜택" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>경력수첩 발급 (추후 전자경력 카드 발급)</span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="발급비용" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>경력 수첩 5만원</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
