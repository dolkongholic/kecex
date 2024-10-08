"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";
import Link from "next/link";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

// Image
import PicBusiness_03 from "@/public/img/page_top/business_03.jpg"
import content_icon from "@/public/img/icon/content_icon_circle.png";
import PicIndustry from "@/public/img/pages/business/consulting_industry.png";
import PicIndustry_M from "@/public/img/pages/business/consulting_industry_m.png";

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
      { title: "방폭교육 과정", url: "/business/education/course01" },
      { title: "산업안전 교육", url: "/business/education/course02" },
      { title: "위험성 평가 교육", url: "/business/education/course03" },
      { title: "정량적위험성평가 교육", url: "/business/education/course04" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      { title: "PSM", url: "/business/consulting/psm" },
      { title: "중대재해처벌법", url: "/business/consulting/sapa" },
      { title: "위험성 평가", url: "/business/consulting/danger" },
    ],
  },
];

const location = "위험성 평가";

const DangerClient = () => {
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
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              사업안내 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              컨설팅 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          {/*위험성 평가 */}
          <ContentTitle title={location} />
            <ul className="flex md:hidden flex-wrap w-full py-[20px] text-[15px]">
              <li className="w-1/2 cursor-default">
                <Link passHref href={"/business/consulting/inspection/"}>
                  <div className="h-12 border border-gray-200 border-r-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 방폭사전진단</span>
                  </div>
                </Link>
              </li>
              <li className="w-1/2">
                <Link passHref href={"/business/consulting/psm/"}>
                  <div className="h-12 border border-gray-200 border-b-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium ">
                    <span> PSM</span>
                  </div>
                </Link>
              </li>
              <li className="w-1/2">
                <Link passHref href={"/business/consulting/sapa/"}>
                  <div className="h-12 border border-t-0 flex flex-col justify-center items-center hover:text-secondary hover:font-medium">
                    <span> 중대재해처벌법</span>
                  </div>
                </Link>
              </li>
              <li className="w-1/2">
                  <div className="h-12 border border-secondary  flex flex-col justify-center items-center cursor-default">
                    <span> 위험성 평가</span>
                  </div>
              </li>
            </ul>
              <ContentSubTitle title="위험성평가 실시" />
              <div className="flex justify-between mb-10">
                <div className="w-full border border-[#ccc] text-center p-4 md:p-8">
                  <p className="text-left leading-7 text-[15px] md:text-base">
                    산업안전보건법 제36조에 의거 사업주는 건설물,
                    기계·기구·설비, 원재료, 가스, 증기, 분진, 근로자의 작업행동
                    또는 그 밖의 업무로 인한 유해·위험 요인을 찾아내어 부상 및
                    질병으로 이어질 수 있는 <b>위험성의 크기가 허용 가능한
                    범위인지</b>를 평가하여야 하고, 그 결과에 따라 관계법령에 의한
                    조치와 더불어 근로자에 대한 위험 또는 건강장해를 방지하기
                    위하여 필요한 경우 <b>추가적인 조치</b>를 하여야 하며, 위험성평가를
                    실시한 경우에는 평가의 결과와 조치사항을 기록·보존하도록
                    되어 있습니다.
                  </p>
                </div>
              </div>
              <ContentSubTitle title="위험성평가 절차" />
              <div className="w-full justify-center mb-10 font-medium text-center text-[14px] md:text-base">
                {/* <Image src={PicIndustry} alt="위험성평가 절차 이미지" className="md:block w-full"/> */}
                {/* <Image src={PicIndustry_M} alt="위험성평가 절차 이미지" className="md:hidden w-full"/> */}
                <ul className="w-full md:flex items-center justify-between md:px-5 pt-5">
                  <div className="w-full flex justify-between items-center">
                    <li className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-secondary rounded-full text-white flex justify-center items-center">
                      시작
                    </li>
                    <li><RiArrowRightSLine className="text-[40px] pt-[3px] -translate-y-[3px] text-[#aaa]" /></li>
                    <li className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-secondary rounded-full text-white flex justify-center items-center">
                      대상 선정<br/>사전 준비
                      </li>
                    <li><RiArrowRightSLine className="text-[40px] pt-[3px] -translate-y-[3px] text-[#aaa]" /></li>
                    <li className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] border-2 border-secondary rounded-full flex justify-center items-center font-semibold">
                      유해·위험<br/>요인 파악
                    </li>
                  </div>
                  <li><RiArrowRightSLine className="text-[40px] pt-[3px] md:-translate-y-[3px] text-[#aaa] float-right md:float-none rotate-90 md:rotate-0 -translate-x-3 md:translate-x-0 mx-3" /></li>
                  <div className="w-full flex-row-reverse flex md:flex-row justify-between items-center">
                    <li className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] border-2 border-secondary rounded-full flex justify-center items-center font-semibold">
                      위험성 결정
                    </li>
                    <li className="">
                      <RiArrowRightSLine className="text-[40px] pt-[3px] -translate-y-[3px] text-[#aaa] rotate-180 md:rotate-0" />
                    </li>
                    <li className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-[#073E66] rounded-full text-white flex justify-center items-center pt-2">
                      허용가능<br/> 여부
                    </li>
                    <li className="relative before:content-['YES'] before:text-secondary font-semibold md:text-[20px] before:absolute before:-top-8 before:left-2 md:before:left-0">
                      <RiArrowRightSLine className="text-[40px] pt-[3px] -translate-y-[3px] text-[#aaa] rotate-180 md:rotate-0" />
                      </li>
                    <li className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-[#073E66] rounded-full text-white flex justify-center items-center">
                      종료
                    </li>
                  </div>
                </ul>
                <div className="w-full flex md:block items-center justify-center">
                  <div className="w-[150px] md:w-[240px] flex flex-col items-center md:ml-[755px]">
                    <p className="md:text-[20px] font-semibold text-[#aaa] mt-3">
                      NO
                    </p>
                    <p><RiArrowRightSLine className="text-[40px] pt-[3px] -translate-y-[4px] translate-x-[1px] text-[#aaa] rotate-90" /></p>
                    <p className="w-full h-16 border-2 border-secondary flex justify-center items-center font-semibold">
                      위험성 감소대책 <br className="md:hidden"/> 수립·실행
                      </p>
                  </div>
                </div>
              </div>
              <ContentSubTitle title="위험성평가 실시 시기" />
              <div className="w-full mb-10">
                <table className="w-full text-center border-t-2 border-secondary">
                  <tr className="w-full h-14 border-b-2 border-gray bg-lightgray">
                    <th className="w-1/6 md:w-1/5 border-r border-gray">구분</th>
                    <th className="">실시 시기</th>
                  </tr>
                  <tr className="h-16 border-b border-gray">
                    <td className="w-1/6 md:w-1/5 border-r border-gray">
                      최초<br className="md:hidden"/>
                      평가
                    </td>
                    <td className="text-left pl-6 text-[15px] md:text-base">
                      사업이 성립된 날로 부터 1개월이 되는 날 까지 착수(1개월 미만 공사는 공사 개시 후 실시)
                    </td>
                  </tr>
                  <tr className="h-16 border-b border-gray">
                    <td className="w-1/6 md:w-1/5 border-r border-gray">
                      정기<br className="md:hidden"/>
                      평가
                    </td>
                    <td className="text-left pl-6 text-[15px] md:text-base">
                      위험성평가의 결과에 대한 적정성을 1년마다 정기적으로 재검토<br/>
                      재검토 결과 허용 가능한 위험성 수준이 아니라고 검토된 유해·위험요인에 대해서는 위험성 감소대책을 수립하여 실행
                    </td>
                  </tr>
                  <tr className="border-b-2 border-gray">
                    <td className="w-1/6 md:w-1/5 border-r border-gray">
                      수시<br className="md:hidden"/>
                      평가
                    </td>
                    <td className="text-left p-6 space-y-1 text-[15px] md:text-base">
                      <p>· 사업장 건설물의 설치·이전·변경 또는 해체</p>
                      <p>· 기계·기구, 설비, 원재료 등의 신규 도입 또는 변경</p>
                      <p>· 건설물, 기계·기구, 설비 등의 정비 또는 보수</p>
                      <p>· 작업방법 또는 작업절차의 신규 도입 또는 변경</p>
                      <p>· 중대산업사고 또는 산업재해 발생</p>
                      <p className="leading-3">
                        &nbsp;&nbsp;&nbsp;(휴업 이상의 요양을 요하는 경우에
                        한정)
                      </p>
                      <p className="mt-2">
                        · 그 밖에 사업주가 필요하다고 판단한 경우
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
              <ContentSubTitle title="위험성평가 컨설팅 절차" />
              <div className="w-full flex">
                <div className="hidden md:block w-[50px] relative">
                  <div className="w-full h-full">
                    <div className="flex h-[630px]">
                      <div className="w-1/5">&nbsp;</div>
                      <div className="w-4/5 h-[612px] bg-gradient-to-b from-secondary to-[#60B86F]">
                        &nbsp;
                      </div>
                    </div>
                    <div className="w-full h-[50px] relative">
                      <IoMdArrowDropdown className="w-28 h-[190px] absolute -bottom-10 -left-[25.5px] text-[#60B86F]" />
                    </div>
                    {/* 화살표 삼각형 */}
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white -top-[10px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1 pl-1">
                    01
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white top-[120px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1">
                    02
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white top-[285px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1">
                    03
                  </div>
                  <div className="absolute w-[75px] h-[75px] bg-white top-[475px] -left-[8px] border rounded-full flex justify-center items-center text-[30px] font-medium pt-1">
                    04
                  </div>
                </div>
                <ul className="w-full md:w-[1100px] text-[15px] md:text-base">
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      사전준비
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          컨설팅 범위 및 세부일정 협의
                        </strong>
                      </div>
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          컨설팅 일정 확정 및 공정 파악
                        </strong>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      서류검토
                    </div>
                    <div className="w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          위험성평가 컨설팅팀 구성
                        </strong>
                      </div>
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          위험성평가 실시규정 수립을 위한 서류검토
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 평가에 필요한 안전·보건 정보 수집
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      현장안전점검
                    </div>
                    <div className=" w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          컨설팅팀 현장점검
                        </strong>
                        <p className="text pl-2 mt-2">
                          · 작업과 관계되는 유해·위험 요인 파악 및 위험성 추정
                        </p>
                        <p className="text pl-2 mt-1">
                          · 허용 가능한 위험성 기준과 비교하여 위험성 결정
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-full h-14 bg-lightgray font-medium text-[20px] flex items-center pl-3 md:pl-8 border-b border-secondary">
                      보고서 작성·제출
                    </div>
                    <div className="border-b border-[#ccc] w-full px-0 md:px-6 py-6 md:flex">
                      <div className="md:w-1/2">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          현장에 적용 가능한 개선대책 제시
                        </strong>
                      </div>
                      <div className="md:w-1/2 mt-2 md:mt-0 pb-6">
                        <strong className="text-[17px] md:text-[18px] font-medium text-neutral-800">
                          <Image
                            src={content_icon}
                            className="w-5 inline-block"
                            alt="텍스트 강조"
                          />
                          위험성평가 결과에 대한 종합 보고서 제출
                        </strong>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ContentSubTitle title="위험성평가 컨설팅 수행 업무" />
              <ul className="-translate-y-[20px] text-[15px] mb-5 w-full">
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      01
                    </div>
                    <p className="ml-3">위험성평가의 실시방법·절차 지원</p>
                  </div>
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      02
                    </div>
                    <p className="ml-3">신청방법 및 심사방법 지원</p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-24 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      03
                    </div>
                    <p className="ml-3">교육·컨설팅 지원</p>
                  </div>
                  <div className="md:w-1/2 h-24 hidden md:block">
                    &nbsp;        
                  </div>
                </li>
              </ul>
        </section>
      </main>
    </section>
  );
};

export default DangerClient;
