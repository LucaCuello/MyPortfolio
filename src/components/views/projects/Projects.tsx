import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiVite,
  SiTypescript,
} from "react-icons/si";
import { ProjectsCard } from "../../projectsCard/ProjectsCard";
import SpookyShopPreview from "../../../assets/SpookyShop.png";
import RetroToDoPreview from "../../../assets/RetroToDo.png";
import PortfolioPrwview from "../../../assets/PortfolioPreview.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
export const Projects = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="projects-container"
      >
        <h1 className="heading">My projects</h1>
        <div className="projects-container">
          <ProjectsCard
            title="SpookyShop"
            description="A pure CSS/JavaScript ecommerce, halloween themed. It utilizes JavaScript for its dynamic features such as register, login, adding a product to a cart among others. The platform is designed to be user-friendly and easy to navigate, with a clean and modern aesthetic."
            icons={[<SiHtml5 />, <SiCss3 />, <SiJavascript />]}
            imagePath={SpookyShopPreview}
            animationDelay={0.5}
            repository="https://github.com/LucaCuello/SpookyShop-Ecommerce"
            deploy="https://spookyshop.vercel.app/"
          />
          <ProjectsCard
            title="Retro to-do"
            description="A retro-themed React to-do app. A fun and functional way to manage your tasks, you can add, delete and mark tasks as completed. The app features a sleek and nostalgic design, making it a pleasure to use. "
            icons={[<SiCss3 />, <SiReact />, <SiVite />]}
            imagePath={RetroToDoPreview}
            animationDelay={1}
            repository="https://github.com/LucaCuello/React-Retro-To-Do-App"
            deploy="https://retrotodoapp.vercel.app/"
          />
          <ProjectsCard
            title="Portfolio"
            description="Built with React, Vite and TypeScript, this portfolio showcases my skills and projects as a front-end developer. I've also used React Router V6 to make it a SPA and framer motion for its animations."
            icons={[<SiCss3 />, <SiTypescript />, <SiReact />, <SiVite />]}
            imagePath={PortfolioPrwview}
            animationDelay={1.5}
            repository="https://github.com/LucaCuello/MyPortfolio"
            deploy="#"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
