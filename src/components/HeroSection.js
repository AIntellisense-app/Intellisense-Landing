// components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import { IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const HeroSection = () => (
  <motion.div
    className="content_wrapper"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
  >
    <div className="left_content_wrapper">
      <motion.h2>
        <motion.span initial="initial" animate="animate" className="first">
          <motion.span>Design</motion.span>
          <motion.span>focus</motion.span>
          <motion.span>ed</motion.span>
        </motion.span>
        <motion.span initial="initial" animate="animate" className="last">
          <motion.span>Start</motion.span>
          <motion.span>up</motion.span>
          <motion.span>for</motion.span>
          <motion.span>startups.</motion.span>
        </motion.span>
      </motion.h2>
      <motion.p variants={fadeInUp}>
        When, while lovely valley teems with vapor around meand <br />
        meridian sun strikes the upper impenetrable.
      </motion.p>
      <motion.div className="btn_group" variants={btnGroup}>
        <motion.div
          className="btn btn_primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
          <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
            <IoChevronForwardCircle />
          </IconContext.Provider>
        </motion.div>
        <motion.div
          className="btn btn_secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Live Chat
        </motion.div>
      </motion.div>
      <motion.div className="review_container" variants={fadeInUp}>
        <motion.p className="total_review" variants={star}>
          64+ Reviews
        </motion.p>
        <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              variants={star}
              whileHover={{
                scale: 1.2,
                rotate: 180,
                borderRadius: "100%",
                cursor: "pointer",
              }}
            >
              <IoStar />
            </motion.span>
          ))}
        </IconContext.Provider>
        <motion.p className="more_review" variants={star}>
          More than 50+ people taking services.
        </motion.p>
      </motion.div>
    </div>
    <motion.div className="right_content_wrapper">
      <motion.img
        src={process.env.PUBLIC_URL + "/images/bg.png"}
        alt="bg"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </motion.div>
  </motion.div>
);

export default HeroSection;
