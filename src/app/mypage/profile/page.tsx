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

const location = "회원정보 수정";

export default function QnaPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");

  const mailRef = useRef(null);

  const { data: session } = useSession();
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
                <SubNavHeader title={"알림센터"} />
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
          <div className="text-black w-full flex flex-col justify-between item-center">
            <div className="h-[40px]">* 표시는 필수 입력 사항입니다.</div>
            <div className="h-[60px] w-full flex border-t-2 border-t-secondary border-b border-b-gray">
              <div className="bg-lightgray w-[140px] pl-[20px] flex justify-start items-center ">
                * 성명
              </div>
              <div className="flex justify-start items-center pl-[20px] ">
                <input
                  type="text"
                  placeholder="성명"
                  className="border border-gray h-[40px] outline-none focus:border-secondary px-[20px] text-base"
                />
              </div>
            </div>

            <div className="h-[60px] w-full flex border-b border-b-gray">
              <div className="bg-lightgray w-[140px] pl-[20px] flex justify-start items-center ">
                * 아이디
              </div>
              <div className="flex justify-start items-center pl-[20px] ">
                {session?.user.name}
              </div>
            </div>

            <div className="h-[120px] w-full flex border-b border-b-gray">
              <div className="bg-lightgray w-[140px] pl-[20px] flex justify-start items-center ">
                비밀번호
              </div>
              <div className="flex flex-col justify-center items-start pl-[20px] ">
                <input
                  type="password"
                  placeholder="새비밀번호"
                  className="border border-gray h-[40px] outline-none focus:border-secondary px-[20px] text-base"
                />
                <p className="mt-[20px]">
                  * 숫자+영문자+특수문자 조합으로 4~13자 입력해주세요.
                </p>
              </div>
            </div>

            <div className="h-[60px] w-full flex border-b border-b-gray">
              <div className="bg-lightgray w-[140px] pl-[20px] flex justify-start items-center ">
                * 휴대폰
              </div>
              <div className="flex justify-start items-center pl-[20px] ">
                <input
                  type="text"
                  placeholder="010 0000 0000"
                  className="border border-gray h-[40px] outline-none focus:border-secondary px-[20px] text-base"
                />
              </div>
            </div>

            <div className="h-[60px] w-full flex border-b border-b-gray">
              <div className="bg-lightgray w-[140px] pl-[20px] flex justify-start items-center ">
                * 이메일주소
              </div>
              <div className="flex justify-start items-center pl-[20px] ">
                <input
                  type="text"
                  placeholder={session?.user.name}
                  className="border border-gray h-[40px] outline-none focus:border-secondary px-[20px] text-base"
                />
                <p className="px-[10px]">@</p>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray h-[40px] outline-none focus:border-secondary px-[20px] text-base"
                />
                <select
                  className="border border-gray w-[250px] h-[40px] ml-[20px] pl-[20px]"
                  ref={mailRef}
                >
                  <option onChange={(e: any) => console.log(e)}>
                    gmail.com
                  </option>
                  <option>naver.com</option>
                  <option>kakao.com</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-[20px] space-x-[20px]">
            <div className="cursor-pointer w-[130px] h-[40px] flex justify-center items-center bg-secondary text-white">
              수정완료
            </div>
            <div className="cursor-pointer w-[130px] h-[40px] flex justify-center items-center bg-gray">
              취소
            </div>
            <div className="cursor-pointer w-[130px] h-[40px] flex justify-center items-center bg-superdarkgray text-white">
              회원탈퇴
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
