import "./Footer.css";
import { FaReact } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
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
      <div className="made-with">
        <span>
          <FaReact />
          Made with React.
        </span>
        <span>
          <AiOutlineHeart />
          And with Love!
        </span>
      </div>
    </footer>
  );
};
