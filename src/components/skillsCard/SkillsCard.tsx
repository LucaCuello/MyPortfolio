import { motion } from "framer-motion";
import "./SkillsCard.css";

type CardProps = {
  icon: React.ReactNode;
  name: string;
  mainColor: string;
  ligthColor: string;
  index: number;
};

export const SkillsCard = ({
  icon,
  name,
  mainColor,
  ligthColor,
  index,
}: CardProps) => {
  let colorStyles = {
    backgroundColor: `${mainColor}`,
    boxShadow: `15px 0px ${ligthColor}`,
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.9 }}
      whileHover={{
        scale: [1.03, 0.97, 1],
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      transition={{ duration: 0.5, delay: 0.09 * index }}
      className="skills-card"
      style={colorStyles}
    >
      {icon}
      <span>{name}</span>
    </motion.div>
  );
};
