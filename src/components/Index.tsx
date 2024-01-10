import getCurrentUser from "@/app/actions/getCurrentUser";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResposiveCarousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import Image from "next/image";
import useInsertMainBanner from "@/app/hooks/useInsertMainBanner";
import { getSession, useSession } from "next-auth/react";

const images = [
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
];

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

export default function Index() {
  const [noticeMenu, setNoticeMenu] = useState<String>("알림");
  const [noticeSubMenu, setNoticeSubMenu] = useState<String>("공지사항");

  const InsertMainBannerModal = useInsertMainBanner();

  const [currentUser, setCurrentUser] = useState<any>(null);
  // ... other state definitions

  const session = getSession();
  const { user } = session;
  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser(session);
        setCurrentUser(currentUser);
      } catch (error) {
        // Handle errors if necessary
        console.error("Failed to fetch user", error);
      }
    };
    fetchUser();
  }, []);

  let noticeSubMenuList: any;
  if (noticeMenu == "알림") {
    noticeSubMenuList = ["공지사항", "채용", "인사", "입찰"];
  } else if (noticeMenu == "보도자료") {
    noticeSubMenuList = ["보도자료", "설명자료"];
  } else if (noticeMenu == "교육센터") {
    noticeSubMenuList = ["교육일정"];
  }

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

  const InsertMainBanner = () => {
    InsertMainBannerModal.onOpen();
  };
  return (
    <section>
      <div className="w-full h-[450px]">
        {currentUser && currentUser.staff && (
          <div
            className="lg:block hidden absolute right-0 mr-2 mt-2 w-32 py-2 bg-primary z-[55] text-white text-center rounded-md cursor-pointer"
            onClick={() => InsertMainBanner()}
          >
            추가하기
          </div>
        )}

        <div className="w-full h-[450px] bg-black z-[50] flex justify-center items-center bg-[url('/img/common/main_bg.jpg')] bg-cover bg-center">
          <ResposiveCarousel
            className="absolute top-[165px] w-[1400px] h-[450px] z-[40] flex justify-center items-center"
            showArrows={true}
            centerMode={true}
            centerSlidePercentage={31}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
          >
            {images.map((image, index) => (
              <Paper
                className={`w-[300px] h-[300px] hover:-translate-x-[25px] hover:-translate-y-[25px] hover:w-[350px] hover:h-[350px] transform duration-150 transition-all cursor-pointer`}
                key={index}
              >
                <Image src={image} alt="PopUp" fill />
              </Paper>
            ))}
          </ResposiveCarousel>
        </div>
      </div>

      {/* 게시판 섹션 */}
      <div className="w-full flex justify-center item-start mt-[40px]">
        <div className="w-[1400px] flex justify-start items-start space-x-[30px]">
          <div className="border border-[#dddddd] w-1/2 h-[250px] flex justify-between item-start py-[10px]">
            <div className="w-[200px] h-[150px] flex flex-col justify-between items-center leading-[50px] px-[20px] font-bold text-[16px]">
              <div
                className={`w-full flex justify-between items-center text-start px-[20px] font-bold text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "알림" &&
                  "-translate-x-[30px] bg-active text-white rounded-r-2xl w-[120%]"
                }`}
                onClick={() => {
                  setNoticeMenu("알림");
                  setNoticeSubMenu("공지사항");
                }}
              >
                알림
                {noticeMenu == "알림" && (
                  <div className="w-[30px] h-[30px] bg-[#2c90d7] rounded-full flex justify-center items-center">
                    <ImArrowRight2 />
                  </div>
                )}
              </div>
              <div
                className={`w-full flex justify-between items-center text-start px-[20px] font-bold text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "보도자료" &&
                  "-translate-x-[30px] bg-active text-white rounded-r-2xl w-[120%]"
                }`}
                onClick={() => {
                  setNoticeMenu("보도자료");
                  setNoticeSubMenu("보도자료");
                }}
              >
                보도자료
                {noticeMenu == "보도자료" && (
                  <div className="w-[30px] h-[30px] bg-[#2c90d7] rounded-full flex justify-center items-center">
                    <ImArrowRight2 />
                  </div>
                )}
              </div>
              <div
                className={`w-full flex justify-between items-center text-start px-[20px] font-bold text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out cursor-pointer ${
                  noticeMenu == "교육센터" &&
                  "-translate-x-[30px] bg-active text-white rounded-r-2xl w-[120%]"
                }`}
                onClick={() => {
                  setNoticeMenu("교육센터");
                  setNoticeSubMenu("교육일정");
                }}
              >
                교육센터
                {noticeMenu == "교육센터" && (
                  <div className="w-[30px] h-[30px] bg-[#2c90d7] rounded-full flex justify-center items-center">
                    <ImArrowRight2 />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-3/4">
              <div className="w-full h-[60px] flex justify-between items-center px-[30px] font-bold text-[#a9a9a9]">
                <ul className="flex space-x-[10px]">
                  {noticeSubMenuList.map((item: any, index: any) => (
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
                <div className="text-[12px] cursor-pointer">더보기 +</div>
              </div>
              <div className="w-full h-[110px] flex justify-between items-center cursor-pointer">
                <div className="flex flex-col w-[200px] border-r border-[#dddddd] justify-center items-center text-[#484848] ">
                  <span className="h-[45px] leading-[45px] text-[35px] font-extrabold">
                    {notice[0][0]}
                  </span>
                  <span className="h-[20px] leading-[20px]">
                    {notice[0][1]}
                  </span>
                </div>
                <div className="flex flex-col flex-grow justify-center items-start pl-[20px]">
                  <span className="h-[45px] leading-[45px] text-[20px] font-extrabold">
                    {notice[0][2]}
                  </span>
                  <span className="h-[20px] leading-[20px]">
                    {notice[0][3]}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full px-[30px] cursor-pointer">
                <div className="flex w-full justify-between item-center leading-[40px] border-b border-[#d7d7d7f2] text-[13px] font-bold">
                  <span>{notice[1][2]}</span>
                  <span>
                    {notice[1][1]}-{notice[1][0]}
                  </span>
                </div>
                <div className="flex w-full justify-between item-center leading-[40px] text-[13px] font-bold">
                  <span>{notice[2][2]}</span>
                  <span>
                    {notice[2][1]}-{notice[2][0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 카드뉴스 */}
          <div className="w-1/2 h-[250px] flex space-x-[10px]">
            <div className="w-1/2 h-[250px] p-[10px]">
              <Carousel>
                {banners.map((image, index) => (
                  <Paper key={index} className="w-full h-[230px]">
                    <Image src={image} alt="image" fill />
                  </Paper>
                ))}
              </Carousel>
            </div>
            <div className="w-1/2 h-[250px] p-[10px]">
              <Carousel>
                {workers.map((image, index) => (
                  <Paper key={index} className="w-full h-[230px]">
                    <Image src={image} alt="image" fill />
                  </Paper>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
