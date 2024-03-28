"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image


const location = "회비 납부내역";
interface DetailProps {
  currentUser: any;
}

const DetailClient: React.FC<DetailProps> = ({ currentUser }) =>{
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
        { title: "회비 관리", url: "/mypage/payment/management" , staff:true },
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-[#262626] w-full flex flex-col justify-center item-center">
            <div className="w-full flex justify-center mx-auto mt-5">
              <p>
                <span>회원</span>님의 납부내역입니다.<br/>
              </p>
            </div>
            <ul className="w-full mx-auto border-t-2 border-neutral-700 mt-10 text-[14px] md:text-base">
              <div className="w-full h-12 bg-lightgray flex text-center items-center font-semibold border-b border-secondary text-primary leading-[47px]">
                <div className="w-[50px] h-full">
                  No.
                </div>
                <div className="w-[10%] h-full]">
                  종류
                </div>
                <div className="w-[15%] h-full text-start">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;금액
                </div>
                <div className="w-[15%] h-full text-start">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;납부상태
                </div>
                <div className="w-[30%] h-full text-start">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일자
                </div>
                <div className="w-[30%] h-full text-start">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비고
                </div>
              </div>
              <li className="w-full h-12 flex text-center items-center border-b border-gray-300">
                <div className="w-[50px] h-full border-r border-gray-200 flex items-center justify-center font-medium">
                  <span>
                    1
                  </span>
                </div>
                <div className="w-[10%] h-full border-r border-gray-200 flex items-center justify-center">
                  <span>
                    연회비
                  </span>
                </div>
                <div className="w-[15%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￦&nbsp;
                  <span>
                    30,000
                  </span>
                </div>
                <div className="w-[15%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-blue-600">
                    접수 대기
                  </span>
                </div>
                <div className="w-[30%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    2023.12.15 17:51:01
                  </span>
                </div>
                <div className="w-[30%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    없음
                  </span>
                </div>
              </li>
              <li className="w-full h-12 flex text-center items-center border-b border-gray-400">
                <div className="w-[50px] h-full border-r border-gray-200 flex items-center justify-center font-medium">
                  <span>
                    2
                  </span>
                </div>
                <div className="w-[10%] h-full border-r border-gray-200 flex items-center justify-center">
                  <span>
                    가입비
                  </span>
                </div>
                <div className="w-[15%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￦&nbsp;
                  <span>
                    500,000
                  </span>
                </div>
                <div className="w-[15%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-red-600">
                    승인-입금완료
                  </span>
                </div>
                <div className="w-[30%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    2024.10.25 07:54:01
                  </span>
                </div>
                <div className="w-[30%] h-full border-r border-gray-200 flex items-center">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    없음
                  </span>
                </div>
              </li>
              <li className="w-full h-2 flex text-center items-center border-b-2 border-gray-700">
                &nbsp;
              </li>
            </ul>
            <div className="mx-auto mt-10">
              1 page
            </div>
            
          </div>
        </section>
      </main>
    </section>
  );
};

export default DetailClient;
