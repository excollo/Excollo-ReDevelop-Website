import React, { useEffect, useRef } from "react";
import { Box, Typography, styled } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import zIndex from "@mui/material/styles/zIndex";
import { text } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

const WorkTable = styled("section")({
  width: "95%",
  margin: "auto",
  padding: "20px",
  position: "relative",
  "@media (max-width: 768px)": {
    width: "100%",
    padding: "10px",
  },
});

const LineBox = styled("div")({
  position: "relative",
  top: 0,
  marginTop: "12.5%",
  width: "100.1%",
  height: "250px",
  zIndex: 1,
  backgroundColor: "#000",
  "@media (max-width: 768px)": {
    width: "100%",
    display: "none",
    height: "150px",
  },
});

const TableGrid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  margin: "auto",
  maxHeight: "300px",
  position: "relative",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "85%",
    margin: "auto",
  },
});

const TableContent = styled("div")({
  flex: "1 1",
  border: "1px solid #7e22ce",
  margin: "0 0",
  padding: "30px",
  height: "100%",
  width: "77.5%",
  opacity: 0,
  transform: "translateY(100%)",
  visibility: "hidden",
  transition: "border-color 0.3s ease",
  position: "relative",
  display: "flex", // Added for Flexbox layout
  flexDirection: "column", // Ensures vertical stacking of content
  alignItems: "center", // Horizontally centers content
  alignContent: "justify", // Vertically distributes content
  justifyContent: "center", // Vertically centers content
  "&:hover": {
    borderColor: "#7e22ce !important",
    border: "1px solid #7e22ce",
    zIndex: 1000, // Added !important to override GSAP inline styles
    background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)",
  },
  "& h3": {
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "37.5px",
    margin: "30px 0 0 10px",
    color: "#FFFFFF",
    textAlign: "center", // Center-align h3 text
  },
  "& p": {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 300,
    color: "#9EA4AA",
    margin: "10px",
    lineHeight: 1.6,
    textAlign: "center", // Center-align paragraph text
  },
  "@media (max-width: 768px)": {
    width: "100%",
    height: "40vh",
    borderRadius: "60px",
    border: "none",
    textAlign: "center",
    padding: "30px",
    marginBottom: "20px",
    opacity: 1,
    transform: "none",
    visibility: "visible",
    "& h3": {
      fontSize: "35px",
      margin: "30px  5px",
    },
    "& p": {
      fontSize: "18px",
      margin: "5px",
    },
  },
  "@media (max-width: 480px)": {
    width: "95%",
    height: "50vh",
    borderRadius: "60px",
    textAlign: "center",
    padding: "20px",
    marginBottom: "30px",
    background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)",
    opacity: 1,
    transform: "none",
    visibility: "visible",
    "& h3": {
      fontSize: "30px",
      margin: "25px 10px",
    },
    "& p": {
      fontSize: "18px",
      margin: "5px",
    },
  },
});


const HowWeWork = () => {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const contents = contentRefs.current;

    // Create main timeline
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top -10%",
        end: "+=400%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Create animations for each content box
    contents.forEach((content, index) => {
      if (!content) return;

      const tl = gsap.timeline();

      gsap.set(content, {
        opacity: 0,
        y: 400,
        visibility: "hidden",
        borderColor: "#7e22ce",
      });

      tl.to(content, {
        visibility: "visible",
        duration: 1,
      })
        .to(content, {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power2.out",
        })
        .to(content, {
          borderColor: "#ffffff",
          duration: 2,
          ease: "power2.out",
          "&:hover": {
            borderColor: "#7e22ce",
          },
        })
        .to(content, {
          duration: 3,
        });
      mainTl.add(tl, index * 3);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      variant="h2 bold"
      sx={{
        color: "#fff",
        minHeight: "100vh",
        fontFamily: '"Inter", sans-serif',
        letterSpacing: "-0.00833em",
        pb: 2,
        marginBottom: "-250px",
        overflow: "hidden",
        "@media (max-width: 768px)": {
          marginBottom: "0",
        },
      }}
    >
      <WorkTable>
        <Box sx={{ marginBottom: "10rem", marginTop: "10rem" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
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
          <Typography
            sx={{
              textAlign: "center",
              "@media (max-width: 768px)": {
                marginTop: "-1.0rem",
                fontSize: "3rem",
              },
              "@media (max-width: 480px)": {
                marginTop: "1.0rem",
                fontSize: "2.5rem",
              },
            }}
            variant="h2"
            fontWeight="bold"
          >
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

        <TableGrid>
          {[
            {
              title: "Discover",
              content:
                "We begin by exploring your business deeply to uncover challenges, goals, and opportunities.",
            },
            {
              title: "Define",
              content:
                "Pinpoint gaps, assess needs, and identify the technologies required to address them effectively.",
            },
            {
              title: "Design",
              content:
                "Develop innovative, customized solutions specifically tailored to meet your needs and strategic objectives.",
            },
            {
              title: "Develop",
              content:
                " Implement advanced technologies and seamless processes to effectively turn strategies into reality.",
            },
            {
              title: "Deliver",
              content:
                "Execute flawlessly with measurable results and ongoing improvements for long-term success.",
            },
          ].map((step, index) => (
            <Box
              sx={{
                width: "20%",
                position: "relative",
                perspective: "1000px",
                "@media (max-width: 768px)": {
                  width: "90%",
                },
              }}
              key={index}
            >
              <TableContent
                ref={(el) => (contentRefs.current[index] = el)}
                className="table-content"
              >
                <Typography variant="h3">{step.title}</Typography>
                <Typography variant="body1" sx={{ fontSize: "2rem"}}>{step.content}</Typography>
              </TableContent>
            </Box>
          ))}
        </TableGrid>
        <LineBox />
      </WorkTable>
    </Box>
  );
};

export default HowWeWork;
