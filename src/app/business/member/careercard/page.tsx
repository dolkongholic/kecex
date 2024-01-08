"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import PicCareer_1 from "../../../../../public/img/pages/business/careear_1.png";
import PicCareer_2 from "../../../../../public/img/pages/business/careear_2.png";
import PicCareer_3 from "../../../../../public/img/pages/business/careear_3.png";

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
      { title: "교육개발", url: "/business/education/develop" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      { title: "방폭기기선정", url: "/business/consulting/equipment" },
    ],
  },
];

const location = "경력수첩";

export default function CareerCardPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("회원");

  return (
    <section>
      <Header menu={menu} setMenu={setMenu} />

      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
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

      <main className="w-[1400px] flex justify-between items-start m-auto">
        <section className="flex flex-col justify-start items-center">
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ContentSubTitle title="운영계획" />
          <div className="flex flex-col text-black px-[20px]">
            <div className="text-subtitle flex">
              <p className="font-bold pr-[10px]">1.</p> 디지털 플랫폼 생성
            </div>
            <div className="text-base">
              자신의 경력을 손쉽게 기록하고, 업데이트가 가능하도록 디지털 경력
              수첩 플랫폼을 개발
            </div>
          </div>
          <div className="flex flex-col text-black px-[20px] mt-[10px]">
            <div className="text-subtitle flex">
              <p className="font-bold pr-[10px]">2.</p> 표준화된 형식
            </div>
            <div className="text-base">
              경력을 일관되게 기록될 수 있도록 표준화된 형식을 제공
            </div>
          </div>
          <div className="flex flex-col text-black px-[20px] mt-[10px]">
            <div className="text-subtitle flex">
              <p className="font-bold pr-[10px]">3.</p> 검증 절차 도입
            </div>
            <div className="text-base">
              제출된 경력에 대한 검증 절차를 도입하여, 기록의 정확성과 신뢰성을
              보장
            </div>
          </div>
          <div className="flex flex-col text-black px-[20px] mt-[10px] mb-[40px]">
            <div className="text-subtitle flex">
              <p className="font-bold pr-[10px]">4.</p> 지속적인 교육 및 지원
            </div>
            <div className="text-base">
              경력 수첩을 유지 및 관리 할 수 있도록 교육
            </div>
          </div>

          <ContentSubTitle title="운영목표" />
          <div className="px-[20px] flex w-full justify-between items-center text-black mb-[40px]">
            <div className="w-[19%] h-[130px] text-center border border-gray  flex justify-center items-start pt-[30px]">
              1.
              <br />
              전문성 인증
            </div>
            <div className="w-[19%] h-[130px] text-center border border-gray  flex justify-center items-start pt-[30px]">
              2.
              <br />
              연속적인 학습과
              <br />
              개발 촉진
            </div>
            <div className="w-[19%] h-[130px] text-center border border-gray  flex justify-center items-start pt-[30px]">
              3.
              <br />
              투명성과 공정성 확보
            </div>
            <div className="w-[19%] h-[130px] text-center border border-gray  flex justify-center items-start pt-[30px]">
              4.
              <br />
              산업표준설정
            </div>
            <div className="w-[19%] h-[130px] text-center border border-gray  flex justify-center items-start pt-[30px]">
              5.
              <br />
              회원간 네트워킹 촉진
            </div>
          </div>

          <ContentSubTitle title="발급조건" />
          <div className="px-[20px] flex w-full">
            <div className="w-[70px] text-subtitle bg-gray flex justify-center items-center">
              초급
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 001 취득자</span>
              <span>그외 자격증 : 양성교육 수료 후 발급</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span>학사학위 : 양성 교육</span>
              <span>
                3년제 전공 : <br />
                경력 1년 이상 및 양성교육
              </span>
              <span>
                2년제 전공 : <br />
                경력 2년 이상 및 양성교육
              </span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>전공학력 소지자</span>
              <span>경력 5년 이상 및 양성교육</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span>
                3년제 전공 : <br />
                경력 6년 이상 및 양성교육
              </span>
              <span>
                2년제 전공 : <br />
                경력 7년 이상 및 양성교육
              </span>
            </div>
          </div>

          <div className="px-[20px] flex w-full my-[15px]">
            <div className="w-[70px] text-subtitle bg-gray flex justify-center items-center">
              중급
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 001,036 취득자</span>
              <span>IECEx CoPC Unit Ex 001,478 취득자</span>
              <span>IECEx CoPC Unit Ex 001,002 취득자</span>
              <span>IECEx CoPC Unit Ex 001,009 취득자</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span>방폭 실무 경력 : 5년 이상</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>-</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span>방폭 실무 경력 : 8년 이상</span>
            </div>
          </div>

          <div className="px-[20px] flex w-full my-[15px]">
            <div className="w-[70px] text-subtitle bg-gray flex justify-center items-center">
              고급
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 001,036 취득자</span>
              <span>IECEx CoPC Unit Ex 001,478 취득자</span>
              <span>IECEx CoPC Unit Ex 001,002 취득자</span>
              <span>IECEx CoPC Unit Ex 001,009 취득자</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span>방폭 실무 경력 : 8년 이상</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>-</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span>방폭 실무 경력 : 12년 이상</span>
            </div>
          </div>

          <div className="px-[20px] flex w-full my-[15px]">
            <div className="w-[70px] text-subtitle bg-gray flex justify-center items-center">
              특급
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>한국방폭협회 방폭 기초교육 이수자</span>
              <span>IECEx CoPC Unit Ex 010 취득자</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>방폭관련 자격증 및 전공 학력 소지자</span>
              <span>방폭 실무 경력 : 12년 이상</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>-</span>
            </div>
            <div className="w-1/4 pt-[10px] px-[10px] flex flex-col justify-start items-start text-base border-r border-t border-b border-gray">
              <span>비전공 학력 소지자</span>
              <span>방폭 실무 경력 : 15년 이상</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
