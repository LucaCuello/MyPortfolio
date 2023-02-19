import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import "./EducationCertificate.css";

type CertificateProps = {
  close: any;
  image: string;
  link: string;
};

export const EducationCertificate = ({ close, image, link }: CertificateProps) => {
  return (
    <>
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="overlay"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="certificate-container"
      >
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
      </motion.div>
    </>
  );
};
