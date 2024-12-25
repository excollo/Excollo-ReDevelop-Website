import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, description, showDescription }) => {
  return (
    <Paper
      elevation={6}
      sx={{
        background: "linear-gradient(145deg, #05000a, #432d5a)",
        borderRadius: "12px",
        textAlign: "center",
        padding: "2rem",
        height: "300px", // Fixed height
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#2c2c2c",
          transition: "all 0.3s ease",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{
          background: "linear-gradient(to bottom right, #2579e3, #8e54f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: "2rem",
        }}
      >
        {title}
      </Typography>
      {showDescription && (
        <Typography
          variant="body1"
          color="white"
          sx={{
            fontFamily: '"Inter", sans-serif',
            maxWidth: "80%",
          }}
        >
          {description}
        </Typography>
      )}
    </Paper>
  );
};

const HeroPageSection4 = () => {
  const [isCardShrunk, setIsCardShrunk] = useState(false);

  useEffect(() => {
    const mainCardTrigger = ScrollTrigger.create({
      trigger: ".hero-page-section-4",
      start: "top 20%",
      end: "+=100",
      scrub: 0.5,
      onEnter: () => setIsCardShrunk(true),
      onLeaveBack: () => setIsCardShrunk(false),
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = Math.pow(progress, 1.5);

        gsap.to(".main-card", {
          width: `${80 - scale * 65}%`, // Adjusted scale
          duration: 0.1,
          ease: "power2.out",
        });

        gsap.to(".title-section", {
          opacity: progress,
          y: 50 * (1 - progress),
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(".side-cards-container", {
          opacity: scale,
          x: 0,
          duration: 1,
        });

        gsap.to(".cards-container", {
          gap: "15rem",
          duration: 0.1,
          ease: "power2.out",
          marginLeft: "-5%",
        });
      },
      onLeave: () => {
        gsap.to(window, { scrollTo: ".hero-page-section-5", duration: 1 });
      },
    });

    return () => mainCardTrigger.kill();
  }, []);

  return (
    <Box
      className="hero-page-section-4"
      sx={{
        minHeight: "100vh",
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
          top: "5%",
          textAlign: "center",
          zIndex: 2,
          opacity: 0,
          transform: "translateY(50px)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Why Choose <br />
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
          position: "sticky",
          top: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "0 2rem",
          transition: "gap 0.2s ease",
        }}
      >
        <Box
          className="side-cards-container"
          sx={{
            width: "15%", // Equal width for all cards
            opacity: 0,
            transform: "translateX(-100px)",
            display: isCardShrunk ? "block" : "none",
          }}
        >
          <FeatureCard
            title="Iterative Excellence"
            description="Our solutions evolve with your business, ensuring long-term success."
            showDescription={true}
          />
        </Box>

        <Box
          className="main-card"
          sx={{
            width: "80%", // Equal width for all cards
            transition: "width 0.2s ease",
          }}
        >
          <FeatureCard
            title="Outcome as a Service"
            description="We deliver tangible results-like increased sales or operational efficiency-not just products"
            showDescription={isCardShrunk}
          />
        </Box>

        <Box
          className="side-cards-container"
          sx={{
            width: "15%", // Equal width for all cards
            opacity: 0,
            transform: "translateX(100px)",
            display: isCardShrunk ? "block" : "none",
          }}
        >
          <FeatureCard
            title="Future-Forward Strategies"
            description="Cutting-edge AI and automation drive scalable, innovative solutions."
            showDescription={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPageSection4;
