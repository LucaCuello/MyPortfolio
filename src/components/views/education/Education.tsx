import { StudyCard } from "../../studyCard/StudyCard";
import "./Education.css";
export const Education = () => {
  return (
    <div className="education-container">
      <h1 className="heading">My education</h1>
      <div className="cards-container">
        <StudyCard
          title="Full-Stack"
          courseType="Bootcamp"
          description="Bootcamp that helped me as an introduction to the IT world. Here I've learnt HTML, CSS, JavaScript and I'm currently studying React and some of its most relevant libraries for Front-End."
          place="Nucba"
          date="03/2022 - Current"
        />
        <StudyCard
          title="Oracle Next Education"
          courseType="Crash-Course"
          description="Crash-course that helped to understand CSS/JavaScript more and it introduced me to a new programming language, Java."
          place="Oracle"
          date="08/2022 - Current"
        />
        <StudyCard
          title="Novit Academy"
          courseType="Crash-Course"
          description="In this Crash Course I'm currently learning a new Front-End framework; Angular. I'm also Learning .NET and C#."
          place="Novit"
          date="01/2023 - Current"
        />
        <StudyCard
          title="It Support"
          courseType="Specialization"
          description="This specialization teached me a lot of new cool stuff, from installing hardware components to creating a virtual machine. I've learnt how to use different OS, creating and executing scripts, troubleshooting and much more."
          place="Coursera, Google"
          date="09/2022 - Finished"
        />
      </div>
    </div>
  );
};
