"use client";
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import Link from "next/link";
import Image from "next/image";

function Join() {
  const router = useRouter();

  const [iconColors, setIconColors] = useState(['gray', 'gray', 'gray']);
  const [iconColors2, setIconColors2] = useState(['gray', 'gray', 'gray']);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const toggleAllIcons = () => {
    // Check if all icons are blue
    const allBlue = iconColors.every(color => color === '#008EE5');

    if (allBlue) {
      // 전부 회색으로
      setIconColors(['gray', 'gray', 'gray']);
    } else {
      // 전부 파란색으로
      setIconColors(['#008EE5', '#008EE5', '#008EE5']);
    }
  };
  //li 클릭 이벤트가 일어났을 때
  const handleLiClick = (index:any) => {
    // 현재 아이콘 색깔 가져오기
    const newIconColors2 = [...iconColors2];

    // 클릭 상태에 따라 이용약관 토글되기
    switch (index) {
      case 1:
        setIsShown2(!isShown2);
        newIconColors2[index] = iconColors2[index] === '#008EE5' ? 'gray' : '#008EE5';
        setIconColors2(newIconColors2);
        break;
      case 2:
        setIsShown3(!isShown3);
        newIconColors2[index] = iconColors2[index] === '#008EE5' ? 'gray' : '#008EE5';
        setIconColors2(newIconColors2);
        break;
      default:
        break;
    }
  };

  //체크 아이콘 클릭 이벤트가 일어났을 때
  const checkIcon = (index:any) => {
    // 현재 아이콘 색깔 가져오기
    const newIconColors = [...iconColors];

    // icon 클릭했을 때 색깔 토글
    newIconColors[index] = iconColors[index] === '#008EE5' ? 'gray' : '#008EE5';

    // iconColors상태 업데이트 하기
    setIconColors(newIconColors);
  };


  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleJoin = () => {

    
    const allIconsAgree = iconColors[1] === '#008EE5' && iconColors[2] ==='#008EE5';

    if(allIconsAgree){
      router.push('/member/join2');
    }else{
      alert('약관에 동의해주세요.')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 w-full md:w-[1200px] p-[20px] md:p-24 m-auto text-center text-black">
      <Link passHref href={"/"}>
        <Image
          src="/img/logo/logo_big_icon__1.png"
          alt="Logo"
          width={250}
          height={50}
        />
      </Link>
      <section className="w-full">
        <h2 className=" font-semibold text-[30px] border-b-2 border-darkgray w-full py-5">
          회원가입
        </h2>
        <h3 className="text-[24px] font-semibold mt-12 mb-8">약관동의</h3>
        <p>회원가입 전 약관을 확인해주세요.</p>
        <ul className="w-full flex px-5 md:px-52 h-12 bg-lightgray items-center justify-between mt-12 text-neutral-400 text-[14px] md:text-base">
          <li className="text-secondary">약관동의</li>
          <li className="text-secondary">
            <IoIosArrowForward />
          </li>
          <li>회원정보 입력</li>
          <li>
            <IoIosArrowForward />
          </li>
          <li>가입완료</li>
        </ul>
        <article>
          <ul className={`w-full border-lightgray border-2 mt-10 divide-y-2 divide-lightgray`}>
            <li
              className="flex justify-between h-14 items-center px-[20px] md:px-0 md:pl-52 md:pr-24"
            >
              <div className="flex items-center cursor-pointer" onClick={toggleAllIcons}>
                <FaCheckCircle size="1.3em" color={iconColors[0]} />{" "}
                <p className="ml-6 text-[14px]">모두 동의합니다.</p>
              </div>
            </li>
            {/*1번째 li*/}
            <li
              className="flex justify-between h-14 items-center px-[20px] md:px-0 md:pl-52 md:pr-24"
              onClick={() => handleLiClick(1)}
            >
              <div className="flex items-center cursor-pointer"
              onClick={() => checkIcon(1)}
              >
                <FaCheckCircle size="1.3em" color={iconColors[1]} />{" "}
                <p className="ml-6 text-[14px]">
                  한국방폭협회 회원 이용약관 동의{" "}
                  <span className="text-red-500">(필수)</span>
                </p>
              </div>
              <div>
                <IoIosArrowDown size="1.5em" color={iconColors2[1]} />
              </div>
            </li>
            {/*2번째 li*/}
            {isShown2 && (
              <div className="h-52 flex items-center pl-52">
                <pre id="first_article" className="text-[14px] w-[700px] h-48 overflow-scroll whitespace-pre-wrap overflow-x-hidden text-start">
                회원 가입 이용자 약관<br/><br/>

                제 1 장 총칙<br/><br/>

                제 1 조 (목적)<br/>
                이 약관은 한국방폭협회가 제공하는 인터넷(http://kecex.or.kr)을 통해 한국방폭협회 서비스(이하 서비스)의 이용에 관한 조건 및 절차와 기타 필요한 사항을 규정하는 것을 목적으로 합니다.<br/><br/>

                제 2 조 (용어의 정의)<br/>
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
                ①	{"개인회원"}(이하 회원)이라 함은 한국방폭협회를 활용하고자 한 한국방폭협회의 이용계약을 체결한 개인<br/>
                ②	{"이용자"}라 함은 개인, 기업 관계자 뿐만 아니라 일반 사용자 등의 이용계약 체결 여부와 관계없이 한국방폭협회를 활용하는 모든 대상<br/>
                ③	{"아이디(ID)"}라 함은 이용자 식별과 이용자의 서비스 이용을 위하여 이용계약 체결 시 이용자가 설정한 문자와 숫자의 조합<br/>
                ④	{"비밀번호"}라 함은 이용자 자신의 비밀을 보호하기 위하여 이용자 자신이 설정한 문자와 숫자의 조합<br/>
                ⑤	{"서비스"}라 함은 이용자가 단말기를 이용하여 한국방폭협회의 주전산기에 접속하여 다양한 정보를 입력·활용하는 것<br/>
                ⑥	{"이용계약"}이라 함은 한국방폭협회의 서비스를 제공받기 위하여 이 약관으로 한국방폭협회와 이용자 간의 체결하는 계약<br/><br/>

                제 3 조 (약관의 효력과 변경)<br/>
                ①	이 약관은 한국방폭협회에 게시하여 가입함으로써 효력을 발생합니다.<br/>
                ②	한국방폭협회는 합리적인 사유가 발생한 경우에는 이 약관을 변경할 수 있으며, 약관을 변경한 경우에는 변경 내용을 최소 7일 이전에 공시합니다.<br/>
                ③	등록자는 변경된 약관 사항에 동의하지 않으면, 언제나 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다. 약관의 효력 발생일 이후의 계속적인 서비스 이용은 약관의 변경 사항에 등록자가 동의한 것으로 간주됩니다.<br/><br/>

                제 4 조 (약관외 준칙)<br/>
                이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우 그 규정에 따르며, 그렇지 않은 경우에는 일반적인 관례에 따릅니다.<br/><br/>

                제 5 조 (적용범위)<br/>
                ①	이 약관은 한국방폭협회 이용자에게 적용합니다.<br/>
                ②	이 약관에 명시되지 않은 사항에 대해서는 관계 법령 및 서비스별 이용 안내의 취지에 따라 적용할 수 있습니다.<br/><br/>


                제 2 장 서비스 이용 계약<br/><br/>

                제 6 조 (이용계약의 성립)<br/>
                ①	이용계약은 이용자의 회원가입 신청에 대한 한국방폭협회의 가입으로 성립됩니다.<br/>
                ②	제 1 항의 규정에 의해 이용자가 회원가입 신청을 할 때에는 한국방폭협회 이용자 관리 시 필요로 하는 사항을 {"회원가입"} 서비스를 통하여 신청하여야 합니다.<br/>
                ③	이용자가 등록 절차를 거쳐 동의 버튼을 누름으로써 이 이용계약에 동의한 것으로 간주합니다.<br/>
                ④	서비스의 대량 이용 등 특별한 서비스 이용에 관한 계약은 별도의 계약으로 합니다.<br/><br/>

                제 7 조(서비스 이용신청)<br/>
                ①	회원으로 가입하여 서비스를 이용하고자 하는 자는 한국방폭협회 요청하는 제반 정보(이름, 이메일, 연락처 등)를 제공하여야 합니다.<br/>
                ②	모든 회원은 반드시 회원 본인의 이름과 연락처를 제공하여야만 서비스를 이용할 수 있으며, 실명으로 등록하지 않은 사용자는 일체의 권리를 주장할 수 없습니다.<br/>
                ③	타인의 명의를 도용하는 등 관계 법령을 위반하여 이용신청을 한 회원의 모든 계정은 삭제되며, 관계 법령에 따라 처벌을 받을 수 있습니다.<br/><br/>

                제 8 조 (이용계약 승인의 유보와 거절)<br/>
                ①	한국방폭협회는 다음 각 호에 해당하는 경우에는 이용계약의 승인을 유보할 수 있습니다.<br/>
                - 설비에 여유가 없거나 기술상에 지장이 있는 경우<br/>
                - 서비스의 효율적인 운영 등을 위하여 필요하다고 판단하는 경우<br/>
                ②	한국방폭협회는 다음 각 호에 해당하는 이용계약 신청에 대한 승인을 거절할 수 있습니다.<br/>
                - 타인의 명의를 도용하여 이용신청을 하였을 때<br/>
                - 이용계약 신청서의 내용을 허위로 기재하였을 때<br/>
                - 기타 회원가입 신청자의 귀책사유로 이용승인이 곤란한 경우<br/><br/>

                제 3 장 서비스의 이용<br/><br/>

                제 9 조 (서비스 이용시간)<br/>
                서비스의 이용 시간은 한국방폭협회 업무 및 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간(00:00-24:00)을 원칙으로 합니다. 다만 정기점검 등의 필요로 한국방폭협회가 정한 날이나 시간은 그러하지 아니합니다. 또한 서비스의 중지 및 제한에 대해서는 별도의 조항에 따릅니다.<br/><br/>

                제 10 조 (이용계약의 해지 및 서비스 이용의 제한)<br/>
                ①	이용자가 서비스 이용계약을 해지하고자 하는 때에는 한국방폭협회에 해지신청을 하여야 합니다.<br/>
                ②	한국방폭협회는 이용자가 다음 각 호에 해당하는 경우 사전통지 없이 이용계약을 해지하거나 전부 또는 일부의 서비스 제공을 중지할 수 있습니다.<br/><br/>

                - 타인의 회원가입 및 비밀번호를 도용한 경우<br/>
                - 다량의 정보를 전송하여 서비스의 안정적 운영을 방해하는 경우<br/>
                - 수신자의 의사에 반하는 광고성 정보, 전자우편을 전송하는 경우<br/>
                - 정보통신윤리위원회로부터의 이용제한 요구 대상인 경우<br/>
                - 서비스를 이용하여 얻은 정보를 한국방폭협회의 동의 없이 상업적으로 이용하는 경우<br/>
                - 기타 한국방폭협회가 부적당하다고 판단한 경우<br/><br/>

                제 11 조 (이용자 게시물의 삭제 및 이용 제한)<br/>
                ①	한국방폭협회는 서비스용 설비의 용량에 여유가 없다고 판단하는 경우 관련 사항을 사전 공지 후 필요에 따라 이용자가 게재 또는 등록한 내용물을 삭제하거나 이용자의 서비스 이용을 부분적으로 제한할 수 있습니다.<br/>
                ②	한국방폭협회는 이용자가 게재 또는 등록하는 서비스 내의 내용물이 다음 각 호에 해당한다고 판단하는 경우에 이용자에게 사전 통지 없이 삭제할 수 있습니다.<br/>
                - 다른 이용자 또는 제 3 자를 비방하거나 중상 모략으로 명예를 손상시키는 경우<br/>
                - 해당 게시판의 운영 목적에 적합하지 않다고 판단되는 경우<br/>
                - 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 유포하는 경우<br/>
                - 반국가적, 반사회적, 범죄적 행위와 결부된다고 판단되는 경우<br/>
                - 게시 기간이 규정된 기간을 초과한 경우<br/>
                - 기타 관계 법령에 위배된다고 판단되는 경우<br/><br/>

                제 12 조 (서비스의 중지 및 제한)<br/>
                ①	한국방폭협회는 다음 각 호에 해당하는 경우 서비스 제공을 중지할 수 있습니다.<br/>
                - 서비스용 설비의 보수 또는 공사로 인한 부득이한 경우<br/>
                - 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 때<br/>
                ②	한국방폭협회는 국가 비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때에는 서비스 제공을 중지하거나 제한할 수 있습니다.<br/><br/>

                제 4 장 의무<br/><br/>

                제 13 조 (한국방폭협회의 의무)<br/>
                ①	한국방폭협회는 전산설비 등을 한국방폭협회의 안정적인 서비스 제공에 적합하도록 유지하여야 하며 서비스용 설비에 장애 발생 시 조속히 복구하도록 노력하여야 합니다.<br/>
                ②	서비스 내용의 변경 또는 추가사항이 있는 경우 그 사항을 온라인을 통해 서비스 화면에 공지합니다.<br/><br/>

                제 14 조 (개인정보보호)<br/>
                ①	한국방폭협회는 공공기관의 정보공개에 관한 법률, 정보통신망 이용촉진 등에 관한 법률 등 관계 법령에 따라 이용신청 시 제공 받는 이용자의 개인정보, 이후에 추가로 제공받는 개인정보 및 서비스 이용 중 생성되는 개인정보를 보호하여야 합니다.<br/>
                ②	한국방폭협회는 개인정보를 이용 고객의 별도의 동의 없이 제3자에게 제공하지 않으며, 다음 각 호의 경우는 이용 고객의 별도 동의 없이 제3자에게 등록자의 개인정보를 제공할 수 있습니다.<br/>
                - 수사상 목적에 따른 수사기관의 서면 요구가 있는 경우에 수사협조의 목적으로 국가수사 기관에 성명, 주소 등 신상정보를 제공하는 경우<br/>
                - 신용정보의 이용 및 보호에 관한 법률, 전기통신 관련법률 등 법률에 특별한 규정이 있는 경우<br/>
                - 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우<br/>
                ③	이용자는 언제나 자신이 입력한 개인정보를 열람할 수 있으며, 오류를 수정 할 수 있습니다. 자세한 방법은 이용안내에서 정한 바에 따릅니다.<br/>
                ④	이용자는 언제나 이용계약을 해지함으로써 개인정보의 수집 및 이용에 대한 동의, 목적 외 사용에 대한 별도 동의, 제3자 제공에 대한 별도 동의를 철회 할 수 있습니다. 해지는 회원이 원하는 경우 한국방폭협회의 해지절차를 통해 하실 수 있습니다.<br/><br/>

                제 15 조 (이용자의 의무)
                ①	이용자는 서비스를 이용할 때 다음 각 호의 행위를 하지 않아야 합니다.<br/>
                - 다른 이용자의 회원가입을 부정하게 사용하는 행위<br/>
                - 서비스를 이용하여 얻은 정보를 한국방폭협회의 사전 승낙 없이 이용자의 이용 이외의 목적으로 복제하거나 이를 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위<br/>
                - 다른 이용자 또는 제 3 자를 비방하거나 중상 모략으로 명예를 손상하는 행위<br/>
                - 공공질서 및 미풍양속에 위배되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위<br/>
                - 반국가적, 반사회적, 범죄적 행위와 결부된다고 판단되는 행위<br/>
                - 다른 이용자 또는 제 3 자의 저작권 등 기타 권리를 침해하는 행위<br/>
                - 기타인의 회원가입을 부정하게 사용하는 행위<br/>
                - 서비스 이용과 관련하여 한국방폭협회가 정한 안내, 공지사항 등을 준수하지 않는 행위<br/>
                - 서비스의 안정적 운영을 방해하거나 고의로 장애를 유발시키는 행위<br/>
                - 서비스의 운영에 지장을 주거나 줄 우려가 있는 행위<br/>
                - 기타 한국방폭협회가 부적절하다고 판단하는 행위<br/>
                ②	이용자는 이 약관에서 규정하는 사항과 서비스 이용안내 또는 주의사항을 준수하여야 합니다.<br/>
                ③	이용자가 설치하는 단말기 등은 전기통신설비의 기술기준에 관한 규칙이 정하는 기준에 적합하여야 하며, 서비스에 장애를 주지 않아야 합니다.<br/><br/>



                제 16 조 (아이디 및 비밀번호 등)<br/>
                ①	아이디 및 비밀번호에 대한 모든 관리책임은 이용자에게 있습니다.<br/>
                ②	이용자는 아이디를 공유, 양도 또는 변경할 수 없습니다.<br/>
                ③	이용자에게 부여된 아이디에 의하여 발생되는 서비스 이용상의 과실 또는 제3자에 의한 부정사용 등에 대한 모든 책임은 이용자에게 있습니다.<br/><br/>

                제 5 장 저작권 및 면책<br/><br/>

                제 17 조 (게재된 자료에 대한 권리)<br/>
                서비스에 게재된 자료에 대한 권리는 다음 각 호와 같습니다.<br/>
                ①	게시물에 대한 권리와 책임은 게시자에게 있으며, 한국방폭협회는 게시자의 동의 없이는 이를 영리적 목적으로 사용할 수 없습니다.<br/>
                단, 비영리적 목적인 경우 한국방폭협회는 게시자의 동의 없이도 이를 사용할 수 있으며 서비스 내의 게재권을 갖습니다.<br/>
                ②	게시자의 사전 동의가 없이는 이용자는 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적 목적으로 이용할 수 없습니다.<br/><br/>

                제 18 조 (면책)<br/>
                한국방폭협회는 이용자간 또는 이용자와 제3자간에 서비스를 매개로 하여 물품거래 혹은 금전적 거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 이용자가 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다. 이용자가 한국방폭협회에서 제공하는 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서는 한국방폭협회의 책임이 면제됩니다.<br/><br/>

                제 19 조 (분쟁의 해결)<br/>
                ①	한국방폭협회 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.<br/>
                ②	전항의 노력에도 불구하고, 동 분쟁에 관한 소송은 민사소송법상의 관할법원을 전속적 관할법원으로 합니다.<br/><br/>

                [부칙]1.(시행일) 이 약관은 2024년 03월 26일부터 시행합니다.<br/><br/>
                </pre>
              </div>
            )}
            <li
              className="flex justify-between h-14 items-center px-[20px] md:px-0s md:pl-52 md:pr-24"
              onClick={() => handleLiClick(2)}
            >
              <div className="flex items-center cursor-pointer"
              onClick={() => checkIcon(2)}
              >
                <FaCheckCircle size="1.3em" color={iconColors[2]} />{" "}
                <p className="ml-6 text-[14px]">
                  개인정보 수집 및 이용 동의{" "}
                  <span className="text-red-500">(필수)</span>
                </p>
              </div>
              <div>
                <IoIosArrowDown size="1.5em" color={iconColors2[2]} />
              </div>
            </li>
            {/*3번째 li*/}
            {isShown3 && (
              <div className="h-52 flex items-center pl-52">
                <pre id="first_article" className="text-[14px] w-[700px] h-48 overflow-scroll whitespace-pre-wrap overflow-x-hidden text-start">
                개인정보 수집 및 이용에 대한 안내<br/><br/>

                한국방폭협회는 건설기술인의 교육관리를 위하여 아래의 개인정보를 수집ㆍ이용을 위해 「개인정보 보호법」 제15조, 제17조 및 제22조에 따라 귀하의 동의를 받고자 합니다.<br/><br/>


                1. 수집ㆍ이용 목적<br/>
                - 한국방폭협회에서는 회원의 자질향상 및 개인역량 강화를 위하여 교육을 지원하고 있으며, 이를 위하여 아래와 같은 목적으로 수집하며 이외의 목적으로는 사용되지 않습니다.<br/>
                - 수집ㆍ이용 목적 : 교육안내, 교육학사 관리의 목적으로 활용<br/><br/>

                2. 수집 항목<br/>
                - (필수) 필수 : 회원아이디, 비밀번호, 성명, 전화번호(휴대폰 포함), 이메일<br/>
                - (선택) 없음<br/><br/>


                3. 보유 및 이용기간<br/>
                - 교육 종료 후 3년 또는 최종 이용일로부터 2년<br/><br/>


                4. 동의거부 권리 및 거부에 따른 불이익<br/>
                - 개인정보 수집ㆍ이용 동의에 대하여 거부할 수 있으며, 동의를 거부하는 경우에는 본 교육의 신청제한 등의 불이익이 있을 수 있습니다.<br/><br/>

                </pre>
              </div>
            )}
          </ul>
        </article>
      </section>{" "}
      {/*약관동의 섹션 끝*/}
      <div className="flex justify-between w-full">
        <button className="w-28 h-10 bg-lightgray border border-[#ccc] text-secondary hover:bg-[#3A3A3A] hover:border-[#3A3A3A] hover:text-white ml-52 font-semibold"
        onClick={() => router.back()}
        >
          돌아가기
        </button>
          <button className="w-28 h-10 bg-secondary text-white mr-24 hover:bg-primary font-semibold"
          onClick={handleJoin}
          >
            다음
          </button>
      </div>
    </main>
  );
}

export default Join;
