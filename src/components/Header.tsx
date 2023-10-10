"use client";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// Image
import PicSlogan from "../../public/img/slogan/slogan_1.png";
import PicShotLogo from "../../public/img/logo/logo_big_icon__1.png";
import PicLogo from "../../public/img/logo/logo_default_2.png";

const snsList = ["youtube", "facebook", "twiiter", "kakao", "blog", "instgram"];

const menuList = [
  {
    title: "협회소개",
    url: "/",
  },
  {
    title: "사업안내",
    url: "/",
  },
  {
    title: "알림센터",
    url: "/",
  },
  {
    title: "정보공개",
    url: "/",
  },
  {
    title: "교육센터",
    url: "/",
  },
];

type Props = {
  menu: any;
  setMenu: any;
};
export default function Header({ menu, setMenu }: Props) {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col">
      <div
        className="w-full h-[80px] flex justify-center item-center border-b border-[#dcdcdc] bg-white  z-[80]"
        onMouseOver={() => setMenu(null)}
      >
        <div className="w-[1400px] flex justify-between item-center space-x-[20px]">
          <div className="w-[250px] flex justify-start items-center">
            <Link passHref href={"/"}>
              <Image src={PicSlogan} alt="슬로건" width={250} height={80} />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[120px] mr-[40px] flex item-center">
              <Link passHref href={"/"}>
                <Image src={PicShotLogo} alt="Logo" width={120} height={80} />
              </Link>
            </div>
            <input
              type="text"
              className="w-[350px] h-[40px] ring-2 ring-[#e2e2e2] px-[20px] rounded-3xl placeholder:text-sm font-light focus:outline-none focus:ring-2 focus:ring-active transition-all duration-500"
              placeholder="검색어를 입력하세요"
            />
            <span className="w-[30px] h-[30px] -translate-x-[40px] translate-y-[5px]">
              <FiSearch style={{ width: "22", height: "22" }} />
            </span>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <div className="w-1/2 flex item-center justify-end mr-[30px] text-[13px] font-bold">
              <ul className="flex items-center space-x-[5px]">
                {session == null ? (
                  <li onClick={() => signIn()} className="cursor-pointer">
                    로그인
                  </li>
                ) : (
                  <Link passHref href={"/mypage/profile"}>
                    <li className="cursor-pointer">마이페이지</li>
                  </Link>
                )}

                <li>|</li>
                <li onClick={() => signOut()} className="cursor-pointer">
                  사이트맵
                </li>
                <li>|</li>
                <li className="flex items-center space-x-[5px]">
                  <AiOutlineGlobal />{" "}
                  <span className="cursor-pointer">ENG</span>
                </li>
              </ul>
            </div>
            <ul className="w-1/2 flex justify-between">
              {snsList.map((item, index) => (
                <li key={index}>
                  <Image
                    src={`/img/icon/sns_${item}.png`}
                    width={28}
                    height={28}
                    alt={item}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* nav start */}
      <div className="w-full h-[85px] flex justify-center border-b border-[#dcdcdc] z-[80] bg-white">
        <div className="w-[1400px] flex justify-between items-center">
          <div
            className="w-[250px] justify-between items-center"
            onMouseOver={() => setMenu(null)}
          >
            <Link passHref href={"/"}>
              <Image src={PicLogo} alt="Logo" width={250} height={85} />
            </Link>
          </div>
          <div className="w-[900px]">
            <ul className="flex justify-between font-extrabold text-[20px] text-[#4e4e4e] ">
              {menuList.map(({ title, url }, index) => (
                <li
                  key={index}
                  className={`w-[110px] h-[85px] flex items-center justify-center hover:text-active transition-all duration-300 cursor-pointer ${
                    title == menu ? "text-active" : ""
                  }`}
                  onMouseOver={() => setMenu(title)}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="w-[50px] flex items-center"
            onMouseOver={() => setMenu(null)}
          >
            <CgMenuGridO className="w-[40px] h-[40px] hover:text-active transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* 서브 메뉴 */}
      <div
        className={`absolute top-[160px] w-full h-[700px] bg-active opacity-0 z-[70] ${
          !menu
            ? "opacity-0 -translate-y-[50px] pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto"
        } transition-all duration-300 flex justify-center items-start`}
        onMouseLeave={() => setMenu(null)}
        onClick={() => setMenu(null)}
      >
        {menu == "협회소개" && (
          <div
            className="w-[1400px] pt-[20px]"
            onMouseOver={() => setMenu(menu)}
          >
            <div className="w-[1400px] flex justify-start">
              <div className="w-1/4">
                <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                  일반현황
                </div>
                <div className="flex flex-col space-y-[20px] text-white">
                  <Link passHref href={"/introduce/common/ceo/"}>
                    <span className="cursor-pointer"> - CEO 인사말</span>
                  </Link>
                  <Link passHref href={"/introduce/common/vistion/"}>
                    <span className="cursor-pointer"> - 비전/미션</span>
                  </Link>
                  <Link passHref href={"/introduce/common/history/"}>
                    <span className="cursor-pointer"> - 연혁</span>
                  </Link>
                  <Link passHref href={"/introduce/common/ci/"}>
                    <span className="cursor-pointer"> - CI</span>
                  </Link>
                </div>
              </div>
              <div className="w-1/4">
                <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                  조직안내
                </div>
                <div className="flex flex-col space-y-[20px] text-white">
                  <Link passHref href={"/introduce/group/group"}>
                    <span className="cursor-pointer"> - 조직도</span>
                  </Link>
                  {/* <Link passHref href={"/introduce/group/introduce/"}>
                    <span className="cursor-pointer"> - 부서소개</span>
                  </Link> */}
                </div>
              </div>
              <div className="w-1/4">
                <Link passHref href={"/introduce/map/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    찾아오시는길
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
        {menu == "사업안내" && (
          <div
            className="w-[1400px] pt-[20px]"
            onMouseOver={() => setMenu(menu)}
          >
            <div className="w-[1400px] flex justify-start">
              <div className="w-1/4">
                <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                  회원
                </div>
                <div className="flex flex-col space-y-[20px] text-white">
                  <Link passHref href={"/business/member/join/"}>
                    <span className="cursor-pointer"> - 회원가입</span>
                  </Link>
                  <Link passHref href={"/business/member/career/"}>
                    <span className="cursor-pointer"> - 경력관리</span>
                  </Link>
                  <Link passHref href={"/business/member/careercard/"}>
                    <span className="cursor-pointer"> - 경력수첩</span>
                  </Link>
                </div>
              </div>
              <div className="w-1/4">
                <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                  교육
                </div>
                <div className="flex flex-col space-y-[20px] text-white">
                  <Link passHref href={"/business/education/course01/"}>
                    <span className="cursor-pointer">
                      {" "}
                      - 방폭 기초교육 일반/시공
                    </span>
                  </Link>
                  <Link passHref href={"/business/education/course02/"}>
                    <span className="cursor-pointer">
                      {" "}
                      - 방폭 인력양성 교육
                    </span>
                  </Link>
                  <Link passHref href={"/business/education/course03/"}>
                    <span className="cursor-pointer"> - 기업형 교육</span>
                  </Link>
                  <Link passHref href={"/business/education/develop/"}>
                    <span className="cursor-pointer"> - 교육개발</span>
                  </Link>
                </div>
              </div>
              <div className="w-1/4">
                <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                  컨설팅
                </div>
                <div className="flex flex-col space-y-[20px] text-white">
                  <Link passHref href={"/business/consulting/inspection/"}>
                    <span className="cursor-pointer"> - 방폭 사전진단</span>
                  </Link>
                  <Link passHref href={"/business/consulting/equipment/"}>
                    <span className="cursor-pointer"> - 방폭기기선정</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu == "알림센터" && (
          <div
            className="w-[1400px] pt-[20px]"
            onMouseOver={() => setMenu(menu)}
          >
            <div className="w-[1400px] flex justify-start">
              <div className="w-1/4">
                <Link passHref href={"/notice/worker/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    인재정보
                  </div>
                </Link>
              </div>
              <div className="w-1/4">
                <Link passHref href={"/notice/faq/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    FAQ
                  </div>
                </Link>
              </div>
              <div className="w-1/4">
                <Link passHref href={"/notice/qna/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    문의사항
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
        {menu == "정보공개" && (
          <div
            className="w-[1400px] pt-[20px]"
            onMouseOver={() => setMenu(menu)}
          >
            <div className="w-[1400px] flex justify-start">
              <div className="w-1/4">
                <Link passHref href={"/information/raw/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    관련법령
                  </div>
                </Link>
              </div>
              <div className="w-1/4">
                <Link passHref href={"/information/news/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    카드뉴스
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
        {menu == "교육센터" && (
          <div
            className="w-[1400px] pt-[20px]"
            onMouseOver={() => setMenu(menu)}
          >
            <div className="w-[1400px] flex justify-start">
              <div className="w-1/4">
                <Link passHref href={"/"}>
                  <div className="w-[250px] h-[55px] border border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                    교육신청
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
