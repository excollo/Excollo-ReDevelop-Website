import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroPageSection5.css";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection5 = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const cards = [
    {
      title: "Discover Your Needs",
      description: "In-depth discovery to align with your business goals.",
    },
    {
      title: "Craft a Tailored Plan",
      description:
        "Strategy, implementation, and optimization designed for measurable outcomes.",
    },
    {
      title: "Deliver and Iterate",
      description:
        "Continuous improvement ensures solutions stay ahead of the curve.",
    },
  ];

  useEffect(() => {
    if (isDesktop) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: "70%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 70%",
              scrub: true,
            },
          }
        );
      });
    }
  }, [isDesktop]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: "70vh",
        fontFamily: '"Inter", sans-serif',
        position: "relative",
        bgcolor: "#000",
        pt: { xs: 4, sm: 6, md: 6 },
        pb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "0",
          right: "0%",
          bottom: 0,
          height: "60%",
          background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`,
          zIndex: -1,
          pointerEvents: "none",
          transformOrigin: "center center",
        }}
      />
      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
          fontWeight="bold"
        >
          How We{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Work?
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, sm: 4, md: 6 },
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: "80%", md: "30%" },
              maxWidth: { xs: "350px", md: "400px" },
              background: "transparent",
              backdropFilter: "blur(10px)",
              // border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              overflow: "visible",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: { xs: 3, sm: 4 },
                "&:last-child": { pb: { xs: 3, sm: 4 } },
              }}
            >
              <SearchRoundedIcon
                sx={{
                  color: "#8E54F7",
                  fontSize: { xs: 40, sm: 48 },
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 2,
                  fontWeight: 500,
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Existing layout for desktop */}
      <Box className="row" sx={{ display: { xs: "none", md: "block" } }}>
        <div className="col-md-12">
          <div className="gradientCardBox">
            {[
              "Understand Your Needs",
              "Craft a Tailored Plan",
              "Deliver and Iterate",
            ].map((title, index) => (
              <div
                className="box aos-init aos-animate"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration={`${500 + index * 100}`}
                ref={(el) => (cardRefs.current[index] = el)}
                key={index}
              >
                <span></span>
                <div className="content">
                  <h2>{title}</h2>
                  <p>
                    {index === 0
                      ? "In-depth discovery to align with your business goals."
                      : index === 1
                      ? "Strategy, implementation, and optimization designed for measurable outcomes."
                      : "Continuous improvement ensures solutions stay ahead of the curve."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default HeroPageSection5;
