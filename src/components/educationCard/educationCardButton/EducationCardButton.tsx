import { GrCertificate } from "react-icons/gr";

export const EducationCardButton = ({
  certificateLink,
}: {
  certificateLink: string;
}) => {
  return (
    <button className="certificate-button">
      <GrCertificate />
      <a href={certificateLink} target="_blank">
        Certificates
      </a>
    </button>
  );
};
