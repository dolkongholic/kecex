"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";

// Image
import edu_1 from "@/public/img/icon/edu_1.png";
import edu_2 from "@/public/img/icon/edu_2.png";
import edu_3 from "@/public/img/icon/edu_3.png";
import edu_4 from "@/public/img/icon/edu_4.png";
import edu_5 from "@/public/img/icon/edu_5.png";
import Image from "next/image";

const MainList = [
  {
    title: "교육신청",
    url: "/education/apply/apply",
  },
  {
    title: "나의 학습활동",
    url: "/education/mystatus/apply",
  },
];

const location = "나의 학습활동";

const MyStatusApplyClient = () => {
  const [pageMenu, setPageMenu] = useState<any>("나의 학습활동");
  const [select, setSelect] = useState<string>("수강신청");

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-gray-200 flex justify-center text-[13px]">
          <div className="w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              교육센터 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"교육신청"} />
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
          <ContentTitle title={location} />

          <div className="flex w-full mt-[50px] justify-between">
            <div
              className={`flex-col justify-center items-center border w-[200px] h-[200px] p-[20px] text-gray-500 hover:border-blue-500 cursor-pointer ${
                select == "수강신청"
                  ? "border-blue-500 border-2"
                  : "border-gray-100 border"
              } `}
              onClick={() => setSelect("수강신청")}
            >
              <div className="w-full flex justify-center  items-center">
                <div className="w-[100px] h-[100px]">
                  <Image src={edu_1} alt="edu_1" />
                </div>
              </div>
              <div className="w-full flex justify-center  items-center mt-[10px]">
                수강신청
              </div>
              <div className="w-full flex justify-center  items-center">
                <span className="font-bold  text-black text-[20px]">2</span> 건
              </div>
            </div>
            <div
              className={`flex-col justify-center items-center  w-[200px] h-[200px] p-[20px] text-gray-500 hover:border-blue-500 cursor-pointer ${
                select == "수강중"
                  ? "border-blue-500 border-2"
                  : "border-gray-100 border"
              } `}
              onClick={() => setSelect("수강중")}
            >
              <div className="w-full flex justify-center  items-center">
                <div className="w-[100px] h-[100px]">
                  <Image src={edu_2} alt="edu_2" />
                </div>
              </div>
              <div className="w-full flex justify-center  items-center mt-[10px]">
                수강중
              </div>
              <div className="w-full flex justify-center  items-center">
                <span className="font-bold  text-black text-[20px]">1</span> 건
              </div>
            </div>
            <div
              className={`flex-col justify-center items-center border w-[200px] h-[200px] p-[20px] text-gray-500 hover:border-blue-500 cursor-pointer ${
                select == "수료"
                  ? "border-blue-500 border-2"
                  : "border-gray-100 border"
              } `}
              onClick={() => setSelect("수료")}
            >
              <div className="w-full flex justify-center  items-center">
                <div className="w-[100px] h-[100px]">
                  <Image src={edu_3} alt="edu_3" />
                </div>
              </div>
              <div className="w-full flex justify-center  items-center mt-[10px]">
                수료
              </div>
              <div className="w-full flex justify-center  items-center">
                <span className="font-bold  text-black text-[20px]">0</span> 건
              </div>
            </div>
            <div
              className={`flex-col justify-center items-center border w-[200px] h-[200px] p-[20px] text-gray-500 hover:border-blue-500 cursor-pointer ${
                select == "미수료"
                  ? "border-blue-500 border-2"
                  : "border-gray-100 border"
              } `}
              onClick={() => setSelect("미수료")}
            >
              <div className="w-full flex justify-center  items-center">
                <div className="w-[100px] h-[100px]">
                  <Image src={edu_4} alt="edu_4" />
                </div>
              </div>
              <div className="w-full flex justify-center  items-center mt-[10px]">
                미수료
              </div>
              <div className="w-full flex justify-center  items-center">
                <span className="font-bold  text-black text-[20px]">0</span> 건
              </div>
            </div>
            <div
              className={`flex-col justify-center items-center border w-[200px] h-[200px] p-[20px] text-gray-500 hover:border-blue-500 cursor-pointer ${
                select == "수강취소"
                  ? "border-blue-500 border-2"
                  : "border-gray-100 border"
              } `}
              onClick={() => setSelect("수강취소")}
            >
              <div className="w-full flex justify-center  items-center">
                <div className="w-[100px] h-[100px]">
                  <Image src={edu_5} alt="edu_5" />
                </div>
              </div>
              <div className="w-full flex justify-center  items-center mt-[10px]">
                수강취소
              </div>
              <div className="w-full flex justify-center  items-center">
                <span className="font-bold  text-black text-[20px]">0</span> 건
              </div>
            </div>
          </div>

          <div className="w-full mt-[50px] flex-col pl-[50px]">
            <div className="text-black text-[18px] leading-[50px]">
              나의 교육이력 찾기
            </div>
            <div className="leading-[40px]">교육이력 찾기 안내</div>
            <div className="leading-[30px]">
              ① 지난 교육이력 중 이름과 생년월일이 같은 교육 이력정보가
              조회됩니다.
            </div>
            <div className="leading-[30px]">
              ② 지난 교육과정을 선택 후 인증 버튼을 누릅니다.
            </div>
            <div className="leading-[30px]">
              ③ 과거 사용하였던 전화번호(유선,무선) 또는 이메일 주소를
              입력합니다. (하나라도 일치하면 인증 완료)
            </div>
            <div className="leading-[30px]">
              ④ 인증 완료 시에는 [나의 학습 현황]페이지의 [수료한 과정]으로
              이동합니다.
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-[50px]">
            <button className="w-[200px] h-[50px] bg-blue-500 flex justify-center items-center text-white">
              본인인증
            </button>
          </div>

          <div className="mt-[30px] w-full h-full">
            <div className="w-full text-black text-[14px] border-b border-blue-500 leading-[50px]">
              전체 <span className="font-bold">17</span> 건
            </div>
          </div>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="flex px-[40px] py-[20px] justify-between items-center w-full border-b border-gray-200 hover:shadow-md"
            >
              <div className="flex">
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    id={`item_${index}`}
                    className="w-[20px] h-[20px]"
                    name="course"
                  />
                </div>
                <label
                  htmlFor={`item_${index}`}
                  className="w-[500px] pl-[30px] flex"
                >
                  <div className="flex-col">
                    <div className="text-[20px] font-bold text-black mr-[20px]">
                      방폭 기초 교육
                    </div>
                    <div className="text-gray-500 -translate-y-[5px]">
                      Basic Course
                    </div>
                  </div>
                  {index == 1 && (
                    <div className="flex justify-center items-center ml-[20px]">
                      <div className="flex bg-blue-500_light opacity-80 px-[10px]">
                        <FaMedal className="scale-[1.8] text-active translate-y-[2px]" />
                        <span className="pl-[10px] text-active text-[12px]">
                          수료
                        </span>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              <div className="flex-col space-y-[7px]">
                <div className="text-superdarkgray">
                  <span className="text-gray-500 mr-[10px]">교육기간</span>{" "}
                  2023.11.15 ~ 2023.11.16, 09:00 ~ 18:00
                </div>
                <div className="text-superdarkgray">
                  <span className="text-gray-500 mr-[10px]">교육장소</span>{" "}
                  울산교육장
                </div>
                <div className="text-superdarkgray">
                  <span className="text-gray-500 mr-[25px]">수료자</span> 김영호
                  850320-1******
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default MyStatusApplyClient;
