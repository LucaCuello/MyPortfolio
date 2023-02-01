import { Route, Routes } from "react-router-dom";
import { AboutMeContainer } from "../components/aboutMeContainer/AboutMeContainer";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navBar/NavBar";
import { ProfilePicture } from "../components/profilePicture/ProfilePicture";
import { AboutMe } from "./aboutMe/AboutMe";
import { Education } from "./education/Education";
import { Projects } from "./projects/Projects";
import { Skills } from "./skills/Skills";

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
