import { GrCertificate } from "react-icons/gr";

type LinkProp = {
  certificateLink: string;
};

export const EducationCardButton = ({ certificateLink }: LinkProp) => {
  return (
    <button className="certificate-button">
      <GrCertificate />
      <a href={certificateLink} target="_blank">
        Certificates
      </a>
    </button>
  );
};
