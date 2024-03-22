"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
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
      { title: "산업진단, 컨설팅", url: "/business/consulting/industry" },
    ],
  },
];

const location = "경력수첩";

const CareerCardClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("회원");

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
              회원 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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

        <section className="py-[20px] px-[20px] md:px-0 md:pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/member/join"}>
                <div className="h-12 border border-b-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 회원가입</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/rule/"}>
                <div className="h-12 border border-gray-200 border-b-0 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 회원회칙</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/career/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 경력관리</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                    <span> 경력수첩</span>
                </div>
            </li>
          </ul>
          <ContentSubTitle title="운영계획" />
          <div className="flex flex-col text-[#003893] md:px-[20px]">
            <div className="text-[18px] flex">
              <p className="font-bold pr-[10px]">1.</p> 디지털 플랫폼 생성
            </div>
            <div className="text-base text-black">
              자신의 경력을 손쉽게 기록하고, 업데이트가 가능하도록 디지털 경력
              수첩 플랫폼을 개발
            </div>
          </div>
          <div className="flex flex-col text-[#003893] md:px-[20px] mt-[10px]">
            <div className="text-[18px] flex">
              <p className="font-bold pr-[10px]">2.</p> 표준화된 형식
            </div>
            <div className="text-base text-black">
              경력이 일관되게 기록될 수 있도록 표준화된 형식을 제공
            </div>
          </div>
          <div className="flex flex-col text-[#003893] md:px-[20px] mt-[10px]">
            <div className="text-[18px] flex">
              <p className="font-bold pr-[10px]">3.</p> 검증 절차 도입
            </div>
            <div className="text-base text-black">
              제출된 경력에 대한 검증 절차를 도입하여, 기록의 정확성과 신뢰성을
              보장
            </div>
          </div>
          <div className="flex flex-col text-[#003893] md:px-[20px] mt-[10px] mb-[40px]">
            <div className="text-[18px] flex">
              <p className="font-bold pr-[10px]">4.</p> 지속적인 교육 및 지원
            </div>
            <div className="text-base text-black">
              경력 수첩을 유지 및 관리 할 수 있도록 교육
            </div>
          </div>

          <ContentSubTitle title="운영목표" />
          <div className="md:px-[20px] md:flex w-full justify-between items-center text-black mb-[40px]">
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-gray  flex justify-center items-center md:items-start md:pt-[30px] my-2 md:my-0">
              1.
              <br />
              전문성 인증
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-gray  flex justify-center items-center md:items-start md:pt-[30px] my-2 md:my-0">
              2.
              <br />
              연속적인 학습과 
              <br className="hidden md:inline"/>
              &nbsp;개발 촉진
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-gray  flex justify-center items-center md:items-start md:pt-[30px] my-2 md:my-0">
              3.
              <br />
              투명성과 공정성 확보
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-gray  flex justify-center items-center md:items-start md:pt-[30px] my-2 md:my-0">
              4.
              <br />
              산업표준설정
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-gray  flex justify-center items-center md:items-start md:pt-[30px] my-2 md:my-0">
              5.
              <br />
              회원간 네트워킹 촉진
            </div>
          </div>

          <ContentSubTitle title="발급조건" />
          <div className="md:px-[20px] md:flex w-full text-[15px]">
            <div className="md:w-[90px] text-subtitle bg-darkgray md:bg-lightgray flex justify-center items-center h-[35px] md:h-auto">
              초급
            </div>
            <div className="md:w-[30%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 001 취득자</span>
              <span className="mt-1">그외 자격증 : 양성교육 수료 후 발급</span>
            </div>
            <div className="md:w-[25%]  py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0  border-r border-t md:border-b border-gray pb-[10px]">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span className="mt-1">학사학위 : 양성 교육</span>
              <span className="mt-1">
                3년제 전공 : <br className="hidden md:inline"/>
                경력 1년 이상 및 양성교육
              </span>
              <span className="mt-1">
                2년제 전공 : <br className="hidden md:inline"/>
                경력 2년 이상 및 양성교육
              </span>
            </div>
            <div className="md:w-[20%]  py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray">
              <span>전공학력 소지자</span>
              <span className="mt-1">경력 5년 이상 및 양성교육</span>
            </div>
            <div className="md:w-[25%]  py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span className="mt-1">
                3년제 전공 : <br className="hidden md:inline"/>
                경력 6년 이상 및 양성교육
              </span>
              <span className="mt-1">
                2년제 전공 : <br className="hidden md:inline"/>
                경력 7년 이상 및 양성교육
              </span>
            </div>
          </div>

          <div className="md:px-[20px] md:flex w-full text-[15px] mt-8 bd:mt-0">
            <div className="md:w-[90px] text-subtitle bg-darkgray md:bg-lightgray flex justify-center items-center h-[35px] md:h-auto">
              중급
            </div>
            <div className="md:w-[30%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray pb-[15px]">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 001,036 취득자</span>
              <span>IECEx CoPC Unit Ex 001,478 취득자</span>
              <span>IECEx CoPC Unit Ex 001,002 취득자</span>
              <span>IECEx CoPC Unit Ex 001,009 취득자</span>
            </div>
            <div className="md:w-[25%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span className="mt-1">방폭 실무 경력 : 5년 이상</span>
            </div>
            <div className="md:w-[20%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray">
              <span>-</span>
            </div>
            <div className="md:w-[25%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span className="mt-1">방폭 실무 경력 : 8년 이상</span>
            </div>
          </div>

          <div className="md:px-[20px] md:flex w-full text-[15px] mt-8 bd:mt-0">
            <div className="md:w-[90px] text-subtitle bg-darkgray md:bg-lightgray flex justify-center items-center h-[35px] md:h-auto">
              고급
            </div>
            <div className="md:w-[30%]  py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray pb-[15px]">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 001,036 취득자</span>
              <span>IECEx CoPC Unit Ex 001,478 취득자</span>
              <span>IECEx CoPC Unit Ex 001,002 취득자</span>
              <span>IECEx CoPC Unit Ex 001,009 취득자</span>
            </div>
            <div className="md:w-[25%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span className="mt-1">방폭 실무 경력 : 8년 이상</span>
            </div>
            <div className="md:w-[20%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray">
              <span>-</span>
            </div>
            <div className="md:w-[25%] py-[15px] md:py-0 md:pt-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span className="mt-1">방폭 실무 경력 : 12년 이상</span>
            </div>
          </div>

          <div className="md:px-[20px] md:flex w-full text-[15px] mt-8 bd:mt-0">
            <div className="md:w-[90px] text-subtitle bg-darkgray md:bg-lightgray flex justify-center items-center h-[35px] md:h-auto">
              특급
            </div>
            <div className="md:w-[30%]  py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray pb-[15px]">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 010 취득자</span>
            </div>
            <div className="md:w-[25%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray pb-[15px]">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span className="mt-1">방폭 실무 경력 : 12년 이상</span>
            </div>
            <div className="md:w-[20%] py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t md:border-b border-gray pb-[15px]">
              <span>-</span>
            </div>
            <div className="md:w-[25%]  py-[15px] px-[10px] flex flex-col justify-start items-start border-l md:border-l-0 border-r border-t border-b border-gray pb-[15px]">
              <span>비전공 학력 소지자</span>
              <span className="mt-1">방폭 실무 경력 : 15년 이상</span>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default CareerCardClient;
