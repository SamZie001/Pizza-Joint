import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariant = {
  animation1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { repeatType: "mirror", repeat: Infinity, duration: 0.5 },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animation2: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animation1", "animation2");
  return (
    <>
      <motion.div
        variants={loaderVariant}
        animate={animation}
        className="loader"
      ></motion.div>
      <div onClick={() => cycleAnimation()}>cycle loader</div>
    </>
  );
};

export default Loader;
