import React, { useState, useEffect, useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({
  title,
  description,
  showDescription,
  isFinalState,
  isMainCard,
}) => {
  return (
    <Paper
      elevation={6}
      sx={{
        background: "#000000",
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
      }}
    >
      <Typography
        fontWeight="400"
        gutterBottom
        className="feature-title"
        sx={{
          background: "linear-gradient(to bottom right, #2579e3, #8e54f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: "1rem",
          marginTop: isFinalState ? "0" : "2rem",
          transition: "margin-top 0.5s ease",
          fontSize: isMainCard ? "3rem" : "2rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight={300}
        color="white"
        className="feature-description"
        sx={{
          fontSize: "1.170rem",
          fontFamily: '"Inter", sans-serif',
          maxWidth: "80%",
          opacity: showDescription ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

const HeroPageSection4 = ({ onComplete }) => {
  const [isCardShrunk, setIsCardShrunk] = useState(false);
  const sectionRef = useRef(null);
  const mainCardRef = useRef(null);
  const sideCardsRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial setup for side cards
      gsap.set(".side-cards-container", {
        opacity: 0,
        display: "block",
        x: (index) => (index === 0 ? -100 : 100),
      });

      // Title scroll trigger
      ScrollTrigger.create({
        trigger: ".hero-page-section-4",
        start: "top top",
        end: "top 20%",
        scrub: 0.5,
        pin: ".title-section",
        pinSpacing: false,
      });

      // Main animation trigger
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

          // Animate main card width
          gsap.to(".main-card", {
            width: `${80 - scale * 60}%`,
            duration: 0.3,
            ease: "power2.out",
          });

          // Animate side cards
          gsap.to(".side-cards-container", {
            opacity: scale,
            x: 0,
            duration: 1,
            ease: "power2.out",
          });

          // Animate container gap
          gsap.to(".cards-container", {
            gap: `${2 + scale * 8}rem`,
            duration: 0.3,
            ease: "power2.out",
            marginLeft: `-${scale * 2}%`,
          });

          // Animate title font size
          gsap.to(".main-card .feature-title", {
            fontSize: `${Math.max(3 - scale * 2, 2)}rem`,
            duration: 1,
            ease: "power2.out",
          });

          // Animate description opacity
          gsap.to(".main-card .feature-description", {
            opacity: scale > 0.9 ? 1 : 0,
            duration: 0.3,
            ease: "power2.out",
          });

          setIsCardShrunk(scale > 0.1);
        },
        onLeave: () => {
          // Only call onComplete without forcing scroll
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
  }, [onComplete]);

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
        ref={titleRef}
        className="title-section"
        sx={{
          position: "sticky",
          top: "5%",
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
        ref={cardsContainerRef}
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
          ref={sideCardsRef}
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
          ref={mainCardRef}
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