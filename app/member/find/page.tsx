"use client";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function Find() {
  const [findType, setFindType] = useState<string>("id");
  const router = useRouter();
  const [name, setName] = useState<string>('')
  const [koname, setKoname] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async () => {

    if (!koname || !email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }else{

    checkUser({ koname: koname, email: email})
    }
    
  };
  const handleSubmit2 = async () => {

    if (!name || !koname || !email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }else{

    checkUser2({name: name, koname: koname, email: email})
    localStorage.setItem('userId', name)
    }
    
  };
  
  const checkUser = (data:any) => {
    axios
      .post("/api/register/check-user/", data)
      .then((response) => {
        if(response.data.success){
          const userName = response.data.userName;
          localStorage.setItem('userId', userName)
          router.push("/member/findId/");
        }else{
          alert("사용자 정보가 일치하지 않습니다.")
        }
      })
      .catch((error) => {
        toast.error(`본인 확인 중 오류가 발생했습니다: ${error.message}`);
      })
  }
  const checkUser2 = (data:any) => {
    axios
      .post("/api/register/check-user2/", data)
      .then((response) => {
        if(response.data.success){
        router.push("/member/findPassword/");
        }else{
          alert("사용자 정보가 일치하지 않습니다.")
        }
      })
      .catch((error) => {
        toast.error(`본인 확인 중 오류가 발생했습니다: ${error.message}`);
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
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="text"
                required
                autoFocus={true}
                placeholder="아이디"
                className="border border-gray py-[10px] px-[20px] w-full focus:border-primary  outline-none"
              />
            </div>
          </div>
        )}
        <div>
          <div className="mt-4">
            <input
              onChange={(e) => setKoname(e.target.value)}
              id="koname"
              name="koname"
              type="text"
              required
              autoFocus={true}
              placeholder="이름"
              className="border border-gray py-[10px] px-[20px] w-full focus:border-primary  outline-none"
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
              className="border border-gray py-[10px] px-[20px] w-full focus:border-primary outline-none"
            />
          </div>
        </div>
        {findType == "id" && (
          <div className="mt-6 flex gap-[10px]">
            <button className="w-full bg-primary  text-white cursor-pointer py-[10px]"
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
        )}
        {findType != "id" && (
          <div className="mt-6 flex gap-[10px]">
            <button className="w-full bg-primary text-white cursor-pointer py-[10px]"
              onClick={handleSubmit2}
            >
              다음
            </button>
          <Link passHref href="/member/signin" className="w-full">
            <button className="w-full bg-lightgray border border-gray text-black cursor-pointer py-[10px]">
              취소
            </button>
          </Link>
        </div>
        )}
      </div>
    </main>
  );
}

export default Find;
