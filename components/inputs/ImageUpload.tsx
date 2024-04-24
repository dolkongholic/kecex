"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

const uploadPreset = "vu5gqfe9";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
  wide?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value, wide }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className={`
              relative
              cursor-pointer
              hover:opacity-70
              transition
              m-auto
              border 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-[#3A3A3A]
              box-border
              ${wide ? "w-full h-[50px] p-20" : "w-[150px] h-[200px] p-2"}
            `}
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">이미지 업로드</div>
            {value && (
              <div
                className="
              absolute inset-0 w-full h-full"
              >
                <Image
                  fill
                  style={{ objectFit: "fill" }}
                  src={value}
                  alt="Img"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
