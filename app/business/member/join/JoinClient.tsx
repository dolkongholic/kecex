"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";

// Image
import PicIconArrow from "@/public/img/icon/content_icon_arrow.png";
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

const location = "회원가입";

const JoinPage = () => {
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
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              회원 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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

        <section className="px-[15px] md:px-0 py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                  <span> 회원가입</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/rule/"}>
                <div className="h-12 border border-gray-200 border-l-0 border-b-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
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
              <Link passHref href={"/business/member/careercard/"}>
                <div className="h-12 border border-l-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 경력수첩</span>
                </div>
              </Link>
            </li>
          </ul>
          <ContentSubTitle title="가입대상" />
          <div className="w-full flex justify-between items-center text-subtitle text-center h-[10px]">
            <div className="w-full flex justify-start items-center text-base">
              방폭기술업을 등록하고자 하는 개인회원 또는 단체회원
            </div>
          </div>

          <ContentSubTitle title="회원종류" />

          <div className="w-full border-b-2 border-gray md:flex pb-[15px] md:mt-[10px]">
            <div className="flex border-t-[2px] border-neutral-500 w-full pt-[15px]">
              <div className="flex">
                <span className="text-secondary w-[100px]">일반회원</span>
              </div>
              <span className="text-[15px] w-4/5 md:w-auto">정회원 이외의 단체 및 개인</span>
            </div>
          </div>
          <div className="w-full border-b-2 border-gray md:flex pb-[15px] mt-[15px]">
            <div className="flex">
              <span className="text-secondary w-[100px]">정회원</span>
              <span className="text-[15px] w-4/5 md:w-auto">
                방폭설비의 생산·유통·엔지니어링·설치·시공·진단·안전관리 교육 및
                방폭과 관련된 소재, 부품기업과 이와 관련한 산업에 종사하는자
              </span>
            </div>

          </div>
          {/* <div className="w-full border-b-2 border-gray flex px-[20px] pb-[15px] mt-[10px]">
            <div>
              <Image src={PicIconArrow} width={25} height={15} alt="icon" />
              <br />
            </div>
            <span className="pl-[10px] text-secondary w-[100px]">
              준회원
              <br />
            </span>
            <span>
              정회원 이외의 자로서 협회의 회원으로 가입하여 방폭기술진흥법에
              의한 방폭기술자 경력 관리 회원의 권익을 향유할 수 있는자, <br />
              협회의 정회원으로 가입하지않고 방폭기술자 경력관리만을 위하여
              협회를 이용하는 자 (이하 &quot;경력관리자&quot;라 한다)
            </span>
          </div> */}
          <div className="w-full border-b-2 border-gray md:flex pb-[15px] mt-[15px]">
            <div className="flex">
              <span className="text-secondary w-[100px]">기업회원</span>
              <span className="text-[15px] w-4/5 md:w-auto">
                방폭설비의 생산·유통·엔지니어링·설치·시공·진단·안전관리 교육 및
                방폭과 관련된 소재, 부품기업과 이와 관련한 산업에 종사하는 기업
              </span>
            </div>  
          </div>
          <div className="w-full border-b-2 border-gray md:flex pb-[15px] mt-[15px] mb-[40px]">
            <div className="flex">
              <span className=" text-secondary w-[100px]">명예회원</span>
              <span className="text-[15px] w-4/5 md:w-auto">
                본회의 취지에 찬동하고, 방폭기술 발전과 본회의 사업에 적극적으로
                협력하는 자
              </span>
            </div>  
          </div>

          <div className="w-full hidden md:block">
          <ContentSubTitle title="가입절차" />
          <div className="w-full flex justify-between items-center">
            <div className="w-[48%] h-[50px] flex justify-center items-center bg-secondary text-white text-center">
              온라인
            </div>
            <div className="w-[48%] h-[50px] flex justify-center items-center border border-secondary text-secondary text-center">
              오프라인
            </div>
          </div>

          <div className="w-full flex justify-between">
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

          <div className="w-full flex justify-between">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                홈페이지 방문
                <br />
                {/* (회원가입 여부 간편검색) */}
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                홈페이지 방문
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                협회 방문
                <br />
                {/* (중앙회, 시·도회) */}
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                방문:
                <br />
                협회 방문 납부
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between">
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
                {/* <SlArrowDown /> */}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                가입원서 작성
                <br />
                (재가입자는 정보수정)
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                {/* 회비납부 여부 간편검색 */}
                회비 납부
                <br />
                (계좌이체)
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

          <div className="w-full flex justify-between">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center text-black">
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                <SlArrowDown />
              </div>
              <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                {/* <SlArrowDown /> */}
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

          <div className="w-full flex justify-between mb-[40px]">
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                회비납부 및 가입완료
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                {/* 회비 납부
                <br />
                (신용카드, 계좌이체, 가상계좌) */}
              </div>
            </div>
            <div className="flex justify-center items-center w-[48%] bg-gray text-center">
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                회비납부 및 가입완료
              </div>
              <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                &nbsp;
              </div>
            </div>
          </div>
          </div>

          {/* -------모바일 가입절차--------- */}
          <div className="w-full text-[15px] flex flex-col justify-center items-center md:hidden">
            <ContentSubTitle title="가입절차" />
            <div className="w-full flex justify-between items-center">
              <div className="w-full h-[50px] flex justify-center items-center bg-secondary text-white text-center">
                온라인
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray text-secondary">
                  회원가입 <br/>
                  [ 신규 또는 재가입 ]
                </div>
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center text-secondary">
                  회비납부
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                  홈페이지 방문
                  <br />
                  (회원가입 여부  <br/>
                  간편검색)
                </div>
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                  홈페이지 방문
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center text-black">
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                  <SlArrowDown />
                </div>
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                  <SlArrowDown />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                  가입원서 작성
                  <br />
                  (재가입자는 정보수정)
                </div>
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                  회비납부 여부  <br/>
                  간편검색
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between ">
              <div className="flex justify-center items-center w-full bg-gray text-center text-black">
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                  <SlArrowDown />
                </div>
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                  <SlArrowDown />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between mb-[40px]">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r border-darkgray">
                  회비납부 및 가입완료
                </div>
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                  회비 납부
                  <br />
                  (계좌이체)
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="w-full h-[50px] flex justify-center items-center border border-secondary text-secondary text-center">
                  오프라인
              </div>
            </div>  
            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray text-secondary">
                  회원가입  <br/>
                  [ 신규 또는 재가입 ]
                </div>
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center text-secondary">
                  회비납부
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center">
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
            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center text-black">
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                  <SlArrowDown />
                </div>
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                  회원가입 상담 및<br />
                  가입원서 작성
                </div>
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center w-full bg-gray text-center text-black">
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center border-r border-darkgray ">
                  <SlArrowDown />
                </div>
                <div className="w-[50%] h-[60px] py-[20px] flex justify-center items-center ">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between mb-[40px]">
              <div className="flex justify-center items-center w-full bg-gray text-center">
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start border-r">
                  회비납부 및 가입완료
                </div>
                <div className="w-[50%] h-[100px] py-[30px] flex justify-center items-start">
                  &nbsp;
                </div>
              </div>
            </div>
          </div>

          <ContentSubTitle title="정회원 혜택" />
          <span className="text-[15px] md:text-base">
            협회에서 보유하고 있는 혹은 협회가 발행하는 자료의 열람이 가능하며, 세미나 강연 및 기타 협회에서 주관하는 각종 행사에 참여 우선권을 가진다.
            또한 정회원이 행하는 행사와 자료 제작에 협회 로고를 사용할 수 있으며, 협회가 주관하는 방폭 관련 교육에 대해 교육비를 할인받을 수 있다.
          </span>

          <ContentSubTitle title="정회원 권한" />
          <span className="text-[15px] md:text-base">· 협회의 운영과 발전에 대해 총회의 의결권을 가짐</span>
          <span className="text-[15px] md:text-base mt-2">
            · 방폭 관련 교육 할인(협회 주관 교육에 한함)
          </span>
          <span className="text-[15px] md:text-base mt-2">
            · 회원의 경력관리(경력수첩 발급 등)
          </span>
          <span className="text-[15px] md:text-base mt-2">
            · 협회가 주관하는 각종 세미나 및 행사 등의 우선 참여
          </span>
          <span className="text-[15px] md:text-base mt-2">
            · 정부 포상에 대한 우수 직원 우선 추천
          </span>
          <span className="text-[15px] md:text-base tracking-tight mt-2">
            · 협회의 임원, 대의원, 위원 기타 이 정관의 규정에 <br className="md:hidden"/> 
            <span className="md:hidden">&nbsp;&nbsp;&nbsp;</span>
              의하여 선임되는 자의 선거권 및 피선거권을 취득
          </span>
          <span className="text-[15px] md:text-base">
            &nbsp; 다만, 명예회원은 선거권과 피선거권을 제한
          </span>
        </section>
      </main>
    </section>
  );
};

export default JoinPage;
