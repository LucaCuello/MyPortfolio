import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";

import "./ProjectsCard.css";

type CardProps = {
  title: string;
  description: string;
  icons: React.ReactNode;
  imagePath: string;
  deploy: string;
  repository: string;
};

export const ProjectsCard = ({
  title,
  description,
  icons,
  imagePath,
  deploy,
  repository,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="project"
      key={crypto.randomUUID()}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "linear" }}
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
          <a className="deploy-btn btn" href={deploy} target="_blank">
            <GrDeploy />
            Deploy
          </a>
          <a className="repository-btn btn" href={repository} target="_blank">
            <FiGithub />
            Repository
          </a>
        </div>
      </div>
    </motion.div>
  );
};
