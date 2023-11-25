import { ButtonProps } from "../../interfaces/interfaces";
import "./NewButton.css";

export const NewButton = ({ variant, content }: ButtonProps) => {
  return <button className={`button button-${variant}`}>{content}</button>;
};
