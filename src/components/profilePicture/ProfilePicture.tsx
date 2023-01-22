import "./ProfilePicture.css";
import avatar from "../../assets/avatartransparent.png";
import { motion, AnimatePresence } from "framer-motion";
export const ProfilePicture = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="picture-container"
      >
        <img src={avatar} alt="avatar" draggable="false"></img>
      </motion.div>
    </AnimatePresence>
  );
};
