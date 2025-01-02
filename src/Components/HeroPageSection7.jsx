import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/excollo3d.png";

const HeroPageSection7 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((clientY - rect.top) / rect.height - 0.5) * -30;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const translateYImage = Math.max(2200 - scrollY * 0.5, 0);
  const gradientOpacity =
    scrollY > 100 ? Math.min((scrollY - 800) / 300, 1) : 1;

  return (
    <Box>
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
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            height: "300px",
            width: "auto",
            transform: `translateY(${Math.min(
              translateYImage,
              1300
            )}px) rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
            transformStyle: "preserve-3d",
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
          transition: "background 0.3s ease-in-out", 
        }}
      />
      
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
