import { motion } from "framer-motion";
import { Button } from "../../components/Button/Button";
import "./About.css";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="aboutme-container"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className="about-me"
      >
        <h1 className="heading">Luca</h1>
        <h2 className="subheading">Front-end developer</h2>
        <div className="buttons-container">
          <Button variant="primary" content="My resume" />
          <Button variant="primary" content="Contact me!" />
        </div>
        <main className="aboutme-body">
          <p>
            Welcome to my portfolio! I’m a front-end developer who loves
            crafting visually delightful and easy-to-use interfaces.
          </p>
          <p>
            Currently, I'm working as a Vue&React developer at a Software
            company, building websites and web apps. I'm also a student at the
            National Technological University (UTN) of Argentina, where I'm
            pursuing an associate degree in Programming.
          </p>
          <p>
            Take a look at my projects and skills, and feel free to contact me
            if you have any questions or would like to work together!
          </p>
        </main>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="picture-container"
      >
        {/* Acá iría mi foto */}
      </motion.div>
    </motion.div>
  );
};
