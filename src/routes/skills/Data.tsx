import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejsSmall } from "react-icons/di";
import { FaAngular, FaBootstrap, FaGitAlt, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva,
  SiChakraui,
  SiCsharp,
  SiDotnet,
  SiFigma,
  SiMaterialui,
  SiNpm,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const programmingLanguagesData = [
  {
    icon: [<AiFillHtml5 key={crypto.randomUUID()} />],
    name: "HTML",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<DiCss3 key={crypto.randomUUID()} />],
    name: "CSS",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<IoLogoJavascript key={crypto.randomUUID()} />],
    name: "JavaScript",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<SiTypescript key={crypto.randomUUID()} />],
    name: "TypeScript",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<FaJava key={crypto.randomUUID()} />],
    name: "Java",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
];

export const frontEndData = [
  {
    icon: [<FaReact key={crypto.randomUUID()} />],
    name: "React",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<FaAngular key={crypto.randomUUID()} />],
    name: "Angular",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<SiMaterialui key={crypto.randomUUID()} />],
    name: "MaterialUI",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<SiChakraui key={crypto.randomUUID()} />],
    name: "Chakra UI",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<SiStyledcomponents key={crypto.randomUUID()} />],
    name: "StyledComponents",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<FaBootstrap key={crypto.randomUUID()} />],
    name: "Bootstrap",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<SiSass key={crypto.randomUUID()} />],
    name: "Sass",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<SiTailwindcss key={crypto.randomUUID()} />],
    name: "Tailwind",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
];

export const designData = [
  {
    icon: [<SiAdobephotoshop key={crypto.randomUUID()} />],
    name: "PhotoShop",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<SiAdobeillustrator key={crypto.randomUUID()} />],
    name: "Illustrator",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<SiCanva key={crypto.randomUUID()} />],
    name: "Canva",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<SiFigma key={crypto.randomUUID()} />],
    name: "Figma",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
];

export const toolsData = [
  {
    icon: [<FaGitAlt key={crypto.randomUUID()} />],
    name: "Git",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
  {
    icon: [<AiFillGithub key={crypto.randomUUID()} />],
    name: "GitHub",
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
  },
  {
    icon: [<SiNpm key={crypto.randomUUID()} />],
    name: "NPM",
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
  },
];
