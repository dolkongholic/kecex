"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";

import ContentTitle from "@/components/content/title";
import { useSession } from "next-auth/react";

import { useState, useRef } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image

const location = "개인정보처리방침";

interface PrivacyProps {
  currentUser: any;
}
const PrivacyClient: React.FC<PrivacyProps> = ({ currentUser }) =>{
  const { data: session } = useSession();
  const MainList = [
    {
      title: "이용약관",
      url: "/policy/serviceinfo/",
      sub: null,
    },
    {
      title: "개인정보처리방침",
      url: "/policy/privacy/",
      sub: null,
    },

  ];
  const passwordRef = useRef(null);
  const [pageMenu, setPageMenu] = useState<any>("이용약관");

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              이용약관 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title="이용약관" />
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

        <section className="p-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="flex justify-center mt-[30px] md:mt-[90px] mx-auto">
            <div className="md:w-[900px] mx-auto">
              <p>
                <span className="text-[24px] font-medium">개인정보 수집 및 이용에 대한 안내</span><br/><br/>

                한국방폭협회는 건설기술인의 교육관리를 위하여 아래의 개인정보를 수집ㆍ이용을 위해 「개인정보 보호법」 제15조, 
                제17조 및 제22조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립 ‧ 공개합니다.<br/><br/>

                1. 수집ㆍ이용 목적<br/>
                - 한국방폭협회에서는 회원의 자질향상 및 개인역량 강화를 위하여 교육을 지원하고 있으며, 
                이를 위하여 아래와 같은 목적으로 수집하며 이외의 목적으로는 사용되지 않습니다.<br/>
                - 수집ㆍ이용 목적 : 교육안내, 교육학사 관리의 목적으로 활용<br/>

                2. 수집 항목<br/>
                - (필수) 필수 : 회원아이디, 비밀번호, 성명, 전화번호(휴대폰 포함), 이메일<br/>
                - (선택) 없음<br/><br/>

                3. 보유 및 이용기간<br/>
                - 교육 종료 후 3년 또는 최종 이용일로부터 2년<br/><br/>

                4. 동의거부 권리 및 거부에 따른 불이익<br/>
                - 개인정보 수집ㆍ이용 동의에 대하여 거부할 수 있으며, 동의를 거부하는 경우에는 본 교육의 신청제한 등의 불이익이 있을 수 있습니다.<br/><br/>
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default PrivacyClient;
