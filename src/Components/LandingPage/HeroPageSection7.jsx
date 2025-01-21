import { Box, Divider, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/excollo3d.png";
import { m } from "framer-motion";
const HeroPageSection7 = () => {
  
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const isSpecified = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768);
      setIsLandscape(window.innerHeight < window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
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
    if (isMobile || isTablet || isLandscape) return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((clientY - rect.top) / rect.height - 0.5) * -30;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    if (isMobile || isTablet || isLandscape) return;
    setRotation({ x: 0, y: 0 });
  };

  const translateYImage = isSpecified
    ? Math.max(2200 - scrollY * 0.5, 0)
    : Math.max(2400 - scrollY * 0.5, 0);

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
        className="w-full overflow-hidden"
        sx={{
          height: isLandscape && isMobile ? "100vh" : "400px",
          "@media (max-width: 1200px)": {
            marginTop: "-5%",
          },
          "@media (max-width: 768px)": {
            margin: "-15% auto",
          },
          "@media (max-width: 480px)": {
            height: isLandscape ? "100vh" : "400px",
            margin: isLandscape ? "0" : "-25% 0 -25% 0",
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
