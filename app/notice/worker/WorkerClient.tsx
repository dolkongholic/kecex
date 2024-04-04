"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";
import PicNotice_01 from "@/public/img/page_top/notice_01.jpg"
import Picworker from "@/public/img/inner/worker/worker_group.png"

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

const location = "인재정보";

interface workerProps {
  currentUser?: any;
}

const WorkerClient: React.FC<workerProps> = ({ currentUser }) => {
  const [pageMenu, setPageMenu] = useState<any>("인재정보");
  const [select, setSelect] = useState<string>("분야");

  const temp = () => {
    alert("이력서를 작성하셔야합니다.");
  };
  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicNotice_01}
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

        <section className="py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px] px-[40px]">
            <ContentTitle title={location} center={true} />
            {/* <div className="flex w-full mt-[50px]">
              <div className="flex-col w-full">
                <div>
                  <input
                    type="text"
                    className="w-full h-[50px] border border-gray-200 leading-[50px] px-[20px] focus:outline-none focus:ring-2 focus:ring-active transition-all duration-500 placeholder:text-gray-400"
                    placeholder="검색어를 입력하세요"
                  />
                </div>
                <div className="flex w-full mt-[10px]">
                  <div className="w-[150px] flex-col items-center">
                    <div
                      className={`flex h-[45px] justify-between items-center w-full px-[20px] border border-gray-200 cursor-pointer ${
                        select == "분야" && "bg-blue-500 text-white"
                      }`}
                      onClick={() => setSelect("분야")}
                    >
                      <span>분야</span>
                      <IoIosArrowForward />
                    </div>
                    <div
                      className={`flex h-[45px] justify-between items-center w-full px-[20px] border border-t-0 border-b-0 border-gray-200 cursor-pointer ${
                        select == "국적" && "bg-blue-500 text-white"
                      }`}
                      onClick={() => setSelect("국적")}
                    >
                      <span>국적</span>
                      <IoIosArrowForward />
                    </div>
                    <div
                      className={`flex h-[45px] justify-between items-center w-full px-[20px] border border-gray-200 cursor-pointer ${
                        select == "자격증" && "bg-blue-500 text-white"
                      }`}
                      onClick={() => setSelect("자격증")}
                    >
                      <span>자격증</span>
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="w-full flex-col items-start">
                    <div className="bg-lightgray w-full h-[45px] leading-[45px] px-[20px] text-gray-400">
                      분야를 선택해주세요
                    </div>
                    <div className="w-full flex justify-start items-start p-[10px] space-x-[20px] border-b border-gray-200 h-[90px]">
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
                <button className="bg-blue-500 text-white w-full h-full">
                  검색
                </button>
              </div>
            </div> */}
            <div className="w-full lg:w-[1200px] h-[472px] relative flex justify-center">
              <Image
                src={Picworker}
                // fill={true}
                // layout="fill"
                // objectFit="cover"
                alt="worker_img"
                className="object-cover"
              />
            </div>
          </div>
          
        </section>
      </main>
    </section>
  );
};

export default WorkerClient;
