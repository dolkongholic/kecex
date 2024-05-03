"use client";

import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/inputs/ImageUpload";
import axios from "axios";
import toast from "react-hot-toast";
import { error } from "console";

// Image
const location = "경력관리";


interface ResumeProps {
  currentUser?: any;
  currentResume?:any;
  schoolList?:any;
  careerList?:any;
  trainingList?:any;
  licenseList?:any;
}
const ResumeClient: React.FC<ResumeProps> = ({ currentUser, currentResume, schoolList, careerList, trainingList, licenseList }) =>{
  const [pageMenu, setPageMenu] = useState<any>("마이페이지");
  const router = useRouter();
  const [schoolElements, setSchoolElements] = useState<JSX.Element[]>([]); //학력 세션 상태 배열
  const [careerElements, setCareerElements] = useState<JSX.Element[]>([]); //경력 세션 상태 배열
  const [trainingElements, setTrainingElements] = useState<JSX.Element[]>([]); //교육이력 세션 상태 배열
  const [licenseElements, setLicenseElements] = useState<JSX.Element[]>([]); //자격증 세션 상태 배열  
  const [loading, setLoading] = useState<boolean>(true);
  //변수들 저장
  const [formData, setFormData] = useState({
    schoolType: '',
    schoolName: '',
    majorName: '',
    graduation: '',
    degree: '',
    careerType: '',
    companyName:'',
    job_start:'',
    job_end:'',
    position:'',
    career_content:'',
    training_start:'',
    training_end:'',
    trnInstitution:'',
    trnName:'',
    trn_content:'',
    licenseName:'',
    licenseDept:'',
    licenseDate:'',
    // 나머지 input 요소들에 대한 초기값 설정
  });
  
  const resumeId = currentResume?.id

  useEffect(() => {
    if (!currentUser) {
      router.push("/member/signin/");
    }
  },[currentUser])

  useEffect(() => {
    if (resumeId) {
    // 페이지 로드 시 정보를 불러와서 화면에 표시
    fetchSchoolData();
    fetchCareerData();
    fetchTrainingData();
    fetchLicenseData();
}}, []);

  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const MainList = [
    {
      title: "전체 현황",
      url: "#",
      sub: [
        { title: "발급/출력 현황", url: "/mypage/overall/all01" },
        { title: "1:1 문의 현황", url: "/mypage/overall/all02" },
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

  const imageSrc = watch("imageSrc");

  //첨부파일 업로드
  const setCustomValue = (profileImg: string, value: any) => {
    setValue(profileImg, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const userId = currentUser.id;

  //프로필 입력
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/resume", {
        lastName: data.lastName,
        firstName: data.firstName,
        birthDate: data.birthDate,
        profileImg: data.imageSrc,
        userId: userId,
      })
      .then(() => {
        toast.success("프로필을 작성했습니다.");
        // window.location.reload();
      })
      .catch(() => {
        toast.error("오류가 발생했습니다.");
      })
      .finally(() => {
        reset();
      });
    // axios
    //   .post()
  };


  //select 변경되면 값 저장
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  //input 변경되면 값 저장
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //추가 학력 표시
  const fetchSchoolData = async () => {
    try {    
      // const response = await axios.get(`/api/resume/get/school?resumeId=${resumeId}`);
      const elements = schoolList.map((school:any) => (
        <NewSchoolElement
          key={school.id}
          id={school.id}
          schoolType={school.schoolType}
          schoolName={school.schoolName}
          majorName={school.majorName}
          graduation={school.graduation}
          degree={school.degree}
        />
      ));
      setSchoolElements(elements);
    } catch (error) {
      console.error("학력 정보 불러오기 실패.", error);
    }
  };

  //추가 경력 표시
  const fetchCareerData = async () => {
    try {    
      // const response = await axios.get(`/api/resume/get/school?resumeId=${resumeId}`);
      const elements = careerList.map((career:any) => (
        <NewCareerElement
          key={career.id}
          id={career.id}
          careerType={career.careerType}
          companyName={career.companyName}
          job_start={career.job_start}
          job_end={career.job_end}
          position={career.position}
          career_content={career.career_content}
        />
      ));
      setCareerElements(elements);
    } catch (error) {
      console.error("경력 정보 불러오기 실패.", error);
    }
  };

  //추가 교육이력 표시
  const fetchTrainingData = async () => {
    try {    
      // const response = await axios.get(`/api/resume/get/school?resumeId=${resumeId}`);
      const elements = trainingList.map((training:any) => (
        <NewTrainingElement
          key={training.id}
          id={training.id}
          training_start={training.training_start}
          training_end={training.training_end}
          trnInstitution={training.trnInstitution}
          trnName={training.trnName}
          trn_content={training.trn_content}
        />
      ));
      setTrainingElements(elements);
    } catch (error) {
      console.error("교육이력 정보 불러오기 실패.", error);
    }
  };

  //추가 자격증 표시
  const fetchLicenseData = async () => {
    try {    
      // const response = await axios.get(`/api/resume/get/school?resumeId=${resumeId}`);
      const elements = licenseList.map((license:any) => (
        <NewLicenseElement
          key={license.id}
          id={license.id}
          licenseName={license.licenseName}
          licenseDept={license.licenseDept}
          licenseDate={license.licenseDate}
        />
      ));
      setLicenseElements(elements);
    } catch (error) {
      console.error("자격증 정보 불러오기 실패.", error);
    }
  };  

  // 학력 단락추가 버튼
  const handleSchoolBtn = async () => {
    try{
      await axios
      .post("/api/resume/school",{
        schoolType: formData.schoolType,
        schoolName: formData.schoolName,
        majorName: formData.majorName,
        graduation: formData.graduation,
        degree: formData.degree,
        resumeId: resumeId,
      })
        toast.success("학력 정보 추가 성공 .");
        window.location.reload();
    }catch(error){
      console.error("학력 정보 추가 실패", error);
    }
  };

  // 경력 단락추가 버튼
  const handleCareerBtn = async () => {
    try{
      await axios
      .post("/api/resume/career",{
        careerType: formData.careerType,
        companyName: formData.companyName,
        job_start: formData.job_start,
        job_end: formData.job_end,
        position: formData.position,
        career_content: formData.career_content,
        resumeId: resumeId,
      })
        toast.success("경력 정보 추가 성공 .");
        window.location.reload();
    }catch(error){
      console.error("경력 정보 추가 실패", error);
    }
  };

  // 교육이력 단락추가 버튼
  const handleTrainingBtn = async () => {
    try{
      await axios
      .post("/api/resume/training",{
        training_start: formData.training_start,
        training_end: formData.training_end,
        trnInstitution: formData.trnInstitution,
        trnName: formData.trnName,
        trn_content: formData.trn_content,
        resumeId: resumeId,
      })
        toast.success("교육이력 정보 추가 성공 .");
        window.location.reload();
    }catch(error){
      console.error("교육이력 정보 추가 실패", error);
    }
  };

    // 자격증 단락추가 버튼
    const handleLicenseBtn = async () => {
      try{
        await axios
        .post("/api/resume/license",{
          licenseName: formData.licenseName,
          licenseDept: formData.licenseDept,
          licenseDate: formData.licenseDate,
          resumeId: resumeId,
        })
          toast.success("자격증 정보 추가 성공 .");
          window.location.reload();
      }catch(error){
        console.error("자격증 정보 추가 실패", error);
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
                <div id="pic_area" className="w-[120px] md:w-[170px] h-[192px] mx-auto md:mx-0 mb-7 md:mb-0 relative">
                  <div className="absolute left-0 top-0">
                    <div className={`w-[120px] h-[160px] md:w-[150px] md:h-[200px] relative border border-gray z-10
                      ${currentResume.profileImg? "opacity-0 " : ""}
                    `}>
                      <ImageUpload
                        onChange={(value) => setCustomValue("imageSrc", value)}
                        value={imageSrc}
                      />
                    </div>
                  </div>
                  <div className="absolute left-0 top-0">
                    <div className={`w-[120px] h-[160px] md:w-[150px] md:h-[200px] relative border border-gray z-0
                      ${currentResume.profileImg? "" : "opacity-0"}
                    `}>
                      <img src={currentResume.profileImg}/>
                    </div>
                  </div>
                </div>
                <div id="form_area" className="w-full text-[13px] md:text-base translate-y-[310px] md:translate-y-0 md:ml-5">
                  <fieldset className="border border-gray-200 text-center w-full text-black flex">
                    <legend className="w-1/6 md:w-[155px] h-12 md:h-14 float-left md:pl-7 pt-1 md:pt-4 text-center md:text-left">
                      성명<br className="md:hidden"/>
                      (한글)
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-2/6 h-12 md:h-14 float-left pt-1 md:pt-2 box-border flex">
                      <input
                        type="text"
                        placeholder="성"
                        className="pl-4 h-10 w-full"
                        defaultValue={currentResume? currentResume.lastName : ""}
                        {...register("lastName", { required: true })}
                      />
                    </div>
                    <div className="before:border-l before:border-gray-200 w-3/6 h-12 md:h-14 float-left pt-1 md:p-2 box-border flex">
                      <input
                        type="text"
                        placeholder="이름"
                        className="pl-4 h-10 w-full"
                        defaultValue={currentResume? currentResume.firstName : ""}
                        {...register("firstName", { required: true })}
                      />
                    </div>
                  </fieldset>
                  <fieldset className="border border-gray-200 text-center w-full text-black float-left mt-2 md:mt-5">
                    <legend className="w-1/4 md:w-[155px] h-12 md:h-14 float-left text-left pl-4 md:pl-7 pt-[14px] md:pt-4">
                      생년월일
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-1/6 h-12 md:h-14 float-left pt-1 md:pt-2 box-border">
                      <input
                        type="text"
                        placeholder="990101"
                        className="pl-4 h-10"
                        maxLength={6}
                        defaultValue={currentResume? currentResume.birthDate : ""}
                        {...register("birthDate", { required: true })}
                      />
                    </div>
                  </fieldset>
                  <div className="w-full flex justify-end">
                    <button className="bg-primary w-48 h-12 mt-4 text-white font-medium hover:bg-[#002a6d]"
                      onClick={handleSubmit(onSubmit)}
                    >
                      프로필 저장
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-[320px] md:h-auto p-7 border border-primary mt-6 leading-6 md:leading-8 text-[14px] md:text-base -translate-y-[235px] md:-translate-y-0">
                <strong className="text-gray-800">
                  잠깐! 사진을 다시 확인해주세요!
                </strong>
                <p className="mt-5">
                  이력서에 첨부되는 사진은 등록사진에 대한 규정이 존재하며 아래와 같습니다.
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
            <p className={`mt-16 underline underline-offset-4
            ${resumeId ? "block" : "hidden"}
            `}>각 항목을 작성 후 단락 추가를 눌러 저장하세요.</p>
            <article className={`w-full mt-5 md:mt-12 text-[13px] md:text-base
            ${resumeId ? "block" : "hidden"}
            `}>
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                학력
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <fieldset className="border border-gray-400 text-center w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <select
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-400 h-12 md:h-14 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"
                        onChange={handleSelectChange}
                        name="schoolType"
                        value={formData.schoolType}
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
                    <div className="before:border-l before:border-gray-400 w-3/4 md:w-4/12 h-12 md:h-14 float-left pt-2 box-border">
                      <input
                        name="schoolName"
                        type="text"
                        placeholder="학교명"
                        className="pl-4 h-10"
                        onChange={handleInputChange}
                      />
                    </div>
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 md:border-l border-gray-400 pl-4 md:pl-8">
                      전공명
                    </legend>
                    <div className="before:border-l before:border-gray-400 w-3/4 md:w-4/12 h-12 md:h-14 float-left p-2 box-border">
                      <input
                        name="majorName"
                        type="text"
                        placeholder="전공명"
                        className="pl-4 h-10"
                        onChange={handleInputChange}
                      />
                    </div>
                  </fieldset>
                  <fieldset className="border-x border-b border-gray-400 text-center w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <select
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-400 h-12 md:h-14 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"
                        onChange={handleSelectChange}
                        name="graduation"
                        value={formData.graduation}
                      >
                        <option value="">졸업상태</option>
                        <option value="졸업">졸업</option>
                        <option value="재학중">재학중</option>
                        <option value="휴학">휴학</option>
                        <option value="중퇴">중퇴</option>
                      </select>
                    </div>
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 whitespace-nowrap">
                      수료학위
                    </legend>
                    <div className="before:border-l before:border-gray-400 w-3/4 md:w-4/12 h-12 md:h-14 float-left p-2 box-border">
                      <input
                        name="degree"
                        type="text"
                        placeholder="수료학위"
                        className="pl-4 h-10"
                        onChange={handleInputChange}
                      />
                    </div>
                  </fieldset>
                </div>
                
              </div>
                <button className="w-11/12 md:w-[1050px] h-10 mt-3 bg-gray-200 flex justify-center items-center"
                  onClick={handleSchoolBtn}
                  >
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pt-[1px]">
                      +
                    </div>
                </button>
            </article>
            {/* 학력 섹션 */}
            {schoolElements}

            <article className={`w-full mt-12 text-[13px] md:text-base
            ${resumeId ? "block" : "hidden"}
            `}>
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                경력
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <fieldset className="border border-gray-400 text-center w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <select
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-400 h-12 md:h-14 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"
                        onChange={handleSelectChange}
                        name="careerType"
                        value={formData.careerType}
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
                    <legend className="w-1/4 md:w-1/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-6">
                      회사명
                    </legend>
                    <div className="before:border-l before:border-gray-400 w-3/4 md:w-4/12 h-12 md:h-14 float-left pt-2 box-border">
                      <input
                        name="companyName"
                        type="text"
                        placeholder="회사명"
                        className="pl-4 h-10"
                        onChange={handleInputChange}
                      />
                    </div>
                  </fieldset>
                  <div className="md:flex">
                    <fieldset className="border-l border-r md:border-r-0 border-gray-400 text-center w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        근무기간
                      </legend>
                      <div className="md:before:border-l before:border-gray-400 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left pt-1 md:pt-2 mb-2 md:mb-0 md:pr-28 flex box-border">
                        <input
                          name="job_start"
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-10 box-border w-1/2 md:w-30"
                          onChange={handleInputChange}
                        />
                        <p className="p-2">~</p>
                        <input
                          name="job_end"
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-2 h-10 box-border w-1/2 md:w-30"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="border-x border-t md:border-t-0 border-gray-400 text-center w-full md:w-1/2 text-black flex">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-1 md:pt-4 pl-4 md:pl-8">
                        직위 및<br className="md:hidden"/> 담당업무
                      </legend>
                      <div className="before:border-l before:border-gray-400 border-gray-400 w-3/4 md:w-2/3 h-12 md:h-14 float-left pt-1 md:pt-2 md:pr-28 box-border">
                        <input
                          name="position"
                          type="text"
                          placeholder="담당업무 기재"
                          className="pl-4 h-10"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border border-gray-400 text-center w-full text-black md:flex">
                      <legend className="w-full md:w-2/12 h-12 md:h-[120px] md:leading-[120px] pt-[14px] md:pt-0 float-left text-left pl-4 md:pl-8 md:border-r md:border-gray-400 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        프로젝트
                      </legend>
                      <textarea
                        name="career_content"
                        className="w-full md:w-10/12 h-32 md:h-[120px] pl-6 text-wrap mt-1 box-border"
                        onChange={handleTextChange}
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
                <button className="w-11/12 md:w-[1050px] h-10 mt-3 bg-gray-200 flex justify-center items-center"
                  onClick={handleCareerBtn}
                  >
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pt-[1px]">
                      +
                    </div>
                </button>
            </article>
            {/* 경력 섹션 */}
            {careerElements}

            <article className={`w-full mt-12 text-[13px] md:text-base              
            ${resumeId ? "block" : "hidden"}
            `}
            >
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                관련훈련 이수 내역
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <div className="md:flex border border-gray-400">
                    <fieldset className="md:border-r border-gray-400 text-center w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        교육기간
                      </legend>
                      <div className="md:before:border-l before:border-gray-400 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left pt-1 md:pt-2 mb-2 md:mb-0 md:pr-28 flex box-border">
                        <input
                          name="training_start"
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 h-10 box-border w-1/2 md:w-30"
                          onChange={handleInputChange}
                        />
                        <p className="pt-2">~</p>
                        <input
                          name="training_end"
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-5 h-10 box-border w-1/2 md:w-30"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="text-center w-full md:w-1/2 text-black flex border-t md:border-t-0 border-gray-200 ">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육기관
                      </legend>
                      <div className="before:border-l before:border-gray-400 w-3/4 md:w-2/3 h-12 md:h-14 float-left pt-1 md:pt-2 md:pr-28 box-border">
                        <input
                          name="trnInstitution"
                          type="text"
                          placeholder=""
                          className="pl-4 h-10"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border-x border-gray-400 text-center w-full text-black flex">
                      <legend className="w-1/4 md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육명
                      </legend>
                      <div className="w-3/4 md:w-10/12 before:border-l before:border-gray-400 before:h-6 float-left flex justify-start items-center">
                        <input
                          name="trnName"
                          type="text"
                          className="h-12 md:h-14 pl-4 text-wrap"
                          placeholder="해당 교육명"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border border-gray-400 text-center w-full text-black flex">
                      <legend className="w-1/4 md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육내용
                      </legend>
                      <div className="w-3/4 md:w-10/12 before:border-l before:border-gray-400 before:h-6 float-left flex justify-start items-center">
                        <input
                          name="trn_content"
                          type="text"
                          className="h-12 md:h-14 pl-4 text-wrap w-full"
                          placeholder="간략한 교육내용"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                </div>
              </div>
                <button className="w-11/12 md:w-[1050px] h-10 mt-3 bg-gray-200 flex justify-center items-center"
                  onClick={handleTrainingBtn}
                  >
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pt-[1px]">
                      +
                    </div>
                </button>
            </article>
            {/* 훈련 이수 섹션 */}
            {trainingElements}

            <article className={`w-full mt-12 text-[13px] md:text-base
              ${resumeId ? "block" : "hidden"}
              `}>            
              <h3 className="text-subtitle font-bold mt-5 text-gray-800">
                관련 자격증
              </h3>
              <div className="flex">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <div>
                    <fieldset className="border border-gray-400 text-center w-full text-black md:flex">
                      <legend className="w-full md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 md:border-r md:border-gray-400 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        자격증명
                      </legend>
                      <input
                        name="licenseName"
                        type="text"
                        placeholder="관련 자격증명"
                        className="w-full md:w-10/12 h-12 md:h-14 pl-4 text-wrap"
                        onChange={handleInputChange}
                      />
                    </fieldset>
                  </div>
                  <div className="md:flex border-b border-gray-400">
                    <fieldset className="border-l border-r md:border-r-0 border-gray-400 text-center w-full md:w-1/2 text-black md:flex pb-2 md:pb-0">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 md:border-gray-400 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        발행처
                      </legend>
                      <div className="md:before:border-l before:border-gray-400 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left md:pt-2 md:pr-28 flex box-border">
                        <input
                          name="licenseDept"
                          type="text"
                          placeholder="발행처"
                          className="pl-4 md:pl-4 h-12 md:h-10 box-border w-full md:w-64"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                    <fieldset className="border-x border-gray-400 text-center w-full md:w-1/2 text-black flex border-t md:border-t-0">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        취득일
                      </legend>
                      <div className="before:border-l before:border-gray-400 before:mt-2 before:h-6 w-full md:w-3/4 h-10 float-left pt-1 md:pt-2 md:pr-28 flex box-border">
                        <input
                          name="licenseDate"
                          type="text"
                          placeholder="YYYY.MM"
                          className="pl-4 md:pl-6 h-10 box-border w-full md:w-64"
                          onChange={handleInputChange}
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div></div>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                </div>
              </div>
                <button className="w-11/12 md:w-[1050px] h-10 mt-3 bg-gray-200 flex justify-center items-center"
                  onClick={handleLicenseBtn}
                  >
                    단락추가{" "}
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center ml-1 pt-[1px]">
                      +
                    </div>
                </button>
            </article>
            {licenseElements}
            {/* 자격증 섹션 */}
          </div>
          {/* <div className="w-full flex justify-center mt-14">
            <button className="w-40 h-14 bg-secondary text-white">
              수정완료
            </button>
            <button className="w-40 h-14 bg-gray-200 ml-6">취소</button>
          </div> */}
        </section>
      </main>
    </section>
  );
};

// 학력 추가입력
function NewSchoolElement(
    { graduation, schoolType, degree, schoolName, majorName, id }: 
    { graduation: string; schoolType: string; degree:string; schoolName:string; majorName:string; id:string; }
  ) {
    const handleDelete = () => {
      if (confirm("삭제하시겠습니까?")) {
        axios
          .post("/api/resume/del/school", id)
          .then(() => {
            toast.success("삭제 되었습니다.");
            window.location.reload();
          })
          .catch(() => {
            toast.error("학력 정보 삭제 실패");
          });
      } else {
      }
    };
  return (
    <div className="flex  text-[13px] md:text-base">
    <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
      <fieldset className="border border-gray-200 md:text-center w-full text-black md:flex">
        <div className="w-full md:w-2/12 float-left">
          <legend
            id="lang_01"
            className="w-full md:border-r md:border-gray-200 h-12 md:h-14 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary p-4"
          >
            {schoolType}
          </legend>
        </div>
        <div className="w-full md:w-5/12 float-left">
          <legend className="w-1/4 md:w-[160px] h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
            학교명
          </legend>
          <div className="before:border-l before:border-gray-200 w-3/4 md:w-[240px] h-10 float-left pt-4 box-border flex">
            <div className="pl-4">
              {schoolName}
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 float-left">
          <legend className="w-1/4 md:w-[160px] h-12 md:h-14 float-left text-left pt-4 md:border-l border-gray-200 pl-4 md:pl-8">
            전공명
          </legend>
          <div className="before:border-l before:border-gray-200 w-7/12 h-10  float-left pt-4 box-border flex">
            <div className="pl-4">
              {majorName}
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="border-x border-b border-gray-200 md:text-center w-full text-black md:flex">
        <div className="w-full md:w-2/12 float-left">
          <div
            id="lang_01"
            className="w-full md:border-r md:border-gray-200 h-12 md:h-14 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary p-4"
          >
            {graduation}
          </div>
        </div>
        <div className="w-full md:w-10/12 float-left">
          <legend className="w-1/4 md:w-[160px] h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 whitespace-nowrap">
            수료학위
          </legend>
          <div className="before:border-l before:border-gray-200 w-3/4 md:w-[680px] h-10 float-left pt-4 box-border flex">
            <div className="pl-4">
              {degree}
            </div>
          </div>
        </div>
      </fieldset>
      
    </div>
    <div className="w-1/12 md:w-[70px] flex justify-end items-center">
      <button className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full text-[11px]"
      onClick={handleDelete}      
      >
        X
      </button>
    </div>
    </div>
  );
}

//경력 추가입력
function NewCareerElement(
  { careerType, companyName, job_start, job_end, position, career_content, id }: 
  { careerType: string; companyName: string; job_start:string; job_end:string; position:string; career_content:string; id:string; }
) {
  const handleDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/resume/del/career", id)
        .then(() => {
          toast.success("삭제 되었습니다.");
          window.location.reload();
        })
        .catch(() => {
          toast.error("경력 정보 삭제 실패");
        });
    } else {
    }
  };
return (
        <div className="flex text-[13px] md:text-base">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <fieldset className="border border-gray-200 md:text-left w-full text-black md:flex">
                    <div className="w-full md:w-2/12">
                      <div
                        id="lang_01"
                        className="w-full md:border-r md:border-gray-200 h-12 md:h-14 pl-4 md:pl-8 pt-[14px] md:pt-4 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary"  
                      >
                        {careerType}
                      </div>
                    </div>
                    <legend className="w-1/4 md:w-[160px] h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-6">
                      회사명
                    </legend>
                    <div className="before:border-l before:border-gray-200 w-3/4 md:w-4/12 h-12 md:h-10 float-left pt-4 box-border flex">
                      <div className="pl-4 h-10">
                        {companyName}
                      </div>
                    </div>
                  </fieldset>
                  <div className="md:flex">
                    <fieldset className="border-l border-r md:border-r-0 border-gray-200 text-left w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        근무기간
                      </legend>
                      <div className="md:before:border-l border-gray-200 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left pt-1 md:pt-2 mb-2 md:mb-0 md:pr-28 flex box-border">
                        <div className="pl-4 md:pl-6 pt-3 md:pt-2 box-border w-1/2 md:w-[100px]">
                          {job_start}
                        </div>
                        <p className="pt-3 md:pt-2">~</p>
                        <div className="pl-6 md:pl-4 pt-3 md:pt-2 box-border w-1/2 md:w-[100px]">
                          {job_end}
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="border-x border-t md:border-t-0 border-gray-200 text-center md:text-left w-full md:w-1/2 text-black flex">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-1 md:pt-4 pl-4 md:pl-8">
                        직위 및<br className="md:hidden"/> 담당업무
                      </legend>
                      <div className="before:border-l before:border-gray-200 w-3/4 md:w-2/3 h-12 md:h-10 float-left pt-1 md:pt-4 md:pr-28 box-border flex ">
                        <div className=" p-3 md:p-0">
                          {position}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border border-gray-200 w-full h-auto text-black md:flex">
                      <div className="w-full md:w-2/12 h-12 md:h-[120px] md:leading-[120px] pt-[14px] md:pt-0 float-left pl-4 md:pl-8 md:border-r md:border-gray-200 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        프로젝트
                      </div>
                      <div className="w-full md:w-10/12 h-auto px-4 pt-14 mb-2 md:pl-6 text-wrap mt-1">
                        {career_content}
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center text-[11px]">
                  <button
                  className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full"
                  onClick={handleDelete}                  
                  >
                    X
                  </button>
                </div>
              </div>
  );
}

//교육이력 추가입력
function NewTrainingElement(
  { training_start, training_end, trnInstitution, trnName, trn_content, id}: 
  { training_start: string; training_end: string; trnInstitution:string; trnName:string; trn_content:string; id:string;}
) {
  const handleDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/resume/del/training", id)
        .then(() => {
          toast.success("삭제 되었습니다.");
          window.location.reload();
        })
        .catch(() => {
          toast.error("교육이력 정보 삭제 실패");
        });
    } else {
    }
  };
return (
  <div className="flex text-[13px] md:text-base">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <div className="md:flex border border-gray-200">
                    <fieldset className="md:border-r border-gray-200 w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        교육기간
                      </legend>
                      <div className="md:before:border-l before:border-gray-200 before:mt-2 before:h-6 w-full md:w-2/3 h-10 float-left pt-1 md:pt-2 mb-2 md:pr-28 flex box-border">
                        <div
                          className="pl-4 h-10 box-border w-1/2 md:w-36 leading-[44px] md:leading-[40px]"
                        >
                          {training_start}
                        </div>
                        <p className="p-3 md:p-2 md:ml-3">~</p>
                        <div
                          className="pl-4 md:pl-3 h-10 box-border w-1/2 md:w-36 leading-[44px] md:leading-[40px]"
                        >
                          {training_end}
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="text-center w-full md:w-1/2 text-black flex border-t md:border-t-0 border-gray-200 ">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육기관
                      </legend>
                      <div className="before:border-l before:border-gray-200 w-3/4 md:w-2/3 h-10 float-left pt-4 md:pr-28 box-border flex">
                        <div className="pl-4">
                          {trnInstitution}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border-x border-gray-200 text-center w-full text-black flex">
                      <legend className="w-1/4 md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육명
                      </legend>
                      <div className="w-3/4 md:w-10/12 before:border-l before:border-gray-200 before:h-6 float-left flex justify-start items-center">
                        <div className="pl-4 md:pt-3 text-wrap">
                          {trnName}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="border border-gray-200 w-full text-black flex">
                      <legend className="w-1/4 md:w-2/12 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        교육내용
                      </legend>
                      <div className="w-3/4 md:w-10/12 before:border-l before:border-gray-200 before:h-6 float-left flex justify-start items-center">
                        <div className="pl-4 md:pt-3 text-wrap w-full">
                          {trn_content}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                  <button className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full text-[11px]"
                  onClick={handleDelete}                  
                  >
                    X
                  </button>
                </div>
              </div>
  )
}

//자격증 추가입력
function NewLicenseElement(
  { licenseName, licenseDept, licenseDate, id}: 
  { licenseName: string; licenseDept: string; licenseDate:string; id:string;}
) {
  const handleDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/resume/del/license", id)
        .then(() => {
          toast.success("삭제 되었습니다.");
          window.location.reload();
        })
        .catch(() => {
          toast.error("자격증 정보 삭제 실패");
        });
    } else {
    }
  };

return (
<div className="flex text-[13px] md:text-base">
                <div id="form_area" className="w-11/12 md:w-[1050px] pt-4">
                  <div>
                    <fieldset className="border border-gray-200 w-full text-black md:flex">
                      <legend className="w-full md:w-2/12 h-12 md:h-14 float-left pt-4 pl-4 md:pl-8 md:border-r md:border-gray-200 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        자격증명
                      </legend>
                      <div className="w-3/4 md:w-10/12 md:before:border-l before:border-gray-200 before:h-6 float-left flex justify-start items-center">
                        <div className="pl-4 md:pt-3 text-wrap w-full py-4 md:py-0">
                        {licenseName}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="md:flex border-b border-gray-200">
                    <fieldset className="border-l border-r md:border-r-0 border-gray-200 w-full md:w-1/2 text-black md:flex">
                      <legend className="w-full md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8 md:border-gray-200 bg-lightgray md:bg-transparent border-b md:border-b-0 border-secondary">
                        발행처
                      </legend>
                      <div className="w-3/4 md:w-10/12 md:before:border-l before:border-gray-200 before:h-6 float-left flex justify-start items-center">
                        <div className="pl-4 md:pt-3 text-wrap w-full py-4 md:py-0">
                          {licenseDept}
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="border-x border-gray-200 w-full md:w-1/2 text-black flex border-t md:border-t-0">
                      <legend className="w-1/4 md:w-1/3 h-12 md:h-14 float-left text-left pt-4 pl-4 md:pl-8">
                        취득일
                      </legend>
                      <div className="before:border-l before:border-gray-200 before:mt-2 before:h-6 w-full md:w-3/4 h-12 md:h-10 float-left pt-1 md:pt-2 md:pr-28 flex box-border">
                        <div className="pl-4 md:pl-6 h-12 md:h-10 box-border w-full md:w-64 pt-3 md:pt-2">
                          {licenseDate}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div></div>
                </div>
                <div className="w-1/12 md:w-[70px] flex justify-end items-center">
                  <button
                  className="w-7 h-7 md:w-10 md:h-10 bg-gray-200 rounded-full text-[11px]"
                  onClick={handleDelete}
                  >
                    X
                  </button>
                </div>
              </div>
  )
}
export default ResumeClient;


