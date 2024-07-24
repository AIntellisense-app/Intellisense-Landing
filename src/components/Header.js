import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  padding: "0.4rem",  // Equivalent to 10px 20px
  borderRadius: "0.5rem",       // Equivalent to 8px
  "&.active": {
    backgroundColor: "#14da8f",
    color: "#fff",
    transform: "scale(1.1)",
  },
  "&.inactive": {
    color: "#000",
    "&:hover": {
      backgroundColor: "#14da8f",
      color: "#fff",
      transform: "scale(1.05)",
    },
  },
}));

const Header = ({ refs }) => {
  const [active, setActive] = useState('home');

  const handleClick = (section) => {
    setActive(section);
    refs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header variants={headerVariants}>
      <motion.div className="logo_wrapper" variants={iconVariants}>
        dev<span>amit</span>
      </motion.div>
      <motion.div className="menu_container" variants={headerVariants}>
        <StyledButton
          className={active === "home" ? "active" : "inactive"}
          onClick={() => handleClick("home")}
        >
          Home
        </StyledButton>
        <StyledButton
          className={active === "about" ? "active" : "inactive"}
          onClick={() => handleClick("about")}
        >
          About
        </StyledButton>
        <StyledButton
          className={active === "features" ? "active" : "inactive"}
          onClick={() => handleClick("features")}
        >
          Features
        </StyledButton>
        <StyledButton
          className={active === "services" ? "active" : "inactive"}
          onClick={() => handleClick("services")}
        >
          Services
        </StyledButton>
        <StyledButton
          className={active === "contact" ? "active" : "inactive"}
          onClick={() => handleClick("contact")}
        >
          Contact
        </StyledButton>
      </motion.div>
    </motion.header>
  );
};

export default Header;
