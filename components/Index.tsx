"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResposiveCarousel } from "react-responsive-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import useInsertMainBanner from "@/app/hooks/useInsertMainBanner";
import Notice from "@/components/inputs/Notice";

import { SafeUser } from "@/types";

interface IndexProps {
  currentUser?: SafeUser | null;
}

const images = [
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
  "/img/banner/img_1.jpg",
  "/img/banner/img_2.jpg",
  "/img/banner/img_3.jpg",
];

const Index: React.FC<IndexProps> = ({ currentUser }) => {
  const InsertMainBannerModal = useInsertMainBanner();

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
            infiniteLoop={true}
            showIndicators={false}
          >
            {images.map((image, index) => (
              <Paper
                className={`w-[300px] h-[300px] hover:-translate-x-[25px] hover:-translate-y-[25px] hover:w-[350px] hover:h-[350px] transform duration-150 transition-all cursor-pointer`}
                key={index}
              >
                <Image src={image} alt="PopUp" fill />
              </Paper>
            ))}
          </ResposiveCarousel>
        </div>
      </div>
      <Notice />
    </section>
  );
};

export default Index;
