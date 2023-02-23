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
            <FaLinkedin />
            Contact me
          </a>
        </span>
        <span>
          <a
            className="contact-link"
            href="https://github.com/LucaCuello"
            target="_blank"
          >
            <FaGithubSquare />
            Follow me
          </a>
        </span>
      </div>
      <div className="update-info">
        <p>Last update: 02/21/2023</p>
      </div>
    </footer>
  );
};
