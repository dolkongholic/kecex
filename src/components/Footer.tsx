import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <section>
      {/* <div className="w-full flex justify-center items-center h-[60px] mt-[50px] text-center">
        <div className="w-[1400px] h-[60px] overflow-hidden flex">
          <div className="flex justify-center items-center animate-slider w-[1400px] space-x-[5px] ">
            <div className="w-[850px] h-[60px] border border-[#DCDCDC] flex justify-center items-center bg-slate-300">
              Banner
            </div>
            <div className="w-[850px] h-[60px] border border-[#DCDCDC] flex justify-center items-center bg-slate-300">
              Banner
            </div>
            <div className="w-[850px] h-[60px] border border-[#DCDCDC] flex justify-center items-center bg-slate-300">
              Banner
            </div>
            <div className="w-[850px] h-[60px] border border-[#DCDCDC] flex justify-center items-center bg-slate-300">
              Banner
            </div>
            <div className="w-[850px] h-[60px] border border-[#DCDCDC] flex justify-center items-center bg-slate-300">
              Banner
            </div>
            <div className="w-[850px] h-[60px] border border-[#DCDCDC] flex justify-center items-center bg-slate-300">
              Banner
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full h-[200px] bg-[#3e3e3e] mt-[10px] flex flex-col justify-start items-center mt-[150px]">
        <div className="w-[1400px] h-[60px] flex justify-between item-center leading-[60px] border-b border-[#777]">
          <ul className="flex text-[#DCDCDC] space-x-[20px] font-[400] text-[14px]">
            <li>이용안내</li>
            <li>|</li>
            <li>저작권정책</li>
            <li>|</li>
            <li>개인정보처리방침</li>
            <li>|</li>
            <Link passHref href={"/introduce/map/"}>
              <li>오시는길</li>
            </Link>
            <li>|</li>
            <li>오류 신고 및 확인</li>
          </ul>
          <div className="flex space-x-[20px] item-center pt-[10px]">
            <select
              id="related_site"
              className="border border-[#777] w-[200px] h-[40px] text-center leading-[40px] flex justify-between items-center bg-[#3e3e3e] text-[#DCDCDC]"
              onChange={(event) => copyrtChgUrl(event.target.value)}
            >
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
              <div className="pr-[10px] text-[#DCDCDC]">
                <IoIosArrowUp />
              </div>
            </select>
          </div>
        </div>
        <div className="w-[1400px] mt-[20px] text-[#DCDCDC] flex flex-col space-y-[5px]">
          <span>
            울산광역시 중구 종가로 15, 울산테크노파크 기술혁신동 B동 408호
            사단법인
          </span>
          <span>한국방폭협회 전화 : 052 929 2848 / 팩스 : 052 929 2848</span>
        </div>
        <div className="w-[1400px] mt-[20px] text-[#9c9c9c] flex flex-col text-[12px]">
          <span>copyright (c) Kecex. All Rights reserved.</span>
        </div>
      </div>
    </section>
  );
}

function copyrtChgUrl(url: any) {
  if (url) {
    window.open(url);
  }
}
