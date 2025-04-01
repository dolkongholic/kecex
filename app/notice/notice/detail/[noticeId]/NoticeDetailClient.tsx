"use client";

import React, { useEffect, useState } from "react";
import SubNav from "@/components/SubNav";
import SubNavHeader from "@/components/SubNavHeader";
import ContentTitle from "@/components/content/title";
import Link from "next/link";
import { RiArrowDownSLine, RiArrowRightSLine, RiArrowUpSLine } from "react-icons/ri";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import PicNotice_04 from "@/public/img/page_top/notice_04.jpg";

const MainList = [
  { title: "공지사항", url: "/notice/notice?page=1", sub: null },
  { title: "FAQ", url: "/notice/faq", sub: null },
  { title: "문의사항", url: "/notice/qna", sub: null },
  { title: "인재정보", url: "/notice/worker", sub: null },
];

const location = "공지사항";

interface NoticeClientProps {
  currentNotice: any;
  currentUser?: any;
  noticeList?: any;
}

const NoticeDetailClient: React.FC<NoticeClientProps> = ({ currentNotice, currentUser, noticeList }) => {
  const [pageMenu, setPageMenu] = useState("공지사항");
  const [preNotice, setPreNotice] = useState<any>(null);
  const [nextNotice, setNextNotice] = useState<any>(null);
  const router = useRouter();
  const params = useSearchParams();
  const page = params?.get("page");

  let preId: any = null;
  let nextId: any = null;
  if (noticeList && Array.isArray(noticeList)) {
    noticeList.forEach((notice: any) => {
      if (notice.id < currentNotice.id && (preId === null || notice.id > preId)) {
        preId = notice.id;
      }
      if (notice.id > currentNotice.id && (nextId === null || notice.id < nextId)) {
        nextId = notice.id;
      }
    });
  }

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        if (preId) {
          const res = await axios.post("/api/notice", { id: preId });
          setPreNotice(res.data);
        }
        if (nextId) {
          const res = await axios.post("/api/notice", { id: nextId });
          setNextNotice(res.data);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNotices();
  }, [preId, nextId]);

  const del = () => {
    if (confirm("삭제하시겠습니까?")) {
      axios
        .post("/api/notice/del", currentNotice)
        .then(() => {
          toast.success("삭제 되었습니다.");
          router.push(`/notice/notice?page=${page}`);
        })
        .catch(() => {
          toast.error("오류가 있습니다.");
        });
    }
  };

  // 안전하게 JSON 배열을 파싱하고, fallback도 처리
  let attachments: string[] = [];

  try {
    const parsed = JSON.parse(currentNotice.file || "[]");

    if (typeof parsed === "string") {
      // 만약 'a,b,c'처럼 문자열로 저장되어 있으면 split
      attachments = parsed.split(",");
    } else if (Array.isArray(parsed)) {
      attachments = parsed;
    } else {
      console.warn("파일 형식이 예상과 다릅니다:", parsed);
    }
  } catch (error) {
    console.error("첨부파일 파싱 오류:", error);

    // fallback: 쉼표로 구분된 단일 문자열일 경우
    if (typeof currentNotice.file === "string") {
      attachments = currentNotice.file.split(",");
    }
  }


  return (
    <section>
      <figure className="w-full h-[200px]">
        <div className="w-full h-full mx-auto relative">
          <Image
            src={PicNotice_04}
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
            <div className="leading-[50px] flex space-x-[5px] items-center">
              Home{" "}
              <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] items-center">
              알림센터{" "}
              <RiArrowRightSLine className="text-[24px] pt-[3px] -translate-y-[3px] text-[#777]" />
            </div>
            <div className="leading-[50px] flex space-x-[5px] items-center underline">
              {location}
            </div>
          </div>
        </div>
      </div>
      <main className="w-full md:w-[1400px] flex justify-between items-start m-auto">
        <section className="hidden md:flex flex-col items-center">
          <div className="bg-white flex justify-center">
            <div className="w-full flex">
              <div className="w-[240px] flex flex-col">
                <SubNavHeader title={"알림센터"} />
                <div className="flex flex-col w-full">
                  <SubNav MainList={MainList} pageMenu={pageMenu} setPageMenu={setPageMenu} location={location} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:py-[40px] md:pl-[50px] md:pr-[20px] flex flex-col items-start w-full text-[14px] md:text-base">
          <ContentTitle title="공지사항" center={true} />
          <div className="w-full md:mt-[20px] md:leading-[50px] border-b border-gray-100">&nbsp;</div>
          <div className="w-full pl-[20px] flex items-center h-[70px] bg-gray-100 border-t-2 border-gray-500">
            <div className="w-[900px] overflow-hidden line-clamp-1">{currentNotice?.title}</div>
          </div>
          <div className="w-full flex justify-between items-center h-[50px] border-t-2 border-b-2 border-gray-100">
            <div className="flex justify-between items-center px-[20px]">
              <div>등록일</div>
              <div className="pl-4">{currentNotice?.date}</div>
            </div>
            <div className="pr-[40px] flex justify-center items-center"></div>
          </div>
          <div className="w-full mt-[30px] flex flex-col px-[20px] pb-10">
            {currentNotice.content.split("\n").map((line: any, index: any) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          {/* 첨부파일 및 이미지 미리보기, 다운로드 영역 */}
          {attachments.map((fileUrl, idx) => {
            const fileName = fileUrl.split("/").pop() || "";
            const originalName = fileName.replace(/^\d+_/, ""); // 앞쪽 숫자 + 언더스코어 제거

            const handleDownload = () => {
              axios.post('/api/download', { filePath: fileUrl }, { responseType: 'blob' })
                .then(response => {
                  const url = window.URL.createObjectURL(new Blob([response.data]));
                  const link = document.createElement('a');
                  link.href = url;
                  
                  // Content-Disposition 헤더에서 파일명 추출 시도
                  const contentDisposition = response.headers['content-disposition'];
                  let downloadFileName = originalName;
                  if (contentDisposition) {
                    const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
                    if (matches != null && matches[1]) {
                      downloadFileName = decodeURIComponent(matches[1].replace(/['"]/g, ''));
                    }
                  }
                  
                  link.setAttribute('download', downloadFileName);
                  document.body.appendChild(link);
                  link.click();
                  link.parentNode?.removeChild(link);
                  window.URL.revokeObjectURL(url);
                })
                .catch(error => {
                  console.error("다운로드 에러:", error);
                  toast.error("파일 다운로드 중 오류가 발생했습니다.");
                });
            };

            return (
              <div key={idx} className="flex items-center gap-2">
                {/.(jpg|jpeg|png|gif|webp)$/i.test(fileName) ? (
                  <img
                    src={fileUrl}
                    alt={`첨부 이미지 ${idx + 1}`}
                    className="max-w-[100px] h-auto border rounded"
                  />
                ) : (
                  <span className="text-gray-600 text-sm">
                    {originalName}
                  </span>
                )}
                <button
                  onClick={handleDownload}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                >
                  다운로드
                </button>
              </div>
            );
          })}


          {preNotice ? (
            <Link passHref href={`/notice/notice/detail/${preId}?page=${page}`} className="w-full">
              <div className="cursor-pointer w-full mt-[30px] flex items-center h-[70px] border-t-2 border-gray-100 border-b">
                <div className="w-1/4 md:w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>이전글</p>
                  <RiArrowUpSLine className="text-[24px] md:pt-[3px] text-[#3A3A3A]" />
                </div>
                <div className="w-3/4 md:w-[890px] flex items-center pl-3 md:pl-[20px] line-clamp-2 md:line-clamp-1">
                  {preNotice.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-pointer w-full mt-[30px] flex items-center h-[70px] border-t-2 border-gray-100 border-b">
              <div className="w-1/4 md:w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>이전글</p>
                <RiArrowUpSLine className="text-[24px] md:pt-[3px] text-[#3A3A3A] opacity-0" />
              </div>
              <div className="w-3/4 md:w-[890px] flex items-center pl-3 md:pl-[20px] line-clamp-2 md:line-clamp-1">
                이전글이 없습니다.
              </div>
            </div>
          )}

          {nextNotice ? (
            <Link passHref href={`/notice/notice/detail/${nextId}?page=${page}`} className="w-full">
              <div className="cursor-pointer w-full flex items-center h-[70px] border-b-2 border-b-gray-100">
                <div className="w-1/4 md:w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                  <p>다음글</p>
                  <RiArrowDownSLine className="text-[24px] md:pt-[3px] text-[#3A3A3A]" />
                </div>
                <div className="w-3/4 md:w-[890px] flex items-center pl-3 md:pl-[20px] line-clamp-2 md:line-clamp-1">
                  {nextNotice.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="cursor-pointer w-full flex items-center h-[70px] border-b-2 border-b-gray-100">
              <div className="w-1/4 md:w-[200px] flex justify-center items-center bg-gray-100 h-[66px] text-black">
                <p>다음글</p>
                <RiArrowDownSLine className="text-[24px] md:pt-[3px] text-[#3A3A3A] opacity-0" />
              </div>
              <div className="w-3/4 md:w-[890px] flex items-center pl-3 md:pl-[20px] line-clamp-2 md:line-clamp-1">
                <p>다음글이 없습니다.</p>
              </div>
            </div>
          )}

          <div className="flex gap-4 m-auto">
            <Link passHref href={"/notice/notice?page=1"}>
              <button className="w-20 md:w-32 h-10 bg-gray-500 text-white text-[14px] mt-9 m-auto">
                목록
              </button>
            </Link>
            {currentUser?.staff && (
              <button
                className="w-20 md:w-32 h-10 bg-red-500 text-white text-[14px] mt-9 m-auto"
                onClick={() => del()}
              >
                삭제
              </button>
            )}
            {currentUser?.staff && (
              <Link href={`/notice/notice/edit/${currentNotice.id}?page=${page}`}>
                <button className="w-20 md:w-32 h-10 bg-primary text-white text-[14px] mt-9 m-auto">
                  수정
                </button>
              </Link>
            )}
          </div>
          </section>
      </main>
    </section>
  );
};

export default NoticeDetailClient;
