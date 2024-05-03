"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useState, useRef } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image
import Image from "next/image";
import download_icon from "@/public/img/icon/download_icon.png";
import download_icon_white from "@/public/img/icon/download_icon_white.png";
import regular_member_1 from "@/public/img/icon/regular_member_1.png";
import regular_member_2 from "@/public/img/icon/regular_member_2.png";
import regular_member_3 from "@/public/img/icon/regular_member_3.png";


const location = "회원탈퇴";

interface OutProps {
  currentUser?: any;
}
const OutClient: React.FC<OutProps> = ({ currentUser }) =>{
  const router = useRouter();
  const passwordRef = useRef(null);

  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const { data: session } = useSession();
  if (!currentUser) {
    router.push("/member/signin/");
    return null;
  }


  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
      ],
    },
    {
      title: "회원정보 수정",
      url: "/mypage/profile",
      sub: null,
    },
    {
      title: "정회원 가입",
      url: "/mypage/regular",
      sub: null,
    },
    {
      title: "회비 납부",
      url: "#",
      sub: [
        { title: "회비 납부", url: "/mypage/payment/payment" },
        { title: "회비 납부내역", url: "/mypage/payment/detail" },
      ],
    },
    {
      title: "회원증 출력",
      url: "/mypage/print",
      sub: null,
    },
    {
      title: "1:1문의 현황",
      url: "/mypage/overall/all02",
      sub: null,
    },
    {
      title: "경력관리",
      url: "/mypage/resume",
      sub: null,
    },
    {
      title: "경력수첩 발급",
      url: "#",
      sub: [
        { title: "경력수첩 발급", url: "/mypage/career/print" },
      ],
    },
    {
      title: "회원탈퇴",
      url: "/mypage/out",
      sub: null,
    },
    { 
      staff:true,
      title: "관리자 메뉴",
      url: "#",
      sub: [
        { title: "회비 납부 관리", url: "/mypage/management/payment/", staff:true },
        { title: "회원 관리", url: "/mypage/management/user/" },
        { title: "문의 관리", url: "/mypage/management/qna/" },
      ],
    },
  ];

  const handleDownload = () => {
    const url = '/download/unregister.docx';
    fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error('네트워크에 문제가 있습니다.')
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '(양식)회원탈퇴서.docx');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch(error => {
        console.error("에러가 발생:", error);
      });
  };

  const out = () => {
    if (confirm("탈퇴 하시겠습니까?")) {
      alert("탈퇴 신청이 접수 되었습니다.");
    } else {
    }
  };
  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              마이페이지 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
          <div className=" bg-white flex justify-center item-start">
            <div className="w-full flex items-start">
              <div className="w-[240px] flex flex-col">
                <SubNavHeader title="마이페이지" />
                <div className="flex flex-col w-full">
                  <SubNav
                    MainList={MainList}
                    pageMenu={pageMenu}
                    setPageMenu={setPageMenu}
                    location={location}
                    currentUser={currentUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[40px] px-[15px] md:pl-[50px] md:pr-[20px]  w-full flex flex-col justify-start items-start text-[15px] md:text-base">
          <ContentTitle title={location} center={true} />
          <ContentSubTitle title="회원 탈퇴 절차" />
          <p className="border border-[#ccc] p-8 mb-10 w-full">
            회원탈퇴는 다음 절차를 통해 진행됩니다.<br/>
            탈퇴 시 기존에 유지되던 혜택은 더이상 이용하실 수 없으며, 탈퇴 후 30일 내에만 회원 자격을 복구할 수 있습니다.
          </p>
            <ul className="flex flex-col md:flex-row w-full items-center justify-between mb-9 md:mb-0 border border-[#ccc] px-3 py-5 md:py-0">
              <li className="w-3/4 md:w-1/4">
                <div className="md:h-32 flex justify-between items-center py-6 md:py-0">
                  <div className="w-5/12 h-full flex justify-center items-center">
                    <Image
                      src={regular_member_1}
                      alt="원서작성_아이콘"
                      className="w-16"
                    />
                  </div>
                  <div className="w-7/12">
                    <p>
                      탈퇴 양식 작성
                      <br />
                      (홈페이지 다운로드)
                    </p>
                  </div>
                </div>
              </li>
              <li className="leading-[150px] hidden md:inline-block text-[24px] font-medium text-[#3A3A3A]">{`>`}</li>
              <li className="py-6 md:hidden text-center">{`↓`}</li>
              <li className="w-3/4 md:w-1/4">
                <div className="md:h-32 flex justify-between items-center py-6 md:py-0">
                  <div className="w-5/12 h-full flex justify-center items-center">
                    <Image
                      src={regular_member_2}
                      alt="원서송부_아이콘"
                      className="w-16"
                    />
                  </div>
                  <div className="w-7/12">
                    <p>
                      메일 전송<br/>
                      kecex@kecex.or.kr
                    </p>
                  </div>
                </div>
              </li>
              <li className="leading-[150px] hidden md:inline-block text-[24px] font-medium text-[#3A3A3A]">{`>`}</li>
              <li className="py-6 md:hidden text-center">{`↓`}</li>
              <li className="w-3/4 md:w-1/4">
                <div className="md:h-32 flex justify-between items-center py-6 md:py-0">
                  <div className="w-5/12 h-full flex justify-center items-center">
                    <Image
                      src={regular_member_3}
                      alt="탈퇴처리_아이콘"
                      className="w-16"
                    />
                  </div>
                  <div className="w-7/12">
                    <p>
                      검토 후 탈퇴 처리
                    </p>
                  </div>
                </div>
                {/* <p className="text-[12px] text-center mt-3">
                  입회처리 후 {`'Welcome'`} 문자 전송
                  <br />* 회비 청구시 지로(GIRO) 우편 발송
                </p> */}
              </li>
            </ul>
            <button
            className="bg-lightgray w-[280px] h-12 mt-10"
            onClick={handleDownload}
            >
              회원탈퇴서 (양식)
              <Image src={download_icon} className="w-5 h-5 inline ml-1 mb-1" alt="img" />{" "}
            </button>
        </section>
      </main>
    </section>
  );
};

export default OutClient;
