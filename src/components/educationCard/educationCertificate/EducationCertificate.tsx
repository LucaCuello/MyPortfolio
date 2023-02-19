import { AiOutlineClose } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import "./EducationCertificate.css";

type CertificateProps = {
  close: any;
  image: string;
  link: string;
};

export const EducationCertificate = ({ close, image, link }: CertificateProps) => {
  console.log(link);
  return (
    <div className="certificate-container">
      <AiOutlineClose
        className="certificate-close"
        onClick={() => {
          close();
        }}
      />
      <img src={image} alt="certificate" draggable={false} />
      <a href={link} target="_blank" className="certificate-link">
        <BiLink />
        Certificate's URL
      </a>
    </div>
  );
};
