"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResposiveCarousel } from "react-responsive-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import useInsertMainBanner from "@/app/hooks/useInsertMainBanner";
import Notice from "@/components/inputs/Notice";

import { IoMdClose } from "react-icons/io";

import { SafeUser } from "@/types";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface IndexProps {
  currentUser?: SafeUser | null;
  mainBanner?: any;
  newsList?: any;
  noticeList?: any;
}

const Index: React.FC<IndexProps> = ({
  currentUser,
  mainBanner,
  newsList,
  noticeList,
}) => {
  const router = useRouter();
  const InsertMainBannerModal = useInsertMainBanner();

  const onDelBanner = useCallback(
    (id: any) => {
      axios
        .post("/api/delBanner", { id })
        .then(() => {
          toast.success("배너를 삭제 하였습니다.");
        })
        .catch(() => {
          toast.error("오류가 발생했습니다.");
        })
        .finally(() => {
          router.refresh();
        });
    },
    [router]
  );

  const InsertMainBanner = () => {
    InsertMainBannerModal.onOpen();
  };

  return (
    <section>
      <div className="w-full h-[450px]">
        {currentUser && currentUser.staff && (
          <div
            className="lg:block hidden absolute right-0 mr-2 mt-2 w-32 py-2 bg-blue-900 z-[55] text-white text-center rounded-md cursor-pointer"
            onClick={() => InsertMainBanner()}
          >
            추가하기
          </div>
        )}

        <div className="w-full h-[450px] bg-black z-[50] flex justify-center items-center bg-[url('/img/common/main_bg.jpg')] bg-cover bg-center">
          <ResposiveCarousel
            className="absolute top-[165px] w-[1400px] h-[450px] z-[40] flex justify-center items-center"
            showArrows={true}
            centerMode={true}
            centerSlidePercentage={31}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={false}
            showIndicators={false}
          >
            {mainBanner?.map((image: any, index: any) => (
              <Paper
                className={`w-[300px] h-[300px] hover:-translate-x-[25px] hover:-translate-y-[25px] hover:w-[350px] hover:h-[350px] transform duration-150 transition-all cursor-pointer`}
                key={index}
              >
                <Image
                  src={image.fileUrl}
                  fill
                  className="object-fill w-full"
                  alt="Image"
                />
                {currentUser?.staff && (
                  <div
                    className="absolute w-full text-end p-2"
                    onClick={() => onDelBanner(image.id)}
                  >
                    <IoMdClose className="w-5 h-5" />
                  </div>
                )}
              </Paper>
            ))}
          </ResposiveCarousel>
        </div>
      </div>
      <Notice newsList={newsList} noticeList={noticeList} />
    </section>
  );
};

export default Index;
