import React, { useState, useEffect, useRef } from "react";
import { Box, Fade, Button, useTheme, useMediaQuery } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ThreeDE from "../Components/ThreeDE";
import NavBar from "../Components/NavBar";
import HeroPageSection1 from "../Components/LandingPage/HeroPageSection1";
import HeroPageSection2 from "../Components/LandingPage/HeroPageSection2";
import HeroPageSection3 from "../Components/LandingPage/HeroPageSection3/HeroPageSection3";
import HeroPageSection4 from "../Components/LandingPage/HeroPageSection4";
import HeroPageSection5 from "../Components/LandingPage/HeroPageSection5";
import Footer from "../Components/Footer";
import HeroPageSection6 from "../Components/LandingPage/HeroPageSection6";
import HeroPageSection7 from "../Components/LandingPage/HeroPageSection7";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const HeroPage = () => {
  const [showThreeDE, setShowThreeDE] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hero1Complete, setHero1Complete] = useState(false);
  const [hero2Complete, setHero2Complete] = useState(false);
  const [hero4Complete, setHero4Complete] = useState(false);
  const threeDERef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSpecificSize = useMediaQuery(
    "(max-width: 1024px) and (max-height: 725px)"
  );
  const isDesktopSize = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1200px)"
  );
  const isDesktop = !isMobile && !isTablet;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hero1Complete || showThreeDE) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 100);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hero1Complete, showThreeDE]);

  useEffect(() => {
    const rotationDuration = 2;
    const timer = setTimeout(() => {
      setShowThreeDE(false);
    }, rotationDuration * 1000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     window.location.reload();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // // Ensure the page scrolls to the top on reload
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    if (!showThreeDE && isDesktop) {
      const timeline = gsap.timeline();

      if (isSpecificSize) {
        timeline.to(".threeDE", {
          x: "32%",
          y: "-4%",
          duration: 1,
          ease: "power2.out",
        });
      } else if(isDesktopSize){
        timeline.to(".threeDE", {
          x: "28%",
          y: "4%",
          duration: 1,
          ease: "power2.out",
        });
      } else {
        timeline.to(".threeDE", {
          x: "28%",
          y: "0%",
          duration: 1,
          ease: "power2.out",
        });
      }

      timeline.to(".gradient-background", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      // Modified animation to have both elements come from left
      timeline.add([
        gsap.fromTo(
          [".navbar", ".hero-content"],
          {
            opacity: 0,
            x: -100, // Both start from -100px (left side)
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              setAnimationComplete(true);
              setTimeout(() => {
                setHero1Complete(true);
              }, 500);
            },
          }
        ),
      ]);
    } else if (!showThreeDE && !isDesktop) {
      // For mobile and tablet, set states immediately without animations
      setAnimationComplete(true);
      setHero1Complete(true);

      // Set initial styles without animations
      const navbar = document.querySelector(".navbar");
      const heroContent = document.querySelector(".hero-content");
      const gradientBackground = document.querySelector(".gradient-background");

      if (navbar) {
        navbar.style.opacity = "1";
        navbar.style.transform = "translateX(0)";
      }

      if (heroContent) {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateX(0)";
      }

      if (gradientBackground) {
        gradientBackground.style.opacity = "1";
      }
    }
  }, [showThreeDE, isSpecificSize, isDesktop]);

  useEffect(() => {
    if (hero1Complete && isDesktop) {
      gsap.fromTo(
        ".hero-section-2",
        {
          x: "50%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-section-2",
            start: "top center",
            end: "top center",
            toggleActions: "play none none reverse",
            onEnter: () => setHero2Complete(true),
          },
        }
      );

      if (isSpecificSize) {
        gsap.to(threeDERef.current, {
          scrollTrigger: {
            trigger: ".hero-section-2",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          motionPath: {
            path: [
              { x: "33%", y: "2%" },
              { x: "12%", y: "50%" },
              { x: "-23vw", y: "90vh" },
            ],
            curviness: 1.5,
          },
          duration: 1.5,
          ease: "power2.out",
        });
      } else if (isDesktopSize) {
         gsap.to(threeDERef.current, {
           scrollTrigger: {
             trigger: ".hero-section-2",
             start: "top center",
             end: "bottom center",
             scrub: true,
           },
           motionPath: {
             path: [
               { x: "28%", y: "2%" },
               { x: "15%", y: "50%" },
               { x: "-23vw", y: "95vh" },
             ],
             curviness: 1.5,
           },
           duration: 1.5,
           ease: "power2.out",
         });
      } else {
        gsap.to(threeDERef.current, {
          scrollTrigger: {
            trigger: ".hero-section-2",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          motionPath: {
            path: [
              { x: "28%", y: "2%" },
              { x: "12%", y: "50%" },
              { x: "-23vw", y: "89vh" },
            ],
            curviness: 1.5,
          },
          duration: 1.5,
          ease: "power2.out",
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    } else if (hero1Complete && !isDesktop) {
      // Set hero2Complete immediately for mobile/tablet
      setHero2Complete(true);

      // Set initial styles for hero-section-2
      const heroSection2 = document.querySelector(".hero-section-2");
      if (heroSection2) {
        heroSection2.style.opacity = "1";
        heroSection2.style.transform = "translateX(0)";
      }
    }
  }, [hero1Complete, isDesktop, isSpecificSize]);

  useEffect(() => {
    if (hero2Complete && isDesktop) {
      gsap.fromTo(
        ".hero-page-section-4",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-page-section-4",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            onEnter: () => {
              setHero4Complete(true);
            },
            preventOverlaps: true,
            fastScrollEnd: true,
          },
        }
      );
    } else if (hero2Complete && !isDesktop) {
      // Set hero4Complete immediately for mobile/tablet
      setHero4Complete(true);

      // Set initial styles for hero-page-section-4
      const heroSection4 = document.querySelector(".hero-page-section-4");
      if (heroSection4) {
        heroSection4.style.opacity = "1";
        heroSection4.style.transform = "translateY(0)";
      }
    }
  }, [hero2Complete, isDesktop]);

  const handleScrollToTop = () => {
    const section4 = document.querySelector(".hero-page-section-4");
    const section4Bounds = section4?.getBoundingClientRect();

    if (
      !section4Bounds ||
      section4Bounds.top < 0 ||
      section4Bounds.bottom > window.innerHeight
    ) {
      gsap.to(window, {
        duration: 1,
        scrollTo: 0,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
        background: "#000000",
      }}
    >
      <Fade in={showButton}>
        <Button
          onClick={handleScrollToTop}
          variant="contained"
          color="primary"
          sx={{
            position: "fixed",
            bottom: 50,
            height: 60,
            right: 50,
            zIndex: 1000,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
            },
            "@media (max-width: 768px)": {
              position: "fixed",
              bottom: 50,
              right: 50,
            },
            "@media (max-width: 480px)": {
              position: "fixed",
              bottom: 50,
              right: 50,
            },
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Fade>
      <Box
        className="threeDE"
        ref={threeDERef}
        sx={{
          width: "100vw",
          height: "100vh",
          display: isMobile || isTablet ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <ThreeDE />
        </Box>
      </Box>
      <Box
        className="gradient-background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: "5%",
          background: `radial-gradient(ellipse at top, rgba(154, 106, 255, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 1,
          opacity: isMobile || isTablet ? 1 : 0,
        }}
      />
      <Box
        className="navbar"
        sx={{
          position: "relative",
          zIndex: 10,
          opacity: isMobile || isTablet ? 1 : 0,
          transform:
            isMobile || isTablet ? "translateX(0)" : "translateX(-100px)",
        }}
      >
        <NavBar />
      </Box>
      <Box
        className="hero-content"
        sx={{
          display: "flex",
          position: "relative",
          zIndex: 3,
          marginTop: "-6rem",
          opacity: isMobile || isTablet ? 1 : 0,
          transform:
            isMobile || isTablet ? "translateX(0)" : "translateX(-100px)",
        }}
      >
        <HeroPageSection1 animationComplete={animationComplete} />
      </Box>
      <Box
        className="hero-section-2"
        sx={{
          position: "relative",
          zIndex: 3,
          ...(isMobile || isTablet
            ? {
                opacity: 1,
                transform: "none",
              }
            : {
                opacity: 0,
                transform: "translateX(50%)",
              }),
        }}
      >
        <HeroPageSection2 onAnimationComplete={() => setHero2Complete(true)} />
      </Box>
      <Box className="hero-page-section-3" sx={{ opacity: 1 }}>
        <HeroPageSection3 />
      </Box>
      <Box
        className="hero-page-section-4"
        sx={{
          opacity: isMobile || isTablet ? 1 : 0,
          transform: isMobile || isTablet ? "translateY(0)" : "translateY(0)",
        }}
      >
        <HeroPageSection4 />
      </Box>
      <Box>
        <HeroPageSection5 />
      </Box>
      <Box>
        <HeroPageSection6 />
      </Box>
      <Box>
        <HeroPageSection7 />
      </Box>
      <Footer />
    </Box>
  );
};

export default HeroPage;
