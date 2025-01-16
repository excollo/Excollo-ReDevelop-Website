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
  const isSpecified = useMediaQuery("(max-width: 1024px)")

  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        height: "auto",
        marginTop: "8rem",
        minHeight: isSpecificSize
          ? "210vh"
          : isMobile
          ? "180vh"
          : isTablet
          ? "180vh"
          : "110vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: isSpecified ? "10%" : "2%",
          left: "10%",
          right: "10%",
          bottom: isSpecified ? "0" : "13%",
          background:
            isMobile || isTablet
              ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 0%)` : 
            isSpecified ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)` 
              : `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 0, // Set consistent z-index
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
            background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
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
