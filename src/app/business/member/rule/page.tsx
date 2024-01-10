"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";

// Image
import PicIconArrow from "../../../../../public/img/icon/content_icon_arrow.png";

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

const location = "회원회칙";

export default function CareerPage() {
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
          <ContentSubTitle title="제 1장 총칙" />
          <div className="w-full flex justify-between items-center text-subtitle text-center h-[50px] mb-[20px]">
            <span className="pl-[10px] text-secondary w-[180px]">
              제1조 (정의)
            </span>
            <div className="w-full pt-[2px] flex justify-start items-end text-base">
              본 규정은 '사단법인 한국방폭협회'(이하 "본 협회"라 한다)의
              회원관리에 대한 규정을 명확히 하기 위해 총회의 의결로 정한다.
            </div>
          </div>
          <div className="w-full flex justify-between items-center text-subtitle text-center h-[50px] mb-[20px]">
            <span className="pl-[10px] text-secondary w-[180px]">
              제2조 (목적)
            </span>
            <div className="w-full pt-[18px] flex justify-start items-end text-base text-start">
              본 규정은 본 협회 정관 제 5조 제3항의 규정에 따라 본 협회 회원
              (이하 '회원'이라 한다)의 자격, 가입 회비 등에 관한 회원 관련 제반
              세부 사항을 정하는데 그 목적이 있다.
            </div>
          </div>
          <ContentSubTitle title="회원의 자격 및 종류" />

          <div className="w-full flex px-[20px] pb-[15px] mt-[10px]">
            <span className="pl-[10px] text-secondary w-[180px]">
              제1조 (회원의 자격)
            </span>
            <div className="w-full pt-[2px] flex justify-start items-end text-base">
              회원은 본 협회의 목적과 설립 취지에 동의하고, 정해진 가입 절차를
              마친 자로 한다.
            </div>
          </div>
          <div className="w-full border-b-2 border-gray flex px-[20px] pb-[15px] mt-[10px]">
            <div>
              <Image src={PicIconArrow} width={25} height={15} alt="icon" />
              <br />
            </div>
            <span className="pl-[10px] text-secondary w-[100px]">
              준회원
              <br />
            </span>
            <span>
              준회원은 회원 가입원서만 제출한 업체·단체 및 개인으로 한다.
            </span>
          </div>
          <div className="w-full border-b-2 border-gray flex px-[20px] pb-[15px] mt-[10px]">
            <Image src={PicIconArrow} width={25} height={15} alt="icon" />
            <span className="pl-[10px] text-secondary w-[100px]">일반회원</span>
            <span>
              일반회원은 정회원이외의 업체·단체 및 개인으로 회원 가입원서와
              회비를 납부한 자로 한다.
            </span>
          </div>
          <div className="w-full border-b-2 border-gray flex px-[20px] pb-[15px] mt-[10px] mb-[40px]">
            <Image src={PicIconArrow} width={25} height={15} alt="icon" />
            <span className="pl-[10px] text-secondary w-[100px]">기업회원</span>
            <span>
              일반회원으로서 이사회의 결의에 의해 회장이 추천하는 업체·단체로
              한다.
            </span>
          </div>
          <div className="w-full border-b-2 border-gray flex px-[20px] pb-[15px] mt-[10px] mb-[40px]">
            <Image src={PicIconArrow} width={25} height={15} alt="icon" />
            <span className="pl-[10px] text-secondary w-[100px]">특별회원</span>
            <span>
              특별회원은 이사회의 결의에 의해 회장이 추천하는 업체·단체 및
              개인으로 한다.
            </span>
          </div>

          <ContentSubTitle title="가입절차" />

          <div className="w-full flex justify-between px-[20px] items-center">
            <div className="w-[48%] h-[50px] flex justify-center items-center bg-secondary text-white text-center">
              온라인
            </div>
            <div className="w-[48%] h-[50px] flex justify-center items-center border border-secondary text-secondary text-center">
              오프라인
            </div>
          </div>

          <div className="w-full flex justify-between px-[20px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray text-secondary">
                회원가입 [ 신규 또는 재가입 ]
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center text-secondary">
                회비납부
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray text-secondary">
                회원가입 [ 신규 또는 재가입 ]
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center text-secondary">
                회비납부
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between px-[20px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                홈페이지 방문
                <br />
                (회원가입 여부 간편검색)
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                홈페이지 방문
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                협회 방문
                <br />
                (중앙회, 시·도회)
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                방문/지로:
                <br />
                협회 중앙회 및 시·도회
                <br />
                방문납부 또는 지로납부
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between px-[20px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center text-black">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                <SlArrowDown />
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                <SlArrowDown />
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center text-black">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                <SlArrowDown />
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                <SlArrowDown />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between px-[20px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                가입원서 작성
                <br />
                (재가입자는 정보수정)
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                회비납부 여부 간편검색
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                회원가입 상담 및<br />
                가입원서 작성
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                &nbsp;
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between px-[20px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center text-black">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                <SlArrowDown />
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                <SlArrowDown />
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center text-black">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                <SlArrowDown />
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                &nbsp;
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between px-[20px] mb-[40px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                회비납부 및 가입완료
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                회비 납부
                <br />
                (신용카드,계좌이체,가상계좌)
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                회비남부 및 가입완료
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                &nbsp;
              </div>
            </div>
          </div>

          <ContentSubTitle title="정회원 혜택" />
          <span className="mb-[40px] px-[20px]">
            협회에서 보유하고 있는 자료의 열람과 협회가 발행하는 각종 자료 및
            간행물 등을 받을 수 있으며, 세미나 강연 및 기타 협회에서 행하는 각종
            행사와 활동에 참여
          </span>

          <ContentSubTitle title="정회원 권한" />
          <span className="px-[20px]">· 협회의 운영과 발전에 대한 건의</span>
          <span className="px-[20px]">
            · 협회가 시행하는 각종 방폭관련 사업에 참여
          </span>
          <span className="px-[20px]">
            · 본회의 인적 및 물적 설비를 이요할 권리
          </span>
          <span className="px-[20px]">
            · 협회가 주관하는 각종 세미나 및 교육 등의 우선 참여
          </span>
          <span className="px-[20px]">
            · 협회의 임원, 대의원, 위원 기타 이 정관의 규정에 의하여 선임되는
            자의 선거권 및 피선거권을 취득
          </span>
          <span className="px-[20px]">
            &nbsp;&nbsp;&nbsp; 다만, 명예회원은 선거권과 피선거권을 제한
          </span>
        </section>
      </main>
      <Footer />
    </section>
  );
}
