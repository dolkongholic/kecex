"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import Pages from "@/components/pages";

// Image


const location = "회원 관리";
interface UserManagementProps {
  currentUser: any;
  userList?:any
}
const UserManagementClient: React.FC<UserManagementProps> = ({ currentUser, userList}) =>{
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const params = useSearchParams();
  const page = params?.get("page");
  const totalItems = userList.length;
  const totalPages = Math.ceil(totalItems / 10); // list의 길이를 10으로 나눈 후 올림하여 페이지 수 계산
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  const handleLevelChange = (value:string, userId:string) => {
    setSelectedLevel(value);
    showButton(userId);
  };

  const handleBtnClick = (userId: string) => {
    axios
    .patch("/api/user/levelChange", {id: userId, level:selectedLevel})
    .then(() => {
      toast.success("회원종류를 변경하였습니다");
      router.refresh();
    })
    .catch(() => {
      toast.error("오류가 발생했습니다.");
    })
    .finally(() => {
      reset();
    });
    console.log(`User ${userId}의 종류를 ${selectedLevel}로 변경함`);
    hideButton(userId);
  };

  const showButton = (userId: string) => {
    const button = document.getElementById(`btn-${userId}`);
    if (button) {
      button.classList.remove('hidden');
    }
  };

  const hideButton = (userId: string) => {
    const button = document.getElementById(`btn-${userId}`);
    if (button) {
      button.classList.add('hidden');
    }
  };

  // totalPages만큼 페이지를 생성
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const router = useRouter();
  if (!currentUser?.staff) {
    router.push("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
  });

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
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-center item-center">
          <div className="text-black w-full flex flex-col justify-center item-center">
            <ContentSubTitle title="가입 회원 현황" />
            <ul className="w-full mx-auto border-t-2 border-gray-700 mt-10 hidden md:block">
              <div className={`flex justify-between items-center w-full h-[80px] border-b leading-[80px] text-neutral-800 text-base font-semibold`}>
                  <div className="flex items-center">
                    <div className="w-[120px] ml-3 line-clamp-1">아이디</div>
                    <div className="w-[150px] ml-3 line-clamp-1">이름</div>
                    <div className="w-[180px] ml-3 line-clamp-1">연락처</div>
                    <div className="w-[350px] ml-3 line-clamp-1">이메일</div>
                    <div  id="userLevel" className="w-[120px] h-[40px] px-3 leading-[40px]">회원 종류</div>
                  </div>
                </div>
            {userList.map((item: any) => (
                <div
                  key={item.id}
                  className={`flex justify-between items-center w-full h-[80px] border-b leading-[80px] text-neutral-800 text-base`}
                >
                  <div className="flex items-center">
                    <div className="w-[120px] ml-3 line-clamp-1">{item.name}</div>
                    <div className="w-[150px] ml-3 line-clamp-1">{item.koname}</div>
                    <div className="w-[180px] ml-3 line-clamp-1">{item.tel}</div>
                    <div className="w-[350px] ml-3 line-clamp-1">{item.email}</div>
                    <select
                    id="userLevel"
                    className="w-[120px] h-[40px] border border-[#ccc] px-3"
                    defaultValue={item.level}
                    onChange={(event) => handleLevelChange(event.target.value, item.id)}
                    >
                      <option value="일반회원">일반회원</option>
                      <option value="정회원">정회원</option>
                      <option value="기업회원">기업회원</option>
                      <option value="명예회원">명예회원</option>
                      <option value="운영위원">운영위원</option>
                      <option value="임원">임원</option>
                    </select>
                    <button
                    id={`btn-${item.id}`}
                    className="text-[14px] bg-lightgray h-[35px] my-[35px] leading-[35px] w-[60px] hover:text-secondary hidden ml-4"
                    onClick={() => handleBtnClick(item.id)} //onChange 이벤트가 일어나면 해당 버튼이 나타나는 식으로 구현하는 건 어떨까?
                    >
                      변경
                    </button>
                  </div>
                </div>
            ))}
            </ul>
            <div className="w-full mx-auto flex md:hidden justify-center items-center h-32">
              큰 화면으로 확인해주세요.
            </div>
          </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default UserManagementClient;
