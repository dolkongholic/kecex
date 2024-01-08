"use client";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    // console.log(emailRef.current);
    // console.log(passwordRef.current);

    const result = await signIn("credentials", {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: false,
      callbackUrl: "/",
    }).then((callback) => {
      if (callback?.ok) {
        console.log("OK");
      }

      if (callback?.error) {
        console.log("FAIKL");
      }
    });
  };

  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [iconColors, setIconColors] = useState(['lightgray', 'lightgray', 'lightgray', 'lightgray']);

  const toggleIcon = (index) => {
    const newIconColors = [...iconColors];
    newIconColors[index] = newIconColors[index] === 'lightgray' ? '#008ee5' : 'lightgray';
    setIconColors(newIconColors);
  };

  const toggleAllIcons = () => {
    const newIconColors = iconColors.map((color) =>
      color === 'lightgray' ? '#008ee5' : 'lightgray'
    );
    setIconColors(newIconColors);
  };

  const toggleText2 = () => {
    setIsShown2(!isShown2);
  }
  const toggleText3 = () => {
    setIsShown3(!isShown3);
  }
  const toggleText4 = () => {
    setIsShown4(!isShown4);
  }
  



  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 w-[1200px] p-24 m-auto text-center text-black">
      <section className="w-full">
        <h2 className=" font-semibold text-[30px] border-b-2 border-darkgray w-full py-5">회원가입</h2>
        <h3 className="text-[24px] font-semibold mt-12 mb-8">약관동의</h3>
        <p>회원가입 전 약관을 확인해주세요.</p>
        <ul className="w-full flex px-52 h-12 bg-lightgray items-center justify-between mt-12 text-darkgray">
          <li className="text-secondary">약관동의</li>
          <li className="text-secondary"><IoIosArrowForward /></li>
          <li>회원정보 입력</li>
          <li><IoIosArrowForward /></li>
          <li>가입완료</li>
        </ul>
        <article>
          <ul className="w-full border-lightgray border-2 mt-10 divide-y-2 divide-lightgray">
            <li className="flex justify-between h-14 items-center pl-52 pr-24" onClick={toggleAllIcons}>
              <div className="flex items-center cursor-pointer"><FaCheckCircle size="1.3em" color={iconColors[0]}/> <p className="ml-6 text-[14px]">모두 동의합니다.</p></div>
              <div><IoIosArrowDown size="1.5em" color={iconColors[0]}/></div>
            </li>{/*1번째 li*/}
            <li className="flex justify-between h-14 items-center pl-52 pr-24" onClick={() => toggleIcon(1)}>
            <div className="flex items-center cursor-pointer"><FaCheckCircle size="1.3em" color={iconColors[1]}/> <p className="ml-6 text-[14px]">한국방폭협회 회원 이용약관 동의 <span className="text-[#EF4444]">(필수)</span></p></div>
              <div><IoIosArrowDown size="1.5em" color={iconColors[1]}/></div>
            </li>{/*2번째 li*/}
            {isShown2 && <div className="h-52 flex items-center pl-52">텍스트 상자</div>}
            <li className="flex justify-between h-14 items-center pl-52 pr-24" onClick={() => toggleIcon(2)}>
            <div className="flex items-center cursor-pointer"><FaCheckCircle size="1.3em" color={iconColors[2]}/> <p className="ml-6 text-[14px]">한국방폭협회 이용약관 동의 <span className="text-[#EF4444]">(필수)</span></p></div>
              <div><IoIosArrowDown size="1.5em" color={iconColors[2]}/></div>
            </li>{/*3번째 li*/}
            {isShown3 && <div className="h-52 flex items-center pl-52">텍스트 상자</div>}
            <li className="flex justify-between h-14 items-center pl-52 pr-24" onClick={() => toggleIcon(3)}>
            <div className="flex items-center cursor-pointer"><FaCheckCircle size="1.3em" color={iconColors[3]}/> <p className="ml-6 text-[14px]">개인정보 수집 및 이용 동의 <span className="text-[#EF4444]">(필수)</span></p></div>
              <div><IoIosArrowDown size="1.5em" color={iconColors[3]}/></div>
            </li>{/*4번째 li*/}
            {isShown4 && <div className="h-52 flex items-center pl-52">텍스트 상자</div>}
          </ul>
        </article>
        <div className="first_btn_box flex justify-center mt-10">
          <button className="w-52 h-14 bg-secondary text-white mr-4">동의</button>
          <button className="w-52 h-14 bg-lightgray">취소</button>
        </div>
      </section> {/*약관동의 섹션*/}

      <section className="w-full">
        <h3 className="text-[24px] font-semibold mt-12 mb-8">회원정보 입력</h3>
        <ul className="w-full flex px-52 h-12 bg-lightgray items-center justify-between mt-1 text-darkgray">
          <li className="text-secondary">약관동의</li>
          <li className="text-secondary"><IoIosArrowForward /></li>
          <li className="text-secondary">회원정보 입력</li>
          <li className="text-secondary"><IoIosArrowForward /></li>
          <li>가입완료</li>
        </ul>
        <div className="border border-gray px-[30px] py-[50px] w-full">
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
      </section>{/*회원정보 섹션 */}
    </main>
  );
}

export default Login;
