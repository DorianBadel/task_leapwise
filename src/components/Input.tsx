import React, { HTMLProps } from "react";
import { UseFormRegister, FieldValues, Controller } from "react-hook-form";
import "../styles/css/components/Input.css";
import ImageIcon from "../assets/icons/Image.svg";

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
  className?: string;
  error?: keyof ValidationType | string;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  name,
  register,
  validation,
  error,
  className = "",
  ...rest
}) => {
  const errorType = Object.keys(validation || {});

  return (
    <div className={`input__container ${className}`}>
      <label htmlFor={name} className={`body__text-s ${error ? "error" : ""}`}>
        {label}
        {validation?.required?.value && "*"}
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

export const ImageInput = ({
  control,
  label,
  description,
}: {
  control: any;
  label: string;
  description: string;
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string>("");
  return (
    <div className="input__image">
      <p className={"body__text-m"}>{label}</p>
      <label
        htmlFor="photo"
        className={`input__image-label ${
          selectedImage === "" ? "" : "hasImage"
        }`}
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <ImageIcon />
        {selectedImage === "" ? "+ Upload Image" : "Change Image"}
      </label>
      <Controller
        name="photo"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            id="photo"
            type="file"
            onChange={(e) => {
              field.onChange(e.target.files);
              if (e.target.files === null) return;
              setSelectedImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
        )}
      />
      <span className="body__text-s text-gray">{description}</span>
    </div>
  );
};

export default Input;
