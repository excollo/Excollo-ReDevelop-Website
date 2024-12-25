import React from "react";
import { Box, Typography } from "@mui/material";

const HeroPageSection6 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Align children horizontally
        alignItems: "center", // Vertically align content and button
        justifyContent: "flex-start", // Align everything to the left
        textAlign: "left", // Ensure text content is left-aligned
        marginLeft: "10.5%", // Added marginLeft
        color: "#fff",
        gap: "10rem", // Adds spacing between content and button
        paddingBottom: "5rem", // Add padding to the bottom
      }}
    >
      {/* Content Section */}
      <Box sx={{ flex: "1", maxWidth: "600px" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "400", marginBottom: "1rem" }}
        >
          Ready for your <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            digital transformation?
          </Box>
        </Typography>
      </Box>

      {/* Button Section */}
      <Box>
        <Typography
          component="a"
          href="#talktous"
          sx={{
            display: "inline-block", // Ensures the button behaves like a block
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "16px",
            border: "1px solid transparent",
            padding: "20px 80px",
            borderRadius: "40px",
            background:
              "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%);",
              color: "#ffffff",
            },
          }}
        >
          Talk to Us
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroPageSection6;
