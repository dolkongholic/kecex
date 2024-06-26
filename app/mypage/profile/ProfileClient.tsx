"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
// Image


const location = "회원정보 수정";

interface ProfileProps {
  currentUser?: any;
}
const ProfileClient: React.FC<ProfileProps> = ({ currentUser }) => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {},
  });
  if (!currentUser) {
    router.push("/member/signin/");
    return null;
  }
  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
        // { title: "세미나/컨설팅 신청 현황", url: "/mypage/overall/all03" },
        // { title: "경력관리 현황", url: "/mypage/overall/all04" },
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


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    data.id = currentUser.id;
    axios
      .post("/api/register/modifi/", data)
      .then(() => {
        toast.success("수정 되었습니다.");
        router.refresh();
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
                <SubNavHeader title={"마이페이지"} />
                <div className="flex flex-col w-full">
                  <SubNav
                    MainList={MainList}
                    pageMenu={pageMenu}
                    setPageMenu={setPageMenu}
                    location={location}
                    currentUser={currentUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <div className="text-black w-full flex flex-col justify-between item-center">
            <div className="h-[40px]">* 표시는 필수 입력 사항입니다.</div>
            <div className="h-[60px] w-full flex border-t-2 border-t-secondary border-b border-b-gray-200">
              <div className="bg-gray-100 w-2/6 md:w-[140px] pl-[20px] flex justify-start items-center ">
                * 성명
              </div>
              <div className="flex justify-start items-center pl-[20px] w-4/6">
                <input
                  id="koname"
                  type="text"
                  placeholder="성명"
                  className="border border-gray-200 h-[40px] outline-none focus:border-secondary px-[20px] text-base w-full"
                  defaultValue={currentUser.koname}
                  {...register("koname", { required: true })}
                />
              </div>
            </div>

            <div className="h-[60px] w-full flex border-b border-b-gray-200">
              <div className="bg-gray-100 w-2/6 md:w-[140px] pl-[20px] flex justify-start items-center ">
                * 아이디
              </div>
              <div className="flex justify-start items-center pl-[40px] w-4/6 ">
                {currentUser.name}
              </div>
            </div>

            <div className="h-[120px] w-full flex border-b border-b-gray-200">
              <div className="bg-gray-100 w-2/6 md:w-[140px] pl-[20px] flex justify-start items-center ">
                비밀번호
              </div>
              <div className="flex flex-col justify-center items-start pl-[20px] w-4/6">
                <input
                  id="password"
                  type="password"
                  placeholder="새비밀번호"
                  {...register("password", { required: true })}
                  className="border border-gray-200 h-[40px] outline-none focus:border-secondary px-[20px] text-base mb-2 w-full"
                />
                <input
                  type="password"
                  placeholder="새비밀번호 확인"
                  className="border border-gray-200 h-[40px] outline-none focus:border-secondary px-[20px] text-base w-full"
                />
                {/* <p className="mt-[14px] text-[12px]">
                  * 숫자+영문자+특수문자 조합으로 4~13자 입력해주세요.
                </p> */}
              </div>
            </div>

            <div className="h-[60px] w-full flex border-b border-b-gray-200">
              <div className="bg-gray-100 w-2/6 md:w-[140px] pl-[20px] flex justify-start items-center ">
                * 휴대폰
              </div>
              <div className="flex justify-start items-center pl-[20px] w-4/6 ">
                <input
                  id="tel"
                  type="text"
                  placeholder="010 0000 0000"
                  className="border border-gray-200 h-[40px] outline-none focus:border-secondary px-[20px] text-base w-full"
                  defaultValue={currentUser.tel}
                  {...register("tel", { required: true })}
                />
              </div>
            </div>

            <div className="h-[60px] w-full flex border-b border-b-gray-200">
              <div className="bg-gray-100 w-2/6 md:w-[140px] pl-[20px] flex justify-start items-center ">
                * 이메일주소
              </div>
              <div className="flex justify-start items-center pl-[20px] w-4/6 ">
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  className="border border-gray-200 h-[40px] outline-none focus:border-secondary px-[20px] text-base w-full"
                  defaultValue={currentUser.email}
                  {...register("email", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between md:justify-center items-center w-full mt-[20px] md:space-x-[20px]">
            <div
              className="cursor-pointer w-[170px] h-[50px] flex justify-center items-center bg-secondary text-white"
              onClick={handleSubmit(onSubmit)}
            >
              수정완료
            </div>
            <a href="/mypage/out">
              <div className="cursor-pointer w-[170px] h-[50px] flex justify-center items-center bg-neutral-700 text-white">
                회원탈퇴
              </div>
            </a>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ProfileClient;
