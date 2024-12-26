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
      "Scalable websites, web apps, and mobile apps tailored to your business's unique needs.",
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
  const [scrollDirection, setScrollDirection] = useState("forward");
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleCardRefs = useRef([]);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;

    // Initial setup for first card
    gsap.set([cardRefs.current[0], titleCardRefs.current[0]], {
      x: "0%",
      opacity: 1,
    });

    // Modified initial positions for other cards
    cardData.forEach((_, index) => {
      if (index > 0) {
        gsap.set(cardRefs.current[index], {
          x: "-100%", // Cards start from left
          opacity: 0,
        });
        gsap.set(titleCardRefs.current[index], {
          x: "100%", // Titles start from right
          opacity: 0,
        });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 1 / (cardData.length * 2 - 1),
          duration: { min: 0.2, max: 1 },
          ease: "power1.inOut",
        },
        onEnter: () => {
          setCurrentCard(0);
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const cardIndex = Math.round(progress * (cardData.length - 1));
          setCurrentCard(cardIndex);
        },
      },
    });

    // First card animation remains unchanged
    timeline
      .to(
        cardRefs.current[0],
        {
          x: "100%", // Card Container exits to right
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        0.5
      )
      .to(
        titleCardRefs.current[0],
        {
          x: "-100%", // Title Card exits to left
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        0.5
      );

    // Modified animations for subsequent cards
    cardData.forEach((_, index) => {
      if (index > 0) {
        // Entrance animation - card from left, title from right
        timeline
          .to(
            cardRefs.current[index],
            {
              x: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            index
          )
          .to(
            titleCardRefs.current[index],
            {
              x: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
            },
            index
          );

        // Exit animation - card to right, title to left
        if (index < cardData.length - 1) {
          timeline
            .to(
              cardRefs.current[index],
              {
                x: "100%", // Exit to right
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
              },
              index + 0.5
            )
            .to(
              titleCardRefs.current[index],
              {
                x: "-100%", // Exit to left
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
              },
              index + 0.5
            );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollDirection]);

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

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTo: {
          y: sectionRef.current.offsetTop + currentCard * 450,
          autoKill: false,
        },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [currentCard]);

  return (
    <Box
      ref={sectionRef}
      className="hero-page-section-3"
      sx={{
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        height: "auto",
        marginTop: "8rem",
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
          transformOrigin: "center center",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          position: "relative",
          top: "20px",
          zIndex: 1,
        }}
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
          Services
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
          <Dot
            key={index}
            active={index === currentCard}
            onClick={() => setCurrentCard(index)}
          />
        ))}
      </PaginationDots>
    </Box>
  );
};

export default HeroPageSection3;