"use client";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const [findType, setFindType] = useState<string>("id");
  const router = useRouter();
  const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const handleSubmit = () => {
      localStorage.setItem('userId', id);
    router.push('/member/findPassword/')
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
          className={`w-full text-center h-full leading-[60px] text-black ${
            findType == "id" ? "bg-gray" : "bg-lightgray"
          }`}
          onClick={() => setFindType("id")}
        >
          아이디 찾기
        </div>
        <div
          className={`w-full text-center h-full leading-[60px] text-black ${
            findType == "email" ? "bg-gray" : "bg-lightgray"
          }`}
          onClick={() => setFindType("email")}
        >
          비밀번호 찾기
        </div>
      </div>
      <div className="border border-t-0 border-gray px-[30px] py-[30px] w-full md:w-[450px]">
        <div className="text-subtitle text-black">
          {findType == "id" ? <p>아이디 찾기</p> : <p>비밀번호 찾기</p>}
        </div>
        {findType != "id" && (
          <div>
            <div className="mt-4">
              <input
                onChange={(e) => setId(e.target.value)}
                id="id"
                name="id"
                type="text"
                required
                autoFocus={true}
                placeholder="아이디"
                className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
              />
            </div>
          </div>
        )}
        <div>
          <div className="mt-4">
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              type="name"
              required
              autoFocus={true}
              placeholder="이름"
              className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="mt-1">
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
            />
          </div>
        </div>
        <div className="mt-6 flex gap-[10px]">
            <button className="w-full bg-primary text-white cursor-pointer py-[10px]"
              onClick={handleSubmit}
            >
              다음
            </button>
          <Link passHref href="/member/signin" className="w-full">
            <button className="w-full bg-lightgray border border-gray text-black cursor-pointer py-[10px]">
              취소
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
