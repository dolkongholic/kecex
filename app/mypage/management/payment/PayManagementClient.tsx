"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";

// Image


const location = "회비 관리";
interface PayManagementProps {
  currentUser: any;
  paymentList:any;
}
const PayManagementClient: React.FC<PayManagementProps> = ({ currentUser, paymentList }) =>{
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  
  const handlePayBtn = (PayId:string) => {
    axios
    .patch("/api/payment/confirm", {id:PayId})
    .then(() => {
      toast.success("회비 납부를 승인하였습니다");
      router.refresh();
    })
    .catch(() => {
      toast.error("오류가 발생했습니다.");
    })
    .finally(() => {
    });
  }

  const router = useRouter();
  if (!currentUser?.staff) {
    router.push("/");
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
      title: "관리자 메뉴",
      url: "#",
      sub: [
        { title: "회비 납부 관리", url: "/mypage/management/payment/"  },
        { title: "회원 관리", url: "/mypage/management/user/" },
        { title: "문의 관리", url: "/mypage/management/qna/" },
      ],
      staff:true
    },
  ];

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              마이페이지 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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
                <SubNavHeader title={"마이페이지"} />
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-center item-center">
          <div className="text-black w-full flex flex-col justify-center item-center">
            <ContentSubTitle title="회비 관리 현황" />
            <ul className="w-full mx-auto border-t-2 border-gray-700 mt-10 hidden md:block">
              <div className="w-full h-11 bg-gray-100 flex text-center items-center font-medium border-b border-primary">
                <div className="w-2/12 border-r border-gray-200 ">
                  성명
                </div>
                <div className="w-1/12 border-r border-gray-200 ">
                  회원 구분
                </div>
                <div className="w-2/12 border-r border-gray-200 ">
                  금액
                </div>
                <div className="w-2/12 border-r border-gray-200 ">
                  납부상태
                </div>
                <div className="w-4/12 border-r border-gray-200 ">
                  일자
                </div>
                <div className="w-1/12">
                  납부확인
                </div>
              </div>
              {paymentList
              .sort((a:any) => ( a.status === 0 ? -1 : 1 ))
              .map((item: any) => (
                <li className="w-full h-11 flex text-center items-center border-b border-gray-400"
                key={item.id}
                >
                  <div className="w-2/12 border-r border-gray-200 ">
                    {item.user.koname}
                  </div>
                  <div className="w-1/12 border-r border-gray-200 ">
                    {item.user.level}
                  </div>
                  <div className="w-2/12 h-full border-r border-gray-200 flex pl-10 items-center">
                    ￦&nbsp;
                    <span>
                      {item.user.level === "일반회원" ? "30,000" : ""}
                      {item.user.level === "정회원" ? "120,000" : ""}
                      {item.user.level === "운영위원" ? "200,000" : ""}
                      {item.user.level === "임원" ? "300,000" : ""}
                      {item.user.level === "기업회원" ? "500,000" : ""}
                    </span>
                  </div>
                  <div className="w-2/12 h-full border-r border-gray-200 flex pl-10 items-center">
                    <span className={`${item.status === 0 ? "text-blue-600" : "text-red-500"}`}>
                      {item.status === 0 ? "승인 대기" : "승인-입금완료"}
                    </span>
                  </div>
                  <div className="w-4/12 h-full border-r border-gray-200 flex pl-10 items-center">
                    <span>
                      {new Date(item.requested_at).toLocaleString('en-US', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <div className="w-1/12 h-full border-r border-gray-200 flex items-center">
                    <button className={`w-20 h-8 text-white mx-auto
                      ${item.status === 0 ? " bg-gray-500" : "bg-red-400"}
                    `}
                      onClick={() => handlePayBtn(item.id)}
                      disabled={item.status !== 0}
                    >
                      {item.status === 0 ? "승인하기" : "입금됨"}
                    </button>
                  </div>
                </li>
                ))}
              <li className="w-full h-2 flex text-center items-center border-b-2 border-gray-700">
                &nbsp;
              </li>
            </ul>
            <div className="mx-auto mt-10 hidden md:block">
              {/* 페이지 표시? */}
            </div>
            <div className="w-full mx-auto flex md:hidden justify-center items-center h-32">
              큰 화면으로 확인해주세요.
            </div>
          </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PayManagementClient;
