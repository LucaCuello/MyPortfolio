import "./NavBar.css";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className="item-list">
          <NavLink to="/" className="item-link">
            About me
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/education" className="item-link">
            Education
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/skills" className="item-link">
            Skills
          </NavLink>
        </li>
        <li className="item-list">
          <NavLink to="/projects" className="item-link">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
