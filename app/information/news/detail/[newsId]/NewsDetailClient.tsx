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
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import PicCeo from "@/public/img/page_top/ceo_top.jpg"

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

const location = "카드뉴스";

interface NewsClientProps {
  currentNews: any;
  currentUser?: any;
}

const NewsDetailClient: React.FC<NewsClientProps> = ({
  currentNews,
  currentUser,
}) => {
  const [pageMenu, setPageMenu] = useState<any>("카드뉴스");

  const [preNews, setPreNews] = useState<any>(null);
  const [nextNews, setNextNews] = useState<any>(null);

  const router = useRouter();
  const preId = {
    id: currentNews.id - 1,
  };

  const nextId = {
    id: currentNews.id + 1,
  };

  const params = useSearchParams();
  const page = params?.get("page");

  useEffect(() => {
    const fetchPreNews = async () => {
      try {
        const preNewsResponse = await axios.post("/api/news", preId);
        setPreNews(preNewsResponse.data);
        const nextNewsResponse = await axios.post("/api/news", nextId);
        setNextNews(nextNewsResponse.data);
      } catch (error) {
        console.error("Error fetching News:", error);
      }
    };
    fetchPreNews();
  }, []);

  const del = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/news/del", currentNews)
        .then(() => {
          toast.success("삭제 되었습니다.");
          router.push(`/information/news?page=${page}`);
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
          <ContentTitle title="카드뉴스" />
          <div className="w-full  border-b border-gray-100">&nbsp;</div>
          <div className="w-full pl-[20px] flex justify-start items-center h-[70px] bg-gray-100 border-t-2 border-gray-200">
            <div className="px-[10px] p-[5px] bg-gray-500 text-white mr-[20px]">
              협회소식
            </div>
            <div>{currentNews?.title}</div>
          </div>
          <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div className="ml-3">{currentNews?.date}</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center"></div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px] text-[13px] text-base">
            <Image
              src={currentNews.img}
              width={700}
              height={300}
              alt="img"
              className="mb-[20px]"
            />
            {currentNews.content.split("\n").map((line: any, index: any) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          {preNews ? (
            <Link
              passHref
              href={`/information/news/detail/${preId.id}?page=${page}`}
              className="w-full"
            >
              <div className="cursor-pointer w-full mt-[30px] flex justify-start items-center h-[70px] border-t-2 border-gray-100 border-b">
                <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>이전글</p>
                  <RiArrowUpSLine className="text-[24px] pt-[3px]" />
                </div>
                <div className="flex justify-start items-center pl-[20px]">
                  {preNews.title}
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

          {nextNews ? (
            <Link
              passHref
              href={`/information/news/detail/${nextId.id}?page=${page}`}
              className="w-full"
            >
              <div className="cursor-pointer w-full flex justify-start items-center h-[70px] border-b-2 border-b-gray-100">
                <div className="w-[200px] pl-[20px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>다음글</p>
                  <RiArrowDownSLine className="text-[24px] pt-[3px]" />
                </div>
                <div className="flex justify-start items-center pl-[20px]">
                  {nextNews.title}
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
            <Link
              passHref
              href={`/information/news/`}
              className="w-full"
            >
              <button
                className="w-32 h-10 bg-gray-500 text-white text-[14px] mt-9 m-auto"
              >
                목록
              </button>
            </Link>
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

export default NewsDetailClient;
