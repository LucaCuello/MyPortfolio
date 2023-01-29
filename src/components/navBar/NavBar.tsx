import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    const handdleClose = (e: any) => {
      if (!activeClass) return;
      if (
        !e.target.className.includes("hamburguer-menu-shown") &&
        !e.target.className.includes("hamburguer-container")
      ) {
        setActiveClass(false);
      }
    };

    document.addEventListener("click", handdleClose);

    return () => document.removeEventListener("click", handdleClose);
  }, [activeClass]);

  return (
    <header>
      <div
        className={
          activeClass
            ? "hamburguer-container hamburguer-active"
            : "hamburguer-container"
        }
        onClick={() => {
          setActiveClass((activeClass) => !activeClass);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav
        className={
          activeClass ? "hamburguer-menu hamburguer-menu-shown" : "hamburguer-menu"
        }
      >
        <ul className="un-list">
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
      <nav className="desktop-menu">
        <ul className="un-list">
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
    </header>
  );
};
