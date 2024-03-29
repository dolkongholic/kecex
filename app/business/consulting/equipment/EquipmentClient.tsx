"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

// Image
import PicCircle from "@/public/img/icon/content_icon_arrow.png";
import PicConsulting from "@/public/img/pages/business/consulting.png";
import PicBusiness_03 from "@/public/img/page_top/business_03.jpg"

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
      { title: "산업진단, 컨설팅", url: "/business/consulting/industry" },
    ],
  },
];

const location = "방폭기기선정";

const EquipmentClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("컨설팅");

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicBusiness_03}
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
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              컨설팅 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-[1400px] flex justify-between items-start m-auto">
        <section className="flex flex-col justify-start items-center">
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} />
          <ContentSubTitle title="관련법령" />
          <div className="w-full px-[20px] mb-[40px]">
            <div className="flex flex-col justify-center items-start h-[80px] px-[20px] border border-gray w-full">
              <span>
                · 산업안전보건기준에 관한 규칙 제 311조 (폭발위험장소에서
                사용하는 전기 기계·기구의 선정 등)
              </span>
            </div>
          </div>

          <ContentSubTitle title="컨설팅 목적" />
          <div className="w-full px-[20px] mb-[40px]">
            <div className="flex flex-col justify-center items-start h-[80px] px-[20px] border border-gray w-full">
              <span>
                국가기술표준 KS C IEC 60079-14에 따라 폭발 위험장소에 설치되는
                전기기기 및 배선의 선정 적합성 검토
              </span>
            </div>
          </div>

          <ContentSubTitle title="컨설팅 대상" />
          <div className="w-full px-[20px] mb-[40px]">
            <div className="flex flex-col justify-center items-start h-[80px] px-[20px] border border-gray w-full">
              <span>
                산업안전보건기준에 관한 규칙 제 230조 1항 1,2에 따라 인화성
                액체의 증기나 인화성 가스 등을 제조·취급 또는 사용하는 사업장
                또는 인화성 고체를 제조·사용하는 사업장
              </span>
            </div>
          </div>

          <ContentSubTitle title="컨설팅 범위" />
          <div className="w-full px-[20px] mb-[40px] flex flex-col">
            <span className="text-subtitle mb-[10px] text-black">
              폭발성 분위기에서 사용하는 방폭구조 전기기계·기구 및 부품으로서
              다음 중 어느 하나에 해당하는것
            </span>
            <div className="w-full flex justify-start items-center">
              <span className="flex text-base justify-start items-start">
                <Image
                  src={PicCircle}
                  width={20}
                  height={10}
                  alt="icon"
                  className="pt-[4px] mr-[5px]"
                />{" "}
                육안 : 접근 기기 또는 도구를 사용하지 않고 육안으로 명백히 알 수
                있는, 볼트 분실과 같은 결함을 식별 하는 검사
              </span>
            </div>
            <div className="w-full flex justify-start items-center my-[10px]">
              <span className="flex text-base justify-start items-start">
                <Image
                  src={PicCircle}
                  width={20}
                  height={20}
                  alt="icon"
                  className="pt-[4px] mr-[5px]"
                />{" "}
                근접 : 육안 검사의 대상 요소를 포함하며, 추가적으로 적합한
                도구를 사용하여 볼트 풀림과 같은 결함을 파악하는 검사
              </span>
            </div>
            <div className="w-full flex justify-start items-center">
              <span className="flex text-base justify-start items-start">
                <Image
                  src={PicCircle}
                  width={20}
                  height={20}
                  alt="icon"
                  className="pt-[4px] mr-[5px]"
                />{" "}
                정밀 : 근접 검사의 대상 요소를 포함하며, 추가적으로 용기 개방
                또는 필요할 경우 도구 및 시험 기기를 사용해야 명확하게 파악할 수
                있는 단자 풀림과 같은 결함을 식별하는 검사
              </span>
            </div>
          </div>

          <div className="w-full px-[20px] mb-[40px] flex flex-col">
            <span className="text-subtitle mb-[10px] text-black">
              | 검사 유형별
            </span>
            <div className="w-full flex justify-start items-center">
              <span className="flex text-base justify-start items-start">
                <Image
                  src={PicCircle}
                  width={20}
                  height={10}
                  alt="icon"
                  className="pt-[4px] mr-[5px]"
                />{" "}
                최초 : 전기설비를 사용하기 전에 해당 기기, 시스템 및 설치에 대해
                실시하는 검사
              </span>
            </div>
            <div className="w-full flex justify-start items-center my-[10px]">
              <span className="flex text-base justify-start items-start">
                <Image
                  src={PicCircle}
                  width={20}
                  height={20}
                  alt="icon"
                  className="pt-[4px] mr-[5px]"
                />{" "}
                표본 : 전기기기, 시스템 및 설치를 대표할 수 있는 비율을 정해
                실시하는 검사
              </span>
            </div>
            <div className="w-full flex justify-start items-center">
              <span className="flex text-base justify-start items-start">
                <Image
                  src={PicCircle}
                  width={20}
                  height={20}
                  alt="icon"
                  className="pt-[4px] mr-[5px]"
                />{" "}
                정기 : 일상적으로 수행하는 모든 전기기기, 시스템 및 설치에 대한
                검사
              </span>
            </div>
          </div>

          <ContentSubTitle title="컨설팅 절차" />
          <Image src={PicConsulting} alt="Pic" />
        </section>
      </main>
    </section>
  );
};

export default EquipmentClient;
