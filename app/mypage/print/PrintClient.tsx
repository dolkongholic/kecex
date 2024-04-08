"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import download_icon from "@/public/img/icon/download_icon.png";
import certificate_bg from "@/public/img/pages/print/certificate_background.jpg";

// Image

const location = "회원증 출력";

interface MyCertProps {
  currentUser: any;
}
const PrintClient: React.FC<MyCertProps> = ({ currentUser }) => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
        // { title: "세미나/컨설팅 신청 현황", url: "/mypage/overall/all03" },
        // { title: "경력관리 현황", url: "/mypage/overall/all04" },
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
        { title: "회비 관리", url: "/mypage/payment/management" , staff:true },
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
        // { title: "경력수첩 발급현황", url: "/mypage/carrear/sheet" },
      ],
    },
    {
      title: "회원탈퇴",
      url: "/mypage/out",
      sub: null,
    },
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
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

        <section className="py-[40px] md:pl-[50px] pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-between item-center border-b-secondary border-b-2">
            <div className="h-[40px]">
              본 협회에서 발급된 증서를 출력하실 수 있습니다.
            </div>
          </div>
          <figure className="w-full flex justify-center my-10">
            <div className="w-[315px] h-[439px] md:w-[620px] md:h-[877px] border border-gray relative">
              <Image
                src={certificate_bg}
                className="absolute left-0 top-0"
                alt="img"
              />{" "}
              <ul className="absolute left-[90px] top-[134px] md:left-[172px] md:top-[265px] z-40 font-[KoPubWorldBatang] text-black">
                <li className="text-[10px] md:text-[19px] font-bold">
                  <p className=" tracking-widest">{currentUser.koname}</p>
                </li>
                <li className="text-[10px] md:text-[19px] font-bold leading-4 md:leading-7 mt-[3px] md:mt-[9px]">
                  <p className="">부산광역시 해운대구 센텀동로35 센텀SH밸리</p>
                </li>
                <li className="text-[10px] md:text-[19px] font-bold mt-[3px] md:mt-[9px]">
                  <p className="tracking-relaxed">{currentUser.id}</p>
                </li>
              </ul>
              <p className="absolute left-[88px] md:left-[173px] top-[273px] md:top-[539px] z-40 text-[6px] md:text-[12px] font-[KoPubWorldBatang] text-[#898989]">
                {year}.{month}.{day}
              </p>
              <p className="absolute left-[176px] md:left-[348px] top-[273px] md:top-[539px] z-40 text-[6px] md:text-[12px] font-[KoPubWorldBatang] text-[#898989]">
                2024.03.06
              </p>
              <div className="absolute left-[108px] md:left-[220px] top-[304px] md:top-[600px] z-40 text-[12px] md:text-[22px] font-[KoPubWorldBatang] text-black flex font-bold">
                <p>{year}</p>
                <p className="ml-[15px] md:ml-[30px]">{month}</p>
                <p className="ml-[14px] md:ml-[29px]">{day}</p>
              </div>
            </div>
          </figure>

          <div className="btn_box flex m-auto mt-20">
            <button className="w-40 h-14 border border-darkgray text-superdarkgray flex justify-center items-center">
              다운로드{" "}
              <Image src={download_icon} className="w-4 h-4 ml-2" alt="img" />{" "}
            </button>
            <button className="w-40 h-14 border border-secondary bg-secondary text-white flex justify-center items-center ml-7">
              출력
            </button>
          </div>
          {/*btn_box*/}
        </section>
      </main>
    </section>
  );
};

export default PrintClient;
