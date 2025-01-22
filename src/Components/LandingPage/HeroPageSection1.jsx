import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const HeroPageSection1 = ({ animationComplete }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isDesktopSize = useMediaQuery(
      "(min-width: 1025px) and (max-width: 1200px)"
    );
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
          md: "80%",
        },
        px: {
          xs: 2,
          sm: 4,
          md: 3,
        },
        marginLeft: {
          xs: 0,
          sm: "2.5%",
          md: "3%",
          lg: "7%",
        },
        marginRight: {
          xs: 0,
          sm: "2.5%",
          md: "6%",
        },
        position: "relative",
        minHeight: {
          xs: "500px", // Fixed pixel height for mobile
          sm: "500px",
          md: "95vh", // Keep vh units for larger screens
        },
        zIndex: 2,
        "--gradient-start": "#ff7e5f",
        "--gradient-end": "#feb47b",
        "@media (min-width: 769px) and (max-width:1024px)": {
          marginLeft: "6%",
          marginTop: "-6%",
        },
        "@media (min-width: 1025px) and (max-width:1199px)": {
          marginLeft: "6%",
          marginTop: "-3%",
        },
        "@media (min-width: 1200px)": {
          marginTop: "-3%",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "95%",
            md: "80%",
          },
          opacity: isTabletOrMobile ? 1 : animationComplete ? 1 : 0,
          transform: isTabletOrMobile
            ? "none"
            : animationComplete
            ? "none"
            : "translateX(50px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
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
              xs: "1.5rem",
              sm: "2.2rem",
              md: "2.5rem",
              lg: "3rem",
            },
            lineHeight: 1.5,
            mt: {
              xs: 20,
              sm: 22,
              md: 25,
              lg: 25,
            },
            "@media (min-width: 769px) and (max-width:1024px)": {
              fontSize: "2.2rem",
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
              xs: "1.75rem",
              sm: "2.25rem",
              md: "2.75rem",
              lg: "3.25rem",
            },
            "@media (min-width: 769px) and (max-width:1024px)": {
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
            marginLeft: isTabletOrMobile ? 0 : "0.5%",
            textAlign: isTabletOrMobile ? "center" : "left",
            "@media (min-width: 769px) and (max-width:1024px)": {
              fontSize: "1.2rem",
            },
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
