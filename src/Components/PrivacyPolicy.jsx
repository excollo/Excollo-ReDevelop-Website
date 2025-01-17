import React from "react";
import {
  Typography,
  Container,
  Box,
  Link,
  CssBaseline,
  AppBar,
  Toolbar,
} from "@mui/material";
const PrivacyPolicy = () => {
  return (
    <>
      <CssBaseline />
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "#0D1117" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
          >
            Excollo
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          padding: "60px 20px",
          marginBottom: "40px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#0D1117",
            mb: 2,
          }}
        >
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#666" }}>
          Effective Date: January 10, 2025
        </Typography>
      </Box>
      {/* Content Section */}
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "40px 20px",
            borderRadius: "10px",
            marginBottom: "40px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Introduction */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#0D1117",
              mb: 2,
            }}
          >
            Introduction
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 3 }}>
            At Exccollo, your privacy is critically important to us. This policy
            explains how we collect, use, and protect your personal information.
          </Typography>
          {/* Information We Collect */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#0D1117",
              mb: 2,
            }}
          >
            Information We Collect
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 2 }}>
            We collect the following types of information:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                Personal Information: Name, email address, phone number, etc.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                Usage Data: Information about how you interact with our website.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                Cookies: Data collected through cookies and similar
                technologies.
              </Typography>
            </li>
          </ul>
          {/* How We Use Your Information */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#0D1117",
              mb: 2,
            }}
          >
            How We Use Your Information
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 2 }}>
            The information we collect is used to:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                Provide and improve our services.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                Communicate updates and offers.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                Enhance your user experience.
              </Typography>
            </li>
          </ul>
          {/* Your Rights */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#0D1117",
              mb: 2,
            }}
          >
            Your Rights
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 3 }}>
            You have the right to access, correct, or delete your personal data.
            Contact us if you have concerns about your data usage.
          </Typography>
          {/* Contact Us */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#0D1117",
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555" }}>
            If you have questions, please email us at{" "}
            <Link
              href="mailto:info@exccollo.com"
              sx={{
                color: "#0D6EFD",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              info@exccollo.com
            </Link>
            .
          </Typography>
        </Box>
      </Container>
      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#0D1117",
          color: "#FFFFFF",
          padding: "20px 0",
          fontSize: "0.9rem",
        }}
      >
        <Typography>&copy; 2025 Exccollo. All rights reserved.</Typography>
      </Box>
    </>
  );
};
export default PrivacyPolicy;
