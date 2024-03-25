"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string;
  step?: number;
  small?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
  value,
  step,
  small,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
            peer
            w-full
            font-light
            bg-white
            border
            rounded-md
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${formatPrice ? "pl-9" : "pl-4"}
            ${errors[id] ? "border-red-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-primary" : "focus:border-primary"}
            ${small ? "p-2 pt-4" : "p-4 pt-6"}
        `}
        value={value}
        step={step}
      />
      <label
        className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            z-10
            origin-[0]
            ${formatPrice ? "left-9" : "left-4"}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? "text-primary" : "text-neutral-800"}
            ${small ? "top-4" : "top-5"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
