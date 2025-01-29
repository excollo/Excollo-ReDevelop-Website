import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
const TableGrid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  margin: "auto",
  position: "relative",
  justifyContent: "space-evenly", // Keep spacing even on larger screens
  "@media (max-width: 768px)": {
    flexDirection: "column", // Stack vertically on small screens
    width: "100%", // Take up full width
    margin: "auto",
    overflowY: "scroll", // Make it scrollable vertically on mobile
    alignItems: "center", // Center horizontally
    maxHeight: "none", // Remove height limit on mobile
  },
  "@media (max-width: 480px)": {
    flexDirection: "column", // Stack vertically on small screens
    width: "100%", // Take up full width
    margin: "auto",
  },
});
const TableContent = styled("div")({
  flex: "1 1",
  border: "1px solid #7E22CE",
  margin: "0 0",
  padding: "30px",
  width: "80.8%",
  height: "100%",
  opacity: 0,
  transform: "translateY(100%)",
  visibility: "hidden",
  transition: "border-color 0.3s ease",
  position: "relative",
  display: "flex", // Flexbox layout
  flexDirection: "column", // Vertical stacking
  alignItems: "center", // Horizontally center content
  alignContent: "justify", // Distribute content vertically
  justifyContent: "center", // Vertically center content
  "&:hover": {
    borderColor: "#7E22CE !important",
    background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)",
    zIndex: 1000, // Added !important to override GSAP inline styles
  },
  "& h3": {
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    fontWeight: 600,
    lineHeight: "37.5px",
    margin: "10px auto",
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
  "@media (min-width: 2301px) and (max-width: 2600px)": {
    width: "87%",
    height: "600px",
    "& h3": { margin: "25px auto", fontSize: "48px" },
    "& p": {
      fontSize: "32px", // Adjust font size for mobile
      margin: "10px",
    },
  },
  "@media (min-width: 2001px) and (max-width: 2300px)": {
    width: "85%",
    height: "600px",
    "& h3": { margin: "25px auto", fontSize: "42px" },
    "& p": {
      fontSize: "28px", // Adjust font size for mobile
      margin: "10px",
    },
  },
  "@media (min-width: 1801px) and (max-width: 2000px)": {
    width: "84%",
    height: "550px",
    "& h3": { margin: "20px auto", fontSize: "36px" },
    "& p": {
      fontSize: "24px", // Adjust font size for mobile
      margin: "8px",
    },
  },
  "@media (min-width: 1600px) and (max-width: 1800px)": {
    width: "81%",
    height: "400px",
    "& h3": { fontSize: "32px" },
    "& p": {
      fontSize: "20px", // Adjust font size for mobile
      margin: "6px",
    },
  },
  "@media (min-width: 1500px) and (max-width: 1600px)": {
    width: "79%",
    "& h3": { fontSize: "30px" },
    "& p": {
      fontSize: "20px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (min-width: 1400px) and (max-width: 1500px)": {
    width: "78.2%",
    "& h3": { fontSize: "30px" },
    "& p": {
      fontSize: "20px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (min-width: 1350px) and (max-width: 1399px)": {
    width: "77.2%",
    "& h3": { fontSize: "30px" },
    "& p": {
      fontSize: "18px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (min-width: 1300px) and (max-width: 1349px)": {
    width: "76.5%",
    "& h3": { fontSize: "29px" },
    "& p": {
      fontSize: "18px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (min-width: 1250px) and (max-width: 1299px)": {
    width: "75%",
    "& h3": { fontSize: "29px" },
    "& p": {
      fontSize: "18px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (min-width: 1200px) and (max-width: 1249px)": {
    width: "73.5%",
    "& h3": { fontSize: "28px" },
    "& p": {
      fontSize: "18px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (min-width: 1150px) and (max-width: 1199px)": {
    width: "72%",
    "& h3": { fontSize: "28px" },
  },
  "@media (min-width: 1100px) and (max-width: 1149px)": {
    width: "70.5%",
    "& h3": { fontSize: "27px" },
  },
  "@media (min-width: 1050px) and (max-width: 1099px)": {
    width: "69.5%",
    "& h3": { fontSize: "27px" },
  },
  "@media (min-width: 1000px) and (max-width: 1049px)": {
    width: "67.8%",
    "& h3": { fontSize: "26px" },
  },
  "@media (min-width: 950px) and (max-width: 999px)": {
    width: "66%",
    "& h3": { fontSize: "26px" },
  },
  "@media (min-width: 900px) and (max-width: 949px)": {
    width: "64.5%",
    "& h3": { fontSize: "25px" },
  },
  "@media (min-width: 769px) and (max-width:899px)": {
    width: "62%",
    height: "400px", // Make it 90% of the width for mobile
    // Add margin between cards on mobile
    opacity: 1,
    transform: "none",
    visibility: "visible",
    "& h3": {
      fontSize: "28px",
      margin: "4px",
    },
    "& p": {
      fontSize: "16px", // Adjust font size for mobile
      margin: "4px",
    },
  },
  "@media (max-width: 768px)": {
    width: "90%",
    height: "200px", // Make it 90% of the width for mobile
    // Let the height adjust dynamically
    borderRadius: "20px", // Modern rounded corners
    border: "1px solid #7E22CE ",
    // borderColor: "#7E22CE !important",
    background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)", // Remove border for a cleaner look
    textAlign: "center",
    padding: "20px", // Adjust padding for mobile
    marginBottom: "20px", // Add margin between cards on mobile
    opacity: 1,
    transform: "none",
    visibility: "visible",
    "&:hover": {
      border: "1px solid #7E22CE ",
      // borderColor: "#7E22CE !important",
      background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)",
      zIndex: 1000, // Added !important to override GSAP inline styles
    },
    "& h3": {
      fontSize: "28px",
      // margin: "20px 0",
    },
    "& p": {
      fontSize: "16px", // Adjust font size for mobile
      margin: "5px",
    },
  },
  "@media (max-width: 480px)": {
    width: "90%",
    height: "150px", // Make it 90% of the width for mobile
    border: "1px solid #7E22CE ",
    // borderColor: "#7E22CE !important",
    background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)",
    textAlign: "center",
    marginLeft: "-10px",
    padding: "20px", // Adjust padding for mobile
    marginBottom: "20px", // Add margin between cards on mobile
    opacity: 1,
    transform: "none",
    visibility: "visible",
    "&:hover": {
      border: "1px solid #7E22CE ",
      // borderColor: "#7E22CE !important",
      background: "linear-gradient(180deg, #05000A 0%,#1B1125 50%)",
      zIndex: 1000, // Added !important to override GSAP inline styles
    },
    "& h3": {
      fontSize: "28px",
      // margin: "20px 0",
    },
    "& p": {
      fontSize: "16px", // Adjust font size for mobile
      margin: "5px",
    },
  },
  "@media (max-width: 375px)": {
    width: "85%",
    margin: "auto",
    marginTop: "10px",
    marginLeft: "-7px",
  },
  "@media (max-width: 320px)": {
    width: "85%",
    margin: "auto",
    marginTop: "10px",
    marginLeft: "-8px",
  },
});
const HowWeWork = () => {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  const isXtraLargeLaptop = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => {
    if (isMobile || isTablet) return;
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
        borderColor: "#7E22CE",
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
          borderColor: "#FFFFFF",
          duration: 2,
          ease: "power2.out",
        })
        .to(content, {
          duration: 3,
        });
      mainTl.add(tl, index * 3);
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile, isTablet]);
  return (
    <Box
      ref={containerRef}
      variant="h2 bold"
      sx={{
        color: "#fff",
        minHeight: "100vh",
        fontFamily: '"Inter", sans-serif',
        letterSpacing: "-0.00833em",
        mt: isMobile || isTablet ? "0" : "10%",
        mb: isMobile || isTablet ? "2rem" : "6rem",
        pb: 2,
        // marginBottom: "-240px",
        "@media (max-width: 768px)": {
          marginBottom: "0",
        },
      }}
    >
      <WorkTable>
        <Box sx={{ marginBottom: {xs: "4rem", md: "3rem", lg: "4rem", xl: "10rem"}, marginTop: {xs: "4rem", md: "3rem", lg: "4rem", xl: "10rem"} }}>
          <Box
            sx={{
              position: "absolute",
              top: "-8%",
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
              fontSize: {
                md: `clamp(1.75rem, calc(1.25rem + 2.5vw), 9rem)`,
                lg: `clamp(1.75rem, calc(1.37rem + 3vw), 8rem)`,
                xl: `clamp(2.25rem, calc(2.5rem + 3vw), 10rem)`,
              },
              "@media (max-width: 768px)": {
                marginTop: "-1.0rem",
              },
              "@media (max-width: 480px)": {
                marginTop: "1.0rem",
              },
            }}
            variant="h2"
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
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    rowGap: "5rem",
                    mt: isMobile || isTablet ? "auto" : "20%",
                  }}
                >
                  <Typography variant="h3">{step.title}</Typography>
                  <Typography variant="body1">{step.content}</Typography>
                </Box>
              </TableContent>
            </Box>
          ))}
        </TableGrid>
        {/* <LineBox /> */}
      </WorkTable>
    </Box>
  );
};
export default HowWeWork;
