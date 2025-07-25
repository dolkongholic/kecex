"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MainNoticeProps {
  newsList?: any;
  noticeList?: any;
}

const Notice: React.FC<MainNoticeProps> = ({ newsList, noticeList }) => {
  const [noticeMenu, setNoticeMenu] = useState<String>("협회공지");
  const [noticeSubMenu, setNoticeSubMenu] = useState<String>("공지사항");

  const router = useRouter();

/* 메인화면 KECEx소식 자동으로 넘어가기 */
  const menulist = ["협회공지", "보도자료", "교육센터"]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer_main = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timer_main);
    };
  }, []);

  useEffect(() => {
    setNoticeMenu(menulist[index]);
  }, [index]);
  

  return (
    <div className="w-full md:flex justify-center item-start mt-[20px]">
      <div className="md:w-[1400px] md:flex justify-start items-start space-x-[30px]">
        <div className="w-full h-[430px] md:h-[320px] md:flex justify-between item-start py-[10px]">      
          <div className="w-full md:w-1/3 lg:w-1/4 h-[100px] md:h-[280px] md:flex flex-col items-start leading-8 md:leading-[65px] md:px-[20px] font-bold text-[16px] text-[#CECECE] border-b-2 md:border-0 border-primary mx-auto">
            <h2 className="w-full text-start text-[15px] md:text-[20px] text-[#3A3A3A] font-bold leading-8 md:leading-7 mb-8 whitespace-nowrap pl-4 md:pl-0">
              KECEx 소식
            </h2>
            <div className="w-full flex md:flex-col">
              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-bold text-[15px] md:text-[30px] xl:text-[36px] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "협회공지" &&"text-primary"}`}
                onClick={() => {setNoticeMenu("협회공지");}}
              >
                협회공지
                {noticeMenu == "협회공지" && (
                  <div className="w-[15px] md:w-[20px] h-[20px] flex justify-center items-center -mt-1 md:-mt-2">
                    <FaPlus />
                  </div>
                )}
              </div>
              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-bold text-[15px] md:text-[30px] xl:text-[36px] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "보도자료" && "text-primary"}`}
                onClick={() => {
                  setNoticeMenu("보도자료");
                  setNoticeSubMenu("보도자료");
                }}
              >
                보도자료
                {noticeMenu == "보도자료" && (
                  <div className="w-[15px] md:w-[20px] h-[20px] flex justify-center items-center -mt-1 md:-mt-2">
                    <FaPlus />
                  </div>
                )}
              </div>

              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center pr-1 md:pr-0 text-center md:text-start font-bold text-[15px] md:text-[30px] xl:text-[36px] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "교육센터" && "text-primary"
                }`}
                onClick={() => {
                  setNoticeMenu("교육센터");
                  setNoticeSubMenu("교육일정");
                }}
              >
                교육센터
                {noticeMenu == "교육센터" && (
                  <div className="w-[15px] md:w-[20px] h-[20px] flex justify-center items-center -mt-1 md:-mt-2">
                    <FaPlus />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:flex w-full md:w-2/3 lg:w-3/4">
            {noticeMenu == "협회공지" && (
              <>
                <div className="h-[215px] md:h-[280px] flex flex-col justify-between items-start cursor-pointer w-full lg:w-1/3 hover:shadow-lg lg:mr-[50px] shadow-gray-300 rounded-lg px-4 transition-all duration-200">
                  <Link
                    key={noticeList[0]?.id}
                    passHref
                    href={`notice/notice/detail/${noticeList[0]?.id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[215px] md:h-[280px] flex flex-col flex-grow justify-center items-start">
                      <span className="md:h-[45px] leading-[22px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold line-clamp-2">
                        {noticeList?.[0]
                          ? String(noticeList[0].title).slice(0, 30)
                          : "공지가 없습니다."}
                      </span>
                      <span className="h-[130px] md:h-[151px] leading-[24px] font-regular pt-[3px] mb-[4px] text-[14px] md:text-[15px] overflow-hidden">
                        {noticeList?.[0]
                          ? String(
                              noticeList[0].content
                            ).slice(0, 250)
                          : ""}
                      </span>
                      <span className="h-[15px] md:leading-[45px] text-[12px] md:text-[16px] font-light"> {/* 첫번째 공지 날짜 */}
                        {noticeList?.[0]
                          ? String(noticeList[0].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[215px] md:h-[280px] flex flex-col justify-between items-start cursor-pointer w-full lg:w-1/3 hover:shadow-lg lg:mr-[50px] shadow-gray-300 rounded-lg px-4 transition-all duration-200">
                  <Link
                    key={noticeList?.[1]?.id}
                    passHref
                    href={`notice/notice/detail/${noticeList?.[1]?.id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[215px] md:h-[280px] flex flex-col flex-grow justify-center items-start">
                      <span className="md:h-[45px] leading-[22px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold line-clamp-2">
                        {noticeList?.[1]
                          ? String(noticeList[1].title).slice(0, 30)
                          : "공지가 없습니다."}
                      </span>
                      <span className="h-[130px] md:h-[151px] leading-[24px] font-regular pt-[3px] mb-[4px] text-[14px] md:text-[15px] overflow-hidden">
                        {noticeList?.[1]
                          ? String(
                              noticeList[1].content
                            ).slice(0, 250)
                          : ""}
                      </span>
                      <span className="h-[15px] md:leading-[45px] text-[12px] md:text-[16px] font-light"> {/* 두번째 공지 날짜 */}
                        {noticeList?.[1]
                          ? String(noticeList[1].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[280px] hidden md:flex flex-col justify-between items-start cursor-pointer w-full lg:w-1/3 hover:shadow-lg shadow-gray-300 rounded-lg px-4 transition-all duration-200">
                  <Link
                    key={noticeList?.[2]?.id}
                    passHref
                    href={`notice/notice/detail/${noticeList?.[2]?.id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start">
                      <span className="h-[45px] leading-[22px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold line-clamp-2">
                        {noticeList?.[2]
                          ? String(noticeList[2].title).slice(0, 30)
                          : "공지가 없습니다."}
                      </span>
                      <span className="h-[151px] leading-[24px] font-regular pt-[3px] mb-[4px] text-[14px] md:text-[15px] overflow-hidden">
                        {noticeList?.[2]
                          ? String(
                              noticeList[2].content
                            ).slice(0, 250)
                          : ""}
                      </span>
                      <span className="h-[15px] leading-[45px] text-[12px] md:text-[16px] font-light"> {/* 세번째 공지 날짜 */}
                        {noticeList?.[2]
                          ? String(noticeList[2].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
              </>
            )}

            {noticeMenu == "보도자료" && (
              <>
                <div className="h-[215px] md:h-[280px] flex flex-col justify-between items-start cursor-pointer w-full md:w-1/3 px-4 py-2 md:py-0 lg:mr-[50px] hover:shadow-lg shadow-gray-300 rounded-lg transition-all duration-200">
                  <Link
                    key={newsList[newsList.length - 1].id}
                    passHref
                    href={`information/news/detail/${newsList[newsList.length - 1].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[215px] md:h-[280px] flex flex-col flex-grow justify-center items-start md:pl-0">
                      <div className="w-full h-[160px] md:h-[180px] relative">
                        {newsList[newsList.length - 1]?.img && (
                            <Image src={newsList[newsList.length - 1].img}
                            alt="news_image" 
                            fill
                            sizes="width-auto height-auto"
                            // objectFit="cover"
                            className="rounded-lg object-cover"
                            key={newsList[newsList.length - 1].id}
                            />
                        )}
                      </div>
                      <span className="h-[30px] md:h-[48px] leading-[20px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold pt-2 line-clamp-1 md:line-clamp-2">
                        {newsList[newsList.length - 1]
                          ? String(newsList[newsList.length - 1].title).slice(0, 45)
                          : "뉴스가 없습니다."}
                      </span>
                      <span className="h-[25px] md:leading-[31px] text-[12px] md:text-[16px] font-light">
                        {newsList[newsList.length - 1 ]
                          ? String(newsList[newsList.length - 1].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[215px] md:h-[280px] flex flex-col justify-between items-start cursor-pointer w-full md:w-1/3 px-4 py-2 md:py-0 lg:mr-[50px] hover:shadow-lg shadow-gray-300 rounded-lg transition-all duration-200">
                  <Link
                    key={newsList[newsList.length - 2].id}
                    passHref
                    href={`information/news/detail/${newsList[newsList.length - 2].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[215px] md:h-[280px] flex flex-col flex-grow justify-center items-start">
                    <div className="w-full h-[160px] md:h-[180px] relative">
                        {newsList[newsList.length - 1]?.img && (
                            <Image src={newsList[newsList.length - 2].img}
                            alt="news_image" 
                            fill
                            sizes="width-auto height-auto"
                            className="rounded-lg object-cover"
                            key={newsList[newsList.length - 2].id}
                            />
                        )}
                      </div>
                      <span className="h-[30px] md:h-[48px] leading-[20px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold pt-2 line-clamp-2">
                        {newsList[newsList.length - 2]
                          ? String(newsList[newsList.length - 2].title).slice(0, 45)
                          : "뉴스가 없습니다."}
                      </span>
                      <span className="h-[25px] md:leading-[31px] text-[12px] md:text-[16px] font-light">
                        {newsList[newsList.length - 2]
                          ? String(newsList[newsList.length - 2].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[280px] hidden md:flex flex-col justify-between items-start cursor-pointer w-1/3 px-4 hover:shadow-lg shadow-gray-300 rounded-lg transition-all duration-200">
                  <Link
                    key={newsList[newsList.length - 3].id}
                    passHref
                    href={`information/news/detail/${newsList[newsList.length - 3].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start text-[#3A3A3A]">
                    <div className="w-full h-[180px] relative">
                      {newsList[newsList.length - 1]?.img && (
                            <Image src={newsList[newsList.length - 3].img}
                            alt="news_image"
                            fill
                            sizes="width-auto height-auto"
                            className="rounded-lg object-cover"
                            key={newsList[newsList.length - 3].id}
                            />
                        )}
                      </div>
                      <span className="h-[48px] leading-[20px] text-[14px] md:text-[16px] lg:text-[18px]  font-semibold pt-2 line-clamp-2">
                        {newsList[newsList.length - 3]
                          ? String(newsList[newsList.length - 3].title).slice(0, 45)
                          : "뉴스가 없습니다."}
                      </span>
                      <span className="h-[25px] leading-[31px] text-[12px] md:text-[16px] font-light">
                        {newsList[newsList.length - 3]
                          ? String(newsList[newsList.length - 3].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
              </>
            )}

            {noticeMenu == "교육센터" && (
              <>
                <div className="w-full h-[430px] md:h-[280px] flex justify-between items-center cursor-pointer">
                  <ul className="w-full flex flex-wrap mt-3">
                    <li className="w-full lg:w-[48%] h-[85px] border border-[#f5f5f5] mx-[2%] lg:ml-0 lg:mr-[2%] rounded-xl flex py-4 px-7 justify-between items-center hover:border-[#3A3A3A] group transition duration-200" >
                      <div className="h-full">
                        <strong className="text-[18px] font-medium">
                          방폭기초 교육
                        </strong>
                        <p className="text-[15px] leading-[15px] pt-2">
                          2024.03.30 
                          <span className="text-primary">
                            (토)
                          </span>
                        </p>
                      </div>
                      <button className="w-[100px] h-[35px] group-hover:bg-[#ccc] group-hover:text-white border border-[#ccc] text-[#ccc] rounded-full text-[15px] leading-[35px] transition duration-200">
                        교육예정
                      </button>
                    </li>
                    <li className="w-full lg:w-[48%] h-[85px] border border-[#f5f5f5] mx-[2%] lg:mx-0 mt-2 lg:mt-0 rounded-xl flex py-4 px-7 justify-between items-center hover:border-[#3A3A3A] group transition duration-200" >
                      <div className="h-full">
                        <strong className="text-[18px] font-medium">
                          방폭인력양성 교육
                        </strong>
                        <p className="text-[15px] leading-[15px] pt-2">
                          2024.03.31 
                          <span className="text-red-500">
                            (일)
                          </span>
                        </p>
                      </div>
                      <button className="w-[100px] h-[35px] group-hover:bg-[#ccc] group-hover:text-white border border-[#ccc] text-[#ccc] rounded-full text-[15px] leading-[35px] transition duration-200">
                        교육예정
                      </button>
                    </li>
                    <li className="w-full lg:w-[48%] h-[85px] border border-[#f5f5f5] mx-[2%] lg:ml-0 lg:mr-[2%] mt-2 rounded-xl flex py-4 px-7 justify-between items-center hover:border-[#3A3A3A] group transition duration-200" >
                      <div className="h-full">
                        <strong className="text-[18px] font-medium">
                        방폭인력양성 교육
                        </strong>
                        <p className="text-[15px] leading-[15px] pt-2">
                          2024.03.28
                          <span className="">
                            (목)
                          </span>
                        </p>
                      </div>
                      <button className="w-[100px] h-[35px] group-hover:bg-[#ccc] group-hover:text-white border border-[#ccc] text-[#ccc] rounded-full text-[15px] leading-[35px] transition duration-200">
                        교육예정
                      </button>
                    </li>
                    <li className="w-full lg:w-[48%] h-[85px] border border-[#f5f5f5] mx-[2%] lg:mx-0 mt-2 rounded-xl flex py-4 px-7 justify-between items-center hover:border-[#3A3A3A] group transition duration-200" >
                      <div className="h-full">
                        <strong className="text-[18px] font-medium">
                          기업형 교육
                        </strong>
                        <p className="text-[15px] leading-[15px] pt-2">
                          2024.04.03 
                          <span className="">
                            (수)
                          </span>
                        </p>
                      </div>
                      <button className="w-[100px] h-[35px] group-hover:bg-[#ccc] group-hover:text-white border border-[#ccc] text-[#ccc] rounded-full text-[15px] leading-[35px] transition duration-200">
                        교육예정
                      </button>
                    </li>
                    <li className="w-[48%] h-[85px] border border-[#f5f5f5] mr-[2%] mt-2 rounded-xl hidden lg:flex py-4 px-7 justify-between items-center hover:border-[#3A3A3A] group transition duration-200" >
                      <div className="h-full">
                        <strong className="text-[18px] font-medium">
                          기업형 교육
                        </strong>
                        <p className="text-[15px] leading-[15px] pt-2">
                          2024.04.07 
                          <span className="text-red-500">
                            (일)
                          </span>
                        </p>
                      </div>
                      <button className="w-[100px] h-[35px] group-hover:bg-[#ccc] group-hover:text-white border border-[#ccc] text-[#ccc] rounded-full text-[15px] leading-[35px] transition duration-200">
                        교육예정
                      </button>
                    </li>
                    <li className="w-[48%] h-[85px] border border-[#f5f5f5] mt-2 rounded-xl hidden lg:flex py-4 px-7 justify-between items-center hover:border-[#3A3A3A] group transition duration-200" >
                      <div className="h-full">
                        <strong className="text-[18px] font-medium">
                          방폭인력양성 교육
                        </strong>
                        <p className="text-[15px] leading-[15px] pt-2">
                          2024.03.31 
                          <span className="text-red-500">
                            (일)
                          </span>
                        </p>
                      </div>
                      <button className="w-[100px] h-[35px] group-hover:bg-[#ccc] group-hover:text-white border border-[#ccc] text-[#ccc] rounded-full text-[15px] leading-[35px] transition duration-200">
                        교육예정
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
