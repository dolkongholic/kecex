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
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Image from "next/image";
import PicNotice_04 from "@/public/img/page_top/notice_04.jpg"
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
    url: "/notice/notice?page=1",
    sub: null,
  },
];

const location = "공지사항";

interface NoticeClientProps {
  currentNotice: any;
  currentUser?: any;
}
const NoticeEditClient: React.FC<NoticeClientProps> = ({
  currentNotice,
  currentUser,
}) => {

  const router = useRouter();
  const id = {
    id: currentNotice.id
  };

  const [pageMenu, setPageMenu] = useState<any>("공지사항");
  const [currentDate, setCurrentDate] = useState<string>(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // API 호출하여 공지사항 데이터 가져오기
      axios.get(`/api/notice/${id}`)
        .then(response => {
          setNotice(response.data);
        })
        .catch(error => {
          console.error("Error fetching notice:", error);
          // 에러 처리
        });
    }
  }, [id]);

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: notice ? notice : {} // notice가 있으면 notice를 defaultValues로 사용, 없으면 빈 객체 사용
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .put(`/api/notice/${id}`, data) // PUT 요청으로 수정된 데이터 전송
      .then(() => {
        toast.success("수정되었습니다.");
        router.push("/notice/notice");
      })
      .catch(() => {
        toast.error("오류가 발생했습니다.");
      })
      .finally(() => {
        setIsLoading(false);
      });
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

      <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
        <ContentTitle title="공지사항 수정" center={true} />
        <div className="w-full mt-[20px] leading-[10px]">&nbsp;</div>

        <div className="w-full md:px-[20px] flex flex-col md:flex-row justify-between items-end md:items-center md:h-[70px]">
          <div className="flex items-center w-full md:w-9/12">
            <input
              type="text"
              placeholder={currentNotice?.title}
              className="w-full h-[40px] p-5 border border-gray"
              disabled={isLoading}
              {...register("text", { required: true })}
            />
          </div>
          <input
            type="date"
            value={currentDate}
            disabled={isLoading}
            className="w-1/2 md:w-2/12 h-[40px] border border-gray px-3 my-2 md:my-0"
            {...register("date", { required: true, 
              onChange: (event: any) => {
              setCurrentDate(event.target.value);
            }, })}
          />
        </div>
        <div className="md:mx-[20px] w-full md:w-[calc(100%-40px)] border-t border-secondary"></div>
        <div className="w-full my-[30px] flex flex-col md:px-[20px]">
          <textarea
            id="post_text"
            cols={30}
            rows={15}
            className="border border-gray p-6 box-border"
            disabled={isLoading}
            placeholder={currentNotice.content}
            {...register("post_text", { required: true })}
          >
          </textarea>
        </div>
        <div className="w-full flex justify-start items-center h-[70px] border-t-2 border-t-gray border-b-2 border-b-darkgray text-[15px] md:text-base">
          <div className="w-1/5 md:w-[200px] px-[20px] flex justify-center items-center bg-lightgray h-[66px] text-black">
            첨부<br className="md:hidden"/>
            파일
          </div>
          <div className="w-4/5 flex justify-start items-center pl-3 md:pl-[20px]">
            <p className="cursor-pointer w-8/12">
              <input type="file" onChange={handleFileChange} className="w-"/>
            </p>
            <button
              className="cursor-pointer flex justify-center items-center gap-2 md:gap-[20px] md:ml-[40px] bg-neutral-800 text-white w-5/12 md:w-[120px] h-[35px]"
              disabled={isLoading}
            >
              업로드 <GrUpload className="grIcon"/>
            </button>
          </div>
        </div>
        <div className="w-full pt-3 flex justify-between md:px-[20px]">
          <button
            className="w-24 h-8 border border-gray-500 rounded-sm bg-lightgray text-[14px] hover:bg-neutral-800 hover:text-white hover:border-neutral-800"
            onClick={() => router.back()}
          >
            돌아가기
          </button>
          <Link passHref href={"../notice"}>
            <button
              className="w-24 h-8 border border-primary rounded-sm bg-white text-[14px] text-primary hover:bg-primary hover:border-primary hover:text-white"
              onClick={handleSubmit(onSubmit)}
            >
              수정하기
            </button>
          </Link>
        </div>
      </section>
    </main>
  </section>
  );
};

export default NoticeEditClient;
