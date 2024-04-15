"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

// Image
const location = "경력관리";

interface ResumeProps {
  currentUser: any;
}
const ResumeClient: React.FC<ResumeProps> = ({ currentUser }) =>{
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
        // { title: "세미나/컨설팅 신청 현황", url: "/mypage/overall/all03" },
        // { title: "경력관리 현황", url: "/mypage/overall/all04" },
      ],
    },
    {
      title: "회원정보 수정",
      url: "/mypage/profile",
      sub: null,
    },
    {
      title: "정회원 가입",
      url: "/mypage/regular",
      sub: null,
    },
    {
      title: "회비 납부",
      url: "#",
      sub: [
        { title: "회비 납부", url: "/mypage/payment/payment" },
        { title: "회비 납부내역", url: "/mypage/payment/detail" },
      ],
    },
    {
      title: "회원증 출력",
      url: "/mypage/print",
      sub: null,
    },
    {
      title: "1:1문의 현황",
      url: "/mypage/overall/all02",
      sub: null,
    },
    {
      title: "경력관리",
      url: "/mypage/resume",
      sub: null,
    },
    {
      title: "경력수첩 발급",
      url: "#",
      sub: [
        { title: "경력수첩 발급", url: "/mypage/career/print" },
        // { title: "경력수첩 발급현황", url: "/mypage/carrear/sheet" },
      ],
    },
    {
      title: "회원탈퇴",
      url: "/mypage/out",
      sub: null,
    },
    {
      title: "관리자 메뉴",
      url: "#",
      sub: [
        { title: "회비 납부 관리", url: "/mypage/management/payment/"  },
        { title: "회원 관리", url: "/mypage/management/user/" },
        { title: "문의 관리", url: "/mypage/management/qna/" },
      ],
      staff:true
    },
  ];
  const [selectedFile, setSelectedFile]: any = useState(null);
  const [imagePreview, setImagePreview]: any = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    birthDate: "",
    nationality: "",
    language1: "",
    languageLevel1: "",
    school1: "",
    major1: "",
    degree1: "",
  });

  //페이지 로드 시 기존 정보 가져오기
  useEffect(() => {
    if(currentUser) {
      // 기존 정보가 있다면 해당 정보를 가져와서 상태(state)에 설정
      setUserInfo({
        name: currentUser.name,
        birthDate: currentUser.birthDate,
        nationality: currentUser.nationality,
        language1: currentUser.language1,
        languageLevel1: currentUser.languageLevel1,
        school1: currentUser.school1,
        major1: currentUser.major1,
        degree1: currentUser.degree1,
      })
    }
  }, [currentUser]);

  //첨부파일 업로드
  const updateLabel = (event: any) => {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      setSelectedFile(`[첨부] ${file.name}`);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setSelectedFile(null);
      setImagePreview(null);
    }
  };

  return (
    <section>
      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
          <div className="w-full md:w-[1400px] flex justify-end pr-[20px]">
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              Home <RiArrowRightSLine className="text-[24px] pt-[3px]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] justify-between items-center">
              마이페이지 <RiArrowRightSLine className="text-[24px] pt-[3px]" />
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
                <SubNavHeader title={"마이페이지"} />
                <div className="flex flex-col w-full">
                  <SubNav
                    MainList={MainList}
                    pageMenu={pageMenu}
                    setPageMenu={setPageMenu}
                    location={location}
                    currentUser={currentUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[15px] py-[40px] md:pl-[50px] md:pr-[20px] w-full flex flex-col justify-start items-start">
          <ContentTitle title={location} center={true} />
          <div className="text-black w-full flex flex-col justify-between item-center border-b-secondary border-b-2">
            <div className="h-[60px] md:h-[40px]">
              <span className="text-red-500">
                이력서 미작성 시 교육 신청 진행 불가
              </span>
              합니다. 
              <span className="text-[13px]">(현재 이력서 입력이 지원되지 않는 상태입니다)</span>
            </div>
          </div>
          <div className="w-full">
            <article className="w-full mt-12">
              <h3 className="text-subtitle font-bold mt-5 text-neutral-800">
                여권정보
              </h3>
              <div className="md:flex pt-4">
                <div id="pic_area" className="w-[120px] md:w-[170px] h-[192px] mx-auto md:mx-0 mb-7 md:mb-0">
                  <div className="w-[120px] h-[160px] md:w-[135px] md:h-[180px] relative border border-gray p-2">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="이미지 미리보기"
                        fill
                      />
                    ) : (
                      <span className="text-[13px]">
                        {/* 내가 선택한 파일 이름 여기에 표시 */}
                        {selectedFile ? selectedFile : "파일을 선택하세요."}
                      </span>
                    )}
                  </div>
                  <input
                    type="file"
                    id="fileInput"
                    name="file"
                    hidden
                    onChange={updateLabel}
                  />
                  <label
                    htmlFor="fileInput"
                    className="inline-block py-[6px] mt-1 text-center w-[120px] md:w-[135px] h-9 bg-primary text-white box-border"
                  >
                    첨부파일
                  </label>
                </div>
                <div id="form_area" className="w-full text-[13px] md:text-base translate-y-[340px] md:translate-y-0
                ">
                  <fieldset className="border border-gray-200 text-center w-full text-black">
                    <legend className="w-1/6 md:w-[155px] h-12 md:h-14 float-left md:pl-7 pt-1 md:pt-4 text-center md:text-left">
                      성명<br className="md:hidden"/>
                      (한글)
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-1/6 h-12 md:h-14 float-left pt-1 md:pt-2 box-border">
                      <input
                        type="text"
                        placeholder="성"
                        className="pl-4 h-10"
                        // defaultValue={}
                      />
                    </div>
                    <div className="before:border-l before:border-gray-200 w-4/6 h-12 md:h-14 float-left pt-1 md:p-2 box-border">
                      <input
                        type="text"
                        placeholder="이름"
                        className="pl-4 h-10 w-8/12"
                        // defaultValue={}
                      />
                    </div>
                  </fieldset><fieldset className="border border-gray-200 text-center w-full md:w-[49%] text-black float-left mt-2 md:mt-5">
                    <legend className="w-1/4 md:w-[155px] h-12 md:h-14 float-left text-left pl-4 md:pl-7 pt-[14px] md:pt-4">
                      생년월일
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-1/6 h-12 md:h-14 float-left pt-1 md:pt-2 box-border">
                      <input
                        type="text"
                        placeholder="990101"
                        className="pl-4 h-10"
                        maxLength={6}
                        // defaultValue={}
                      />
                    </div>
                  </fieldset>
                  
                  <fieldset className="border border-gray-200 text-center w-full md:w-[49%] text-black float-right my-2 md:my-5">
                    <legend className="w-1/4 md:w-[155px] h-12 md:h-14 float-left text-left pl-4 md:pl-7 pt-[14px] md:pt-4">
                      국적
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-1/6 h-12 md:h-14 float-left pt-1 md:pt-2 box-border">
                      <select className="pl-4 h-10 w-[200px]">
                        <option value="">국적</option>
                        <option value="남아프리카">남아프리카</option>
                        <option value="노르웨이">노르웨이</option>
                        <option value="네덜란드">네덜란드</option>
                        <option value="독일">독일</option>
                        <option value="대만">대만</option>
                        <option value="대한민국">대한민국</option>
                        <option value="덴마크">덴마크</option>
                        <option value="러시아">러시아</option>
                        <option value="말레이시아">말레이시아</option>
                        <option value="모나코">모나코</option>
                        <option value="몰타">몰타</option>
                        <option value="벨기에">벨기에</option>
                        <option value="브라질">브라질</option>
                        <option value="사우디 아라비아">사우디 아라비아</option>
                        <option value="슬로바키아">슬로바키아</option>
                        <option value="슬로베니아">슬로베니아</option>
                        <option value="스위스">스위스</option>
                        <option value="스웨덴">스웨덴</option>
                        <option value="스페인">스페인</option>
                        <option value="싱가포르">싱가포르</option>
                        <option value="아메리카 합중국">아메리카 합중국</option>
                        <option value="아일랜드">아일랜드</option>
                        <option value="아랍 에미리트">아랍 에미리트</option>
                        <option value="아제르바이잔">아제르바이잔</option>
                        <option value="아프가니스탄">아프가니스탄</option>
                        <option value="앙골라">앙골라</option>
                        <option value="영국">영국</option>
                        <option value="오만">오만</option>
                        <option value="오스트리아">오스트리아</option>
                        <option value="이스라엘">이스라엘</option>
                        <option value="이탈리아">이탈리아</option>
                        <option value="인도">인도</option>
                        <option value="인도네시아">인도네시아</option>
                        <option value="일본">일본</option>
                        <option value="중국">중국</option>
                        <option value="체코">체코</option>
                        <option value="터키">터키</option>
                        <option value="쿠웨이트">쿠웨이트</option>
                        <option value="크로아티아">크로아티아</option>
                        <option value="캐나다">캐나다</option>
                        <option value="포르투갈">포르투갈</option>
                        <option value="폴란드">폴란드</option>
                        <option value="프랑스">프랑스</option>
                        <option value="핀란드">핀란드</option>
                        <option value="필리핀">필리핀</option>
                        <option value="호주">호주</option>
                        <option value="홍콩">홍콩</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray-200 text-center w-full text-black">
                    <legend className="w-1/4 md:w-[120px] h-[64px] float-left text-left ml-7 leading-[64px] border-r border-gray-200 md:border-0 box-border">
                      언어능력
                    </legend>
                    <div className="md:flex justify-between md:before:border-l before:border-gray-200 float-right w-3/4 md:w-5/6">
                      <div>
                        <input
                          type="text"
                          id="language1"
                          name="language1"
                          // defaultValue={userInfo.language1}
                          // onChange={handleInputChange}
                          placeholder="예)일본어1"
                          className="w-3/5 md:w-[150px] h-12 border my-2 border-gray-200 pl-3"
                        />
                        <select
                          id="lang_01"
                          className="border border-gray-200 h-12 w-20 pl-3"
                        >
                          <option value="상">상</option>
                          <option value="중">중</option>
                          <option value="하">하</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="예)일본어"
                          className="w-3/5 md:w-[150px] h-12 border my-2 border-gray-200 pl-3"
                        />
                        <select
                          id="lang_01"
                          className="border border-gray-200 h-12 w-20 pl-3"
                        >
                          <option value="상">상</option>
                          <option value="중">중</option>
                          <option value="하">하</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="예)일본어"
                          className="w-3/5 md:w-[150px] h-12 border my-2 border-gray-200 pl-3"
                        />
                        <select
                          id="lang_01"
                          className="border border-gray-200 h-12 w-20 md:mr-7 pl-3"
                        >
                          <option value="상">상</option>
                          <option value="중">중</option>
                          <option value="하">하</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="w-full h-[320px] md:h-auto p-7 border border-primary mt-1 leading-6 md:leading-8 text-[14px] md:text-base -translate-y-[435px] md:-translate-y-0">
                <strong className="text-gray-800">
                  잠깐! 사진을 다시 확인해주세요!
                </strong>
                <p className="mt-5">
                  이력서에 첨부되는 사진은 추후 IECEx Certificate에 등록되는
                  사진입니다. 등록사진에 대한 규정이 존재하며 아래와 같습니다.
                </p>
                <ul className=" list-disc pl-5">
                  <li>
                    <span className="text-active">신분증/여권사진</span> 사진
                    사용
                  </li>
                  <li>
                    <span className="text-active">얼굴 윤곽</span>이 뚜렷한 사진
                  </li>
                  <li>
                    <span className="text-active">배경이 없는 흰 배경</span>{" "}
                    사진 필수
                  </li>
                  <li>JPG(JPEG) 파일 : 200 * 150 pixel</li>
                </ul>
                <p className="mt-3">
                  위의 사진 기준에 부적합한 경우{" "}
                  <span className="text-[#ef250b]">
                    원활한 진행이 어려울 수 있습니다.
                  </span>
                </p>
              </div>
            </article>
            {/* 여권 정보 섹션 끝*/}

            <article className="w-full mt-16 md:mt-12 text-[13px] md:text-base">
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                학력
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <fieldset className="border border-gray-200 text-center w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <select
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-200 h-12 md:h-14 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"
                      >
                        <option value="">학교구분</option>
                        <option value="대학교(4년)">대학교(4년)</option>
                        <option value="대학교(2년)">대학교(2년)</option>
                        <option value="고등학교">고등학교</option>
                      </select>
                    </div>
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                      학교명
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-3/4 md:w-4/12 h-12 md:h-14 float-left pt-2 box-border">
                      <input
                        type="text"
                        placeholder="학교명"
                        className="pl-4 h-10"
                        defaultValue={userInfo.school1}
                      />
                    </div>
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 md:border-l border-gray-200 pl-4 md:pl-8">
                      전공명
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-3/4 md:w-4/12 h-12 md:h-14 float-left p-2 box-border">
                      <input
                        type="text"
                        placeholder="전공명"
                        className="pl-4 h-10"
                        defaultValue={userInfo.major1}
                      />
                    </div>
                  </fieldset>
                  <fieldset className="border-x border-b border-gray-200 text-center w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <select
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-200 h-12 md:h-14 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"
                      >
                        <option value="">졸업상태</option>
                        <option value="졸업">졸업</option>
                        <option value="재학중">재학중</option>
                        <option value="휴학">휴학</option>
                        <option value="중퇴">중퇴</option>
                      </select>
                    </div>
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 md:border-l border-gray-200 pl-4 md:pl-8 whitespace-nowrap">
                      수료학위
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-3/4 md:w-4/12 h-12 md:h-14 float-left p-2 box-border">
                      <input
                        type="text"
                        placeholder="수료학위"
                        className="pl-4 h-10"
                        defaultValue={userInfo.degree1}
                      />
                    </div>
                  </fieldset>
                  <button className="w-full h-10 mt-3 bg-gray-200 flex justify-center items-center">
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1">
                      +
                    </div>
                  </button>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                  <button className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full">
                    X
                  </button>
                </div>
              </div>
            </article>
            {/* 학력 섹션 */}

            <article className="w-full mt-12 text-[13px] md:text-base">
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                경력
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <fieldset className="border border-gray-200 text-center w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <select
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-200 h-12 md:h-14 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"
                      >
                        <option value="">분야</option>
                        <option value="화학">화학</option>
                        <option value="건설">건설</option>
                        <option value="안전">안전</option>
                        <option value="기계">기계</option>
                        <option value="소방">소방</option>
                        <option value="전기">전기</option>
                        <option value="가스">가스</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                      회사명
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-3/4 md:w-4/12 h-12 md:h-14 float-left pt-2 box-border">
                      <input
                        type="text"
                        placeholder="회사명"
                        className="pl-4 h-10"
                      />
                    </div>
                  </fieldset>
                  <div className="md:flex">
                    <fieldset className="border-l border-r md:border-r-0 border-gray-200 text-center w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        근무기간
                      </legend>
                      <div className="md:before:border-l border-gray-200 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left pt-1 md:pt-2 mb-2 md:mb-0 md:pr-28 flex box-border">
                        <input
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-10 box-border w-1/2 md:w-36"
                        />
                        <p className="p-3">~</p>
                        <input
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-10 box-border w-1/2 md:w-36"
                        />
                      </div>
                    </fieldset>
                    <fieldset className="border-x border-t md:border-t-0 border-gray-200 text-center w-full md:w-1/2 text-black flex">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        직위 및 담당업무
                      </legend>
                      <div className="before:border-l before:border-gray-200 w-3/4 md:w-2/3 h-12 md:h-14 float-left pt-1 md:pt-2 md:pr-28 box-border">
                        <input
                          type="text"
                          placeholder="담당업무 기재"
                          className="pl-4 h-10"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border border-gray-200 text-center w-full text-black md:flex">
                      <legend className="w-full md:w-2/12 h-12 md:h-[120px] leading-[120px] float-left text-left pl-4 md:pl-8 md:border-r md:border-gray-200 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        프로젝트
                      </legend>
                      <textarea
                        className="w-full md:w-10/12 h-32 md:h-[120px] pl-4 text-wrap mt-1 md:mt-0"
                      />
                    </fieldset>
                  </div>
                  <button className="w-full h-10 mt-3 bg-gray-200 flex justify-center items-center">
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pb-0.5">
                      +
                    </div>
                  </button>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                  <button className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full">
                    X
                  </button>
                </div>
              </div>
            </article>
            {/* 경력 섹션 */}

            <article className="w-full mt-12 text-[13px] md:text-base">
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                관련훈련 이수 내역
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <div className="md:flex border border-gray-200">
                    <fieldset className="border-r border-gray-200 text-center w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        교육기간
                      </legend>
                      <div className="before:border-l before:border-gray-200 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left pt-1 md:pt-2 mb-2 md:mb-0 md:pr-28 flex box-border">
                        <input
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-10 box-border w-1/2 md:w-36"
                        />
                        <p className="p-3">~</p>
                        <input
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-10 box-border w-1/2 md:w-36"
                        />
                      </div>
                    </fieldset>
                    <fieldset className="text-center w-full md:w-1/2 text-black flex border-t md:border-t-0 border-gray-200 ">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육기관
                      </legend>
                      <div className="before:border-l before:border-gray-200 w-3/4 md:w-2/3 h-12 md:h-14 float-left pt-1 md:pt-2 md:pr-28 box-border">
                        <input
                          type="text"
                          placeholder=""
                          className="pl-4 h-10"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border-x border-gray-200 text-center w-full text-black flex">
                      <legend className="w-1/4 md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육명
                      </legend>
                      <div className="w-3/4 md:w-10/12 before:border-l before:border-gray-200 before:h-6 float-left flex justify-start items-center">
                        <input
                          type="text"
                          className="h-12 md:h-14 pl-4 text-wrap"
                          placeholder="해당 교육명"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border border-gray-200 text-center w-full text-black flex">
                      <legend className="w-1/4 md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육내용
                      </legend>
                      <div className="w-3/4 md:w-10/12 before:border-l before:border-gray-200 before:h-6 float-left flex justify-start items-center">
                        <input
                          type="text"
                          className="h-12 md:h-14 pl-4 text-wrap"
                          placeholder="교육내용"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <button className="w-full h-10 mt-3 bg-gray-200 flex justify-center items-center">
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pb-0.5">
                      +
                    </div>
                  </button>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                  <button className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full">
                    X
                  </button>
                </div>
              </div>
            </article>
            {/* 훈련 이수 섹션 */}

            <article className="w-full mt-12 text-[13px] md:text-base">
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                관련 자격증
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <div>
                    <fieldset className="border border-gray-200 text-center w-full text-black md:flex">
                      <legend className="w-full md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 md:border-r md:border-gray-200 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        자격증명
                      </legend>
                      <input
                        type="text"
                        placeholder="관련 자격증명"
                        className="w-full md:w-10/12 h-12 md:h-14 pl-4 text-wrap"
                      />
                    </fieldset>
                  </div>
                  <div className="md:flex border-b border-gray-200">
                    <fieldset className="border-l border-r md:border-r-0 border-gray-200 text-center w-full md:w-1/2 text-black md:flex pb-2 md:pb-0">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 md:border-gray-200 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        발행처
                      </legend>
                      <div className="md:before:border-l border-gray-200 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left md:pt-2 md:pr-28 flex box-border">
                        <input
                          type="text"
                          placeholder="발행처"
                          className="pl-4 md:pl-6 h-12 md:h-10 box-border w-full md:w-64"
                        />
                      </div>
                    </fieldset>
                    <fieldset className="border-x border-gray-200 text-center w-full md:w-1/2 text-black flex border-t md:border-t-0">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        취득일
                      </legend>
                      <div className="before:border-l before:border-gray-200 before:mt-2 before:h-6 w-full md:w-3/4 h-12 md:h-10 float-left md:pt-2 md:pr-28 flex box-border">
                        <input
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-12 md:h-10 box-border w-full md:w-64"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div></div>
                  <button className="w-full h-10 mt-3 bg-gray-200 flex justify-center items-center">
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pb-0.5">
                      +
                    </div>
                  </button>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                  <button className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full">
                    X
                  </button>
                </div>
              </div>
            </article>
            {/* 자격증 섹션 */}
          </div>
          <div className="w-full flex justify-center mt-14">
            <button className="w-40 h-14 bg-secondary text-white">
              수정완료
            </button>
            <button className="w-40 h-14 bg-gray-200 ml-6">취소</button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ResumeClient;
