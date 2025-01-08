import React, { useEffect, useRef } from "react";
import { Box, Typography, styled } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  width: "100.1%",
  height: "250px",
  zIndex: 1,
  backgroundColor: "#000",
  borderTop: "1.5px solid #7e22ce",
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
  position: "relative",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "85%",
    margin: "auto",
  },
});

const TableContent = styled("div")({
  flex: "1 1 ",
  border: "1px solid #7e22ce",
  margin: "0 0",
  padding: "30px",
  height: "100%",
  width: "77.5%",
  opacity: 0,
  transform: "translateY(100%)",
  visibility: "hidden",
  "& h3": {
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "37.5px",
    margin: "30px 0 0 10px",
    color: "#FFFFFF",
  },
  "& p": {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 300,
    color: "#9EA4AA",
    margin: 10,
    lineHeight: 1.6,
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
      // marginTop: "-15px",
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
        start: "top top",
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
          duration: 5,
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
        <Box sx={{ marginBottom: "3rem", marginTop: "3.5rem" }}>
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
                "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
            },
            {
              title: "Define",
              content:
                "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
            },
            {
              title: "Design",
              content:
                "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or asset will be designed, reviewed, and given your stamp of approval.",
            },
            {
              title: "Develop",
              content:
                "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or asset will be designed, reviewed, and given your stamp of approval.",
            },
            {
              title: "Deliver",
              content:
                "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or asset will be designed, reviewed, and given your stamp of approval.",
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
                <Typography variant="body1">{step.content}</Typography>
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
