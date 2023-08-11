import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";

type Props = {
  menu: any;
  setMenu: any;
};

export default function Content({ menu, setMenu }: Props) {
  const [noticeMenu, setNoticeMenu] = useState<String>("알림");
  const [noticeSubMenu, setNoticeSubMenu] = useState<String>("공지사항");

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

  return (
    <section>
      <div className="w-full h-[500px]">
        <div className="w-full h-[500px] bg-black z-[50]"></div>
        <Carousel
          className="absolute top-[165px] w-full h-[500px] z-[40]"
          indicators={false}
          cycleNavigation={true}
        >
          <Paper className="bg-red-300 w-full h-[500px] opacity-60"></Paper>
          <Paper className="bg-yellow-300 w-full h-[500px] opacity-60"></Paper>
          <Paper className="bg-slate-300 w-full h-[500px] opacity-60"></Paper>
          <Paper className="bg-fuchsia-300 w-full h-[500px] opacity-60"></Paper>
        </Carousel>
      </div>

      {/* 게시판 섹션 */}
      <div className="w-full flex justify-center item-start mt-[40px]">
        <div className="w-[1400px] flex justify-start items-start space-x-[30px]">
          <div className="border border-[#dddddd] w-1/2 h-[250px] flex justify-between item-start py-[10px]">
            <div className="w-[200px] h-[150px] flex flex-col justify-between items-center leading-[50px] px-[20px] font-bold text-[16px]">
              <div
                className={`w-full flex justify-between items-center text-start px-[20px] font-bold text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out ${
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
                className={`w-full flex justify-between items-center text-start px-[20px] font-bold text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out ${
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
                className={`w-full flex justify-between items-center text-start px-[20px] font-bold text-[18px] border-b border-[#dddddd] transition-all duration-300 ease-in-out ${
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
                        className={`${
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
                <div className="text-[12px]">더보기 +</div>
              </div>
              <div className="w-full h-[110px] flex justify-between items-center">
                <div className="flex flex-col w-[200px] border-r border-[#dddddd] justify-center items-center text-[#484848]">
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
              <div className="flex flex-col w-full px-[30px]">
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
          <div className="w-1/2 h-[250px]">
            <Carousel indicators={true} cycleNavigation={true}>
              <Paper className="bg-red-300 w-full h-[230px] opacity-60">
                카드뉴스
              </Paper>
              <Paper className="bg-yellow-300 w-full h-[230px] opacity-60">
                카드뉴스
              </Paper>
              <Paper className="bg-slate-300 w-full h-[230px] opacity-60">
                카드뉴스
              </Paper>
              <Paper className="bg-fuchsia-300 w-full h-[230px] opacity-60">
                카드뉴스
              </Paper>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
