"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import { useSession } from "next-auth/react";

import { useState, useRef } from "react";
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
      // { title: "경력수첩 발급현황", url: "/mypage/carrear/sheet" },
    ],
  },
  {
    title: "회원탈퇴",
    url: "/mypage/out",
    sub: null,
  },
];

const location = "회원탈퇴";

const OutClient = () => {
  const { data: session } = useSession();
  const passwordRef = useRef(null);

  const [pageMenu, setPageMenu] = useState<any>("마이페이지");

  const out = () => {
    if (confirm("탈퇴 하시겠습니까?")) {
      alert("탈퇴 신청이 접수 되었습니다.");
    } else {
    }
  };
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
                <SubNavHeader title="마이페이지" />
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
          <div className="flex justify-center mt-[30px] md:mt-[90px] mx-auto">
            <div className="md:w-[350px] mx-auto">
              <div className="py-[10px]">본인확인</div>
              <div className="mt-3">
                <input
                  value={session?.user?.name || ""}
                  onChange={(e: any) => (passwordRef.current = e.target.value)}
                  placeholder="비밀번호"
                  className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
                />
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  ref={passwordRef}
                  onChange={(e: any) => (passwordRef.current = e.target.value)}
                  placeholder="비밀번호"
                  className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
                />
              </div>
              <div className="mt-2">
                <button
                  className="bg-secondary text-white w-full h-[40px]"
                  onClick={() => out()}
                >
                  회원 탈퇴
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default OutClient;
