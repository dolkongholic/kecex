"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Pages from "@/components/pages";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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

const location = "관계법령";

interface RawProps {
  rawList?: any;
  currentUser?: any;
}

const RawClient: React.FC<RawProps> = ({ rawList, currentUser }) => {
  const [pageMenu, setPageMenu] = useState<any>("관계법령");

  const params = useSearchParams();
  const page = params?.get("page");
  const pathname = usePathname();
  const isMainPage = pathname === "/information/raw";

  if (!isMainPage) {
    return null;
  }

  const totalItems = rawList.length;
  const totalPages = Math.ceil(totalItems / 10); // list의 길이를 10으로 나눈 후 올림하여 페이지 수 계산

  // totalPages만큼 페이지를 생성
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              정보공개 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="관계법령" />
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray">
            {page}/{totalPages} 페이지 (총 {rawList.length} 건)
          </div>

          {rawList.map((item: any, index: any) => (
            <Link
              key={index}
              passHref
              href={`information/raw/detail/${item.id}`}
              className="w-full"
            >
              <div
                className={`cursor-pointer flex justify-between items-center w-full h-[80px] border-b  leading-[80px] text-black text-base hover:text-blue-500 ${
                  index % 7 == 0 && index != 0 ? "border-black" : "border-gray"
                }`}
              >
                <div className="flex ">
                  <div className="w-[50px] text-center text-darkgray text-subtitle">
                    {item.id}
                  </div>
                  <div className="ml-3">{item.title}</div>
                </div>
                <div className="w-[50px] text-darkgray ">
                  <RiArrowRightSLine className="text-[26px]" />
                </div>
              </div>
            </Link>
          ))}
          <div className="w-full flex justify-between items-center h-[50px]">
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
            {currentUser && (
              <Link passHref href={"/information/raw/post"}>
                <button className="cursor-pointer bg-blue-500 text-white w-24 h-8 text-[14px]">
                  글쓰기
                </button>
              </Link>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default RawClient;
