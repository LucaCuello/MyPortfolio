import "./SkillsCard.css";
import { motion, AnimatePresence } from "framer-motion";

export const SkillsCard = ({
  icon,
  name,
  mainColor,
  ligthColor,
  textColor,
}: {
  icon: any;
  name: string;
  textColor?: string;
  mainColor: string;
  ligthColor: string;
}) => {
  let colorStyles = {
    backgroundColor: `${mainColor}`,
    boxShadow: `40px 0px ${ligthColor}`,
    color: `${textColor ? textColor : null}`,
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        exit={{ scale: 0 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="skills-card"
        style={colorStyles}
      >
        {icon}
        <span>{name}</span>
      </motion.div>
    </AnimatePresence>
  );
};
