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
import { error } from "console";

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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: notice ? notice : {} // notice가 있으면 notice를 defaultValues로 사용, 없으면 빈 객체 사용
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [existingFiles, setExistingFiles] = useState<string[]>([]);

  useEffect(() => {
    if (currentNotice?.file) {
      try {
        const parsed = JSON.parse(currentNotice.file);
        setExistingFiles(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error("첨부파일 파싱 오류:", error);
        if (typeof currentNotice.file === "string") {
          setExistingFiles(currentNotice.file.split(","));
        }
      }
    }
  }, [currentNotice]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).slice(0, 10);
      setSelectedFiles(filesArray);
    }
  };

  const handleRemoveExistingFile = (index: number) => {
    setExistingFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    
    const formData = new FormData();
    formData.append("id", id.id);
    formData.append("text", data.title);
    formData.append("post_text", data.post_text);
    formData.append("date", data.date);
    
    // 기존 파일 목록 추가
    formData.append("existingFiles", JSON.stringify(existingFiles));
    
    // 새로 선택된 파일들 추가
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    
    axios
      .patch("/api/notice/edit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setNotice(response.data);
          toast.success("수정되었습니다.");
          router.push("/notice/notice");
        } else {
          toast.error("서버에서 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        toast.error("클라이언트에서 오류가 발생했습니다.");
        console.error(error)
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
            Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
          </div>
          <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
            알림센터 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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

      <section className="py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
        <ContentTitle title="공지사항 수정" center={true} />
        <div className="w-full mt-[20px] leading-[10px]">&nbsp;</div>

        <div className="w-full px-2 md:px-[20px] flex flex-col md:flex-row justify-between items-end md:items-center md:h-[70px]">
          <div className="flex items-center w-full md:w-9/12">
            <input
              type="text"
              defaultValue={currentNotice?.title}
              className="w-full h-[40px] p-5 border border-gray"
              disabled={isLoading}
              {...register("title", { required: true })}
              placeholder="제목을 입력해주세요."
            />
          </div>
          <input
            type="date"
            defaultValue={currentDate}
            disabled={isLoading}
            className="w-1/2 md:w-2/12 h-[40px] border border-gray px-3 my-2 md:my-0"
            {...register("date", { required: true, 
              onChange: (event: any) => {
              setCurrentDate(event.target.value);
            }, })}
          />
        </div>
        <div className="md:mx-[20px] w-full md:w-[calc(100%-40px)] border-t border-secondary"></div>
        <div className="w-full my-[30px] flex flex-col px-2 md:px-[20px]">
          <textarea
            id="post_text"
            cols={30}
            rows={15}
            className="border border-gray p-6 box-border"
            disabled={isLoading}
            defaultValue={currentNotice?.content}
            placeholder="내용을 입력해주세요."
            {...register("post_text", { required: true })}
          >
          </textarea>
        </div>
        <div className="w-full flex justify-start items-center min-h-[70px] border-t-2 border-t-gray border-b-2 border-b-darkgray text-[15px] md:text-base">
          <div className="w-1/5 md:w-[200px] px-[20px] flex justify-center items-center bg-lightgray h-full py-4 text-black">
            첨부<br className="md:hidden"/>
            파일
          </div>
          <div className="w-4/5 flex flex-col justify-start pl-3 md:pl-[20px] py-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block w-full">
                    <div className="w-full h-[40px] border border-gray-300 rounded-md px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                      <span className="text-gray-500">
                        {selectedFiles.length > 0 
                          ? `${selectedFiles.length}개의 파일이 선택되었습니다` 
                          : "파일을 선택하세요 (최대 10개)"}
                      </span>
                      <span className="text-sm text-gray-500">파일 선택</span>
                    </div>
                    <input 
                      type="file" 
                      multiple
                      onChange={handleFileChange} 
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">새로 선택된 파일</span>
                    <span className="text-sm text-gray-500">({selectedFiles.length}개)</span>
                  </div>
                  <div className="grid gap-2">
                    {selectedFiles.map((file, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-2 bg-blue-50 rounded-md"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{file.name}</span>
                        </div>
                        <button
                          onClick={() => setSelectedFiles(prev => prev.filter((_, i) => i !== idx))}
                          className="text-sm px-2 py-1 text-red-500 hover:text-red-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {existingFiles.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">기존 첨부파일</span>
                    <span className="text-sm text-gray-500">({existingFiles.length}개)</span>
                  </div>
                  <div className="grid gap-2">
                    {existingFiles.map((fileUrl, idx) => {
                      const fileName = fileUrl.split("/").pop() || "";
                      const originalName = fileName.replace(/^\d+_/, "");
                      return (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">{originalName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <a
                              href={fileUrl}
                              download={originalName}
                              className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            >
                              다운로드
                            </a>
                            <button
                              onClick={() => handleRemoveExistingFile(idx)}
                              className="text-sm px-2 py-1 text-red-500 hover:text-red-600"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full pt-3 flex justify-between px-2 md:px-[20px]">
          <button
            className="w-24 h-8 border border-gray-500 rounded-sm bg-lightgray text-[14px] hover:bg-neutral-800 hover:text-white hover:border-neutral-800"
            onClick={() => router.back()}
          >
            돌아가기
          </button>
          <button
            className="w-24 h-8 border border-primary rounded-sm bg-white text-[14px] text-primary hover:bg-primary hover:border-primary hover:text-white"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            수정하기
          </button>
        </div>
      </section>
    </main>
  </section>
  );
};

export default NoticeEditClient;
