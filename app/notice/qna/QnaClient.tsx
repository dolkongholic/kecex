"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

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

const location = "문의사항";

const QnaClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("문의사항");

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-200 flex justify-center text-[13px]">
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px] px-[120px]">
            <ContentTitle title={location} center={true} />
            <div className="text-subtitle text-black text-center w-full mt-[40px]">
              1:1 문의
            </div>
            <div className="text-base text-black text-center w-full mt-[15px]">
              궁금한 사항을 문의주시면 성실하게 답변 드리겠습니다.
            </div>

            <div className="w-full border-t border-t-blue-500 mt-[40px] flex">
              <div className="w-[20%] h-[60px] pl-[40px] bg-gray-200 flex items-center text-black">
                이름
              </div>
              <div className="w-[80%] h-[60px] pl-[40px] flex items-center">
                <input
                  id="name"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  className="border border-gray p-[5px] w-1/2"
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[60px] pl-[40px] bg-gray-200 flex items-center text-black">
                연락처
              </div>
              <div className="w-[80%] h-[60px] pl-[40px] flex items-center">
                <input
                  id="tel"
                  type="text"
                  placeholder="연락처를 입력해주세요"
                  className="border border-gray p-[5px] w-1/2"
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[60px] pl-[40px] bg-gray-200 flex items-center text-black">
                이메일
              </div>
              <div className="w-[80%] h-[60px] pl-[40px] flex items-center">
                <input
                  id="email"
                  type="text"
                  placeholder="E-mail을 입력해주세요"
                  className="border border-gray p-[5px] w-1/2"
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[60px] pl-[40px] bg-gray-200 flex items-center text-black">
                제목
              </div>
              <div className="w-[80%] h-[60px] pl-[40px] flex items-center">
                <input
                  id="title"
                  type="text"
                  placeholder="제목을 입력해주세요"
                  className="border border-gray p-[5px] w-1/2"
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[180px] pl-[40px] bg-gray-200 flex items-center text-black">
                문의내용
              </div>
              <div className="w-[80%] h-[180px] pl-[40px] flex items-center">
                <input
                  id="tel"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  className="border border-gray p-[5px] w-[90%] h-[150px]"
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray border-b border-b-gray flex">
              <div className="w-[20%] h-[60px] pl-[40px] bg-gray-200 flex items-center text-black">
                파일첨부
              </div>
              <div className="w-[80%] h-[60px] pl-[40px] flex items-center">
                <input id="file" type="file" className="hidden" />
                <label
                  htmlFor="file"
                  className="border border-gray py-[5px] w-1/5 text-center text-black"
                >
                  파일첨부 +
                </label>
              </div>
            </div>
            <div className="w-full flex justify-end items-center mt-[20px]">
              <div className="w-[150px] h-[40px] text-white bg-blue-500 flex justify-center items-center">
                문의하기
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default QnaClient;