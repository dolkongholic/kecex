"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiDotBold } from "react-icons/pi";

const MainList = [
  {
    title: "회원",
    url: "#",
    sub: [
      { title: "회원가입", url: "/business/member/join" },
      { title: "경력관리", url: "/business/member/career" },
      { title: "경력수첩", url: "/business/member/careercard" },
    ],
  },
  {
    title: "교육",
    url: "#",
    sub: [
      { title: "방폭기초교육", url: "/business/education/course01" },
      { title: "방폭인력양성 교육", url: "/business/education/course02" },
      { title: "기업형 교육", url: "/business/education/course03" },
      { title: "교육개발", url: "/business/education/develop" },
    ],
  },
  {
    title: "컨설팅",
    url: "#",
    sub: [
      { title: "방폭사전진단", url: "/business/consulting/inspection" },
      { title: "방폭기기선정", url: "/business/consulting/equipment" },
    ],
  },
];

export default function DevelopPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("교육");
  const [pageSubMenu, setPagSubMenu] = useState<any>("교육개발");

  const MainSelect = (title: string) => {
    console.log(title, menu);
    if (pageMenu == title) {
      setPageMenu("");
    } else {
      setPageMenu(title);
    }
  };

  return (
    <section>
      <Header menu={menu} setMenu={setMenu} />

      <section className="flex flex-col justify-start items-center">
        <div className="h-[150px] w-full bg-blue-500 z-10"></div>
        <div className="w-[1400px] bg-white z-20 -translate-y-[75px] flex justify-center item-start">
          <div className="w-full flex justify-between items-start">
            <div className="w-1/6 flex justify-center items-center flex-col">
              <div className="w-full h-[170px] bg-gradient-to-tl bg-blue-900  flex justify-center items-center text-center text-white text-[25px] font-bold">
                {pageSubMenu}
              </div>

              <div className="flex flex-col w-full mt-[2px]">
                {MainList.map((item: any, index: any) => (
                  <div key={index}>
                    <Link passHref href={item.url}>
                      <div
                        className={`
                      ${index != 0 && "border-t-0"}
                      ${
                        pageMenu == item.title
                          ? "bg-slate-700 text-white"
                          : "border border-slate-200 text-slate-700 hover:bg-gray-100"
                      } h-[60px] flex justify-between items-center  px-[20px] cursor-pointer`}
                        onClick={() => MainSelect(item.title)}
                      >
                        <span>{item.title}</span>
                        <span>
                          {item.sub != null ? (
                            pageMenu == item.title ? (
                              <AiOutlineMinus />
                            ) : (
                              <AiOutlinePlus />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </Link>
                    {item.sub && item.title == pageMenu && (
                      <div className="flex flex-col w-full bg-blue-50 py-[10px] pl-[20px] text-sm border-b border-slate-200">
                        <ul className="space-y-[10px]">
                          {item.sub.map((sub_item: any, sub_index: any) => (
                            <li key={sub_index}>
                              <Link
                                passHref
                                href={sub_item.url}
                                className="h-[60px] w-full"
                              >
                                <div className="hover:text-slate-700 hover:underline flex justify-start item-center leading-[20px]">
                                  <span className="flex justify-start item-center leading-[20px] pt-[5px]">
                                    <PiDotBold />
                                  </span>
                                  <span className="flex justify-start item-center leading-[20px]">
                                    {sub_item.title}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
