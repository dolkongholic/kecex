type Props = {
  title: any;
};

export default function ContentTitle({ title }: Props) {
  return (
    <>
      <div className="w-full h-[70px] flex justify-start items-center text-title border-b-[3px] border-black text-black mb-[20px]">
        {title}
      </div>
    </>
  );
}
