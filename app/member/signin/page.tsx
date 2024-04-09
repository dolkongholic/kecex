"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Input from "@/components/inputs/Input";

import Link from "next/link";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const { data: session } = useSession();

  useEffect(() => {
    // 사용자가 로그인되어 있으면 메인 페이지로 이동
    console.log(session);
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback: any) => {
      setIsLoading(false);

      if (callback?.ok) {
        // toast.success("로그인 성공");
        router.refresh();
        // router.push("/");
      }

      if (callback?.error) {
        toast.error(callback?.error);
      }
    });
  };

  const onCheckEnter = (event:any) => {
    if(event.key === 'Enter') {
      // alert('Enter키를 눌렀습니다.');
      handleSubmit(onSubmit)();
    };
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-[20px] md:p-24"
      onKeyDown={onCheckEnter}
    >
      <Link passHref href={"/"}>
        <Image
          src="/img/logo/logo_big_icon__1.png"
          alt="Logo"
          width={250}
          height={50}
        />
      </Link>
      <div className="border border-gray px-[30px] py-[50px] w-full md:w-[550px]">
        <div>
          <div className="mt-1">
            <Input
              id="name"
              label="이름"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="mt-1">
            <Input
              id="password"
              type="password"
              label="비밀번호"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
        </div>
        {/* <div className="flex w-full justify-end items-center gap-[10px] leading-[40px] text-[14px]">
          <input id="remember_id" type="checkbox" className="border-gray" />
          <label htmlFor="remember_id">아이디 저장</label>
        </div> */}
        <div className="mt-6 flex gap-[10px]">
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-primary text-white cursor-pointer py-[10px]"
          >
            로그인
          </button>
          <Link passHref href="/member/join" className="w-full">
            <button className="w-full bg-lightgray border border-gray text-black cursor-pointer py-[10px]">
              회원가입
            </button>
          </Link>
        </div>
        <Link passHref href={"/member/find/"}>
          <div className="flex justify-center items-center mt-[10px] text-[12px] text-neutral-800 leading-[20px] cursor-pointer">
            <div>아이디/비밀번호 찾기</div>
            <div>
              <RiArrowRightSLine className="text-[20px] pt-[3px] text-neutral-700 " />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Login;
