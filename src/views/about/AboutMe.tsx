import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import CvEn from "../../assets/curriculum/CVFrontEN.pdf";
import { Button } from "../../components/button/Button";
import { NewButton } from "../../components/newButton/NewButton";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="about-me"
    >
      <h1 className="heading">Luca</h1>
      <h2 className="subheading">Front-end developer</h2>
      <div className="buttons-container">
        <Button
          content="Resume"
          direction={CvEn}
          icon={<HiOutlineDocumentText />}
          document={true}
        ></Button>
        <NewButton variant="primary" content="Resume" />
        <NewButton variant="secondary" content="Contact me" />
        <Button
          content="Contact me"
          direction="mailto:lucagcuello@gmail.com"
          icon={<AiOutlineMail />}
          document={false}
        ></Button>
      </div>
      <main className="aboutme-body">
        <p>
          Hello and welcome to my portfolio! I’m a front-end developer who loves
          crafting visually delightful and easy-to-use interfaces.
        </p>
        <p>
          Currently, I'm pursuing a university degree and mastering full-stack
          with my diploma. Every project refines my skills and knowledge. I aim
          to deliver both functional and aesthetically pleasing code.
        </p>
        <p>
          Take a look around, explore my projects, and let's chat! I’d love to
          hear about how we might work together.
        </p>
      </main>
    </motion.div>
  );
};
