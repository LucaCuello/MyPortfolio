import { Navigate, Route, Routes } from "react-router-dom";
import { AboutMeContainer } from "./components/aboutMeContainer/AboutMeContainer";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navBar/NavBar";
import { ProfilePicture } from "./components/profilePicture/ProfilePicture";
import { AboutMe } from "./views/about/AboutMe";
import { Education } from "./views/education/Education";
import { NotFound } from "./views/notFound/NotFound";
import { Projects } from "./views/projects/Projects";
import { Skills } from "./views/skills/Skills";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/home"
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
