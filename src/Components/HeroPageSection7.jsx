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

  // Calculate the image translation
  const translateYImage = Math.max(3540 - scrollY * 0.5, 0); // Stops when scrollY > 1000
  const gradientOpacity =
    scrollY > 100 ? Math.min((scrollY - 800) / 300, 1) : 1; // Starts fading in after image settles

  return (
    <Box>
      {/* Image Scrolling Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={2}
        marginTop={-7}
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
            transform: `translateY(${Math.min(translateYImage, 1300)}px)`, // Ensure it doesn't go out of view
            willChange: "transform",
            transition: "transform 0.2s ease-out",
          }}
        />
      </Box>

      {/* Gradient Animation Section */}
      <Box
        position="relative"
        zIndex={0}
        sx={{
          left: 0,
          right: 0,
          width: "100%",
          height: "0px",
          background: `radial-gradient(ellipse at bottom, rgba(196, 188, 213, ${gradientOpacity}) 0%, rgba(0, 0, 0, 0) 60%)`,
          transition: "background 0.3s ease-in-out", // Smooth transition for gradient
        }}
      />

      {/* Divider (Optional) */}
      <Divider
        sx={{
          backgroundColor: "#000000",
          height: "2px",
          width: "100%",
          position: "relative",
        }}
      />
    </Box>
  );
};

export default HeroPageSection7;
