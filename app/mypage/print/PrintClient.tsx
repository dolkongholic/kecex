"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import download_icon from "@/public/img/icon/download_icon.png";
import certificate_bg from "@/public/img/pages/print/certificate_background.jpg";
import certificate_expired from "@/public/img/pages/print/certificate_expired.jpg";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import { Gowun_Batang } from "next/font/google";
import { format } from "path";
// Image

const location = "회원증 출력";

interface MyCertProps {
  currentUser?: any;
  paymentList?: any;
}
const Batang = Gowun_Batang({
  weight: ["400","700"],
  subsets: ["latin"],
});

const PrintClient: React.FC<MyCertProps> = ({ currentUser, paymentList }) => {
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string>('');
  useEffect(() => {
    main();
  })

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



  const formatDate = (date:any) => {
    if(!date) return "기간없음";

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const getCurrentDate = () => {
    const today = new Date();
    return formatDate(today);
  };

  const getRecentPaymentDate = async () => {
  // 결제 목록에서 최신 결제일을 찾습니다.
  const recentPayment = paymentList.reduce((recent: any, payment: any) => {
    if (!recent || new Date(payment.requested_at) > new Date(recent.requested_at)) {
      return payment;
    } else {
      return recent;
    }
  }, null);

  if (recentPayment) {
    const paymentDate = new Date(recentPayment.requested_at);
    paymentDate.setMonth(paymentDate.getMonth() + 1);
    return paymentDate;
  }else{
    return null;
  }
  }

  const main = async () => {
    setCurrentDate(getCurrentDate());
    const recentPaymentDate = await getRecentPaymentDate();
    setFormattedDate(formatDate(recentPaymentDate));
  };

  const handleDownloadPDF = () => {
    const content = document.getElementById('content-to-download');
    if (!content) {
      console.error('Content element not found.');
      return;
    }

    html2canvas(content, { scale: 3 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save('한국방폭협회_회원증서.pdf');
    })
    .catch((error) => {
      console.error('PDF 다운로드 에러: ', error);
    });
  }; 

  const handleDownloadJPG = () => {
    const content = document.getElementById('content-to-download');

    if (!content) {
      console.error('다운로드할 파일이 없습니다');
      return;
    }

    html2canvas(content, { scale: 3 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');
        const a = document.createElement('a');
        a.href = imgData;
        a.download = '한국방폭협회_회원증서.jpg'
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })
    .catch((error) => {
      console.error('JPG 다운로드 에러: ', error);
    });
  }; 

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

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-between item-center border-b-secondary border-b-2">
            <div className="h-[40px]">
              본 협회에서 발급된 증서를 출력하실 수 있습니다.
            </div>
          </div>
          <figure className="w-full flex justify-center my-10  font-[batang]">
            <div className="w-[315px] h-[439px] md:w-[620px] md:h-[877px] border border-gray relative" id="content-to-download">
              <Image
                src={certificate_bg}
                className={`absolute left-0 top-0 w-full h-full
                ${currentUser.level === "일반회원" ? 'hidden' : 'block'}
                `}
                alt="img"
              />
              <Image
                src={certificate_expired}
                className={`absolute left-0 top-0 w-full h-full
                ${currentUser.level === "일반회원" ? 'block' : 'hidden'}
                `}
                alt="img"
              />
              <ul className="absolute left-[86px] top-[118px] md:left-[172px] md:top-[240px] z-40 text-black">
                <li className="text-[10px] md:text-[19px] font-bold">
                  <p className=" tracking-widest">{currentUser.koname}</p>
                </li>
                <li className="text-[10px] md:text-[19px] font-bold leading-4 md:leading-7 mt-[2px] md:mt-[9px]">
                  <p className="">울산광역시 중구 종가로 15,<br/> 울산테크노파크 기술혁신동 B동 408호</p>
                </li>
                <li className="text-[10px] md:text-[19px] font-bold mt-[1px] md:mt-[6px]">
                  <p className="tracking-relaxed">{currentUser.id}</p>
                </li>
              </ul>
              <p className="absolute left-[88px] md:left-[173px] top-[265px] md:top-[532px] z-40 text-[6px] md:text-[12px] text-[#898989]">
                {currentUser.level === "일반회원" ? '' : `${currentDate}`}
              </p>
              <p className="absolute left-[176px] md:left-[348px] top-[265px] md:top-[532px] z-40 text-[6px] md:text-[12px] text-[#898989]">
                {currentUser.level === "일반회원" ? '' : `${formattedDate}`}
              </p>
              <div className="absolute left-[108px] md:left-[225px] top-[292px] md:top-[590px] z-40 text-[12px] md:text-[22px] text-black flex font-bold">
                <p>{currentDate.substring(0,4)}</p>
                <p className="ml-[15px] md:ml-[32px]">{currentDate.substring(5,7)}</p>
                <p className="ml-[14px] md:ml-[34px]">{currentDate.substring(8,10)}</p>
              </div>
            </div>
          </figure>

          <div className="btn_box flex m-auto mt-20">
            <button className="w-40 h-14 border border-darkgray text-[#3A3A3A] flex justify-center items-center" onClick={handleDownloadJPG}>
              이미지 다운로드{" "}
              <Image src={download_icon} className="w-4 h-4 ml-2" alt="img" />{" "}
            </button>
            <button className="w-40 h-14 border border-secondary bg-secondary text-white flex justify-center items-center ml-7" onClick={handleDownloadPDF}>
              PDF 출력
            </button>
          </div>
          {/*btn_box*/}
        </section>
      </main>
    </section>
  );
};

export default PrintClient;
