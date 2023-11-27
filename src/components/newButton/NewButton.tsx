import { ButtonProps } from "../../interfaces/interfaces";
import "./NewButton.css";

export const NewButton = ({
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
