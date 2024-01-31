"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { GrUpload } from "react-icons/gr";

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

const location = "공지사항";

const PostClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("공지사항");
  const [currentDate, setCurrentDate] = useState<string>(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
  };

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="공지사항 작성" center={true} />
          <div className="w-full mt-[20px] leading-[50px]">&nbsp;</div>

          <div className="w-full px-[20px] flex justify-between items-center h-[70px]">
            <div className="flex items-center w-9/12">
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                className="w-full h-[40px] p-5 border border-gray"
              />
            </div>
            <input
              type="date"
              value={currentDate}
              onChange={handleDateChange}
              className="w-2/12 h-[40px] border border-gray px-3"
            />
          </div>
          <div className="mx-[20px] w-[calc(100%-40px)] border-t border-secondary"></div>
          <div className="w-full my-[30px] flex flex-col px-[20px]">
            <textarea
              name="post_text"
              id="post_text"
              cols={30}
              rows={15}
              className="border border-gray p-6 box-border"
            >
              글 내용을 입력해주세요.
            </textarea>
          </div>
          <div className="w-full flex justify-start items-center h-[70px] border-t-2 border-t-gray border-b-2 border-b-darkgray">
            <div className="w-[200px] px-[20px] flex justify-center items-center bg-lightgray h-[66px] text-black">
              첨부파일
            </div>
            <div className="flex justify-start items-center pl-[20px]">
              <p className="cursor-pointer">
                <input type="file" />
              </p>
              <button className="cursor-pointer flex justify-center items-center gap-[20px] ml-[40px] bg-darkgray text-white w-[120px] h-[35px]">
                업로드 <GrUpload className="grIcon" />
              </button>
            </div>
          </div>
          <div className="w-full pt-3 flex justify-between">
            <Link passHref href={"../notice"}>
              <button className="w-24 h-8 border border-gray rounded-sm bg-lightgray text-[14px] hover:bg-darkgray hover:text-white hover:border-darkgray">
                돌아가기
              </button>
            </Link>
            <Link passHref href={"../notice"}>
              <button className="w-24 h-8 border border-darkgray rounded-sm bg-darkgray text-[14px] text-white hover:bg-secondary hover:border-secondary">
                글쓰기
              </button>
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PostClient;
