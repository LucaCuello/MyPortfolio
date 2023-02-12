import { motion } from "framer-motion";
import "./EducationCard.css";
import { EducationCardButton } from "./educationCardButton/EducationCardButton";

type CardProps = {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
  certificateLink: string;
  certificateAvailible: boolean;
};

export const EducationCard = ({
  title,
  courseType,
  description,
  place,
  date,
  certificateLink,
  certificateAvailible,
}: CardProps) => {
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
      <EducationCardButton
        certificateLink={certificateLink}
        certificateAvailible={certificateAvailible}
      />
    </motion.div>
  );
};
