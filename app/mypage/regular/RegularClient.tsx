"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import ContentSubTitle from "@/components/content/subtitle";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import download_icon from "@/public/img/icon/download_icon.png";
import download_icon_white from "@/public/img/icon/download_icon_white.png";
import regular_member_1 from "@/public/img/icon/regular_member_1.png";
import regular_member_2 from "@/public/img/icon/regular_member_2.png";
import regular_member_3 from "@/public/img/icon/regular_member_3.png";

// Image

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
      { title: "회비 관리", url: "/mypage/payment/management" },
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

const location = "정회원 가입";

interface RegularClientProps {
  currentUser: any;
}

const RegularClient: React.FC<RegularClientProps> = ({ currentUser }) => {
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

  const handleDownload = () => {
    const url = '/download/admission.hwp';
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
        link.setAttribute('download', '입회원서-신규.hwp');
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch(error => {
        console.error("에러가 발생:", error);
      });
  };    

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <ContentSubTitle title="가입 의의" />
          <div className="text-black w-full flex flex-col justify-center item-center">
            <div className="w-full md:h-28 border border-[#ccc] flex justify-center items-center px-10 py-5 md:py-0 m-auto mb-10">
              <p className="">
                회원의 권익보호와 회원 상호간의 기술·정보 교류의 장을 마련하고,
                최신 안전기술정보 제공 및 상담 등 다양한 활동을 통해 회원의
                직무능력 향상에 기여하고 있습니다.
              </p>
            </div>

            <ContentSubTitle title="가입대상" />
            <ul className="w-full mb-9 text-start text-[18px]">
              <div className="w-full flex justify-between mb-5">
                <li className="flex items-center justify-center w-1/2 h-24 border border-[#ccc] mr-8">
                  안전보건<br className="md:hidden"/>
                  관리책임자
                </li>
                <li className="flex items-center justify-center w-1/2 h-24 border border-[#ccc]">
                  관리감독자
                </li>
              </div>
              <div className="w-full flex justify-between my-5">
                <li className="flex items-center justify-center w-1/2 h-24 border border-[#ccc] mr-8">
                  안전관리자
                </li>
                <li className="flex items-center justify-center w-1/2 h-24 border border-[#ccc]">
                  안전보건<br className="md:hidden"/>
                  관리담당자
                </li>
              </div>
            </ul>

            <ContentSubTitle title="정회원 혜택" />
            <ul className="-translate-y-[20px] text-[15px] mb-16 w-full">
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 md:h-[150px] p-4 md:p-0 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      01
                    </div>
                    <p className="ml-6 md:ml-3 w-7/8">
                      회원의 안전관리업무를 지원하기 위해 고용노동부<br/>
                      정책방향 등 최신정보 전달을 위한 안전세미나 실시<br/>
                      (전국 지역본부 또는 지회에서 개별 실기)
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 md:h-[150px] p-4 md:p-0 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      02
                    </div>
                    <p className="ml-12 md:ml-3 w-7/8">
                      각종 안전기술 정보 및 자료제공<br/>
                      - 안전기술, 안전교육교안(sheet), 안전가이드 등<br/>
                        정기간행물 지급<br/>
                      -기타 산업안전보건법령집, 안전보건표지, 업무용 수첩,<br/>
                        각종 안전관련 자료 제공
                    </p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 md:h-28 p-4 md:p-0 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      03
                    </div>
                    <p className="ml-6 md:ml-3 w-7/8">안전관리 활동의 지원 및 상담</p>
                  </div>
                  <div className="w-full md:w-1/2 md:h-28 p-4 md:p-0 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      04
                    </div>
                    <p className="ml-6 md:ml-3 w-7/8">
                      국내 산업안전관리 우수업체 시찰
                    </p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 md:h-28 p-4 md:p-0 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      05
                    </div>
                    <p className="ml-12 md:ml-3 w-7/8">
                      회원 상호간의 기술, 정보교류 및 친목 도모 행사 개최 <br className="hidden md:inline"/>
                      산업안전보건강조주간에 개최되는 행사, 신년회, <br className="hidden md:inline"/>
                      산재예방결의대회, 안전세미나 및 워크숍, 산업시찰, 체육대회 등
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-28 p-4 md:p-0 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      06
                    </div>
                    <p className="ml-6 md:ml-3 w-7/8">
                      각종 산업안전관련 행사 우선 초청
                    </p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-28 p-4 md:p-0 border border-[#ccc] flex items-center mr-8">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      07
                    </div>
                    <p className="ml-6 md:ml-3 w-7/8">
                      산업재해예방에 기여한 우수회원 표창
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-28 p-4 md:p-0 border border-[#ccc] flex items-center mt-5 md:mt-0">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      08
                    </div>
                    <p className="ml-6 md:ml-3 w-[80%]">
                      안전관리 경력관리 (경력관리 신청시)
                    </p>
                  </div>
                </li>
                <li className="w-full md:flex justify-between my-5">
                  <div className="w-full md:w-1/2 h-28 p-4 md:p-0 border border-[#ccc] flex items-center md:mr-8">
                    <div className="w-16 h-16 flex justify-start md:justify-center items-center text-[30px] text-[#ccc] font-bold ml-4">
                      09
                    </div>
                    <p className="ml-6 md:ml-3 w-7/8">
                      SNS 운영 (네이버 밴드)<br/>
                      최신 안전보건 정보 제공 및 회원 상호간 정보교류의 장 마련
                    </p>
                  </div>
                  <div className="hidden md:w-1/2 h-24 md:flex items-center">
                    &nbsp;
                  </div>
                </li>
              </ul>
            <ContentSubTitle title="정회원 가입절차" />
            <ul className="flex flex-col md:flex-row w-full items-center justify-between mb-9 md:mb-0 border border-[#ccc] px-3 py-5 md:py-0">
              <li className="w-3/4 md:w-1/4">
                <div className="md:h-32 flex justify-between items-center py-6 md:py-0">
                  <div className="w-5/12 h-full flex justify-center items-center">
                    <Image
                      src={regular_member_1}
                      alt="원서작성_아이콘"
                      className="w-16"
                    ></Image>
                  </div>
                  <div className="w-7/12">
                    <p>
                      입회원서 작성
                      <br />
                      (홈페이지 다운로드)
                    </p>
                  </div>
                </div>
                {/* <p className="text-[12px] text-center mt-3">
                  입회원서를 다운로드하여 가입정보를 작성
                </p> */}
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
                    ></Image>
                  </div>
                  <div className="w-7/12">
                    <p>
                      메일 전송<br/>
                      kecex@kecex.or.kr
                    </p>
                  </div>
                </div>
                {/* <p className="text-[12px] text-center mt-3">
                  협회 주소록을 참조하여 입회원서 및 <br />
                  사업자등록증을 관할 지역본부
                  <br />
                  또는 지회에 팩스 송부 후 연락
                </p> */}
              </li>
              <li className="leading-[150px] hidden md:inline-block text-[24px] font-medium text-[#3A3A3A]">{`>`}</li>
              <li className="py-6 md:hidden text-center">{`↓`}</li>
              <li className="w-3/4 md:w-1/4">
                <div className="md:h-32 flex justify-between items-center py-6 md:py-0">
                  <div className="w-5/12 h-full flex justify-center items-center">
                    <Image
                      src={regular_member_3}
                      alt="입회처리_아이콘"
                      className="w-16"
                    ></Image>
                  </div>
                  <div className="w-7/12">
                    <p>
                      입회처리
                      <br className="md:hidden"/>
                      (회비 청구)
                    </p>
                  </div>
                </div>
                {/* <p className="text-[12px] text-center mt-3">
                  입회처리 후 {`'Welcome'`} 문자 전송
                  <br />* 회비 청구시 지로(GIRO) 우편 발송
                </p> */}
              </li>
            </ul>
            {/* <div className="w-full h-20 bg-gray-100 flex justify-center items-center my-10">
              *가입비용 : 연 360,000원(월 30,000원)
            </div> */}
            <ContentSubTitle title="정회원의 권한" />
            <p>
              총회에서 선거권, 피선거권 및 의결권 부여 (일반회원은 선거권,
              피선거권 및 의결권을 제한함)
            </p>

            <div className="btn_box flex m-auto mt-20 w-full">
              <button className="w-1/2 md:w-44 h-14 bg-secondary text-white flex justify-center items-center"
              onClick={handleDownload}
              >
                입회원서 다운로드{" "}
                <Image
                  src={download_icon_white}
                  className="w-4 h-4 ml-2 text-white"
                  alt="img"
                />{" "}
              </button>
            </div>
            {/*btn_box*/}
          </div>
        </section>
      </main>
    </section>
  );
};

export default RegularClient;
