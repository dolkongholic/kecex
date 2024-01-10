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
            <div className="flex justify-between h-[50px]">
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center border border-secondary text-subtitle">
                감사
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center bg-primary text-white text-subtitle">
                총회
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-cente text-subtitle">
                &nbsp;
              </div>
            </div>

            <div className="flex h-[70px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[50%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-subtitle">
                회장
              </div>
              <div className="w-1/5 h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center border border-secondary text-subtitle">
                이사회
              </div>
            </div>

            <div className="flex h-[70px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[50%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center border border-secondary text-subtitle">
                자문위원회
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-subtitle">
                사무국
              </div>
              <div className="w-1/5 h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-1/5 flex flex-col justify-center items-center h-[50px] text-center border border-secondary text-subtitle">
                <p>지역위원회</p>
                <p className="text-[13px]">(충남·여수·경기)</p>
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
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-r border-gray">
                &nbsp;
              </div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-gray">&nbsp;</div>
              <div className="w-[10%] border-t border-r border-gray">
                &nbsp;
              </div>
              <div className="w-[10%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-subtitle">
                기술관리
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-subtitle">
                방폭교육
              </div>
              <div className="w-1/5 flex justify-center items-center h-[50px] text-center bg-secondary text-white text-subtitle">
                방폭컨설팅
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="w-1/5 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>인증서 관리</span>
                <span>경력관리·홍보</span>
                <span>표준해석 및 최신화</span>
              </div>
              <div className="w-1/5 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>방폭기초교육</span>
                <span>방폭입력양성교육</span>
                <span>기업형교육</span>
                <span>교육개발</span>
              </div>
              <div className="w-1/5 flex flex-col space-y-[10px] justify-start items-center mt-[10px] text-center text-base">
                <span>방폭사전진단</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
