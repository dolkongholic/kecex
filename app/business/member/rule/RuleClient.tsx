"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicBusiness_01 from "@/public/img/page_top/business_01.jpg"

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

const location = "회원회칙";

const RuleClient = () => {
  const [menu, setMenu] = useState<string>("");
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
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
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 회원회칙</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/career/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 경력관리</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/careercard/"}>
                <div className="h-12 border border-l-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 경력수첩</span>
                </div>
              </Link>
            </li>
          </ul>
          <ContentSubTitle title="제 1장 총칙" />
          <div className=" mb-[40px]">
            <div className="w-full md:flex justify-between items-center text-subtitle text-center h-auto md:h-[50px] md-[20px]">
              <span className="text-secondary w-[120px] text-[15px] md:text-base text-start">
                제1조(정의)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base pl-2 md:pl-0">
                본 규정은 {`'사단법인 한국방폭협회'(이하 "본 협회"라 한다)`}의
                회원관리에 대한 규정을 명확히 하기 위해 총회의 의결로 정한다.
              </div>
            </div>
            <div className="w-full md:flex justify-between items-center text-subtitle text-center md:h-[50px] md:mb-[20px] mt-[20px] md:mt-0">
              <span className=" text-secondary  w-[120px] text-[15px] md:text-base text-start">
                제2조(목적)
              </span>
              <div className="w-full md:pt-[18px] flex justify-start items-end text-[15px] md:text-base pl-2 md:pl-0 text-start mb-[20px] md:mb-0">
                본 규정은 본 협회 정관 제 5조 제3항의 규정에 따라 본 협회 회원
                (이하 {`'회원'`}이라 한다)의 자격, 가입 회비 등에 관한 회원 관련
                제반 세부 사항을 정하는데 그 목적이 있다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="제 2장 회원의 자격 및 종류" />
          <div className="w-full pb-[15px] mt-[10px] mb-[40px]">
            <div className="md:flex pb-[15px]">
              <span className="text-secondary w-[220px] text-[15px] md:text-base text-center md:text-start">
                제3조 
                (회원의 자격)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                회원은 본 협회의 목적과 설립 취지에 동의하고, 정해진 가입 절차를
                마친 자로 한다.
              </div>
            </div>
            <div className="md:flex">
              <span className="text-secondary w-[220px] text-[15px] md:text-base text-center md:text-start">
                제4조
                (회원의 종류)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                회원은 일반회원, 정회원, 기업회원, 명예회원등으로
                구분한다.
              </div>
            </div>
            <div className="md:flex">
              <span className="text-secondary w-[220px] text-[15px] md:text-base text-center md:text-start mt-2 md:mt-1">
                ① &nbsp;【일반회원】
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                학생(대학원생 포함) 및 개인이 가입원서와 회비를 납부한 자로 하며 총회에 의결권이 없다.
              </div>
            </div>
            <div className="md:flex">
              <span className="text-secondary w-[220px] text-[15px] md:text-base text-center md:text-start mt-2 md:mt-1">
                ② &nbsp;【정회원】
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                정회원은 협회 임원 선거권 및 피선거권을 가지며 총회에 참석하여 협회 활동에 의견을 제안하고 의결에 참여할 권리가 있다.
              </div>
            </div>
            <div className="md:flex">
              <span className=" text-secondary w-[220px] text-[15px] md:text-base text-center md:text-start mt-2 md:mt-1">
                ③ &nbsp;【기업회원】
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                기업회원은 기업체 등에서 가입하는 것으로 기업회원 가입 제한 규정은 이사회에서 별도로 정하여 시행한다.
              </div>
            </div>
            <div className="md:flex">
              <span className=" text-secondary w-[220px] text-[15px] md:text-base text-center md:text-start mt-2 md:mt-1">
                ④ &nbsp;【명예회원】
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                이사회 의결을 거쳐 회장이 추천하는 기업체·단체 및 개인으로 하며 기부금조로 일부 회비를 납부할 수 있다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="제 3장 회원의 가입절차 및 승인" />
          <div className="w-full pb-[15px] mt-[10px] mb-[40px] text-[15px] md:text-base">
            <div className="md:flex pb-[15px]">
              <span className="text-secondary w-[220px]">
                제5조 (회원의 가입절차)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                신규 회원이 되고자하는 자는 정해진 {`'회원가입 신고서'`}(서식 1)를 본 협회에
                제출하면서 가입비와 연회비를 납부하며, 기존회원은 연회비를 납부한다.
              </div>
            </div>
            <div className="md:flex">
              <span className=" text-secondary w-[195px] text-[15px] md:text-base">
                제6조 (회원의 승인)
              </span>
              <div className="">
              <div className="w-full flex justify-start items-end text-[15px] md:text-base">
                ① 【일반회원】은 정해진 회원가입 신고서 제출 및 회비를 납부한 자로 한다.
              </div>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                ② 【정회원】, 【기업회원】, 【명예회원】은 정해진 회원가입 신고서를 제출한 자
                중에서 이사회에서 심의·의결을 거쳐 최종 승인을 받은 자로 한다.
              </div>
            </div>
            </div>

          </div>

          <ContentSubTitle title="제 4장 회원의 권리 및 의무" />
          <div className="w-full pb-[20px] mt-[10px] mb-[40px]">
            <div className="md:flex pb-[15px]">
              <span className="text-secondary w-[220px] text-[15px] md:text-base">
                제7조 (정회원 및 <br/> 기업회원의 권리)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                ① 정회원은 협회 임원 선거권 및 피선거권을 가지며 총회에 참석하여
                협회의 활동과 회무에 관한 의견을 제안할 수 있다.
                <br />② 정회원은 총회의 의결권을 갖는다.
              </div>
            </div>
            <div className="md:flex pb-[20px]">
              <span className=" text-secondary w-[220px] text-[15px] md:text-base">
                제8조 (일반회원 및 <br/> 명예회원의 권리)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                ① 일반회원, 명예회원은 협회의 자료 및 출판물을
                제공받으며, 협회운영에 관한 자료를 열람할 수 있으며, 세미나·강연
                및 기타협회에서 행하는 행사와 활동에 참여할 수 있다. 다만, 총회 개최 시 의결권이 없다.
              </div>
            </div>
            <div className="md:flex pb-[20px]">
              <span className=" text-secondary w-[220px] text-[15px] md:text-base">
                제9조 (회비)
              </span>
              <div className="w-full pt-[2px] flex flex-col justify-start items-start text-[15px] md:text-base">
                ① 회원의 회비는 일반회원비, 정회원비, 기업회원비,
                명예회원비로 구분하며, 이사회를 통해 회비를 정한다.(정관 제5조 회원의 자격, 가입회비 등에 관한 세부사항은 총회에서 별도의 규정으로 정한다.)
                <br />
                <table className="w-full block h-auto my-3 text-center border-y-2 border-[#3A3A3A]">
                  <div className="flex border-b  border-[#3A3A3A]">
                    <th className="w-1/5 border-r border-[#3A3A3A]">구분</th>
                    <th className="w-1/5 border-r border-[#3A3A3A]">일반회원</th>
                    <th className="w-1/5 border-r border-[#3A3A3A]">정회원</th>
                    <th className="w-1/5 border-r border-[#3A3A3A]">기업회원</th>
                    <th className="w-1/5">명예회원</th>
                  </div>
                  <div className="flex">
                    <th className="w-1/5 border-r border-[#3A3A3A]">가입비</th>
                    <td className="w-1/5 border-r border-[#3A3A3A]">20,000원</td>
                    <td className="w-1/5 border-r border-[#3A3A3A]">100,000원</td>
                    <td className="w-1/5 border-r border-[#3A3A3A]">1,000,000원</td>
                    <td className="w-1/5">-</td>
                  </div>
                  <div className="flex">
                    <th className="w-1/5 border-r border-[#3A3A3A]">연회비</th>
                    <td className="w-1/5 border-r border-[#3A3A3A]">30,000원</td>
                    <td className="w-1/5 border-r border-[#3A3A3A]">120,000원</td>
                    <td className="w-1/5 border-r border-[#3A3A3A]">500,000원</td>
                    <td className="w-1/5">-</td>
                  </div>
                </table>
                ② 회원의 회비는 연회비로 하고 당해연도 3월말까지 납부하여야
                한다.
                <br />③ 협회로부터 탈퇴 또는 제명된 자는 이미 납부한 입회금,
                회비, 기타 협회에 대하여 일체 그 반환을 청구할 수 없다.
              </div>
            </div>
            <div className="md:flex pb-[20px]">
              <span className="text-secondary w-[220px] text-[15px] md:text-base">
                제10조 (회원의 의무)
              </span>
              <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base">
                ① 본 협회의 정관 및 모든 규정 준수
                <br />
                ② 총회 및 이사회의 결의사항 이행
                <br />
                ③ 회비 및 모든 부담금의 납부
                <br />
                ④ 회원의 윤리·품위 유지·실천 의무
                <br />
                ⑤ 정관 및 제반규정으로 정하는 각종 자료제출과 보고에 회원으로서
                적극적 협조
              </div>
            </div>
            <div className="md:flex pb-[20px]">
              <span className="text-secondary w-[220px] text-[15px] md:text-base">
                제11조 (회원의 혜택)
              </span>
              <div className="w-full pt-[2px] flex flex-col justify-start items-start text-[15px] md:text-base">
                ① 협회가 주관하는 방폭관련 교육에 대한 교육비 할인
                <span className="text-[14px] leading-[14px] ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 방폭협회에 가입할 경우 엑스텍코리아 교육비 5% 할인(Naver에 엑스텍코리아 검색)</span>
                ② 회원의 경력관리(경력수첩 발급 등)
                <br />
                ③ 협회가 주관하는 세미나 및 각종 행사에 참여 우선권
                <br />
                ④ 정부포상에 대한 우수 직원 우선 추천
                <br />
                ⑤ 정회원 및 기업회원이 실시하는 행사 및 관련 자료 제작시 협회 로고를 사용할 수 있으나 협회에 사전 승인을 요청 후 사용
              </div>
            </div>
          </div>
          <ContentSubTitle title="제 5장 회원 탈퇴, 제명 및 재가입" />
          <div className="w-full pb-[15px] mt-[10px]">
            <span className="text-secondary w-[180px] text-[15px] md:text-base">
              제1조 (회원의 탈퇴)
            </span>
            <div className="w-full pt-[2px] pb-[5px] flex justify-start items-end text-[15px] md:text-base mb-[5px]">
              ①  회원은 본인의 의사에 따라 {`'회원탈퇴서'(서식2)`}를 제출함으로써 자유롭게
              탈퇴할 수 있다.
            </div>
            <span className="text-secondary w-[180px] text-[15px] md:text-base">
              제2조 (회원의 제명)
            </span>
            <div className="w-full pt-[2px] pb-[5px] flex justify-start items-end text-[15px] md:text-base mb-[5px]">
              회원이 협회의 명예를 손상시키거나 목적 수행에 지장을 초래한 경우
              또는 1년 이상 회원의 의무를 준수하지 않은 경우에는 이사회의 의결을
              거쳐 제명할 수 있다.
            </div>
            <span className="text-secondary w-[180px] text-[15px] md:text-base">
              제3조 (회원의 재가입)
            </span>
            <div className="w-full pt-[2px] flex justify-start items-end text-[15px] md:text-base mb-[40px]">
              본 규정 제8조에 따라 탈퇴한 자가 회원 재가입을 하는 경우에는
              탈퇴일로부터 1년 경과 후 재가입 할 수 있고, 제9조에 따라 제명된
              자가 재가입을 하는 경우에는 제명일로부터 5년 경과 후 재가입 할 수
              있다.
            </div>
          </div>

          <ContentSubTitle title="제6장 보칙" />
          <div className="w-full pb-[15px] mt-[10px] mb-[40px]">
            <div className="md:flex">
              <span className="text-secondary w-[180px] text-[15px] md:text-base">
                제1조 (포상)
              </span>
              <div className="w-full pt-[2px] md:pl-[10px] pb-[5px] flex justify-start items-end text-[15px] md:text-base mb-[5px]">
                ① 회원이 협회의 명예를 선양하거나 타인에게 모범적이고 귀감이 될
                경우 이사회의 심의, 의결로 포상을 할 수 있다.
                <br/>
                ② 협회는 회원이 아닌 자·단체·업체가 타의 귀감이 되고 협회와
                방폭산업계에 공헌하였을 경우 이사회의 의결로 포상할 수 있다.
              </div>
            </div>
            <div className="md:flex">
              <span className="text-secondary w-[180px] text-[15px] md:text-base">
                제2조 (권리 상실)
              </span>
              <div className="w-full pt-[2px] md:pl-[10px] flex justify-start items-end text-[15px] md:text-base mb-[5px]">
                회원이 탈퇴 및 제명으로 인하여 회원의 자격을 상실한 경우에는
                납부한 회비 등에 대한 권리를 요구할 수 없다.
              </div>
            </div>
          </div>

          <ContentSubTitle title="제7장 부칙" />
          <div className="w-full pb-[15px] mt-[10px]">
            <div className="md:flex">
              <span className="text-secondary w-[180px] text-[15px] md:text-base">
                제1조 (시행일)
              </span>
              <div className="w-full pt-[2px] md:pl-[10px] pb-[5px] flex justify-start items-end text-base mb-[5px]">
                이 규정은 총회에서 의결한 즉시 효력을 발생한다.
              </div>
            </div>
            <div className="md:flex">
              <span className="text-secondary w-[180px] text-[15px] md:text-base">
                제2조 (경과조치)
              </span>
              <div className="w-full pt-[2px] md:pl-[10px] flex justify-start items-end text-[15px] md:text-base mb-[5px]">
                이 규칙의 제정 이전에 시행된 사항에 관하여는 이 규칙에 의하여
                시행된 것으로 본다.
              </div>
            </div>
          </div>

          <a href="" download>{`<서식 1>`} 회원가입신고서 (양식)</a>
        </section>
      </main>
    </section>
  );
};

export default RuleClient;
