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
}) => {
  const cardStyles =
    isMobile || isTablet
      ? {
          background: "linear-gradient(180deg, #05000A 0%, #1B1125 100%)",
          borderRadius: "12px",
          textAlign: "center",
          padding: "1rem",
          width: "100%",
          minHeight: isMobile ? "150px" : "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }
      : {
          background: "linear-gradient(180deg, #05000A 0%, #1B1125 100%)",
          borderRadius: "12px",
          textAlign: "center",
          padding: "1rem",
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 100px 0px",
          border: isFinalState ? "1px solid #7e22ce" : "1px solid #7e22ce",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#000000",
            transform: "translateY(-5px)",
            boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 100px 0px",
          },
        };

  const titleStyles =
    isMobile || isTablet
      ? {
          background: isMobile
            ? "linear-gradient(90deg, #2579e3, #8e54f7)"
            : "linear-gradient(180deg, #2579e3, #8e54f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: "0.5rem",
          fontSize: isMobile ? "1.5rem" : "2rem",
          fontWeight: 600,
        }
      : {
          background: "linear-gradient(90deg, #2579e3, #8e54f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: "1rem",
          marginTop: isFinalState ? "0" : "2rem",
          transition: "margin-top 0.5s ease",
          fontSize: isMainCard ? "3rem" : "2rem",
          fontWeight: "400",
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
          variant="body1"
          fontWeight={300}
          color="white"
          className="feature-description"
          sx={{
            fontSize: isMobile ? "0.9rem" : "1.170rem",
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
  const sectionRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery("(min-width: 300px) and (max-width: 450px) ");
  const isTablet = useMediaQuery("(min-width: 451px) and (max-width: 768px)");

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
    if (isMobile || isTablet) return;

    let ctx = gsap.context(() => {
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
        start: "top 20%",
        end: "top 20%",
        scrub: 0.5,
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

          gsap.to(".main-card", {
            width: `${80 - scale * 60}%`,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(".side-cards-container", {
            opacity: scale,
            x: 0,
            duration: 1,
            ease: "power2.out",
          });

          gsap.to(".cards-container", {
            gap: `${2 + scale * 8}rem`,
            duration: 0.3,
            ease: "power2.out",
            marginLeft: `-${scale * 2}%`,
          });

          gsap.to(".main-card .feature-title", {
            fontSize: `${Math.max(3 - scale * 2, 2)}rem`,
            duration: 1,
            ease: "power2.out",
          });

          gsap.to(".main-card .feature-description", {
            opacity: scale > 0.9 ? 1 : 0,
            duration: 0.3,
            ease: "power2.out",
          });

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
    });

    return () => ctx.revert();
  }, [onComplete, isMobile, isTablet]);

  if (isMobile || isTablet) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          color: "#fff",
          padding: "2rem 1rem",
          fontFamily: '"Inter", sans-serif',
          position: "relative",
       
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          textAlign="center"
          sx={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            marginBottom: "2rem",
            // marginTop:5,
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
      ref={sectionRef}
      className="hero-page-section-4"
      sx={{
        height: "100vh",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Box
        className="title-section"
        sx={{
          position: "sticky",
          top: "2%",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
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
          height: "calc(100vh - 200px)",
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
