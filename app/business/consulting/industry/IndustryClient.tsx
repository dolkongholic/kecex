"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import content_icon from "@/public/img/icon/content_icon_circle.png";
import PicIndustry from "@/public/img/pages/business/consulting_industry.png";
import PicIndustry_M from "@/public/img/pages/business/consulting_industry_m.png";
import PicCeo from "@/public/img/page_top/ceo_top.jpg"

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
      // { title: "산업진단, 컨설팅", url: "/business/consulting/industry" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "산업진단, 컨설팅";

const InspectionClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("컨설팅");
  const [selectedLiIndex, setSelectedLiIndex] = useState(0);
  const handleLiClick = (index: any) => {
    setSelectedLiIndex(index);
  };

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicCeo}
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
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              컨설팅 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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

        <section className="py-[20px] md:pl-[40px] px-[20px] md:px-0 w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/consulting/inspection/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭사전진단</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 산업진단, 컨설팅</span>
                </div>
            </li>
          </ul>
          <ul className="w-full flex flex-wrap text-[13px] md:text-base mt-10 md:mt-0">
            <li
              className={`w-1/3 h-14 flex justify-between items-center pl-2 md:pl-5 
              ${
                selectedLiIndex === 0
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0"
              } cursor-pointer`}
              onClick={() => handleLiClick(0)}
            >
              PSM
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-1 md:mr-5 ${
                  selectedLiIndex === 0 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 h-14 flex justify-between items-center pl-2 md:pl-5 
              ${
                selectedLiIndex === 1
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray md:border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(1)}
            >
              중대재해
              처벌법
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-1 md:mr-5 ${
                  selectedLiIndex === 1 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/3 h-14 flex justify-between items-center pl-2 md:pl-5
              ${
                selectedLiIndex === 2
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray"
              } cursor-pointer`}
              onClick={() => handleLiClick(2)}
            >
              위험성 평가
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-1 md:mr-5 ${
                  selectedLiIndex === 2 ? "inline-block" : "hidden"
                }`}
                alt="선택 아이콘"
              />
              {""}
            </li>
          </ul>
          <ul className="w-full mt-10">
            <li className={`${selectedLiIndex === 0 ? "block" : "hidden"}`}>
              {/*PSM 컨설팅 */}
              <div className="w-full h-24 border-t-4 border-secondary flex justify-start items-center pl-10 text-black font-medium mb-7 text-[26px]">
                PSM 컨설팅
              </div>
              <ContentSubTitle title="PSM 컨설팅 세부 내용" />
              <ul className="-translate-y-[20px] text-[15px] leading-6 mb-5">
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      1
                    </div>
                    <p className="ml-3">공정안전보고서(PSM) 작성</p>
                  </div>
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      2
                    </div>
                    <p className="ml-3">PSM 운영 및 이행상태평가 컨설팅</p>
                  </div>
                </li>
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      3
                    </div>
                    <p className="ml-3">PSM 변경관리 컨설팅</p>
                  </div>
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      4
                    </div>
                    <p className="ml-3">
                      PSM 자체감사 컨설팅<br className="md:hidden"/>
                      (점검 면제용 포함)
                    </p>
                  </div>
                </li>
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      5
                    </div>
                    <p className="ml-3">
                      공정위험성평가 컨설팅<br className="md:hidden"/>
                      (HAZOP, K-PSR, LOPA, What-If,
                      <br />
                      FMEA, PHAST, ALOHA, E-CA)
                    </p>
                  </div>
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      6
                    </div>
                    <p className="ml-3">
                      PSM 운영 System 구축<br className="md:hidden"/>
                      (Web 전산 프로그램)
                    </p>
                  </div>
                </li>
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      7
                    </div>
                    <p className="ml-3">
                      폭발위험장소 산정(2D or 3D Scan) <br className="md:hidden"/>
                      컨설팅
                    </p>
                  </div>
                </li>
              </ul>
            </li>
            <li className={`${selectedLiIndex === 1 ? "block" : "hidden"}`}>
              {/*중대재해처벌법 컨설팅 */}
              <div className="w-full h-24 border-t-4 border-secondary flex justify-start items-center pl-10 text-black font-medium mb-7 text-[26px]">
                중대재해처벌법 컨설팅
              </div>
              <ContentSubTitle title="중대재해처벌법 컨설팅 대상" />
              <ul className="-translate-y-[20px] text-[15px] leading-6 mb-5">
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      1
                    </div>
                    <p className="ml-3">
                      중대재해처벌에 관한 법률에 <br className="md:hidden"/>
                      대응하기 위한 사업장
                    </p>
                  </div>
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      2
                    </div>
                    <p className="ml-3">
                      중대재해처벌법 및 산업안전보건법을 <br className="md:hidden"/>
                      적절하게 이행하고 있는지
                      <br />
                      확인하고자 하는 사업장
                    </p>
                  </div>
                </li>
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      3
                    </div>
                    <p className="ml-3">
                      안전한 작업환경을 조성하여 <br className="md:hidden"/>
                      중대재해를 예방하고자 하는
                      사업장
                    </p>
                  </div>
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      4
                    </div>
                    <p className="ml-3">
                      자체적으로 안전관리 및 법이행실태를 <br className="md:hidden"/>
                      점검하고자 하는 사업장
                    </p>
                  </div>
                </li>
              </ul>
              <ContentSubTitle title="중대재해처벌법 컨설팅 내용" />
              <div className="md:flex justify-between text-[14px] text-primary mb-10">
                <div className="md:w-1/3 md:h-56 border border-secondary rounded-md text-center py-10 mb-5 md:mb-0 px-3 md:px-0">
                  <strong className="text-neutral-800 text-[26px]">
                    안전보건관리체계
                  </strong>
                  <p className="mt-7">
                    <span className="block w-24 h-0 border-t border-primary m-auto mb-7">
                      {""}
                    </span>
                    안전관리조직 구성 및 운영실태를 파악 및 분석하여,
                    <br />
                    적합한 안전보건관리체계 구축 방안 제시
                  </p>
                </div>
                <div className="md:w-1/3 md:h-56 border border-secondary rounded-md text-center py-10 md:mx-5 mb-5 md:mb-0">
                  <strong className="text-neutral-800 text-[26px]">
                    안전관리시스템(PDCA)
                  </strong>
                  <p className="mt-7">
                    <span className="block w-24 h-0 border-t border-primary m-auto mb-7">
                      {""}
                    </span>
                    안전관리시스템 구축현황 및 운영실태를 점검하여,
                    <br />
                    보다 효율적인 안전관리시스템 구축 및 운영방안 제시
                  </p>
                </div>
                <div className="md:w-1/3 md:h-56 border border-secondary rounded-md text-center py-10 mb-5 md:mb-0">
                  <strong className="text-neutral-800 text-[26px]">
                    안전한 작업환경
                  </strong>
                  <p className="mt-7">
                    <span className="block w-24 h-0 border-t border-primary m-auto mb-7">
                      {""}
                    </span>
                    현장진단을 통한
                    <br />
                    잠재유해위험요인 발굴 및 개선방안 제시
                  </p>
                </div>
              </div>
              <ContentSubTitle title="중대재해처벌법 컨설팅 절차" />
              <div className="w-full flex">
                <div className="hidden md:block w-1/12 mr-1">
                  <div className="w-full h-full">
                    <div className="flex h-[595px]">
                      <div className="w-2/5">&nbsp;</div>
                      <div className="w-1/5 bg-gradient-to-b from-primary to-[#0f618c]">
                        &nbsp;
                      </div>
                      <div className="w-2/5">&nbsp;</div>
                    </div>
                    <div className="w-full h-[50px] relative">
                      <IoMdArrowDropdown className="w-24 h-[180px] absolute -bottom-10 -left-[2.5px] text-[#0f618c]" />
                    </div>
                    {/* 화살표 삼각형 */}
                  </div>
                </div>
                <ul className="w-full md:w-11/12">
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8">
                      01. 서류 평가
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          사업장 안전보건관리시스템 문서 점검
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 안전관리책임자 선임 등 문서관리 상태 파악
                        </p>
                        <p className="text pl-2">· 운영상태 및 이행여부</p>
                        <p className="text pl-2 mb-3">
                          · 산안법/연안법 위반 여부
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          안전관리 문서
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 위험성평가, 작업 시작 전 점검, 비상조치계획 등에
                          대한 서류 점검 진행
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8">
                      02. 현장 평가
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          안전관리현황 및 이행 상태 파악
                        </strong>
                        <p className="text pl-2 mb-3 mt-1">
                          · 산업안전보건법, 시행령, 시행규칙 이행여부
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          현장 안전 수준 파악
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 산업안전보건기준 규칙 준수여부
                        </p>
                        <p className="text pl-2">
                          · 위험요인 및 법규 위반·지적 사항
                        </p>
                        <p className="text pl-2">
                          · 기계, 전기, 화공 분야 심층분석
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8">
                      03. 개선안 도출 및 보고서 작성
                    </div>
                    <div className="border-b border-primary w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          안전보건관리시스템 개선안 제시
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 문서관리 및 운영상태 개선안 제시
                        </p>
                        <p className="text pl-2">
                          · 위험성평가, 작업 시작 전 점검 등 서류 보완사항 제시
                        </p>
                      </div>
                      <div className="md:w-1/2 mt-2 md:mt-0">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          현장 안전관리 현황에 따른 개선안 제시
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 산업안전보건법 및 하위법령에 따른 개선안
                        </p>
                        <p className="text pl-2">
                          · 기계, 전기, 화공 분야 심층적 개선안
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${selectedLiIndex === 2 ? "block" : "hidden"}`}>
              {/*위험성 평가 */}
              <div className="w-full h-24 border-t-4 border-secondary flex justify-start items-center pl-10 text-black font-medium mb-7 text-[26px]">
                산업현장 위험성평가
              </div>
              <ContentSubTitle title="위험성평가 개요" />
              <div className="flex justify-between text-[15px] text-primary mb-10">
                <div className="w-full md:h-64 border border-secondary rounded-md text-center py-10">
                  <strong className="text-neutral-800 text-[26px]">
                    위험성평가 실시
                  </strong>
                  <p className="py-7 px-6 md:px-12 text-left">
                    <span className="block w-48 h-0 border-t border-primary m-auto mb-7">
                      {""}
                    </span>
                    산업안전보건법 제36조에 의거 사업주는 건설물,
                    기계·기구·설비, 원재료, 가스, 증기, 분진, 근로자의 작업행동
                    또는 그 밖의 업무로 인한 유해·위험 요인을 찾아내어 부상 및
                    질병으로 이어질 수 있는 <b>위험성의 크기가 허용 가능한
                    범위인지</b>를 평가하여야 하고, 그 결과에 따라 관계법령에 의한
                    조치와 더불어 근로자에 대한 위험 또는 건강장해를 방지하기
                    위하여 필요한 경우 <b>추가적인 조치</b>를 하여야 하며, 위험성평가를
                    실시한 경우에는 평가의 결과와 조치사항을 기록·보존하도록
                    되어 있습니다.
                  </p>
                </div>
              </div>
              <ContentSubTitle title="위험성평가 절차" />
              <div className="w-full flex justify-center mb-10">
                <Image src={PicIndustry} alt="위험성평가 절차 이미지" className="hidden md:block"/>
                <Image src={PicIndustry_M} alt="위험성평가 절차 이미지" className="md:hidden"/>
              </div>
              <ContentSubTitle title="위험성평가 실시 시기" />
              <div className="w-full mb-10">
                <table className="w-full text-center border-t-2 border-secondary">
                  <tr className="w-full h-14 border-b-2 border-gray bg-lightgray">
                    <th className="w-1/6 md:w-1/5 border-r border-gray">구분</th>
                    <th className="">실시 시기</th>
                  </tr>
                  <tr className="h-16 border-b border-gray">
                    <td className="w-1/6 md:w-1/5 border-r border-gray">
                      정기<br className="md:hidden"/>
                      평가
                    </td>
                    <td className="text-left pl-6 text-[15px] md:text-base">
                      최초평가 후 매년 정기적으로 실시
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray">
                    <td className="w-1/6 md:w-1/5 border-r border-gray">
                      수시<br className="md:hidden"/>
                      평가
                    </td>
                    <td className="text-left p-6 leading-7 text-[15px] md:text-base">
                      <p>· 사업장 건설물의 설치·이전·변경 또는 해체</p>
                      <p>· 기계·기구, 설비, 원재료 등의 신규 도입 또는 변경</p>
                      <p>· 건설물, 기계·기구, 설비 등의 정비 또는 보수</p>
                      <p>· 작업방법 또는 작업절차의 신규 도입 또는 변경</p>
                      <p>· 중대산업사고 또는 산업재해 발생</p>
                      <p className="leading-3">
                        &nbsp;&nbsp;&nbsp;(휴업 이상의 요양을 요하는 경우에
                        한정)
                      </p>
                      <p className="mt-2">
                        · 그 밖에 사업주가 필요하다고 판단한 경우
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              <ContentSubTitle title="위험성평가 컨설팅 절차" />
              <div className="w-full flex">
                <div className="hidden md:block md:w-1/12 mr-1">
                  <div className="w-full h-full">
                    <div className="flex h-[595px]">
                      <div className="w-2/5">&nbsp;</div>
                      <div className="w-1/5 bg-gradient-to-b from-primary to-[#0f618c] ">
                        &nbsp;
                      </div>
                      <div className="w-2/5">&nbsp;</div>
                    </div>
                    <div className="w-full h-[50px] relative">
                      <IoMdArrowDropdown className="w-24 h-[180px] absolute -bottom-10 -left-[2.5px] text-[#0f618c]" />
                    </div>
                    {/* 화살표 삼각형 */}
                  </div>
                </div>
                <ul className="mb-10 w-full md:w-11/12">
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8 ">
                      01. 사전준비
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          컨설팅 범위 및 세부일정 협의
                        </strong>
                      </div>
                      <div className="md:w-1/2 mt-3 md:mt-0">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          컨설팅 일정 확정 및 공정 파악
                        </strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8">
                      02. 서류검토
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          위험성평가 컨설팅팀 구성
                        </strong>
                      </div>
                      <div className="md:w-1/2 mt-3 md:mt-0">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          위험성평가 실시규정 수립을 위한 서류검토
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 평가에 필요한 안전·보건 정보 수집
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8">
                      03. 현장안전점검
                    </div>
                    <div className="border-primary w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          컨설팅팀 현장점검
                        </strong>
                        <p className="text pl-2 mt-1">
                          · 작업과 관계되는 유해·위험 요인 파악 및 위험성 추정
                        </p>
                        <p className="text pl-2">
                          · 허용 가능한 위험성 기준과 비교하여 위험성 결정
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-primary text-white text-[20px] flex items-center pl-8">
                      04. 보고서 작성·제출
                    </div>
                    <div className="border-b border-primary w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          현장에 적용 가능한 개선대책 제시
                        </strong>
                      </div>
                      <div className="md:w-1/2 mt-3 md:mt-0">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          위험성평가 결과에 대한 종합 보고서 제출
                        </strong>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ContentSubTitle title="위험성평가 컨설팅 수행 업무" />
              <ul className="-translate-y-[20px] text-[15px] leading-6 mb-5">
                <li className="w-full border-b border-gray md:flex  justify-between">
                  <div className="w-md:1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      1
                    </div>
                    <p className="ml-3">위험성평가의 실시방법·절차 지원</p>
                  </div>
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      2
                    </div>
                    <p className="ml-3">신청방법 및 심사방법 지원</p>
                  </div>
                </li>
                <li className="w-full border-b border-gray md:flex">
                  <div className="md:w-1/2 h-32 flex items-center">
                    <div className="w-16 h-16 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">
                      3
                    </div>
                    <p className="ml-3">교육·컨설팅 지원</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </section>
  );
};

export default InspectionClient;
