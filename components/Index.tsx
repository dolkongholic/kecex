"use client";
import Slider from "react-slick";
import "@/node_modules/slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import useInsertMainBanner from "@/app/hooks/useInsertMainBanner";
import Notice from "@/components/inputs/Notice";

import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import { SafeUser } from "@/types";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

//image
import PicMdbn from "@/public/img/banner/md_banner_01.png";
import PicOpen from "@/public/img/banner/site_open.png";
import PicCormem from "@/public/img/banner/corporate_member.png";
import PicRemem from "@/public/img/banner/regular_member.png";
import PicPromotion from "@/public/img/banner/promotion.png";
import PicInspection from "@/public/img/banner/inspection.png";
import PicBsn_01 from "@/public/img/icon/main_bsn_01.png";
import PicBsn_02 from "@/public/img/icon/main_bsn_02.png";
import PicBsn_03 from "@/public/img/icon/main_bsn_03.png";
import PicBsn_04 from "@/public/img/icon/main_bsn_04.png";
import Picacrc from "@/public/img/related_site/acrc.png";
import Pichrdkorea from "@/public/img/related_site/hrdkorea.png";
import Pickogas from "@/public/img/related_site/kogas.png";
import Pickosha from "@/public/img/related_site/kosha.png";
import Picksa from "@/public/img/related_site/ksa.png";
import Picmoel from "@/public/img/related_site/moel.png";
import Picnts from "@/public/img/related_site/nts.png";
import PicH2 from "@/public/img/banner/h2_education.png";
import Pickomeri from "@/public/img/related_site/komeri_logo.jpg";
import PicmoelUl from "@/public/img/related_site/moel_ul.png";
import PicUl from "@/public/img/related_site/ul_logo.png";
import PicUc from "@/public/img/related_site/uc_logo.png";
import Picutp from "@/public/img/related_site/UTP_logo.jpg";
import Picuoufic from "@/public/img/related_site/UOUFIC.png";
import Picpolytech from "@/public/img/related_site/uoc_polytech.png";
import Pickrict from "@/public/img/related_site/krict.png";
import Pichankyung from "@/public/img/related_site/hankyung.png";
import download_icon from "@/public/img/icon/download_icon.png";
import download_icon_w from "@/public/img/icon/download_icon_white.png";


interface IndexProps {
  currentUser?: SafeUser | null;
  mainBanner?: any;
  newsList?: any;
  noticeList?: any;
}

const Index: React.FC<IndexProps> = ({
  currentUser,
  mainBanner,
  newsList,
  noticeList,
}) => {
  const router = useRouter();
    const settings = {
      dots: true,
      infinite: true,// 무한 캐러셀
      speed: 500,// 다음 컨텐츠 까지의 속도
      slidesToShow: 1,// 화면에 보이는 컨텐츠 수
      slidesToScroll: 1,// 스크롤 시 넘어가는 컨텐츠 수
      centerPadding: '440px',// 중앙 컨텐츠 padding 값
      autoplay: true, // 자동 캐러셀
      autoplaySpeed: 4000, // 자동 캐러셀 속도
      centerMode: true, // 현재 컨텐츠 가운데 정렬
      initialSlide: 0, // 첫 컨텐츠 번호
      arrows: true, // 좌,우 버튼
      focusOnSelect: true,
      responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '200px',// 중앙 컨텐츠 padding 값
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: '10px',// 중앙 컨텐츠 padding 값
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',// 중앙 컨텐츠 padding 값
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '0px',// 중앙 컨텐츠 padding 값
            }
        }
    ],
    };

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
      <div className="w-full h-[600px] md:h-[460px] overflow-x-hidden">
        <div className="w-full h-[550px] md:h-[440px] z-[50] md:flex justify-center items-center  bg-cover bg-center">
          {/* 모바일 최적화 안내 */}
          <div className="md:hidden w-[90%] h-auto border border-[#ccc] mx-auto text-[13px] text-center p-3 my-3">
            현재 모바일 최적화 진행 중이니 pc로 확인 바랍니다.
          </div>
          <div className="w-full justify-center slider-container">
            {/* 메인 배너 슬라이드 영역 */}
            <Slider {...settings}>
              <div className=" h-[380px] max-w-[1200px]">
                <div className="w-11/12 bg-[#D9ECFF] h-full mx-auto rounded-xl relative text-[#3A3A3A] overflow-hidden">
                  <strong className="absolute  text-[26px] sm:text-[30px] lg:text-[42px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    한국방폭협회 정회원<br/>
                    가입 안내
                  </strong>
                  <p className="absolute text-[14px] sm:text-[16px] lg:text-[17px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-20">
                    가입비 10만원&nbsp;&nbsp;|&nbsp;&nbsp;연회비 12만원<br/>
                    메일 : kecex@kecex.or.kr
                  </p>
                  <Link passHref href={"/business/member/join"}>
                  <button className="absolute border bg-[#D9ECFF] border-[#3A3A3A] w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-semibold hover:bg-[#3A3A3A] hover:text-[#D9ECFF] z-20">
                    자세히 보기
                  </button>
                  </Link>
                  <button
                    className="absolute border bg-[#D9ECFF] border-[#3A3A3A] w-[150px] h-[45px] flex justify-center items-center rounded-full group top-[290px] left-[calc(8%+150px)] font-semibold hover:bg-[#3A3A3A] hover:text-[#D9ECFF] z-20"
                    onClick={handleDownload}
                    >
                      입회 원서
                      <Image src={download_icon} className="w-5 h-5 ml-1 mb-1  group-hover:hidden" alt="img" />{" "}
                      {/* <Image src={download_icon_w} className="w-5 h-5 ml-1 mb-1 hidden group-hover:inline" alt="img" />{" "} */}
                  </button>
                  <Image 
                    src={PicRemem} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto -right-12 lg:right-[1%] bottom-0 z-0"
                  />
                </div>
              </div>
              <div className="h-[380px] max-w-[1200px]">
                <div className="w-11/12 bg-[#FFC743] h-full mx-auto rounded-xl relative text-[#3A3A3A] overflow-hidden">
                  <strong className="absolute text-[26px] sm:text-[30px] lg:text-[42px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    한국방폭협회 공식사이트<br/>
                    정식오픈 안내
                  </strong>
                  <p className="absolute text-[15px] sm:text-[16px] lg:text-[17px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-20">
                    사단법인 한국방폭협회는 방폭산업의 건전한 발전을<br/>
                    위해 설립되었습니다.
                  </p>
                  <button className="absolute bg-[#FFC743] border border-[#3A3A3A] w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-semibold hover:bg-[#3A3A3A] hover:text-[#FFC743] z-20">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicOpen} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[240px] w-auto -right-16 sm:right-0 lg:right-[2%] bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px] max-w-[1200px]">
                <div className="w-11/12 bg-[#36609F] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                  <strong className="absolute  text-[26px] sm:text-[30px] lg:text-[42px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    수소시스템 안전 기본원리<br/>
                    과정 개설
                  </strong>
                  <p className="absolute text-[15px] sm:text-[16px] lg:text-[17px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-20">
                    신규 개설된 IECEx CoPC Unit 011<br/>
                    과정에 대해 알아보세요.
                  </p>
                  <button className="absolute bg-[#36609F] border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-semibold hover:bg-white hover:text-[#36609F] z-20">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicH2} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto -right-12 lg:right-[2%] bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px] max-w-[1200px]">
                <div className="w-11/12 bg-[#424C5B] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                  <strong className="absolute  text-[26px] sm:text-[30px] lg:text-[42px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    한국방폭협회 기업회원<br/>
                    가입 안내
                  </strong>
                  <p className="absolute text-[15px] sm:text-[16px] lg:text-[17px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-20">
                    가입비 100만원&nbsp;&nbsp;|&nbsp;&nbsp;연회비 50만원
                  </p>
                  <Link passHref href={"/business/member/join"}>
                    <button className="absolute bg-[#424C5B] border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-semibold hover:bg-white hover:text-[#424C5B] z-20">
                      자세히 보기
                    </button>
                  </Link>
                  <Image 
                    src={PicCormem} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto -right-5 lg:right-0 bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px] max-w-[1200px]">
                <div className="w-11/12 bg-[#FFA448] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                <strong className="absolute  text-[26px] sm:text-[30px] lg:text-[42px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    방폭교육 전과정<br/>
                    교육비할인 이벤트
                  </strong>
                  <p className="absolute text-[15px] sm:text-[16px] lg:text-[17px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-20">
                    초급교육 | 중급교육 | 고급교육
                  </p>
                  <button className="absolute bg-[#FFA448] border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-semibold hover:bg-white hover:text-[#FFA448] z-20">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicPromotion} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto -right-5 lg:right-0 bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px] max-w-[1200px]">
                <div className="w-11/12 bg-[#60B86F] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                <strong className="absolute  text-[26px] sm:text-[30px] lg:text-[42px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    2024<br/>
                    산업안전 대진단
                  </strong>
                  <p className="absolute text-[15px] sm:text-[16px] lg:text-[17px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-20">
                    중대재해 예방, 대진단으로 시작하세요
                  </p>
                  <Link passHref href={"https://www.kosha.or.kr/survey/index.do"} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                    <button className="absolute bg-[#60B86F] border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-semibold hover:bg-white hover:text-[#60B86F] z-20">
                      새창에서 열기
                    </button>
                    </a>
                  </Link>
                  <Image 
                    src={PicInspection} 
                    alt="open_banner" 
                    className="mx-auto absolute h-[180px] lg:h-[220px] w-auto right-0 bottom-0 z-0"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* 공지사항 리스트 */}
      <Notice newsList={newsList} noticeList={noticeList} />

      {/* 띠배너 */}
      <div className="w-full h-[350px] md:h-[250px] bg-[#D9ECFF] mt-40">
        <div className="w-full md:max-w-[1440px] md:min-w-[600px] h-full mx-auto text-[#3A3A3A] pt-12 relative px-7 overflow-x-hidden">
          <h3 className="text-[28px] font-semibold">
            KECEx 한국방폭협회<br className="md:hidden"/>
            회원 안내
          </h3>
          <p className=" pt-8 md:pt-4 font-light">
            한국방폭협회의 회원가입 혜택과 <br className="md:hidden"/>
            절차를 안내드립니다.
          </p>
          <Link passHref href={"/business/member/join"}>
            <button 
              className="border border-[#3A3A3A] rounded-full w-[200px] h-[50px] mt-8 font-semibold hover:bg-[#3A3A3A] hover:text-white"
            >
              자세히 보기
            </button>
          </Link>
          <div className="absolute right-[-5%] sm:right-[15%] md:right-[3%] bottom-16 z-0">
            <Image 
              src={PicMdbn} 
              alt="open_banner" 
              className="mx-auto px-3 md:px-0 h-[120px] w-auto bottom-0"
            />
          </div>
        </div>
      </div>

      {/* 안내 아이콘 */}
      <div className="w-full lg:h-[460px] mt-40 px-2">
        <ul className="w-full xl:w-[1440px] h-full mx-auto text-[#3A3A3A] flex justify-between flex-wrap lg:flex-nowrap">
          <li className="w-1/2 lg:w-1/4 h-full border-t border-[#3A3A3A] pt-16 lg:mr-5">
            <div className="w-full h-full lg:border-b border-[#ccc] pl-3 lg:pl-0">
                <div className="w-[42px] h-[42px] relative">
                  <Image 
                    src={PicBsn_01} 
                    alt="main_business_icon"
                    fill={true}
                    className=""
                  />
                </div>
                <h5 className="mt-8">
                  협회설립안내
                </h5>
                <p className="text-[20px] md:text-[28px] pt-4 font-semibold h-[100px] lg:h-auto">
                  한국방폭협회는<br/>
                  <span className="text-primary">어떤 일</span>을 하나요?
                </p>
                <Link passHref href={"/introduce/common/ceo"}>
                  <button className="
                    mt-10 md:mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[75px] h-[40px] md:w-[120px] md:h-[50px]
                    relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#003893] 
                    after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
                    after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-[14px] md:text-[16px]
                  ">
                      협회소개
                  </button>
                </Link>
                <div className="w-full h-[40px] lg:hidden">&nbsp;</div>
              </div>
            </li>
            <li className="w-1/2 lg:w-1/4 h-full border-t border-[#3A3A3A] pt-16 lg:mx-5">
              <div className="w-full h-full md:border-b border-[#ccc] pl-2 md:pl-0">
                <div className="w-[42px] h-[42px] relative">
                  <Image 
                    src={PicBsn_02} 
                    alt="main_business_icon"
                    fill={true}
                    className=""
                  />
                </div>
                <h5 className="mt-8">
                  협회가입혜택
                </h5>
                <p className="text-[20px] md:text-[28px] pt-4 font-semibold h-[100px] lg:h-auto">
                  협회가입시 어떤<br/>
                  <span className="text-primary">혜택</span>이 있나요?
                </p>
                <Link passHref href={"/business/member/rule"}>
                <button className="
                  mt-10 md:mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[75px] h-[40px] md:w-[120px] md:h-[50px]
                  relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#003893] 
                  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
                  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-[14px] md:text-[16px]
                  mr-[5px] md:mr-[20px]
                ">
                    혜택안내
                </button>
                </Link>
                <Link passHref href={"/business/member/career"}>
                  <button className="
                    mt-10 md:mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[75px] h-[40px] md:w-[120px] md:h-[50px]
                    relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#003893] 
                    after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
                    after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-[14px] md:text-[16px]
                  ">
                      경력관리
                  </button>
                </Link>
                <div className="w-full h-[40px] lg:hidden">&nbsp;</div>
              </div>
          </li>
          <li className="w-1/2 lg:w-1/4 h-full border-t border-[#3A3A3A] pt-16 lg:mx-5">
            <div className="w-full h-full border-b border-[#ccc] pl-3 md:pl-0">
              <div className="w-[42px] h-[42px] relative">
                <Image 
                    src={PicBsn_03} 
                    alt="main_business_icon"
                    fill={true}
                    className=""
                  />
              </div>
              <h5 className="mt-8">
                협회가입안내
              </h5>
              <p className="text-[20px] md:text-[28px] pt-4 font-semibold h-[100px] lg:h-auto">
                협회<span className="text-primary">가입</span>은<br/>
                어떻게 하나요?
              </p>
              <Link passHref href={"/business/member/rule"}>
                <button className="
                  mt-10 md:mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[75px] h-[40px] md:w-[120px] md:h-[50px]
                  relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#003893] 
                  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
                  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-[14px] md:text-[16px]
                  mr-[5px] md:mr-[20px]
                ">
                    회원회칙
                </button>
              </Link>
              <Link passHref href={"/business/member/join"}>
                <button className="
                  mt-10 md:mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[75px] h-[40px] md:w-[120px] md:h-[50px]
                  relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#003893] 
                  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
                  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-[14px] md:text-[16px]
                ">
                    가입안내
                </button>
              </Link>
              <div className="w-full h-[40px] lg:hidden">&nbsp;</div>
            </div>
          </li>
          <li className="w-1/2 lg:w-1/4 h-full border-t border-[#3A3A3A] pt-16 lg:ml-5">
            <div className="w-full h-full border-b border-[#ccc] pl-2 md:pl-0">
              <div className="w-[42px] h-[42px] relative">
                <Image 
                    src={PicBsn_04} 
                    alt="main_business_icon"
                    fill={true}
                    className=""
                  />
              </div>
              <h5 className="mt-8">
                협회운영안내
              </h5>
              <p className="text-[20px] md:text-[28px] pt-4 font-semibold h-[100px] md:h-auto">
                협회<span className="text-primary">운영</span>은<br/>
                어떻게 되나요?
              </p>
              <Link passHref href={"/introduce/group/group"}>
              <button className="
                  mt-10 md:mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[90px] h-[40px] md:w-[120px] md:h-[50px]
                  relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#003893] 
                  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] 
                  after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-[14px] md:text-[16px]
              ">
                  총회 조직도
              </button>
              </Link>
              <div className="w-full h-[40px] lg:hidden">&nbsp;</div>
            </div>
          </li>
        </ul>
      </div>
      {/* 관련 기관 */}
      <div className="w-full h-[770px] md:h-[650px] flex flex-col justify-start items-center mt-[160px] md:py-[57px]">
        <div className="w-full xl:w-[1300px] h-[770px] lg:h-[530px] justify-between item-center leading-[30px] md:leading-[60px]"> {/* 관련기관 리스트 */}
          <h3 className="text-center font-bold text-[26px] md:text-[30px] text-[#3A3A3A] leading-[44px] mb-16 md:mb-24">
            한국방폭협회는<br/>
            다음 기관들과 함께 합니다.
          </h3>
          <div className="w-full flex px-3 md:px-0 mt-4 md:mt-12 md:h-auto flex-wrap md:flex-nowrap">
            <Link passHref href={"https://www.moel.go.kr/index.do"} className="w-1/2 lg:w-1/4" target="_blank">
              <div className="w-full">
                <Image 
                src={Picmoel} 
                alt="고용노동부_로고" 
                className="ml-2 md:mx-auto h-[40px] w-auto"
                />
              </div>
            </Link>
            <Link passHref href={"https://www.nts.go.kr/"} className="w-1/2 lg:w-1/4" target="_blank">
              <div className="w-full">
                    <Image 
              src={Picnts} 
              alt="국세청_로고" 
              className="ml-2 md:mx-auto h-[34px] w-auto"
              />
              </div>
            </Link>
            <Link passHref href={"https://www.acrc.go.kr/"} className="w-1/2 lg:w-1/4" target="_blank">
            <div className="w-full mt-11 md:mt-0">
                    <Image 
              src={Picacrc} 
              alt="국민권익위원회_로고" 
              className="-ml-1 md:mx-auto h-[40px] w-auto"
            />
            </div>
            </Link>
            <Link passHref href={"https://www.moel.go.kr/local/ulsan/index.do"} className="w-1/2 lg:w-1/4" target="_blank">
            <div className="w-full mt-11 md:mt-0">
              <Image 
                src={PicmoelUl} 
                alt="고용노동부울산_로고" 
                className="ml-1 md:mx-auto h-[36px] w-auto"
              />
            </div>
            </Link>
          </div>

          <div className="w-full flex mt-12 md:mt-16 flex-wrap md:flex-nowrap box-border overflow-x-hidden">
            <Link passHref href={"https://www.ulsan.go.kr/u/rep/main.ulsan"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full h-[36px]">
                      <Image 
                src={PicUl} 
                alt="울산광역시_로고" 
                className="ml-6 md:mx-auto h-[30px] w-auto"
              />
              </div>
            </Link>
            <Link passHref href={"https://www.kgs.or.kr/"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full">
                      <Image 
                src={Pickogas} 
                alt="가스안전공사_로고" 
                className="-ml-[1px] md:mx-auto h-[32px] md:h-[34px] w-auto"
              />
              </div>
            </Link>
            <Link passHref href={"https://www.kosha.or.kr/kosha/index.do"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full h-[36px] mt-12 md:mt-0">
                      <Image 
              src={Pickosha} 
              alt="산업안전보건공단_로고" 
              className="ml-6 md:mx-auto h-[54px] w-auto -translate-y-4"
              />
              </div>
            </Link>
            <Link passHref href={"https://www.komeri.re.kr/"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full mt-12 md:mt-0">
                    <Image 
              src={Pickomeri} 
              alt="코메리_로고" 
              className="md:mx-auto h-[36px] w-auto -translate-y-2"
              />
              </div >
            </Link>
          </div>
          <div className="w-full flex px-3 md:px-0 mt-12 md:mt-16 h-[20px] md:h-auto flex-wrap md:flex-nowrap">
            <Link passHref href={"https://www.kopo.ac.kr/ulsan/index.do"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full h-[40px]">
                <Image 
                src={Picpolytech} 
                alt="울산폴리텍_로고" 
                className="ml-3 md:mx-auto h-[48px] md:h-[56px] w-auto -translate-y-[12px]"
                />
              </div>
            </Link>
            <Link passHref href={"https://www.utp.or.kr/"} className="w-1/2 md:w-1/4">
              <div className="w-full">
                      <Image 
                src={Picutp} 
                alt="울산테크노파크_로고" 
                className="ml-1 md:mx-auto h-[34px] md:h-[36px] w-auto mt-1 md:mt-0"
              />
              </div>
            </Link>
            <Link passHref href={"https://ksa.or.kr/ksa_kr/index.do"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full h-[36px] mt-12 md:mt-0">
              <Image 
                src={Picksa} 
                alt="KSA협회_로고" 
                className="ml-2 md:mx-auto h-[22px] md:h-[30px] w-auto translate-y-1"
              />
              </div>
            </Link>
            <Link passHref href={"https://www.krict.re.kr/"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full mt-[51px] md:mt-0">
                <Image 
                src={Pickrict} 
                alt="화학연구원_로고" 
                className="ml-1 md:mx-auto h-[20px] md:h-[30px] w-auto"
                />
              </div>
            </Link>
          </div>
          <div className="w-full flex px-3 md:px-0 mt-36 md:mt-16 h-[20px] md:h-auto flex-wrap md:flex-nowrap">
            <Link passHref href={"https://www.hrdkorea.or.kr/"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full">
                        <Image 
                  src={Pichrdkorea} 
                  alt="산업인력공단_로고" 
                  className="ml-2 md:mx-auto h-[24px] md:h-[34px] w-auto"
                />
              </div>
            </Link>
            <Link passHref href={"https://www.ulsan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN248"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full">
                    <Image 
              src={Picuoufic} 
              alt="울산대_산학협력단_로고" 
              className="ml-6 md:mx-auto h-[25px] md:h-[30px] w-auto"
              />
              </div >
            </Link>
            <Link passHref href={"https://www.uc.ac.kr/www/Main.do"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full mt-12 md:mt-0">
                <Image 
                  src={PicUc} 
                  alt="울산과대_로고" 
                  className="ml-4 md:mx-auto h-[32px] md:h-[36px] w-auto -translate-y-1"
                />
              </div>
            </Link>
            <Link passHref href={"https://www.hankyung.com/"} className="w-1/2 md:w-1/4" target="_blank">
              <div className="w-full mt-12 md:mt-0">
                <Image 
                  src={Pichankyung} 
                  alt="한국경제신문_로고" 
                  className=" md:mx-auto h-[21px] md:h-[24px] w-auto  translate-y-[4px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
