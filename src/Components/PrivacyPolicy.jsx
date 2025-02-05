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
import ExcolloWebsiteLogo from "../assets/logo/ExcolloWebsiteLogo.png";
const PrivacyPolicy = () => {
  return (
    <>
      <CssBaseline />
      {/* Header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#000", color: "white" }}
      >
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
          color: "#fff",
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
        {/* <Typography variant="subtitle1" sx={{ color: "#fff" }}>
          Effective Date: January 10, 2025
        </Typography> */}
      </Box>
      {/* Content Section */}
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "#000",
            color: "#fff",
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

              color: "#fff",
              mb: 2,
            }}
          >
            Introduction
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 3 }}>
            At Excollo, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your information when you visit our
            website or interact with us.
          </Typography>

          {/* Information We Collect */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Information We Collect
          </Typography>
          {/* <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 2 }}>
            We collect various types of information to provide and improve our
            services:
          </Typography> */}
          <ul>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Personal Information:</strong> When you use our contact
                form, we collect your name, email address, phone number, and any
                additional information you provide in your message.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Non-Personal Information:</strong> We may collect
                technical data such as your IP address, browser type, and the
                pages you visit on our site, which helps us understand website
                usage and improve functionality.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Cookies :</strong> We use cookies to enhance your
                browsing experience, track website performance, and analyze
                trends.
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
              color: "#fff",
              mb: 2,
            }}
          >
            How We Use Your Information
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 2 }}>
            We use the information we collect for the following purposes:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                To respond to inquiries and communicate with you regarding our
                services.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                To analyze website usage and improve the user experience.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                To send you updates about our services or promotional materials
                (only if you opt in).
              </Typography>
            </li>
            {/* <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                To monitor and analyze usage patterns to enhance your
                experience.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                To comply with legal obligations and protect the rights and
                safety of our users.
              </Typography>
            </li> */}
          </ul>

          {/* Sharing Your Information */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Sharing Your Information
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 2 }}>
            We do not sell or rent your personal information. However, we may
            share your data with:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                Trusted third-party service providers assisting with website
                analytics or communication.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                Authorities, if required by law or to protect our rights.
              </Typography>
            </li>
            {/* <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of the transaction.
              </Typography>
            </li> */}
          </ul>
          {/* your rights */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Your Rights
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 2 }}>
            <strong>Access and Correction: </strong>You can request access to
            your personal data and update inaccuracies.
          </Typography>
          <ul>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Deletion: </strong>You can request the deletion of your
                personal data, subject to applicable legal obligations.
              </Typography>
            </li>
            <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Opt-Out : </strong> You can unsubscribe from promotional
                communications at any time.
              </Typography>
            </li>
            {/* <li>
              <Typography sx={{ color: "#fff", mb: 1 }}>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of the transaction.
              </Typography>
            </li> */}
          </ul>

          {/* Data Security */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Data Security
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 3 }}>
            We implement reasonable security measures to protect your
            information. However, no system is entirely secure, and we cannot
            guarantee absolute security.
          </Typography>
          {/* third party links */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Third-Party Links
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 3 }}>
            Our website may include links to third-party websites. Excollo is
            not responsible for the privacy practices or content of these sites.
          </Typography>

          {/* Changes to This Policy */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Policy Updates
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff", mb: 3 }}>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated "last revised" date.
          </Typography>

          {/* Contact Us */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#fff",
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#fff" }}>
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
            <ul>
              <li>
                <Typography sx={{ fontSize: "1rem", color: "#fff" }}>
                  <strong>Email :</strong>
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
                </Typography>
              </li>
              <li>
                <Typography sx={{ fontSize: "1rem", color: "#fff" }}>
                  <strong>Phone :</strong>+91-8890204938
                </Typography>
              </li>
            </ul>
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
