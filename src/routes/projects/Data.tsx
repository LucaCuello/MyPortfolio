import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import PortfolioPrwview from "../../assets/previews/PortfolioPreview.png";
import RetroToDoPreview from "../../assets/previews/RetroToDo.png";
import SpookyShopPreview from "../../assets/previews/SpookyShop.png";

export const projectsData = [
  {
    title: "SpookyShop",
    description:
      "A pure CSS/JavaScript ecommerce, halloween themed. It utilizes JavaScript for its dynamic features such as register, login, adding a product to a cart among others. The platform is designed to be user-friendly and easy to navigate, with a clean and modern aesthetic.",
    icons: [
      <SiHtml5 key={crypto.randomUUID()} />,
      <SiCss3 key={crypto.randomUUID()} />,
      <SiJavascript key={crypto.randomUUID()} />,
    ],
    imagePath: SpookyShopPreview,
    animationDelay: 0.6,
    repository: "https://github.com/LucaCuello/SpookyShop-Ecommerce",
    deploy: "https://spookyshop.vercel.app/",
  },
  {
    title: "Retro to-do",
    description:
      "A retro-themed React to-do app. A fun and functional way to manage your tasks, you can add, delete and mark tasks as completed. The app features a sleek and nostalgic design, making it a pleasure to use. ",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
    ],
    imagePath: RetroToDoPreview,
    animationDelay: 0.7,
    repository: "https://github.com/LucaCuello/React-Retro-To-Do-App",
    deploy: "https://retrotodoapp.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Built with React, Vite and TypeScript, this portfolio showcases my skills and projects as a front-end developer. I've also used React Router V6 to make it a SPA and framer motion for its animations.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
    ],
    imagePath: PortfolioPrwview,
    animationDelay: 0.8,
    repository: "https://github.com/LucaCuello/MyPortfolio",
    deploy: "https://lucacuello.vercel.app/",
  },
];
