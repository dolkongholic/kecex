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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdSubdirectoryArrowRight } from "react-icons/md";

import Image from "next/image";
const location = "1:1 문의 답변";

interface QnaAnswerClientProps {
  currentQna?: any;
  currentUser?: any;
}

const QnaAnswerClient: React.FC<QnaAnswerClientProps> = ({
  currentQna,
  currentUser,
}) => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const [isLoading, setIsLoading] = useState(false);

  const params = useSearchParams();
  const page = params?.get("page");


  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
      ],
    },
    {
      title: "회원정보 수정",
      url: "/mypage/profile",
      sub: null,
    },
    {
      title: "정회원 가입",
      url: "/mypage/regular",
      sub: null,
    },
    {
      title: "회비 납부",
      url: "#",
      sub: [
        { title: "회비 납부", url: "/mypage/payment/payment" },
        { title: "회비 납부내역", url: "/mypage/payment/detail" },
      ],
    },
    {
      title: "회원증 출력",
      url: "/mypage/print",
      sub: null,
    },
    {
      title: "1:1문의 현황",
      url: "/mypage/overall/all02",
      sub: null,
    },
    {
      title: "경력관리",
      url: "/mypage/resume",
      sub: null,
    },
    {
      title: "경력수첩 발급",
      url: "#",
      sub: [
        { title: "경력수첩 발급", url: "/mypage/career/print" },
      ],
    },
    {
      title: "회원탈퇴",
      url: "/mypage/out",
      sub: null,
    },
    {
      title: "관리자 메뉴",
      url: "#",
      sub: [
        { title: "회비 납부 관리", url: "/mypage/management/payment/"  },
        { title: "회원 관리", url: "/mypage/management/user/" },
        { title: "문의 관리", url: "/mypage/management/qna/" },
      ],
      staff:true
    },
  ];

  const router = useRouter();
  if (!currentUser?.staff) {
    router.push("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const qnaId = currentQna.id;
  console.log(qnaId)

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/insert/qnaAnswer", {
        title: data.title,
        content: data.content,
        qnaId: qnaId,
      })
      .then(() => {
        toast.success("문의에 답변을 남겼습니다.");
        setIsLoading(true);
      })
      .catch(() => {
        toast.error("오류가 발생했습니다.");
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              마이페이지 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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

        <section className="w-full py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="1:1문의 답변" center={true} />
          <div className="w-full mt-[20px] leading-[50px] border-b border-gray-100">
            &nbsp;
          </div>
          <div className=" w-full">
            <div className="w-full pl-[20px] flex justify-start items-center h-[60px] bg-gray-100 border-t-2 border-gray-500">
              <div className=" w-full overflow-hidden line-clamp-1 px-[10px]">
                <span className="font-semibold">제목 : </span>
                  {currentQna?.title}
                </div>
            </div>
            <div className="w-full flex justify-between item-center h-[50px] border-t-2 border-b-2 border-gray-100">
              <div className="flex justify-between items-center px-[10px]">
                <div className="pl-4">
                  <span className="font-semibold">작성자 : </span>
                    {currentQna?.name}
                  </div>
              </div>
              <div className="pr-[40px] flex justify-center items-center"></div>
            </div>
            <div className="w-full mt-[30px] flex flex-col p-[20px] pb-10 border-b border-[#ccc]">
              {currentQna.content}
            </div>
          </div>
          <div className="flex mt-5 box-border w-full">
            <div className="w-[50px] pl-4">
              <MdSubdirectoryArrowRight className="w-8 h-8"/>
            </div>
            <div className="w-full">
              <div className="w-full pl-[20px] flex justify-start items-center h-[60px] bg-gray-100 border-t-2 border-gray-500">
                <div className="w-full overflow-hidden line-clamp-1 px-[10px]">
                  <span className="font-semibold">제목 : </span>
                    <input
                      className="bg-transparent border border-[#ccc] h-[35px] w-[650px] ml-1 px-2 pt-1 rounded-md"
                      placeholder="제목을 입력해주세요"
                      id="title"
                      disabled={isLoading}
                      {...register("title", { required: true })}
                    />
                  </div>
              </div>
              <div className="w-full mt-[30px] flex flex-col p-[20px] pb-10 border-b border-[#ccc]">
                <textarea
                  id="content"
                  cols={100}
                  rows={5}
                  className={`border h-[180px] border-neutral-300 p-6 box-border rounded-md my-1 ${
                    isLoading && "cursor-not-allowed"
                  }`}
                  {...register("content", { required: true })}
                  placeholder="답변 내용을 입력해주세요."
                  disabled={isLoading}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex gap-4 m-auto">
            <Link passHref href={"/mypage/management/qna"}>
              <button
                className="w-32 h-10 bg-gray-500 text-white text-[14px] mt-9 m-auto"
              >
                목록
              </button>
            </Link>
            {currentUser?.staff && (
              <button
                className="w-32 h-10 bg-secondary text-white text-[14px] mt-9 m-auto"
                onClick={handleSubmit(onSubmit)}
              >
                작성 완료
              </button>  
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default QnaAnswerClient;
