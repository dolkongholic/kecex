"use client";

import { usePathname, useSearchParams } from "next/navigation";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import {Pages} from "@/components/pages";
import Image from "next/image";
import PicNotice_04 from "@/public/img/page_top/notice_04.jpg"

const MainList = [
  {
    title: "공지사항",
    url: "/notice/notice?page=1",
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
    title: "인재정보",
    url: "/notice/worker",
    sub: null,
  },
];

const location = "공지사항";

interface NoticeProps {
  noticeData?: {
    notices: any[];
    totalCount: number;
    totalPages: number;
    currentPage: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  currentUser?: any;
}

const NoticeClient: React.FC<NoticeProps> = ({ currentUser, noticeData }) => {
  const [pageMenu, setPageMenu] = useState<any>("공지사항");
  const params = useSearchParams();
  const page = params?.get("page");
  const pathname = usePathname();
  const isMainPage = pathname === "/notice/notice";

  if (!isMainPage) {
    return null;
  }

  // 기본값 설정
  const {
    notices = [],
    totalCount = 0,
    totalPages = 0,
    currentPage = 1
  } = noticeData || {};

  // 페이지 번호 배열 생성
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicNotice_04}
            layout="fill"
            objectFit="cover"
            alt="item.title"
            className="object-cover"
            objectPosition="top"
          />
          <div className="bg-neutral-900/50 absolute w-full h-full left-0 top-0 z-20 text-center text-white font-medium text-[36px] leading-[200px]">
            {location}
          </div>
        </div>
      </figure>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              알림센터 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px]">
            <ContentTitle title={location} center={true} />
            <div className="w-full mt-[20px] leading-[50px] border-b border-secondary">
              {currentPage}/{totalPages} 페이지 (총 {totalCount} 건)
            </div>
            {notices.map((item: any, index: any) => (
              <Link
                key={index}
                passHref
                href={`notice/detail/${item.id}?page=${currentPage}`}
                className="w-full"
              >
                <div
                  className={`cursor-pointer flex justify-between items-center w-full h-[80px] border-b leading-[80px] text-neutral-800 text-base hover:text-secondary ${
                    (index + 1) % 10 == 0
                      ? "border-black"
                      : "border-gray-100"
                  }`}
                >
                  <div className="flex ">
                    <div className="w-[50px] text-center text-gray-400 text-subtitle">
                      {totalCount - (currentPage - 1) * 10 - index}
                    </div>
                    <div className="w-[245px] md:w-[1020px] ml-3 line-clamp-1">{item.title}</div>
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
                <div>
                {currentUser?.staff && (
                  <div className=" w-24 h-10">&nbsp;</div>
                )}
                </div>
                <div className="flex space-x-[10px]">
                  {pages.map((item) => (
                    <Pages
                      key={item}
                      label={item.toString()}
                      selected={currentPage === item}
                    />
                  ))}
                </div>
                {/* <div className="flex ml-[20px] cursor-pointer">
                  <RiArrowRightSLine className="text-[20px] pt-[3px]" />
                </div> */}
              </div>
              <div>
              {currentUser?.staff && (
                <Link passHref href={"notice/post"}>
                  <button className="cursor-pointer bg-secondary hover:bg-primary transition-all duration-300 text-white w-24 h-10 text-[14px]">
                    글쓰기
                  </button>
                </Link>
              )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default NoticeClient;
