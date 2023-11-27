import { motion } from "framer-motion";
import { CardProps } from "../../interfaces/interfaces";
import "./EducationCard.css";

export const EducationCard = ({
  title,
  courseType,
  description,
  place,
  date,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="study-card"
    >
      <div className="head">
        <h2 className="card-heading">{title}</h2>
        <h3 className="card-subheading">{courseType}</h3>
        <span className="card-info">
          {place} | {date}
        </span>
      </div>
      <p className="card-description">{description}</p>
    </motion.div>
  );
};
