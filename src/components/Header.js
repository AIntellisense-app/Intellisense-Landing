import React from "react";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const headerVariants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const iconVariants = {
  initial: { y: -60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const Header = () => (
  <motion.header variants={headerVariants}>
    <motion.div className="logo_wrapper" variants={iconVariants}>
      dev<span>amit</span>
    </motion.div>
    <motion.div className="menu_container" variants={headerVariants}>
      <motion.span variants={iconVariants}>
        <IconContext.Provider
          value={{ color: "#000", size: "18px", className: "icons_container" }}
        >
          <div className="icon">
            <FaBehance />
          </div>
          <div className="icon">
            <FaDribbble />
          </div>
        </IconContext.Provider>
      </motion.span>
      <motion.span variants={iconVariants}>
        <IconContext.Provider value={{ color: "#000", size: "18px" }}>
          <div className="icon">
            <IoMailOutline />
          </div>
          hello@example.co
        </IconContext.Provider>
      </motion.span>
      <motion.span className="menu" variants={iconVariants}>
        <span></span>
        <span></span>
        <span></span>
      </motion.span>
    </motion.div>
  </motion.header>
);

export default Header;
