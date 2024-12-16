"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicBusiness_02 from "@/public/img/page_top/business_02.jpg";
import content_icon from "@/public/img/icon/content_icon_circle.png";

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
      { title: "방폭교육 과정", url: "/business/education/course01" },
      { title: "산업안전 교육", url: "/business/education/course02" },
      { title: "위험성 평가 교육", url: "/business/education/course03" },
      { title: "정량적위험성평가 교육", url: "/business/education/course04" },
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

const location = "방폭교육 과정 ";

const Course01Client = () => {
  const [pageMenu, setPageMenu] = useState<any>("교육");
  const [selectedLiIndex, setSelectedLiIndex] = useState(0);
  const handleLiClick = (index: any) => {
    setSelectedLiIndex(index);
  };

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_02}
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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                <span> 방폭교육 과정</span>
              </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course02/"}>
                <div className="h-12 border border-gray-200 border-b-0 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 산업안전 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course03/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 위험성 평가 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course04/"}>
                <div className="h-12 border border-l-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 정량적위험성평가 교육</span>
                </div>
              </Link>
            </li>
          </ul>

          <ul className="w-full flex flex-wrap text-[13px] md:text-base mt-10 md:mt-0">
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 
              ${
                selectedLiIndex === 0
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0 border-b-0 md:border-b"
              } cursor-pointer`}
              onClick={() => handleLiClick(0)}
            >
              초급 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 0 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 
              ${
                selectedLiIndex === 1
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 md:border-b "
              } cursor-pointer`}
              onClick={() => handleLiClick(1)}
            >
              중급 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 1 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 2
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(2)}
            >
              고급 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 2 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 3
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray"
              } cursor-pointer`}
              onClick={() => handleLiClick(3)}
            >
              특급 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 3 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
          </ul>

          {/* <h3 className="w-40 h-14 bg-lightgray border border-darkgray mx-auto flex items-center justify-center">
            <p className="text-xl font-semibold">초급 과정</p>
          </h3> */}

          {/* 초급과정 */}
          <div
            className={`${
              selectedLiIndex === 0 ? "block" : "hidden"
            } w-full md:p-[20px]`}
          >
            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">
                1. 방폭안전관리 입문과정 (초급 1)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭의 기본 개념과 안전 절차를 이해하고 기본적인 방폭 장비
                    사용법을 습득한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>안전관리자, 방폭업무 담당자</span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 방폭의 기본 개념</li>
                  <li>2. 방폭 관련 법규 및 표준</li>
                  <li>3. 방폭 지역 분류</li>
                  <li>4. 방폭의 기본 요건</li>
                  <li>5. 기본 방폭 장비 사용법</li>
                  <li>6. 안전 절차 및 비상 대처</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-20">
                2. 방폭 장비 사용법과 안전 절차 (초급 2)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭 장비의 사용법을 익히고 안전 절차를 준수하는 방법을
                    배운다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>방폭 장비를 처음 사용하는 작업자, 안전관리자</span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 방폭 장비의 종류와 특성</li>
                  <li>2. 방폭 장비의 설치와 사용법</li>
                  <li>3. 방폭 장비의 외관 검사와 유지보수</li>
                  <li>4. 기본 안전 절차</li>
                  <li>5. 비상 상황 시 대처 방법</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-20">
                3. 방폭의 기본 개념 및 사고 예방 (초급 3)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭의 기본 개념을 이해하고 사고를 예방하는 방법을 배운다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>방폭업무를 처음 접하는 작업자, 안전관리자</span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 방폭의 정의와 필요성</li>
                  <li>2. 주요 사고 사례 분석 (국내 및 해외)</li>
                  <li>3. 방폭 구역의 정의와 분류</li>
                  <li>4. 폭발물의 특징과 방폭 구역 분류 기준</li>
                  <li>5. 사고 예방을 위한 안전 절차</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 초급 과정 끝 */}

          {/* 중급 과정 */}
          <div
            className={`${
              selectedLiIndex === 1 ? "block" : "hidden"
            } w-full md:p-[20px]`}
          >
            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">
                1. 방폭안전관리 향상 (중급 1)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭의 심화 개념을 이해하고, 방폭 장비의 설치 및 유지보수를
                    할 수 있도록 한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>안전관리자, 방폭업무 담당자</span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 심화 방폭 개념</li>
                  <li>2. 위험 지역 구분</li>
                  <li>3. 방폭 장비 설치 및 유지보수</li>
                  <li>4. 위험 분석 및 평가</li>
                  <li>5. 사례 연구</li>
                  <li>6. 관련 법규 및 표준 심화</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-20">
                2. 방폭안전관리 향상 (방폭시스템 점검) 과정 (중급 2)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭의 이해와 실습훈련을 통해 방폭시설에 대한 자체 점검을
                    통해 유지관리할 수 있는 역량을 강화한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>안전관리자, 방폭업무 담당자</span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 방폭 시스템 점검 방법</li>
                  <li>2. 방폭 장비의 유지보수 절차</li>
                  <li>3. 케이블 포설 및 결선 요건</li>
                  <li>4. 방폭 장비 설치 테스트 및 보고서 작성</li>
                  <li>5. 사례 연구 및 실습</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-20">
                3. 방폭설비 유지보수 과정 (중급 3)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭설비의 유지보수 및 점검을 통해 안전성을 향상시키는
                    방법을 학습한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>방폭설비 유지보수 담당자, 안전관리자</span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 방폭설비 유지보수 개요</li>
                  <li>2. 방폭설비의 주요 부품 점검 및 교체</li>
                  <li>3. 방폭설비의 Cable Entry 요건</li>
                  <li>4. 유지보수 문서 작성 및 보고 절차</li>
                  <li>5. 실제 사례를 통한 유지보수 실습</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 중급 과정 끝 */}

          {/* 고급 과정 */}
          <div
            className={`${
              selectedLiIndex === 2 ? "block" : "hidden"
            } w-full md:p-[20px]`}
          >
            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">
                1. 방폭지역 관리향상 및 전기화재 예방과정 (고급 1)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭 관련 법규 및 설치기준, 방폭구조, 방폭기기에 대한 지식을
                    습득하고 이해 수준을 높여 방폭 지역에 대한 안전관리를
                    향상시키고 전기적인 요소로 인한 화재 사고를 예방한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>
                    방폭지역이 존재하는 사업장의 안전관리자, 안전환경팀 재직자,
                    PSM 안전관계자 및 관리감독자
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 전문가 수준의 방폭 개념</li>
                  <li>2. 통합 방폭 관리 전략</li>
                  <li>3. 방폭 장비 유지보수에 대한 문서 작성</li>
                  <li>4. 위험 지역 내 혹은 연관 구역에서의 세부 검사</li>
                  <li>
                    5. 방폭 장비의 Cable Entry에 대한 요구 사항, 설치 확인
                  </li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-20">
                2. IECEx Standard 해설과정 (고급 2)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    방폭에 관련된 국제 표준에 대한 이해를 돕고 기준에 맞는
                    올바른 해설을 통해 사고 예방에 기여한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>
                    안전관리자, 방폭업무 담당자, IECEx 국제표준에 관심이 있는 자
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. IECEx Standard 이해</li>
                  <li>2. 방폭 장비의 유지보수 절차</li>
                  <li>3. 케이블 포설 및 결선 요건</li>
                  <li>4. 최신 방폭 규제 동향 및 변화</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 고급 과정 끝 */}

          {/* 특급 과정 */}
          <div
            className={`${
              selectedLiIndex === 3 ? "block" : "hidden"
            } w-full md:p-[20px]`}
          >
            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">
                1. PSM 자체 검사 및 이행 평가과정 (특급 1)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    PSM 사업장의 공정안전관리 자체 감사 및 이행 평가에 대한
                    기술적 사항을 토대로 PSM 등급 향상 방안과 능력을 배양한다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>
                    공정안전보고서(PSM) 제출 대상 사업장의 담당자, 공정안전
                    시스템 자체 운영 사업장, OSHAS 또는 KOSHA 18001 적용 사업장
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. PSM 감사 및 평가 기술</li>
                  <li>2. 공정안전관리의 주요 문제점 및 개선 방안</li>
                  <li>3. 사례 연구 및 실습</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-20">
                2. PSM 위험성 평가 기법 해설 및 적용 실무과정 (특급 2)
              </h4>
              <ContentSubTitle title="교육목적" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                  <span>
                    PSM 사업장의 공정안전보고서 심사, 확인, 이행 평가 전 과정에
                    적용되는 위험성 평가 기법을 체계적으로 교육하여 자체 수행
                    능력을 향상시킨다.
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육대상" />
              <div className="w-full mb-[20px]">
                <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                  <span>
                    공정안전보고서(PSM) 제출 대상 사업장의 담당자, 공정안전
                    시스템 자체 운영 사업장, OSHAS 또는 KOSHA 18001 적용 사업장
                  </span>
                </div>
              </div>

              <ContentSubTitle title="교육내용" />
              <div className="w-full mb-[20px]">
                <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                  <li>1. 위험성 평가 기법 이해 및 적용</li>
                  <li>2. 내부 규정과 PSM 적용 체계의 단일화</li>
                  <li>3. 사례 연구 및 실습</li>
                </ul>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
                <div className="w-full md:w-[49%] flex flex-col">
                  <ContentSubTitle title="교육시간" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>16시간 (2일)</span>
                  </div>
                </div>
                <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                  <ContentSubTitle title="교육 비용" />
                  <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                    <span>400,000원</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 특급 과정 끝 */}
        </section>
      </main>
    </section>
  );
};

export default Course01Client;
