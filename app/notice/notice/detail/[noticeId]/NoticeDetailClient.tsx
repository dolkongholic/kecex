"use client";

import React, { useEffect } from "react";
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
import getCurrentNotice from "@/app/action/getCurrentNotice";
import axios from "axios";

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

interface NoticeClientProps {
  currentNotice: any;
}

const NoticeDetailClient: React.FC<NoticeClientProps> = ({ currentNotice }) => {
  const [pageMenu, setPageMenu] = useState<any>("공지사항");
  const [preNotice, setPreNotice] = useState<any>(null);

  useEffect(() => {
    const fetchPreNotice = async () => {
      try {
        const response = await axios.post("/api/notice", currentNotice.id - 1);
        setPreNotice(response); // 예상되는 데이터 형식에 따라 수정
        console.log(preNotice);
      } catch (error) {
        console.error("Error fetching pre notice:", error);
      }
    };

    fetchPreNotice();
  }, [currentNotice, preNotice]);
  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
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
          <ContentTitle title="공지사항" center={true} />
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray-100">
            &nbsp;
          </div>
          <div className="w-full pl-[20px] flex justify-start items-center h-[70px] bg-gray-100 border-t-2 border-gray-500">
            {currentNotice?.title}
          </div>
          <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray-100">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div className="pl-4">{currentNotice?.date}</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center"></div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px]">
            {currentNotice.content.split("\n").map((line: any, index: any) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          {/* <div className="w-full flex justify-start items-center h-[70px] border-t-2 border-t-gray-100 border-b-2 border-b-gray-500">
            <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
              첨부파일
            </div>
            <div className="flex justify-start items-center pl-[20px]">
              <p className="cursor-pointer">방폭전기기기의 설계.hwp</p>
              <button className="cursor-pointer flex justify-center items-center gap-[20px] ml-[40px] bg-gray-500 text-white w-[120px] h-[35px]">
                다운로드 <GrDownload className="grIcon" />
              </button>
            </div>
          </div> */}
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
          <Link
            passHref
            href={"../notice"}
            className="w-full flex justify-center"
          >
            <button className="w-32 h-10 bg-superdarkgray text-white text-[14px] mt-9">
              목록
            </button>
          </Link>
        </section>
      </main>
    </section>
  );
};

export default NoticeDetailClient;
