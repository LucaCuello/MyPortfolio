import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";

import "./ProjectsCard.css";

type CardProps = {
  title: string;
  description: string;
  icons: React.ReactNode;
  imagePath: string;
  animationDelay: number;
  deploy: string;
  repository: string;
};

export const ProjectsCard = ({
  title,
  description,
  icons,
  imagePath,
  animationDelay,
  deploy,
  repository,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: animationDelay, ease: "easeIn" }}
      className="project"
      key={crypto.randomUUID()}
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.03 }}
        className="project-preview"
        src={imagePath}
        draggable="false"
        alt="Image preview of a project"
      ></motion.img>
      <div className="project-description">
        <h2 className="card-heading">{title}</h2>
        <p>{description}</p>
        <span className="techs-used">{icons}</span>
        <div className="go-to">
          <button className="deploy-btn btn">
            <GrDeploy />
            <a href={deploy} target="_blank">
              Deploy
            </a>
          </button>

          <button className="repository-btn btn">
            <FiGithub />
            <a href={repository} target="_blank">
              Repository
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
