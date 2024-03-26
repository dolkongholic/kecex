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

  // var i = -1
  // useEffect(()=>{
  //   i = i + 1
  //   if(i == 3){
  //     i = -1
  //   }
  //   const timer_main = setInterval(()=>{
  //     setNoticeMenu(menulist[i]);
  //     console.log(i);
  //     // clearInterval(timer_main);
  //   }, 2000);
  // },[noticeMenu])

  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const timer_main = setInterval(() => {
  //     setIndex(prevIndex => (prevIndex + 1) % menulist.length);
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer_main);
  //   };
  // }, []);

  // useEffect(() => {
  //   setNoticeMenu(menulist[index]);
  // }, [index]);
  

  return (
    <div className="w-full md:flex justify-center item-start mt-[40px]">
      <div className="md:w-[1400px] md:flex justify-start items-start space-x-[30px]">
        <div className="w-full h-[400px] md:h-[320px] md:flex justify-between item-start py-[10px]">      
          <div className="w-full md:w-1/3 lg:w-1/4 h-[50px] md:h-[280px] flex md:flex-col items-start leading-8 md:leading-[65px] px-[20px] font-bold text-[16px] text-[#CECECE] border-b-2 md:border-0 border-primary mx-auto">
            <h2 className="w-1/4 md:w-full text-start text-[16px] md:text-[20px] text-[#3A3A3A] font-bold leading-8 md:leading-7 mb-8">
              KECEx 소식
            </h2>
            <div className="w-3/4 md:w-full flex md:flex-col">
              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-bold text-[14px] md:text-[36px] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "협회공지" &&
                  " text-primary"
                }`}
                onClick={() => {
                  setNoticeMenu("협회공지");
                }}
              >
                협회공지
                {noticeMenu == "협회공지" && (
                  <div className="w-[20px] h-[20px] flex justify-center items-center -mt-2">
                    <FaPlus />
                  </div>
                )}
              </div>
              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-bold text-[14px] md:text-[36px] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "보도자료" &&
                  "text-primary"
                }`}
                onClick={() => {
                  setNoticeMenu("보도자료");
                  setNoticeSubMenu("보도자료");
                }}
              >
                보도자료
                {noticeMenu == "보도자료" && (
                  <div className="w-[20px] h-[20px] flex justify-center items-center -mt-2">
                    <FaPlus />
                  </div>
                )}
              </div>

              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-bold text-[14px] md:text-[36px] hover:text-primary transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "교육센터" &&
                  "text-primary"
                }`}
                onClick={() => {
                  setNoticeMenu("교육센터");
                  setNoticeSubMenu("교육일정");
                }}
              >
                교육센터
                {noticeMenu == "교육센터" && (
                  <div className="w-[20px] h-[20px] flex justify-center items-center -mt-2">
                    <FaPlus />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-2/3 lg:w-3/4">
            {noticeMenu == "협회공지" && (
              <>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/2 lg:w-1/3">
                  <Link
                    key={noticeList[noticeList.length - 1].id}
                    passHref
                    href={`notice/notice/detail/${noticeList[noticeList.length - 1].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pr-[50px] md:pl-0 text-[#3A3A3A]">
                      <span className="h-[45px] leading-[22px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                        {noticeList[noticeList.length - 1]
                          ? String(noticeList[noticeList.length - 1].title).slice(
                              0,
                              30
                            )
                          : "공지가 없습니다."}
                      </span>
                      <span className="h-[201px] leading-[24px] font-regular pt-2 text-[14px] md:text-[15px]">
                        {noticeList[noticeList.length - 1]
                          ? String(
                              noticeList[noticeList.length - 1].content
                            ).slice(0, 140)
                          : ""}
                      </span>
                      <span className="h-[15px] leading-[25px] text-[12px] md:text-[16px] font-light"> {/* 첫번째 공지 날짜 */}
                        {noticeList[noticeList.length - 1]
                          ? String(noticeList[noticeList.length - 1].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/2 lg:w-1/3 text-[#3A3A3A]">
                  <Link
                    key={noticeList[noticeList.length - 2].id}
                    passHref
                    href={`notice/notice/detail/${noticeList[noticeList.length - 2].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:px-[25px]">
                      <span className="h-[45px] leading-[22px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
                        {noticeList[noticeList.length - 2]
                          ? String(noticeList[noticeList.length - 2].title).slice(
                              0,
                              30
                            )
                          : "공지가 없습니다."}
                      </span>
                      <span className="h-[201px] leading-[24px] font-regular pt-2 text-[14px] md:text-[15px]">
                        {noticeList[noticeList.length - 2]
                          ? String(
                              noticeList[noticeList.length - 2].content
                            ).slice(0, 140)
                          : ""}
                      </span>
                      <span className="h-[15px] leading-[25px] text-[12px] md:text-[16px] font-light"> {/* 두번째 공지 날짜 */}
                        {noticeList[noticeList.length - 2]
                          ? String(noticeList[noticeList.length - 2].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[280px] hidden md:flex flex-col justify-between items-start cursor-pointer w-1/3">
                  <Link
                    key={noticeList[noticeList.length - 3].id}
                    passHref
                    href={`notice/notice/detail/${noticeList[noticeList.length - 3].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pl-[50px] text-[#3A3A3A]">
                      <span className="h-[45px] leading-[22px] text-[16px] md:text-[18px] font-semibold">
                        {noticeList[noticeList.length - 3]
                          ? String(noticeList[noticeList.length - 3].title).slice(
                              0,
                              30
                            )
                          : "공지가 없습니다."}
                      </span>
                      <span className="h-[201px] leading-[24px] font-regular pt-2 text-[14px] md:text-[15px]">
                        {noticeList[noticeList.length - 3]
                          ? String(
                              noticeList[noticeList.length - 3].content
                            ).slice(0, 140)
                          : ""}
                      </span>
                      <span className="h-[15px] leading-[25px]] text-[16px] font-light"> {/* 세번째 공지 날짜 */}
                        {noticeList[noticeList.length - 3]
                          ? String(noticeList[noticeList.length - 3].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
              </>
            )}

            {noticeMenu == "보도자료" && (
              <>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/3">
                  <Link
                    key={newsList[newsList.length - 1].id}
                    passHref
                    href={`information/news/detail/${newsList[newsList.length - 1].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pr-[50px] md:pl-0 text-[#3A3A3A]">
                      <div className="w-full h-[200px] relative">
                        {newsList[newsList.length - 1]?.img && (
                            <Image src={newsList[newsList.length - 1].img}
                            alt="news_image" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                            key={newsList[newsList.length - 1].id}
                            />
                        )}
                      </div>
                      <span className="h-[50px] leading-[20px] text-[16px] md:text-[18px] font-semibold pt-3 line-clamp-2">
                        {newsList[newsList.length - 1]
                          ? String(newsList[newsList.length - 1].title).slice(
                              0,
                              45
                            )
                          : "뉴스가 없습니다."}
                      </span>
                      <span className="h-[25px] leading-[30px] text-[16px] font-light">
                        {newsList[newsList.length - 1]
                          ? String(newsList[newsList.length - 1].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/3 text-[#3A3A3A]">
                  <Link
                    key={newsList[newsList.length - 2].id}
                    passHref
                    href={`information/news/detail/${newsList[newsList.length - 2].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:px-[25px]">
                    <div className="w-full h-[200px] relative">
                        {newsList[newsList.length - 1]?.img && (
                            <Image src={newsList[newsList.length - 2].img}
                            alt="news_image" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                            key={newsList[newsList.length - 2].id}
                            />
                        )}
                      </div>
                      <span className="h-[50px] leading-[20px] text-[16px] md:text-[18px] font-semibold pt-3 line-clamp-2">
                        {newsList[newsList.length - 2]
                          ? String(newsList[newsList.length - 2].title).slice(
                              0,
                              45
                            )
                          : "뉴스가 없습니다."}
                      </span>
                      <span className="h-[25px] leading-[30px] text-[16px] font-light">
                        {newsList[newsList.length - 2]
                          ? String(newsList[newsList.length - 2].date)
                          : ""}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/3">
                  <Link
                    key={newsList[newsList.length - 3].id}
                    passHref
                    href={`information/news/detail/${newsList[newsList.length - 3].id}?page=1`}
                    className="w-full"
                  >
                    <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pl-[50px] text-[#3A3A3A]">
                    <div className="w-full h-[200px] relative">
                      {newsList[newsList.length - 1]?.img && (
                            <Image src={newsList[newsList.length - 3].img}
                            alt="news_image" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                            key={newsList[newsList.length - 3].id}
                            />
                        )}
                      </div>
                      <span className="h-[50px] leading-[20px] text-[16px] md:text-[18px] font-semibold pt-3 line-clamp-2">
                        {newsList[newsList.length - 3]
                          ? String(newsList[newsList.length - 3].title).slice(
                              0,
                              45
                            )
                          : "뉴스가 없습니다."}
                      </span>
                      <span className="h-[25px] leading-[30px] text-[16px] font-light">
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
                <div className="w-full h-[280px] flex justify-between items-center cursor-pointer">
                  <div className="h-full flex flex-col w-full justify-center items-center text-[#3A3A3A] border border-[#484848] rounded-md text-[20px] font-medium">
                    준비 중입니다.
                  </div>
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
