import "./Button.css";
import CvEn from "../../assets/CVFrontEN.pdf";
import { CgSoftwareDownload } from "react-icons/cg";

export const Button = ({ content }: { content: string }) => {
  return (
    <button id="comp-button">
      <CgSoftwareDownload className="icon" />

      <a href={CvEn} download>
        {content}
      </a>
    </button>
  );
};
