"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image

const MainList = [
  {
    title: "일반현황",
    url: "#",
    sub: [
      { title: "CEO 인사말", url: "/introduce/common/ceo" },
      { title: "비전/미션", url: "/introduce/common/vistion" },
      { title: "연혁", url: "/introduce/common/history" },
      { title: "CI", url: "/introduce/common/ci" },
    ],
  },
  {
    title: "조직안내",
    url: "#",
    sub: [
      { title: "조직도", url: "/introduce/group/group" },
      // { title: "부서소개", url: "/introduce/group/introduce" },
    ],
  },
  {
    title: "찾아오시는 길",
    url: "/introduce/map",
    sub: null,
  },
];

const location = "조직도";

export default function GroupPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("조직안내");

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
              협회소개 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              일반현황 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"협회소개"} />
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
          <div className="w-full flex flex-col px-[120px] mt-[20px]">
            <div className="h-[120px] items-center">
              <ul className="flex justify-between">
                <li className="w-1/8 flex h-[40px] flex-col justify-between text-center">&nbsp;</li>
                <li className="w-1/4 flex h-[40px] flex-col justify-between text-center border-b border-gray">심의 및 승인</li>
                <li className="w-1/4 flex h-[40px] flex-col justify-between text-center border-b border-gray">계획 및 집행</li>
                <li className="w-1/4 flex h-[40px] flex-col justify-between text-center border-b border-gray">방폭지부 및 연구센터</li>
                <li className="w-1/8 flex h-[40px] flex-col justify-between text-center">&nbsp;</li>
              </ul>
            </div>
            <div className="flex justify-between h-[50px] items-center">
              <div className="w-1/6 flex h-[110px] flex-col justify-between text-center">
                <div className=" flex justify-center items-center h-[50px] text-center border border-secondary text-[18px]">
                  고문단
                </div>
                <div className=" flex justify-center items-center h-[50px] text-center bg-lightgray text-[18px]">
                  감사
                </div>
              </div>
              <div className="w-[36.6px] h-[50px] text-center text-subtitle">

              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center border border-secondary text-[18px]">
                운영위원
              </div>
              <div className="w-[36.6px] h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-primary text-white text-[18px]">
                회장
              </div>
              <div className="w-[36.6px] h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-1/6 flex-col justify-between items-center h-[110px] text-center border border-secondary text-[18px]">
                <p className="h-[50px] flex items-center justify-center">자문위원</p>
                <p className="h-[10px] text-base -ml-2 flex items-center justify-center"><span className="leading-9">o</span> 기술자문</p>
                <p className="h-[50px] text-base -ml-2 flex items-center justify-center"><span className="leading-9">o</span> 정책자문</p>
              </div>
              <div className="w-[36.6px] h-[50px] text-center text-subtitle">
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-cente text-subtitle">
                &nbsp;
              </div>
            </div>

            <div className="flex h-[70px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[50%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/4 flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-[18px]">
                부회장
              </div>
              <div className="w-1/4 h-[50px] text-center text-subtitle">
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center text-subtitle">
              &nbsp;
              </div>
            </div>

            <div className="flex h-[70px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[50%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-1/6 flex justify-center items-center h-[50px] text-cente text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/4 flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-[18px]">
                사무국장
              </div>
              <div className="w-1/4 h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-1/6 flex flex-col justify-center items-center h-[50px] text-center border border-secondary text-[18px]">
                <p>방폭협회 지부</p>
                <p className="text-[13px]">(경기·충청·경상·호남)</p>
              </div>
            </div>

            <div className="flex h-[50px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[50%]">&nbsp;</div>
            </div>

            <div className="flex h-[50px]">
              <div className="w-[10%]">&nbsp;</div>
              <div className="w-[10%] border-t border-l border-gray">
                &nbsp;
              </div>
              <div className="w-[10%] border-t border-gray border-r">&nbsp;</div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-r border-gray">
                &nbsp;
              </div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-gray border-r">&nbsp;</div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-r border-gray">
                &nbsp;
              </div>
              <div className="w-[10%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-[18px]">
                회원관리
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-[18px]">
                기술관리
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-[18px]">
                방폭교육
              </div>
              <div className="w-1/6 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-[18px]">
                방폭컨설팅
              </div>
              <div className="w-1/6 flex flex-col justify-center items-center h-[50px] text-center border border-secondary text-[18px]">
                <p>위험성평가 센터</p>
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="w-1/6 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>준회원</span>
                <span>일반회원</span>
                <span>정회원</span>
                <span>기업회원</span>
              </div>
              <div className="w-1/6 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>국내 Guide</span>
                <span>IECEX Guide</span>
                <span>방폭 인증 절차</span>
                <span>방폭기기 제작 Guide 등등</span>
              </div>
              <div className="w-1/6 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>방폭 기초/개념</span>
                <span>방폭구분도</span>
                <span>방폭기기 정비</span>
                <span>방폭기기 제작</span>
                <span>방폭 Auditing</span>
                <span>자격증 취득<br/><span className="text-[12px]">(수료증/수첩, IECEX)</span></span>
              </div>
              <div className="w-1/6 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>방폭설계자료 건전성 점검</span>
                <span>전계장 방폭수준점검</span>
                <span>방폭법규 준수방안</span>
                <span>방폭기기 정비 및 교체 방안 권고</span>
                <span>PSM/중처법 대비</span>
              </div>
              <div className="w-1/6 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>Hazard Analysis</span>
                <span>Loss Prevention</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
