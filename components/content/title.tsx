type Props = {
  title: any;
  center?: boolean;
};

export default function ContentTitle({ title, center }: Props) {
  return (
    <>
      <div
        className={`w-full h-[70px] flex justify-center items-center font-semibold md:font-semibold text-[24px] md:text-[20px] md:border-b-[3px] border-slate-800 text-slate-800 mt-[20px] md:mt-0 mb-[20px] ${
          center ? "md:justify-center" : "md:justify-start"
        }`}
      >
        {title}
      </div>
    </>
  );
}
