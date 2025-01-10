import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <Box
      position="relative"
      zIndex={1}
      sx={{
        color: "#FFFFFF", // White text
        padding: "4rem 3rem",
        lineHeight: 1.8,
        fontFamily: '"Inter", sans-serif',
        "@media (max-width: 1024px)": {
          padding: "3rem 2rem",
        },
        "@media (max-width: 768px)": {
          padding: "2rem 1.5rem",
          marginTop: "-2rem",
        },
      }}
    >
      {/* Gradient Effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "12%",
          background: `radial-gradient(ellipse at bottom, rgba(196, 188, 213, 1) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: -1,
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      />
      <Grid
        container
        justifyContent="space-between"
        sx={{
          flexWrap: "wrap",
          "@media (max-width: 768px)": {
            display: "flex",
          },
          "@media (max-width: 480px)": {
            flexDirection: "column",
          },
        }}
      >
        {/* Company Info */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: "2rem", md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 2,
              "@media (max-width: 768px)": {
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              },
              "@media (max-width: 480px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                height: "24px",
                width: "24px",
                marginLeft: "-15px",
                // marginRight: "10px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "300",
              }}
            >
              Excollo
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="grey.400" gutterBottom>
              C-230, Kaushalya Marg,
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "grey.400",
              }}
            >
              Hanuman Nagar, Vaishali Nagar
              <br /> Jaipur
            </Typography>
            {/* Social Media Icons */}
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                mt: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Link href="#" color="inherit" underline="none">
                <LinkedInIcon />
              </Link>
              <Link href="#" color="inherit" underline="none">
                <YouTubeIcon />
              </Link>
            </Box>
          </Box>
        </Grid>
        {/* Product Links */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            marginBottom: { xs: "2rem", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "300", mb: 1 }}>
            Product
          </Typography>
          <Box>
            {[
              "Find",
              "Customize",
              "Integrate",
              "Use",
              "Developers",
              "Architecture",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                mb={1}
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "#A693C1" },
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
        {/* Company Links */}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "300", mb: 1 }}>
            Company
          </Typography>
          <Box>
            {["Vision", "Mission", "Values", "Team"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                mb={1}
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "#A693C1" },
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Divider
        sx={{
          backgroundColor: "grey.800",
          my: 3,
        }}
      />
      {/* Bottom Footer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          fontSize: "0.875rem",
          color: "grey.400",
          textAlign: { xs: "center", md: "left" },
          width: "100%",
        }}
      >
        <Typography variant="caption">
          © {new Date().getFullYear()} Bhiwal Infotech Pvt Ltd. All Rights
          Reserved.
        </Typography>
        <Box
          sx={{
            mt: { xs: 2, md: 0 },
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Link
            href="#"
            sx={{
              color: "grey.400",
              textDecoration: "none",
              "&:hover": { color: "#A693C1" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            sx={{
              color: "grey.400",
              textDecoration: "none",
              "&:hover": { color: "#A693C1" },
            }}
          >
            Terms of Service
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
