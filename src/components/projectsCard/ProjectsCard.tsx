import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoVercel } from "react-icons/io5";
import { projectCardProps } from "../../interfaces/interfaces";
import { Button } from "../Button/Button";
import "./ProjectsCard.css";

export const ProjectsCard = ({
  title,
  description,
  icons,
  imagePath,
  deploy,
  repository,
}: projectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="project"
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
          <Button
            variant="primary"
            content="Deploy"
            size="sm"
            hasIcon
            icon={<IoLogoVercel />}
            as="link"
            linkTo={deploy}
          />
          <Button
            variant="primary"
            content="Repository"
            size="sm"
            hasIcon
            icon={<IoLogoGithub />}
            as="link"
            linkTo={repository}
          />
        </div>
      </div>
    </motion.div>
  );
};
