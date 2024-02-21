"use client";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { ImArrowRight2 } from "react-icons/im";
import { useRouter } from "next/navigation";

const banners = [
  "/img/inner/banner/img_1.jpg",
  "/img/inner/banner/img_2.jpg",
  "/img/inner/banner/img_3.jpg",
  "/img/inner/banner/img_1.jpg",
  "/img/inner/banner/img_2.jpg",
  "/img/inner/banner/img_3.jpg",
  "/img/inner/banner/img_1.jpg",
  "/img/inner/banner/img_2.jpg",
  "/img/inner/banner/img_3.jpg",
  "/img/inner/banner/img_1.jpg",
  "/img/inner/banner/img_2.jpg",
  "/img/inner/banner/img_3.jpg",
];

const workers = [
  "/img/inner/worker/img_1.jpg",
  "/img/inner/worker/img_2.jpg",
  "/img/inner/worker/img_1.jpg",
  "/img/inner/worker/img_2.jpg",
  "/img/inner/worker/img_1.jpg",
  "/img/inner/worker/img_2.jpg",
  "/img/inner/worker/img_1.jpg",
  "/img/inner/worker/img_2.jpg",
];

interface MainNoticeProps {
  newsList?: any;
  noticeList?: any;
}

const Notice: React.FC<MainNoticeProps> = ({ newsList, noticeList }) => {
  const [noticeMenu, setNoticeMenu] = useState<String>("알림");
  const [noticeSubMenu, setNoticeSubMenu] = useState<String>("공지사항");

  const router = useRouter();

  let noticeSubMenuList: any;
  if (noticeMenu == "알림") {
    noticeSubMenuList = ["공지사항"];
  } else if (noticeMenu == "보도자료") {
    noticeSubMenuList = ["보도자료"];
  }
  //  else if (noticeMenu == "교육센터") {
  //   noticeSubMenuList = ["교육일정"];
  // }

  // 임시 뉴스
  let notice: any;
  if (
    noticeSubMenu == "공지사항" ||
    noticeSubMenu == "입찰" ||
    noticeSubMenu == "설명자료"
  ) {
    notice = [
      ["08", "2023.08", "한국 산업표준 개정", "한국 산업표준 개정"],
      [
        "08",
        "2023.08",
        "항공교통업무 운영 및 관리규정",
        "항공교통업무 운영 및 관리규정",
      ],
      [
        "08",
        "2023.08",
        "공간정보기술자의 등급 및 경력인정",
        "공간정보기술자의 등급 및 경력인정",
      ],
    ];
  }
  if (noticeSubMenu == "채용" || noticeSubMenu == "보도자료") {
    notice = [
      ["10", "2023.08", "2023년 청년인턴 채용", "2023년 청년인턴 채용"],
      ["08", "2023.08", "새만금개발 임원모집", "새만금개발 임원모집"],
      [
        "08",
        "2023.08",
        "인천국제공항사 비상임 이사 공모정",
        "인천국제공항사 비상임 이사 공모정",
      ],
    ];
  }
  if (noticeSubMenu == "인사" || noticeSubMenu == "교육일정") {
    notice = [
      ["09", "2023.08", "인사발령(사무국장)", "인사발령(사무국장)"],
      ["08", "2023.08", "인사발령(주무관)", "인사발령(주무관)"],
      ["08", "2023.08", "인사발령(대리급)", "인사발령(대리급)"],
    ];
  }

  return (
    <div className="w-full md:flex justify-center item-start mt-[40px]">
      <div className="md:w-[1400px] md:flex justify-start items-start space-x-[30px]">
        <div className="md:border border-[#dddddd] w-full md:w-1/2 h-[250px] md:flex justify-between item-start py-[10px]">
          <p className="text-center md:hidden">
            KECEx
          </p>
          <h2 className="text-center md:hidden text-[30px] text-black font-bold leading-7 mb-8">
            Notice
          </h2>
          <div className="w-11/12 md:w-[200px] md:h-[150px] flex md:flex-col justify-between items-center leading-8 md:leading-[50px] px-[20px] font-bold text-[16px] border-b-2 md:border-0 border-primary mx-auto">
            <div
              className={`md:w-full md:flex justify-between items-center text-start px-[20px] md:font-bold text-[14px] md:text-[18px] md:border-b border-[#dddddd] transition-all duration-300 ease-in-out cursor-pointer ${
                noticeMenu == "알림" &&
                "md:-translate-x-[30px] md:bg-primary text-primary md:text-white rounded-r-2xl md:w-[120%]"
              }`}
              onClick={() => {
                setNoticeMenu("알림");
                setNoticeSubMenu("공지사항");
              }}
            >
              알림
              {noticeMenu == "알림" && (
                <div className="w-[30px] h-[30px] bg-secondary rounded-full hidden md:flex justify-center items-center">
                  <ImArrowRight2 />
                </div>
              )}
            </div>
            <div
              className={`md:w-full flex justify-between items-center text-start md:px-[20px] md:font-bold text-[14px] md:text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out cursor-pointer ${
                noticeMenu == "보도자료" &&
                "md:-translate-x-[30px] md:bg-primary text-primary md:text-white rounded-r-2xl md:w-[120%]"
              }`}
              onClick={() => {
                setNoticeMenu("보도자료");
                setNoticeSubMenu("보도자료");
              }}
            >
              보도자료
              {noticeMenu == "보도자료" && (
                <div className="w-[30px] h-[30px] bg-secondary rounded-full hidden md:flex justify-center items-center">
                  <ImArrowRight2 />
                </div>
              )}
            </div>

            <div
              className={`md:w-full flex justify-between items-center text-start md:px-[20px] md:font-bold text-[14px] md:text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out cursor-pointer ${
                noticeMenu == "교육센터" &&
                "md:-translate-x-[30px] md:bg-primary text-primary md:text-white rounded-r-2xl md:w-[120%]"
              }`}
              onClick={() => {
                setNoticeMenu("교육센터");
                setNoticeSubMenu("교육일정");
              }}
            >
              교육센터
              {noticeMenu == "교육센터" && (
                <div className="w-[30px] h-[30px] bg-secondary rounded-full hidden md:flex justify-center items-center">
                  <ImArrowRight2 />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <div className="w-full h-[60px] flex justify-between items-center px-[30px] font-bold text-[#a9a9a9]">
              <ul className="flex space-x-[10px]">
                {noticeSubMenuList?.map((item: any, index: any) => (
                  <>
                    {index != 0 && <li>/</li>}
                    <li
                      key={index}
                      className={`cursor-pointer ${
                        noticeSubMenu == item &&
                        "text-[#484848] font-extrabold "
                      }`}
                      onClick={() => setNoticeSubMenu(item)}
                    >
                      {item}
                    </li>
                  </>
                ))}
              </ul>
              <div
                className="text-[12px] cursor-pointer"
                onClick={() => {
                  if (noticeMenu == "알림") {
                    router.push("/notice/notice?page=1");
                  } else if (noticeMenu == "보도자료") {
                    router.push("/information/news?page=1");
                  }
                }}
              >
                더보기 +
              </div>
            </div>
            {noticeMenu == "알림" && (
              <>
                <div className="w-full h-[110px] flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-1/2 md:w-[200px] border-r border-[#dddddd] justify-center items-center text-[#484848] ">
                    <span className="h-[45px] leading-[45px] text-[35px] font-extrabold">
                      {noticeList[noticeList.length - 1]
                        ? String(noticeList[noticeList.length - 1].date).slice(
                            8,
                            10
                          )
                        : ""}
                    </span>
                    <span className="h-[20px] leading-[20px]">
                      {noticeList[noticeList.length - 1]
                        ? String(noticeList[noticeList.length - 1].date).slice(
                            0,
                            7
                          )
                        : ""}
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow justify-center items-start pl-[20px]">
                    <span className="h-[45px] leading-[45px] text-[16px] md:text-[20px] font-extrabold">
                      {noticeList[noticeList.length - 1]
                        ? String(noticeList[noticeList.length - 1].title).slice(
                            0,
                            13
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span className="h-[20px] leading-[20px]">
                      {noticeList[noticeList.length - 1]
                        ? String(
                            noticeList[noticeList.length - 1].content
                          ).slice(0, 20)
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-full px-[30px] cursor-pointer">
                  <div className="flex w-full justify-between item-center leading-[40px] border-b border-[#d7d7d7f2] text-[13px] font-bold">
                    <span>
                      {noticeList[noticeList.length - 2]
                        ? String(noticeList[noticeList.length - 2].title).slice(
                            0,
                            15
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span>
                      {noticeList[noticeList.length - 2]
                        ? String(noticeList[noticeList.length - 2].date).slice(
                            0,
                            7
                          )
                        : ""}
                    </span>
                  </div>
                  <div className="flex w-full justify-between item-center leading-[40px] md:border-0 border-b border-[#d7d7d7f2] text-[13px] font-bold">
                    <span>
                      {noticeList[noticeList.length - 3]
                        ? String(noticeList[noticeList.length - 3].title).slice(
                            0,
                            15
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span>
                      {noticeList[noticeList.length - 3]
                        ? String(noticeList[noticeList.length - 3].date).slice(
                            0,
                            7
                          )
                        : ""}
                    </span>
                  </div>
                </div>
              </>
            )}

            {noticeMenu == "보도자료" && (
              <>
                <div className="w-full h-[110px] flex justify-between items-center cursor-pointer">
                  <div className="flex flex-col w-1/2 md:w-[200px] border-r border-[#dddddd] justify-center items-center text-[#484848] ">
                    <span className="h-[45px] leading-[45px] text-[35px] font-extrabold">
                      {newsList[newsList.length - 1]
                        ? String(newsList[newsList.length - 1].date).slice(
                            8,
                            10
                          )
                        : ""}
                    </span>
                    <span className="h-[20px] leading-[20px]">
                      {newsList[newsList.length - 1]
                        ? String(newsList[newsList.length - 1].date).slice(0, 7)
                        : ""}
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow justify-center items-start pl-[20px]">
                    <span className="h-[45px] leading-[45px] text-[16px] md:text-[20px] font-extrabold">
                      {newsList[newsList.length - 1]
                        ? String(newsList[newsList.length - 1].title).slice(
                            0,
                            13
                          )
                        : "공지가 없습니다."}
                    </span>
                    <span className="h-[20px] leading-[20px]">
                      {newsList[newsList.length - 1]
                        ? String(newsList[newsList.length - 1].content).slice(
                            0,
                            20
                          )
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-full px-[30px] cursor-pointer">
                  <div className="flex w-full justify-between item-center leading-[40px] border-b border-[#d7d7d7f2] text-[13px] font-bold">
                    <span>
                      {newsList[newsList.length - 2]
                        ? String(newsList[newsList.length - 2].title).slice(
                            0,
                            15
                          )
                        : "뉴스가 없습니다."}
                    </span>
                    <span>
                      {newsList[newsList.length - 2]
                        ? String(newsList[newsList.length - 2].date).slice(0, 7)
                        : ""}
                    </span>
                  </div>
                  <div className="flex w-full justify-between item-center leading-[40px] md:border-0 border-b border-[#d7d7d7f2] text-[13px] font-bold">
                    <span>
                      {newsList[newsList.length - 3]
                        ? String(newsList[newsList.length - 3].title).slice(
                            0,
                            15
                          )
                        : "뉴스가 없습니다."}
                    </span>
                    <span>
                      {newsList[newsList.length - 3]
                        ? String(newsList[newsList.length - 3].date).slice(0, 7)
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
        {/* 카드뉴스 */}
        <div className="w-full md:w-1/2 md:h-[250px] md:flex md:space-x-[10px] ml-0">
          <div className="w-full md:w-1/2 h-[250px] md:p-[10px] ml-0">
            <Carousel>
              {newsList?.map((item: any, index: any) => (
                <Paper key={index} className="w-full h-[230px]">
                  <Image src={item.img} alt="image" fill />
                </Paper>
              ))}
            </Carousel>
          </div>
          <div className="w-full md:w-1/2 h-[250px] md:p-[10px]">
            <Carousel>
              {workers.map((image, index) => (
                <Paper key={index} className="w-[300px] md:w-full h-[200px] md:h-[230px]">
                  <Image src={image} alt="image" fill />
                </Paper>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
