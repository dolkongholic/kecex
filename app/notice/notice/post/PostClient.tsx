"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { GrUpload } from "react-icons/gr";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

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

const PostClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("공지사항");
  const [currentDate, setCurrentDate] = useState<string>(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/insert/notice/", data)
      .then(() => {
        toast.success("입력 되었습니다.");
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="공지사항 작성" center={true} />
          <div className="w-full mt-[20px] leading-[10px]">&nbsp;</div>

          <div className="w-full md:px-[20px] flex flex-col md:flex-row justify-between items-end md:items-center md:h-[70px]">
            <div className="flex items-center w-full md:w-9/12">
              <input
                type="text"
                placeholder="제목을 입력해주세요"
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
              placeholder="글 내용을 입력해주세요."
              {...register("post_text", { required: true })}
            ></textarea>
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
