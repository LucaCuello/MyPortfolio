import { motion } from "framer-motion";
import avatar from "../../assets/avatar/avatartransparent.png";
import "./ProfilePicture.css";

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
