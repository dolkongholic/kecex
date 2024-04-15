"use client";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

function FindId() {
  const userId = localStorage.getItem('userId');

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
          className={`w-full text-center h-full leading-[60px] text-black text-[20px]`}
        >
          아이디 찾기 결과
        </div>
      </div>
      <div className="border border-t-0 border-gray px-[30px] py-[30px] w-full md:w-[450px]">
        <div className="text-subtitle text-black">
        </div>
          <p className="py-6 text-[18px]">
            회원님의 아이디는 {userId} 입니다.
          </p>
        <div className="mt-6 flex gap-[10px]">
          <Link passHref href="/member/signin" className="w-full">
            <button className="w-full bg-primary text-white cursor-pointer py-[10px]">
              로그인
            </button>
          </Link>
          <Link passHref href="/member/find" className="w-full">
            <button className="w-full bg-lightgray border border-gray text-black cursor-pointer py-[10px]">
              비밀번호 찾기
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default FindId;
