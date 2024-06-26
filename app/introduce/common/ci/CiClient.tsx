"use client";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import PicCi_1 from "@/public/img/pages/introduce/ci_1.svg";
import PicCi_2 from "@/public/img/pages/introduce/ci_2.svg";
import PicIntroduce_01 from "@/public/img/page_top/introduce_01.jpg"
import download_icon from "@/public/img/icon/download_icon.png";

const MainList = [
  {
    title: "일반현황",
    url: "#",
    sub: [
      { title: "CEO 인사말", url: "/introduce/common/ceo" },
      { title: "비전/미션", url: "/introduce/common/vision" },
      { title: "연혁", url: "/introduce/common/history" },
      { title: "CI", url: "/introduce/common/ci" },
    ],
  },
  {
    title: "조직안내",
    url: "#",
    sub: [
      { title: "조직도", url: "/introduce/group/group" },
      // { title: "부서소개", url: "/introduce/group/introduce" },
    ],
  },
  {
    title: "찾아오시는 길",
    url: "/introduce/map",
    sub: null,
  },
];

const location = "CI";

const handleDownload = () => {
  const url = '/img/pages/introduce/CI.ai';
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
      link.setAttribute('download', '한국방폭협회 CI.ai');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    })
    .catch(error => {
      console.error("에러가 발생:", error);
    });
};

const handleDownload2 = () => {
  const url = '/img/pages/introduce/CI_PNG.zip';
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
      link.setAttribute('download', '한국방폭협회 CI_PNG.zip');
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    })
    .catch(error => {
      console.error("에러가 발생:", error);
    });
};

const CiClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("일반현황");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicIntroduce_01}
            layout="fill"
            objectFit="cover"
            alt="item.title"
            className="object-cover"
          />
          <div className="bg-neutral-900/50 absolute w-full h-full left-0 top-0 z-20 text-center text-white font-medium text-[36px] leading-[200px]">
            {location}
          </div>
        </div>
      </figure>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              협회소개 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              일반현황 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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
                <SubNavHeader title={"협회소개"} />
                <div className="flex flex-col w-full">
                  <SubNav
                    MainList={MainList}
                    pageMenu={pageMenu}
                    setPageMenu={setPageMenu}
                    location={location}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/introduce/common/ceo/"}>
                <div className="h-12 border border-gray-200 border-b-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> CEO 인사말</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/vision/"}>
                <div className="h-12 border border-gray-200 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 비전/미션</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/introduce/common/history/"}>
                <div className="h-12 border border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 연혁</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                    <span> CI</span>
                </div>
            </li>
          </ul>
          <Image src={PicCi_1} alt="Ci" className="my-[40px] w-full" />
          <Image src={PicCi_2} alt="Ci" className="mb-[40px] w-full" />
          {/* <Image src={PicCi_3} alt="Ci" /> */}
          <div className="flex justify-center w-full">
            <button
            className="border border-[#3A3A3A] w-[240px] h-14 font-medium"
            onClick={handleDownload}
            >
              협회 로고 Ai
              <Image src={download_icon} className="w-5 h-5 inline ml-1 mb-1" alt="img" />{" "}
            </button>
            <button
            className="border border-[#3A3A3A] w-[240px] h-14 font-medium ml-16"
            onClick={handleDownload2}
            >
              협회 로고 PNG
              <Image src={download_icon} className="w-5 h-5 inline ml-1 mb-1" alt="img" />{" "}
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default CiClient;
