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
    url: "/notice/notice",
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
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-100 flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              알림센터 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>

      <main className="w-[1400px] flex justify-between items-start m-auto">
        <section className="flex flex-col justify-start items-center">
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

        <section className="py-[20px]  pl-[40px] w-full flex flex-col justify-start items-start">
          <div className="w-full py-[40px] px-[120px]">
            <ContentTitle title="자주묻는 질문" center={true} />

            <div className="w-full flex flex-col mb-[30px]">
              <div className="w-full h-[50px] flex">
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "전체" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("전체")}
                >
                  전체
                </div>
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "사이트이용" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("사이트이용")}
                >
                  사이트이용
                </div>
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "교육신청" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("교육신청")}
                >
                  교육신청
                </div>
                <div
                  className={`w-1/4 border border-gray-200 text-center leading-[50px] cursor-pointer ${
                    select == "결제" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("결제")}
                >
                  결제
                </div>
              </div>
              <div className="w-full h-[50px] flex">
                <div
                  className={`w-1/4 border border-gray-200 border-t-0 text-center leading-[50px] cursor-pointer ${
                    select == "접수취소" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("접수취소")}
                >
                  접수취소
                </div>
                <div
                  className={`w-1/4 border border-gray-200 border-t-0 text-center leading-[50px] cursor-pointer ${
                    select == "시험관련" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("시험관련")}
                >
                  시험관련
                </div>
                <div
                  className={`w-1/4 border border-gray-200 border-t-0 text-center leading-[50px] cursor-pointer ${
                    select == "자격증" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("자격증")}
                >
                  자격증
                </div>
                <div
                  className={`w-1/4 border border-gray-200 border-t-0 text-center leading-[50px] cursor-pointer ${
                    select == "세미나/맨파워" ? "bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => setSelect("세미나/맨파워")}
                >
                  세미나/맨파워
                </div>
              </div>
            </div>

            {(select == "전체" || select == "사이트이용") && (
              <>
                <div
                  className={`w-full h-[70px] border-t border-t-blue-500 flex justify-between px-[20px]  cursor-pointer border-b-2 border-gray-200 ${
                    Qselect == 1 ? "text-blue-500" : "text-black"
                  }`}
                  onClick={() => QselectFn(1)}
                >
                  <div className="flex ">
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
                      정부에서는 개인정보보호법에 근거하여 주민등록번호 수집을
                      엄격하게 규제하고있습니다.
                      <br />
                      본인 여부를 확인하기 위해서는 반드시 본인인증 절차를
                      진행해주셔야 합니다.
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className={`w-full h-[70px] border-t border-t-blue-500 flex justify-between px-[20px]  cursor-pointer border-b-2 border-gray-200 ${
                    Qselect == 2 ? "text-blue-500" : "text-black"
                  }`}
                  onClick={() => QselectFn(2)}
                >
                  <div className="flex ">
                    <div className="mr-[20px] text-[30px] leading-[70px]">
                      Q.
                    </div>
                    <div className="leading-[70px]">
                      아이디 또는 패스워드를 분실 했을 경우 어떻게 해야하나요?
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
                      정부에서는 개인정보보호법에 근거하여 주민등록번호 수집을
                      엄격하게 규제하고있습니다.
                      <br />
                      본인 여부를 확인하기 위해서는 반드시 본인인증 절차를
                      진행해주셔야 합니다.
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
