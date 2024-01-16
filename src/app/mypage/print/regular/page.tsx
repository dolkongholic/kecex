"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image"
import download_icon from "../../../../../public/img/icon/아이콘 7.png"


// Image

const MainList = [
  {
    title: "전체 현황",
    url: "#",
    sub: [
      { title: "발급/출력 현황", url: "/mypage/overall/all01" },
      { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
      { title: "세미나/컨설팅 신청 현황", url: "/mypage/overall/all03" },
      { title: "경력관리 현황", url: "/mypage/overall/all04" },
    ]
  },
  {
    title: "회원정보 수정",
    url: "/mypage/profile",
    sub: null,
  },
  {
    title: "회원증 출력",
    url: "#",
    sub: [
      { title: "회원증 출력", url: "/mypage/print/certificate" },
      { title: "정회원 가입", url: "/mypage/print/regular" }],
  },
  {
    title: "1:1문의 현황",
    url: "/mypage/overall/all02",
    sub: null,
  },
  {
    title: "경력관리",
    url: "/mypage/resume",
    sub: null,
  },
  {
    title: "경력수첩 발급",
    url: "#",
    sub: [
    { title: "경력수첩 발급", url: "/mypage/carrear/print" },
    { title: "경력수첩 발급현황", url: "/mypage/carrear/sheet" }],
  },
  {
    title: "회원탈퇴",
    url: "/mypage/out",
    sub: null,
  },
];

const location = "정회원 가입";

export default function QnaPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");

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
              마이페이지 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"마이페이지"} />
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-between item-center">
            <figure className="flex h-48 mb-5">
              <div className="w-2/3 pr-5">
                <p className="text-[14px]">회원의 권익보호와 회원 상호간의 기술·정보 교류의 장을 마련하고, 최신 안전기술정보 제공 및 상담 등 다양한 활동을 통해 회원의 직무능력 향상에 기여하고 있습니다.</p>
              </div>
              <div className="w-1/3 bg-secondary">그림 영역</div>
            </figure>

            <ContentSubTitle title="가입대상" />
            <ul className="border border-[#ccc] w-full h-36 flex">
              <li className="flex items-center justify-center w-1/4 border-r border-[#ccc]">안전보건관리책임자</li>
              <li className="flex items-center justify-center w-1/4 border-r border-[#ccc]">관리감독자</li>
              <li className="flex items-center justify-center w-1/4 border-r border-[#ccc]">안전관리자</li>
              <li className="flex items-center justify-center w-1/4">안전보건관리담당자</li>
            </ul>

            <ContentSubTitle title="정회원 혜택" />
            <ul className="-translate-y-[20px] text-[15px] leading-6 mb-5">
              <li className="w-full border-b border-gray flex">
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">1</div>
                  <p className="ml-3">회원의 안전관리업무를 지원하기 위해 고용노동부 정책방향 등<br/>최신정보 전달을 위한 안전세미나 실시<br/>
                    (전국 지역본부 또는 지회에서 개별 실기)
                  </p>
                </div>
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">2</div>
                  <p className="ml-3">각종 안전기술 정보 및 자료제공<br/>안전기술, 안전교육교안(sheet), 안전가이드 등 정기간행물 지급<br/>
                    <span className=" tracking-tight">기타 산업안전보건법령집, 안전보건표지, 업무용 수첩, 각종 안전관련 자료 제공</span>
                  </p>
                </div>
              </li>
              <li className="w-full border-b border-gray flex">
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">3</div>
                  <p className="ml-3">안전관리 활동의 지원 및 상담
                  </p>
                </div>
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">4</div>
                  <p className="ml-3">국내 산업안전관리 우수업체 시찰
                  </p>
                </div>
              </li>
              <li className="w-full border-b border-gray flex">
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">5</div>
                  <p className="ml-3">회원 상호간의 기술, 정보교류 및 친목 도모 행사 개최<br/>산업안전보건강조주간에 개최되는 행사, 신년회, 산재예방결의대회<br/>
                    안전세미나 및 워크숍, 산업시찰, 체육대회 등
                  </p>
                </div>
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">6</div>
                  <p className="ml-3">각종 산업안전관련 행사 우선 초청
                  </p>
                </div>
              </li>
              <li className="w-full border-b border-gray flex">
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">7</div>
                  <p className="ml-3">산업재해예방에 기여한 우수회원  표창
                  </p>
                </div>
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">8</div>
                  <p className="ml-3">안전관리 경력관리 (경력관리 신청시)
                  </p>
                </div>
              </li>
              <li className="w-full border-b border-gray flex">
                <div className="w-1/2 h-36 flex items-center">
                  <div className="w-20 h-20 border border-[#ccc] rounded-full flex justify-center items-center text-[30px] text-[#ccc]">9</div>
                  <p className="ml-3">SNS 운영 (네이버 밴드)<br/>
                    최신 안전보건 정보 제공 및 회원 상호간 정보교류의 장 마련
                  </p>
                </div>
              </li>
            </ul>
            <ContentSubTitle title="정회원 가입절차" />
              <h3 className="text-subtitle text-center mt-5">가입 방법</h3>
              <ul className="flex w-full justify-between mt-8">
                <li className="w-1/4">
                  <div className="h-32 border border-[#ccc] flex flex-col justify-center items-center">
                    <p>입회원서 작성<br/>(홈페이지 다운로드)</p>
                    <a href="#" className="text-darkgray text-[12px] underline">kecex.vercel.app</a>
                  </div>
                  <p className="text-[12px] text-center mt-3">입회원서를 다운로드하여 가입정보를 작성</p>
                </li>
                <li className="pt-12">
                  >>
                </li>
                <li className="w-1/4">
                  <div className="h-32 border border-[#ccc] flex flex-col justify-center items-center">
                    <p>입회원서 및<br/>사업자등록증 송부</p>
                    <p>&nbsp;</p>
                  </div>
                  <p className="text-[12px] text-center mt-3">협회 주소록을 참조하여 입회원서 및 <br/>사업자등록증을 관할 지역본부<br/>또는 지회에 팩스 송부 후 연락</p>
                </li>
                <li className="pt-12">
                  >>
                </li>
                <li className="w-1/4">
                  <div className="h-32 border border-[#ccc] flex flex-col justify-center items-center">
                    <p>입회처리 및<br/>담당자 배정(회비 청구)</p>
                    <p>&nbsp;</p>
                  </div>
                  <p className="text-[12px] text-center mt-3">입회처리 후 'Welcome' 문자 전송<br/>* 회비 청구시 지로(GIRO) 우편 발송</p>
                </li>
              </ul>
              <div className="w-full h-20 bg-lightgray flex justify-center items-center my-10">
                *가입비용 : 연 360,000원(월 30,000원)
              </div>
              <ContentSubTitle title="정회원의 권한" />
              <p>총회에서 선거권, 피선거권 및 의결권 부여 (일반회원은 선거권, 피선거권 및 의결권을 제한함)</p>

              <div className="btn_box flex m-auto mt-20">
                <button className="w-44 h-14 bg-secondary text-white flex justify-center items-center">
                입회원서 다운로드 <Image src={download_icon} className="w-4 h-4 ml-2"/>{" "}
                </button>
                <button className="w-44 h-14 border border-gray text-superdarkgray flex justify-center items-center ml-4">
                  회원서비스 안내 <Image src={download_icon} className="w-4 h-4 ml-2"/>{" "}
                </button>
                <button className="w-44 h-14  border border-gray text-superdarkgray flex justify-center items-center ml-4">
                  접수처
                </button>
          </div>{/*btn_box*/}
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
