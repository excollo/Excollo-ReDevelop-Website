import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCTAButton = ({ onClick }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const circle = circleRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const container = containerRef.current;

    // Initial styles with responsive widths
    gsap.set(circle, {
      scale: 0,
      opacity: 0,
      width: isMobile ? "30px" : "80px",
      height: isMobile ? "30px" : "80px",
      borderRadius: "50%",
      border: "2px solid #7e22ce",
      background:
        "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
    });
    gsap.set(text, { opacity: 0 });
    gsap.set(button, { width: isMobile ? "80px" : "80px" });

    // Main animation timeline with responsive final widths
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play reverse play reverse",
        scrub: 0.3,
      },
    });

    tl.to(circle, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(button, {
        width: isMobile ? "120px" : "200px",
        marginLeft: isMobile ? "-35px" : "0",
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(
        circle,
        {
          width: "100%",
          borderRadius: "50px",
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        text,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2"
      );

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(circle, {
        duration: 0.3,
        scale: 1.1,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(circle, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "none",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <Box
      ref={containerRef}
      sx={{
        padding: {
          xs: "20px 20px", // Reduced padding for mobile
          sm: "20px 60px", // Original padding for larger screens
        },
      }}
    >
      <Box
        ref={buttonRef}
        component={Link}
        to="/contact"
        onClick={onClick}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: isMobile ? "40px" : "50px", // Reduced height for mobile
          textDecoration: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
      >
        <Box
          ref={circleRef}
          sx={{
            position: "absolute",
            top: 0,
            left: { xs: "25%", sm: 0 }, // Adjusted left position for mobile
            height: "100%",
            width: "50px",
            zIndex: 1,
          }}
        />
        <Typography
          ref={textRef}
          sx={{
            color: "#ffffff",
            fontSize: { xs: "14px", md: "19px", lg: "22px" },
            fontWeight: 500,
            zIndex: 2,
            whiteSpace: "nowrap",
            position: "relative",
            marginTop: { xs: "-5px", sm: "2rem" }, // Adjusted margin for mobile
            marginLeft: {xs: "60px", sm: "0"}, // Adjusted margin for mobile
          }}
        >
          Talk to Us
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimatedCTAButton;
