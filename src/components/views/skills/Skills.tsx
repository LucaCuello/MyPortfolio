import { SkillsCard } from "../../skillsCard/SkillsCard";
import "./Skills.css";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiTypescript,
  SiMaterialui,
  SiChakraui,
  SiStyledcomponents,
  SiSass,
  SiTailwindcss,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiDotnet,
  SiCsharp,
  SiNpm,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaReact, FaAngular, FaJava, FaBootstrap } from "react-icons/fa";
import { DiNodejsSmall, DiCss3 } from "react-icons/di";

export const Skills = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="skills-container"
      >
        <h1 className="heading">My skills</h1>
        <div className="skills-card-container">
          <div className="programming-languages">
            <h2 className="category-heading">Programming languages</h2>
            <div className="languages">
              <SkillsCard
                icon={<AiFillHtml5 style={{ color: "#468097" }} />}
                name="HTML"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<DiCss3 style={{ color: "#EBBCBA" }} />}
                name="CSS"
                mainColor="#468097"
                ligthColor="#28485f"
              />

              <SkillsCard
                icon={<IoLogoJavascript style={{ color: "#468097" }} />}
                name="JavaScript"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<SiTypescript style={{ color: "#EBBCBA" }} />}
                name="TypeScript"
                mainColor="#468097"
                ligthColor="#28485f"
              />
              <SkillsCard
                icon={<SiDotnet style={{ color: "#468097" }} />}
                name=".NET"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<FaJava style={{ color: "#EBBCBA" }} />}
                name="Java"
                mainColor="#468097"
                ligthColor="#28485f"
              />
              <SkillsCard
                icon={<SiCsharp style={{ color: "#468097" }} />}
                name="C#"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
            </div>
          </div>
          <div className="front-end">
            <h2 className="category-heading">Front-end</h2>
            <div className="front-end-frameworks">
              <SkillsCard
                icon={<FaReact style={{ color: "#468097" }} />}
                name="React"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<FaAngular style={{ color: "#EBBCBA" }} />}
                name="Angular"
                mainColor="#468097"
                ligthColor="#28485f"
              />
              <SkillsCard
                icon={<SiMaterialui style={{ color: "#468097" }} />}
                name="MaterialUI"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<SiChakraui style={{ color: "#EBBCBA" }} />}
                name="Chakra UI"
                mainColor="#468097"
                ligthColor="#28485f"
              />
              <SkillsCard
                icon={<SiStyledcomponents style={{ color: "#468097" }} />}
                name="StyledComponents"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<FaBootstrap style={{ color: "#EBBCBA" }} />}
                name="Bootstrap"
                mainColor="#468097"
                ligthColor="#28485f"
              />
              <SkillsCard
                icon={<SiSass style={{ color: "#468097" }} />}
                name="Sass"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<SiTailwindcss style={{ color: "#EBBCBA" }} />}
                name="Tailwind"
                mainColor="#468097"
                ligthColor="#28485f"
              />
            </div>
          </div>

          <div className="graphic-design">
            <h2 className="category-heading">Design</h2>
            <div className="design">
              <SkillsCard
                icon={<SiAdobephotoshop style={{ color: "#468097" }} />}
                name="PhotoShop"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<SiAdobeillustrator style={{ color: "#EBBCBA" }} />}
                name="Illustrator"
                mainColor="#468097"
                ligthColor="#28485f"
              />
              <SkillsCard
                icon={<SiCanva style={{ color: "#468097" }} />}
                name="Canva"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<SiFigma style={{ color: "#EBBCBA" }} />}
                name="Figma"
                mainColor="#468097"
                ligthColor="#28485f"
              />
            </div>
          </div>

          <div className="other-tools">
            <h2 className="category-heading">Other tools</h2>
            <div className="tools">
              <SkillsCard
                icon={<FaGitAlt style={{ color: "#468097" }} />}
                name="Git"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<AiFillGithub style={{ color: "#EBBCBA" }} />}
                name="GitHub"
                mainColor="#468097"
                ligthColor="#28485f"
              />

              <SkillsCard
                icon={<DiNodejsSmall style={{ color: "#468097" }} />}
                name="NodeJS"
                mainColor="#EBBCBA"
                ligthColor="#ebbcba9f"
              />
              <SkillsCard
                icon={<SiNpm style={{ color: "#EBBCBA" }} />}
                name="NPM"
                mainColor="#468097"
                ligthColor="#28485f"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
