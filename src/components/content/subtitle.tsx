import Image from "next/image";
import PicSubTitleIcon from "../../../public/img/icon/content_icon_2.png";

type Props = {
  title: any;
};

export default function ContentSubTitle({ title }: Props) {
  return (
    <>
      <div className="w-full h-[50px] flex justify-start items-center text-subtitle border-b-[1px] border-darkgray text-black mb-[20px] px-[20px]">
        <div className="mr-[10px]">
          <Image src={PicSubTitleIcon} alt="icon" width={20} height={20} />
        </div>
        <div>
        {title}
        </div>
      </div>
    </>
  );
}
