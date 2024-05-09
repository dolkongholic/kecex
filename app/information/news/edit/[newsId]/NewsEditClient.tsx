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
import ImageUpload from "@/components/inputs/ImageUpload";
import Image from "next/image";
import PicInfo_02 from "@/public/img/page_top/information_02.jpg"

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

const NewsEditClient: React.FC<NewsClientProps> = ({
  currentNews,
  currentUser,
}) => {
  const [pageMenu, setPageMenu] = useState<any>("카드뉴스");
  const [currentDate, setCurrentDate] = useState<string>(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  const router = useRouter();
  const id = {
    id: currentNews.id
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .patch("/api/news/edit", {
        id: id.id,
        text: data.title,
        post_text: data.post_text,
        date: data.date
      })
      .then((response) => {
        if (response.status === 200) {
          // PATCH 요청 성공 시 응답 데이터를 사용하여 currentNotice 상태를 업데이트함
          setNews(response.data); // response.data에는 업데이트된 공지사항 데이터가 포함될 것으로 가정함
          toast.success("입력 되었습니다.");
          router.push("/information/news");
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
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              정보공개 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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

        <section className="py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title="카드뉴스 수정" center={true} />
          <div className="w-full mt-[20px] leading-[50px]">&nbsp;</div>

          <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center md:h-[70px]">
            <div className="flex items-center w-full md:w-9/12 px-2 md:px-0">
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                className="w-full h-[40px] p-5 border border-gray-100"
                disabled={isLoading}
                defaultValue={currentNews?.title}
                {...register("text", { required: true })}
              />
            </div>
            <input
              type="date"
              defaultValue={currentDate}
              disabled={isLoading}
              {...register("date", { 
                required: true, 
                onChange: (event: any) => {
                setCurrentDate(event.target.value);
              }, })}
              className="w-1/2 md:w-2/12 h-[40px] border border-gray-100 px-3 my-2 md:my-0 mr-2 md:mr-0"
            />
          </div>
          <div className="w-full border-t border-secondary"></div>
          <div className="w-full">
            <Image
                src={currentNews.img}
                width={300}
                height={100}
                alt="img"
                className="mt-[10px] mx-auto"
              />
          </div>
          <div className="w-full my-[10px] flex flex-col">
            <textarea
              id="post_text"
              cols={30}
              rows={15}
              className="border border-gray-100 p-6 box-border"
              disabled={isLoading}
              defaultValue={currentNews?.content}
              {...register("post_text", { required: true })}
              placeholder="글 내용을 입력해주세요."
            >          
            </textarea>
          </div>
          <div className="w-full flex justify-start items-center py-10 border-t-2 border-t-gray-100 border-b-2 border-b-gray-500">
            <div className="w-full flex justify-center items-center  text-black">
              <ImageUpload
                onChange={(value) => setCustomValue("imageSrc", value)}
                value={imageSrc}
                wide
              />
            </div>
          </div>
          <div className="w-full pt-3 flex justify-between">
            <button
              className="w-24 h-8 border border-gray-500 rounded-sm bg-lightgray text-[14px] hover:bg-neutral-800 hover:text-white hover:border-neutral-80"
              onClick={() => router.back()}
            >
              돌아가기
            </button>
            <Link passHref href={"../news"}>
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

export default NewsEditClient;

