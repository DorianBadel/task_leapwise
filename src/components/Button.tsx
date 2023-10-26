import { ButtonHTMLAttributes, ReactNode } from "react";
import "./../styles/css/components/Buttons.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
  children: ReactNode;
};

type ButtonOnClickProps = ButtonProps & {
  onClick: () => void;
};

function Button({
  secondary = false,
  onClick,
  children,
  ...other
}: ButtonProps | ButtonOnClickProps) {
  return (
    <button
      className={`${secondary ? "button-secondary" : "button-primary"}`}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
