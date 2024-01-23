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
          <div className=" mb-[40px]">
            <div className="w-full flex justify-between items-center text-subtitle text-center h-[50px] mb-[20px]">
              <span className="pl-[10px] text-secondary w-[180px]">
                제1조 (정의)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                본 규정은 {`'사단법인 한국방폭협회'(이하 "본 협회"라 한다)`}의
                회원관리에 대한 규정을 명확히 하기 위해 총회의 의결로 정한다.
              </div>
            </div>
            <div className="w-full flex justify-between items-center text-subtitle text-center h-[50px] mb-[20px]">
              <span className="pl-[10px] text-secondary w-[180px]">
                제2조 (목적)
              </span>
              <div className="w-full pt-[18px] flex justify-start items-end text-base text-start">
                본 규정은 본 협회 정관 제 5조 제3항의 규정에 따라 본 협회 회원
                (이하 {`'회원'`}이라 한다)의 자격, 가입 회비 등에 관한 회원 관련
                제반 세부 사항을 정하는데 그 목적이 있다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="제 2장 회원의 자격 및 종류" />
          <div className="w-full px-[20px] pb-[15px] mt-[10px] mb-[40px]">
            <div className="flex pb-[15px]">
              <span className="pl-[10px] text-secondary w-[220px]">
                제1조 (회원의 자격)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                회원은 본 협회의 목적과 설립 취지에 동의하고, 정해진 가입 절차를
                마친 자로 한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 (회원의 종류)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                회원은 준회원, 일반회원, 정회원, 기업회원, 명예회원등으로
                구분한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 1항 [준회원]
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                준회원은 회원 가입원서만 제출한 업체·단체 및 개인으로 한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 2항 [일반회원]
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                일반회원은 제2조 3항의 정회원 이외의 업체·단체 및 개인으로 한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 3항 [정회원]
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                일반회원으로서 이사회의 결의에 의해 회장이 추천하는 업체·단체 및
                개인으로 한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 4항 [기업회원]
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                일반회원으로서 이사회의 결의에 의해 회장이 추천하는 업체·단체로
                한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 5항 [특별회원]
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                특별회원은 이사회의 결의에 의해 회장이 추천하는 업체·단체 및
                개인으로 한다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="제 3장 회원의 가입절차 및 승인" />
          <div className="w-full px-[20px] pb-[15px] mt-[10px] mb-[40px]">
            <div className="flex pb-[15px]">
              <span className="pl-[10px] text-secondary w-[220px]">
                제5조 (회원의 가입절차)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                회원이 되고자하는 자는 정해진 {`'회원가입 신고서'`}를 본 협회에
                제출하여야 한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제6조 (회원의 승인)
              </span>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제6조 1항
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                준회원은 정해진 회원가입 신고서를 제출한 자로 한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제6조 2항
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                일반회원은 정해진 회원가입 신고서 제출 및 회비를 납부한 자로
                한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제6조 3항
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                정회원, 기업회원, 명예회원은 정해진 회원가입 신고서를 제출한 자
                중에서 이사회에서 심의·의결을 거쳐 최종 승인을 받은 자로 한다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="제 4장 회원의 권리 및 의무" />
          <div className="w-full px-[20px] pb-[15px] mt-[10px] mb-[40px]">
            <div className="flex pb-[15px]">
              <span className="pl-[10px] text-secondary w-[220px]">
                제1조 (정회원의 권리)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                ① 정회원은 협회 임원 선거권 및 피선거권을 가지며 총회에 참석하여
                협회의 활동과 회무에 관한 의견을 제안할 수 있다.
                <br />② 정회원은 총회의 의결권을 갖는다.
              </div>
            </div>
            <div className="flex pb-[15px]">
              <span className="pl-[10px] text-secondary w-[220px]">
                제2조 (일반회원의 권리)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                ① 일반회원, 정회원, 기업회원, 명예회원은 협회의 자료 및 출판물을
                제공받으며, 협회운영에 관한 자료를 열람할 수있으며, 세미나·강연
                및 기타협회에서 행하는 행사와 활동에 참여할 수 있다.
              </div>
            </div>
            <div className="flex pb-[15px]">
              <span className="pl-[10px] text-secondary w-[220px]">
                제3조 (회비)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                ① 회원의 회비는 일반회원회비, 정회원회비, 기업회원회비,
                명예회원회비로 구분하며, 이사회를 통해 회비를 정한다.
                <br />
                ② 회원의 회비는 연회비로 하고 당해연도 3월말까지 납부하여야
                한다.
                <br />③ 협회로부터 탈퇴 또는 제명된 자는 이미 납부한 입회금,
                회비, 기타 협회에 대하여 일체 그 반환을 청구할 수 없다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[220px]">
                제4조 (회원의 의무)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-base">
                회원은 다음의 의무를 진다.
                <br />
                1. 본 협회의 정관 및 모든 규정 준수
                <br />
                2. 총회 및 이사회의 결의사항 이행
                <br />
                3. 회비 및 모든 부담금의 납부
                <br />
                4. 회원의 윤리·품위 유지·실천 의무
                <br />
                5. 정관 및 제반규정으로 정하는 각종 자료제출과 보고에 회원으로서
                적극적 협조
              </div>
            </div>
          </div>

          <ContentSubTitle title="제 5장 회원 탈퇴, 제명 및 재가입" />
          <div className="w-full px-[20px] pb-[15px] mt-[10px]">
            <span className="pl-[10px] text-secondary w-[180px]">
              제1조 (회원의 탈퇴)
            </span>
            <div className="w-full pt-[2px] pl-[10px] pb-[5px] flex justify-start items-end text-base mb-[5px]">
              회원은 본인의 의사에 따라 {`'회원탈퇴서'`}를 제출함으로써 자유롭게
              탈퇴할 수 있다.
            </div>
            <span className="pl-[10px] text-secondary w-[180px]">
              제2조 (회원의 제명)
            </span>
            <div className="w-full pt-[2px] pl-[10px] pb-[5px] flex justify-start items-end text-base mb-[5px]">
              회원이 협회의 명예를 손상시키거나 목적 수행에 지장을 초래한 경우
              또는 1년 이상 회원의 의무를 준수하지 않은 경우에는 이사회의 의결을
              거쳐 제명할 수 있다.
            </div>
            <span className="pl-[10px] text-secondary w-[180px]">
              제3조 (회원의 재가입)
            </span>
            <div className="w-full pt-[2px] pl-[10px] flex justify-start items-end text-base mb-[40px]">
              본 규정 제8조에 따라 탈퇴한 자가 회원 재가입을 하는 경우에는
              탈퇴일로부터 1년 경과 후 재가입 할 수 있고, 제9조에 따라 제명된
              자가 재가입을 하는 경우에는 제명일로부터 5년 경과 후 재가입 할 수
              있다.
            </div>
          </div>

          <ContentSubTitle title="보칙" />
          <div className="w-full px-[20px] pb-[15px] mt-[10px] mb-[40px]">
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[180px]">
                제1조 (포상)
              </span>
              <div className="w-full pt-[2px] pl-[10px] pb-[5px] flex justify-start items-end text-base mb-[5px]">
                ①회원이 협회의 명예를 선양하거나 타인에게 모범적이고 귀감이 될
                경우 이사회의 심의, 의결로 포상을 할 수 있다.
                <br />
                ②협회는 회원이 아닌 자·단체·업체가 타의 귀감이 되고 협회와
                방폭산업계에 공헌하였을 경우 이사회의 의결로 포상할 수 있다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[180px]">
                제2조 (권리 상실)
              </span>
              <div className="w-full pt-[2px] pl-[10px] flex justify-start items-end text-base mb-[5px]">
                회원이 탈퇴 및 제명으로 인하여 회원의 자격을 상실한 경우에는
                납부한 회비 등에 대한 권리를 요구할 수 없다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="부칙" />
          <div className="w-full px-[20px] pb-[15px] mt-[10px]">
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[180px]">
                제1조 (시행일)
              </span>
              <div className="w-full pt-[2px] pl-[10px] pb-[5px] flex justify-start items-end text-base mb-[5px]">
                이 규정은 총회에서 의결한 즉시 효력을 발생한다.
              </div>
            </div>
            <div className="flex">
              <span className="pl-[10px] text-secondary w-[180px]">
                제2조 (경과조치)
              </span>
              <div className="w-full pt-[2px] pl-[10px] flex justify-start items-end text-base mb-[5px]">
                이 규칙의 제정 이전에 시행된 사항에 관하여는 이 규칙에 의하여
                시행된 것으로 본다.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
