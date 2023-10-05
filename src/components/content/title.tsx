type Props = {
  title: any;
  center?: boolean;
};

export default function ContentTitle({ title, center }: Props) {
  return (
    <>
      <div
        className={`w-full h-[70px] flex items-center text-title border-b-[3px] border-black text-black mb-[20px] ${
          center ? "justify-center" : "justify-start"
        }`}
      >
        {title}
      </div>
    </>
  );
}
