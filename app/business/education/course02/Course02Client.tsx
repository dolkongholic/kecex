"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicBusiness_02 from "@/public/img/page_top/business_02.jpg"
import content_icon from "@/public/img/icon/content_icon_circle.png";

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
      { title: "방폭교육 과정", url: "/business/education/course01" },
      { title: "산업안전 교육", url: "/business/education/course02" },
      { title: "위험성 평가 교육", url: "/business/education/course03" },
      { title: "정량적위험성평가 교육", url: "/business/education/course04" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "산업안전 교육";

const Course02Client = () => {
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
              <Link passHref href={"/business/education/course01/"}>
                <div className="h-12 border border-gray-200 border-b-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭교육 과정</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 산업안전 교육</span>
                </div>
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


          <ul className="w-full flex flex-wrap text-[12px] md:text-base mt-10 md:mt-0">
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 
              ${selectedLiIndex === 0
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 border-r-0"
              } cursor-pointer`}
              onClick={() => handleLiClick(0)}
            >
              PSM 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 0 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5 
              ${selectedLiIndex === 1
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 md:border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(1)}
            >
              MSDS 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 1 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${selectedLiIndex === 2
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 border-r-0 "
              } cursor-pointer`}
              onClick={() => handleLiClick(2)}
            >
              화재 및 폭발 예방 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 2 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${selectedLiIndex === 3
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-b-0 md:border-b"
              } cursor-pointer`}
              onClick={() => handleLiClick(3)}
            >
              밀폐공간 작업안전 및 <br/> 산업재해 예방 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 3 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${selectedLiIndex === 4
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0 border-b-0 md:border-b"
              } cursor-pointer`}
              onClick={() => handleLiClick(4)}
            >
              산업안전 보건법 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 4 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${selectedLiIndex === 5
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray md:border-r-0"
              } cursor-pointer`}
              onClick={() => handleLiClick(5)}
            >
              화학물질 관리 및 <br/> 안전 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 5 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 md:w-1/4 h-12 md:h-14 flex justify-between items-center pl-5
              ${selectedLiIndex === 6
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray"
              } cursor-pointer`}
              onClick={() => handleLiClick(6)}
            >
              근로자 안전 인식 및 <br/> 역량 강화 과정
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 6 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
          </ul>

          {/* <h3 className="w-40 h-14 bg-lightgray border border-darkgray mx-auto flex items-center justify-center">
            <p className="text-xl font-semibold">초급 과정</p>
          </h3> */}

        {/* PSM과정 */}
        <div className={`${selectedLiIndex === 0 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">PSM 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                공정안전관리(PSM)에 대한 이해를 높이고, 이를 통해 산업 현장에서의 안전성을 강화한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                공정안전관리 담당자, 안전관리자, 관련 업무 종사자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	PSM의 정의와 필요성</li>
                <li>2.	PSM 관련 법규 및 표준</li>
                <li>3.	공정안전보고서 작성 방법</li>
                <li>4.	PSM 요소와 이행 평가</li>
                <li>5.	사고 사례 분석 및 예방 대책</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>8시간 (1일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    200,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MSDS과정 */}
        <div className={`${selectedLiIndex === 1 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">MSDS 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                물질안전보건자료(MSDS)의 중요성을 이해하고, 올바르게 활용하는 방법을 익힌다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                산업 현장에서 화학물질을 다루는 작업자, 안전관리자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	MSDS의 정의와 필요성</li>
                <li>2.	MSDS 작성 및 관리 방법</li>
                <li>3.	화학물질의 분류 및 표시</li>
                <li>4.	MSDS를 통한 위험성 평가</li>
                <li>5.	사고 사례 및 예방 대책</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>4시간 (반일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    100,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 화재 및 폭발 예방 과정 */}
        <div className={`${selectedLiIndex === 2 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">화재 및 폭발 예방 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                산업 현장에서 화재와 폭발을 예방하는 방법을 익히고, 비상 상황에 대처하는 능력을 배양한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                안전관리자, 산업 현장 작업자, 화재 예방 담당자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	화재와 폭발의 원인 분석</li>
                <li>2.	화재 예방을 위한 안전 절차</li>
                <li>3.	폭발 예방을 위한 방폭 설비 이해</li>
                <li>4.	비상 대처 방법 및 훈련</li>
                <li>5.	사고 사례 분석 및 예방 대책</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>4시간 (1일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    100,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 밀폐공간 작업안전 및 산업재해 예방 과정 */}
        <div className={`${selectedLiIndex === 3 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">밀폐공간 작업안전 및 산업재해 예방 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                밀폐공간 작업 시 발생할 수 있는 위험을 이해하고, 이를 예방하기 위한 안전 절차를 익힌다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                밀폐공간에서 작업하는 작업자, 안전관리자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	밀폐공간의 정의와 위험성</li>
                <li>2.	밀폐공간 작업 안전 절차</li>
                <li>3.	산소 결핍 및 유해 가스 관리</li>
                <li>4.	비상 상황 대처 방법</li>
                <li>5.	사고 사례 및 예방 대책</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>4시간 (반일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    100,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>        

        {/* 산업안전 보건법 과정 */}
        <div className={`${selectedLiIndex === 4 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">산업안전 보건법 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                산업안전보건법에 대한 이해를 높이고, 법규를 준수하여 안전한 작업 환경을 조성한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                안전관리자, 산업안전보건 담당자, 관련 업무 종사자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	산업안전보건법의 정의와 필요성</li>
                <li>2.	산업안전보건법 주요 조항 해설</li>
                <li>3.	법규 준수를 위한 안전 절차</li>
                <li>4.	사고 사례 분석 및 법적 대응</li>
                <li>5.	최신 법규 동향 및 변화</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>4시간 (반일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    100,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>    

        {/* 화학물질 관리 및 안전 과정 */}
        <div className={`${selectedLiIndex === 5 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">화학물질 관리 및 안전 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                화학물질의 안전한 관리와 사용 방법을 이해하고, 이를 통해 사고를 예방한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                화학물질을 다루는 작업자, 안전관리자, 관련 업무 종사자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	화학물질의 분류와 특성</li>
                <li>2.	화학물질의 안전한 저장 및 취급 방법</li>
                <li>3.	유해 화학물질의 관리 절차</li>
                <li>4.	화학물질 사고 사례 분석 및 예방 대책</li>
                <li>5.	화학물질 관련 법규 및 표준</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>4시간 (반일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    100,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>  

        {/* 근로자 안전 인식 및 역량 강화 과정 */}
        <div className={`${selectedLiIndex === 6 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">근로자 안전 인식 및 역량 강화 과정</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                근로자의 안전 인식을 높이고, 안전한 작업 환경을 유지하기 위한 역량을 강화한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                모든 산업 분야의 근로자, 안전관리자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	안전의 중요성과 근로자의 역할</li>
                <li>2.	안전한 작업 절차와 규칙</li>
                <li>3.	비상 상황 대처 방법</li>
                <li>4.	근로자의 안전 의식 강화 교육</li>
                <li>5.	사고 사례 분석 및 예방 대책</li>
              </ul>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center mb-[20px]">
              <div className="w-full md:w-[49%] flex flex-col">
                <ContentSubTitle title="교육시간" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>8시간 (1일)</span>
                </div>
              </div>
              <div className="w-full md:w-[49%] flex flex-col mt-5 md:mt-0">
                <ContentSubTitle title="교육 비용" />
                <div className="flex flex-col justify-center items-start p-[20px] border border-gray w-full">
                  <span>
                    200,000원 (25,000원/시간)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>                           

        </section>
      </main>
    </section>
  );
};

export default Course02Client;
