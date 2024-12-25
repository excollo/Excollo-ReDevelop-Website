import React from "react";
import { Box, Typography } from "@mui/material";

const HeroPageSection1 = () => {
  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        textAlign: "left",
        justifyContent: "center",
        marginLeft: "12%",
        px: { xs: 2, sm: 4 },
        gap: "10%",
        position: "relative",
        "--gradient-start": "#ff7e5f", // Custom gradient start color for this section
        "--gradient-end": "#feb47b", // Custom gradient end color for this section
      }}
      className="gradient-background"
    >
      <Box
        className="hero-content"
        sx={{ maxWidth: "100%", opacity: 0, transform: "translateX(50px)" }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 200,
            fontSize: { xs: "2rem", sm: "3rem" },
            lineHeight: 1.2,
            mt: 27,
          }}
        >
          Shaping the Future With
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", sm: "3rem" },
            lineHeight: 1.2,
          }}
        >
          <Box
            component="span"
            fontWeight="bold"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Outcome Driven Innovation
          </Box>
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 200,
            fontSize: { xs: "2rem", sm: "3rem" },
            lineHeight: 1.2,
            mb: 3,
          }}
        >
          Software Solution
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 200,
            fontSize: { xs: "1.3rem" },
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          Unlock the potential of AI to transform your business and
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 200,
            fontSize: { xs: "1.3rem" },
            lineHeight: 1.2,
            mb: 8,
          }}
        >
          redefine success.
        </Typography>
        <Typography
          component="a"
          href="#whatwedo"
          sx={{
            display: "inline-block", // Ensures the button behaves like a block
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "16px",
            border: "1px solid transparent",
            padding: "20px 40px",
            borderRadius: "40px",
            background:
              "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%);",
              color: "#ffffff",
            },
          }}
        >
          Schedule a Consultation
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroPageSection1;