import { motion } from "framer-motion";
import React from "react";
import "./AboutMeContainer.css";

type AboutMeProps = {
  body: React.ReactNode;
  profilePicture: React.ReactNode;
};

export const AboutMeContainer = ({ body, profilePicture }: AboutMeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="aboutme-container"
    >
      {body}
      {profilePicture}
    </motion.div>
  );
};
