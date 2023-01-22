import "./StudyCard.css";
import { StudyCardButton } from "./studyCardButton/StudyCardButton";
import { motion, AnimatePresence } from "framer-motion";
export const StudyCard = ({
  title,
  courseType,
  description,
  place,
  date,
  animationDelay,
}: {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
  animationDelay: number;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: animationDelay, ease: "easeIn" }}
        className="study-card"
      >
        <div className="head">
          <h2 className="card-subheading">
            {title} | {courseType}
          </h2>
          <span className="card-info">
            {place} | {date}
          </span>
        </div>
        <p className="card-description">{description}</p>
        <StudyCardButton />
      </motion.div>
    </AnimatePresence>
  );
};
