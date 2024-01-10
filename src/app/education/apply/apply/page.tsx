"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import Link from "next/link";

const MainList = [
  {
    title: "교육신청",
    url: "/education/apply/apply",
  },
  {
    title: "나의 학습활동",
    url: "/education/mystatus/apply",
  },
];

const location = "교육신청";

export default function CeoPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("교육신청");

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
              교육센터 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"교육신청"} />
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="flex justify-between w-full h-[50px] leading-[50px]">
            <Link passHref href="apply" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer bg-secondary text-white">
                교육 신청
              </div>
            </Link>
            <Link passHref href="restudy" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                재교육 신청
              </div>
            </Link>
            <Link passHref href="reexam" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                재시험 신청
              </div>
            </Link>
            <Link passHref href="semina" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                세미나 신청
              </div>
            </Link>
            <Link passHref href="consulting" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                컨설팅 신청
              </div>
            </Link>
          </div>
          <div className="flex text-title justify-center items-center text-black w-full h-[180px] p-[40px] bg-lightgray">
            <input
              type="text"
              className="w-[600px] h-[50px] border-2 border-gray px-[10px] leading-[50px] text-[14px] placeholder:text-[14px] placeholder:leading-[50px]"
              placeholder="교육명을 입력해주세요."
            />
            <button className="text-[14px] w-[150px] border-2  border-l-0 bg-white border-gray h-[50px]">
              검색
            </button>
          </div>

          <div className="mt-[30px] w-full h-full">
            <div className="w-full text-black text-[14px] border-b border-secondary leading-[50px]">
              전체 <span className="font-bold">17</span> 건
            </div>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="border-b border-gray px-[40px] py-[25px] flex justify-between items-center hover:shadow-md"
              >
                <div className="flex-col">
                  <div>
                    <span className="text-[20px] font-bold text-black mr-[20px]">
                      방폭 기초 교육
                    </span>
                    <span>교육상세</span>
                  </div>
                  <div className="text-darkgray -translate-y-[5px]">
                    Basic Course
                  </div>
                  <div className="text-superdarkgray flex justify-start items-center">
                    <span className="w-[400px]">
                      ㆍ교육일시 : 2023.11.15 ~ 2023.11.16, 09:00 ~ 18:00
                    </span>
                    <span className="w-[200px]">ㆍ교육인원 : 10명</span>
                  </div>
                  <div className="text-superdarkgray flex justify-start items-center">
                    <span className="w-[400px]">
                      ㆍ신청기간 : 2023.10.23 ~ 2023.11.10
                    </span>
                    <span className="w-[200px]">ㆍ교육비 : 30 만원</span>
                  </div>
                </div>
                <div className="flex justify-center  items-center">
                  <button className="flex justify-center items-center bg-secondary hover:bg-active text-white  w-[150px] h-[50px]">
                    <span className="mr-[10px]">교육신청</span>{" "}
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
