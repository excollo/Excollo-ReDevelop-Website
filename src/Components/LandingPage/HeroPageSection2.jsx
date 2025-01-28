import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection2 = ({ onAnimationComplete }) => {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    // Skip animations for mobile and tablet devices
    if (isMobile || isTablet) {
      onAnimationComplete?.();
      return;
    }

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
  }, [onAnimationComplete, isMobile, isTablet]);

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
        minHeight: {
          xs: "30vh",
          sm: isTablet ? "50vh" : "50vh",
          md: "80vh",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: "90%",
          sm: isTablet ? "90%" : "90%",
          md: "85%",
        },
        margin: "0 auto",
        padding: {
          xs: "1rem",
          sm: isTablet ? "1.5rem" : "2rem",
          md: "4rem",
        },
        fontFamily: '"Inter", sans-serif',
        position: "relative",
        zIndex: 2,
        marginTop: {
          xs: "-60px",
          sm: "-60px",
          md: "0rem",
        },
      }}
    >
      <Box
        ref={gradientRef}
        sx={{
          position: "absolute",
          top: {
            xs: "-10%",
            sm: isTablet ? "-10%" : "8%",
            md: "8%",
          },
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`,
          zIndex: 1,
          pointerEvents: "none",
          transformOrigin: "center center",
          ...(isMobile || isTablet
            ? {
                opacity: 1,
                transform: "scale(1)",
              }
            : {}),
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
          ...(isMobile || isTablet
            ? {
                opacity: 1,
                transform: "translateX(0)",
              }
            : {}),
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: {
              xs: "1.5rem",
              sm: isTablet ? "1.75rem" : "2rem",
              md: "2rem",
            },
            position: "relative",
            zIndex: 2,
            marginLeft: {
              xs: 0,
              sm: isTablet ? 0 : "60%",
              md: "100%",
            },
            marginTop: {
              xs: "5%",
              sm: isTablet ? "7%" : "10%",
              md: "20%",
            },
            width: {
              xs: "100%",
              sm: isTablet ? "100%" : "auto",
              md: "100%",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: isTablet ? "100%" : "auto",
                md: "auto",
              },
              display: "flex",
              flexDirection: "column",
              mt: {
                xs: 5,
                sm: isTablet ? 8 : 0,
                md: 0,
                lg: -20,
              },
              alignItems: {
                xs: "center",
                sm: isTablet ? "center" : "flex-start",
                md: "flex-start",
              },
              textAlign: {
                xs: "center",
                sm: isTablet ? "center" : "left",
                md: "left",
              },
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 200,
                fontSize: {
                  xs: "1.2rem",
                  sm: isTablet ? "1.4rem" : "1.3rem",
                  md: `clamp(1rem, calc(0.8rem + 1vw), 2rem)`,
                  lg: `clamp(1rem, calc(0.8rem + 1.2vw), 4rem)`,
                  xl: `clamp(0.8rem, calc(0.8rem + 1.2vw), 5rem)`,
                },
                lineHeight: 1.5,
                marginLeft: {
                  xs: 0,
                  sm: isTablet ? 0 : "0.5%",
                  md: "0.5%",
                },
                mb: {
                  xs: 4,
                  sm: isTablet ? 5 : 6,
                  md: 6,
                },
                maxWidth: {
                  xs: "90%",
                  sm: isTablet ? "90%" : "100%",
                  md: "55%",
                },
                margin: {
                  xs: "0 auto 2rem auto",
                  sm: isTablet ? "0 auto 2rem auto" : "0 0 2rem 0.5%",
                  md: "0 0 2rem 0.5%",
                },
                marginBottom: {
                  xl: "3rem",
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
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: `clamp(1rem, calc(0.8rem + 1vw), 1.5rem)`,
                  xl: `clamp(0.5rem, calc(0.5rem + 1vw), 3.5rem)`,
                },
                border: "1px solid transparent",
                padding: {
                  xs: "15px 30px",
                  sm: "16px 32px",
                  md: "20px 40px",
                  xl: "20px 40px",
                },
                borderRadius: { md: "40px", xl: "80px" },
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
