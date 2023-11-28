import { ButtonProps } from "../../interfaces/interfaces";
import "./Button.css";

export const Button = ({
  variant,
  content = "Button",
  hasIcon = false,
  icon,
  size = "md",
  as = "button",
  linkTo = "#",
  target = "_blank",
}: ButtonProps) => {
  const isLink = as === "link";

  return isLink ? (
    <a
      href={linkTo}
      className={`button button-${variant} button-${size}`}
      target={target}
    >
      {hasIcon && icon}
      <span>{content}</span>
    </a>
  ) : (
    <button className={`button button-${variant} button-${size}`}>
      {hasIcon && icon}
      <span>{content}</span>
    </button>
  );
};
