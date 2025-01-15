import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const HeroPageSection1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const isTabletOrMobile = isMobile || isTablet; // Helper for shared mobile/tablet styles

  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        minHeight: "90vh",
        textAlign: isTabletOrMobile ? "center" : "left",
        justifyContent: isTabletOrMobile ? "center" : "left",
        width: {
          xs: "100%", // Mobile
          sm: "95%", // Tablet
          md: "80%", // Desktop
        },
        px: {
          xs: 2, // Mobile
          sm: 4, // Tablet
          md: 3, // Desktop
        },
        marginLeft: {
          xs: 0, // Mobile
          sm: "2.5%", // Tablet
          md: "6.5%",
          lg: "6.5%", // Desktop
        },
        marginRight: {
          xs: 0, // Mobile
          sm: "2.5%", // Tablet
          md: "6%", // Desktop
        },
        position: "relative",
        zIndex: 2,
        "--gradient-start": "#ff7e5f",
        "--gradient-end": "#feb47b",
      }}
      className="gradient-background"
    >
      <Box
        className="hero-content"
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "95%",
            md: "80%",
          },
          opacity: 0,
          transform: "translateX(50px)",
          padding: {
            xs: 2,
            sm: 4,
            md: 5,
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 200,
            fontSize: {
              xs: "1.5rem", // Mobile
              sm: "2.2rem", // Tablet
              md: "2.5rem", // Desktop
              lg: "3rem", // Large Desktop
            },
            lineHeight: 1.5,
            mt: {
              xs: 20,
              sm: 22,
              md: 25,
              lg: 25,
            },
          }}
        >
          Shaping the Future With
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            lineHeight: 1.2,
            fontSize: {
              xs: "1.75rem", // Mobile
              sm: "2.25rem", // Tablet
              md: "2.75rem", // Desktop
              lg: "3.25rem", // Large Desktop
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
            <span
              style={{
                background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
                WebkitBackgroundClip: "text",
                marginLeft: "12px",
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
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 200,
            fontSize: {
              xs: "1.5rem", // Mobile
              sm: "2.2rem", // Tablet
              md: "2.5rem", // Desktop
              lg: "3rem", // Large Desktop
            },
            lineHeight: 1.5,
            mb: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          Software Solution
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 200,
            fontSize: {
              xs: "1rem", // Mobile
              sm: "1.15rem", // Tablet
              md: "1.2rem", // Desktop
              lg: "1.3rem", // Large Desktop
            },
            lineHeight: 1.5,
            marginLeft: isTabletOrMobile ? 0 : "0.5%",
            textAlign: isTabletOrMobile ? "center" : "left",
          }}
        >
          Unlock the potential of AI to transform your business and
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 200,
            fontSize: {
              xs: "1rem",
              sm: "1.15rem",
              md: "1.2rem",
              lg: "1.3rem",
            },
            lineHeight: 1.5,
            mb: {
              xs: 4,
              sm: 5,
              md: 6,
            },
            marginLeft: isTabletOrMobile ? 0 : "0.5%",
            textAlign: isTabletOrMobile ? "center" : "left",
          }}
        >
          redefine success.
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
              fontSize: {
                xs: "16px",
                sm: "17px",
                md: "18px",
              },
              border: "1px solid transparent",
              padding: {
                xs: "15px 30px",
                sm: "16px 32px",
                md: "20px 40px",
              },
              borderRadius: "40px",
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
