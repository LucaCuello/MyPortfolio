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
    icon: [<AiFillHtml5 style={{ color: "#468097" }} key={crypto.randomUUID()} />],
    name: "HTML",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<DiCss3 style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "CSS",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [
      <IoLogoJavascript style={{ color: "#468097" }} key={crypto.randomUUID()} />,
    ],
    name: "JavaScript",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<SiTypescript style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "TypeScript",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [<FaJava style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "Java",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
];

export const frontEndData = [
  {
    icon: [<FaReact style={{ color: "#468097" }} key={crypto.randomUUID()} />],
    name: "React",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<FaAngular style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "Angular",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [<SiMaterialui style={{ color: "#468097" }} key={crypto.randomUUID()} />],
    name: "MaterialUI",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<SiChakraui style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "Chakra UI",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [
      <SiStyledcomponents style={{ color: "#468097" }} key={crypto.randomUUID()} />,
    ],
    name: "StyledComponents",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<FaBootstrap style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "Bootstrap",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [<SiSass style={{ color: "#468097" }} key={crypto.randomUUID()} />],
    name: "Sass",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<SiTailwindcss style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "Tailwind",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
];

export const designData = [
  {
    icon: [
      <SiAdobephotoshop style={{ color: "#468097" }} key={crypto.randomUUID()} />,
    ],
    name: "PhotoShop",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [
      <SiAdobeillustrator style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />,
    ],
    name: "Illustrator",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [<SiCanva style={{ color: "#468097" }} key={crypto.randomUUID()} />],
    name: "Canva",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<SiFigma style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "Figma",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
];

export const toolsData = [
  {
    icon: [<FaGitAlt style={{ color: "#468097" }} key={crypto.randomUUID()} />],
    name: "Git",
    mainColor: "#EBBCBA",
    ligthColor: "#ebbcba9f",
  },
  {
    icon: [<AiFillGithub style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "GitHub",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
  {
    icon: [<SiNpm style={{ color: "#EBBCBA" }} key={crypto.randomUUID()} />],
    name: "NPM",
    mainColor: "#468097",
    ligthColor: "#28485f",
  },
];
