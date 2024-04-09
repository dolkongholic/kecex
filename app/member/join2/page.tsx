"use client";
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import Link from "next/link";
import Image from "next/image";


function Join2() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.password != data.password_1) {
      alert("비밀번호가 틀립니다.");
      return;
    }

    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!emailRegex.test(data.email)){
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }

    const phoneRegex = /^\d{11}$/;

    if (!phoneRegex.test(data.tel)){
      alert("올바른 연락처 형식이 아닙니다.");
      return;
    }

    setIsLoading(true);

    try {
      const request = await axios.post("/api/register", {
        data,
      });
      if (request) {
        toast.success("입력 성공");
        setIsLoading(false);
        router.push("/");
      }
    } catch (error: any) {
      setIsLoading(false);
      if (error.response.status == 409) {
        toast.error(`이미 존재하는 아이디 혹은 연락처 입니다.`);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 w-full md:w-[1200px] p-[20px] md:p-24 m-auto text-center text-black">
      {/*약관동의 섹션 끝*/}
      <section className="w-full">
        <div className="w-full flex justify-center">
          <Link passHref href={"/"}>
            <Image
              src="/img/logo/logo_big_icon__1.png"
              alt="Logo"
              width={250}
              height={50}
            />
          </Link>
        </div>
        <h3 className="text-[24px] font-semibold mt-12 mb-8">회원정보 입력</h3>
        <ul className="w-full flex px-5 md:px-52 h-12 bg-lightgray items-center justify-between mt-1 text-neutral-400 text-[14px] md:text-base">
          <li className="text-secondary">약관동의</li>
          <li className="text-secondary">
            <IoIosArrowForward />
          </li>
          <li className="text-secondary">회원정보 입력</li>
          <li className="text-secondary">
            <IoIosArrowForward />
          </li>
          <li>가입완료</li>
        </ul>
        <div className="border border-gray px-[30px] py-[50px] w-full">
          <div>
            <div className="mt-1">
              <Input
                id="username"
                label="아이디"
                type="text"
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
                label="비밀번호"
                type="password"
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
                id="password_1"
                label="비밀번호 확인"
                type="password"
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
                id="email"
                label="Email"
                type="email"
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
                id="koname"
                label="이름"
                type="text"
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
                id="tel"
                label="연락처"
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <Button
              disabled={isLoading}
              label="가입완료"
              onClick={handleSubmit(onSubmit)}
            />
            <button className="w-full font-semibold h-[52px] rounded-lg bg-lightgray border border-[#ccc] text-secondary hover:bg-[#3A3A3A] hover:border-[#3A3A3A] hover:text-white mt-3"
              onClick={() => router.back()}
              >
                돌아가기
            </button>
          </div>
        </div>
      </section>
      {/*회원정보 섹션 */}
    </main>
  );
}

export default Join2;
