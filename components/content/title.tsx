type Props = {
  title: any;
  center?: boolean;
};

export default function ContentTitle({ title, center }: Props) {
  return (
    <>
      <div
        className={`w-full h-[70px] flex justify-center items-center text-[30px] font-bold md:font-normal md:text-[16px] md:border-b-[3px] border-slate-800 text-slate-800 mt-[20px] md:mt-0 mb-[20px] ${
          center ? "md:justify-center" : "md:justify-start"
        }`}
      >
        {title}
      </div>
    </>
  );
}
