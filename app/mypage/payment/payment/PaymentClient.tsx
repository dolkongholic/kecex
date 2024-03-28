"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";


// Image



const location = "회비 납부";
interface PaymentProps {
  currentUser: any;
}
const PaymentClient: React.FC<PaymentProps> = ({ currentUser }) =>{
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
          <article className="w-full">
            <ContentSubTitle title="회비 납부 목적" />
            <div className="border border-[#ccc] p-5 leading-7 text-[15px]">
            사단법인 한국방폭협회는 방폭 교육 및 설계, 시공, 감리 및 인증 서비스 등에 대한 기술개발 및 관리유지 능력을 향상시켜 방폭산업에 건전한 발전과 사업육성을
            도모하고, 국민의 생명 및 재산의 보호에 기여하기 위해 설립된 전문가단체입니다.
            납부한 회비는 협회의 비전과 목표 달성을 위한 사업 및 활동에 소중하게 사용됩니다. 사단법인 한국방폭협회가 회원 여러분과 함께 활동할 수 있도록 애정어린
            관심과 지원을 부탁드립니다.
            </div>

            <ContentSubTitle title="주요 안내 사항" />
            <div className="border border-[#ccc] p-5 leading-7 text-[15px]">
            · 연회비는 당해연도 3월 말까지 납부를 원칙으로 하며 소급 납부는 불가합니다.<br/>
              &nbsp;&nbsp; 예{`)`} 2024년에 2023년을 포함한 이전 연회비를 납부할 수 없습니다.<br/>
            · 연회비에 대한 문의는 사단법인 한국방폭협회 사무처{`(TEL : 052 929 2848)`}로 문의 주시기 바랍니다.
            </div>

            <ContentSubTitle title="회비 납부 방법" />
            <div className="border-t-2 border-[#3A3A3A]">
              <ul>
                <li className="w-full flex justify-between border-b border-[#ccc]">
                  <div className="w-1/6 bg-lightgray p-5 text-primary font-semibold border-r border-[#ccc]">
                    신용카드
                  </div>
                  <div className="w-5/6 p-5">
                  ??<br/>
                  경남은행 207-0156-8973-02<br/>
                  예금주 : 박종훈(한국방폭협회 공동회장 박종훈)
                  </div>
                </li>
                <li className="w-full flex justify-between border-b border-[#ccc]">
                  <div className="w-1/6 bg-lightgray p-5 text-primary font-semibold border-r border-[#ccc]">
                    계좌이체
                  </div>
                  <div className="w-5/6 p-5">
                  경남은행 207-0156-8973-02<br/>
                  예금주 : 박종훈(한국방폭협회 공동회장 박종훈)
                  </div>
                </li>
                <li className="w-full flex justify-between border-b border-[#ccc]">
                  <div className="w-1/6 bg-lightgray p-5 text-primary font-semibold border-r border-[#ccc]">
                    가상계좌
                  </div>
                  <div className="w-5/6 p-5">
                  경남은행 207-0156-8973-02<br/>
                  예금주 : 박종훈(한국방폭협회 공동회장 박종훈)<br/>
                  ※ 본인 확인을 위해 입금자명은 {`'`}성명+주민번호 앞6자리{`'`}로 하시거나, 이메일이나 전화로 입금사실을 말씀해주세요.
                  </div>
                </li>
              </ul>
            </div>
          </article>
          <ContentSubTitle title="회비 납부 금액" />
          <div className="text-neutral-800 w-full flex flex-col justify-center item-center">
            <div className="w-full flex justify-end mx-auto">
              <p className="text-[13px]">단위 : 만원</p>
            </div>
            <table className="w-full border-t-2 border-neutral-700 m-auto text-center">
              <tr className="border-b border-secondary h-14 bg-lightgray text-primary">
                <th className="border-r border-gray-400 w-1/4 md:w-48">
                  구분
                </th>
                <td className="border-r border-gray-400 w-1/4 md:w-48 font-semibold">
                  가입비
                </td>
                <td className="border-r border-gray-400 w-1/4 md:w-48 font-semibold">
                  연회비
                </td>
                <td className="font-semibold">
                  비고
                </td>
              </tr>
              <tr className="border-b border-gray-300 h-14">
                <th className="border-r border-gray-300 font-medium">
                  일반회원
                </th>
                <td className="border-r border-gray-300 w-1/4 md:w-48 text-[18px]">
                  2
                </td>
                <td className="border-r border-gray-300 w-1/4 md:w-48 text-[18px]">
                  3
                </td>
              </tr>
              <tr className="h-14">
                <th className="border-r border-b border-gray-300 font-medium">
                  정회원
                </th>
                <td className="border-r border-gray-300 w-1/4 md:w-48">
                  &nbsp;
                </td>
                <td className="border-r border-b border-gray-300 w-1/4 md:w-48 text-[18px]">
                  12
                </td>
              </tr>
              <tr className="h-14">
                <th className="border-r border-b border-gray-300 font-medium">
                  운영위원
                </th>
                <td className="border-r border-gray-300 w-1/4 md:w-48 text-[18px]">
                  10
                </td>
                <td className="border-r border-b border-gray-300 w-1/4 md:w-48 text-[18px]">
                  20
                </td>
              </tr>
              <tr className="border-b border-gray-300 h-14">
                <th className="border-r border-gray-300 font-medium">
                  임원
                </th>
                <td className="border-r border-gray-300 w-1/4 md:w-48">
                &nbsp;
                </td>
                <td className="border-r border-gray-300 w-1/4 md:w-48 text-[18px]">
                  30
                </td>
              </tr>
              <tr className="h-14 border-b-2 border-gray-400">
                <th className="border-r border-gray-300 font-medium">
                  기업회원
                </th>
                <td className="border-r border-gray-300 w-1/4 md:w-48 text-[18px]">
                  100
                </td>
                <td className="border-r border-gray-300 w-1/4 md:w-48 text-[18px]">
                  50
                </td>
                <td className="text-[13px]">
                  50인 이하,<br/>
                  매출액에 따른 차등
                  </td>
              </tr>
            </table>
            <div className="mx-auto flex">
              <button className="mt-16 w-32 h-12 border border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200">
                납부하기
              </button>
              <button className="mt-16 w-44 h-12 border border-primary ml-12 hover:bg-primary hover:text-white transition-all duration-200">
                입금확인 요청하기
              </button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PaymentClient;
