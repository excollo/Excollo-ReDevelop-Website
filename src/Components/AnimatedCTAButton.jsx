import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCTAButton = ({ onClick }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const container = containerRef.current;

    // Initial styles
    gsap.set(circle, {
      scale: 0,
      opacity: 0,
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      border: "2px solid #7e22ce",
      background:
        "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
    });
    gsap.set(text, { opacity: 0 });
    gsap.set(button, { width: "80px" });

    // Main animation timeline
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
        width: "200px",
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

    // Cleanup
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box ref={containerRef} sx={{ padding: "20px 60px" }}>
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
          height: "50px",
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
            left: 0,
            height: "100%",
            width: "50px",
            zIndex: 1,
          }}
        />
        <Typography
          ref={textRef}
          sx={{
            color: "#ffffff",
            fontSize: { xs: "14px", md: "18px", lg: "22px" },
            fontWeight: 500,
            zIndex: 2,
            whiteSpace: "nowrap",
            position: "relative",
            marginTop: "2rem"
          }}
        >
          Talk to Us
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimatedCTAButton;
