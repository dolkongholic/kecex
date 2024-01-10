"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import Image from "next/image";

const MainList = [
  {
    title: "관계법령",
    url: "/information/raw",
    sub: null,
  },
  {
    title: "카드뉴스",
    url: "/information/news",
    sub: null,
  },
];

const Items = [
  {
    id: 1,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_1.jpg",
    type: "협회소식",
    date: "2023.10.01",
  },
  {
    id: 2,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_2.jpg",
    type: "협회소식",
    date: "2023.10.01",
  },
  {
    id: 3,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_3.jpg",
    type: "협회소식",
    date: "2023.10.01",
  },
  {
    id: 1,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_1.jpg",
    type: "보도자료",
    date: "2023.10.01",
  },
  {
    id: 2,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_2.jpg",
    type: "보도자료",
    date: "2023.10.01",
  },
  {
    id: 3,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_3.jpg",
    type: "보도자료",
    date: "2023.10.01",
  },
  {
    id: 1,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_1.jpg",
    type: "협회소식",
    date: "2023.10.01",
  },
  {
    id: 2,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_2.jpg",
    type: "협회소식",
    date: "2023.10.01",
  },
  {
    id: 3,
    title: "폴리텍대학 석유화학공정 기술교육원, 방폭안전 교육센터 구축",
    img: "/img/banner/img_3.jpg",
    type: "협회소식",
    date: "2023.10.01",
  },
];

const location = "카드뉴스";

export default function NewsPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("카드뉴스");

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
            1/100 페이지 (전체 255건)
          </div>

          <div className="grid grid-cols-3 gap-4 pt-[30px]">
            {Items.map((item, index) => (
              <Link key={index} passHref href={"./news/detail/"}>
                <div className="border border-gray text-darkgray ease-linear transition-colors duration-300 hover:bg-secondary hover:text-white">
                  <div className="flex flex-col">
                    <div
                      className={`bg-[url('/img/banner/img_1.jpg')] bg-cover`}
                    >
                      <div className="w-full h-[200px] flex justify-start items-end">
                        <p className="px-[10px] p-[5px] bg-superdarkgray text-white">
                          {item.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-[14px] leading-[30px] px-[10px]">
                      {item.title}
                    </div>
                  </div>
                  <div className="w-full text-[13px] leading-[30px] px-[10px]">
                    {item.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center items-center h-[50px]">
            <div className="flex mr-[20px] cursor-pointer">
              <RiArrowLeftSLine className="text-[20px] pt-[3px]" />
            </div>
            <div className="flex space-x-[10px]">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index == 0 && "text-secondary font-bold"
                  } hover:text-secondary hover:font-bold cursor-pointer`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex ml-[20px] cursor-pointer">
              <RiArrowRightSLine className="text-[20px] pt-[3px]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}
