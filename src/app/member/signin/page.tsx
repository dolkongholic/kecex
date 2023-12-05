"use client";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    // console.log(emailRef.current)
    // console.log(passwordRef.current)

    const result = await signIn("credentials", {
      email: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <Link passHref href={"/"}>
        <Image
          src="/img/logo/logo_big_icon__1.png"
          alt="Logo"
          width={250}
          height={50}
        />
      </Link>
      <div className="border border-gray px-[30px] py-[50px] w-[400px]">
        <div>
          <div className="mt-1">
            <input
              ref={emailRef}
              onChange={(e: any) => {
                emailRef.current = e.target.value;
              }}
              id="email"
              name="email"
              type="email"
              required
              autoFocus={true}
              placeholder="아이디"
              className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="mt-1">
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              onChange={(e: any) => (passwordRef.current = e.target.value)}
              placeholder="비밀번호"
              className="border border-gray py-[10px] px-[20px] w-full focus:border-secondary outline-none"
            />
          </div>
        </div>
        <div className="flex w-full justify-end items-center gap-[10px] leading-[40px] text-[14px]">
          <input id="remember_id" type="checkbox" className="border-gray" />
          <label htmlFor="remember_id">아이디 저장</label>
        </div>
        <div className="mt-6 flex gap-[10px]">
          <button
            onClick={handleSubmit}
            className="w-full bg-secondary text-white cursor-pointer py-[10px]"
          >
            로그인
          </button>
          <Link passHref href="./join" className="w-full">
            <button className="w-full bg-gray text-black cursor-pointer py-[10px]">
              회원가입
            </button>
          </Link>
        </div>
        <Link passHref href={"./find/"}>
          <div className="flex justify-center items-center mt-[10px] text-[12px] text-darkgray leading-[20px] cursor-pointer">
            <div>아이디/비밀번호 찾기</div>
            <div>
              <RiArrowRightSLine className="text-[20px] pt-[3px] text-superdarkgray " />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Login;
