import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { TitleCarousel } from "./Carousel";
import { DescriptionCarousel } from "./Carousel";
import { ScrollProvider } from "./ScrollProvider";
const HeroPageSection3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSpecificSize = useMediaQuery(
    "(max-width: 320px) and (max-height: 725px)"
  );
  const isSpecified = useMediaQuery("(max-width: 1024px)");
  // Custom breakpoint checks for specific margins
  const is600to640 = useMediaQuery("(min-width:600px) and (max-width:640px)");
  const is640to670 = useMediaQuery("(min-width:640px) and (max-width:670px)");
  const is670to685 = useMediaQuery("(min-width:670px) and (max-width:685px)");
  const is685to720 = useMediaQuery("(min-width:685px) and (max-width:720px)");
  const is720to768 = useMediaQuery("(min-width:720px) and (max-width:768px)");
  const is768to800 = useMediaQuery("(min-width:768px) and (max-width:800px)");
  const is800to850 = useMediaQuery("(min-width:800px) and (max-width:850px)");
  const is850to900 = useMediaQuery("(min-width:850px) and (max-width:900px)");
  // Function to get margin values based on breakpoints
  const getMargins = () => {
    if (is600to640) return { mr: 0, ml: -8 };
    if (is640to670) return { mr: 0, ml: -7 };
    if (is670to685) return { mr: 15, ml: -5 };
    if (is685to720) return { mr: 15, ml: -3 };
    if (is720to768) return { mr: 15, ml: -1 };
    if (is768to800) return { mr: "auto", ml: 3.5 };
    if (is800to850) return { mr: "auto", ml: 4.5 };
    if (is850to900) return { mr: "auto", ml: 6 };
    return { mr: 0, ml: 0 }; // default margins
  };
  const margins = getMargins();
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        height: "auto",
        marginTop: {
          xs: "0px",
          sm: "0px",
          md: "8rem",
        },
        minHeight: {
          xs: isSpecificSize ? "1200px" : "1000px",
          sm: "1000px",
          md: "100vh",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: isSpecified ? "10%" : "2%",
          left: "10%",
          right: "10%",
          bottom: isSpecified ? "0" : "0",
          background:
            isMobile || isTablet
              ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 0%)`
              : isSpecified
              ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`
              : `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 0,
          pointerEvents: "none",
          transformOrigin: "center center",
        }}
      />
      <Typography
        variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
        sx={{
          color: "#fff",
          fontWeight: "bold",
          position: "relative",
          top: "20px",
          background: "black",
        }}
      >
        Our{" "}
        <Box
          component="span"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Services
        </Box>
      </Typography>
      <ScrollProvider>
        <Box
          sx={{
            position: "relative",
            marginTop: "5rem",
            zIndex: 0,
            marginRight: margins.mr,
            marginLeft: margins.ml,
          }}
        >
          <Box
            className="carousel-container"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
            }}
          >
            <TitleCarousel />
          </Box>
          <Box
            className="carousel-container"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          >
            <DescriptionCarousel />
          </Box>
        </Box>
      </ScrollProvider>
    </Box>
  );
};
export default HeroPageSection3;