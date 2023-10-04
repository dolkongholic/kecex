"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image
import Picceo from "../../../../../public/img/pages/introduce/intro_ceo.png";
import Image from "next/image";

const MainList = [
  {
    title: "일반현황",
    url: "#",
    sub: [
      { title: "CEO 인사말", url: "/introduce/common/ceo" },
      { title: "비전", url: "/introduce/common/vistion" },
      { title: "연혁", url: "/introduce/common/histort" },
      { title: "CI", url: "/introduce/common/ci" },
    ],
  },
  {
    title: "조직안내",
    url: "#",
    sub: [
      { title: "조직도", url: "/introduce/group/group" },
      { title: "부서소개", url: "/introduce/group/introduce" },
    ],
  },
  {
    title: "찾아오시는 길",
    url: "/introduce/map",
    sub: null,
  },
];

const location = "비전및연혁";

export default function VisionPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("일반현황");

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
                <div className="w-full h-[170px] bg-gradient-to-tl bg-secondary  flex justify-center items-center text-center text-white text-[25px] font-bold">
                  협회소개
                </div>
                <div className="w-[240px] border-b-white border-b-[40px] border-l-[240px] border-l-secondary -translate-y-[40px]"></div>
                <div className="flex flex-col w-full -translate-y-[20px]">
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="flex flex-col text-title text-black w-full h-[400px] p-[40px] bg-lightgray">
            <p>안녕하십니까?</p>
            <p>한국방폭협회 홈페이지를</p>
            <p>방문해 주신 여러분 반갑습니다.</p>
          </div>
          <div className="flex flex-col space-y-[20px] text-base text-white w-full h-[300px] p-[40px] bg-superdarkgray ">
            <p>
              한국방폭협회는 방폭 교육 및 설계, 시공, 감리 및 인증 서비스 등에
              대한 기술개발 및 관리유지 능력을 향상시켜 방폭산업에 건전한 발전과
              사업 육성을 도모하고, 국민의 생명 및 재산의 보호에 기엽함을
              목적으로 설립되었습니다.
            </p>
            <p>
              앞으로도 국민의 생명 및 재산을 보호하는 사회 안전망으 ㅣ일원이라는
              소명의식을 가지고 정부로부터 수탁된 업무를 수행함에 있어 그 역할과
              책임을 다함은 물론 개선방안을 강구하여 좀 더 편리하고 합리적인
              수탁업무 절차가 되도록 발전시켜 나아가겠습니다.
            </p>
            <p>
              아울러 신규 사업 개척으로 협회의 경쟁력을 제고하고, 자체점검에
              대한 제도 개선추진과 회원사의 요구에 부응하는 다양한 지원대책을
              강구하여 방폭산업 발전을 위해 최선을 다하겠습니다.
            </p>
          </div>
          <div className="-translate-y-[564px] translate-x-[612px]">
            <Image src={Picceo} alt="ceo" />
          </div>
          <div className="-translate-y-[620px] translate-x-[300px] text-black">
            <p>사단법인 한국방폭협회 공동회장</p>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
