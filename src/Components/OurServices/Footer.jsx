import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LaunchIcon from "@mui/icons-material/Launch";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      position="relative"
      zIndex={1}
      sx={{
        color: "#ffffff",
        padding: {
          xl: "4rem 0rem",
          lg: "3rem 0rem",
          md: "2.5rem 0rem",
          sm: "2rem 0rem",
          xs: "1.5rem 0rem",
        },
        width: "100%",
        margin: "auto",
        overflow: "hidden",
        lineHeight: 1.8,
        height: "auto",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 5 }}
        sx={{
          paddingTop: { xs: 1, sm: 2, md: 5 },
          paddingLeft: { xs: 1, sm: 2 },
          marginLeft: { xs: -3, sm: 0, md: 5, lg: 10 },
          flexWrap: "wrap",
          "@media (max-width: 320px)": {
            paddingLeft: 0,
            marginLeft: 0,
          },
        }}
      >
        {/* Excollo Logo & Tagline */}
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            Excollo
          </Typography>
          <Typography
            variant="body2"
            color="grey.400"
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
            gutterBottom
          >
            AI Driven. Outcome Focused.
          </Typography>
          <Link
            href="#"
            sx={{
              color: "grey.400",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textDecoration: "none",
              "&:hover": { color: "#a693c1" },
              justifyContent: { xs: "center", md: "flex-start" },
              mt: 1,
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Learn More <LaunchIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
          </Link>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          sx={{
            textAlign: { xs: "center", md: "left" },
            ml: { md: -10, xs: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {["Home", "Services", "About Us", "Contact Us"].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: "grey.400",
                  textDecoration: "none",
                  "&:hover": { color: "#a693c1" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Us */}
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <EmailIcon
                sx={{ fontSize: { xs: 18, sm: 20 }, color: "grey.400" }}
              />
              <Link
                href="mailto:info@excollo.com"
                sx={{
                  color: "grey.400",
                  textDecoration: "none",
                  "&:hover": { color: "#a693c1" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                info@excollo.com
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <PhoneIcon
                sx={{ fontSize: { xs: 18, sm: 20 }, color: "grey.400" }}
              />
              <Link
                href="tel:+918890204938"
                sx={{
                  color: "grey.400",
                  textDecoration: "none",
                  "&:hover": { color: "#a693c1" },
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                +91 8890204938
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-start" },
                maxWidth: { xs: "250px", sm: "300px", md: "100%" },
                margin: { xs: "0 auto", md: 0 },
              }}
            >
              <LocationOnIcon
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  color: "grey.400",
                  mt: 0.5,
                }}
              />
              <Typography
                variant="body2"
                color="grey.400"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                C-230 Bharat Marg, Hanuman Nagar, Vaishali, Jaipur, Rajasthan -
                302021
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Stay Connected */}
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          sx={{
            textAlign: { xs: "center", md: "left" },
            marginLeft: { md: 5, xs: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Stay Connected
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Link
              href="#"
              sx={{
                color: "grey.400",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                textDecoration: "none",
                "&:hover": { color: "#a693c1" },
                justifyContent: { xs: "center", md: "flex-start" },
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <LinkedInIcon sx={{ fontSize: { xs: 18, sm: 20 } }} /> LinkedIn
            </Link>
            <Link
              href="#"
              sx={{
                color: "grey.400",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                textDecoration: "none",
                "&:hover": { color: "#a693c1" },
                justifyContent: { xs: "center", md: "flex-start" },
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Schedule a Consultation{" "}
              <LaunchIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
            </Link>
            <Link
              href="#"
              sx={{
                color: "grey.400",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                textDecoration: "none",
                "&:hover": { color: "#a693c1" },
                justifyContent: { xs: "center", md: "flex-start" },
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Explore our Services{" "}
              <LaunchIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{
          backgroundColor: "grey.800",
          my: 3,
          width: "100%",
          mx: "auto",
        }}
      />

      {/* Copyright */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          color: "grey.400",
          px: { xs: 2, sm: 3 },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          © {new Date().getFullYear()} Bhiwal Infotech Pvt. Ltd. All Rights
          Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            mr: { md: 6, xs: 6 },
          }}
        >
          <Link
            variant="caption"
            href="#"
            sx={{
              color: "grey.400",
              textDecoration: "none",
              "&:hover": { color: "#a693c1" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            variant="caption"
            href="#"
            sx={{
              color: "grey.400",
              textDecoration: "none",
              "&:hover": { color: "#a693c1" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
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
