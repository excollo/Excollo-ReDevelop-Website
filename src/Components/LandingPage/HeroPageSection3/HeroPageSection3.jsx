import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { TitleCarousel } from "./Carousel";
import { DescriptionCarousel } from "./Carousel";
import { ScrollProvider } from "./ScrollProvider";
const HeroPageSection3 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const mobileScreen = useMediaQuery(theme.breakpoints.up("xs"));
  const isSpecified = useMediaQuery("(max-width: 899px)");
  const isSmallLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        minHeight: {
          xs: "100vh",
          md: "120vh",
        },
        marginTop: { sm: "-3rem", md: "-10rem" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: isLaptop
            ? "0%"
            : isSmallLaptop
            ? "-15%"
            : isSpecified
            ? "10%"
            : "2%",
          left: "10%",
          right: "10%",
          bottom: isSpecified ? "0" : "0",
          background: isLaptop
            ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`
            : isMobile || isTablet
            ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 0%)`
            : isSpecified
            ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`
            : isSmallLaptop
            ? `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`
            : `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 0,
          pointerEvents: "none",
          transformOrigin: "center center",
        }}
      />
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 600,
          lineHeight: 1.167,
          letterSpacing: "-0.01562em",
          fontSize: {
            xs: `clamp(1.75rem, calc(1.15rem + 2vw), 9rem)`,
            md: `clamp(1.75rem, calc(1.25rem + 2vw), 9rem)`,
            lg: `clamp(1.75rem, calc(1.37rem + 2.5vw), 8rem)`,
            xl: `clamp(2.25rem, calc(2rem + 2.5vw), 10rem)`,
          },
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
            marginTop: { xs: "10%", md: "8%" },
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