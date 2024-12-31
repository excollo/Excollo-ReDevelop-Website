import React from "react";
import { Box, Typography } from "@mui/material";
import { TitleCarousel } from "./TitleCarousel";
import { DescriptionCarousel } from "./DescriptionCarousel";
import { ScrollProvider } from "./ScrollProvider";

const HeroPageSection3 = () => {
  return (
    <Box
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
                top: "25%",
                left: "10%",
                right: "10%",
                bottom: "10%",
                background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 75%)`,
                zIndex: 0, // Set consistent z-index
                pointerEvents: "none",
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
          className="carousel-wrapper"
          sx={{
            position: "relative",
            marginTop: "8rem",
            zIndex: 1,
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
              backgroundColor: "transparent",
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
              backgroundColor: "transparent",
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
