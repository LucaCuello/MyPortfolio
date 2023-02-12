import { GrCertificate } from "react-icons/gr";
import { TbCertificateOff } from "react-icons/tb";

type LinkProp = {
  certificateLink: string;
  certificateAvailible: boolean;
};

export const EducationCardButton = ({
  certificateLink,
  certificateAvailible,
}: LinkProp) => {
  return (
    <button className="certificate-button" disabled={!certificateAvailible}>
      {certificateAvailible ? <GrCertificate /> : <TbCertificateOff />}
      {certificateAvailible ? (
        <a href={certificateLink} target="_blank">
          Certificates
        </a>
      ) : (
        "In progress"
      )}
    </button>
  );
};
