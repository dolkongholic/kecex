"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";

import PicIntroduce_02 from "@/public/img/page_top/introduce_02.jpg"

// Image

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

const location = "조직도";

const GroupClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("조직안내");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicIntroduce_02}
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

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="w-full flex flex-col px-[10px] md:px-[30px] mt-[20px] text-[#3A3A3A]">
            {/* <div className="h-[120px] items-center">
              <ul className="flex justify-between">
                <li className="w-1/8 flex h-[40px] flex-col justify-between text-center">&nbsp;</li>
                <li className="w-1/4 flex h-[40px] flex-col justify-between text-center border-b border-gray">심의 및 승인</li>
                <li className="w-1/4 flex h-[40px] flex-col justify-between text-center border-b border-gray">계획 및 집행</li>
                <li className="w-1/4 flex h-[40px] flex-col justify-between text-center border-b border-gray">방폭지부 및 연구센터</li>
                <li className="w-1/8 flex h-[40px] flex-col justify-between text-center">&nbsp;</li>
              </ul>
            </div> */}
            <div className="flex justify-center h-[50px] items-center">
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-neutral-700 text-white md:text-[18px] rounded-full">
                총회
              </div>
            </div>
            <div className="flex h-[130px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[22%] h-[50px] text-center text-subtitle">
                <div className="h-[40px]">&nbsp;</div>
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-neutral-700 text-white md:text-[18px] rounded-full mt-[40px]">
                이사회
              </div>
            </div>
            <div className="flex justify-between h-[50px] items-center">
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center border border-secondary md:text-[18px]">
                고문
              </div>
              <div className="w-[8%] h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-blue-900 text-white md:text-[18px]">
                회장
              </div>
              <div className="w-[8%] h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px]">&nbsp;</div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-lightgray md:text-[18px]">
                감사
              </div>
            </div>

            <div className="flex h-[70px]">
              <div className="w-[14%]"></div>
              <div className="w-[36%] border-r border-gray">
                <div className="w-full h-[35px]">&nbsp;</div>
                <div className="w-full h-[35px] border-t border-l border-gray relative">
                  &nbsp;
                  <span className="absolute -left-3 -bottom-2 text-[22px] text-darkgray">
                    <RiArrowDownSLine />
                  </span>
                </div>
              </div>
              <div className="w-[36%]">
                <div className="w-full h-[35px]">&nbsp;</div>
                <div className="w-full h-[35px] border-t border-r border-gray relative">
                  &nbsp;
                  <span className="absolute -right-3 -bottom-2 text-[22px] text-darkgray">
                    <RiArrowDownSLine />
                  </span>
                </div>
              </div>
              <div className="w-[14%]"></div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-[28%] flex-col justify-between items-center h-[110px] text-center border border-secondary md:text-[18px]">
                <p className="h-[40px] flex items-center justify-center md:text-[18px] border-b border-secondary">
                  자문위원
                </p>
                <p className="h-[30px] flex items-center justify-center text-[13px] md:text-[15px] mt-1">
                  기술자문
                </p>
                <p className="h-[40px] flex items-center justify-center text-[13px] md:text-[15px] leading-2 -mt-2">
                  정책자문
                </p>
              </div>
              <div className="w-[8%] h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-secondary text-white md:text-[18px]">
                상임이사
              </div>
              <div className="w-[8%] h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center border border-secondary md:text-[18px]">
                운영위원
              </div>
            </div>

            <div className="flex h-[60px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[50%]">&nbsp;</div>
            </div>

            <div className="flex justify-between h-[50px]">
              <div className="w-[36%] flex justify-center items-center h-[50px] text-center text-subtitle">
                &nbsp;
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-secondary text-white md:text-[18px]">
                사무국장
              </div>
              <div className="w-[8%] h-[50px] text-center text-subtitle">
                <div className="border-b border-gray h-[25px] relative">
                  &nbsp;
                  <span className="absolute -right-2 -bottom-3 text-[22px] text-darkgray -rotate-90">
                    <RiArrowDownSLine />
                  </span>
                  <span className="absolute -left-2 -bottom-3 text-[22px] text-darkgray rotate-90">
                    <RiArrowDownSLine />
                  </span>
                </div>
                <div className="h-[25px]">&nbsp;</div>
              </div>
              <div className="w-[28%] flex flex-col justify-center items-center h-[50px] text-center border border-secondary md:text-[18px]">
                <p>한국방폭협회 지부</p>
              </div>
            </div>

            <div className="flex h-[75px]">
              <div className="w-[50%] border-r border-gray">&nbsp;</div>
              <div className="w-[22%]">&nbsp;</div>
              <div className="w-[28%]">
                <div className="w-full h-[15px] flex">
                  <div className="w-[11%] border-r border-gray">&nbsp;</div>
                  <div className="w-[26%] border-r border-gray">&nbsp;</div>
                  <div className="w-[26%] border-r border-gray">&nbsp;</div>
                  <div className="w-[26%] border-r border-gray">&nbsp;</div>
                </div>
                <ul className="flex h-[50px]">
                  <li className="w-[22%] flex justify-center items-center h-[48px] text-center bg-lightgray text-[16px] mr-[4%]">
                    경기
                  </li>
                  <li className="w-[22%] flex justify-center items-center h-[48px] text-center bg-lightgray text-[16px] mr-[4%]">
                    충청
                  </li>
                  <li className="w-[22%] flex justify-center items-center h-[48px] text-center bg-lightgray text-[16px] mr-[4%]">
                    경상
                  </li>
                  <li className="w-[22%] flex justify-center items-center h-[48px] text-center bg-lightgray text-[16px]">
                    호남
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden md:flex h-[50px]">
              <div className="w-[14%]">&nbsp;</div>
              <div className="w-[36%] border border-b-0 border-gray relative">
                &nbsp;
              </div>
              <div className="w-[50%] flex-col">
                <div className="w-full">&nbsp;</div>
                <div className="w-full flex">
                  <div className="w-[72%] border-t border-r border-gray border-dashed">
                    &nbsp;
                  </div>
                  <div className="w-[24%]">
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-between h-[50px]">
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-secondary text-white md:text-[18px]">
                방폭지원본부
              </div>
              <div className="w-[28%] flex justify-center items-center h-[50px] text-center bg-secondary text-white md:text-[18px]">
                방폭기술본부
              </div>
              <div className="w-[28%] flex flex-col justify-center items-center h-[50px] text-center border border-secondary md:text-[18px]">
                <p>위험성평가 센터</p>
              </div>
            </div>

            <div className="md:flex justify-between ">
              <div className="w-full md:w-[28%] flex flex-col space-y-[10px] justify-start text-left border border-t-0 border-secondary text-[15px] p-5">
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 기획, 총무, 회계
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 회원사/회원 관리
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 기술정보 센터 운영
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> IECEx/KOSHA Guide/KGS Code
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 인증 절차
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 정부 R&D 과제
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 관련 각종 행사 개최
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 분과위원회 구성/운영
                </span>
              </div>
              <div className="w-full md:w-[28%] flex flex-col space-y-[10px] justify-start border border-t-0 border-secondary text-[15px] p-5">
                <div className="w-full h-[40px] bg-darkgray flex md:hidden flex-col items-center justify-center text-[18px]">
                  방폭기술본부
                </div>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 전문인력양성 교육
                  <span className="text-[12px]">(수료증/수첩)</span>
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 컨설팅 국내외 사업 추진
                </span>
                <ul className="text-[15px] leading-7 pl-2">
                  <li className="-mt-2">- 위험지역 구분 점검</li>
                  <li>- 전기설비 설치 점검</li>
                  <li>- 방폭 구역 전기 설비 검사</li>
                </ul>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 기술개발 과제 지원 및 컨설팅
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> 방폭 Auditing 지원
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> PSM / 중대 재해 처벌법 대응 지원
                </span>
              </div>
              <div className="w-full md:w-[28%] flex flex-col space-y-[10px] justify-start border border-t-0 border-secondary text-[15px] p-5">
                <div className="w-full h-[40px] bg-darkgray flex md:hidden flex-col items-center justify-center text-[18px]">
                  위험성평가 센터
                </div>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> Hazard Analysis
                </span>
                <span>
                  <b className="text-[18px] leading-[14px]">·</b> Loss Prevention
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default GroupClient;
