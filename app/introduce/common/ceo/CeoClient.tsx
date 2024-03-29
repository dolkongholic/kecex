"use client";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image
import Picceo from "@/public/img/pages/introduce/intro_ceo.png";
import Image from "next/image";
import PicIntroduce_01 from "@/public/img/page_top/introduce_01.jpg"

const MainList = [
  {
    title: "일반현황",
    url: "#",
    sub: [
      { title: "CEO 인사말", url: "/introduce/common/ceo" },
      { title: "비전/미션", url: "/introduce/common/vision" },
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

const location = "CEO 인사말";

const CeoClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("일반현황");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicIntroduce_01}
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
              협회소개 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              일반현황 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-full md:w-[1400px] md:flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
          <div className=" bg-white flex justify-center item-start">
            <div className="w-full flex items-start">
              <div className="md:w-[240px] flex flex-col">
                <SubNavHeader title={"협회소개"} />
                <div className="flex md:flex-col w-full">
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start relative ">
          <ContentTitle title={location}/>
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> CEO 인사말</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/vistion/"}>
                <div className="h-12 border border-l-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 비전/미션</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/history/"}>
                <div className="h-12 border border-r-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 연혁</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/ci/"}>
                <div className="h-12 border border-t-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> CI</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col text-title text-black w-full h-[140px] md:h-[400px] p-[40px] bg-lightgray md:text-[20px] md:leading-[35px]">
            <p>안녕하십니까?</p>
            <p>한국방폭협회 홈페이지를</p>
            <p>방문해 주신 여러분 반갑습니다.</p>
          </div>
          <div className="flex flex-col md:space-y-[20px] md:text-white text-[13px] md:text-[16px] w-full h-[600px] md:h-[300px] px-[40px] md:p-[40px] bg-lightgray md:bg-neutral-700 ">
            <p>
              한국방폭협회는 방폭 교육 및 설계, 시공, 감리 및 인증 서비스 등에
              대한 기술개발 및 관리유지 능력을 향상시켜 방폭산업에 건전한 발전과
              사업 육성을 도모하고, 국민의 생명 및 재산의 보호에 기여함을
              목적으로 설립되었습니다.
            </p>
            <p className="mt-5 md:mt-0">
              앞으로도 국민의 생명 및 재산을 보호하는 사회 안전망의 일원이라는
              소명의식을 가지고 정부로부터 수탁된 업무를 수행함에 있어 그 역할과
              책임을 다함은 물론 개선방안을 강구하여 좀 더 편리하고 합리적인
              수탁업무 절차가 되도록 발전시켜 나아가겠습니다.
            </p>
            <p className="mt-5 md:mt-0">
              아울러 신규 사업 개척으로 협회의 경쟁력을 제고하고, 자체점검에
              대한 제도 개선추진과 회원사의 요구에 부응하는 다양한 지원대책을
              강구하여 방폭산업 발전을 위해 최선을 다하겠습니다.
            </p>
          </div>
          <div className="absolute bottom-5 right-5  md:-translate-y-[320px] md:-translate-x-10 ">
            <Image src={Picceo} alt="ceo" className="w-[360px] md:w-[550px] mx-auto"/>
          </div>
          <div className="absolute bottom-[220px] right-[40px] md:-translate-y-[160px] md:-translate-x-[555px] text-black">
            <p>사단법인 한국방폭협회 공동회장</p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default CeoClient;
