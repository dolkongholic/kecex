"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image

const location = "경력수첩 발급";

interface CareerPrintProps {
  currentUser: any;
}
const CareerPrintClient: React.FC<CareerPrintProps> = ({ currentUser }) =>{
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
        // { title: "세미나/컨설팅 신청 현황", url: "/mypage/overall/all03" },
        // { title: "경력관리 현황", url: "/mypage/overall/all04" },
      ],
    },
    {
      title: "회원정보 수정",
      url: "/mypage/profile",
      sub: null,
    },
    {
      title: "정회원 가입",
      url: "/mypage/regular",
      sub: null,
    },
    {
      title: "회비 납부",
      url: "#",
      sub: [
        { title: "회비 납부", url: "/mypage/payment/payment" },
        { title: "회비 납부내역", url: "/mypage/payment/detail" },
      ],
    },
    {
      title: "회원증 출력",
      url: "/mypage/print",
      sub: null,
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
        { title: "경력수첩 발급", url: "/mypage/career/print" },
        // { title: "경력수첩 발급현황", url: "/mypage/carrear/sheet" },
      ],
    },
    {
      title: "회원탈퇴",
      url: "/mypage/out",
      sub: null,
    },
    {
      title: "관리자 메뉴",
      url: "#",
      sub: [
        { title: "회비 납부 관리", url: "/mypage/management/payment/"  },
        { title: "회원 관리", url: "/mypage/management/user/" },
        { title: "문의 관리", url: "/mypage/management/qna/" },
      ],
      staff:true
    },
  ];

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
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

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
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
                    currentUser={currentUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start ">
          <ContentTitle title={location} center={true} />
          <div className="w-full border border-secondary bg-secondary text-white underline underline-offset-4 font-medium text-[24px] text-center p-6 mb-10">
            경력 수첩 준비 중
          </div>
          <div className="flex justify-between w-full h-[50px] leading-[50px]">
            <div className="w-full text-center h-full border border-secondary cursor-pointer bg-secondary text-white">
              경력수첩 발급
            </div>
            <div className="w-full text-center h-full border border-gray cursor-pointer">
              경력수첩 발급현황
            </div>
          </div>
          <div className="md:h-[60px] w-full md:flex border-t-2 border-t-secondary border-b border-b-gray mt-7 text-black">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center h-[60px] md:h-auto">
              신청서
            </div>
            <div className="flex justify-start items-center pl-[20px] w-full md:w-auto h-[60px] md:h-auto">
              <input
                type="file"
                placeholder=""
                className="h-[40px] underline focus:border-secondary px-[20px] text-base text-black"
              />
            </div>
          </div>

          <div className="w-full md:flex border-b border-b-gray">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center text-black h-[60px] md:h-auto">
              필수 첨부 항목
            </div>
            <div className="flex justify-start items-center pl-[20px] py-3">
              <ul className="leading-7 text-[14px] md:text-base">
                <li>· 방폭 관련 자격증 / 증빙 서류</li>
                <li>· 일반 자격증 (방폭 관련 자격 외)</li>
                <li>· 영문 이력서 (방폭/비방폭 관련 업무 경험 포함)</li>
                <li>· 여권 사진(흰 배경) JPG형식(150*200 픽셀)</li>
                <li>· 여권 사본</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:flex border-b border-b-gray">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center text-black h-[60px] md:h-auto">
              이메일 발송
            </div>
            <div className="flex justify-start items-center pl-[20px] py-3 text-black text-[14px] h-[60px] md:h-auto">
              <button className="w-36 h-10 bg-neutral-800 text-white mr-7">
                Outlook 보내기
              </button>
              E-MAIL : kecex@kecex.or.kr
            </div>
          </div>

          <div className="w-full md:flex border-b border-b-gray md:h-[60px] ">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center text-black h-[60px] md:h-auto">
              경력수첩 발급비용
            </div>
            <div className="flex justify-start items-center pl-[20px] text-black text-[14px] h-[60px] md:h-auto">
              ** 만원(VAT 포함)
            </div>
          </div>

          <div className="w-full md:flex border-b border-b-gray md:h-[60px] ">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center text-black h-[60px] md:h-auto">
              입금계좌정보
            </div>
            <div className="flex justify-start items-center pl-[20px] text-black text-[14px] h-[60px] md:h-auto">
              경남은행 207-0156-8973-02 박종훈{" "}
              <span className="text-[13px] ml-4">
                한국방폭협회 공동회장 박종훈
              </span>
            </div>
          </div>

          <div className="md:h-[60px] w-full md:flex border-b border-b-gray">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center text-black h-[60px] md:h-auto">
              현금영수증 발급유무
            </div>
            <div className="flex justify-center items-center pl-[20px] h-[60px] md:h-auto">
              <label htmlFor="ok_cash_receipt" className="mr-2">
                발급
              </label>
              <input
                type="checkbox"
                className="border border-gray h-[40px] outline-none px-[20px] text-base w-7 mr-7"
                id="ok_cash_receipt"
              />
              <label htmlFor="no_cash_receipt" className="mr-2">
                미발급
              </label>
              <input
                type="checkbox"
                className="border border-gray h-[40px] outline-none px-[20px] text-base w-7"
                id="no_cash_receipt"
              />
            </div>
          </div>

          <div className="md:h-[60px] w-full md:flex border-b border-b-gray">
            <div className="bg-lightgray w-full md:w-[180px] pl-[20px] flex justify-start items-center text-black h-[60px] md:h-auto">
              연락처
            </div>
            <div className="md:flex justify-start items-center pl-[20px] h-[90px] md:h-auto pt-3 md:pt-0">
              <input
                type="text"
                placeholder="01010002000"
                className="border border-gray h-[40px] outline-none focus:border-secondary px-[20px] text-base"
              />{" "}
              <br className="md:hidden"/>
              <span className="text-blue-500 text-[13px] md:ml-7">
                *현금영수증을 발급할 핸드폰 번호를 띄어쓰기, - 없이 기입해주세요.
              </span>
            </div>
          </div>
          <div className="w-full flex justify-end mt-5">
            <div className="w-full md:w-[180px] h-[50px] flex justify-center items-center bg-secondary text-white">
              준비 중
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default CareerPrintClient;
