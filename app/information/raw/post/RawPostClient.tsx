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

const RawPostClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("관계법령");
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
      .post("/api/insert/raw/", data)
      .then(() => {
        toast.success("입력 되었습니다.");
        router.push("/information/raw?page=1");
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
        <div className="h-[40px] w-full bg-gray-200 flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
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

      <main className="w-[1400px] flex justify-between items-start m-auto">
        <section className="flex flex-col justify-start items-center">
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
          <ContentTitle title="관계법령 작성" center={true} />
          <div className="w-full mt-[20px] leading-[50px]">&nbsp;</div>

          <div className="w-full px-[20px] flex justify-between items-center h-[70px]">
            <div className="flex items-center w-9/12">
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
              {...register("date", { required: true })}
              disabled={isLoading}
              className="w-2/12 h-[40px] border border-gray px-3"
            />
          </div>
          <div className="mx-[20px] w-[calc(100%-40px)] border-t border-blue-500"></div>
          <div className="w-full my-[30px] flex flex-col px-[20px]">
            <textarea
              id="post_text"
              cols={30}
              rows={15}
              className="border border-gray p-6 box-border"
              disabled={isLoading}
              {...register("post_text", { required: true })}
            >
              글 내용을 입력해주세요.
            </textarea>
          </div>
          <div className="w-full flex justify-start items-center h-[70px] border-t-2 border-t-gray border-b-2 border-b-gray-500">
            <div className="w-[200px] px-[20px] flex justify-center items-center bg-gray-200 h-[66px] text-black">
              첨부파일
            </div>
            <div className="flex justify-start items-center pl-[20px]">
              <p className="cursor-pointer">
                <input type="file" />
              </p>
              <button
                className="cursor-pointer flex justify-center items-center gap-[20px] ml-[40px] bg-gray-500 text-white w-[120px] h-[35px]"
                disabled={isLoading}
              >
                업로드 <GrUpload className="grIcon" />
              </button>
            </div>
          </div>
          <div className="w-full pt-3 flex justify-between">
            <button
              className="w-24 h-8 border border-gray rounded-sm bg-gray-200 text-[14px] hover:bg-gray-500 hover:text-white hover:border-gray-500"
              onClick={() => router.back()}
            >
              돌아가기
            </button>
            <Link passHref href={"../raw"}>
              <button
                className="w-24 h-8 border border-gray-500 rounded-sm bg-gray-500 text-[14px] text-white hover:bg-blue-500 hover:border-blue-500"
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

export default RawPostClient;
