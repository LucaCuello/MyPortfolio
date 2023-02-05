import { motion } from "framer-motion";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import CvEn from "../../assets/CVFrontEN.pdf";
import { Button } from "../../components/button/Button";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="about-me"
    >
      <h1 className="heading">Luca Cuello</h1>
      <h2 className="subheading">Front-end Dev</h2>
      <div className="buttons-container">
        <Button
          content="Get Resume"
          direction={CvEn}
          icon={<AiOutlineDownload />}
          download={true}
        ></Button>
        <Button
          content="Contact me"
          direction="mailto:lucagcuello@gmail.com"
          icon={<AiOutlineMail />}
          download={false}
        ></Button>
      </div>
      <main className="aboutme-body">
        <p>
          Welcome to my portfolio! I am a front-end developer with a passion for
          creating visually appealing and user-friendly interfaces.
        </p>
        <p>
          I am currently expanding my skills by studying React and Angular, and I am
          always eager to apply my knowledge and experience to new projects. I strive
          to consistently produce high-quality code that not only functions well, but
          also looks great.
        </p>
        <p>
          I am excited to share my projects with you and I look forward to the
          opportunity to work together.
        </p>
      </main>
    </motion.div>
  );
};
