import React from "react";
import { Box, Typography } from "@mui/material";
import { TitleCarousel } from "./Carousel";
import { DescriptionCarousel } from "./Carousel";
import { ScrollProvider } from "./ScrollProvider";

const HeroPageSection3 = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        height: "auto",
        
        minHeight: "110vh",

        "@media (max-width: 1024px)": {
          minHeight: "120vh",
        },

        "@media (max-width: 768px)": {
          minHeight: "180vh",
        },

        "@media (max-width: 480px)": {
          minHeight: "180vh",
        },

        "@media (max-width: 320px) and (max-height: 725px)": {
          minHeight: "210vh",
        },

        "@media screen and (orientation: landscape) and (max-height: 600px)": {
          minHeight: "200vh",
          marginTop: "4rem",
        },

        "@media screen and (orientation: portrait)": {
          minHeight: "180vh",
          marginTop: "6rem",
        }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "2%",
          left: "10%",
          right: "10%",
          bottom: "13%",
          background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 0,
          pointerEvents: "none",
          transformOrigin: "center center",

          "@media (max-width: 1024px)": {
            top: "10%",
            bottom: "0",
          },

          "@media (max-width: 768px)": {
            background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 0%)`,
          },

          "@media screen and (orientation: landscape) and (max-height: 600px)": {
            top: "5%",
            bottom: "5%",
          },

          "@media screen and (orientation: portrait)": {
            top: "5%",
            bottom: "10%",
          }
        }}
      />

      <Typography
        variant="h2"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          position: "relative",
          top: "20px",
          background: "black",

          "@media (max-width: 768px)": {
            fontSize: "h3.fontSize",
          },

          "@media (max-width: 480px)": {
            fontSize: "h4.fontSize",
          },

          "@media screen and (orientation: landscape) and (max-height: 600px)": {
            fontSize: "h3.fontSize",
            top: "10px",
          }
        }}
      >
        Our{" "}
        <Box
          component="span"
          sx={{
            fontWeight: "bold",
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

            "@media (max-width: 768px)": {
              marginTop: "3rem",
            },

            "@media screen and (orientation: landscape) and (max-height: 600px)": {
              marginTop: "2rem",
            },

            "@media screen and (orientation: portrait)": {
              marginTop: "4rem",
            }
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

              "@media screen and (orientation: landscape) and (max-height: 600px)": {
                position: "relative",
                marginBottom: "2rem",
              },

              "@media screen and (orientation: portrait)": {
                position: "relative",
                marginBottom: "3rem",
              }
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

              "@media screen and (orientation: landscape) and (max-height: 600px)": {
                position: "relative",
              },

              "@media screen and (orientation: portrait)": {
                // position: "relative",
              }
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