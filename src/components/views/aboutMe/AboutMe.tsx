import { Button } from "../../button/Button";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h1 className="heading">Luca Cuello</h1>
      <h2 className="subheading">Front-end Dev</h2>
      <Button content="Get Resume"></Button>
      <div className="aboutme-body">
        <p>
          Welcome to my portfolio! I am a front-end developer with a passion for
          creating visually appealing and user-friendly interfaces.
        </p>
        <p>
          I am currently expanding my skills by studying React and Angular, and I am
          always eager to apply my knowledge and experience to new projects. I strive
          to consistently produce high-quality code that not only functions well, but
          also looks great.
        </p>
        <p>
          I am excited to share my work with you and I look forward to the
          opportunity to work with you in the future.
        </p>
      </div>
    </div>
  );
};
