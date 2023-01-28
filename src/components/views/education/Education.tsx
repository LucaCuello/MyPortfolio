import { StudyCard } from "../../studyCard/StudyCard";
import { educationData } from "./Data";
import { motion } from "framer-motion";
import "./Education.css";
export const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="education-container"
    >
      <h1 className="heading">My education</h1>
      <div className="cards-container">
        {educationData.map((props) => (
          <StudyCard {...props} key={crypto.randomUUID()} />
        ))}
      </div>
    </motion.div>
  );
};
