import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  Toolbar,
  ListItemText,
  Paper,
} from "@mui/material";
import ExcolloWebsiteLogo from "../assets/logo/ExcolloWebsiteLogo.png";

const TermsOfService = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "white", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ backgroundColor: "#000", color: "white", padding: "20px 0" }}>
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
      </Box>

      {/* Title Section */}
      <Box
        sx={{
          background: "#000",
          color: "white",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Terms of Service
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ backgroundColor: "#000" }}>
        <Container sx={{ marginTop: 4 }}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#000",
            }}
          >
            {/* Introduction */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Introduction
            </Typography>
            <Typography variant="body1" color="#fff" sx={{ marginBottom: 3 }}>
              Welcome to the Excollo website. By accessing or using our site,
              you agree to these Terms of Service. If you do not agree, please
              refrain from using the website.
            </Typography>

            {/* Website Use */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Website Use
            </Typography>
            <Typography variant="body1" color="#fff" sx={{ marginBottom: 2 }}>
              Purpose: This website is for informational purposes only,
              showcasing Excollo's services and allowing prospective clients to
              connect with us.
            </Typography>
            <Typography variant="body1" color="#fff" sx={{ marginBottom: 2 }}>
              Prohibited Activities: You agree not to:
            </Typography>
            <List sx={{ color: "white", paddingLeft: 2 }}>
              <ListItem>
                <ListItemText primary="Use the website for any unlawful purpose." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Attempt to access restricted areas or disrupt website functionality." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Submit false or misleading information through our contact form." />
              </ListItem>
            </List>

            {/* Intellectual Property */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Intellectual Property
            </Typography>
            <List sx={{ color: "white", paddingLeft: 2 }}>
              <ListItem>
                <ListItemText primary="All content on this website, including text, images, logos, and graphics, is the property of Excollo and is protected by intellectual property laws." />
              </ListItem>
              <ListItem>
                <ListItemText primary="You may not reproduce, distribute, or modify website content without prior written consent from Excollo." />
              </ListItem>
            </List>

            {/* Disclaimer */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Disclaimer
            </Typography>
            <List sx={{ color: "white", paddingLeft: 2 }}>
              <ListItem>
                <ListItemText primary="No Guarantees: While we strive to keep our website content accurate and up-to-date, we make no guarantees regarding its completeness or accuracy." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Third-Party Links: Our website may contain links to external sites. Excollo is not responsible for the content or functionality of third-party websites." />
              </ListItem>
            </List>

            {/* Limitation of Liability */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Limitation of Liability
            </Typography>
            <Typography variant="body1" color="#fff" sx={{ marginBottom: 3 }}>
              To the maximum extent permitted by law, Excollo will not be liable
              for any indirect or consequential damages resulting from the use
              or inability to use our website.
            </Typography>

            {/* Changes to These Terms */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Changes to These Terms
            </Typography>
            <Typography variant="body1" color="#fff" sx={{ marginBottom: 3 }}>
              Excollo reserves the right to modify these Terms of Service at any
              time. Updated terms will be posted on this page.
            </Typography>

            {/* Governing Law */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{ marginBottom: 2 }}
            >
              Governing Law
            </Typography>
            <Typography variant="body1" color="#fff">
              These terms are governed by the laws of India. Any disputes will
              be subject to the exclusive jurisdiction of the courts in [City,
              State].
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "white",
          textAlign: "center",
          padding: "20px 0",
          marginTop: 4,
        }}
      >
        <Container>
          <Typography variant="body2">
            &copy; 2025 Exccollo. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default TermsOfService;
