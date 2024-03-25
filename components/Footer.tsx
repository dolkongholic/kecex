import Link from "next/link";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

//image
import WhiteLogo from "@/public/img/logo/logo_big_white.png";

export default function Footer() {
  return (
    <section>
      <div className="w-full h-[520px] md:h-[350px] bg-[#3A3A3A] flex flex-col justify-start items-center mt-[150px]">
        <div className="md:hidden my-6">
          <Link passHref href={"/"}>
            <Image
              src={WhiteLogo}
              alt="Logo"
              width={240}
              height={160}
              z-index={999}
            />
          </Link>
        </div>
        <div className="w-full md:w-[1400px] md:h-[70px] md:flex justify-between item-center leading-[30px] md:leading-[70px] md:border-b border-[#777]">
          <ul className="flex flex-wrap md:flex-nowrap justify-between md:justify-start text-white md:space-x-[20px] text-[16px] px-[18%] md:px-0 text-center">
            <li className="w-auto">이용안내</li>
            <li className="hidden md:block text-[#777]">|</li>
            <li className="w-auto">저작권정책</li>
            <li className="hidden md:block text-[#777]">|</li>
            <li className="w-auto">개인정보처리방침</li>
            <li className="hidden md:block text-[#777]">|</li>
            <Link passHref href={"/introduce/map/"} className="w-2/5 md:w-auto text-center pl-8 md:pl-0">
              <li className="w-full md:w-auto">오시는길</li>
            </Link>
            <li className="hidden md:block text-[#777]">|</li>
            <li className="w-3/5 md:w-auto pr-8 md:pr-0">오류 신고 및 확인</li>
          </ul>
          <div className="flex md:space-x-[20px] item-center pt-[10px] translate-y-[160px] md:translate-y-0">
            <select
              id="related_site"
              className="border border-[#777] w-[200px] h-[50px] text-center leading-[50px] flex justify-center 
              items-center bg-[#3A3A3A] text-[#DCDCDC] mx-auto md:mx-0 rounded-md"
            >
              {/* (event) => copyrtChgUrl(event.target.value) */}
              <option value="">관련 기관</option>
              <option
                value="https://www.kosha.or.kr/kosha/index.do"
                className=""
              >
                안전보건공단
              </option>
              <option value="https://www.kgs.or.kr/" className="">
                가스안전공사
              </option>
              <option
                value="https://www.moel.go.kr/index.do"
                className=""
              >
                고용노동부
              </option>
              <option
                value="https://www.hrdkorea.or.kr/"
                className=""
              >
                산업인력공단
              </option>
              <option value="https://www.nts.go.kr/" className="">
                국세청
              </option>
              <option
                value="https://www.acrc.go.kr/"
                className=""
              >
                권익위원회
              </option>
              <option
                value="https://ksa.or.kr/ksa_kr/index.do"
                className=""
              >
                한국표준협회
              </option>
              <div className="pr-[10px]">
                <IoIosArrowUp />
              </div>
            </select>
          </div>
        </div>
        <div className="w-full md:w-[1400px] -mt-8 md:mt-[40px] text-[#9c9c9c] md:text-[#ececec] text-[13px] md:text-[15px] md:text-auto flex flex-col space-y-[5px] text-center md:text-start leading-7">
          <span>
            울산광역시 중구 종가로 15, 울산테크노파크 <br className="md:hidden"/>
            기술혁신동 B동 408호<br className=""/>
            사단법인 한국방폭협회<br/>
            전화 : 052 929 2848 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 팩스 : 052 929 2849<br/>
            E-mail : kecex@kecex.or.kr
          </span>
          {/* <span>한국방폭협회 전화 : 052 929 2848 | 팩스 : 052 929 2849</span> */}
        </div>
        <div className="md:w-[1400px] mt-[20px] text-[#9c9c9c] flex flex-col text-[12px] md:text-[14px]">
          <span>copyright (c) Kecex. All Rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
