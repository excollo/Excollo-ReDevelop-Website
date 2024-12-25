import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import "./HeroPageSection5.css";

const HeroPageSection5 = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1, // Ensure the effect triggers only when the entire section is in view
  });

  const [scrollY, setScrollY] = useState(0);
  const svgRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      svgRefs.current.forEach((svgRef) => {
        if (window.scrollY > svgRef.offsetTop + svgRef.offsetHeight) {
          svgRef.classList.add("svg-close");
        } else {
          svgRef.classList.remove("svg-close");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    svgRefs.current.forEach((svgRef, index) => {
      const iconElement = svgRef.previousSibling.firstChild;
      iconElement.addEventListener("animationend", (event) => {
        if (event.animationName === "iconAnimationReverse") {
          svgRef.classList.add("svg-close");
        }
      });
    });
  }, [inView]);

  const steps = [
    {
      icon: (
        <Box
          className="icon"
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            position: "relative",
            margin: "0 auto",
            transform: `translateY(${scrollY * 0.1}px)`,
            animation: inView
              ? "iconAnimation 1s ease-out forwards 1s, iconBounce 1s ease-in-out 2 1s" // Add delay
              : "iconAnimationReverse 1s ease-out forwards",
            opacity: 1,
          }}
        />
      ),
      title: "Understand Your Needs",
      description:
        "In-depth discovery to align with your business goals and make your business .",
    },
    {
      icon: (
        <Box
          className="icon"
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M9 21h6v-2H9v2zm3-19a7 7 0 0 0-7 7c0 2.62 1.64 4.87 4 5.65V17a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.35c2.36-.78 4-3.03 4-5.65a7 7 0 0 0-7-7z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            position: "relative",
            margin: "0 auto",
            transform: `translateY(${scrollY * 0.1}px)`,
            animation: inView
              ? "iconAnimation 1s ease-out forwards 1s, iconBounce 1s ease-in-out 2 1s" // Add delay
              : "iconAnimationReverse 1s ease-out forwards",
            opacity: 1,
          }}
        />
      ),
      title: "Craft a Tailored Plan",
      description:
        "Strategy, implementation, and optimization designed for measurable outcomes.",
    },
    {
      icon: (
        <Box
          className="icon"
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M19.41 7.41 12 14.83 8.59 11.41 7.17 12.83l4.83 4.83 8.25-8.25z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            position: "relative",
            margin: "0 auto",
            transform: `translateY(${scrollY * 0.1}px)`,
            animation: inView
              ? "iconAnimation 1s ease-out forwards 1s, iconBounce 1s ease-in-out 2 1s" // Add delay
              : "iconAnimationReverse 1s ease-out forwards",
            opacity: 1,
          }}
        />
      ),
      title: "Deliver and Iterate",
      description:
        "Continuous improvement ensures solutions stay ahead of the curve.",
    },
  ];

  return (
    <Box sx={{ color: "#fff", marginTop: "-5rem", minHeight: "100vh" }}>
      <Box
        sx={{
          minHeight: "100vh",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          marginTop: "-10rem",
          fontFamily: '"Inter", sans-serif',
          position: "relative",
          zIndex: 0,
        }}
      >
        {/* Main Heading */}
        <Box
          ref={ref}
          sx={{
            textAlign: "center",
            zIndex: 2, // Make sure it transitions over the content
            animation: inView ? "textFadeIn 1s ease-out forwards 0.5s" : "none", // Add delay
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            How We{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work?
            </Box>
          </Typography>
        </Box>
        <Grid container justifyContent="center" sx={{ marginTop: "-5rem" }}>
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                textAlign: "center",
                borderRadius: 2,
                p: 3,
                position: "relative",
              }}
            >
              <Box
                className="scroll"
                position="relative"
                zIndex={1}
                sx={{
                  mb: 2,
                  marginTop: "15rem",
                  zIndex: 1,
                  animation: inView
                    ? "iconAnimation 1s ease-out forwards 1s" // Add delay
                    : "iconAnimationReverse 1s ease-out forwards",
                }}
              >
                {step.icon}
              </Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  opacity: 0,
                  transition:
                    "opacity 2s ease-out 1s, transform 2s ease-out 1s", // Add delay
                  zIndex: 1,
                  animation: inView
                    ? "textFadeIn 2s ease-out forwards 1.5s" // Add delay
                    : "none",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0,
                  transition:
                    "opacity 2s ease-out 1s, transform 2s ease-out 1s", // Add delay
                  zIndex: 2,
                  animation: inView
                    ? "textFadeIn 2s ease-out forwards 1.5s" // Add delay
                    : "none",
                }}
              >
                {step.description}
              </Typography>
              <Box
                component="svg"
                width="157"
                height="20"
                viewBox="0 0 400 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                position="relative"
                zIndex={1}
                sx={{
                  marginLeft: "38%",
                  marginTop: "5rem",
                  display: "block",
                  zIndex: 0,
                  transition: "clip-path 2s ease-out, opacity 2s ease-out",
                  animation: inView
                    ? "svgReveal 1s forwards 0.5s"
                    : "svgClose  1s forwards 0.5s", // Add delay
                }}
                ref={(el) => (svgRefs.current[index] = el)}
              >
                <path
                  d="M6.78125 10.64L13.8769 2C14.0663 1.77 14.3453 1.64 14.6443 1.64L144.913 2C145.241 2 145.55 2.17 145.74 2.44L151.5 11"
                  stroke="#6b3f9d"
                  strokeWidth="4"
                ></path>
              </Box>
              <Box
                component="svg"
                width="157"
                height="20"
                viewBox="0 0 400 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                position="relative"
                zIndex={3}
                sx={{
                  marginLeft: "38%",
                  marginTop: "-18px",
                  display: "block",
                  transition: "clip-path 2s ease-out, opacity 2s ease-out",
                  animation: inView
                    ? "svgReveal 1s forwards 0.5s"
                    : "svgClose  1s forwards 0.5s", // Add delay
                }}
                ref={(el) => (svgRefs.current[index] = el)}
              >
                <path
                  d="M150.802 10L155.822 17.44C156.272 18.1 155.792 19 154.992 19H2.00249C1.15249 19 0.692494 18.02 1.23249 17.36L7.30249 10"
                  stroke="#6b3f9d"
                  strokeWidth="4"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroPageSection5;
