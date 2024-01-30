"use client";

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useInsertMainBanner from "@/app/hooks/useInsertMainBanner";

import Modal from "@/components/modal/Modal";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/Input";

import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const InsertMainBanner = () => {
  const router = useRouter();
  const InsertPay = useInsertMainBanner();
  const { banner } = useInsertMainBanner();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const request = await axios.post("/api/insert/mainBanner", {
        data,
      });
      if (request) {
        toast.success("입력 성공");
        setIsLoading(false);
        InsertPay.onClose();
        reset();
        router.refresh();
      }
    } catch (error) {
      toast.error("오류 발생");
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="" subtitle="" />
      <Input
        id="banner"
        label=""
        type="file"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div
        className="
        text-center
        text-neutral-500
        mt-4
        font-light
      "
      ></div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={InsertPay.isOpen}
      title="배너 추가하기"
      actionLabel="추가"
      onClose={InsertPay.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default InsertMainBanner;
