import {
  SiCss3,
  SiFirebase,
  SiFramer,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import DolarLive from "../../assets/previews/DolarLive.png";
import FullioStudioPreview from "../../assets/previews/FullioStudio.png";
import GalaxyStore from "../../assets/previews/GalaxyStore.png";
import PortfolioPrwview from "../../assets/previews/PortfolioPreview.png";
import RetroToDoPreview from "../../assets/previews/RetroToDo.png";
import SpookyShopPreview from "../../assets/previews/SpookyShop.png";

export const projectsData = [
  {
    title: "GalaxyStore",
    description:
      "A modern ecommerce platform built with React and TypeScript, featuring dynamic product management and secure authentication via Firebase. Designed with Tailwind and NextUI for a sleek, user-friendly interface with a space-themed aesthetic.",
    icons: [
      <SiVite key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiTailwindcss key={crypto.randomUUID()} />,
      <SiFirebase key={crypto.randomUUID()} />,
    ],
    imagePath: GalaxyStore,
    repository: "https://github.com/LucaCuello/GalaxyStore",
    deploy: "https://galaxystore.vercel.app",
  },
  {
    title: "Fullio Studio",
    description:
      "Developed for a fashion designer, this project uses React, TypeScript, and Framer Motion to achieve smooth transitions. The design is clean and minimalistic, aiming to align with the aesthetics of the fashion industry.",
    icons: [
      <SiCss3 key={crypto.randomUUID()} />,
      <SiReact key={crypto.randomUUID()} />,
      <SiVite key={crypto.randomUUID()} />,
      <SiTypescript key={crypto.randomUUID()} />,
      <SiFramer key={crypto.randomUUID()} />,
    ],
    imagePath: FullioStudioPreview,
    repository: "https://github.com/LucaCuello/FullioStudioPortfolio",
    deploy: "https://fulliostudio.com/",
  },
  {
    title: "DolarLive",
    description:
      "A Chrome extension for users in Argentina, built with React, TypeScript, and Vite. It provides current exchange rates for the US dollar and Euro, offering a practical tool for currency monitoring.",
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
      "A to-do app with a retro theme, built in React. It allows users to add, delete, and mark tasks as completed, featuring a user-friendly interface with a retro design.",
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
      "An ecommerce site with a Halloween theme, created using CSS and JavaScript. It includes features like user registration, login, and a shopping cart, with a focus on a simple and intuitive user experience.",
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
      "My personal portfolio, showcasing various front-end projects. Built with React, Vite, and TypeScript, it includes React Router V6 for smooth single-page navigation and Framer Motion for animation effects.",
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
