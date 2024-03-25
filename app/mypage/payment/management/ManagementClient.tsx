"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

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

const location = "회비 관리";

const ManagementClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");

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
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-center item-center">
          <div className="text-black w-full flex flex-col justify-center item-center">
            <ContentSubTitle title="회비 관리 현황" />
            <ul className="w-full mx-auto border-t-2 border-gray-700 mt-10 hidden md:block">
              <div className="w-full h-11 bg-gray-100 flex text-center items-center font-medium border-b border-blue-900">
                <div className="w-2/12 border-r border-gray-200 ">
                  성명
                </div>
                <div className="w-1/12 border-r border-gray-200 ">
                  회원 구분
                </div>
                <div className="w-2/12 border-r border-gray-200 ">
                  금액
                </div>
                <div className="w-2/12 border-r border-gray-200 ">
                  납부상태
                </div>
                <div className="w-4/12 border-r border-gray-200 ">
                  일자
                </div>
                <div className="w-1/12">
                  납부확인
                </div>
              </div>
              <li className="w-full h-11 flex text-center items-center border-b border-gray-400">
                <div className="w-2/12 border-r border-gray-200 ">
                  홍길동
                </div>
                <div className="w-1/12 border-r border-gray-200 ">
                  정회원
                </div>
                <div className="w-2/12 h-full border-r border-gray-200 flex pl-10 items-center">
                  ￦&nbsp;
                  <span>
                    30,000
                  </span>
                </div>
                <div className="w-2/12 h-full border-r border-gray-200 flex pl-10 items-center">
                  <span className="text-blue-600">
                    접수 대기
                  </span>
                </div>
                <div className="w-4/12 h-full border-r border-gray-200 flex pl-10 items-center">
                  <span>
                    2023.12.15 17:51:01
                  </span>
                </div>
                <div className="w-1/12 h-full border-r border-gray-200 flex items-center">
                  <button className="w-16 h-8 bg-gray-500 text-white mx-auto">
                    확인
                  </button>
                </div>
              </li>
              <li className="w-full h-11 flex text-center items-center border-b border-gray-400">
                <div className="w-2/12 border-r border-gray-200 ">
                  홍길동
                </div>
                <div className="w-1/12 border-r border-gray-200 ">
                  기업회원
                </div>
                <div className="w-2/12 h-full border-r border-gray-200 flex pl-10 items-center">
                  ￦&nbsp;
                  <span>
                    500,000
                  </span>
                </div>
                <div className="w-2/12 h-full border-r border-gray-200 flex pl-10 items-center">
                  <span className="text-red-600">
                    승인-입금완료
                  </span>
                </div>
                <div className="w-4/12 h-full border-r border-gray-200 flex pl-10 items-center">
                  <span>
                    2024.10.25 07:54:01
                  </span>
                </div>
                <div className="w-1/12 h-full border-r border-gray-200 flex items-center">
                  <button className="w-16 h-8 bg-gray-500 text-white mx-auto">
                    확인
                  </button>
                </div>
              </li>
              <li className="w-full h-2 flex text-center items-center border-b-2 border-gray-700">
                &nbsp;
              </li>
            </ul>
            <div className="mx-auto mt-10 hidden md:block">
              1 2 3 4 5 page
            </div>
            <div className="w-full mx-auto flex justify-center items-center h-32">
              큰 화면으로 확인해주세요.
            </div>
          </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ManagementClient;
