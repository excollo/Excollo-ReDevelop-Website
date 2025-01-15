import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/excollo3d.png";

const HeroPageSection7 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

  const calculateTranslation = () => {
    if (windowSize.width <= 425) {
      return 0; // No translation for mobile
    }
    return Math.min(Math.max(2100 - scrollY * 0.5, 0), 1300);
  };

  const translateYImage = calculateTranslation();
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
        marginTop={-5}
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
            height: "350px",
          },
          "@media (max-width: 425px)": {
            width: "100%",
            margin: "0 auto",
            height: "250px",
            position: "relative",
            overflow: "visible",
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
            width: windowSize.width <= 425 ? "90%" : "80%",
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition: "transform 0.2s ease-out",
            position: windowSize.width <= 425 ? "absolute" : "relative",
            top: windowSize.width <= 425 ? "50%" : "auto",
            left: windowSize.width <= 425 ? "50%" : "auto",
            transform:
              windowSize.width <= 425
                ? `translate(-50%, -50%) rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`
                : `translateY(${translateYImage}px) rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
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
          display: windowSize.width <= 768 ? "none" : "block",
        }}
      />

      <Divider
        sx={{
          backgroundColor: "#000000",
          height: "2px",
          width: "100%",
          position: "relative",
          display: windowSize.width <= 768 ? "none" : "block",
        }}
      />
    </Box>
  );
};

export default HeroPageSection7;
