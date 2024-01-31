"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { GrDownload } from "react-icons/gr";

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

const location = "관계법령";

const RawDetailClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("관계법령");

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
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
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray-100">
            &nbsp;
          </div>
          <div className="w-full pl-[20px] flex justify-start items-center h-[70px] bg-gray-100 border-t-2 border-darkgray">
            방폭전기기기의 설계, 선정 및 설치에 관한 기준
          </div>
          <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray-100">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div className="ml-3">2023-10-10</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center">
              조회수 1234
            </div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px]">
            <p className="leading-[30px]">
              방폭전기기기의 설계, 선정 및 설치에 관한 기준
            </p>
            <p className="leading-[30px]">
              Design, Selection and Installation Code for Explosion Proof
              Electrical Equipment
            </p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">종목코드번호 : KGS CG102 201B</p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">출처 : 가스안전공사</p>
            <p className="leading-[30px]">&nbsp;</p>
            <p className="leading-[30px]">&nbsp;</p>
          </div>
          <div className="w-full flex justify-start items-center h-[70px] border-t-2 border-t-gray-100 border-b-2 border-b-darkgray">
            <div className="w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
              첨부파일
            </div>
            <div className="flex justify-start items-center pl-[20px]">
              <p className="cursor-pointer">방폭전기기기의 설계.hwp</p>
              <button className="cursor-pointer flex justify-center items-center gap-[20px] ml-[40px] bg-darkgray text-white w-[120px] h-[35px]">
                다운로드 <GrDownload className="grIcon" />
              </button>
            </div>
          </div>
          <Link passHref href={"./detail/"} className="w-full">
            <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray-100 border-b">
              <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>이전글</p>
                <RiArrowUpSLine className="text-[24px] pt-[3px]" />
              </div>
              <div className="flex justify-start items-center pl-[20px]">
                방폭전기기기의 설계, 선정 및 설치에 관한기준
              </div>
            </div>
          </Link>
          <Link passHref href={"./detail/"} className="w-full">
            <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray-100">
              <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>다음글</p>
                <RiArrowDownSLine className="text-[24px] pt-[3px]" />
              </div>
              <div className="flex justify-start items-center pl-[20px]">
                <p>방폭전기기기의 설계, 선정 및 설치에 관한기준</p>
              </div>
            </div>
          </Link>
          <Link passHref href={"../raw"} className="w-full flex justify-center">
            <button className="w-32 h-10 bg-gray-100-100 text-white text-[14px] mt-9">
              목록
            </button>
          </Link>
        </section>
      </main>
    </section>
  );
};

export default RawDetailClient;
