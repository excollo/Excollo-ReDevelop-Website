import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection2 = ({ onAnimationComplete }) => {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    const gradient = gradientRef.current;
    const content = contentRef.current;

    // Check if device is mobile/tablet using matchMedia
    const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

    if (isMobileDevice) {
      gsap.set(gradient, { opacity: 1, scale: 1 });
      gsap.set(content, { opacity: 1, x: 0 });
      onAnimationComplete?.();
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onComplete: () => {
          setTimeout(() => {
            onAnimationComplete?.();
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

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/services");
    window.scrollTo(0, 0);
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        color: "#fff",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        margin: "-4% auto 0",
        ml: "2%",
        padding: "4rem",
        fontFamily: '"Inter", sans-serif',
        // position: "relative",
        zIndex: 2,
        overflow: "hidden",

        "@media (max-width: 1024px)": {
          minHeight: "60vh",
          padding: "3rem",
          width: "90%",
        },

        "@media (max-width: 768px)": {
          minHeight: "50vh",
          padding: "1rem",
          width: "90%",
        },

        "@media (max-width: 480px)": {
          minHeight: "40vh",
          // padding: "1rem",
          width: "90%",
        },

        "@media screen and (orientation: landscape) and (max-height: 600px)": {
          minHeight: "auto",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        },

        "@media screen and (orientation: portrait)": {
          minHeight: "60vh",
        },
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
          zIndex: 1,
          pointerEvents: "none",
          transformOrigin: "center center",

          "@media (max-width: 768px)": {
            top: "-10%",
            opacity: 1,
            transform: "scale(1)",
          },

          "@media screen and (orientation: landscape) and (max-height: 600px)":
            {
              top: "0%",
            },
        }}
      />

      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",

          "@media (max-width: 768px)": {
            opacity: 1,
            transform: "translateX(0)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
            position: "relative",
            zIndex: 2,
            marginLeft: "60%",
            marginTop: "15%",
            width: "auto",

            "@media (max-width: 1024px)": {
              marginLeft: "40%",
              marginTop: "15%",
            },

            "@media (max-width: 768px)": {
              marginLeft: 0,
              marginTop: "7%",
              width: "100%",
            },

            "@media (max-width: 480px)": {
              marginTop: "5%",
            },

            "@media screen and (orientation: landscape) and (max-height: 600px)":
              {
                marginTop: "5%",
                marginLeft: "30%",
              },

            "@media screen and (orientation: portrait)": {
              marginLeft: 0,
              marginTop: "8%",
            },
          }}
        >
          <Box
            sx={{
              width: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",

              "@media (max-width: 768px)": {
                width: "100%",
                alignItems: "center",
                textAlign: "center",
                marginTop: "2rem",
              },

              "@media screen and (orientation: landscape) and (max-height: 600px)":
                {
                  marginTop: 0,
                },
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 200,
                fontSize: "1.7rem",
                lineHeight: 1.5,
                marginLeft: "0.5%",
                marginBottom: "2rem",
                maxWidth: "100%",

                "@media (max-width: 1024px)": {
                  fontSize: "1.5rem",
                },

                "@media (max-width: 768px)": {
                  fontSize: "1.4rem",
                  margin: "0 auto 2rem auto",
                  maxWidth: "90%",
                },

                "@media (max-width: 480px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              Excollo delivers outcomes, leveraging AI to make businesses
              future-ready, boosting productivity and efficiency at every step.
            </Typography>

            <Typography
              component={Link}
              to="/services"
              onClick={handleClick}
              sx={{
                display: "inline-block",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "18px",
                border: "1px solid transparent",
                padding: "20px 60px",
                borderRadius: "40px",
                background:
                  "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
                zIndex: 3,
                position: "relative",
                transition: "all 0.3s ease",
                textAlign: "center",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                  color: "#ffffff",
                  transform: "scale(1.05)",
                },

                "@media (max-width: 768px)": {
                  fontSize: "17px",
                  padding: "16px 32px",
                },

                "@media (max-width: 480px)": {
                  fontSize: "16px",
                  padding: "15px 30px",
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
