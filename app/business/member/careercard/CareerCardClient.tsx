"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicBusiness_01 from "@/public/img/page_top/business_01.jpg";

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

const location = "경력수첩";

const CareerCardClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("회원");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_01}
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
              회원{" "}
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
          <div className="w-full p-[20px] border mb-[10px] leading-9">
            <div className="flex flex-col text-[#003893]">
              <div className="text-[18px] flex font-semibold">
                <p className="pr-[5px]">1.</p> 디지털 플랫폼 생성
              </div>
              <div className="text-base text-black">
                자신의 경력을 손쉽게 기록하고, 업데이트가 가능하도록 디지털 경력
                수첩 플랫폼을 개발
              </div>
            </div>
            <div className="flex flex-col text-[#003893] mt-[24px]">
              <div className="text-[18px] flex font-semibold">
                <p className="pr-[5px]">2.</p> 표준화된 형식
              </div>
              <div className="text-base text-black">
                경력이 일관되게 기록될 수 있도록 표준화된 형식을 제공
              </div>
            </div>
            <div className="flex flex-col text-[#003893] mt-[24px]">
              <div className="text-[18px] flex font-semibold">
                <p className="pr-[5px]">3.</p> 검증 절차 도입
              </div>
              <div className="text-base text-black">
                제출된 경력에 대한 검증 절차를 도입하여, 기록의 정확성과
                신뢰성을 보장
              </div>
            </div>
            <div className="flex flex-col text-[#003893] mt-[24px]">
              <div className="text-[18px] flex font-semibold">
                <p className="pr-[5px]">4.</p> 지속적인 교육 및 지원
              </div>
              <div className="text-base text-black">
                경력 수첩을 유지 및 관리 할 수 있도록 교육
              </div>
            </div>
          </div>

          <ContentSubTitle title="운영목표" />
          <div className="md:flex w-full justify-between items-center text-black mb-[40px] text-[18px] font-medium">
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-[#3A3A3A] flex justify-center items-center my-2 md:my-0">
              전문성 인증
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-[#3A3A3A] flex justify-center items-center my-2 md:my-0">
              연속적인 학습과
              <br className="hidden md:inline" />
              &nbsp;개발 촉진
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-[#3A3A3A] flex justify-center items-center my-2 md:my-0">
              투명성과&nbsp;
              <br className="hidden md:inline" />
              공정성 확보
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-[#3A3A3A] flex justify-center items-center my-2 md:my-0">
              산업표준설정
            </div>
            <div className="md:w-[19%] h-[90px] md:h-[130px] text-center border border-[#3A3A3A] flex justify-center items-center my-2 md:my-0">
              회원간&nbsp;
              <br className="hidden md:inline" />
              네트워킹 촉진
            </div>
          </div>

          <ContentSubTitle title="발급조건" />
          <article className="w-full text-[15px]">
            <div className="flex w-full justify-between h-14 border-b-2 border-[#3A3A3A]">
              <div className="flex justify-center items-center md:h-auto text-[18px] text-black font-medium">
                · 초급
              </div>
              <p className=" flex justify-center items-center text-[13px] md:text-[15px]">
                ※ 등급별 1개 조건에 부합할 시 발급조건에 충족함.
              </p>
            </div>
            <div className="flex w-full border-b">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r pr-[7px] md:pr-0">
                <strong>한국방폭협회 방폭 기초교육 이수자</strong>
                <span className="mt-1">IECEx CoPC Unit Ex 001 취득자</span>
                <span className="mt-1">
                  그외 자격증 : 양성교육 수료 후 발급
                </span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>방폭관련 자격증 및 전공 학력 소지자</strong>
                <span className="mt-1">학사학위 : 양성 교육</span>
                <span className="mt-1">
                  3년제 전공 : <br className="hidden" />
                  경력 1년 이상 및 양성교육
                </span>
                <span className="mt-1">
                  2년제 전공 : <br className="hidden" />
                  경력 2년 이상 및 양성교육
                </span>
              </div>
            </div>
            <div className="flex w-full border-b-2">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r border-gray pr-[7px] md:pr-0">
                <strong>전공학력 소지자</strong>
                <span className="mt-1">경력 5년 이상 및 양성교육</span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>비전공 학력 소지자</strong>
                <span className="mt-1">
                  3년제 전공 : <br className="hidden" />
                  경력 6년 이상 및 양성교육
                </span>
                <span className="mt-1">
                  2년제 전공 : <br className="hidden" />
                  경력 7년 이상 및 양성교육
                </span>
              </div>
            </div>
          </article>

          <article className="w-full text-[15px] mt-8">
            <div className="flex w-full justify-between h-14 border-b-2 border-[#3A3A3A]">
              <div className="flex justify-center items-center md:h-auto text-[18px] text-black font-medium">
                · 중급
              </div>
            </div>
            <div className="flex w-full border-b">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r pr-[7px] md:pr-0">
                <strong>한국방폭협회 방폭 기초교육 이수자</strong>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,036 취득자
                </span>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,478 취득자
                </span>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,002 취득자
                </span>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,009 취득자
                </span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>방폭관련 자격증 및 전공 학력 소지자</strong>
                <span className="mt-1">방폭 실무 경력 : 5년 이상</span>
              </div>
            </div>
            <div className="flex w-full border-b-2">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r border-gray pr-[7px] md:pr-0">
                <span>-</span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>비전공 학력 소지자</strong>
                <span className="mt-1">방폭 실무 경력 : 8년 이상</span>
              </div>
            </div>
          </article>

          <article className="w-full text-[15px] mt-8">
            <div className="flex w-full justify-between h-14 border-b-2 border-[#3A3A3A]">
              <div className="flex justify-center items-center md:h-auto text-[18px] text-black font-medium">
                · 고급
              </div>
            </div>
            <div className="flex w-full border-b">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r pr-[7px] md:pr-0">
                <strong>한국방폭협회 방폭 기초교육 이수자</strong>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,036 취득자
                </span>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,478 취득자
                </span>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,002 취득자
                </span>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 001,009 취득자
                </span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>방폭관련 자격증 및 전공 학력 소지자</strong>
                <span className="mt-1">방폭 실무 경력 : 8년 이상</span>
              </div>
            </div>
            <div className="flex w-full border-b-2">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r border-gray pr-[7px] md:pr-0">
                <span>-</span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>비전공 학력 소지자</strong>
                <span className="mt-1">방폭 실무 경력 : 12년 이상</span>
              </div>
            </div>
          </article>

          <article className="w-full text-[15px] mt-8">
            <div className="flex w-full justify-between h-14 border-b-2 border-[#3A3A3A]">
              <div className="flex justify-center items-center md:h-auto text-[18px] text-black font-medium">
                · 특급
              </div>
            </div>
            <div className="flex w-full border-b">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r pr-[7px] md:pr-0">
                <strong>한국방폭협회 방폭 기초교육 이수자</strong>
                <span>
                  IECEx CoPC Unit <br className="md:hidden" /> Ex 010 취득자
                </span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>방폭관련 자격증 및 전공 학력 소지자</strong>
                <span className="mt-1">방폭 실무 경력 : 12년 이상</span>
              </div>
            </div>
            <div className="flex w-full border-b-2">
              <div className="w-[50%] my-[15px] py-[10px] flex flex-col justify-start items-start border-r border-gray pr-[7px] md:pr-0">
                <span>-</span>
              </div>
              <div className="w-[50%] my-[15px] py-[10px] pl-[7px] md:pl-[25px] flex flex-col justify-start items-start">
                <strong>비전공 학력 소지자</strong>
                <span className="mt-1">방폭 실무 경력 : 15년 이상</span>
              </div>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
};

export default CareerCardClient;
