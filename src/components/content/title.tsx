type Props = {
  title: any;
};

export default function SubNav({ title }: Props) {
  return (
    <>
      <div className="w-full h-[50px] flex justify-start items-center text-title border-b-[3px] border-black text-black mb-[20px]">
        {title}
      </div>
    </>
  );
}
