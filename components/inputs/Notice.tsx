"use client";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface MainNoticeProps {
  newsList?: any;
  noticeList?: any;
}

const Notice: React.FC<MainNoticeProps> = ({ newsList, noticeList }) => {
  const [noticeMenu, setNoticeMenu] = useState<String>("협회공지");
  const [noticeSubMenu, setNoticeSubMenu] = useState<String>("공지사항");

  const router = useRouter();

  let noticeSubMenuList: any;
  if (noticeMenu == "협회공지") {
    noticeSubMenuList = ["공지사항"];
  } else if (noticeMenu == "보도자료") {
    noticeSubMenuList = ["보도자료"];
  }

  return (
    <div className="w-full md:flex justify-center item-start mt-[40px]">
      <div className="md:w-[1400px] md:flex justify-start items-start space-x-[30px]">
        <div className="w-full h-[400px] md:h-[320px] md:flex justify-between item-start py-[10px]">      
          <div className="w-full md:w-1/3 lg:w-1/4 h-[50px] md:h-[280px] flex md:flex-col items-start leading-8 md:leading-[55px] px-[20px] font-bold text-[16px] text-[#CECECE] border-b-2 md:border-0 border-primary mx-auto">
            <h2 className="w-1/4 md:w-full text-start text-[16px] md:text-[20px] text-[#3A3A3A] font-bold leading-8 md:leading-7 mb-8">
              KECEx 소식
            </h2>
            <div className="w-3/4 md:w-full flex md:flex-col">
              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-medium text-[14px] md:text-[36px] transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "협회공지" &&
                  " text-primary"
                }`}
                onClick={() => {
                  setNoticeMenu("협회공지");
                }}
              >
                협회공지
                {noticeMenu == "협회공지" && (
                  <div className="w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <FaPlus />
                  </div>
                )}
              </div>
              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-medium text-[14px] md:text-[36px] transition-all duration-300 ease-in-out cursor-pointer ${
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
                  <div className="w-[20px] h-[20px] flex justify-center items-center">
                    <FaPlus />
                  </div>
                )}
              </div>

              <div
                className={`w-full md:w-2/3 flex md:justify-between justify-center items-center text-center md:text-start font-medium text-[14px] md:text-[36px] transition-all duration-300 ease-in-out cursor-pointer ${
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
                  <div className="w-[20px] h-[20px] flex justify-center items-center">
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
                  <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pr-[50px] md:pl-0 text-[#3A3A3A]">
                    <span className="h-[45px] leading-[20px] text-[14px] md:text-[16px] lg:text-[18px] font-medium">
                      {noticeList[noticeList.length - 1]
                        ? String(noticeList[noticeList.length - 1].title).slice(
                            0,
                            30
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span className="h-[200px] leading-[24px] font-light pt-2 text-[14px] md:text-[15px]">
                      {noticeList[noticeList.length - 1]
                        ? String(
                            noticeList[noticeList.length - 1].content
                          ).slice(0, 140)
                        : ""}
                    </span>
                    <span className="h-[25px] leading-[35px] text-[12px] md:text-[16px] font-light"> {/* 첫번째 공지 날짜 */}
                      {noticeList[noticeList.length - 1]
                        ? String(noticeList[noticeList.length - 1].date)
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/2 lg:w-1/3 text-[#3A3A3A]">
                  <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:px-[25px]">
                    <span className="h-[45px] leading-[20px] text-[14px] md:text-[16px] lg:text-[18px] font-medium">
                      {noticeList[noticeList.length - 2]
                        ? String(noticeList[noticeList.length - 2].title).slice(
                            0,
                            30
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span className="h-[200px] leading-[24px] font-light pt-2 text-[14px] md:text-[15px]">
                      {noticeList[noticeList.length - 2]
                        ? String(
                            noticeList[noticeList.length - 2].content
                          ).slice(0, 140)
                        : ""}
                    </span>
                    <span className="h-[25px] leading-[25px] text-[12px] md:text-[16px] font-light"> {/* 두번째 공지 날짜 */}
                      {noticeList[noticeList.length - 2]
                        ? String(noticeList[noticeList.length - 2].date)
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="h-[280px] hidden md:flex flex-col justify-between items-start cursor-pointer w-1/3">
                  <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pl-[50px] text-[#3A3A3A]">
                    <span className="h-[45px] leading-[20px] text-[16px] md:text-[18px] font-medium">
                      {noticeList[noticeList.length - 3]
                        ? String(noticeList[noticeList.length - 3].title).slice(
                            0,
                            30
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span className="h-[200px] leading-[24px] font-light pt-2 text-[14px] md:text-[15px]">
                      {noticeList[noticeList.length - 3]
                        ? String(
                            noticeList[noticeList.length - 3].content
                          ).slice(0, 140)
                        : ""}
                    </span>
                    <span className="h-[25px] leading-[25px]] text-[16px] font-light"> {/* 세번째 공지 날짜 */}
                      {noticeList[noticeList.length - 3]
                        ? String(noticeList[noticeList.length - 3].date)
                        : ""}
                    </span>
                  </div>
                </div>
              </>
            )}

            {noticeMenu == "보도자료" && (
              <>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/3">
                  <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pr-[50px] md:pl-0 text-[#3A3A3A]">
                    <div className="w-full h-[250px] relative">
                      {newsList?.map((item: any, index: any) => (
                          <Image src={item.img}
                          alt="news_image" 
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          key={index}
                          />
                      ))}
                    </div>
                    <span className="h-[45px] leading-[18px] text-[16px] md:text-[18px] font-medium pt-3">
                      {newsList[newsList.length - 1]
                        ? String(newsList[newsList.length - 1].title).slice(
                            0,
                            45
                          )
                        : "뉴스가 없습니다."}
                    </span>
                    <span className="h-[25px] leading-[35px] text-[16px] font-light">
                      {newsList[newsList.length - 1]
                        ? String(newsList[newsList.length - 1].date)
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/3 text-[#3A3A3A]">
                  <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:px-[25px]">
                  <div className="w-full h-[250px] relative">
                      {newsList?.map((item: any, index: any) => (
                          <Image src={item.img}
                          alt="news_image" 
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          key={index}
                          />
                      ))}
                    </div>
                    <span className="h-[45px] leading-[18px] text-[16px] md:text-[18px] font-medium pt-3">
                      {newsList[newsList.length - 2]
                        ? String(newsList[newsList.length - 2].title).slice(
                            0,
                            45
                          )
                        : "뉴스가 없습니다."}
                    </span>
                    <span className="h-[25px] leading-[35px] text-[16px] font-light">
                      {newsList[newsList.length - 2]
                        ? String(newsList[newsList.length - 2].date)
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="h-[280px] flex flex-col justify-between items-start cursor-pointer w-1/3">
                  <div className="w-full h-[280px] flex flex-col flex-grow justify-center items-start pl-[20px] md:pl-[50px] text-[#3A3A3A]">
                  <div className="w-full h-[250px] relative">
                      {newsList?.map((item: any, index: any) => (
                          <Image src={item.img}
                          alt="news_image" 
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          key={index}
                          />
                      ))}
                    </div>
                    <span className="h-[45px] leading-[18px] text-[16px] md:text-[18px] font-medium pt-3">
                      {newsList[newsList.length - 3]
                        ? String(newsList[newsList.length - 3].title).slice(
                            0,
                            45
                          )
                        : "뉴스가 없습니다."}
                    </span>
                    <span className="h-[25px] leading-[35px] text-[16px] font-light">
                      {newsList[newsList.length - 3]
                        ? String(newsList[newsList.length - 3].date)
                        : ""}
                    </span>
                  </div>
                </div>
              </>
            )}

            {noticeMenu == "교육센터" && (
              <>
                <div className="w-full h-[110px] flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-full justify-center items-center text-[#484848] ">
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
