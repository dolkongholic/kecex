import Image from "next/image";
import PicSubTitleIcon from "@/public/img/icon/content_icon_2.png";

type Props = {
  title: any;
};

export default function ContentSubTitle({ title }: Props) {
  return (
    <>
      <div className="w-full flex justify-start items-center text-[18px] md:text-[20px] font-medium
      text-black mb-[15px] mt-[40px]">
        {/* <div className="mr-[5px] md:mr-[10px]">
          <Image src={PicSubTitleIcon} alt="icon" width={20} height={20} />
        </div> */}
        <div>{title}</div>
      </div>
    </>
  );
}
