import Link from "next/link";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

//image
import WhiteLogo from "@/public/img/logo/logo_big_white.png";

export default function Footer() {
  return (
    <section>
      <div className="w-full h-[520px] md:h-[350px] bg-[#3e3e3e] flex flex-col justify-start items-center mt-[150px]">
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
        <div className="w-full md:w-[1400px] md:h-[60px] md:flex justify-between item-center leading-[30px] md:leading-[60px] md:border-b border-[#777]">
          <ul className="flex flex-wrap md:flex-nowrap justify-between md:justify-start text-[#DCDCDC] md:space-x-[20px] md:font-bold text-[14px] px-[18%] md:px-0 text-center">
            <li className="w-auto">이용안내</li>
            <li className="hidden md:block">|</li>
            <li className="w-auto">저작권정책</li>
            <li className="hidden md:block">|</li>
            <li className="w-auto">개인정보처리방침</li>
            <li className="hidden md:block">|</li>
            <Link passHref href={"/introduce/map/"} className="w-2/5 md:w-auto text-center pl-8 md:pl-0">
              <li className="w-full md:w-auto">오시는길</li>
            </Link>
            <li className="hidden md:block">|</li>
            <li className="w-3/5 md:w-auto pr-8 md:pr-0">오류 신고 및 확인</li>
          </ul>
          <div className="flex md:space-x-[20px] item-center pt-[10px] translate-y-[160px] md:translate-y-0">
            <select
              id="related_site"
              className="border border-[#777] w-[200px] h-[40px] text-center leading-[40px] flex justify-between items-center bg-[#3e3e3e] text-[#DCDCDC] mx-auto md:mx-0"
            >
              {/* (event) => copyrtChgUrl(event.target.value) */}
              <option value="">관련 기관</option>
              <option
                value="https://www.kosha.or.kr/kosha/index.do"
                className="text-[#DCDCDC]"
              >
                안전보건공단
              </option>
              <option value="https://www.kgs.or.kr/" className="text-[#DCDCDC]">
                가스안전공사
              </option>
              <option
                value="https://www.moel.go.kr/index.do"
                className="text-[#DCDCDC]"
              >
                고용노동부
              </option>
              <option
                value="https://www.hrdkorea.or.kr/"
                className="text-[#DCDCDC]"
              >
                산업인력공단
              </option>
              <option value="https://www.nts.go.kr/" className="text-[#DCDCDC]">
                국세청
              </option>
              <option
                value="https://www.acrc.go.kr/"
                className="text-[#DCDCDC]"
              >
                권익위원회
              </option>
              <option
                value="https://ksa.or.kr/ksa_kr/index.do"
                className="text-[#DCDCDC]"
              >
                한국표준협회
              </option>
              <div className="pr-[10px] text-[#DCDCDC]">
                <IoIosArrowUp />
              </div>
            </select>
          </div>
        </div>
        <div className="w-full md:w-[1400px] -mt-8 md:mt-[20px] text-[#9c9c9c] md:text-[#DCDCDC] text-[13px] md:text-auto flex flex-col space-y-[5px] text-center md:text-start">
          <span>
            울산광역시 중구 종가로 15, 울산테크노파크 <br className="md:hidden"/>
            기술혁신동 B동 408호
            사단법인
          </span>
          <span>한국방폭협회 전화 : 052 929 2848 | 팩스 : 052 929 2848</span>
        </div>
        <div className="md:w-[1400px] mt-[20px] text-[#9c9c9c] flex flex-col text-[12px]">
          <span>copyright (c) Kecex. All Rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
