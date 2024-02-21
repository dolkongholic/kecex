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

const location = "회비 납부";

const PaymentClient = () => {
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
          <ContentSubTitle title="회비" />
          <div className="text-neutral-800 w-full flex flex-col justify-center item-center">
            <div className="w-full md:w-4/5 flex justify-end mx-auto pt-10">
              <p className="text-[13px]">단위 : 만원</p>
            </div>
            <table className="w-full md:w-4/5 border-y-2 border-neutral-700 m-auto text-center">
              <tr className="border-b border-secondary h-14 bg-lightgray">
                <th className="border-r border-gray-400 w-1/4 md:w-48">
                  구분
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48 font-semibold">
                  가입비
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48 font-semibold">
                  연회비
                </td>
                <td className="font-semibold">
                  비고
                </td>
              </tr>
              <tr className="border-b border-gray-300 h-12">
                <th className="border-r border-gray-400 font-medium">
                  일반회원
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  2
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  3
                </td>
              </tr>
              <tr className="h-12">
                <th className="border-r border-gray-400 font-medium">
                  정회원
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  10
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  12
                </td>
              </tr>
              <tr className="h-12">
                <th className="border-r border-gray-400 font-medium">
                  운영위원
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  10
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  20
                </td>
              </tr>
              <tr className="border-b border-gray-300 h-12">
                <th className="border-r border-gray-400 font-medium">
                  임원
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  10
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  30
                </td>
              </tr>
              <tr className="h-12">
                <th className="border-r border-gray-400 font-medium">
                  기업회원
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  100
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48">
                  50
                </td>
                <td className="text-[13px]">
                  50인 이하,<br/>
                  매출액에 따른 차등
                  </td>
              </tr>
            </table>
            <div className="mx-auto flex">
              <button className="mt-16 w-32 h-12 bg-secondary text-white">
                납부하기
              </button>
              <button className="mt-16 w-44 h-12 border border-secondary ml-12">
                입금확인 요청하기
              </button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PaymentClient;
