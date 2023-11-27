import { ButtonProps } from "../../interfaces/interfaces";
import "./Button.css";

export const Button = ({
  variant,
  content = "Button",
  hasIcon = false,
  icon,
  size = "md",
}: ButtonProps) => {
  return (
    <button className={`button button-${variant} button-${size}`}>
      {hasIcon && icon}
      <span>{content}</span>
    </button>
  );
};
