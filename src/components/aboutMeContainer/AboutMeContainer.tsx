import "./AboutMeContainer.css";
import { motion, AnimatePresence } from "framer-motion";
export const AboutMeContainer = ({
  body,
  profilePicture,
}: {
  body: any;
  profilePicture: any;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="aboutme-container"
      >
        {body}
        {profilePicture}
      </motion.div>
    </AnimatePresence>
  );
};
