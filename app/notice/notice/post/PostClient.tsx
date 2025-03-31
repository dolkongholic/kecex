"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import PicNotice_04 from "@/public/img/page_top/notice_04.jpg";

const MainList = [
  { title: "공지사항", url: "/notice/notice?page=1", sub: null },
  { title: "FAQ", url: "/notice/faq", sub: null },
  { title: "문의사항", url: "/notice/qna", sub: null },
  { title: "인재정보", url: "/notice/worker", sub: null },
];

const location = "공지사항";

const PostClient = () => {
  const [pageMenu, setPageMenu] = useState("공지사항");
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  });
  const router = useRouter();

  const { register, handleSubmit } = useForm<FieldValues>({ defaultValues: {} });
  const [isLoading, setIsLoading] = useState(false);
  // 다중 파일 선택 상태 (최대 10개)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).slice(0, 10);
      setSelectedFiles(filesArray);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("text", data.text);
    formData.append("date", data.date);
    formData.append("post_text", data.post_text);
    // 모든 파일 첨부
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    axios
      .post("/api/insert/notice/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
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
      <figure className="w-full h-[200px] relative">
        <Image
          src={PicNotice_04}
          layout="fill"
          objectFit="cover"
          alt="공지사항 배너"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center text-white font-medium text-[36px] leading-[200px]">
          {location}
        </div>
      </figure>
      <div id="headerNav" className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
        <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
          <div className="leading-[50px] flex space-x-[5px] items-center">
            Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
          </div>
          <div className="leading-[50px] flex space-x-[5px] items-center">
            알림센터 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
          </div>
          <div className="leading-[50px] flex space-x-[5px] items-center underline">
            {location}
          </div>
        </div>
      </div>
      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col items-center">
          <div className="bg-white flex justify-center">
            <div className="w-full flex">
              <div className="w-[240px] flex flex-col">
                <SubNavHeader title={"알림센터"} />
                <div className="flex flex-col w-full">
                  <SubNav MainList={MainList} pageMenu={pageMenu} setPageMenu={setPageMenu} location={location} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col items-start">
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
              {...register("date", { required: true, onChange: (event: any) => setCurrentDate(event.target.value) })}
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
          {/* 파일 선택 입력 (다중 선택, 최대 10개) */}
          <div className="w-full flex flex-col md:px-[20px] mb-6">
            <label className="block mb-2 font-semibold">첨부파일 (최대 10개)</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              disabled={isLoading}
              className="border border-gray p-2"
            />
          </div>
          <div className="flex gap-4 m-auto">
            <Link passHref href={"/notice/notice?page=1"}>
              <button className="w-20 md:w-32 h-10 bg-gray-500 text-white text-[14px] mt-9 m-auto">
                목록
              </button>
            </Link>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
              className="w-20 md:w-32 h-10 bg-primary text-white text-[14px] mt-9 m-auto"
            >
              글쓰기
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PostClient;
