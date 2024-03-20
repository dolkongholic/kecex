"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import useInsertMainBanner from "@/app/hooks/useInsertMainBanner";
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
import Picacrc from "@/public/img/related_site/acrc.png";
import Pichrdkorea from "@/public/img/related_site/hrdkorea.png";
import Pickogas from "@/public/img/related_site/kogas.png";
import Pickosha from "@/public/img/related_site/kosha.png";
import Picksa from "@/public/img/related_site/ksa.png";
import Picmoel from "@/public/img/related_site/moel.png";
import Picnts from "@/public/img/related_site/nts.png";
import PicCormem from "@/public/img/banner/corporate_member.png";
import PicRemem from "@/public/img/banner/regular_member.png"
import PicH2 from "@/public/img/banner/h2_education.png"
import PicMdbn from "@/public/img/banner/md_banner_01.png"
import PicOpen from "@/public/img/banner/site_open.png"
import PicBsn_01 from "@/public/img/icon/main_bsn_01.png"
import PicBsn_02 from "@/public/img/icon/main_bsn_02.png"
import PicBsn_03 from "@/public/img/icon/main_bsn_03.png"
import PicBsn_04 from "@/public/img/icon/main_bsn_04.png"


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
      // autoplay: true, // 자동 캐러셀
      autoplaySpeed: 2000, // 자동 캐러셀 속도
      centerMode: true, // 현재 컨텐츠 가운데 정렬
      initialSlide: 1, // 첫 컨텐츠 번호
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

  return (
    <section>
      <div className="w-full h-[700px] md:h-[550px] overflow-x-hidden">
        <div className="w-full h-[700px] md:h-[550px] z-[50] md:flex justify-center items-center  bg-cover bg-center">
          <div className="w-full flex justify-center items-center md:hidden relative mt-[50px]">
            <input
              type="text"
              className="w-11/12 h-[40px] ring-2 ring-white px-[20px] rounded-[200px] placeholder:text-sm font-light focus:outline-none focus:ring-2 focus:ring-active transition-all duration-500 mx-auto border-2 border-primary"
              placeholder="검색어를 입력하세요"
            />
            <span className="w-[30px] h-[30px] absolute right-0 top-0 -translate-x-[20px] translate-y-[10px]">
              <FiSearch style={{ width: "22", height: "22" }} />
            </span> 
          </div>
          <div className="w-full justify-center slider-container">
            <Slider {...settings}>
              <div className="h-[380px]">
                <div className="w-11/12 bg-[#FFC743] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                  <strong className="absolute text-[30px] lg:text-[45px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    한국방폭협회 공식사이트<br/>
                    정식오픈 안내
                  </strong>
                  <p className="absolute lg:text-[18px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-10">
                    사단법인 한국방폭협회는 방폭산업의 건전한 발전을<br/>
                    위해 설립되었습니다.
                  </p>
                  <button className="absolute border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-medium hover:bg-white hover:text-[#FFC743]">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicOpen} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto right-0 lg:right-[2%] bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px]">
                <div className="w-11/12 bg-[#36609F] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                  <strong className="absolute text-[30px] lg:text-[45px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    수소시스템 안전 기본원리<br/>
                    과정 개설
                  </strong>
                  <p className="absolute lg:text-[18px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-10">
                    신규 개설된 IECEx CoPC Unit 011<br/>
                    과정에 대해 알아보세요.
                  </p>
                  <button className="absolute border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-medium hover:bg-white hover:text-[#36609F]">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicH2} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto right-0 lg:right-[2%] bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px]">
                <div className="w-11/12 bg-[#424C5B] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                  <strong className="absolute text-[30px] lg:text-[45px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    한국방폭협회 기업회원<br/>
                    가입 안내
                  </strong>
                  <p className="absolute lg:text-[18px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-10">
                    가입비 100만원&nbsp;&nbsp;|&nbsp;&nbsp;연회비 50만원
                  </p>
                  <button className="absolute border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-medium hover:bg-white hover:text-[#424C5B]">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicCormem} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto right-0 bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px]">
                <div className="w-11/12 bg-[#64BCFF] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                  <strong className="absolute text-[30px] lg:text-[45px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    한국방폭협회 정회원<br/>
                    가입 안내
                  </strong>
                  <p className="absolute lg:text-[18px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-10">
                    가입비 5만원&nbsp;&nbsp;|&nbsp;&nbsp;연회비 10만원
                  </p>
                  <button className="absolute border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-medium hover:bg-white hover:text-[#64BCFF]">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicRemem} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto right-0 lg:right-[1%] bottom-0 z-0"
                  />
                </div>
              </div>
              <div className=" h-[380px]">
                <div className="w-11/12 bg-[#FFA448] h-full mx-auto rounded-xl relative text-white overflow-hidden">
                <strong className="absolute text-[30px] lg:text-[45px] font-semibold top-[40px] leading-[40px] lg:leading-[52px] left-[5%]">
                    방폭교육 전과정<br/>
                    교육비할인 이벤트
                  </strong>
                  <p className="absolute lg:text-[18px] top-[155px] lg:top-[190px] left-[5%] leading-6 z-10">
                    초급교육 | 중급교육 | 고급교육
                  </p>
                  <button className="absolute border border-white w-[150px] h-[45px] rounded-full top-[290px] left-[5%] font-medium hover:bg-white hover:text-[#FFA448]">
                    자세히 보기
                  </button>
                  <Image 
                    src={PicRemem} 
                    alt="open_banner" 
                    className="mx-auto px-3 md:px-0 absolute h-[180px] lg:h-[220px] w-auto right-0 lg:right-[1%] bottom-0 z-0"
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
      <div className="w-full h-[250px] bg-[#D9ECFF] mt-40">
        <div className="w-[1440px] h-full mx-auto text-[#3A3A3A] pt-12 relative">
          <h3 className="text-[28px] font-medium">
            KECEx 한국방폭협회 회원 안내
          </h3>
          <p className="pt-4 font-light">
            전국에 4개의 지부와 방폭지원·기술본부를 운영하고 있습니다.
          </p>
          <button 
            className="border border-[#3A3A3A] rounded-full w-[200px] h-[50px] mt-8 font-medium hover:bg-[#3A3A3A] hover:text-white"
          >
            자세히 보기
          </button>
          <div className="absolute right-[3%] bottom-12">
            <Image 
              src={PicMdbn} 
              alt="open_banner" 
              className="mx-auto px-3 md:px-0 h-[120px]  w-auto bottom-0 z-0"
            />
          </div>
        </div>
      </div>

      {/* 안내 아이콘 */}
      <div className="w-full h-[460px] mt-40">
        <ul className="w-[1440px] h-full mx-auto text-[#3A3A3A] flex justify-between">
          <li className="w-1/4 h-full border-t border-[#3A3A3A] pt-16 mr-5">
            <div className="w-full h-full border-b border-[#ccc]">
                <div className="w-[42px] h-[42px]">
                  <Image 
                    src={PicBsn_01} 
                    alt="main_business_icon"
                    Fill={true}
                    className=""
                  />
                </div>
                <h5 className="mt-8">
                  협회설립안내
                </h5>
                <p className="text-[28px] pt-4 font-medium">
                  한국방폭협회는<br/>
                  <span className="text-primary">어떤 일</span>을 하나요?
                </p>
                <Link passHref href={"/introduce/common/ceo"}>
                  <button className="mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                      협회소개
                  </button>
                </Link>
              </div>
            </li>
            <li className="w-1/4 h-full border-t border-[#3A3A3A] pt-16 mx-5">
              <div className="w-full h-full border-b border-[#ccc]">
                <div className="w-12 h-12">
                  <Image 
                    src={PicBsn_02} 
                    alt="main_business_icon"
                    Fill={true}
                    className=""
                  />
                </div>
                <h5 className="mt-8">
                  협회가입혜택
                </h5>
                <p className="text-[28px] pt-4 font-medium">
                  협회가입시 어떤<br/>
                  <span className="text-primary">혜택</span>이 있나요?
                </p>
                <button className="mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                    혜택안내
                </button>
                <button className="mt-20 ml-4 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                    경력관리
                </button>
              </div>
          </li>
          <li className="w-1/4 h-full border-t border-[#3A3A3A] pt-16 mx-5">
            <div className="w-full h-full border-b border-[#ccc]">
              <div className="w-12 h-12">
                <Image 
                    src={PicBsn_03} 
                    alt="main_business_icon"
                    Fill={true}
                    className=""
                  />
              </div>
              <h5 className="mt-8">
                협회가입안내
              </h5>
              <p className="text-[28px] pt-4 font-medium">
                협회<span className="text-primary">가입</span>은<br/>
                어떻게 하나요?
              </p>
              <button className="mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                  회원안내
              </button>
              <button className="mt-20 ml-4 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                  가입완료
              </button>
            </div>
          </li>
          <li className="w-1/4 h-full border-t border-[#3A3A3A] pt-16 ml-5">
            <div className="w-full h-full border-b border-[#ccc]">
              <div className="w-12 h-12">
                <Image 
                    src={PicBsn_04} 
                    alt="main_business_icon"
                    Fill={true}
                    className=""
                  />
              </div>
              <h5 className="mt-8">
                협회운영안내
              </h5>
              <p className="text-[28px] pt-4 font-medium">
                협회<span className="text-primary">운영</span>은<br/>
                어떻게 되나요?
              </p>
              <button className="mt-20 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                  총회
              </button>
              <button className="mt-20 ml-4 border border-[#ccc] hover:border-primary hover:bg-primary hover:text-white w-[120px] h-[50px]">
                  이사회
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full h-[100px] md:h-[250px] hidden md:flex flex-col justify-start items-center mt-[150px] py-[7px]">
        <div className="w-full md:w-[1000px] h-[170px] md:h-[36px] justify-between item-center leading-[30px] md:leading-[60px]"> {/* 관련기관 리스트 */}
          <h3 className="text-center font-bold text-[24px] text-black">관련 기관</h3> 
          <div className="w-full flex">
            <div className="w-1/4">
            <Image 
              src={Picacrc} 
              alt="arcr_logo" 
              className="mx-auto h-[24px] md:h-[36px] px-3 md:px-0"
              height={36}
            />
            </div>
            <div className="w-1/4">
                    <Image 
              src={Pichrdkorea} 
              alt="arcr_logo" 
              className="mx-auto h-[24px] md:h-[36px]"
              height={36}
            />
            </div>
            <div className="w-1/4">
                    <Image 
              src={Pickogas} 
              alt="arcr_logo" 
              className="mx-auto h-[24px] md:h-[36px]"
              height={36}
            />
            </div>
            <div className="w-1/4">
                    <Image 
            src={Pickosha} 
            alt="arcr_logo" 
            className="mx-auto h-[20px] md:h-[36px]"
            height={36}
            />
            </div>
          </div>
          <div className="w-full flex px-3 md:px-0 mt-2 md:mt-8 h-[20px] md:h-auto">
            <div className="w-1/4">
                    <Image 
              src={Picksa} 
              alt="arcr_logo" 
              className="mx-auto h-[20px] md:h-[36px]"
              height={36}
            />
            </div>
            <div className="w-1/4">
                  <Image 
            src={Picmoel} 
            alt="arcr_logo" 
            className="mx-auto h-[20px] md:h-[36px]"
            height={36}
            />
            </div >
            <div className="w-1/4">
                    <Image 
              src={Picnts} 
              alt="arcr_logo" 
              className="mx-auto h-[20px] md:h-[36px]"
              height={36}
            />
            </div>
            <div className="w-1/4 bg-blue-200">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
