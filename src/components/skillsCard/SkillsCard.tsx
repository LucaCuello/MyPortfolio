import { motion } from "framer-motion";
import "./SkillsCard.css";

type CardProps = {
  icon: React.ReactNode;
  name: string;
  mainColor: string;
  ligthColor: string;
};

export const SkillsCard = ({ icon, name, mainColor, ligthColor }: CardProps) => {
  let colorStyles = {
    backgroundColor: `${mainColor}`,
    boxShadow: `15px 0px ${ligthColor}`,
  };
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.9 }}
      whileHover={{ scale: 1.07, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="skills-card"
      style={colorStyles}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
};
