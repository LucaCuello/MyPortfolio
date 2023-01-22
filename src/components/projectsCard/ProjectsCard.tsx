import "./ProjectsCard.css";
import { GrDeploy, GrGithub } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: animationDelay, ease: "anticipate" }}
        className="project"
      >
        <img
          className="project-preview"
          src={imagePath}
          draggable="false"
          alt="Image preview of a project"
        ></img>
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
    </AnimatePresence>
  );
};
