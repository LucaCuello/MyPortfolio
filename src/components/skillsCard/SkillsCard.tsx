import "./SkillsCard.css";
import { motion } from "framer-motion";

export const SkillsCard = ({
  icon,
  name,
  mainColor,
  ligthColor,
}: {
  icon: any;
  name: string;
  mainColor: string;
  ligthColor: string;
}) => {
  let colorStyles = {
    backgroundColor: `${mainColor}`,
    boxShadow: `15px 0px ${ligthColor}`,
  };
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.9 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="skills-card"
      style={colorStyles}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
};
