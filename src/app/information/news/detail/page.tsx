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
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
  {
    id: 2,
    title: "방폭전기기기의 설계, 선정 및 설치에 관한 기준",
  },
];

const location = "관계법령";

export default function NewsDetailPage() {
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
            &nbsp;
          </div>
          <div className="w-full pl-[20px] flex justify-start items-center h-[70px] bg-lightgray border-t-2 border-darkgray">
            <div className="px-[10px] p-[5px] bg-superdarkgray text-white mr-[20px]">
              협회소식
            </div>
            <div>폴리텍대학 석유화학공정 기술교육원, 방폭안전교육센터 구축</div>
          </div>
          <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div>2023-10-10</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center">
              조회수 1234
            </div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px] text-[13px]">
            <p className="leading-[20px]">
              [가스신문 = 박귀철 기자] 한국폴리텍대학 석유화학 공정기술원(원장
              윤성종)이 지난달 16일 국내 최초로 방폭안전교육센터를 구축,
              개관함으로써 올해부터 본격적인 전문가 양성에 들어갔다.
            </p>
            <p className="leading-[20px]">
              이번에 구축된 방폭안전교육센터는 KOSHA Guide 및 가스기술기준(KGS
              GC Code)에 요구하는 국제적 수준의 방폭산업안전 현장 실무 안전
              관리자를 양성하게 된다.
            </p>
            <p className="leading-[20px]">
              센터에서는 지난달 초 한국방폭산업안전협회와 엑스텍코리아로부터 약
              8억원 상당의 방폭교육 및 국제 방폭자격증실습을 위한 실습장비를
              기증받아 설치했다.
            </p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">
              출처 : 가스신문(http://www.gasnews.com)
            </p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">출처 : 가스안전공사</p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">&nbsp;</p>
            <Image
              src="/img/banner/img_1.jpg"
              width={300}
              height={100}
              alt="img"
            />
          </div>

          <Link passHref href={"./detail/"} className="w-full">
            <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray border-b">
              <div className="w-[200px] pl-[20px] flex justify-center items-center bg-lightgray h-[66px] text-black">
                <p>이전글</p>
                <RiArrowUpSLine className="text-[24px] pt-[3px]" />
              </div>
              <div className="flex justify-start items-center pl-[20px]">
                폴리텍대학 석유화학공정 기술교육원, 방폭안전교육센터 구축
              </div>
            </div>
          </Link>
          <Link passHref href={"./detail/"} className="w-full">
            <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray">
              <div className="w-[200px] pl-[20px] flex justify-center items-center bg-lightgray h-[66px] text-black">
                <p>다음글</p>
                <RiArrowDownSLine className="text-[24px] pt-[3px]" />
              </div>
              <div className="flex justify-start items-center pl-[20px]">
                <p>폴리텍대학 석유화학공정 기술교육원, 방폭안전교육센터 구축</p>
              </div>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </section>
  );
}
