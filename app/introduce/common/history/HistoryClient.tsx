"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiArrowRightSLine } from "react-icons/ri";
import PicIntroduce_01 from "@/public/img/page_top/introduce_01.jpg"
import PicHistory_01 from "@/public/img/inner/history/history_01.jpg"
import PicHistory_02 from "@/public/img/inner/history/history_02.jpg"
import PicHistory_03 from "@/public/img/inner/history/history_03.jpg"

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

const location = "연혁";

const HistoryClient = () => {
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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full hidden md:flex flex-col justify-start items-start relative">
          <ContentTitle title={location} />
            <div className="w-[370px] absolute top-[257px] left-12">
              <Image 
                src={PicHistory_01} 
                alt="history_image" 
                className="mx-auto w-[370px] h-auto"
              />
            </div>
            <div className="w-[370px] absolute top-[572px] left-12">
              <Image 
                src={PicHistory_02} 
                alt="history_image" 
                className="mx-auto w-[370px] h-auto"
              />
            </div>
            <div className="w-[370px] absolute top-[1200px] left-12">
              <Image 
                src={PicHistory_03} 
                alt="history_image" 
                className="mx-auto w-[370px] h-auto"
              />
            </div>
            <div className="w-full flex justify-between mt-8 relative">
              <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-secondary -top-[3px] left-[414.5px]">
                &nbsp;
              </div>
              <div className="absolute w-6 h-6 rounded-full bg-white border-2 border-secondary top-[40px] left-[408.5px] flex justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-secondary border-2 border-secondary">
                  &nbsp;
                </div>
              </div>
              <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-secondary top-[351px] left-[414.5px]">
                &nbsp;
              </div>
              <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-secondary top-[977px] left-[415px]">
                &nbsp;
              </div>
              <figure className="w-[420px] h-[977px] border-r border-primary box-content">
              </figure>
              <article className="w-[670px] border-l border-[#ccc] box-content py-8 mt-1">
                <strong className="px-10 text-[22px] font-semibold">
                  2024
                </strong>
                <div className="w-full flex mt-[20px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    2
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                      (사)한국방폭협회 정기 총회 개최 <br/>
                      <span className="w-full flex text-left items-center mr-[10px] text-[15px] font-light">
                        2023년 지출예산 및 2024년 사업계획 및 예산(안) 승인
                        </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[200px]"></div>
                <strong className="px-10 text-[22px] font-semibold">
                  2023
                </strong>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    12
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                      한국방폭협회 현판식, <br/>
                      (재)울산테크노파크 업무 협약
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    11
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    전남여수공단협의회 업무협약 체결
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    10
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    선진 안전문화 확산 극대화 방안 세미나
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    7
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    (사)한국방폭협회 국제안전세미나
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    5
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    (사)한국방폭협회 설립 인가
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[20px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    2
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    고용노동부 산하 협회 인가 추진
                    </div>
                  </div>
                </div>
                <div className="w-full h-[200px]"></div>
                <strong className="px-10 text-[22px] font-semibold">
                  2022
                </strong>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    12
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    울산테크노파크 협약
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    11
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    한국방폭협회 창립총회 및 세미나
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    10
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    한국조선해양기자재연구원 MOU체결
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    9
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    한국방폭산업안전연구회 준비위원 간담회 개최
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[30px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    5
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    헥사곤, 화학네트워크포럼 산업안전 및<br/>
                    방폭산업 발전 모색 세미나 개최
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[20px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    4
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    울산과학대학교, 한국가스안전공사 울산본부,<br/>
                    한국산업인력공단 울산지사,<br/>
                    중소기업융합울산연합회,<br/>
                    공장장협의회 MOU체결
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-[20px]">
                  <div className="w-[50px] text-left ml-10 text-[22px] font-semibold">
                    2
                  </div>
                  <div>
                    <div className="w-full mr-[10px] text-[18px] font-medium mt-1">
                    한국방폭산업안전연구회 창립총회
                    </div>
                  </div>
                </div>
                
                
              </article>
            </div>
        </section>

        {/* -----------모바일 버전--------------- */}
        <section className="w-full flex md:hidden flex-col justify-start items-start text-[15px]">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[15px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/introduce/common/ceo/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> CEO 인사말</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/vision/"}>
                <div className="h-12 border border-gray-200 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 비전/미션</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                    <span> 연혁</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/ci/"}>
                <div className="h-12 border border-t-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> CI</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="w-full px-[27px] h-[10px] flex justify-start items-center text-[18px] text-title text-secondary font-bold mt-[40px]">
              2024&apos;
          </div>
            <div className="w-full h-[80px] flex border-l border-lightgray mt-5">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-start font-medium text-[17px]">
                12
              </div>
              <div className="w-[85%] flex flex-col justify-start text-left items-start mr-[10px] text-black">
                (사)한국방폭협회 정기 총회 개최 <br/>
                <span>
                  2023년 지출예산 및 2024년 사업계획 및 예산(안) 승인
                </span>
              </div>
            </div>
          <div className="w-full px-[27px] h-[10px] flex justify-start items-center text-[18px] text-title text-secondary font-bold mt-[50px]">
              2023&apos;
          </div>
          <div className="w-full h-[30px] flex mt-[15px] border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center font-medium text-[17px]">
              12
            </div>
            <div className="w-[80%] flex justify-start items-start text-black pt-1">
              한국방폭협회 현판식,
            </div>
          </div>
          <div className="w-full h-[40px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center mr-[10px]">
              &nbsp;
            </div>
            <div className="w-[80%] flex justify-start items-start text-black">
              (재)울산테크노파크 업무 협약
            </div>
          </div>
          <div className="w-full h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center font-medium text-[17px]">
              11
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              전남여수공단협의회 업무협약 체결
            </div>
          </div>
          <div className="w-full h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center font-medium text-[17px]">
              10
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              선진 안전문화 확산 극대화 방안 세미나
            </div>
          </div>
          <div className="w-full h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center font-medium text-[17px]">
              07
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              (사)한국방폭협회 국제안전세미나
            </div>
          </div>
          <div className="w-full h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center font-medium text-[17px]">
              05
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              (사)한국방폭협회 설립 인가
            </div>
          </div>
          <div className="w-full h-[50px] flex border-l border-lightgray">
            <div className="w-[5%] flex justify-start items-center mr-[10px] text-title text-secondary font-bold pl-[10px]">
              &nbsp;
            </div>
            <div className="w-[15%] flex justify-start items-center font-medium text-[17px]">
              02
            </div>
            <div className="w-[80%] flex justify-start items-center mr-[10px] text-black">
              고용노동부 산하 협회 인가 추진
            </div>
          </div>

          <div className="w-full px-[27px] h-[10px] flex justify-start items-center text-[18px] text-title text-secondary font-bold mt-[40px]">
              2022&apos;
          </div>
            <div className="w-full h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px]">
                12
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                울산테크노파크 협약
              </div>
            </div>
            <div className="w-full h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px]">
                11
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국방폭협회 창립총회 및 세미나
              </div>
            </div>
            <div className="w-full h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px]">
                10
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국조선해양기자재연구원 MOU체결
              </div>
            </div>
            <div className="w-full h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px]">
                09
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국방폭산업안전연구회 준비위원 간담회 개최
              </div>
            </div>
            <div className="w-full h-[100px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px]">
                05
                <br /><br />
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                헥사곤, 화학네트워크포럼 산업안전 및<br />
                방폭산업 발전 모색 세미나 개최
              </div>
            </div>
            <div className="w-full h-[130px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px] leading-[22px]">
                04
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                울산과학대학교, 한국가스안전공사 울산본부,
                <br />
                한국산업인력공단 울산지사, <br />
                중소기업융합울산연합회,
                <br />
                공장장협의회 MOU체결
              </div>
            </div>
            <div className="w-full h-[50px] flex border-l border-lightgray">
              <div className="w-[5%] flex justify-start items-center mr-[10px] text-black">
                &nbsp;
              </div>
              <div className="w-[15%] flex justify-start text-left items-center font-medium text-[17px]">
                02
              </div>
              <div className="w-[80%] flex justify-start text-left items-center mr-[10px] text-black">
                한국방폭산업안전연구회 창립총회
              </div>
            </div>
        </section>

      </main>
    </section>
  );
};

export default HistoryClient;
