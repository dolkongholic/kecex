"use client";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoMdClose } from "react-icons/io";

// Image
import PicSlogan from "@/public/img/slogan/slogan_1.png";
import PicShotLogo from "@/public/img/logo/logo_big_icon__1.png";
import PicLogo from "@/public/img/logo/logo_default_2.png";
import PicHeader from "@/public/img/common/header_menu.png";
// import PicSlogan4 from "@/public/img/slogan/slogan_4.png";
import PicMainNotice from "@/public/img/slogan/main_notice.png";
import { SafeUser } from "@/types";
import download_icon from "@/public/img/icon/download_icon.png";
import download_icon_w from "@/public/img/icon/download_icon_white.png";

// const snsList = ["youtube", "facebook", "twiiter", "kakao", "blog", "instgram"];
const snsList = ["kakao", "blog", "instgram"];

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

interface HeaderProps {
  currentUser?: SafeUser | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [activePopup, setActivePopup] = useState<string>("");

  const [menu, setMenu] = useState<string>("");
  const [menubg, setMenubg] = useState<string>("");

  const openModal = () => {
    setPopupOpen(true);
    setActivePopup("all_menu_open");
    // document.body.classList.add("overflow-y-hidden");
  };
  const closePopup = () => {
    setPopupOpen(false);
    setActivePopup("");
    // document.body.classList.remove("overflow-y-hidden");
  };

  const [activeMenu, setActiveMenu] = useState("마이페이지");

  const handleMenuToggle = (menuTitle: any) => {
    setActiveMenu(menuTitle);
  };

  const handleDownload = () => {
    const url = "/download/admission.hwp";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크에 문제가 있습니다.");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "입회원서-신규.hwp");
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch((error) => {
        console.error("에러가 발생:", error);
      });
  };

  const [scrollAll, setScrollAll] = useState("");
  const [scrollSubNav, setScrollSubNav] = useState("");
  const [scrollRowMenu, setScrollRowMenu] = useState("");
  const [scrollLine, setScrollLine] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;
      // console.log('scrollY', scrollY);
      if (scrollY >= 70) {
        setScrollAll("fixed");
        setScrollSubNav("pt-[40px]");
        setScrollRowMenu("!mt-0");
        setScrollLine("before:!-top-[40px]");
      } else {
        setScrollAll("");
        setScrollSubNav("");
        setScrollRowMenu("");
        setScrollLine("");
      }
    };

    //윈도우에 eventlistener 추가
    window.addEventListener("scroll", onScroll, { passive: true });
    //event를 제거해줌
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollSubNav, scrollRowMenu]);

  return (
    <>
      <section className="flex-col hidden md:flex">
        <div
          className="w-full h-[60px] flex justify-center item-center border-b border-[#dcdcdc] bg-white z-[80]"
          onMouseOver={() => setMenu("")}
          onMouseLeave={() => {
            setMenubg("");
          }}
        >
          <div className="w-full xl:w-[1400px] flex justify-between item-center space-x-[20px]">
            <div className="lg:w-[150px] mr-[20px] hidden lg:block">&nbsp;</div>
            <Link passHref href={"/notice/notice/detail/14?page=1"}>
              <div className="w-[500px] xl:w-[800px] h-auto flex justify-start items-center relative 1translate-x-[90px]">
                <div className="w-[80px] h-[26px] bg-secondary text-white flex items-center justify-center absolute left-[140px] top-[16px] z-20 rounded-md text-[13px] pt-[1px]">
                  모집중
                </div>
                {/* <p className="ml-6 absolute h-[30px] left-[310px] top-[15px] text-[19px] leading-[32px] font-semibold text-[#575757] bg-transparent"> </p> */}
                <p className="ml-6 absolute h-[26px] left-[220px] top-[15px] text-[15px] leading-[32px] font-semibold text-[#777777] bg-transparent">
                  정회원 모집 안내
                </p>
                <button
                  className="absolute border border-[#3A3A3A] w-[130px] h-[26px] flex justify-center items-center rounded- left-[420px] top-[16px] group font-semibold text-[14px] z-20 hover:bg-[#3A3A3A] hover:text-white"
                  onClick={handleDownload}
                >
                  입회 원서
                  <Image
                    src={download_icon}
                    className="w-4 h-4 ml-1 mb-[1px] group-hover:hidden"
                    alt="img"
                  />{" "}
                  <Image
                    src={download_icon_w}
                    className="w-4 h-4 ml-1 mb-[1px] hidden group-hover:inline"
                    alt="img"
                  />{" "}
                </button>
              </div>
            </Link>
            <div className="w-1/2 lg:w-[330px] flex justify-end items-center">
              <div className="w-2/3 flex item-center justify-end mr-[15px] text-[13px] font-bold">
                <ul className="flex items-center space-x-[10px]">
                  {currentUser == null ? (
                    <>
                      <li onClick={() => signIn()} className="cursor-pointer">
                        로그인
                      </li>
                      <li className="text-[#ccc]">|</li>
                      <Link passHref href={"/member/join/"}>
                        <li className="cursor-pointer">회원가입</li>
                      </Link>
                    </>
                  ) : (
                    <Link passHref href={"/mypage/overall/all01"}>
                      <li className="cursor-pointer">마이페이지</li>
                    </Link>
                  )}

                  <li className="text-[#ccc]">|</li>
                  <li onClick={openModal} className="cursor-pointer">
                    사이트맵
                  </li>
                  {currentUser != null && (
                    <>
                      <li className="text-[#ccc]">|</li>
                      <li className="flex items-center space-x-[5px]">
                        <Link passHref href={"/"}>
                          <span
                            className="cursor-pointer"
                            onClick={() => signOut()}
                          >
                            로그아웃
                          </span>
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* nav start */}
        <div
          className={`w-full h-[85px] flex justify-center border-b border-[#dcdcdc] z-[80] bg-white ${scrollAll}`}
        >
          <div className="w-[1400px] flex justify-between items-center">
            <div
              className="w-[250px] justify-between items-center"
              onMouseOver={() => setMenu("")}
            >
              <Link
                passHref
                href={"/"}
                onMouseLeave={() => {
                  setMenubg("");
                }}
              >
                <Image src={PicLogo} alt="Logo" width={250} />
              </Link>
            </div>
            <div className="w-full px-5 xl:px-0 xl:w-[900px]">
              <ul className="flex justify-between font-bold text-[18px] xl:text-[21px] text-[#4e4e4e] ">
                {menuList.map(({ title, url }, index) => (
                  <li
                    key={index}
                    className={`w-1/5 xl:w-[110px] h-[85px] flex items-center justify-center transition-all duration-300 cursor-pointer relative 
                      before:content-[''] before:transition-all before:duration-300 before:block  before:absolute before:left-0 before:bottom-0 
                      before:h-[5px] before:bg-primary ${
                        title == menu
                          ? "text-primary before:w-full xl:before:w-[110px]"
                          : "before:w-[0px] "
                      }`}
                    onMouseOver={() => {
                      setMenu(title);
                      setMenubg("openbg");
                    }}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="w-[50px] flex items-center cursor-pointer"
              // onMouseOver={() => setMenu(null)}
              onClick={openModal}
            >
              <CgMenuGridO className="w-[40px] h-[40px] hover:text-primary transition-all duration-300" />
            </div>
          </div>
        </div>
        <div
          className={`w-screen h-screen fixed bg-black bg-opacity-40 z-30 transition-opacity duration-300 ${
            menubg === "openbg" ? "opacity-100" : "opacity-0 hidden"
          } `}
        >
          &nbsp;
        </div>
        {/* 서브 메뉴 */}
        <div
          className={`fixed top-[65px] w-full h-[450px] bg-white opacity-0 z-[70] ${
            !menu
              ? "opacity-0 -translate-y-[50px] pointer-events-none"
              : "opacity-100 translate-y-0 pointer-events-auto"
          } transition-all duration-300 flex justify-center items-start ${scrollSubNav}`}
          onMouseLeave={() => {
            setMenu("");
            setMenubg("");
          }}
          onClick={() => setMenu("")}
        >
          {/* 서브메뉴 배경 */}
          <div
            className={`absolute top-[0px] w-[1200px] h-[450px] left-1/2 hidden lg:block -translate-x-[1650px]`}
          >
            <div className="w-full h-full relative">
              <Image
                src={PicHeader}
                className=" w-[1200px] h-[450.5px] absolute right-0 rotate-180 z-0"
                alt="Image"
              />
              {/* <div className="w-[450px] h-full absolute right-0">
              <p className="text-white absolute right-[75px] top-[100px] text-[36px] font-semibold">
                {menu}
              </p>
            </div> */}
            </div>
          </div>
          {/* 서브메뉴 배경끝 */}
          {menu == "협회소개" && (
            <div
              className={`w-full lg:w-[1400px] mt-[95px] ${scrollRowMenu}`}
              onMouseOver={() => {
                setMenu(menu);
              }}
            >
              <div className="w-full lg:w-[1400px] flex lg:pl-[250px] lg:pr-[80px]">
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/introduce/common/ceo/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px]">
                      일반현황
                    </div>
                  </Link>
                  <div className="flex flex-col space-y-[20px] text-neutral-600 text-[17px] pl-3">
                    <Link passHref href={"/introduce/common/ceo/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        CEO 인사말
                      </span>
                    </Link>
                    <Link passHref href={"/introduce/common/vision/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        비전/미션
                      </span>
                    </Link>
                    <Link passHref href={"/introduce/common/history/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        연혁
                      </span>
                    </Link>
                    <Link passHref href={"/introduce/common/ci/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        CI
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/introduce/group/group"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px]">
                      조직안내
                    </div>
                  </Link>
                  <div className="flex flex-col space-y-[20px] text-neutral-600 text-[17px] pl-3">
                    <Link passHref href={"/introduce/group/group"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        조직도
                      </span>
                    </Link>
                    {/* <Link passHref href={"/introduce/group/introduce/"}>
                    <span className="cursor-pointer"> - 부서소개</span>
                  </Link> */}
                  </div>
                </div>
                <div className="w-1/4 pl-[2%]">
                  <Link passHref href={"/introduce/map/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      찾아오시는길
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {menu == "사업안내" && (
            <div
              className={`w-full lg:w-[1400px] mt-[95px] ${scrollRowMenu}`}
              onMouseOver={() => setMenu(menu)}
            >
              <div className="w-full lg:w-[1400px] flex justify-start lg:pl-[250px] lg:pr-[80px]">
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/business/member/rule/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px]">
                      회원
                    </div>
                  </Link>
                  <div className="flex flex-col space-y-[20px] text-neutral-600 text-[17px] pl-3">
                    {/* <Link passHref href={"/business/member/join/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        회원가입
                      </span>
                    </Link> */}
                    <Link passHref href={"/business/member/rule/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        회원회칙
                      </span>
                    </Link>
                    <Link passHref href={"/business/member/career/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        경력관리
                      </span>
                    </Link>
                    <Link passHref href={"/business/member/careercard/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        경력수첩
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/business/education/course01/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px]">
                      교육
                    </div>
                  </Link>
                  <div className="flex flex-col space-y-[20px] text-neutral-600 text-[17px] pl-3">
                    <Link passHref href={"/business/education/course01/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        방폭교육 과정
                      </span>
                    </Link>
                    <Link passHref href={"/business/education/course02/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        산업안전 교육
                      </span>
                    </Link>
                    <Link passHref href={"/business/education/course03/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        위험성 평가 교육
                      </span>
                    </Link>
                    <Link passHref href={"/business/education/course04/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        정량적위험성평가 교육
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="w-1/4 pl-[2%]">
                  {/* <Link passHref href={"/business/consulting/inspection/"}> */}
                  <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px]">
                    컨설팅
                  </div>
                  {/* </Link> */}
                  {/* <div className="flex flex-col space-y-[20px] text-neutral-600 text-[17px] pl-3">
                    <Link passHref href={"/business/consulting/inspection/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        방폭사전진단
                      </span>
                    </Link>
                    <Link passHref href={"/business/consulting/psm/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        PSM
                      </span>
                    </Link>
                    <Link passHref href={"/business/consulting/sapa/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        중대재해처벌법
                      </span>
                    </Link>
                    <Link passHref href={"/business/consulting/danger/"}>
                      <span className="cursor-pointer hover:underline underline-offset-4">
                        {" "}
                        위험성 평가
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          )}
          {menu == "알림센터" && (
            <div
              className={`w-full lg:w-[1400px] mt-[95px] ${scrollRowMenu}`}
              onMouseOver={() => setMenu(menu)}
            >
              <div className="w-full lg:w-[1400px] flex justify-start lg:pl-[250px] lg:pr-[80px] h-[350px]">
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/notice/notice?page=1"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      공지사항
                    </div>
                  </Link>
                </div>
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/notice/faq/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      FAQ
                    </div>
                  </Link>
                </div>
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/notice/qna/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      문의사항
                    </div>
                  </Link>
                </div>
                <div className="w-1/4 text-[19px] pl-[2%]">
                  <Link passHref href={"/notice/worker/"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      인재정보
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {menu == "정보공개" && (
            <div
              className={`w-full lg:w-[1400px] mt-[95px] ${scrollRowMenu}`}
              onMouseOver={() => setMenu(menu)}
            >
              <div className="w-full lg:w-[1400px] flex justify-start lg:pl-[250px] lg:pr-[80px]">
                <div
                  className={`w-1/4 text-[19px] pl-[2%] relative
                  before:content[''] before:block before:absolute before:w-[1px] before:h-[450px] before:right-0 before:-top-[95px] before:bg-[#dcdcdc] ${scrollLine}
                `}
                >
                  <Link passHref href={"/information/raw?page=1"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      관계법령
                    </div>
                  </Link>
                </div>
                <div className="w-1/4 pl-[2%]">
                  <Link passHref href={"/information/news?page=1"}>
                    <div className="w-[225px] h-[55px] text-[#003893] hover:underline underline-offset-4 font-semibold text-[19px] text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
                      카드뉴스
                    </div>
                  </Link>
                </div>
                <div className="w-1/4 pl-[2%]">&nbsp;</div>
                <div className="w-1/4">&nbsp;</div>
              </div>
            </div>
          )}
          {menu == "교육센터" && (
            <div className="w-full lg:w-[1400px] pt-[170px] pl-[130px] mx-auto text-neutral-600 font-semibold text-[24px]">
              <div className="w-full lg:w-[1400px] text-center">
                교육 센터 운영 준비 중
              </div>
            </div>
            // <div
            //   className="w-[1400px] pt-[20px]"
            //   onMouseOver={() => setMenu(menu)}
            // >
            //   <div className="w-[1400px] flex justify-start">
            //     <div className="w-1/4">
            //       <Link passHref href={"/education/apply/apply"}>
            //         <div className="w-[250px] h-[55px] border-b border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
            //           교육신청
            //         </div>
            //       </Link>
            //       <div className="flex flex-col space-y-[20px] text-white">
            //         <Link passHref href={"/education/apply/apply"}>
            //           <span className="cursor-pointer"> - 교육 신청</span>
            //         </Link>
            //         <Link passHref href={"/education/apply/restudy"}>
            //           <span className="cursor-pointer"> - 재교육 신청</span>
            //         </Link>
            //         <Link passHref href={"/education/apply/reexam"}>
            //           <span className="cursor-pointer"> - 재시험 신청</span>
            //         </Link>
            //         <Link passHref href={"/education/apply/semina"}>
            //           <span className="cursor-pointer"> - 세미나 신청</span>
            //         </Link>
            //         <Link passHref href={"/education/apply/consulting"}>
            //           <span className="cursor-pointer"> - 컨설팅 신청</span>
            //         </Link>
            //       </div>
            //     </div>
            //     <div className="w-1/4">
            //       <Link passHref href={"/education/mystatus/apply"}>
            //         <div className="w-[250px] h-[55px] border-b border-[#cbcbcb] text-white text-lg text-start leading-[55px] pl-[10px] mb-[20px] cursor-pointer">
            //           나의 학습활동
            //         </div>
            //       </Link>
            //     </div>
            //   </div>
            // </div>
          )}
        </div>
      </section>
      {/* -----------------모바일 헤더 시작----------------- */}
      <section className="flex flex-col md:hidden">
        <div
          className="w-full h-[80px] flex justify-center item-center border-b border-[#dcdcdc] bg-white z-[80]"
          onMouseOver={() => setMenu("")}
        >
          <div className="w-full flex justify-between item-center space-x-[20px]">
            <div
              className="w-[250px] justify-between items-center pl-1 pt-1"
              onMouseOver={() => setMenu("")}
            >
              <Link passHref href={"/"} className="hidden md:block">
                <Image src={PicLogo} alt="Logo" width={250} />
              </Link>
              <Link passHref href={"/"} className="md:hidden">
                <Image src={PicLogo} alt="Logo" width={200} />
              </Link>
            </div>
            <div className="w-1/3 flex justify-end items-center">
              <div
                className="w-[50px] flex items-center cursor-pointer"
                // onMouseOver={() => setMenu(null)}
                onClick={openModal}
              >
                <CgMenuGridO className="w-[40px] h-[40px] hover:text-primary transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------전체화면 시작----------------------- */}
      <div
        className={`w-screen h-full fixed z-[800] bg-lightGray top-0 left-0 overflow-y-auto scrollbar-hide transition-opacity duration-100 ease-in-out overflow-x-hidden ${
          isPopupOpen && activePopup === "all_menu_open"
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        id="all_menu_open"
      >
        <div className="w-screen h-[80px] md:h-[105px] bg-white flex justify-center items-center">
          <div className="w-screen md:w-[1400px] flex justify-between items-center m-auto pl-1 md:pl-0 pr-5 box-border">
            <div className="w-[250px] justify-between items-center hidden md:block">
              <Link passHref href={"/"}>
                <Image src={PicLogo} alt="Logo" width={250} />
              </Link>
            </div>
            <div className="w-[200px] justify-between items-center md:hidden">
              <Link passHref href={"/"}>
                <Image src={PicLogo} alt="Logo" width={200} />
              </Link>
            </div>
            <button className="w-12 h-12 text-primary" onClick={closePopup}>
              <IoMdClose className="w-12 h-12 mx-auto" />
            </button>
          </div>
        </div>

        <div className="w-screen h-screen bg-white md:bg-lightGray">
          <div className="w-full h-[135px] border-y border-lightGray md:hidden item-center md:mr-[30px] text-[13px] text-gray-700 font-semibold px-[20px] box-border">
            {currentUser == null ? (
              <>
                <p className="text-[15px] pt-7">로그인 해주세요.</p>
                <a
                  onClick={() => signIn()}
                  className="cursor-pointer block pt-6 text-gray-600"
                >
                  로그인 하러가기 {`>>`}
                </a>
              </>
            ) : (
              <>
                <div className="w-full h-[75px] pl-2 text-[15px] pt-7">
                  <p>
                    <span>{currentUser.koname}</span>님, 환영합니다.
                  </p>
                </div>
                <div className="text-[13px] flex list-none px-2 justify-between pt-2">
                  <p className="text-start pr-5">
                    회원님은 현재 <b>{currentUser.level}</b>입니다.
                  </p>
                  <ul className="flex">
                    <li
                      className="cursor-pointer hover:text-primary"
                      onClick={() => signOut()}
                    >
                      로그아웃
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          <ul className="block md:flex justify-between w-full h-[808px] md:w-[1400px] m-auto md:pt-16 bg-lightGray">
            <li className="w-full md:w-1/5 mr-6 flex md:hidden">
              {/* 마이페이지 */}
              {currentUser == null ? (
                <></>
              ) : (
                <>
                  <div
                    className={` w-full md:w-full h-12 pl-5 md:pl-0 pt-3 md:pt-0 cursor-pointer md:text-primary md:border-b-2 border-primary ${
                      activeMenu === "마이페이지"
                        ? "text-primary border-b-2 bg-white md:bg-lightGray"
                        : "text-gray-700 bg-lightGray"
                    }`}
                    onClick={() => handleMenuToggle("마이페이지")}
                  >
                    <span className="text-[15px] md:text-[24px] font-semibold">
                      {" "}
                      마이페이지
                    </span>
                  </div>
                  <ul
                    className={`w-3/4 md:w-full absolute md:static right-0 top-[215px] h-full bg-white md:bg-lightGray z-[501] text-[15px] md:text-auto ${
                      activeMenu === "마이페이지" ? "block" : "hidden md:block"
                    }`}
                  >
                    <li>
                      <div className="w-full md:w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                        전체 현황
                      </div>
                      <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                        <Link passHref href={"/mypage/overall/all01"}>
                          <span className="cursor-pointer hover:text-primary">
                            {" "}
                            · 발급/출력 현황
                          </span>
                        </Link>
                        <Link passHref href={"/mypage/overall/all02"}>
                          <span className="cursor-pointer hover:text-primary">
                            {" "}
                            · 1:1 문의 현황
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link passHref href={"/mypage/profile"}>
                        <div className="w-full md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[55px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary">
                          회원정보 수정
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link passHref href={"/mypage/regular"}>
                        <div className="w-full md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[55px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary">
                          정회원 가입
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="w-full md:w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                        회비 납부
                      </div>
                      <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                        <Link passHref href={"/mypage/payment/payment"}>
                          <span className="cursor-pointer hover:text-primary">
                            {" "}
                            · 회비 납부
                          </span>
                        </Link>
                        <Link passHref href={"/mypage/payment/detail"}>
                          <span className="cursor-pointer hover:text-primary">
                            {" "}
                            · 회비 납부내역
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link passHref href={"/mypage/print"}>
                        <div className="md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[55px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary">
                          회원증 출력
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link passHref href={"/mypage/overall/all02"}>
                        <div className="md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[55px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary">
                          1:1문의 현황
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link passHref href={"/mypage/resume"}>
                        <div className="md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[55px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary">
                          경력관리
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="w-full md:w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                        경력수첩 발급
                      </div>
                      <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                        <Link passHref href={"/mypage/career/print"}>
                          <span className="cursor-pointer hover:text-primary">
                            {" "}
                            · 경력수첩 발급
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link passHref href={"/mypage/out"}>
                        <div className="w-full md:w-[250px] h-12 md:h-14  md:border-b md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[55px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary">
                          회원탈퇴
                        </div>
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </li>
            <li className="w-full md:w-1/5 mr-6 flex md:block">
              {/* 협회소개 */}
              <div
                className={`w-full md:w-full h-12 pl-5 md:pl-0 pt-3 md:pt-0 cursor-pointer md:text-primary md:border-b-2 border-primary ${
                  activeMenu === "협회소개"
                    ? "text-primary border-b-2 border-primary bg-white md:bg-lightGray"
                    : "text-gray-700 bg-lightGray"
                }`}
                onClick={() => handleMenuToggle("협회소개")}
              >
                <span className="text-[15px] md:text-[24px] font-semibold">
                  {" "}
                  협회소개
                </span>
              </div>
              <ul className="w-3/4 md:w-full absolute md:static right-0 top-[215px] h-[808px] bg-white md:bg-lightGray z-[500] text-[15px] md:text-auto">
                <li>
                  <div className="w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                    일반현황
                  </div>
                  <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                    <Link passHref href={"/introduce/common/ceo/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · CEO 인사말
                      </span>
                    </Link>
                    <Link passHref href={"/introduce/common/vision/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 비전/미션
                      </span>
                    </Link>
                    <Link passHref href={"/introduce/common/history/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 연혁
                      </span>
                    </Link>
                    <Link passHref href={"/introduce/common/ci/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · CI
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                    조직안내
                  </div>
                  <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                    <Link passHref href={"/introduce/group/group"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 조직도
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link passHref href={"/introduce/map/"}>
                    <div className="w-[250px] h-12 md:h-14 md:border-b md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[58px] pl-6 md:pl-0 pr-[5px] md:mb-[20px] md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      찾아오시는길
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="w-full md:w-1/5 mr-6 flex md:block">
              {/* 사업안내 */}
              <div
                className={`w-full md:w-full h-12 pl-5 md:pl-0 pt-3 md:pt-0 cursor-pointer md:text-primary md:border-b-2 border-primary ${
                  activeMenu === "사업안내"
                    ? "text-primary border-b-2 bg-white md:bg-lightGray"
                    : "text-gray-700 bg-lightGray"
                }`}
                onClick={() => handleMenuToggle("사업안내")}
              >
                <span className="text-[15px] md:text-[24px] font-semibold">
                  {" "}
                  사업안내
                </span>
              </div>
              <ul
                className={`w-3/4 md:w-full absolute md:static right-0 top-[215px] h-full bg-white md:bg-lightGray z-[501] text-[15px] md:text-auto ${
                  activeMenu === "사업안내" ? "block" : "hidden md:block"
                }`}
              >
                <li>
                  <div className="w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                    회원
                  </div>
                  <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                    {/* <Link passHref href={"/business/member/join/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 회원가입
                      </span>
                    </Link> */}
                    <Link passHref href={"/business/member/rule/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 회원회칙
                      </span>
                    </Link>
                    <Link passHref href={"/business/member/career/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 경력관리
                      </span>
                    </Link>
                    <Link passHref href={"/business/member/careercard/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 경력수첩
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                    교육
                  </div>
                  <div className="flex flex-col space-y-[25px] border-b border-gray-200 md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                    <Link passHref href={"/business/education/course01/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 방폭교육 과정
                      </span>
                    </Link>
                    <Link passHref href={"/business/education/course02/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 산업안전 교육
                      </span>
                    </Link>
                    <Link passHref href={"/business/education/course03/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 위험성 평가 교육
                      </span>
                    </Link>
                    <Link passHref href={"/business/education/course04/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 정량적위험성평가 교육
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="w-[250px] h-12 md:h-10 md:text-[18px] font-semibold text-start leading-[45px] md:leading-[55px] pl-6 md:pl-[10px] pr-[5px] md:mb-[20px] text-gray-600">
                    컨설팅
                  </div>
                  {/* <div className="flex flex-col space-y-[25px] md:border-b md:border-gray-300 pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                    <Link passHref href={"/business/consulting/inspection/"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold"> · 방폭사전진단</span>
                    </Link>
                    <Link passHref href={"/business/consulting/psm"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · PSM
                      </span>
                    </Link>
                    <Link passHref href={"/business/consulting/sapa"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 중대재해처벌법
                      </span>
                    </Link>
                    <Link passHref href={"/business/consulting/danger"}>
                      <span className="cursor-pointer hover:text-primary hover:font-semibold">
                        {" "}
                        · 위험성 평가
                      </span>
                    </Link>
                  </div> */}
                </li>
              </ul>
            </li>
            <li className="w-full md:w-1/5 mr-6 flex md:block">
              {/* 알림센터 */}
              <div
                className={`w-full md:w-full h-12 pl-5 md:pl-0 pt-3 md:pt-0 cursor-pointer md:text-primary md:border-b-2 border-primary ${
                  activeMenu === "알림센터"
                    ? "text-primary border-b-2 border-primary bg-white md:bg-lightGray"
                    : "text-gray-700 bg-lightGray"
                }`}
                onClick={() => handleMenuToggle("알림센터")}
              >
                <span className="text-[15px] md:text-[24px] font-semibold">
                  {" "}
                  알림센터
                </span>
              </div>
              <ul
                className={`w-3/4 md:w-full absolute md:static right-0 top-[215px] h-full bg-white md:bg-lightGray z-[501] text-[15px] md:text-auto ${
                  activeMenu === "알림센터" ? "block" : "hidden md:block"
                }`}
              >
                <li>
                  <Link passHref href={"/notice/notice?page=1"}>
                    <div className="md:w-[250px] h-12 md:h-14 border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[58px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      공지사항
                    </div>
                  </Link>
                </li>
                <li>
                  <Link passHref href={"/notice/faq/"}>
                    <div className="md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[58px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      FAQ
                    </div>
                  </Link>
                </li>
                <li>
                  <Link passHref href={"/notice/qna/"}>
                    <div className="md:w-[250px] h-12 md:h-14  border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[58px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      문의사항
                    </div>
                  </Link>
                </li>
                <li>
                  <Link passHref href={"/notice/worker/"}>
                    <div className="md:w-[250px] h-12 md:h-14 md:border-b md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600  leading-[45px] md:leading-[58px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      인재정보
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="w-full md:w-1/5 mr-6 flex md:block">
              {/* 정보공개 */}
              <div
                className={`w-full md:w-full h-12 pl-5 md:pl-0 pt-3 md:pt-0 cursor-pointer md:text-primary md:border-b-2 border-primary ${
                  activeMenu === "정보공개"
                    ? "text-primary border-b-2 border-primary bg-white md:bg-lightGray"
                    : "text-gray-700 bg-lightGray"
                }`}
                onClick={() => handleMenuToggle("정보공개")}
              >
                <span className="text-[15px] md:text-[24px]  font-semibold">
                  {" "}
                  정보공개
                </span>
              </div>
              <ul
                className={`w-3/4 md:w-full absolute md:static right-0 top-[215px] h-full bg-white md:bg-lightGray z-[501] text-[15px] md:text-auto ${
                  activeMenu === "정보공개" ? "block" : "hidden md:block"
                }`}
              >
                <li>
                  <Link passHref href={"/information/raw?page=1"}>
                    <div className="md:w-[250px] h-12 md:h-14 border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[58px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      관계법령
                    </div>
                  </Link>
                </li>
                <li>
                  <Link passHref href={"/information/news?page=1"}>
                    <div className="md:w-[250px] h-12 md:h-14 md:border-b border-gray-200 md:border-gray-300 md:text-[18px] font-semibold text-start text-gray-600 leading-[45px] md:leading-[58px] pb-5 ml-6 md:ml-3 mr-3 cursor-pointer hover:text-primary hover:font-semibold">
                      카드뉴스
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="w-full md:w-1/5 mr-6 flex md:block">
              {/* 교육센터 */}
              <div
                className={`w-full md:w-full h-12 pl-5 md:pl-0 pt-3 md:pt-0 cursor-pointer md:text-primary md:border-b-2 border-primary ${
                  activeMenu === "교육센터"
                    ? "text-primary border-b-2 border-primary bg-white md:bg-lightGray"
                    : "text-gray-700 bg-lightGray"
                }`}
                onClick={() => handleMenuToggle("교육센터")}
              >
                <span className="text-[15px] md:text-[24px]  font-semibold">
                  {" "}
                  교육센터
                </span>
              </div>
              <div
                className={`w-3/4 md:w-full absolute md:static right-0 top-[215px] h-full bg-white md:bg-lightGray z-[501] text-[15px] md:text-auto text-gray-600 ${
                  activeMenu === "교육센터" ? "block" : "hidden md:block"
                }`}
              >
                {/* 교육신청 */}
                <div className="w-full md:w-[250px] h-12 md:h-14 md:text-[18px] font-semibold text-start text-gray-600 leading-[58px] pb-5 pt-3 md:pt-0 ml-6 md:ml-3 mr-3">
                  교육센터 운영 준비 중
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* 전체화면 메뉴 */}
    </>
  );
};

export default Header;
