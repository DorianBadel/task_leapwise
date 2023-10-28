import { ButtonHTMLAttributes, ReactNode } from "react";
import "./../styles/css/components/Buttons.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
  link?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonOnClickProps = ButtonProps & {
  onClick: () => void;
};

function Button({
  secondary = false,
  link = false,
  onClick,
  className,
  children,
  ...other
}: ButtonProps | ButtonOnClickProps) {
  return (
    <button
      className={`${
        secondary ? "button-secondary" : link ? "button-link" : "button-primary"
      } ${className ? className : ""}`}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
