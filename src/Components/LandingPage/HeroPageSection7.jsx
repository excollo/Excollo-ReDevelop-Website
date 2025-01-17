import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/excollo3d.png";
import { m } from "framer-motion";
const HeroPageSection7 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (!isMobile && !isTablet) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile, isTablet]);
  const handleMouseMove = (e) => {
    if (isMobile || isTablet) return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((clientY - rect.top) / rect.height - 0.5) * -30;
    setRotation({ x, y });
  };
  const handleMouseLeave = () => {
    if (isMobile || isTablet) return;
    setRotation({ x: 0, y: 0 });
  };
  const translateYImage = Math.max(2470 - scrollY * 0.5, 0);
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
        sx={{
          height: "400px",
          width: "100%",
          overflow: "hidden",
          "@media (max-width: 1200px)": {
            width: "100%",
            marginTop: "-5%",
          },
          "@media (max-width: 768px)": {
            width: "100%",
            margin: "-15% auto",
          },
          "@media (max-width: 480px)": {
            width: "100%",
            height: "400px",
            margin: " -25% 0 -25%  0",
          },
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            height: "auto",
            width: "80%",
            transform:
              isMobile || isTablet
                ? "none"
                : `translateY(${Math.min(translateYImage, 1300)}px) rotateX(${
                    rotation.y
                  }deg) rotateY(${rotation.x}deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition: "transform 0.2s ease-out",
            "@media (max-width: 1200px)": {
              width: "80%",
            },
            "@media (max-width: 768px)": {
              width: "80%",
            },
            "@media (max-width: 480px)": {
              width: "80%",
            },
          }}
        />
      </Box>
      {/* Gradient Animation Section */}
      {!isMobile && !isTablet && (
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
      )}
      <Divider
        sx={{
          backgroundColor: "#000000",
          height: "2px",
          width: "100%",
          position: "relative",
          display: isMobile || isTablet ? "none" : "block",
        }}
      />
    </Box>
  );
};
export default HeroPageSection7;
