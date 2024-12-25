import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "AI & Automation",
    description:
      "From intelligent chatbots to workflow automation, we bring AI solutions that optimize operations and reduce costs.",
  },
  {
    title: "Product Development",
    description:
      "Scalable websites, web apps, and mobile apps tailored to your business’s unique needs.",
  },
  {
    title: "Tech Consultancy",
    description:
      "Identify gaps in processes, align technology to bridge those gaps, and implement transformative solutions tailored for success.",
  },
  {
    title: "Sales Channel Development",
    description:
      "Set up or enhance e-commerce and WhatsApp sales channels to unlock new growth avenues.",
  },
  {
    title: "Machine Learning-Driven Data Analysis",
    description:
      "Harness cutting-edge machine learning to decode data, predict trends, and empower precise, forward-thinking business strategies.",
  },
];

const CardDesign = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: "20px",
  flexDirection: "column",
  gap: "2rem",
  height: "450px",
}));

const CardContainer = styled(Card)(({ isHovered }) => ({
  width: "700px",
  height: "450px",
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  background: `rgba(255, 255, 255, 0.1)`,
  backdropFilter: "blur(10px)",
  boxShadow: isHovered
    ? "0px 10px 30px rgba(0, 0, 0, 0.6)"
    : "0px 5px 15px rgba(0, 0, 0, 0.3)",
  transition: "all 0.4s ease",
  zIndex: isHovered ? 2 : 1,
  borderRadius: "15px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  cursor: "pointer",
}));

const TitleCardContainer = styled(Card)(({ isHovered }) => ({
  width: "700px",
  height: "450px",
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  background: "none",
  boxShadow: "none",
  transition: "all 0.4s ease",
  zIndex: isHovered ? 2 : 1,
  borderRadius: "15px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  cursor: "pointer",
}));

const PaginationDots = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "1rem",
}));

const Dot = styled(Box)(({ theme, active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "#fff" : "#888",
  transition: "background-color 0.3s ease",
}));

const HeroPageSection3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleCardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 1 / (cardData.length * 2 - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const cardIndex = Math.round(progress * (cardData.length - 1));
          setCurrentCard(cardIndex);
        },
      },
    });

    cardData.forEach((_, index) => {
      const card = cardRefs.current[index];
      const titleCard = titleCardRefs.current[index];

      // Entry animation for both cards simultaneously
      timeline.fromTo(
        [card, titleCard],
        {
          x: (i) => (i === 0 ? "-100%" : "100%"),
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        index
      );

      // Exit animation for both cards simultaneously
      if (index < cardData.length - 1) {
        timeline.to(
          [card, titleCard],
          {
            x: (i) => (i === 0 ? "100%" : "-100%"),
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          index + 0.5
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.to(".hero-page-section-3", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-page-section-3",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <Box
      ref={sectionRef}
      className="hero-page-section-3"
      sx={{
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(closest-side, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 75%)`,
          zIndex: 0,
          transformOrigin: "center center", // Ensure the gradient scales from the center
        }}
      />
      <Typography
        variant="h1"
        sx={{ color: "#fff", position: "relative", top: "20px", zIndex: 1 }}
      >
        Our{" "}
        <Box
          component="span"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Excollo?
        </Box>
      </Typography>
      <CardDesign sx={{ zIndex: 1, marginTop: "100px" }}>
        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <CardContainer
              ref={(el) => (cardRefs.current[index] = el)}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ marginTop: "10px", color: "#ddd" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </CardContainer>
            <TitleCardContainer
              ref={(el) => (titleCardRefs.current[index] = el)}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  background:
                    "linear-gradient(to bottom right ,#2579e3, #8e54f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  marginBottom: "180px",
                }}
              >
                {card.title}
              </Typography>
            </TitleCardContainer>
          </React.Fragment>
        ))}
      </CardDesign>
      <PaginationDots>
        {cardData.map((_, index) => (
          <Dot key={index} active={index === currentCard} />
        ))}
      </PaginationDots>
    </Box>
  );
};

export default HeroPageSection3;
