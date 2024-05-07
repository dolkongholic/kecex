"use client";
import React, { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";

function FindPassword() {
  const [findType, setFindType] = useState<string>("id");
  const [isLoading, setIsLoading] = useState(false);
  // const userId = localStorage.getItem('userId');
  const [generatedPassword, setGeneratedPassword] = useState<string>();
  
  const generatedRandomPassword = () => {
    const tempPassword = Math.random().toString(36).slice(2,8);
    setGeneratedPassword(tempPassword); 

    sendPassword({ userId: userId, password: tempPassword });
  };

  useEffect(() => {
    generatedRandomPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const userId = localStorage.getItem('userId');



  const sendPassword = (data:any) => {
    // setIsLoading(true);
    console.log("유저아이디:", userId);
    axios
      .post("/api/register/tempkey/", data)
      .then(() => {
        toast.success("비밀번호가 업데이트되었습니다.");
      })
      .catch((error) => {
        toast.error(`임시 비밀번호 발급 중 오류가 발생했습니다: ${error.message}`);
      })
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center p-[20px] md:p-24">
      <Link passHref href={"/"}>
        <Image
          src="/img/logo/logo_big_icon__1.png"
          alt="Logo"
          width={250}
          height={50}
        />
      </Link>
      <div
        className="cursor-pointer flex items-center w-full md:w-[450px] mt-[40px] h-[60px] text-base border border-gray border-b-0 border-t-2
      "
      >
        <div
          className={`w-full text-center h-full leading-[80px] text-black text-[20px]`}
        >
          비밀번호 찾기 결과
        </div>
      </div>
      <div className="border border-t-0 border-gray px-[30px] py-[30px] w-full md:w-[450px]">
          <p className="text-[15px]">
            다음 임시 비밀번호로 로그인한 후 반드시 
            <span className="font-bold"> 마이페이지 - 회원정보 수정</span>에서 비밀번호를 변경해주세요.
          </p>

          <p className="py-6 text-[18px]">
            임시 비밀번호 :
            <p>{generatedPassword}</p>
          </p>
        <div className="mt-6 flex gap-[10px]">
          <Link passHref href="/member/signin" className="w-full">
            <button className="w-full bg-primary text-white cursor-pointer py-[10px]"
            >
              로그인
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default FindPassword;
