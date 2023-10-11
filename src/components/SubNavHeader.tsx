import Image from "next/image";
import PicSubTitleIcon from "../../../public/img/icon/content_icon_2.png";

type Props = {
  title: any;
};

export default function SubNameHeaderTitle({ title }: Props) {
  return (
    <>
      <div className="w-full h-[170px] bg-[url('/img/common/navHeader.png')] bg-cover flex justify-center items-center text-center text-white text-[25px] font-bold mb-[40px]">
        {title}
      </div>
    </>
  );
}
