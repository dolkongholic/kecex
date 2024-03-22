"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import PicCareer_1 from "@/public/img/pages/business/careear_1.png";
import PicCareer_2 from "@/public/img/pages/business/careear_2.png";
import PicCareer_3 from "@/public/img/pages/business/careear_3.png";
import PicCareer_1_M from "@/public/img/pages/business/career_1_m.png";
import PicCareer_2_M from "@/public/img/pages/business/career_2_m.png";
import PicBusiness_01 from "@/public/img/page_top/business_01.jpg"

const MainList = [
  {
    title: "회원",
    url: "#",
    sub: [
      { title: "회원가입", url: "/business/member/join" },
      { title: "회원회칙", url: "/business/member/rule" },
      { title: "경력관리", url: "/business/member/career" },
      { title: "경력수첩", url: "/business/member/careercard" },
    ],
  },
  {
    title: "교육",
    url: "#",
    sub: [
      { title: "방폭기초교육", url: "/business/education/course01" },
      { title: "방폭인력양성 교육", url: "/business/education/course02" },
      { title: "기업형 교육", url: "/business/education/course03" },
      // { title: "교육개발", url: "/business/education/develop" },
      { title: "CoPC 과정", url: "/business/education/copc" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      // { title: "방폭기기선정", url: "/business/consulting/equipment" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "경력관리";

const CareerClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("회원");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_01}
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
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              회원 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"사업안내"} />
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

        <section className="py-[20px] px-[20px] md:px-0 md:pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ul className="flex md:hidden flex-wrap w-full py-[20px] px-[40px] text-[15px]">
            <li className="w-1/2 cursor-default">
              <Link passHref href={"/business/member/join"}>
                <div className="h-12 border border-b-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 회원가입</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/rule/"}>
                <div className="h-12 border border-gray-200 border-b-0 border-l-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                  <span> 회원회칙</span>
                </div>
              </Link>
            </li>
            <li className="w-1/2">
                <div className="h-12 border border-secondary flex flex-col justify-center items-center cursor-default">
                    <span> 경력관리</span>
                </div>
            </li>
            <li className="w-1/2">
              <Link passHref href={"/business/member/careercard/"}>
                <div className="h-12 border border-l-0 border-gray-200 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 경력수첩</span>
                </div>
              </Link>
            </li>
          </ul>
          <ContentSubTitle title="가입대상" />
          <span className="mb-[40px]">협회회원으로 가입된 사람</span>
          <ContentSubTitle title="경력신고 절차" />
          <Image src={PicCareer_1} alt="Picture" className="hidden md:block mt-8"/>
          <Image src={PicCareer_1_M} alt="Picture" className="md:hidden mx-auto"/>
          <ContentSubTitle title="경력 증명서 발급절차" />
          <Image src={PicCareer_2} alt="Picture" className="hidden md:block w-full mt-8"/>
          <Image src={PicCareer_2_M} alt="Picture" className="md:hidden mx-auto mb-7 md:mb-0"/>
          <ContentSubTitle title="경력신고 및 제출 서류, 비용" />
          {/* <Image src={PicCareer_3} alt="Picture" className="px-[20px]" /> */}
          <div className="w-full pb-[15px] mt-[30px] mb-[40px]">
            <div className="md:flex md:justify-between">
              <div className="flex flex-col md:items-center md:w-[48%] mt-8">
                <span className=" text-primary text-base md:text-black md:mb-4">
                  최초 경력신고
                </span>
                <div className="w-full pt-[2px] flex justify-start items-end text-base mb-[5px] md:border-2 md:border-lightgray md:p-5">
                  안전관리자 자격 및 경력사항 등 안전관리 경력에 필요한 사항을 최초로 신고하는 것
                </div>
              </div>
              <div className="flex flex-col md:items-center md:w-[48%] mt-8">
                <span className="text-primary text-base md:text-black md:mb-4">
                  경력변경 신고
                </span>
                <div className="w-full pt-[2px] flex justify-start items-end text-base mb-[5px] md:border-2 md:border-lightgray md:p-5">
                  경력관리에 필요한 사항을 최초로 신고한 이후 근무처·학력·자격 또는 경력 등의 변경 사항을 신고하는 것
                </div>
              </div>
            </div>
            <div className="md:flex md:justify-between mt-8">
              <div className="flex flex-col md:items-center md:w-[48%]">
                <span className=" text-primary text-base md:text-black md:mb-4">
                  경력신고시 제출서류
                </span>
                <div className="w-full pt-[2px] text-base mb-[5px] md:border-2 md:border-lightgray md:p-5">
                  <li className="list-none">
                    · 협회양식의 안전관리 경력신고서(신규, 변경)
                  </li>
                  <li className="list-none">
                    · 재직(경력)증명서 : 안전관리업무내용 표기
                  </li>
                  <li className="list-none">
                    · 국민연금 가입(자격 및 취득 상실) 증명서
                  </li>
                  <li className="list-none">
                    · 국가기술자격증 사본
                  </li>
                  <li className="list-none">
                    · 안전관리자 선임 등 보고서
                  </li>
                  <li className="list-none">
                    · 최종학력(졸업)증명서
                  </li>
                  <li className="list-none">
                    · 교육훈련이수(실시,수료)확인서 사본 : 필요시
                  </li>
                </div>
              </div>
              <div className="flex flex-col md:items-center md:w-[48%] mt-8 md:mt-0">
                <span className="text-primary text-base md:text-black md:mb-4">
                  경력변경 신고
                </span>
                <div className="w-full pt-[2px] text-base mb-[5px] md:border-2 md:border-lightgray md:p-5">
                  <li className="list-none">
                    · 경력 변경신고서
                  </li>
                  <li className="list-none">
                    · 재직(경력)증명서 : 안전관리업무내용 표기
                  </li>
                  <li className="list-none">
                    · 국민연금 가입(자격 및 취득 상실) 증명서
                  </li>
                  <li className="list-none">
                    · 경력 변경 사항에 대하여 증명할 수 있는 서류
                  </li>
                </div>
              </div>
            </div>
            <div className="md:flex md:justify-between mt-8">
              <div className="flex flex-col md:items-center md:w-[48%]">
                <span className=" text-primary text-base md:text-black md:mb-4">
                  경력신고시 제출서류
                </span>
                <div className="w-full pt-[2px] text-base mb-[5px] md:border-2 md:border-lightgray md:p-5">
                  <li className="list-none">
                    · 최초 및 변경신고, 경력증명 발급 비용 무료
                  </li>
                  <li className="list-none">
                    · 회원서비스국 발급 요청 시 발급 절차 진행 후 전자우편 발송
                  </li>
                </div>
              </div>
            
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};
export default CareerClient;
