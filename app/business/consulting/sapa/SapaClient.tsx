"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import content_icon from "@/public/img/icon/content_icon_circle.png";
import PicBusiness_03 from "@/public/img/page_top/business_03.jpg"

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

const location = "중대재해처벌법";

const SapaClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("컨설팅");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_03}
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
              컨설팅 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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
              <Link passHref href={"/business/consulting/inspection/"}>
                <div className="h-12 border border-gray-200 border-r-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭사전진단</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/consulting/psm/"}>
                <div className="h-12 border border-gray-200 border-b-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium ">
                  <span> PSM</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 중대재해처벌법</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/consulting/danger/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 위험성 평가</span>
                </div>
              </Link>
            </li>
          </ul>
            {/*중대재해처벌법 컨설팅 */}
              <ContentSubTitle title="중대재해처벌법 컨설팅 대상" />
              <ul className="-translate-y-[20px] text-[15px] mb-5 w-full">
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      01
                    </div>
                    <p className="ml-3 pr-3">중대재해처벌에 관한 법률에 대응하기 위한 사업장</p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 p-2 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      02
                    </div>
                    <p className="ml-3 pr-3">중대재해처벌법 및 산업안전보건법을 적절하게 이행하고 있는지 <br className="hidden md:inline"/>
                      확인하고자 하는 사업장</p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      03
                    </div>
                    <p className="ml-3 pr-3">안전한 작업환경을 조성하여 중대재해를 예방하고자 하는 사업장</p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      04
                    </div>
                    <p className="ml-3 pr-3">
                      자체적으로 안전관리 및 법이행실태를 점검하고자 하는 사업장
                    </p>
                  </div>
                </li>
              </ul>
              <ContentSubTitle title="중대재해처벌법 컨설팅 내용" />
              <div className="md:flex justify-between text-[17px] mb-10 w-full border border-[#ccc]">
                <div className="md:w-1/3 border-r border-[#ccc] text-center mb-5 md:mb-0 px-3 md:px-0 flex flex-col items-center">
                  <p className="text-secondary text-[19px] w-full h-[105px] bg-lightgray leading-[105px] font-medium mt-3 md:mt-0">
                    안전보건관리체계
                  </p>
                  <span className="mt-6">
                    <RiArrowDownSLine className="w-24 h-[36px] text-secondary text-center"/>
                  </span>
                  <p className="h-[145px] p-5">
                    안전관리조직 구성 및 운영실태를<br />
                    파악 및 분석하여, 적합한 안전보건<br />
                    관리체계 구축 방안 제시
                  </p>
                </div>
                <div className="md:w-1/3 border-r border-[#ccc] text-center mb-5 md:mb-0 px-3 md:px-0 flex flex-col items-center">
                  <p className="text-[#60B86F] text-[19px] w-full h-[105px] bg-lightgray leading-[105px] font-medium">
                    안전관리시스템(PDCA)
                  </p>
                  <span className="mt-6">
                    <RiArrowDownSLine className="w-24 h-[36px] text-[#60B86F] text-center"/>
                  </span>
                  <p className="h-[145px] p-5">
                  안전관리시스템 구축현황 및<br />
                  운영실태를 점검하여, 보다 효율적인<br />
                  안전관리시스템 구축 및 운영방안 제시
                  </p>
                </div>
                <div className="md:w-1/3 border-r border-[#ccc] text-center mb-5 md:mb-0 px-3 md:px-0 flex flex-col items-center">
                  <p className="text-primary text-[19px] w-full h-[105px] bg-lightgray leading-[105px] font-medium">
                    안전한 작업환경
                  </p>
                  <span className="mt-6">
                    <RiArrowDownSLine className="w-24 h-[36px] text-primary text-center"/>
                  </span>
                  <p className="h-[145px] p-5">
                    현장진단을 통한<br />
                    잠재유해위험요인 발굴 및<br />
                    개선방안 제시
                  </p>
                </div>
              </div>
              <ContentSubTitle title="중대재해처벌법 컨설팅 절차" />
              <div className="w-full flex">
                <div className="hidden md:block w-[50px] relative">
                  <div className="w-full h-full">
                    <div className="flex h-[630px]">
                      <div className="w-1/5">&nbsp;</div>
                      <div className="w-4/5 h-[612px] bg-gradient-to-b from-secondary to-[#60B86F]">
                        &nbsp;
                      </div>
                    </div>
                    <div className="w-full h-[50px] relative">
                      <IoMdArrowDropdown className="w-28 h-[190px] absolute -bottom-10 -left-[25.5px] text-[#60B86F]" />
                    </div>
                    {/* 화살표 삼각형 */}
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white -top-[10px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1 pl-1">
                    01
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white top-[220px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1">
                    02
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white top-[440px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1">
                    03
                  </div>
                </div>
                <ul className="w-full md:w-[1100px] text-[15px] md:text-[16px]">
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      서류 평가
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          사업장 안전보건관리시스템 문서 점검
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 안전관리책임자 선임 등 문서관리 상태 파악
                        </p>
                        <p className="text pl-2 mt-1">· 운영상태 및 이행여부</p>
                        <p className="text pl-2 mb-3 mt-1">
                          · 산안법/연안법 위반 여부
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          안전관리 문서
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 위험성평가, 작업 시작 전 점검, 비상조치계획 등에
                          대한 서류 점검 진행
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      현장 평가
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          안전관리현황 및 이행 상태 파악
                        </strong>
                        <p className="text pl-2 mb-3 mt-2">
                          · 산업안전보건법, 시행령, 시행규칙 이행여부
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          현장 안전 수준 파악
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 산업안전보건기준 규칙 준수여부
                        </p>
                        <p className="text pl-2 mt-1">
                          · 위험요인 및 법규 위반·지적 사항
                        </p>
                        <p className="text pl-2 mt-1">
                          · 기계, 전기, 화공 분야 심층분석
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      개선안 도출 및 보고서 작성
                    </div>
                    <div className="border-b border-[#ccc] w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          안전보건관리시스템 개선안 제시
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 문서관리 및 운영상태 개선안 제시
                        </p>
                        <p className="text pl-2 mt-1">
                          · 위험성평가, 작업 시작 전 점검 등 서류 보완사항 제시
                        </p>
                      </div>
                      <div className="md:w-1/2 mt-2 md:mt-0">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          현장 안전관리 현황에 따른 개선안 제시
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 산업안전보건법 및 하위법령에 따른 개선안
                        </p>
                        <p className="text pl-2 mt-1">
                          · 기계, 전기, 화공 분야 심층적 개선안
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
        </section>
      </main>
    </section>
  );
};

export default SapaClient;
