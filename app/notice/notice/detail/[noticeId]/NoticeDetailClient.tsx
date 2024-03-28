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

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Image from "next/image";
import PicNotice_04 from "@/public/img/page_top/notice_04.jpg"

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

const location = "공지사항";

interface NoticeClientProps {
  currentNotice: any;
  currentUser?: any;
}

const NoticeDetailClient: React.FC<NoticeClientProps> = ({
  currentNotice,
  currentUser,
}) => {
  const [pageMenu, setPageMenu] = useState<any>("공지사항");
  const [preNotice, setPreNotice] = useState<any>(null);
  const [nextNotice, setNextNotice] = useState<any>(null);

  const router = useRouter();
  const preId = {
    id: currentNotice.id - 1,
  };

  const nextId = {
    id: currentNotice.id + 1,
  };

  useEffect(() => {
    const fetchPreNotice = async () => {
      try {
        const preNoticeResponse = await axios.post("/api/notice", preId);
        setPreNotice(preNoticeResponse.data);
        const nextNoticeResponse = await axios.post("/api/notice", nextId);
        setNextNotice(nextNoticeResponse.data);
      } catch (error) {
        console.error("Error fetching pre notice:", error);
      }
    };

    fetchPreNotice();
  }, []);

  const params = useSearchParams();
  const page = params?.get("page");

  const del = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/notice/del", currentNotice)
        .then(() => {
          toast.success("삭제 되었습니다.");
          router.push(`/notice/notice?page=${page}`);
        })
        .catch(() => {
          toast.error("오류가 있습니다.");
        });
    } else {
    }
  };

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicNotice_04}
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
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="공지사항" center={true} />
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray-100">
            &nbsp;
          </div>
          <div className="w-full pl-[20px] flex justify-start items-center h-[70px] bg-gray-100 border-t-2 border-gray-500">
            <div className="w-[900px] overflow-hidden line-clamp-1">{currentNotice?.title}</div>
          </div>
          <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray-100">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div className="pl-4">{currentNotice?.date}</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center"></div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px] pb-10">
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
          {preNotice ? (
            <Link
              passHref
              href={`/notice/notice/detail/${preId.id}?page=${page}`}
              className="w-full"
            >
              <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray-100 border-b">
                <div className="w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>이전글</p>
                  <RiArrowUpSLine className="text-[24px] pt-[3px] text-[#3A3A3A]" />
                </div>
                <div className="w-[890px] flex justify-start items-center pl-[20px]">
                  {preNotice.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray-100 border-b">
              <div className="w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>이전글</p>
                <RiArrowUpSLine className="text-[24px] pt-[3px] text-[#3A3A3A] opacity-0" />
              </div>
              <div className="w-[890px] flex justify-start items-center pl-[20px]">
                이전글이 없습니다.
              </div>
            </div>
          )}

          {nextNotice ? (
            <Link
              passHref
              href={`/notice/notice/detail/${nextId.id}?page=${page}`}
              className="w-full"
            >
              <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray-100">
                <div className="w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>다음글</p>
                  <RiArrowDownSLine className="text-[24px] pt-[3px] text-[#3A3A3A]" />
                </div>
                <div className="w-[890px] flex justify-start items-center pl-[20px]">
                  {nextNotice.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray-100">
              <div className="w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>다음글</p>
                <RiArrowDownSLine className="text-[24px] pt-[3px] text-[#3A3A3A] opacity-0" />
              </div>
              <div className="w-[890px] flex justify-start items-center pl-[20px]">
                <p>다음글이 없습니다.</p>
              </div>
            </div>
          )}
          <div className="flex gap-4 m-auto">
            <Link passHref href={"/notice/notice?page=1"}>
              <button
                className="w-32 h-10 bg-gray-500 text-white text-[14px] mt-9 m-auto"
              >
                목록
              </button>
            </Link>
            {currentUser.staff && (
              <button
                className="w-32 h-10 bg-red-500 text-white text-[14px] mt-9 m-auto"
                onClick={() => del()}
              >
                삭제
              </button>
              
            )}
            {currentUser.staff && (
            <Link href={`/notice/notice/edit/${currentNotice.id}?page=${page}`}>
              <button className="w-32 h-10 bg-primary text-white text-[14px] mt-9 m-auto">수정</button>
            </Link>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default NoticeDetailClient;
