import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

export const buttonVariants = {
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],  //using arrays to form definit keyframes
    scale: 1.05,
    textShadow: "0px 0px 8px rgb(225,225,225)",
    boxShadow: "0px 0px 8px rgb(225,225,225)",
    transition: { repeatType: "mirror", repeat: Infinity, duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
