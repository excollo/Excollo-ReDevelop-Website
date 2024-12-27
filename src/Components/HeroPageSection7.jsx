import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/excollo3d.png";

const HeroPageSection7 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adjust the translation formula if needed
  const translateY = Math.max(500 - scrollY * 0.5, 0); // Stops at final position

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={0}
        sx={{
          height: "400px",
          overflow: "hidden",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: "300px",
            width: "auto",
            transform: `translateY(${translateY}px)`, // Scroll effect
            willChange: "transform",
            transition: "transform 0.1s ease-out",
            position: "relative",
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        position="relative"
        zIndex={0}
        sx={{
          left: 0,
          right: 0,
          width: "100%",
          height: "100px",
          background: `radial-gradient(ellipse at bottom, rgba(196, 188, 213, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          transform: `translateY(${translateY}px)`,
          willChange: "transform",
          transition: "transform 0.1s ease-out",
        }}
      />

      <Divider
        sx={{
          backgroundColor: "#000000", // Divider color
          height: "2px", // Divider height
          width: "100%", // Full width
          position: "relative",
          transform: `translateY(${translateY}px)`, // Move with logo
          willChange: "transform",
          transition: "transform 0.1s ease-out",
        }}
      />
    </Box>
  );
};

export default HeroPageSection7;
