"use client";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import {
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";

import Image from "next/image";
import PicNotice_02 from "@/public/img/page_top/notice_02.jpg";

const MainList = [
  {
    title: "인재정보",
    url: "/notice/worker",
    sub: null,
  },
  {
    title: "FAQ",
    url: "/notice/faq",
    sub: null,
  },
  {
    title: "문의사항",
    url: "/notice/qna",
    sub: null,
  },
  {
    title: "공지사항",
    url: "/notice/notice?page=1",
    sub: null,
  },
];

const location = "FAQ";

const FaQClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("FAQ");
  const [select, setSelect] = useState<string>("전체");
  const [Qselect, setQselect] = useState<number>(1);

  function QselectFn(number: number) {
    if (Qselect == number) {
      setQselect(0);
    } else {
      setQselect(number);
    }
  }

  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicNotice_02}
            layout="fill"
            objectFit="cover"
            alt="item.title"
            className="object-cover"
          />
          <div className="bg-neutral-900/50 absolute w-full h-full left-0 top-0 z-20 text-center text-white font-medium text-[36px] leading-[200px]">
            {location}
          </div>
        </div>
      </figure>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              알림센터 <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col justify-start items-center">
          <div className=" bg-white flex justify-center item-start">
            <div className="w-full flex items-start">
              <div className="w-[240px] flex flex-col">
                <SubNavHeader title={"알림센터"} />
                <div className="flex flex-col w-full">
                  <SubNav
                    MainList={MainList}
                    pageMenu={pageMenu}
                    setPageMenu={setPageMenu}
                    location={location}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px]">
            <ContentTitle title="자주묻는 질문" center={true} />

            <div className="w-full flex flex-col mb-[30px]">
              <div className="w-full h-[50px] flex text-[15px] md:text-base">
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "전체" ? "bg-secondary text-white" : ""
                  } `}
                  onClick={() => setSelect("전체")}
                >
                  전체
                </div>
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "사이트이용" ? "bg-secondary text-white" : ""
                  } `}
                  onClick={() => setSelect("사이트이용")}
                >
                  사이트 이용
                </div>
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "교육신청" ? "bg-secondary text-white" : ""
                  } `}
                  onClick={() => setSelect("교육신청")}
                >
                  교육문의
                </div>
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "기타" ? "bg-secondary text-white" : ""
                  } `}
                  onClick={() => setSelect("기타")}
                >
                  기타
                </div>
              </div>
            </div>

            {(select == "전체" || select == "사이트이용") && (
              <>
                <div
                  className={`w-full md:h-[70px]  flex justify-between px-[20px]  cursor-pointer ${
                    Qselect == 1
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(1)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      회원가입 시 본인인증을 해야하나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 1 ? (
                      <RiArrowUpSLine className="w-[25px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 1 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      회원가입 시 본인인증은 하지 않습니다. <br /> 다만,
                      회원가입시 입력되는 정보는 본인이여야하며, 정회원 전환시
                      본인인증 절차가 있습니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className={`w-full h-[70px]  flex justify-between px-[20px]  cursor-pointer ${
                    Qselect == 2
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(2)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      홈페이지에 공개된 자료들은 사용해도 되나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 2 ? (
                      <RiArrowUpSLine className="w-[25px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 2 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      자료를 받아 사용하시는것은 가능하나 자료의 가공 및 재활용
                      등은 금지됩니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}

            {(select == "전체" || select == "교육신청") && (
              <>
                <div
                  className={`w-full h-[70px] flex justify-between px-[20px]  cursor-pointer ${
                    Qselect == 3
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(3)}
                >
                  <div className="flex md:py-0">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      교육 신청은 어떻게 하나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 3 ? (
                      <RiArrowUpSLine className="w-[25px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 3 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>웹 사이트 상단 메뉴 교육 센터에서 신청할 수 있습니다.</p>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`w-full h-[70px]  flex justify-between px-[20px]  cursor-pointer ${
                    Qselect == 4
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(4)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      교육 취소는 어떻게 하나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 4 ? (
                      <RiArrowUpSLine className="w-[45px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 4 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      교육취소는 로그인 후 마이페이지에서 교육 관리 페이지를
                      확인하시면 취소 가능합니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`w-full h-[70px] flex justify-between px-[20px] cursor-pointer  ${
                    Qselect == 5
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(5)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      교육 일정 변경을 하고 싶어요.
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 5 ? (
                      <RiArrowUpSLine className="w-[55px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 5 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      교육일정 변경은 교육을 먼저 취소하신 후 다시 신청하셔야
                      합니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}

            {(select == "전체" || select == "기타") && (
              <>
                <div
                  className={`w-full md:h-[70px]  flex justify-between px-[20px] cursor-pointer ${
                    Qselect == 6
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(6)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      정회원 신청은 어떻게 하나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 6 ? (
                      <RiArrowUpSLine className="w-[25px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 6 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      웹 로그인 후 상단 마이페이지에서 정회원 신청 메뉴를
                      이용하여, <br /> 입회원서를 다운받아 신청할수 있습니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`w-full h-[70px] flex justify-between px-[20px] cursor-pointer ${
                    Qselect == 7
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(7)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      회비 납부는 어떻게 하나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 7 ? (
                      <RiArrowUpSLine className="w-[45px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 7 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      웹 로그인 후 상단 마이페이지에서 회비 납부 메뉴를
                      확인하여, <br /> 계좌이체 후 납부 확인 신청 을 통해서
                      가능합니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`w-full h-[70px]  flex justify-between px-[20px]  cursor-pointer  ${
                    Qselect == 8
                      ? "text-secondary border-b border-secondary"
                      : "text-black border-b border-gray-200"
                  }`}
                  onClick={() => QselectFn(8)}
                >
                  <div className="flex">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      교육비 환불은 어떻게 받나요?
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {Qselect == 8 ? (
                      <RiArrowUpSLine className="w-[55px] h-[25px]" />
                    ) : (
                      <RiArrowDownSLine className="w-[25px] h-[25px]" />
                    )}
                  </div>
                </div>
                {Qselect == 8 ? (
                  <div className="bg-gray-100 text-base text-black px-[40px] py-[20px]">
                    <p>
                      교육 일정을 취소 하실때 작성하신 <br />
                      환불 요청 계좌를 통해 1~2일 후 입금 됩니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default FaQClient;