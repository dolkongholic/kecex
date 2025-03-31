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
      const filesArray = Array.from(event.target.files);
      
      // 파일 크기 및 타입 검증
      const validFiles = filesArray.filter(file => {
        const isValidType = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ].includes(file.type);
        
        const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
        
        if (!isValidType) {
          toast.error(`${file.name}: 지원하지 않는 파일 형식입니다.`);
          return false;
        }
        if (!isValidSize) {
          toast.error(`${file.name}: 파일 크기가 너무 큽니다 (최대 10MB)`);
          return false;
        }
        
        return true;
      });

      setSelectedFiles(prev => [...prev, ...validFiles].slice(0, 10));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
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
      .then((response) => {
        if (response.status === 200) {
          if (response.data.warning) {
            toast.error(response.data.warning);
            if (response.data.errors) {
              response.data.errors.forEach((error: string) => {
                toast.error(error);
              });
            }
          } else {
            toast.success("입력 되었습니다.");
          }
          router.push("/notice/notice");
        } else {
          toast.error("서버에서 오류가 발생했습니다.");
        }
      })
      .catch((error) => {
        console.error("파일 업로드 오류:", error);
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
          if (error.response.data.errors) {
            error.response.data.errors.forEach((err: string) => {
              toast.error(err);
            });
          }
        } else {
          toast.error("파일 업로드 중 오류가 발생했습니다.");
        }
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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block w-full">
                    <div className="w-full h-[40px] border border-gray-300 rounded-md px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                      <span className="text-gray-500">
                        {selectedFiles.length === 0 ? "파일을 선택하세요 (최대 10개)" : `${selectedFiles.length}개의 파일이 선택됨`}
                      </span>
                      <span className="text-sm text-primary hover:text-primary-dark">파일 선택</span>
                    </div>
                    <input 
                      type="file" 
                      multiple
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx"
                      onChange={handleFileChange} 
                      className="hidden"
                      disabled={selectedFiles.length >= 10}
                    />
                  </label>
                </div>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">선택된 파일 목록</span>
                    <span className="text-sm text-gray-500">({selectedFiles.length}개)</span>
                  </div>
                  <div className="grid gap-2">
                    {selectedFiles.map((file, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-200"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span className="text-sm text-gray-600 truncate max-w-[calc(100%-2rem)]">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            ({(file.size / 1024 / 1024).toFixed(2)}MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-sm px-2 py-1 text-red-500 hover:text-red-600 flex-shrink-0 ml-2"
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
            </div>
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
