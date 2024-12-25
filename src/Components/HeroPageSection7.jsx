import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/excollo3d.png";

const HeroPageSection7 = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   const translateY = Math.min(3300 - scrollY * 0.5, 0);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={2}
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
            transform: `translateY(${translateY}px)`, // Initial position lower and move up as user scrolls
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
          backgroundColor: "#000000", // Transparent background
          height: "2px", // Divider height
          width: "100%", // Full width of parent Box
          position: "relative",
          transform: `translateY(${translateY}px)`, // Move with the image
          willChange: "transform",
          transition: "transform 0.1s ease-out",
        }}
      />
    </Box>
  );
};

export default HeroPageSection7;