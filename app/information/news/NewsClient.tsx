"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Pages from "@/components/pages";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import PicInfo_02 from "@/public/img/page_top/information_02.jpg"

const MainList = [
  {
    title: "관계법령",
    url: "/information/raw?page=1",
    sub: null,
  },
  {
    title: "카드뉴스",
    url: "/information/news?page=1",
    sub: null,
  },
];

const location = "카드뉴스";

interface NewsProps {
  newsList?: any;
  currentUser?: any;
}

const NewsClient: React.FC<NewsProps> = ({ newsList, currentUser }) => {
  const [pageMenu, setPageMenu] = useState<any>("카드뉴스");

  const params = useSearchParams();
  const page = params?.get("page");
  const pathname = usePathname();
  const isMainPage = pathname === "/information/news";

  if (!isMainPage) {
    return null;
  }

  const totalItems = newsList.length;
  const totalPages = Math.ceil(totalItems / 10); // list의 길이를 10으로 나눈 후 올림하여 페이지 수 계산

  // totalPages만큼 페이지를 생성
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicInfo_02}
            layout="fill"
            objectFit="cover"
            alt="item.title"
            className="object-cover"
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
              정보공개 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-full lg:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
          <div className=" bg-white flex justify-center item-start">
            <div className="w-full flex items-start">
              <div className="w-[240px] flex flex-col">
                <SubNavHeader title={"정보공개"} />
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
          <ContentTitle title="카드뉴스" />
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray">
            {page}/{totalPages} 페이지 (총 {newsList.length} 건)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-[30px]">
            {newsList.map((item: any, index: any) => (
              <Link
                key={index}
                passHref
                href={`/information/news/detail/${item.id}?page=${page}`}
              >
                <div className="border border-gray text-[#3A3A3A] ease-linear transition-colors duration-300 hover:bg-secondary hover:text-white w-[350px] h-[310px]">
                  <div className="flex flex-col relative">
                    <div className="w-[350px] h-[220px] m-auto object-cover  overflow-hidden relative box-border -ml-[1px]"> {/* 350*220 사이즈 */}
                      <Image
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        alt="item.title"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full flex justify-start items-end absolute left-[-1px] top-[190.5px]">
                      <p className="px-[16px] py-[5px] bg-[#3A3A3A] text-white opacity-90 text-[13px]">
                        {item.type} 협회소식
                      </p>
                    </div>
                    <div className="text-[15px] leading-[17px] px-[10px] my-3 h-[33px] line-clamp-2 text-ellipsis">
                      {item.title}
                    </div>
                  </div>
                  <div className="w-full text-[13px] leading-[20px] px-[10px]">
                    {item.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-between items-center h-[50px] px-9">
            <div>&nbsp;</div>
            <div className="flex">
              <div className="flex mr-[20px] cursor-pointer">
                {/* <RiArrowLeftSLine className="text-[20px] pt-[3px]" /> */}
              </div>
              <div className="flex space-x-[10px]">
                {pages.map((item) => (
                  <Pages
                    key={item}
                    label={item.toString()}
                    selected={page === item.toString()}
                  />
                ))}
              </div>
              <div className="flex ml-[20px] cursor-pointer">
                {/* <RiArrowRightSLine className="text-[20px] pt-[3px]" /> */}
              </div>
            </div>
            <div>
            {currentUser?.staff && (
              <Link passHref href={"/information/news/post"}>
                <button className="cursor-pointer bg-secondary hover:bg-primary transition-all duration-300 text-white w-24 h-10 text-[14px]">
                  글쓰기
                </button>
              </Link>
            )}
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default NewsClient;
