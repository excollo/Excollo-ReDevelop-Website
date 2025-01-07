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
        color: "#ffffff", // White text
        padding: "4rem 3rem",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Grid container justifyContent="space-between">
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, ml: 8 }}>
            <Box
              component="span"
              sx={{
                height: "24px",
                width: "24px",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="h6"
              position="relative"
              zIndex={1}
              sx={{
                fontWeight: "300",
              }}
            >
              Excollo
            </Typography>
          </Box>
          <Box sx={{ ml: 12 }}>
            <Typography
              variant="body2"
              color="grey.400"
              gutterBottom
              position="relative"
              zIndex={1}
            >
              C-230, Kaushalya Marg,
            </Typography>
            <Typography
              variant="body2"
              position="relative"
              zIndex={1}
              sx={{
                color: "grey.400",
              }}
            >
              Hanuman Nagar, Vaishali Nagar
              <br /> Jaipur
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: "1rem", mt: 2 }}>
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
        <Grid ml={40}>
          <Typography
            variant="body1"
            position="relative"
            zIndex={1}
            sx={{ fontWeight: "300", mb: 1, zIndex: 0 }}
          >
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
                position="relative"
                zIndex={1}
                mb={1}
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Company Links */}
        <Grid item md={2}>
          <Typography
            variant="body1"
            position="relative"
            zIndex={1}
            sx={{ fontWeight: "300", mb: 1 }}
          >
            Company
          </Typography>
          <Box>
            {["Vision", "Mission", "Values", "Team"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                mb={1}
                position="relative"
                zIndex={1}
                sx={{
                  color: "grey.400",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "grey.800", my: 3, mx: 11 }} />

      {/* Bottom Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: "0.875rem",
          color: "grey.500",
          gap: "25rem",
        }}
      >
        <Typography variant="caption" position="relative" zIndex={1}>
          © {new Date().getFullYear()} Bhiwal Infotech Pvt Ltd. All Rights
          Reserved.
        </Typography>

        <Box>
          <Link
            href="#"
            position="relative"
            zIndex={1}
            sx={{
              color: "grey.400",
              mx: 1,
              "&:hover": { color: "white" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            position="relative"
            zIndex={1}
            sx={{
              color: "grey.400",
              mx: 1,
              "&:hover": { color: "white" },
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
