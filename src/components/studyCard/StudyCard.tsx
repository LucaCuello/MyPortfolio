import "./StudyCard.css";
import { StudyCardButton } from "./studyCardButton/StudyCardButton";
export const StudyCard = ({
  title,
  courseType,
  description,
  place,
  date,
}: {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
}) => {
  return (
    <div className="study-card">
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
    </div>
  );
};
