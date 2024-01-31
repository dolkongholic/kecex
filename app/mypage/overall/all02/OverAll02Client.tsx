"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

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
    url: "/mypage/payment",
    sub: null,
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
      { title: "경력수첩 발급", url: "/mypage/carrear/print" },
      { title: "경력수첩 발급현황", url: "/mypage/carrear/sheet" },
    ],
  },
  {
    title: "회원탈퇴",
    url: "/mypage/out",
    sub: null,
  },
];

const location = "전체 현황";

const OverAll02Client = () => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-200 flex justify-center text-[13px]">
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
          <ContentTitle title={location} />
          <div className="text-black w-full flex flex-col justify-between item-center -translate-y-[19px]">
            <div className="h-[200px] bg-gray-200 p-[30px] flex justify-between">
              <div>
                <strong className="font-normal text-[18px]">
                  반갑습니다.{" "}
                  <span className="text-blue-500 underline">
                    <b className="font-normal">한국방폭협회</b>님
                  </span>{" "}
                </strong>
                <p className="mt-5 text-[14px]">
                  신청, 발급현황 및 한국방폭협회 관련 서비스를 확인하세요.
                </p>
              </div>
              <ul className="w-[520px] flex">
                <a href="/mypage/overall/all01">
                  <li className="w-[130px] h-[130px] border border-gray-200 flex flex-col justify-center items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-darkgray">0</p>
                    </div>
                    <p className="text-[13px] h-[40px] text-center">
                      발급/출력 현황
                    </p>
                  </li>
                </a>
                <a href="/mypage/overall/all02">
                  <li className="w-[130px] h-[130px] border border-blue-500 bg-white flex flex-col justify-center items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-blue-500">0</p>
                    </div>
                    <p className="text-[13px] h-[40px] text-blue-500 font-semibold">
                      1:1 문의 현황
                    </p>
                  </li>
                </a>
                <a href="/mypage/overall/all03">
                  <li className="w-[130px] h-[130px] border border-gray-200 flex flex-col justify-center items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-darkgray">0</p>
                    </div>
                    <p className="text-[13px] h-[40px] text-center">
                      세미나/컨설팅
                      <br />
                      신청 현황
                    </p>
                  </li>
                </a>
                <a href="/mypage/overall/all04">
                  <li className="w-[130px] h-[130px] border border-gray-200 flex flex-col justify-center items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-darkgray">0</p>
                    </div>
                    <p className="text-[13px] h-[40px]">경력관리 현황</p>
                  </li>
                </a>
              </ul>
            </div>
            {/*조회 메뉴 선택*/}
            <div className="w-full text-black text-[14px] border-b border-blue-500">
              <h3 className="font-bold mt-16 text-[16px]">1:1 문의 현황</h3>
              전체 <span className="font-bold leading-9">17</span> 건
            </div>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 px-[40px] py-[25px] flex justify-between items-center hover:shadow-md"
              >
                <div className="flex-col">
                  <div>
                    <span className="text-[20px] font-bold text-black mr-[20px]">
                      IECEx 004/007/008
                    </span>
                  </div>
                  <div className="text-superdarkgray flex justify-start items-center mt-1">
                    <p>
                      교육기간: <span>2023.11.15</span>~<span>2023.11.6</span> |
                      교육장소 : <span>울산</span> | 교육비 <b>143</b> 만원
                    </p>
                  </div>
                </div>
                <div className="flex justify-center  items-center">
                  <div className="flex justify-center items-center border border-blue-500 w-[150px] h-[50px]">
                    <span>승인-입금완료</span>{" "}
                  </div>
                  <button className="flex justify-center items-center bg-gray-200  w-[150px] h-[50px] ml-6">
                    <span>시험결과 보기</span>{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default OverAll02Client;
