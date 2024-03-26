"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image

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
      { title: "회비 관리", url: "/mypage/payment/management" },
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
];

const location = "전체 현황";

interface OverAll02ClientProps {
  qnaList: any;
  currentUser: any;
}

const OverAll02Client: React.FC<OverAll02ClientProps> = ({
  qnaList,
  currentUser,
}) => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-200 flex justify-center text-[13px]">
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
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="text-neutral-800 w-full flex flex-col justify-between item-center -translate-y-[19px]">
            <div className="md:h-[200px] bg-lightgray py-[30px] md:p-[30px] flex flex-col md:flex-row justify-center md:justify-between">
              <div className="text-center md:text-start">
                <strong className="font-normal text-[18px]">
                  반갑습니다.{" "}
                  <span className="text-secondary underline">
                    <b className="font-normal">{currentUser.name}</b>님
                  </span>{" "}
                </strong>
                <p className="mt-5 text-[14px]">
                  신청, 발급현황 및 한국방폭협회 관련 서비스를 확인하세요.
                </p>
              </div>
              <ul className="w-full md:w-[320px] flex mt-5 md:mt-0 px-7 md:px-0 space-x-4">
                <a href="/mypage/overall/all01" className="w-1/2">
                  <li className="w-full md:w-[130px] h-[130px] flex flex-col justify-center items-center hover:border border-neutral-700">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-neutral-600">0</p>
                    </div>
                    <p className="text-[13px] h-[40px] text-center">
                      발급/출력 현황
                    </p>
                  </li>
                </a>
                <a href="#" className="w-1/2 cursor-default">
                  <li className="w-full md:w-[130px] h-[130px] border border-secondary bg-white flex flex-col justify-center items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-secondary">0</p>
                    </div>
                    <p className="text-[13px] h-[40px] text-secondary font-semibold">
                      1:1 문의 현황
                    </p>
                  </li>
                </a>
                {/* <a href="/mypage/overall/all03">
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
                </a> */}
                {/* <a href="/mypage/overall/all04">
                  <li className="w-[130px] h-[130px] border border-gray-200 flex flex-col justify-center items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center m-2">
                      <p className="text-[20px] font-bold text-darkgray">0</p>
                    </div>
                    <p className="text-[13px] h-[40px]">경력관리 현황</p>
                  </li>
                </a> */}
              </ul>
            </div>
            {/*조회 메뉴 선택*/}
            <div className="w-full text-neutral-800 text-[14px] border-b border-secondary">
              <h3 className="font-bold mt-16 text-[16px]">1:1 문의 현황</h3>
              전체 <span className="font-bold leading-9">
                {qnaList.length}
              </span>{" "}
              건
            </div>
            {qnaList.length == 0 && (
              <div className="border-b border-gray-300 px-[40px] py-[25px] flex justify-between items-center hover:shadow-md">
                <div className="flex-col">
                  <div>
                    <span className="text-[20px] font-bold text-neutral-800 mr-[20px] text-center w-full">
                      문의 내역이 없습니다.
                    </span>
                  </div>
                </div>
              </div>
            )}
            {qnaList?.map((item: any, index: any) => (
              <div
                key={index}
                className="border-b border-gray-200 px-[40px] py-[25px] flex justify-between items-center hover:shadow-md"
              >
                <div className="flex-col">
                  <div>
                    <span className="text-[20px] font-bold text-neutral-800 mr-[20px]">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-superdarkgray flex justify-start items-center mt-1">
                    <p>{String(item.content).slice(0, 30)}</p>
                  </div>
                </div>
                <div className="flex justify-center  items-center">
                  <button className="flex justify-center items-center bg-gray-200  w-[150px] h-[50px] ml-6">
                    <span>답변 대기</span>
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
