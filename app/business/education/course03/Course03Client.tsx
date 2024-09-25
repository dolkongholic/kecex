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
      // { title: "방폭기기선정", url: "/business/consulting/equipment" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "위험성 평가 교육";

const Course03Client = () => {
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
                <div className="h-12 border border-gray-200 border-b-0 border-r-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 방폭기초교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/education/course02/"}>
                <div className="h-12 border flex flex-col border-gray-200 border-b-0 justify-center items-center cursor-default">
                  <span> 산업안전 교육</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 위험성 평가 교육</span>
                </div>
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
              className={`w-1/2 h-20 md:h-14 flex justify-between items-center pl-5 
              ${selectedLiIndex === 0
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray border-r-0"
              } cursor-pointer`}
              onClick={() => handleLiClick(0)}
            >
              위험성 평가 및<br className="md:hidden"/> HAZOP 과정<br className="md:hidden"/> (정성적 평가 1)
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 0 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
            <li
              className={`w-1/2 h-20 md:h-14 flex justify-between items-center pl-5 
              ${selectedLiIndex === 1
                  ? "border border-secondary text-black font-medium bg-lightgray bg-opacity-50"
                  : "border border-gray"
              } cursor-pointer`}
              onClick={() => handleLiClick(1)}
            >
              위험성 평가 및<br className="md:hidden"/> JSA 과정<br className="md:hidden"/> (정성적 평가 2)
              <Image
                src={content_icon}
                className={`w-4 md:w-6 mr-5 ${selectedLiIndex === 1 ? "inline-block" : "hidden"}`}
                alt="선택 아이콘"
              />
              {""}
            </li>
          </ul>

          {/* <h3 className="w-40 h-14 bg-lightgray border border-darkgray mx-auto flex items-center justify-center">
            <p className="text-xl font-semibold">초급 과정</p>
          </h3> */}

        {/* 위험성 평가 및 HAZOP 과정 (정성적 평가 1) */}
        <div className={`${selectedLiIndex === 0 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">위험성 평가 및 HAZOP 과정 (정성적 평가 1)</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                산업 현장에서의 위험성을 평가하고, HAZOP(위험성 및 운전성 연구) 기법을 이해하여 적용하는 방법을 학습한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                안전관리자, 위험성 평가 담당자, HAZOP 기법 적용자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	위험성 평가의 기본 개념</li>
                <li>2.	정성적 위험성 평가 방법론</li>
                <li>3.	HAZOP의 정의와 절차</li>
                <li>4.	HAZOP 기법 적용 사례 연구</li>
                <li>5.	사고 사례 분석 및 예방 대책</li>
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
                  <span>
                    400,000원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 위험성 평가 및 JSA 과정 (정성적 평가 2) */}
        <div className={`${selectedLiIndex === 1 ? "block" : "hidden"} w-full md:p-[20px]`}>
          <div>
            <h4 className="text-[18px] md:text-xl font-semibold underline underline-offset-4 mt-10">위험성 평가 및 JSA 과정 (정성적 평가 2)</h4>
            <ContentSubTitle title="교육목적" />
            <div className="w-full mb-[20px]">
              <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full leading-[30px]">
                <span>
                Job Safety Analysis(JSA) 기법을 이해하고 적용하여 작업장에서의 위험성을 평가하고 관리한다.
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육대상" />
            <div className="w-full mb-[20px]">
            <div className="flex flex-col justify-center items-start md:p-[20px] md:border border-gray w-full">
                <span>
                안전관리자, 위험성 평가 담당자, JSA 기법 적용자
                </span>
              </div>
            </div>

            <ContentSubTitle title="교육내용" />
            <div className="w-full mb-[20px]">
              <ul className="flex flex-col space-y-1 md:p-[20px] md:border border-gray w-full">
                <li>1.	JSA의 정의와 필요성</li>
                <li>2.	JSA 수행 절차와 방법</li>
                <li>3.	작업별 위험성 평가와 관리 방안</li>
                <li>4.	JSA 기법 적용 사례 연구</li>
                <li>5.	사고 사례 분석 및 예방 대책</li>
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
                  <span>
                    400,000원
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

export default Course03Client;
