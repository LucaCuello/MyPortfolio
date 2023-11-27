import { ButtonProps } from "../../interfaces/interfaces";
import "./Button.css";

export const Button = ({
  variant,
  content = "Button",
  hasIcon = false,
  icon,
}: ButtonProps) => {
  return (
    <button className={`button button-${variant}`}>
      {hasIcon && icon}
      <span>{content}</span>
    </button>
  );
};
