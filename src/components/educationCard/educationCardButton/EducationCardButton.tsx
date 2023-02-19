import { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { TbCertificateOff } from "react-icons/tb";
import { EducationCertificate } from "../educationCertificate/EducationCertificate";

type LinkProp = {
  certificateLink: string;
  certificateAvailible: boolean;
  certificateImage: string;
};

export const EducationCardButton = ({
  certificateLink,
  certificateAvailible,
  certificateImage,
}: LinkProp) => {
  const [certificate, setCertificate] = useState<boolean>(false);

  const closeCertificate = () => {
    return setCertificate(false);
  };

  return (
    <>
      <button
        className="certificate-button"
        onClick={() => {
          setCertificate(true);
        }}
        disabled={!certificateAvailible}
      >
        {certificateAvailible ? <GrCertificate /> : <TbCertificateOff />}
        {certificateAvailible ? "Show certificate" : "In progress"}
      </button>
      {certificate ? (
        <EducationCertificate
          close={closeCertificate}
          image={certificateImage}
          link={certificateLink}
        />
      ) : null}
    </>
  );
};
