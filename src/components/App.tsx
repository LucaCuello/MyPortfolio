import { Route, Routes } from "react-router-dom";
import { NavBar } from "./navBar/NavBar";
import { AboutMeContainer } from "./aboutMeContainer/AboutMeContainer";
import { AboutMe } from "./views/aboutMe/AboutMe";
import { ProfilePicture } from "./profilePicture/ProfilePicture";
import { Footer } from "./footer/Footer";
import { Education } from "./views/education/Education";
import { Projects } from "./views/projects/Projects";
import { Skills } from "./views/skills/Skills";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <AboutMeContainer
              body={<AboutMe />}
              profilePicture={<ProfilePicture />}
            />
          }
        />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};
