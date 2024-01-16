"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

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

const location = "교육신청";

export default function ConsultingPage() {
  const [menu, setMenu] = useState<string>("");
  const [pageMenu, setPageMenu] = useState<any>("교육신청");
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [activePopup, setActivePopup] = useState<string>(''); 
  //모달창 열기
  const openModal = () => {
    setPopupOpen(true);
    setActivePopup('pop_wrap_01');
    document.body.classList.add('overflow-y-hidden');
  }
  const openModal2 = () => {
    setPopupOpen(true);
    setActivePopup('pop_wrap_register');
    document.body.classList.add('overflow-y-hidden');
  }
  //모달창 닫기
  const closePopup = () => {
    setPopupOpen(false);
    setActivePopup('');
    document.body.classList.remove('overflow-y-hidden');
  };

  return (
    <section>
      <Header menu={menu} setMenu={setMenu} />

      <div id="headerNav">
        <div className="h-[40px] w-full bg-lightgray flex justify-center text-[13px]">
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
          <div className="flex justify-between w-full h-[50px] leading-[50px]">
            <Link passHref href="apply" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                교육 신청
              </div>
            </Link>
            <Link passHref href="restudy" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                재교육 신청
              </div>
            </Link>
            <Link passHref href="reexam" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                재시험 신청
              </div>
            </Link>
            <Link passHref href="semina" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer">
                세미나 신청
              </div>
            </Link>
            <Link passHref href="consulting" className="w-1/5">
              <div className="w-full text-center h-full border border-gray cursor-pointer bg-secondary text-white">
                컨설팅 신청
              </div>
            </Link>
          </div>
          <div className="flex text-title justify-center items-center text-black w-full h-[180px] p-[40px] bg-lightgray">
            <input
              type="text"
              className="w-[600px] h-[50px] border-2 border-gray px-[10px] leading-[50px] text-[14px] placeholder:text-[14px] placeholder:leading-[50px]"
              placeholder="교육명을 입력해주세요."
            />
            <button className="text-[14px] w-[150px] border-2  border-l-0 bg-white border-gray h-[50px]">
              검색
            </button>
          </div>

          <div className="mt-[30px] w-full h-full">
              <div className="flex justify-between">
                <p className="float-left">전체 <span className="font-bold">17</span> 건</p>
                <button className="float-right bg-secondary text-white w-28 h-12 mr-10 mb-2" onClick={openModal2}>+교육 등록</button>
              </div>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="border-b border-gray px-[40px] py-[25px] flex justify-between items-center hover:shadow-md"
              >
                <div className="flex-col">
                  <div>
                    <span className="text-[20px] font-bold text-black mr-[20px]">
                      방폭 기초 교육
                    </span>
                    <span>교육상세</span>
                  </div>
                  <div className="text-darkgray -translate-y-[5px]">
                    Basic Course
                  </div>
                  <div className="text-superdarkgray flex justify-start items-center">
                    <span className="w-[400px]">
                      ㆍ교육일시 : 2023.11.15 ~ 2023.11.16, 09:00 ~ 18:00
                    </span>
                    <span className="w-[200px]">ㆍ교육인원 : 10명</span>
                  </div>
                  <div className="text-superdarkgray flex justify-start items-center">
                    <span className="w-[400px]">
                      ㆍ신청기간 : 2023.10.23 ~ 2023.11.10
                    </span>
                    <span className="w-[200px]">ㆍ교육비 : 30 만원</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center  items-center">
                  <button className="flex justify-center items-center bg-secondary hover:bg-active text-white  w-[150px] h-[50px] pop_open_btn" onClick={openModal}>
                    <span className="mr-[10px]">교육신청</span>{" "}
                    <IoIosArrowForward />
                  </button>
                  <button className="flex justify-center items-center bg-gray hover:bg-darkgray  w-[150px] h-[30px] pop_open_btn mt-3" onClick={openModal}>
                    <span className="mr-[10px]">삭제</span>{" "}
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* 팝업영역 */}
          {isOpen && (<div style={{
                            position: 'fixed',
                            top: '170px',
                            left: '50%',
                            marginLeft:'-300px',
                            zIndex: 1000,
                            width:'600px', height:'auto',
                            border:'solid darkgray 1px',
                            backgroundColor:"white",
                          }}>
                        <div className="flex justify-end">
                        <button style={{
                            right:0,
                            width:'40px', height:'40px',
                            backgroundColor:'lightgray', 
                          }}
                          onClick={handleClose}
                          >X</button>
                        </div>
                        <DaumPostcode
                          onComplete={handleComplete}
                          autoClose
                          animation 
                          style={{
                          }}
                        />
                        </div>
                      )}
          <div id="pop_wrap_01" className={`w-[1100px] h-[700px] fixed z-[101] inset-1/2 -mx-[550px] -my-[400px] ${isPopupOpen && activePopup === 'pop_wrap_01' ? '' : 'hidden'}`}>
            <div className="w-[1100px] h-auto flex justify-end">
              <button id="close_btn" className="w-12 h-12 bg-primary text-white" onClick={() => { handleClose(); closePopup(); }}>닫기</button>
            </div>
            <div id="pop_frame" className="w-[1100px] h-[750px] bg-white py-24 px-16 rounded-tl-3xl overflow-y-auto">
              <h4 className="text-subtitle text-secondary">IECEx CoPC 교육신청서</h4>
              <div className="w-full h-24 border border-gray flex mt-4">
                <div className="w-1/4 border-r border-gray">신청지사</div>
                <div className=" w-3/4">신청교육</div>
              </div>
              <h3 className="mt-10 text-subtitle pb-7">개인정보 입력</h3>
              <form action="/examples/media/action_target.php" method="get" className="flex">
                <div className="w-40 h-60 bg-lightgray">
                  <div className="w-full h-48">
                    {imagePreview ? (
                      <img src={imagePreview} alt="이미지 미리보기" className="h-full w-full"></img>
                    ) : (
                      <span>
                      {/* 내가 선택한 파일 이름 여기에 표시 */}
                      {selectedFile ? selectedFile : '파일을 선택하세요.'}
                      </span>
                    )}
                  </div>
                  <input type="file" id="fileInput" name="file" hidden onChange={updateLabel}/>
                  <label htmlFor="fileInput" className="inline-block py-4 pl-10 w-full h-14 bg-primary text-white">첨부파일</label>
                </div>{/* 왼쪽 섹션 */}
                <div className="form_area p-5 w-full">
                  <p className="text-[14px] text-active">* 개인정보는 필수입니다.</p>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">성명(한글)</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="성" className="pl-4 h-10 w-40"/>
                    </div>
                    <div className="before:border-l before:border-gray w-[300px] h-14 float-left p-2">
                      <input type="text" placeholder="이름" className="pl-4 h-10"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">영문명(여권)</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="Eng" className="pl-4 h-10 w-40"/>
                    </div>
                    <div className="before:border-l before:border-gray w-[300px] h-14 float-left p-2">
                      <input type="text" placeholder="Name" className="pl-4 h-10"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-[49%] float-left">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">생년월일</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="000000" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-[49%] float-left ml-[2%]">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">이메일</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="test@test.com" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-[49%] float-left mb-3">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">연락처(HP)</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="010-2222-3333" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-[49%] float-left ml-[2%]">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">연락처(T)</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="02-000-0000" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full text-black">
                    <legend className="w-52 h-14 float-left pt-4 text-left pl-7">자택주소 (우편주소지)</legend>
                    <div className="before:border-l before:border-gray h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-[500px]" id="address_input_1" value={addressInput1}/>
                      <button type="button" className="w-12 h-10 bg-primary text-white" onClick={() => handleInputClick('address_input_1')} value={addressInput1}>검색</button>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <div className="h-14 float-left pt-2 pl-7">
                      <input type="text" placeholder="나머지 주소" className="h-10 w-[680px]"/>
                    </div>
                  </fieldset>

                  <p className="mt-10 text-active text-[14px]">* 재직자가 아닐경우 비워두시면 됩니다.</p>
                  <fieldset className="border border-gray text-center w-full text-black mt-3">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">회사명</legend>
                    <div className="before:border-l before:border-gray :h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-[500px]"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-[49%] float-left mb-3">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">소속</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-[49%] float-left ml-[2%]">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">직급</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full text-black">
                    <legend className="w-52 h-14 float-left pt-4 text-left pl-7">자택주소 (우편주소지)</legend>
                    <div className="before:border-l before:border-gray :h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-[500px]" id="address_input_2" value={addressInput2}/>
                      <button type="button" className="w-12 h-10 bg-primary text-white" onClick={() => handleInputClick('address_input_2')} value={addressInput2}>검색</button>      
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <div className="h-14 float-left pt-2 pl-7">
                      <input type="text" placeholder="나머지 주소" className="h-10 w-[680px]"/>
                    </div>
                  </fieldset>
                  <p className="mt-10 text-active text-[14px]">* 입금계좌정보와 현금영수증 발급여부를 확인하세요.</p>
                  <p className="mt-7 text-active text-[14px]">* 세금 계산서 별도 문의 바랍니다.</p>
                  <p className="mt-7 text-active text-[14px]">* 본인 성명으로 입금하여야 확인 가능하며 입금 확인 후 접수 완료됩니다.</p>
                  <fieldset className="border border-gray text-center w-full text-black mt-3">
                    <legend className="w-52 h-14 float-left pt-4 text-left pl-7">입금계좌정보 안내</legend>
                    <div className="before:border-l before:border-gray :w-52 h-14 float-left pt-2">
                      <input type="text" placeholder="국민은행 763801-00-072091 ㈜엑스텍코리아" className="pl-4 h-10 w-[500px] bg-white placeholder-superdarkgray" disabled/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full text-black mt-3">
                    <legend className="w-52 h-14 float-left pt-4 text-left pl-7">입금금액</legend>
                    <div className="before:border-l before:border-gray :w-52 h-14 float-left pt-2">
                      <input type="text" placeholder="121만원" className="pl-4 h-10 w-40 placeholder:text-primary placeholder:text-[20px] placeholder:font-bold bg-white" disabled/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full text-black mt-3">
                    <legend className="w-52 h-14 float-left pt-4 text-left pl-7">현금영수증 발급유무</legend>
                    <div className="before:border-l before:border-gray :w-52 h-14 float-left pt-2">
                      <input type="checkbox" id="issue_chk_1" className="w-6 h-6 ml-4 mt-2 rounded-full"/> <label htmlFor="issue_chk_1" className="">발급</label>
                      <input type="checkbox" id="issue_chk_2" className="w-6 h-6 ml-4 mt-2 rounded-full"/> <label htmlFor="issue_chk_2" className="">미발급</label>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full text-black mt-3">
                    <legend className="w-52 h-20 float-left pt-4 text-left pl-7">발급번호</legend>
                    <div className="before:border-l before:block before:h-16 before:mt-2 before:absolute before:border-gray :w-52 h-20 float-left relative">
                    <input type="text" placeholder="입력" className="pl-4 h-10 w-52 mt-2"/>
                    </div>
                    <p className="max-h-20 text-active text-[14px] mt-2">① 개인소득공제용 : 휴대폰번호 <br/>
                      &nbsp;&nbsp;&nbsp; ② 사업자증빙용 : 사업자등록번호
                      </p>
                  </fieldset>
                </div>
              </form>
              <div className="form_btn_box flex justify-center mt-5">
                <a href="#"><button className="w-32 h-12 bg-active text-white">확인
                  </button></a>
                  <a href="#"><button className="w-32 h-12 bg-lightgray ml-6" onClick={closePopup}>취소
                  </button></a>
              </div>
            </div>{/* pop_frame */}
          </div>{/*pop_wrap_01 */}

          {/* 교육등록 팝업 시작 */}
          <div id="pop_wrap_register" className={`w-[1100px] h-[700px] fixed z-[101] inset-1/2 -mx-[550px] -my-[400px] ${isPopupOpen && activePopup === 'pop_wrap_register' ? '' : 'hidden'}`}>
            <div className="w-[1100px] h-auto flex justify-end">
              <button id="close_btn" className="w-12 h-12 bg-primary text-white" onClick={() => { handleClose(); closePopup(); }}>닫기</button>
            </div>
            <div id="pop_frame" className="w-[1100px] h-[750px] bg-white py-24 px-16 rounded-tl-3xl overflow-y-auto">
              <h4 className="text-subtitle text-secondary">교육관리</h4>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">교육분류</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <select id="" className="pl-4 h-10 w-40">
                        <option value="">교육상태</option>
                        <option value="신규">신규</option>
                        <option value="재시험">재시험</option>
                        <option value="재교육">재교육</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">지역</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <select id="" className="pl-4 h-10 w-40">
                        <option value="">지역</option>
                        <option value="서울">서울</option>
                        <option value="인천">인천</option>
                        <option value="수원">수원</option>
                        <option value="대전">대전</option>
                        <option value="대구">대구</option>
                        <option value="울산">울산</option>
                        <option value="부산">부산</option>
                        <option value="창원">창원</option>
                        <option value="거제">거제</option>
                        <option value="광양">광양</option>
                        <option value="평택">평택</option>
                        <option value="광주">광주</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center w-full mt-3 text-black">
                    <legend className="w-32 h-14 float-left pt-4 text-left pl-7">교육명</legend>
                    <div className="before:border-l before:border-gray :w-full h-14 float-left pt-2">
                      <select id="" className="pl-4 h-10 w-full">
                        <option value="">교육을 선택해주세요</option>
                        <option value="IECEx 000">IECEx 000</option>
                        <option value="IECEx 001">IECEx 001</option>
                        <option value="IECEx 002">IECEx 002</option>
                        <option value="IECEx 003/006">IECEx 003/006</option>
                        <option value="IECEx 004/007/008">IECEx 004/007/008</option>
                        <option value="IECEx 005">IECEx 005</option>
                        <option value="IECEx 002/009">IECEx 002/009</option>
                        <option value="IECEx 002/008/009/010">IECEx 002/008/009/010</option>
                        <option value="IECEx 009">IECEx 009</option>
                        <option value="IECEx 010">IECEx 010</option>
                        <option value="IECEx 001/004/007/008">IECEx 001/004/007/008</option>
                        <option value="IECEx 001/003/006">IECEx 001/003/006</option>
                        <option value="접지의 이해">접지의 이해</option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">교육제목</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">교육기간</legend>
                    <div className="before:border-l before:border-gray before:h-6 w-40 h-14 float-left flex items-center">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/> <p className="px-2">~</p> <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">교육시간</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">접수기간</legend>
                    <div className="before:border-l before:border-gray before:h-6 w-40 h-14 float-left flex items-center">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/> <p className="px-2">~</p> <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">정원</legend>
                    <div className="before:border-l before:border-gray before:h-6 h-14 float-left flex items-center">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                      <p className="text-[#ef250b] ml-8">신청인원 : <span>0</span> <a href="#" className="text-black">[신청자 보기]</a></p>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">교육비</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray text-center mt-3 text-black w-full float-left">
                    <legend className="w-40 h-14 float-left pt-4 text-left pl-7">비밀번호(단체용)</legend>
                    <div className="before:border-l before:border-gray :w-40 h-14 float-left pt-2">
                      <input type="text" placeholder="" className="pl-4 h-10 w-44"/>
                    </div>
                  </fieldset>
              <div className="flex w-full justify-between mt-5">
                <a href="#"><button className="w-32 h-12 bg-lightgray mt-5">리스트</button></a>
                <div className="form_btn_box flex justify-center mt-5">
                  <a href="#"><button className="w-32 h-12 bg-active text-white">등록
                    </button></a>
                    <a href="#"><button className="w-32 h-12 bg-lightgray ml-6" onClick={closePopup}>취소
                    </button></a>
                </div>
              </div>        
            </div>{/* pop_frame */}
          </div>{/* pop_wrap_register */}
        </section>
      </main>
      <Footer />
    </section>
  );
}
