import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { AboutMe } from "./views/about/AboutMe";
import { Education } from "./views/education/Education";
import { NotFound } from "./views/notFound/NotFound";
import { Projects } from "./views/projects/Projects";
import { Skills } from "./views/skills/Skills";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};
