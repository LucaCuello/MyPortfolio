import "./StudyCard.css";
import { StudyCardButton } from "./studyCardButton/StudyCardButton";
import { motion } from "framer-motion";
export const StudyCard = ({
  title,
  courseType,
  description,
  place,
  date,
  certificateLink,
}: {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
  certificateLink: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
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
      <StudyCardButton certificateLink={certificateLink} />
    </motion.div>
  );
};
