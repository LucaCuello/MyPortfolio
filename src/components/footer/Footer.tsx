import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <span>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/luca-cuello41/"
            target="_blank"
          >
            <FaLinkedin className="linkedin-icon" />
            Linkedin
          </a>
        </span>
        <span>
          <a
            className="contact-link"
            href="https://github.com/LucaCuello"
            target="_blank"
          >
            <FaGithubSquare className="github-icon" />
            Github
          </a>
        </span>
      </div>
    </footer>
  );
};
