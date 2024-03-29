import { motion } from "framer-motion";
import { SkillsCard } from "../../components/skillsCard/SkillsCard";
import "./Skills.css";

import {
  designData,
  frontEndData,
  programmingLanguagesData,
  toolsData,
} from "./Data";

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="skills-container"
    >
      <h1 className="heading">Skills</h1>
      <div className="skills-card-container">
        <div className="programming-languages">
          <h2 className="category-heading">Programming languages</h2>
          <div className="languages">
            {programmingLanguagesData.map((props, index) => (
              <SkillsCard {...props} index={index} key={index} />
            ))}
          </div>
        </div>
        <div className="front-end">
          <h2 className="category-heading">Front-end</h2>
          <div className="front-end-frameworks">
            {frontEndData.map((props, index) => (
              <SkillsCard {...props} index={index} key={index} />
            ))}
          </div>
        </div>

        <div className="graphic-design">
          <h2 className="category-heading">Design</h2>
          <div className="design">
            {designData.map((props, index) => (
              <SkillsCard {...props} index={index} key={index} />
            ))}
          </div>
        </div>

        <div className="other-tools">
          <h2 className="category-heading">Other tools</h2>
          <div className="tools">
            {toolsData.map((props, index) => (
              <SkillsCard {...props} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
