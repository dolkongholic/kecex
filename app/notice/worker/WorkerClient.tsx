"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { IoIosArrowForward } from "react-icons/io";

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
    url: "/notice/notice?page=1",
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
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
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

        <section className="py-[20px] md:pl-[40px] px-[20px] md:px-0 w-full flex flex-col justify-start items-start">
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

            <div className="w-full h-[50px] leading-[50px] border-b-2 border-blue-500 mt-[50px]">
              {/* <div>
                검색결과 <span className="font-bold">000</span> 개
              </div> */}
            </div>
            <div className="w-full h-[40px] text-black bg-lightgray  flex">
              <div className="w-1/4 leading-[40px] text-center border border-gray-200">
                성명
              </div>
              <div className="w-1/4 leading-[40px] text-center border border-r-0 border-l-0 border-gray-200">
                분야
              </div>
              <div className="w-1/4 leading-[40px] text-center border border-r-0 border-gray-200">
                국적
              </div>
              <div className="w-1/4 leading-[40px] text-center border border-gray-200">
                자격증
              </div>
            </div>
            <div className="leading-[300px] border-b-2 border-gray-200 text-gray-400 text-center hidden">
              검색 결과가 없습니다.
            </div>
            {/*검색 결과 없을 때 */}
            <ul>
              {/* {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <li className="flex" key={index}>
                  <div className="w-1/4 leading-[40px] text-center border-x border-b border-gray-200">
                    홍길동
                  </div>
                  <div className="w-1/4 leading-[40px] text-center border-b border-gray-200">
                    화학
                  </div>
                  <div className="w-1/4 leading-[40px] text-center border-b border-l border-gray-200">
                    한국
                  </div>
                  <div className="w-1/4 leading-[40px] text-center border-x border-b border-gray-200">
                    IECEx 001
                  </div>
                </li>
              ))} */}
            </ul>
          </div>
          {currentUser && (
            <button
              className="w-36 h-12 bg-blue-500 text-white m-auto"
              onClick={() => temp()}
            >
              등록하기
            </button>
          )}
        </section>
      </main>
    </section>
  );
};

export default WorkerClient;
