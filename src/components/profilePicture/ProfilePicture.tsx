import "./ProfilePicture.css";
import avatar from "../../assets/avatartransparent.png";
import { motion } from "framer-motion";
export const ProfilePicture = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className="picture-container"
    >
      <img src={avatar} alt="avatar" draggable="false"></img>
    </motion.div>
  );
};
