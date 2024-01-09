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

const location = "방폭기초교육";

export default function Course01Page() {
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
          <div className="w-full mb-[40px]">
            <div className="flex flex-col justify-center items-start h-[80px] px-[20px] border border-gray w-full">
              <span>
                폭발위험성이 존재하는 각 산업내 종사자들의 방폭안전관리에 관한
                업무수행능력과 자질을 향상시켜 방폭설비의 안정적 운용으로 국민의
                생명과 재산을 보호하기 위함
              </span>
            </div>
          </div>

          <ContentSubTitle title="교육대상" />
          <div className="w-full">
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
              <div className="flex flex-col justify-start py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>없음</span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="교육내용 및 시간" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>
                  4시간
                  <br />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="갱신교육기간" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>3년(기관 코드 및 가이드 갱신 주기 반영)</span>
              </div>
            </div>
          </div>

          <ContentSubTitle title="교육내용 및 시간" />
          <div className="w-full">
            <div className="w-full h-[220px] mb-[40px] border border-lightgray">
              <div className="flex justify-center items-start w-full">
                <div className="w-1/5 h-[40px] bg-gray flex justify-center items-center border-r border-gray">
                  일 정
                </div>
                <div className="w-2/5 h-[40px] bg-gray flex justify-center items-center">
                  교육 내용
                </div>
                <div className="w-2/5 h-[40px] bg-gray flex justify-center items-center">
                  교육시간
                </div>
              </div>
              <div className="flex justify-between items-start w-full">
                <div className="w-1/5 flex flex-col justify-start items-center h-[180px]">
                  <span className="w-full h-full flex justify-center items-center border-r border-gray">
                    이론 교육
                  </span>
                </div>
                <div className="w-2/5 flex flex-col justify-center items-center h-[180px] border-r border-gray">
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
                    · 방폭전기기계,기구 인증 및 표기
                  </span>
                </div>
                <div className="w-2/5 flex flex-col justify-center items-center h-[180px]">
                  <span className="w-full h-[20px] pl-[20px] flex justify-start items-center">
                    4시간
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center mb-[40px]">
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="혜택" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
                <span>교육 수료증 발급 (추후 전자경력 카드 발급)</span>
              </div>
            </div>
            <div className="w-[49%] flex flex-col">
              <ContentSubTitle title="발급비용" />
              <div className="flex flex-col justify-start py-[20px] items-start h-[80px] px-[20px] border border-gray w-full">
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
