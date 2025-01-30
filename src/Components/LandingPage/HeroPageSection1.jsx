import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const HeroPageSection1 = ({ animationComplete }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallerLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isXtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const isTabletOrMobile = isMobile || isTablet;

  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        textAlign: isTabletOrMobile ? "center" : "left",
        justifyContent: isTabletOrMobile ? "center" : "left",
        width: {
          xs: "100%",
          sm: "95%",
          md: "100%",
        },
        px: {
          xs: 2,
          sm: 4,
          md: 0,
        },
        marginLeft: {
          xs: 0,
          sm: "2.5%",
          md: "7.5%",
        },
        marginRight: {
          xs: 0,
          sm: "2.5%",
          md: "0%",
        },
        position: "relative",
        minHeight: {
          xs: "500px", // Fixed pixel height for mobile
          sm: "500px",
          md: "60vh", // Keep vh units for larger screens
        },
        zIndex: 2,
        marginTop: {
          md: "calc(45vh - 7%)",
          lg: "calc(47.5vh - 8%)",
          xl: "calc(50vh - 10%)",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "95%",
            md: "85%",
          },
          opacity: isTabletOrMobile ? 1 : animationComplete ? 1 : 0,
          transform: isTabletOrMobile
            ? "none"
            : animationComplete
            ? "none"
            : "translateX(-100px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          padding: {
            xs: 2,
            sm: 4,
            md: 0,
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 400,
            fontSize: {
              md: `clamp(1.75rem, calc(1.25rem + 2.5vw), 9rem)`,
              lg: `clamp(1.75rem, calc(1.37rem + 3vw), 8rem)`,
              xl: `clamp(2.25rem, calc(2rem + 3vw), 10rem)`,
            },
            lineHeight: 1.167, // Line height remains the same
            letterSpacing: "-0.01562em",
            mt: {
              xs: 20,
              sm: 22,
              md: 0,
            },
          }}
        >
          Shaping the Future With
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            lineHeight: 1.167,
            letterSpacing: "-0.01562em",
            fontSize: {
              md: `clamp(1.75rem, calc(1.25rem + 2.5vw), 9rem)`,
              lg: `clamp(1.75rem, calc(1.37rem + 3vw), 8rem)`,
              xl: `clamp(2.25rem, calc(2rem + 3vw), 10rem)`,
            },
            "@media (min-width: 769px) and (max-width:899)": {
              fontSize: "2.5rem",
            },
          }}
        >
          <Box
            component="span"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              wordBreak: "break-word",
              mb: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            }}
          >
            <span
              style={{
                background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                wordBreak: "break-word",
              }}
            >
              Outcome Driven{" "}
            </span>
            &nbsp;
            <span
              style={{
                background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                wordBreak: "break-word",
              }}
            >
              {" "}
              Innovation{" "}
            </span>
          </Box>
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontSize: {
              md: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
              lg: `clamp(0.5rem, calc(0.8rem + 0.7vw), 1.8rem)`,
              xl: `clamp(0.5rem, calc(0.8rem + 0.8vw), 2.1rem)`,
            },
            fontWeight: 200,
            lineHeight: 1.7,
            marginLeft: isTabletOrMobile ? 0 : "1%",
            mb: {
              xs: 4,
              sm: 5,
              md: 4.5,
            },
            textAlign: isTabletOrMobile ? "center" : "left",
            "@media (min-width: 769px) and (max-width:899px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Unlock the potential of AI to transform your business and redefine
          success.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: isTabletOrMobile ? "center" : "flex-start",
            width: "100%",
          }}
        >
          <Typography
            component="a"
            href="#scheduleaconsultation"
            sx={{
              display: "inline-block",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 100,
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: `clamp(1rem, calc(0.3rem + 1vw), 1.5rem)`,
                xl: `clamp(0.5rem, calc(0.6rem + 1.1vw), 5rem)`,
              },
              border: "1px solid transparent",
              padding: {
                xs: "15px 30px",
                sm: "16px 32px",
                md: "1.6vw",
                xl: "1.8vw",
              },
              borderRadius: { sm: "40px", md: "80px", xl: "80px" },
              background:
                "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
              zIndex: 3,
              position: "relative",
              transition: "all 0.3s ease",
              width: isTabletOrMobile ? "auto" : "auto",
              textAlign: "center",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                color: "#ffffff",
                transform: "scale(1.05)",
              },
            }}
          >
            Schedule a Consultation
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPageSection1;
