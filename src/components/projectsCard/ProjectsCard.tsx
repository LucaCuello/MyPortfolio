import "./ProjectsCard.css";
import { GrDeploy, GrGithub } from "react-icons/gr";
import { motion } from "framer-motion";
export const ProjectsCard = ({
  title,
  description,
  icons,
  imagePath,
  animationDelay,
  deploy,
  repository,
}: {
  title: string;
  description: string;
  icons: any;
  imagePath: string;
  animationDelay: number;
  deploy: string;
  repository: string;
}) => {
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
        animate={{ scale: [0.8, 1.3, 1] }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="project-preview"
        src={imagePath}
        draggable="false"
        alt="Image preview of a project"
      ></motion.img>
      <div className="project-description">
        <h3 className="card-subheading">{title}</h3>
        <p>{description}</p>
        <span className="techs-used">{icons}</span>
        <div className="go-to">
          <button>
            <GrDeploy />
            <a href={deploy} target="_blank">
              Deploy
            </a>
          </button>

          <button>
            <GrGithub />
            <a href={repository} target="_blank">
              Repository
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
