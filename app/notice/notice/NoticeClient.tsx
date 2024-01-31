"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
  {
    title: "공지사항",
    url: "/notice/notice",
    sub: null,
  },
];

const Items = [
  {
    id: 1,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 2,
    title: "2번",
  },
  {
    id: 3,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 4,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 5,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 6,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 7,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 8,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
];
const location = "공지사항";

const NoticeClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("공지사항");

  return (
    <section>
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
            <div className="w-full mt-[20px] leading-[50px] border-b border-blue-500">
              1/100 페이지 (전체 155건)
            </div>

            {Items.map((item, index) => (
              <Link
                key={index}
                passHref
                href={`notice/notice/detail/${item.id}`}
                className="w-full"
              >
                <div
                  className={`cursor-pointer flex justify-between items-center w-full h-[80px] border-b  leading-[80px] text-black text-base hover:text-blue-500 ${
                    index % 7 == 0 && index != 0
                      ? "border-black"
                      : "border-gray-100"
                  }`}
                >
                  <div className="flex ">
                    <div className="w-[50px] text-center text-gray-400 text-subtitle">
                      {item.id}
                    </div>
                    <div className="ml-3">{item.title}</div>
                  </div>
                  <div className="w-[50px] text-gray-400 ">
                    <RiArrowRightSLine className="text-[26px]" />
                  </div>
                </div>
              </Link>
            ))}
            <div className="w-full flex justify-between items-center h-[50px]">
              <div>&nbsp;</div>
              <div className="flex">
                <div className="flex mr-[20px] cursor-pointer">
                  <RiArrowLeftSLine className="text-[20px] pt-[3px]" />
                </div>
                <div className="flex space-x-[10px]">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        index == 0 && "text-blue-500 font-bold"
                      } hover:text-blue-500 hover:font-bold cursor-pointer`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex ml-[20px] cursor-pointer">
                  <RiArrowRightSLine className="text-[20px] pt-[3px]" />
                </div>
              </div>
              <Link passHref href={"./notice/post"}>
                <button className="cursor-pointer bg-blue-500 text-white w-24 h-8 text-[14px]">
                  글쓰기
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default NoticeClient;
