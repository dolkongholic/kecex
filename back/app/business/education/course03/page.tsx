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

const location = "기업형 교육";

export default function Course03Page() {
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
                Plant 제작 및 개조 공사 시 작업자, 관리자의 맞춤형 교육을 통해
                국내외 법규 및 표준, 공사 시방서에 맞는 제작현장을 구성함으로써
                재작업으로 발생 되는 Loss 제거 및 고객(발주사)의 요구조건을
                충족시키고 나아가 경쟁력을 확보를 통한 국가경제에 이바지하기
                위함
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
              <div className="flex  justify-between items-start w-full">
                <div className="w-1/2 flex h-[200px] flex-col justify-start items-center border-r border-gray">
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center ">
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
                </div>
                <div className="w-1/2 flex flex-col justify-start items-center">
                  <span className="w-full h-[200px] pl-[20px] flex justify-start items-center">
                    석유화학, 조선, 해양, 반도체 등 Plant 제작 및 공정 설비의
                    개조 작업 등 Project 성 공사 수주를 받거나 진행하는 기업체
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="자격요건" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[90px] px-[20px] border border-gray w-full">
                <span>기업체에서 선정 한 인원</span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="교육내용 및 시간" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[90px] px-[20px] border border-gray w-full">
                <span>기업체의 요구 및 필요에 따라 지정</span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="갱신교육기간" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[140px] px-[20px] border border-gray w-full">
                <span>공사기간 내 적용</span>
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
                  <span className="w-full h-[30px] pl-[20px] flex justify-start items-center border-r border-gray">
                    기업체의 상황과 필요에 따라 구성
                  </span>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-center">
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
                <span>수료증 및 Project 별 교육 이수 스티커 발급</span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="발급비용" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[70px] px-[20px] border border-gray w-full">
                <span>-</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
