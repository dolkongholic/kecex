import { User } from "@prisma/client";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiDotBold } from "react-icons/pi";

type Props = {
  MainList: any;
  pageMenu: any;
  setPageMenu: React.Dispatch<React.SetStateAction<String>>;
  location: string;
  currentUser?: User;
};

export default function SubNav({
  MainList,
  pageMenu,
  setPageMenu,
  location,
  currentUser,
}: Props) {
  const MainSelect = (title: string) => {
    if (pageMenu == title) {
      setPageMenu("");
    } else {
      setPageMenu(title);
    }
  };

  console.log(currentUser);
  return (
    <>
      {MainList.map((item: any, index: any) => (
        <div key={index}>
          {item.sub ? ( 
            <div
              className={`
                      ${index != 0 && "border-t-0"}
                      ${
                        pageMenu == item.title
                          ? "text-secondary border-b-2 border-gray font-medium"
                          : "border-b-2 border-gray text-black hover:bg-secondary hover:text-white"
                      } h-[60px] flex justify-between items-center  px-[20px] cursor-pointer`}
              onClick={() => MainSelect(item.title)}
            >
              <span>{item.title}</span>
              <span className="text-secondary">
                {item.sub != null ? (
                  pageMenu == item.title ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )
                ) : (
                  ""
                )}
              </span>
            </div>
          ) : (
            <Link passHref href={item.url}>
              <div
                className={`
                    ${index != 0 && "border-t-0"}
                    ${
                      pageMenu == item.title
                        ? "text-secondary border-b-2 border-gray font-medium"
                        : "border-b-2 border-gray text-black hover:bg-secondary hover:text-white"
                    } h-[60px] flex justify-between items-center  px-[20px] cursor-pointer`}
                onClick={() => MainSelect(item.title)}
              >
                <span>{item.title}</span>
                <span>
                  {item.sub != null ? (
                    pageMenu == item.title ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </Link>
          )}
          {item.sub && item.title == pageMenu && (
            <div className="flex flex-col w-full bg-lightgray py-[10px] pl-[20px] text-sm border-b border-gray">
              <ul className="space-y-[10px]">
                {item.sub.map((sub_item: any, sub_index: any) => !sub_item.staff? currentUser?.staff? ( 
                  <li key={sub_index}>
                    <Link
                      passHref
                      href={sub_item.url}
                      className="h-[60px] w-full"
                    >
                      <div
                        className={`hover:text-slate-700 hover:underline flex justify-start item-center leading-[20px] ${
                          location == sub_item.title ? " underline " : " "
                        }"`}
                      >
                        <span className="flex justify-start item-center leading-[20px] pt-[5px]">
                          <PiDotBold />
                        </span>
                        <span className="flex justify-start item-center leading-[20px]">
                          {sub_item.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ): 
                <li key={sub_index}>
                    <Link
                      passHref
                      href={sub_item.url}
                      className="h-[60px] w-full"
                    >
                      <div
                        className={`hover:text-slate-700 hover:underline flex justify-start item-center leading-[20px] ${
                          location == sub_item.title ? " underline " : " "
                        }"`}
                      >
                        <span className="flex justify-start item-center leading-[20px] pt-[5px]">
                          <PiDotBold />
                        </span>
                        <span className="flex justify-start item-center leading-[20px]">
                          {sub_item.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                : 
                ""
                  )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
