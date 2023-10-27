import React, { HTMLProps } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import "../styles/css/components/Input.css";

type ValidationType = {
  required?: { value: boolean; message: string };
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  min?: { value: number; message: string };
  max?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
};

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
  icon?: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  validation?: ValidationType;
  error?: keyof ValidationType | string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  name,
  register,
  validation,
  error,
  ...rest
}) => {
  const errorType = Object.keys(validation || {});

  return (
    <div className="input__container">
      <label htmlFor={name} className={`body__text-s ${error ? "error" : ""}`}>
        {label}
      </label>
      {icon && <span className="input__icon">{icon}</span>}
      <input
        {...register(name || "", validation)}
        {...rest}
        aria-invalid={error ? "true" : "false"}
        className={error ? "error" : ""}
      />
      {error && errorType.find((type) => type === error) && (
        <span className="error-message body__text-s">
          {validation?.[error as keyof ValidationType]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
