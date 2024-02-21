"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { GrDownload } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

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

interface RawClientProps {
  currentRaw: any;
  currentUser?: any;
}

const RawDetailClient: React.FC<RawClientProps> = ({
  currentRaw,
  currentUser,
}) => {
  const [pageMenu, setPageMenu] = useState<any>("관계법령");

  const [preRaw, setPreRaw] = useState<any>(null);
  const [nextRaw, setNextRaw] = useState<any>(null);

  const router = useRouter();
  const preId = {
    id: currentRaw.id - 1,
  };

  const nextId = {
    id: currentRaw.id + 1,
  };

  useEffect(() => {
    const fetchPreRaw = async () => {
      try {
        const preRawResponse = await axios.post("/api/raw", preId);
        setPreRaw(preRawResponse.data);
        const nextRawResponse = await axios.post("/api/raw", nextId);
        setNextRaw(nextRawResponse.data);
      } catch (error) {
        console.error("Error fetching pre Raw:", error);
      }
    };
    fetchPreRaw();
  }, []);

  const params = useSearchParams();
  const page = params?.get("page");

  const del = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/raw/del", currentRaw)
        .then(() => {
          toast.success("삭제 되었습니다.");
          router.push(`/information/raw?page=${page}`);
        })
        .catch(() => {
          toast.error("오류가 있습니다.");
        });
    } else {
    }
  };

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="관계법령" />
          <div className="w-full border-b border-gray-100">&nbsp;</div>
          <div className="w-full pl-[20px] flex justify-start items-center h-[70px] bg-gray-100 border-t-2 border-darkgray">
            {currentRaw?.title}
          </div>
          <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray-100">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div className="ml-3">{currentRaw?.date}</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center"></div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px] pb-10">
            {currentRaw.content.split("\n").map((line: any, index: any) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          {/* <div className="w-full flex justify-start items-center h-[70px] border-t-2 border-t-gray-100 border-b-2 border-b-darkgray">
            <div className="w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
              첨부파일
            </div>
            <div className="flex justify-start items-center pl-[20px]">
              <p className="cursor-pointer">방폭전기기기의 설계.hwp</p>
              <button className="cursor-pointer flex justify-center items-center gap-[20px] ml-[40px] bg-darkgray text-white w-[120px] h-[35px]">
                다운로드 <GrDownload className="grIcon" />
              </button>
            </div>
          </div> */}
          {preRaw ? (
            <Link
              passHref
              href={`/information/raw/detail/${preId.id}?page=${page}`}
              className="w-full"
            >
              <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray-100 border-b">
                <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>이전글</p>
                  <RiArrowUpSLine className="text-[24px] pt-[3px]" />
                </div>
                <div className="flex justify-start items-center pl-[20px]">
                  {preRaw.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray-100 border-b">
              <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>이전글</p>
                <RiArrowUpSLine className="text-[24px] pt-[3px]" />
              </div>
              <div className="flex justify-start items-center pl-[20px]">
                이전글이 없습니다.
              </div>
            </div>
          )}

          {nextRaw ? (
            <Link
              passHref
              href={`/information/raw/detail/${nextId.id}?page=${page}`}
              className="w-full"
            >
              <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray-100">
                <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>다음글</p>
                  <RiArrowDownSLine className="text-[24px] pt-[3px]" />
                </div>
                <div className="flex justify-start items-center pl-[20px]">
                  {nextRaw.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray-100">
              <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>다음글</p>
                <RiArrowDownSLine className="text-[24px] pt-[3px]" />
              </div>
              <div className="flex justify-start items-center pl-[20px]">
                <p>다음글이 없습니다.</p>
              </div>
            </div>
          )}
          <div className="flex gap-4 m-auto">
            <button
              className="w-32 h-10 bg-gray-500 text-white text-[14px] mt-9 m-auto"
              onClick={() => router.back()}
            >
              목록
            </button>
            {currentUser && (
              <button
                className="w-32 h-10 bg-red-500 text-white text-[14px] mt-9 m-auto"
                onClick={() => del()}
              >
                삭제
              </button>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default RawDetailClient;
