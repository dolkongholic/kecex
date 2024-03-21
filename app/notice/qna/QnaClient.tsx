"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Image from "next/image";
import PicCeo from "@/public/img/page_top/ceo_top.jpg"

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

const location = "문의사항";

interface QnAProps {
  currentUser?: any;
}

const QnaClient: React.FC<QnAProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageMenu, setPageMenu] = useState<any>("문의사항");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/insert/qnaInsert", data)
      .then(() => {
        toast.success("문의를 남겼습니다.");
        router.refresh();
        setIsLoading(true);
      })
      .catch(() => {
        toast.error("오류가 발생했습니다.");
      })
      .finally(() => {
        // setIsLoading(false);
        reset();
      });
  };

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicCeo}
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
        <div className="h-[40px] w-full bg-gray-200 flex justify-center text-[13px]">
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

        <section className="py-[20px] md:pl-[40px] px-[20px] md:px-0 w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px] md:px-[120px]">
            <ContentTitle title={location} center={true} />
            <div className="text-subtitle text-black text-center w-full mt-[40px]">
              1:1 문의
            </div>
            <div className="text-base text-black text-center w-full mt-[15px]">
              궁금한 사항을 문의주시면 <br className="md:hidden"/>
              성실하게 답변 드리겠습니다.
            </div>

            <div className="w-full border-t border-t-secondary mt-[40px] flex">
              <div className="w-[20%] h-[60px] md:pl-[40px] bg-lightgray flex justify-center md:justify-start items-center text-black">
                이름
              </div>
              <div className="w-[80%] h-[60px] px-3 md:px-0 md:pl-[40px] flex items-center">
                <Input
                  id="name"
                  label="이름을 입력하세요."
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  small
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[60px] md:pl-[40px] bg-lightgray flex justify-center md:justify-start items-center text-black">
                연락처
              </div>
              <div className="w-[80%] h-[60px] px-3 md:px-0 md:pl-[40px] flex items-center">
                <Input
                  id="tel"
                  label="연락처를 입력하세요."
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  small
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[60px] md:pl-[40px] bg-lightgray flex justify-center md:justify-start items-center text-black">
                이메일
              </div>
              <div className="w-[80%] h-[60px] px-3 md:px-0 md:pl-[40px] flex items-center">
                <Input
                  id="email"
                  label="이메일을 입력하세요."
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  small
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray flex">
              <div className="w-[20%] h-[60px] md:pl-[40px] bg-lightgray flex justify-center md:justify-start items-center text-black">
                제목
              </div>
              <div className="w-[80%] h-[60px] px-3 md:px-0 md:pl-[40px] flex items-center">
                <Input
                  id="title"
                  label="제목을 입력하세요."
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  small
                />
              </div>
            </div>
            <div className="w-full border-t border-t-gray border-b border-b-gray flex">
              <div className="w-[20%] h-[180px] md:pl-[40px] bg-lightgray flex justify-center md:justify-start items-center text-black">
                문의내용
              </div>
              <div className="w-[80%] h-[180px] px-3 md:px-0 md:pl-[40px] flex items-center">
                <textarea
                  id="content"
                  cols={80}
                  rows={5}
                  className={`border h-[180px] border-neutral-300 p-6 box-border rounded-md ${
                    isLoading && "cursor-not-allowed"
                  }`}
                  {...register("content", { required: true })}
                  placeholder="글 내용을 입력해주세요."
                  disabled={isLoading}
                ></textarea>
              </div>
            </div>
            {/* <div className="w-full border-t border-t-gray border-b border-b-gray flex">
              <div className="w-[20%] h-[60px] pl-[40px] bg-gray-200 flex items-center text-black">
                파일첨부
              </div>
              <div className="w-[80%] h-[60px] pl-[40px] flex items-center">
                <input id="file" type="file" className="hidden" />
                <label
                  htmlFor="file"
                  className="border border-gray py-[5px] w-1/5 text-center text-black"
                >
                  파일첨부 +
                </label>
              </div>
            </div> */}
            {currentUser && (
              <div className="w-full flex justify-end items-center mt-[20px]">
                {!isLoading ? (
                  <div
                    className="w-[150px] h-[40px] text-white bg-secondary flex justify-center items-center cursor-pointer"
                    onClick={handleSubmit(onSubmit)}
                  >
                    문의하기
                  </div>
                ) : (
                  <div className="w-[150px] h-[40px] text-neutral-800 border border-red-500 flex justify-center items-center cursor-not-allowed">
                    문의 완료
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default QnaClient;
