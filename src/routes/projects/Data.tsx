import { SiCss3, SiFramer, SiGooglechrome, SiHtml5, SiJavascript, SiReact, SiTypescript, SiVite } from "react-icons/si";
import DolarLive from "../../assets/previews/DolarLive.png";
import FullioStudioPreview from "../../assets/previews/FullioStudio.png";
import PortfolioPrwview from "../../assets/previews/PortfolioPreview.png";
import RetroToDoPreview from "../../assets/previews/RetroToDo.png";
import SpookyShopPreview from "../../assets/previews/SpookyShop.png";

export const projectsData = [
  {
    title: "Fullio Studio",
    description:
      "Freelance project I've made for a fashion designer. The project was built using React, TypeScript and framer motion to make the transitions as smooth as possible. The main objective was to accomplish a clean and minimalistic style.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: FullioStudioPreview,
    repository: "https://github.com/LucaCuello/FullioStudioPortfolio",
    deploy: "https://fulliostudio.com/home",
  },
  {
    title: "DolarLive",
    description:
      "Chrome extension designed specifically for users in Argentina. Developed using React, TypeScript, and Vite, this extension provides real-time updates on the prices of the US dollar and Euro, ensuring you stay up to date with the ever-changing currency exchange rates.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiGooglechrome key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: DolarLive,
    repository: "https://github.com/LucaCuello/DolarLive",
    deploy:
      "https://chrome.google.com/webstore/detail/dolarlive-cotizaci%C3%B3n-de-d/bkmobaaidlobcdldaegkbhhimicbdpcg?hl=es",
  },
  {
    title: "Retro to-do",
    description:
      "A retro-themed React to-do app. A fun and functional way to manage your tasks, you can add, delete and mark tasks as completed. The app features a sleek and nostalgic design, making it a pleasure to use. ",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: RetroToDoPreview,
    repository: "https://github.com/LucaCuello/React-Retro-To-Do-App",
    deploy: "https://retrotodoapp.vercel.app/",
  },
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
    repository: "https://github.com/LucaCuello/SpookyShop-Ecommerce",
    deploy: "https://spookyshop.vercel.app/",
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
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: PortfolioPrwview,
    repository: "https://github.com/LucaCuello/MyPortfolio",
    deploy: "https://lucacuello.vercel.app/",
  },
];
