"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Pages from "@/components/pages";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import PicInfo_01 from "@/public/img/page_top/information_01.jpg"

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
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicInfo_01}
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

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="관계법령" />
          <div className="w-full">
            <ul className="w-full flex justify-between flex-wrap">
              <Link passHref 
                href={"https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%82%B0%EC%97%85%EC%95%88%EC%A0%84%EB%B3%B4%EA%B1%B4%EB%B2%95"} 
                target="_blank" 
                className="w-[32%] mr-[2%] "
              >
                <li className="h-[180px] bg-white border border-[#ccc] rounded-md overflow-hidden">
                  <p className="w-full h-[50px] bg-primary text-white leading-[50px] text-[18px] pl-5">고용노동부</p>
                  <div className="w-full flex justify-between p-5 mt-6">
                    <p className="text-[20px] font-semibold mt-2">산업안전보건법</p>
                    <button
                      title="Add New"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        className="stroke-primary fill-none group-hover:fill-lightgray group-active:stroke-[#60B86F] group-active:fill-white group-active:duration-0 duration-300"
                      >
                        <path
                          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                          stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </Link>
              <Link passHref 
                href={"https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%82%B0%EC%97%85%EC%95%88%EC%A0%84%EB%B3%B4%EA%B1%B4%EA%B8%B0%EC%A4%80%EC%97%90%EA%B4%80%ED%95%9C%EA%B7%9C%EC%B9%99"} 
                target="_blank" 
                className="w-[32%] mr-[2%] "
              >
                <li className="w-full h-[180px] bg-white border border-[#ccc] rounded-md overflow-hidden">
                  <p className="w-full h-[50px] bg-primary text-white leading-[50px] text-[18px] pl-5">고용노동부</p>
                  <div className="w-full flex justify-between p-5 mt-6">
                    <p className="text-[20px] font-semibold mt-2">
                      산업안전보건법에 <br/> 관한 규칙
                      </p>
                    <button
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300 h-[50px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        className="stroke-primary fill-none group-hover:fill-lightgray group-active:stroke-[#60B86F] group-active:fill-white group-active:duration-0 duration-300"
                      >
                        <path
                          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                          stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </Link>
              <Link passHref 
                href={"https://www.law.go.kr/LSW/lsInfoP.do?efYd=20220127&lsiSeq=228817#0000"} 
                target="_blank" 
                className="w-[32%]"
              >
                <li className="w-full h-[180px] bg-white border border-[#ccc] rounded-md overflow-hidden">
                  <p className="w-full h-[50px] bg-primary text-white leading-[50px] text-[18px] pl-5">고용노동부</p>
                  <div className="w-full flex justify-between p-5 mt-6">
                    <p className="text-[20px] font-semibold mt-2">
                      중대재해 처벌 등에 <br/> 관한 법률
                      </p>
                    <button
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300 h-[50px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        className="stroke-primary fill-none group-hover:fill-lightgray group-active:stroke-[#60B86F] group-active:fill-white group-active:duration-0 duration-300"
                      >
                        <path
                          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                          stroke-width="1.5"
                        ></path>
                        <path d="M8 12H16" stroke-width="1.5"></path>
                        <path d="M12 16V8" stroke-width="1.5"></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </Link>
            </ul>
          </div>

          
        </section>
      </main>
    </section>
  );
};

export default RawClient;
