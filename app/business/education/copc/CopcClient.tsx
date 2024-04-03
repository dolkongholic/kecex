"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import React, { useState } from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import content_icon from "@/public/img/icon/content_icon_circle.png";
import PicBusiness_02 from "@/public/img/page_top/business_02.jpg"

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
      // { title: "교육개발", url: "/business/education/develop" },
      { title: "CoPC 과정", url: "/business/education/copc" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      // { title: "방폭기기선정", url: "/business/consulting/equipment" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "CoPC 과정";

const CopcClient = () => {
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
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              교육 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
          <div className="bg-white flex justify-center item-start">
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
          <ul className="flex md:hidden flex-wrap w-full py-[20px] md:px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/education/course01/"}>
                <div className="h-12 border border-b-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭기초교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course02/"}>
                <div className="h-12 border border-b-0 border-gray-200 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭인력양성 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course03/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 기업형 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                    <span> CoPC 과정</span>
                </div>
            </li>
          </ul>
          <ul className="w-full flex flex-wrap text-[13px] md:text-base mt-10 md:mt-0">
            <li
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 
              ${
                selectedLiIndex === 0
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray  border-b-0 border-r-0"
              } cursor-pointer`}
              onClick={() => handleLiClick(0)}
            >
              IECEx 000
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
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 
              ${
                selectedLiIndex === 1
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 border-r-0 md:border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(1)}
            >
              IECEx 001
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
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 2
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 md:border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(2)}
            >
              IECEx 002
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
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 3
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 border-r-0 md:border-r"
              } cursor-pointer`}
              onClick={() => handleLiClick(3)}
            >
              IECEx 009
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 3 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 4
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(4)}
            >
              IECEx 003/006
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 4 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 tracking-tighter
              ${
                selectedLiIndex === 5
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 md:border-b md:border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(5)}
            >
              <span className="hidden md:inline">IECEx 004/007/008</span>
              <span className="md:hidden">IECEx 4/7/8</span>
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 5 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 6
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(6)}
            >
              IECEx 005
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 6 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${
                selectedLiIndex === 7
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0 md:border-r"
              } cursor-pointer`}
              onClick={() => handleLiClick(7)}
            >
              IECEx 002/009
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 7 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 tracking-tighter
              ${
                selectedLiIndex === 8
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray"
              } cursor-pointer`}
              onClick={() => handleLiClick(8)}
            >
              <span className="hidden md:inline">IECEx 002/008/009/010</span>
              <span className="md:hidden">IECEx 2/8/9/10</span>
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${
                  selectedLiIndex === 8 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
          </ul>
          <ul className="w-full mt-10">
            {/*첫번째 li */}
            <li className={`${selectedLiIndex === 0 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 000 Ex Awareness
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 000 수료증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
                <p>
                  · 역량을 입증한 개인에게 수료증을 발급하여 방폭 분야 초급 인력
                  양성
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0  leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 국제 방폭 전문가 과정(IECEx CoPC)에 응시하기 전 방폭에 대한
                  이해도를 향상시키기 위한 교육과정
                </p>
                <p>
                  · 방폭 기본 개념 및 방폭 전문 인력 인증 자격증 취득 과정에
                  관한 전반적인 지식 제공
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>· 방폭 구역 내 업무 희망자, 자격 요건 없음</p>
              </div>
              <ContentSubTitle title="수료 기준" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>· 이론 평가 기준을 충족하는 자에 한하여 수료증 발급</p>
              </div>
              <ContentSubTitle title="교육 프로그램" />
              <div className="w-full md:h-64 border-t-2 border-neutral-800 flex">
                <div className="w-1/6 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 h-full border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 국제방폭자격시험 IECEx & EEHA 소개</p>
                  <p>· IECEx CoPC Unit 및 Assessment 소개</p>
                  <p>· 방폭의 정의 및 폭발의 요소</p>
                  <p>· 위험지역 구분</p>
                  <p>· 방폭 기술</p>
                  <p>· IEC 60079 활용법</p>
                  <p>· IECEx CoPC Sample Test 진행 및 시험 풀이</p>
                </div>
              </div>
            </li>
            {/*두번째 li */}
            <li className={`${selectedLiIndex === 1 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 001 Ex Foundation
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 001 합격증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[150px] border border-gray flex flex-col justify-center px-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base space-y-2">
                <p className="leading-6">
                  · 방폭분야에서의 개인의 역량을 입증하고 실제 현장 작업에 투입되기 위한 자격을 심사하는 국제 방폭 전문인력 자격인증
                  과정으로서 폭발 환경 내에서의 가장 기본이 되는 방폭 이론을 교육
                </p>
                <p className="leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 001
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역에서의 방폭 기본 원리
                  <p className="leading-5">
                  (Apply basic principles of protection in
                  explosive atmosphere)
                </p>
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>· 방폭 구역 내 업무 희망자, 자격 요건 없음</p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 프로그램" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-56 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-56 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 space-y-1 text-[15px] md:text-base">
                  <p>· 폭발물의 특징 및 방폭 구역 분류</p>
                  <p>· 방폭의 기본 요건</p>
                  <p>· 폭발 위험이 있는 환경에서 작업하기 위한 HSE 필수 조건</p>
                  <p>· 잠재적 폭발 구역에 서의 방폭 장비 설치 규정 및 책임</p>
                  <p>· 방폭 장비 표기</p>
                  <p>· 방폭 장비의 외관 검사</p>
                </div>
                <div className="w-1/6 flex h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 평가</p>
                </div>
              </div>
            </li>
            {/*세번째 li */}
            <li className={`${selectedLiIndex === 2 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 002 Ex Classification of Hazardous Area
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 002 합격증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[120px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base space-y-2">
                <p className="leading-6">
                  · 방폭 구역에서 전기설비의 안전한 작업을 위한 기본적인 지식과
                  방폭 구역 정의, 검사에 대한 교육
                </p>
                <p>
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 002
                  </b>{" "}
                  위험지역 구분
                  <p className="leading-3">
                  (Perform classification of hazardous areas)
                </p>
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>· IECEx CoPC 001 자격 소유자</p>
                <p>
                  · 인화성 물질에 대한 공정, 장비, 안전, 전기, 기계 분야 관련
                  학위, 졸업장 또는 동등 자격 소유자
                </p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 세부일정" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-56 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-56 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-2">
                  <p>· 방폭 이론 (기본/심화)
                    <p className="leading-5 pl-3">
                      - 정의, 방폭기술, 방폭규정 등
                    </p>
                  </p>
                  <p className="mt-1">· IEC Standards 및 국내 관련 법안</p>
                  <p>
                    · 위험 지역 구분 이론/실습 (Hazardous Area Classification)
                    <p className="leading-5 pl-3">- Zone Classification</p>
                  </p>
                  <p className="mt-1">· 위험지역 구분 평가 (IECEx CoPC 유형)</p>
                </div>
                <div className="w-1/6 flex md:h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>
            {/*네번째 li */}
            <li className={`${selectedLiIndex === 3 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 009 Ex Design Electrical Installations
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 009 합격증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[120px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base space-y-1">
                <p className="leading-6">
                  · 방폭구역에서 전기설비의 설계를 하기 위해 필요한 기본적인
                  지식과 실습에 대한 교육
                </p>
                <p className="leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 009
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 전기설비 설계
                  <p className="leading-5">
                  (Design electrical installations in or
                  associated with explosive atmospheres)
                  </p>
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx CoPC 001 자격 소유자, 관련 분야 2년제 대학 학위 이상
                  소지자 또는 동등 자격 보유자
                </p>
                <p>
                  · 일반 전기 분야 설치/설계 또는 폭발위험지역 설치/설계 3년
                  이상 실무경력 보유자
                </p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 세부일정" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-60 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-60 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 구역 내 안전 작업 절차</p>
                  <p>· 방폭 구역 요구 조건 에 따른 방폭 장비의 선정</p>
                  <p>· 방폭 설계에 따른 일반적인 주의 사항</p>
                  <p>· Spark의 방지를 위한 설계</p>
                  <p>· Site 및 Plant의 사양</p>
                  <p>· Cable glands 및 Accessories 선정</p>
                  <p>· Loop Calculation 연습</p>
                </div>
                <div className="w-1/6 flex md:h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>        
            {/*다섯번째 li */}
            <li className={`${selectedLiIndex === 4 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 003,006 Ex Technician
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Units 003, 006 합산 합격증
                  발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[170px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base">
                <p className="leading-6">
                  · 방폭 구역에서의 전기설비 설치와 테스트를 하기 위해 필요한
                  기본적인 지식과 실습에 대한 교육
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 003
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>방폭 장비 및 배선 시스템 설치
                </p>
                <p className="leading-5">
                  (Install explosion-protected equipment and
                  wiring systems)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 006
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 전기 설비 테스트
                </p>
                <p className="leading-5">
                  (Test electrical installations in or associated with explosive atmospheres)
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx CoPC 001 자격 소유자, 관련 분야 2년제 대학 학위 이상
                  소지자 또는 동등 자격 보유자
                </p>
                <p>· 전기 설비 또는 방폭 설비 3년 이상 실무경력 보유자</p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 세부일정" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-40 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-40 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 구역 내 안전 작업 절차</p>
                  <p>· 방폭 구역 요구 조건에 따른 방폭장비의 선정</p>
                  <p>· 방폭 장비 설치에 대한 문서 작성</p>
                  <p>· 케이블 포설과 결선에 대한 요구사항</p>
                </div>
                <div className="w-1/6 flex md:h-32 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-32 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 장비의 Cable Entry에 대한 요구사항, 설치 및 선정</p>
                  <p>· 설치 테스트를 위한 측정장비 사용</p>
                  <p>· 테스트 결과 및 작업 종료에 대한 보고</p>
                </div>
                <div className="w-1/6 flex md:h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  3일차
                </div>
                <div className="w-5/6 md:h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>              
            {/*여섯번째 li */}
            <li className={`${selectedLiIndex === 5 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 004,007,008 Ex Inspector
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Units 004, 007, 008 합산
                  합격증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[220px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base">
                <p className="leading-6">
                  · 방폭 구역에서 전기 설비의 검사와 유지보수를 하기 위해 필요한
                  지식과 실습에 대한 교육
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 004
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역에서의 장비 유지 보수
                </p>
                <p className="leading-5">
                  (Maintain equipment in explosive
                  atmospheres)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 007
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 육안 검사 및 정밀 검사
                </p>
                <p className="leading-5">
                  (Perform visual and close inspection of
                  electrical installations in or associated with explosive
                  atmospheres)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 008
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 세부 검사
                </p>
                <p className="leading-5">
                  (Perform detailed inspection of electrical
                  installations in or associated with explosive atmospheres)
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx CoPC 001 자격 소유자, 관련 분야 2년제 대학 학위 이상
                  소지자 또는 동등 자격 보유자
                </p>
                <p>
                  · 전기 설비 또는 방폭 설비 유지/보수 3년 이상 실무경력 보유자
                </p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 프로그램" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-48 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-48 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 구역 내 안전 작업 절차</p>
                  <p>
                    · 방폭 구역 요구 조건에 따른 방폭 장비의 선정 적합성 진단
                  </p>
                  <p>· 방폭 장비 유지보수에 대한 문서 작성</p>
                  <p>· 방폭 장비 설치와 케이블 포설 및 결선에 대한 요구 사항</p>
                  <p>· 위험 지역 내 혹은 연관 구역에서의 세부 검사</p>
                </div>
                <div className="w-1/6 flex md:h-24 justify-center items-center bg-lightgray text-bold text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-24 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 장비의 Cable Entry에 대한 요구 사항, 설치 확인</p>
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>              
            {/*일곱번째 li */}
            <li className={`${selectedLiIndex === 6 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 005 Ex Overhaul and Repair
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 005 합격증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[120px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base">
                <p className="leading-6">
                  · 방폭 구역 내에서 방폭 장비의 수리, 보수, 재생을 수행하는
                  방폭 전문 인력 양성에 대한 교육
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 005
                  </b>{" "}
                  방폭 장비 점검 및 수리
                </p>
                <p className="leading-5">
                  (Overhaul and repair of explosion-protected
                  equipment)
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[120px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-5 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx CoPC 001 자격 소유자, 관련 분야 2년제 대학 학위 이상
                  소지자 또는 동등 자격 보유자
                </p>
                <p>
                  · 방폭 장비 설계, 설비 제조자, 관리자 및 수리업체, 전기 설치와
                  수리, 보수와 관련된 교육 수료 등 최소 3년 이상의 관련 업무
                  실무경력 보유자
                  <p className="leading-4">
                  (3년 중 최소 2년의 방폭 업무 관련 경력이
                  요구됨)
                  </p>
                </p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 프로그램" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-48 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-48 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 장비 수리·보수의 일반사항</p>
                  <p>· 방폭 장비 수리·보수의 용어 정리</p>
                  <p>· Service facility의 기준, 품질보증, 필요조건</p>
                  <p>· 방폭 장비 수리·보수 책임자의 역할</p>
                  <p>· 방폭 장비 수리·보수의 문서화 (보고, 기록)</p>
                </div>
                <div className="w-1/6 flex md:h-48 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-48 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 초기검사의 정의 및 세부사항</p>
                  <p>· 방폭 장비 수리·보수의 종류</p>
                  <p>· Ex d 장비의 필요조건 및 수리·보수</p>
                  <p>· Ex e 장비의 필요조건 및 수리·보수</p>
                  <p>· Ex i 장비의 필요조건 및 수리·보수</p>
                </div>
                <div className="w-1/6 md:h-48 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  3일차
                </div>
                <div className="w-5/6 md:h-48 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· Ex n 장비의 필요조건 및 수리·보수</p>
                  <p>· Ex tD 장비의 필요조건 및 수리·보수</p>
                  <p>· Ex pD 장비의 필요조건 및 수리·보수</p>
                  <p>· Ex p 장비의 필요조건 및 수리·보수</p>
                  <p>· 수리방폭장비의 마킹식별</p>
                </div>
                <div className="w-1/6 flex md:h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  4일차
                </div>
                <div className="w-5/6 md:h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>              
            {/*여덟번째 li */}
            <li className={`${selectedLiIndex === 7 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 002,009 Ex Classification of Hazardous Area / Design
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 002, 009 합산 수료증
                  발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[170px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base">
                <p className="leading-6">
                  · 폭발위험지역 내 방폭전기기기 점검 및 유지보수 전문 인력 양성
                  및 방폭 개념 확립에 대한 교육
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 002
                  </b>{" "}
                  위험지역 구분
                </p>
                <p className="leading-5">
                  (Perform classification of hazardous areas)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 009
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 전기 설비 설계
                </p>
                <p className="leading-5">
                  (Design electrical installation in or
                  associated with explosive atmospheres)
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx CoPC 001 자격 소유자, 관련 분야 2년제 대학 학위 이상
                  소지자 또는 동등 자격 보유자
                </p>
                <p>
                  · 일반 전기 분야 설치/설계 또는 폭발위험지역 설치/설계 3년
                  이상 실무경력 보유자
                </p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 프로그램" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-64 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-64 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 text-[15px] md:text-base space-y-1">
                  <p>· 폭발위험구역 구분 이론</p>
                  <p>· 방폭 구역 내 안전 작업 절차</p>
                  <p>· 방폭 구역 요구 조건에 따른 방폭 장비의 선정</p>
                  <p>· 방폭 설계에 따른 일반적인 주의 사항</p>
                  <p>· Spark의 방지를 위한 설계</p>
                  <p>· Site 및 Plant의 사양</p>
                  <p>· 안전, 기능 및 경제적인 시스템 설계</p>
                  <p>· Cable glands 및 Accessories 선정</p>
                </div>
                <div className="w-1/6 flex md:h-32 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-32 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 위험 지역 구분 설계</p>
                  <p>· Ex i의 Loop Calculations 방법</p>
                  <p>· Loop Calculations 연습</p>
                </div>
                <div className="w-1/6 flex md:h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  3일차
                </div>
                <div className="w-5/6 md:h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>
            {/*아홉번째 li */}
            <li className={`${selectedLiIndex === 8 ? "block" : "hidden"}`}>
              <div className="w-full h-16 border border-secondary flex justify-start items-center pl-10 text-neutral-800 font-medium mb-7">
                IECEx CoPC 002,008,009,010 Ex Supervisor
              </div>
              <ContentSubTitle title="교육 개요" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx 60079 시리즈 및 OD 504에 언급되어 있는 기초 방폭 이론
                  및 실습 교육
                </p>
                <p>
                  · IECEx OD 504에 근거한 IECEx CoPC Unit 002, 008, 009, 010
                  합산 합격증 발급 교육
                </p>
              </div>
              <ContentSubTitle title="교육 목적" />
              <div className="w-full md:h-[60px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base">
                <p>
                  · 전 산업 분야 역량 확보를 위한 방폭 관련 전문가 양성과
                  전문지식 배양을 통한 역량 강화
                </p>
              </div>
              <ContentSubTitle title="교육 내용" />
              <div className="w-full md:h-[280px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 mb-7 text-[15px] md:text-base">
                <p className="leading-6">
                  · 폭발위험지역 내 방폭전기기기 점검 및 유지보수 전문 인력 양성
                  및 방폭 개념 확립에 대한 교육
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 002
                  </b>{" "}
                  위험지역 구분
                </p>
                <p className="leading-5">
                  (Perform classification of hazardous areas)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 008
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 세부 검사
                </p>
                <p className="leading-5">
                  (Perform detailed inspection of electrical
                  installations in or associated with explosive atmospheres)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 009
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 전기 설비 설계
                </p>
                <p className="leading-5">
                  (Design electrical installation in or
                  associated with explosive atmospheres)
                </p>
                <p className="mt-2 leading-5 md:leading-auto">
                  ·{" "}
                  <b className="font-medium text-neutral-800">
                    IECEx CoPC Unit Ex 010
                  </b>{" "}
                  <br className="md:hidden"/>
                  <span className="inline md:hidden">&nbsp;&nbsp;&nbsp;</span>위험 지역 내 혹은 연관 구역에서의 전기 설비 감사 수행
                </p>
                <p className="leading-5cd ">
                  (Perform audit inspection of electrical
                  installations in or associated with explosive atmospheres)
                </p>
              </div>
              <ContentSubTitle title="교육 대상" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · IECEx CoPC 001 자격 소유자, 전기설치 또는 검사 실무 최소
                  3년의 경력
                </p>
                <p>
                  · 폭발위험지역 내 설치 또는 검사 업무 관련 최소 2년 이상 실무
                  경력 보유자
                </p>
              </div>
              <ContentSubTitle title="합격 기준" />
              <div className="w-full md:h-[90px] border border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-7 mb-7 text-[15px] md:text-base space-y-1">
                <p>
                  · 이론 평가는 객관식과 주관식으로 이루어지며 오픈 북 (Open
                  Book) 시험으로 키워드 (Keyword) 미작성 시 감점 요인이 됨
                </p>
                <p>· 75점 이상 합격</p>
              </div>
              <ContentSubTitle title="교육 프로그램" />
              <div className="w-full border-t-2 border-neutral-800 flex flex-wrap">
                <div className="w-1/6 md:h-32 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  1일차
                </div>
                <div className="w-5/6 md:h-32 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭의 기본 원리</p>
                  <p>· 방폭 구역 내 안전 작업 절차</p>
                  <p>· 방폭 구역 요구 조건 에 따른 방폭 장비의 선정</p>
                </div>
                <div className="w-1/6 flex md:h-32 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  2일차
                </div>
                <div className="w-5/6 md:h-32 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 방폭 장비의 검사 종류 및 등급</p>
                  <p>· 방폭 보호 방법에 따른 주의사항 및 오작 사례</p>
                  <p>· 방폭 장비에 대한 자격증 시스템</p>
                </div>
                <div className="w-1/6 md:h-40 flex justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  3일차
                </div>
                <div className="w-5/6 md:h-40 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· 폭발 방지를 위한 방법</p>
                  <p>· 방폭 장비 표기</p>
                  <p>· 방폭 장비의 외관 검사</p>
                  <p>· 방폭 장비 검사의 종류 및 등급</p>
                </div>
                <div className="w-1/6 flex md:h-32 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  4일차
                </div>
                <div className="w-5/6 md:h-32 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base space-y-1">
                  <p>· Cable 및 결선 시스템</p>
                  <p>· Cable Gland 및 액세서리 선정</p>
                  <p>· Loop Calculation 연습</p>
                </div>
                <div className="w-1/6 flex md:h-16 justify-center items-center bg-lightgray font-medium text-black border-b border-gray">
                  5일차
                </div>
                <div className="w-5/6 md:h-16 border-b border-l border-gray flex flex-col justify-center pr-5 md:pr-0 pl-5 py-4 md:py-0 leading-8 text-[15px] md:text-base">
                  <p>· 이론 및 실습 평가</p>
                </div>
              </div>
            </li>
          </ul>
          {/* <button className="w-44 h-14 bg-secondary text-white m-auto mt-10">
            <Link passHref href={"/education/apply/apply"}>
              온라인 신청 바로가기
            </Link>
          </button> */}
        </section>
      </main>
    </section>
  );
};

export default CopcClient;
