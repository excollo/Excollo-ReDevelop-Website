import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({
  title,
  description,
  showDescription,
  isFinalState,
  isMainCard,
  isMobile,
  isTablet,
  md,
  lg,
  xl
}) => {
  const cardStyles = {
    background: "linear-gradient(180deg, #05000A 0%, #1B1125 100%)",
    borderRadius: "12px",
    textAlign: "center",
    padding: "1rem",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 100px 0px",
    border: isFinalState ? "1px solid #7e22ce" : "1px solid #7e22ce",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#000000",
      transform: "translateY(-5px)",
      boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 100px 0px",
    },
  };

  const titleStyles = {
    background: isMobile
      ? "linear-gradient(90deg, #2579e3, #8e54f7)"
      : "linear-gradient(90deg, #2579e3, #8e54f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    marginBottom: isMobile ? "0.5rem" : "1rem",
    marginTop: isFinalState ? "0" : "2rem",
    transition: "margin-top 0.5s ease",
    fontSize: isMainCard
      ? isMobile
        ? "1.5rem"
        : isTablet
        ? "2rem"
        : {md: "3.5rem", lg: "4rem", xl: "5rem"}
      : isMobile
      ? "1.5rem"
      : {
          md: `clamp(0.25rem,calc(1rem + 0.5vw),2.2rem)`,
          lg: `clamp(0.25rem,calc(1rem + 0.8vw),2.2rem)`,
          xl: `clamp(0.25rem,calc(1rem + 1vw),3rem)`,
        },
    fontWeight: isMainCard ? 400 : 400,
  };

  return (
    <Paper elevation={6} sx={cardStyles}>
      <Typography gutterBottom className="feature-title" sx={titleStyles}>
        {title}
      </Typography>
      {((!isMobile && !isTablet) ||
        (isMobile && description) ||
        (isTablet && description)) && (
        <Typography
          fontWeight={100}
          color="white"
          className="feature-description"
          sx={{
            fontSize: {
              xs: "1.2rem",
              sm: isTablet ? "1.4rem" : "1.3rem",
              md: `clamp(0.5rem, calc(0.6rem + 0.4vw), 1.5rem)`,
              lg: `clamp(0.5rem, calc(0.6rem + 0.6vw), 1.8rem)`,
              xl: `clamp(0.25rem, calc(0.5rem + 0.8vw), 3rem)`,
            },
            lineHeight: "1.5",
            fontFamily: '"Inter", sans-serif',
            maxWidth: "80%",
            opacity: isMobile || isTablet ? 1 : showDescription ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          {description}
        </Typography>
      )}
    </Paper>
  );
};

const HeroPageSection4 = ({ onComplete }) => {
  const [isCardShrunk, setIsCardShrunk] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [key, setKey] = useState(0);
  const sectionRef = useRef(null);
  const previousWidthRef = useRef(window.innerWidth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
const lg = useMediaQuery(theme.breakpoints.up("lg"));
const xl = useMediaQuery(theme.breakpoints.up("xl"));

  const cards = [
    {
      title: "Outcome as a Service",
      description: "We deliver tangible results not just digital products.",
    },
    {
      title: "Iterative Excellence",
      description:
        "Our solutions evolve with your business, ensuring long-term success.",
    },
    {
      title: "Future-Forward Strategies",
      description:
        "Cutting-edge AI and automation drive scalable, innovative solutions.",
    },
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const previousWidth = previousWidthRef.current;

      const crossingThreshold =
        (previousWidth < 950 && currentWidth >= 950) ||
        (previousWidth >= 950 && currentWidth < 950);

      if (currentWidth >= 800 && currentWidth <= 1400 && crossingThreshold) {
        setKey((prevKey) => prevKey + 1);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        setTimeout(() => {
          if (sectionRef.current) {
            initializeGSAPAnimations();
          }
        }, 100);
      }

      previousWidthRef.current = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initializeGSAPAnimations = () => {
    if (isMobile || isTablet) return;

    gsap.set(".side-cards-container", {
      opacity: 0,
      display: "block",
      x: (index) => (index === 0 ? -100 : 100),
    });

    ScrollTrigger.create({
      trigger: ".hero-page-section-4",
      start: "top top",
      end: "top 20%",
      scrub: 0.5,
      pin: ".title-section",
      pinSpacing: false,
    });

    const mainCardTrigger = ScrollTrigger.create({
      trigger: ".hero-page-section-4",
      start: "top 10%",
      end: "top 10%",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      snap: {
        snapTo: (value) => Math.round(value * 10) / 10,
        duration: { min: 0.2, max: 0.5 },
        ease: "power1.inOut",
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = Math.pow(progress, 1.5);

        // Card shrinking animation
        gsap.to(".main-card", {
          width: `${80 - scale * 60}%`,
          duration: 0.3,
          ease: "power2.out",
        });

        // Side cards animation
        gsap.to(".side-cards-container", {
          opacity: scale,
          x: 0,
          duration: 1,
          ease: "power2.out",
        });

        // Cards container animation
        gsap.to(".cards-container", {
          gap: `${2 + scale * 8}rem`,
          duration: 0.3,
          ease: "power2.out",
          marginLeft: `-${scale * 1}%`,
          marginRight: `${scale * 1.5}%`,
        });

        const dynamicInitialFontSize = () => {
          const viewportWidth = window.innerWidth;
          if (viewportWidth < 900) {
            return "3rem"; // Smaller font size for mobile
          } else if (viewportWidth < 1200) {
            return "3.5rem"; // Medium font size for tablets
          } else if(viewportWidth < 1536) {
            return "4rem"; // Larger font size for desktops
          } else if(viewportWidth < 2000) {
            return "5rem";
          } else if(viewportWidth < 2600) {
            return "5rem";
          }
        };

        const initialFontSize = dynamicInitialFontSize(); // Get dynamic initial font size

        const finalFontSize = {
          md: `clamp(0.25rem,calc(1rem + 0.5vw),2.2rem)`,
          lg: `clamp(0.25rem,calc(1rem + 0.8vw),2.2rem)`,
          xl: `clamp(0.25rem,calc(1rem + 1vw),3rem)`,
        };

        // Get the current breakpoint (md, lg, xl)
        const breakpoint =
          window.innerWidth < 900
            ? "md"
            : window.innerWidth < 1200
            ? "lg"
            : "xl";

        // Apply the final font size based on the breakpoint
        gsap.to(".main-card .feature-title", {
          fontSize: scale > 0.1 ? finalFontSize[breakpoint] : initialFontSize,
          duration: 1,
          ease: "power2.out",
        });

        // Description opacity animation
        gsap.to(".main-card .feature-description", {
          opacity: scale > 0.9 ? 1 : 0,
          duration: 0.5,
          ease: "power2.out",
        });

        // Update state for card shrinking
        setIsCardShrunk(scale > 0.1);
      },
      onLeave: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    return () => {
      mainCardTrigger.kill();
    };
  };

  useEffect(() => {
    let cleanup;
    if (sectionRef.current) {
      cleanup = initializeGSAPAnimations();
    }
    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onComplete, isMobile, isTablet, key]);

  if (isMobile || isTablet) {
    return (
      <Box
        key={key}
        sx={{
          minHeight: {
            xs: "30vh",
            sm: isTablet ? "50vh" : "50vh",
            md: "70vh",
          },
          color: "#fff",
          padding: "2rem 1rem",
          fontFamily: '"Inter", sans-serif',
          position: "relative",
          marginTop: {
            xs: "0",
            md: "0",
          },
          pt: {
            xs: "200px",
            sm: "60px",
            md: "0",
          },
          maxWidth: {
            xs: "100%",
            sm: "90%",
            md: "85%",
          },
          mx: "auto",
          "@media (min-width: 321px) and (max-width: 354px)": {
            pt: "400px",
          },
          "@media (min-width: 355px) and (max-width: 374px)": {
            pt: "300px",
          },
          "@media (min-width: 375px) and (max-width: 392px)": {
            pt: "280px",
          },
          "@media (min-width: 393px) and (max-width: 395)": {
            pt: "200px",
          },
          "@media (min-width: 396px) and (max-width: 599px)": {
            pt: "180px",
          },
          "@media (min-width: 600px) and (max-width: 768px)": {
            mt: 22,
            mb: -4,
          },
          "@media (min-width: 769px) and (max-width: 899px)": {
            mt: 22,
            mb: -4,
          },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          textAlign="center"
                sx={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            marginBottom: "2rem",
                }}
        >
          Why Choose{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Excollo?
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              style={{ width: "90%", marginLeft: -30, position: "absolute" }}
            >
              <FeatureCard
                title={cards[currentIndex].title}
                description={cards[currentIndex].description}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </motion.div>
          </AnimatePresence>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "30%",
              mt: isMobile ? 25 : 32,
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                border: "1px solid rgb(206, 84, 247)",
                height: "40px",
                width: "40px",
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{ ml: 0.5, p: 1, color: "white" }}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                borderRadius: "50%",
                border: "1px solid rgb(206, 84, 247)",
                height: "40px",
                width: "40px",
              }}
            >
              <IconButton
                onClick={handleNext}
                sx={{ ml: 0.2, p: 1, color: "white" }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      key={key}
      ref={sectionRef}
      className="hero-page-section-4"
      sx={{
        height: "100vh",
        color: "#fff",
        position: "relative",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Box
        className="title-section"
        sx={{
          position: "relative",
          top: "2%",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography
                                sx={{
                                  color: "#fff",
                                  fontWeight: 600,
                                  lineHeight: 1.167,
                                  letterSpacing: "-0.01562em",
                                  fontSize: {
                                    md: `clamp(1.75rem, calc(1.25rem + 2vw), 9rem)`,
                                    lg: `clamp(1.75rem, calc(1.37rem + 2.5vw), 8rem)`,
                                    xl: `clamp(2.25rem, calc(2rem + 2.5vw), 10rem)`,
                                  },
                                  position: "relative",
                                  top: "20px",
                                  background: "black",
                                  textAlign: "center"
                                }}
                        >
          Why Choose{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Excollo?
          </Box>
        </Typography>
      </Box>

      <Box
        className="cards-container"
        sx={{
          position: "relative",
          height: "calc(100vh - 0%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "0 2rem",
          transition: "gap 0.3s ease",
        }}
      >
        <Box
          className="side-cards-container"
          sx={{
            width: "20%",
            height: "40%",
            opacity: 0,
          }}
        >
          <FeatureCard
            title="Iterative Excellence"
            description="Our solutions evolve with your business, ensuring long-term success."
            showDescription={isCardShrunk}
            isFinalState={isCardShrunk}
          />
        </Box>

        <Box
          className="main-card"
          sx={{
            width: "80%",
            height: "40%",
            transition: "width 0.4s ease",
          }}
        >
          <FeatureCard
            title="Outcome as a Service"
            description="We deliver tangible results not just digital products."
            showDescription={isCardShrunk}
            isFinalState={isCardShrunk}
            isMainCard={true}
          />
        </Box>

        <Box
          className="side-cards-container"
          sx={{
            width: "20%",
            height: "40%",
            opacity: 0,
          }}
        >
          <FeatureCard
            title="Future-Forward Strategies"
            description="Cutting-edge AI and automation drive scalable, innovative solutions."
            showDescription={isCardShrunk}
            isFinalState={isCardShrunk}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPageSection4;
