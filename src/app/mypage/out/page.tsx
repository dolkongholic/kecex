"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import { useSession } from "next-auth/react";

import { useState, useRef } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image

const MainList = [
  {
    title: "회원정보 수정",
    url: "/mypage/profile",
    sub: null,
  },
  {
    title: "회원증 출력",
    url: "/mypage/print",
    sub: null,
  },
  {
    title: "경력관리",
    url: "/mypage/resume",
    sub: null,
  },
  {
    title: "경력수첩 발급",
    url: "/mypage/print",
    sub: null,
  },
  {
    title: "회원탈퇴",
    url: "/mypage/out",
    sub: null,
  },
];

const location = "회원탈퇴";

export default function QnaPage() {
  const { data: session } = useSession();
  const passwordRef = useRef(null);

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
          <div className="w-full flex justify-center mt-[30px]">
            <div>
              <div className="py-[10px]">본인확인</div>
              <div className="mt-3">
                <input
                  value={session?.user.email}
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
                <button className="bg-secondary text-white w-full h-[40px]">
                  회원 탈퇴
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
