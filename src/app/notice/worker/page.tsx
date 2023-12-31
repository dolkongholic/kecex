"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image
import Picceo from "../../../../public/img/pages/introduce/intro_ceo.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const MainList = [
  {
    title: "인재정보",
    url: "/notice/worker",
    sub: null,
  },
  {
    title: "FAQ",
    url: "/notice/faq",
    sub: null,
  },
  {
    title: "문의사항",
    url: "/notice/qna",
    sub: null,
  },
];

const location = "인재정보";

export default function WorkerPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("인재정보");
  const [select, setSelect] = useState<string>("분야");

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
              알림센터 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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

        <section className="py-[20px] pl-[40px] w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px] px-[40px]">
            <ContentTitle title={location} center={true} />
            <div className="flex w-full mt-[50px]">
              <div className="flex-col w-full">
                <div>
                  <input
                    type="text"
                    className="w-full h-[50px] border border-gray leading-[50px] px-[20px] focus:outline-none focus:ring-2 focus:ring-active transition-all duration-500 placeholder:text-gray"
                    placeholder="검색어를 입력하세요"
                  />
                </div>
                <div className="flex w-full mt-[10px]">
                  <div className="w-[150px] flex-col items-center">
                    <div
                      className={`flex h-[45px] justify-between items-center w-full px-[20px] border border-gray cursor-pointer ${
                        select == "분야" && "bg-secondary text-white"
                      }`}
                      onClick={() => setSelect("분야")}
                    >
                      <span>분야</span>
                      <IoIosArrowForward />
                    </div>
                    <div
                      className={`flex h-[45px] justify-between items-center w-full px-[20px] border border-t-0 border-b-0 border-gray cursor-pointer ${
                        select == "국적" && "bg-secondary text-white"
                      }`}
                      onClick={() => setSelect("국적")}
                    >
                      <span>국적</span>
                      <IoIosArrowForward />
                    </div>
                    <div
                      className={`flex h-[45px] justify-between items-center w-full px-[20px] border border-gray cursor-pointer ${
                        select == "자격증" && "bg-secondary text-white"
                      }`}
                      onClick={() => setSelect("자격증")}
                    >
                      <span>자격증</span>
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="w-full flex-col items-start">
                    <div className="bg-lightgray w-full h-[45px] leading-[45px] px-[20px] text-darkgray">
                      분야를 선택해주세요
                    </div>
                    <div className="w-full flex justify-start items-start p-[10px] space-x-[20px] border-b border-gray h-[90px]">
                      {[
                        "화학",
                        "가스",
                        "안전",
                        "건설",
                        "기계",
                        "소방",
                        "전기",
                        "기타",
                      ].map((item, index) => (
                        <div key={index} className="px-[10px] cursor-pointer">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100px] h-[195px] flex justify-center items-center ml-[10px]">
                <button className="bg-secondary text-white w-full h-full">
                  검색
                </button>
              </div>
            </div>

            <div className="w-full h-[50px] leading-[50px] border-b-2 border-secondary mt-[50px]">
              <div>
                검색결과 <span className="font-bold">000</span> 개
              </div>
            </div>
            <div className="w-full h-[40px] text-black bg-lightgray  flex">
              <div className="w-1/4 leading-[40px] text-center border border-gray">
                성명
              </div>
              <div className="w-1/4 leading-[40px] text-center border border-r-0 border-l-0 border-gray">
                분야
              </div>
              <div className="w-1/4 leading-[40px] text-center border border-r-0 border-gray">
                국적
              </div>
              <div className="w-1/4 leading-[40px] text-center border border-gray">
                작겨증
              </div>
            </div>
            <div className="leading-[300px] border-b-2 border-gray text-darkgray text-center">
              검색 결과가 없습니다.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
