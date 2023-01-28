import { ProjectsCard } from "../../projectsCard/ProjectsCard";
import { projectsData } from "./Data";
import { motion } from "framer-motion";
import "./Projects.css";

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 0.3 }}
      className="projects-container"
    >
      <h1 className="heading">My projects</h1>
      <div className="projects-container">
        {projectsData.map((props) => (
          <ProjectsCard {...props} key={crypto.randomUUID()} />
        ))}
      </div>
    </motion.div>
  );
};
