import { ButtonHTMLAttributes, ReactNode } from "react";
import "./../styles/css/components/Buttons.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
  secondary?: boolean;
  children: ReactNode;
  onClick: () => void;
};

function Button({
  primary = false,
  secondary = false,
  onClick,
  children,
  ...other
}: ButtonProps) {
  return (
    <button
      className={`button ${
        primary ? "button-primary" : secondary && "button-secondary"
      }`}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
