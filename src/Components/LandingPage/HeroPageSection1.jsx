import React from "react";
import { Box, Typography } from "@mui/material";

const HeroPageSection1 = ({ animationComplete }) => {
  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        width: "100%",
        marginLeft: "0%",
        // position: "relative",
        minHeight: "95vh",
        zIndex: 2,
        "--gradient-start": "#ff7e5f",
        "--gradient-end": "#feb47b",

        // Base styles (mobile first)
        textAlign: "center",
        justifyContent: "center",
        padding: "0 16px",

        // Media Queries for different screen sizes
        "@media (min-width: 600px)": {
          width: "95%",
          padding: "0 32px",
          margin: "0 2.5%",
        },

        "@media (min-width: 900px)": {
          width: "80%",
          padding: "0 24px",
          margin: "0 3%",
          textAlign: "left",
          justifyContent: "left",
        },

        "@media (min-width: 1200px)": {
          marginLeft: "7%",
        },

        // Portrait orientation
        "@media screen and (orientation: portrait)": {
          minHeight: "auto",
          justifyContent: "flex-start",
          paddingTop: "10vh",
        },

        // Landscape orientation
        "@media screen and (orientation: landscape)": {
          minHeight: "95vh",
          justifyContent: "center",
        },

        // Tablet specific adjustments
        "@media (min-width: 769px) and (max-width: 1024px)": {
          marginLeft: "0%",
          marginTop: "0%",
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
          opacity: {
            xs: 1,
            md: animationComplete ? 1 : 0,
          },
          transform: {
            xs: "none",
            md: animationComplete ? "none" : "translateX(50px)",
          },
          transition: "opacity 0.5s ease, transform 0.5s ease",
          padding: {
            xs: 2,
            sm: 4,
            md: 2,
          },

          "@media screen and (orientation: portrait)": {
            paddingTop: {
              xs: "5vh",
              sm: "8vh",
              md: "10vh",
            },
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 200,
            fontSize: "1.5rem",
            lineHeight: 1.5,
            marginTop: "20vh",

            "@media (min-width: 600px)": {
              fontSize: "2.2rem",
              marginTop: "22vh",
            },

            "@media (min-width: 900px)": {
              fontSize: "2.5rem",
              marginTop: "25vh",
            },

            "@media (min-width: 1200px)": {
              fontSize: "2rem",
            },

            "@media screen and (orientation: landscape)": {
              marginTop: {
                xs: "15vh",
                sm: "18vh",
                md: "20vh",
              },
            },

            "@media screen and (orientation: portrait)": {
              marginTop: {
                xs: "10vh",
                sm: "12vh",
                md: "15vh",
              },
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
            fontSize: "1.75rem",

            "@media (min-width: 600px)": {
              fontSize: "2.25rem",
            },

            "@media (min-width: 900px)": {
              fontSize: "2.5rem",
            },

            "@media (min-width: 1200px)": {
              fontSize: "3.0rem",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              wordBreak: "break-word",
              marginBottom: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            }}
          >
            <span>Outcome Driven </span>
            <span style={{ marginLeft: "12px" }}>Innovation </span>
          </Box>
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 200,
            fontSize: "1rem",
            lineHeight: 1.5,
            textAlign: {
              xs: "center",
              md: "left",
            },
            marginLeft: {
              xs: 0,
              md: "0.5%",
            },

            "@media (min-width: 600px)": {
              fontSize: "1.15rem",
            },

            "@media (min-width: 900px)": {
              fontSize: "1.2rem",
            },

            "@media (min-width: 1200px)": {
              fontSize: "1.3rem",
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
            fontSize: "1rem",
            lineHeight: 1.5,
            marginBottom: {
              xs: 4,
              sm: 5,
              md: 6,
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            marginLeft: {
              xs: 0,
              md: "0.5%",
            },

            "@media (min-width: 600px)": {
              fontSize: "1.15rem",
            },

            "@media (min-width: 900px)": {
              fontSize: "1.2rem",
            },

            "@media (min-width: 1200px)": {
              fontSize: "1.3rem",
            },
          }}
        >
          redefine success.
        </Typography>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: {
              xs: "center",
              md: "flex-start",
            },

            "@media screen and (orientation: portrait)": {
              justifyContent: "center",
            },
          }}
        >
          <Typography
            component="a"
            href="#scheduleaconsultation"
            sx={{
              display: "inline-block",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              padding: "15px 10px",
              borderRadius: "40px",
              background:
                "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
              border: "1px solid transparent",
              zIndex: 3,
              position: "relative",
              transition: "all 0.3s ease",
              textAlign: "center",

              "@media (min-width: 600px)": {
                fontSize: "17px",
                padding: "16px 32px",
              },

              "@media (min-width: 900px)": {
                fontSize: "18px",
                padding: "20px 40px",
              },

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
