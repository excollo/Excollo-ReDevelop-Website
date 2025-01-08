import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import {Link} from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection2 = ({ onAnimationComplete }) => {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const gradient = gradientRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onComplete: () => {
          setTimeout(() => {
            onAnimationComplete();
          }, 100);
        },
      },
    });

    tl.fromTo(
      gradient,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      content,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        color: "#fff",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        padding: "4rem",
        fontFamily: '"Inter", sans-serif',
        position: "relative",
        zIndex: 2, // Set consistent z-index
        overflow: "hidden",
      }}
    >
      <Box
        ref={gradientRef}
        sx={{
          position: "absolute",
          top: "8%",
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`,
          zIndex: 1, // Set consistent z-index
          pointerEvents: "none",
          transformOrigin: "center center",
        }}
      />

      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          zIndex: 2, // Set consistent z-index
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "2rem",
            position: "relative",
            zIndex: 2, // Set consistent z-index
            marginLeft: "60%",
            marginTop: "20%",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 200,
                fontSize: { xs: "1.3rem" },
                lineHeight: 1.2,
                marginLeft: "0.5%",
                mb: 6,
              }}
            >
              Excollo delivers outcomes, leveraging AI to make businesses
              future-ready, boosting productivity and efficiency at every step.
            </Typography>

            <Typography
              component={Link}
              to="/about"
              sx={{
                display: "inline-block", // Ensures the button behaves like a block
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "18px",
                border: "1px solid transparent",
                padding: "20px 60px",
                borderRadius: "40px",
                background:
                  "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
                zIndex: 3, // Ensure the button is above other elements
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%);",
                  color: "#ffffff",
                },
              }}
            >
              What we do
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPageSection2;
