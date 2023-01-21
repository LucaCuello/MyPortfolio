import "./Button.css";
import { CgSoftwareDownload } from "react-icons/cg";

export const Button = ({ content }: { content: string }) => {
  return (
    <button id="comp-button">
      <CgSoftwareDownload className="icon" />
      {content}
    </button>
  );
};
