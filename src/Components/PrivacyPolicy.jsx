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
import ExcolloWebsiteLogo from "../assets/logo/ExcolloWebsiteLogo.png"
const PrivacyPolicy = () => {
  return (
    <>
      <CssBaseline />
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="auto"
            sx={{ position: "relative", zIndex: 0 }}
          >
            <Link to="/">
              <img src={ExcolloWebsiteLogo} alt="excollo" loading="lazy" />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#000",
          textAlign: "center",
          padding: "60px 20px",
          marginBottom: "40px",
          borderBottom: "1px solid #ddd",
          color: "#fff",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#fff",
            mb: 2,
          }}
        >
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#fff" }}>
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
            At Excollo, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            outlines the types of information we collect, how we use it, and the
            measures we take to safeguard your data. By using our services, you
            agree to the terms outlined in this policy.
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
            We collect various types of information to provide and improve our
            services:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Personal Information:</strong> Name, email address,
                phone number, billing address, and other details you provide
                when registering or making a purchase.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including IP address, browser type, pages
                visited, and time spent on the site.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar technologies to enhance your experience,
                analyze trends, and administer the website.
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
            We use the information we collect for the following purposes:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                To provide, maintain, and improve our services.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                To process transactions and send you related information,
                including confirmations and invoices.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                To communicate with you about updates, promotions, and customer
                support.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                To monitor and analyze usage patterns to enhance your
                experience.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                To comply with legal obligations and protect the rights and
                safety of our users.
              </Typography>
            </li>
          </ul>

          {/* Sharing Your Information */}
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
            Sharing Your Information
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 2 }}>
            We do not sell or rent your personal information to third parties.
            However, we may share your data in the following circumstances:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Service Providers:</strong> We may share information
                with trusted third-party vendors who assist us in operating our
                website, conducting business, or providing services to you.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of the transaction.
              </Typography>
            </li>
          </ul>

          {/* Data Security */}
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
            Data Security
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 3 }}>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </Typography>

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
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 2 }}>
            You have the following rights regarding your personal information:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Correction:</strong> Update or correct inaccurate or
                incomplete information.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Deletion:</strong> Request the deletion of your personal
                data under certain conditions.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#333", mb: 1 }}>
                <strong>Opt-Out:</strong> Opt-out of receiving promotional
                communications from us.
              </Typography>
            </li>
          </ul>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 3 }}>
            To exercise these rights, please contact us at the email address
            provided below.
          </Typography>

          {/* Changes to This Policy */}
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
            Changes to This Policy
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#555", mb: 3 }}>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the revised policy will be
            effective immediately upon posting. We encourage you to review this
            policy periodically to stay informed about how we are protecting
            your information.
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
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <Link
              href="mailto:info@excollo.com"
              sx={{
                color: "#0D6EFD",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              info@excollo.com
            </Link>
            .
          </Typography>
        </Box>
      </Container>
      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#000",
          color: "#FFFFFF",
          padding: "20px 0",
          fontSize: "0.9rem",
        }}
      >
        <Typography>&copy; 2025 Excollo. All rights reserved.</Typography>
      </Box>
    </>
  );
};
export default PrivacyPolicy;
