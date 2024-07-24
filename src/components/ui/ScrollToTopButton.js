// components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowUpward } from "@mui/icons-material";

// Styled button with custom styles
const ScrollButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: "1.25rem", // 20px converted to rem
  right: "1.25rem", // 20px converted to rem
  backgroundColor: "#14da8f",
  color: "#fff",
  borderRadius: "50%",
  width: "3rem", // 3vw can be changed to a fixed rem value if needed
  height: "3rem", // 3vw can be changed to a fixed rem value if needed
  boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)", // 4px and 6px converted to rem
  display: "none",
  "&:hover": {
    backgroundColor: "#12c89c",
  },
  zIndex: 1000, // Ensure button appears above other content
}));

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Toggle button visibility based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollButton
      style={{ display: showButton ? "block" : "none" }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUpward />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
