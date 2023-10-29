import { ButtonHTMLAttributes, ReactNode } from "react";
import "./../styles/css/components/Buttons.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
  link?: boolean;
  className?: string;
  children: ReactNode;
  textAlternative?: ReactNode;
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
  textAlternative,
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
      {textAlternative && (
        <span className="button__text-alternative">{textAlternative}</span>
      )}
      <span className="button__text">{children}</span>
    </button>
  );
}

export default Button;
