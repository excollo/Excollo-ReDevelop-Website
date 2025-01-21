import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
const TermsOfService = () => {
  return (
    <Box sx={{ backgroundColor: "#F4F5F7", minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ backgroundColor: "#1E293B", padding: "20px 0" }}>
        <Container>
          <Typography variant="h4" color="white" textAlign="center">
            Exccollo
          </Typography>
        </Container>
      </Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(120deg, #1E293B, #64748B)",
          color: "white",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Terms of Service
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Last Updated: January 10, 2025
          </Typography>
        </Container>
      </Box>
      {/* Content Section */}
      <Container sx={{ marginTop: 4 }}>
        <Paper
          sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "white",
          }}
        >
          {/* Introduction */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1E293B"
            sx={{ marginBottom: 2 }}
          >
            Introduction
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 3 }}
          >
            Welcome to Exccollo! By using our services, you agree to the
            following terms and conditions. Please read them carefully.
          </Typography>
          {/* Usage Terms */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1E293B"
            sx={{ marginBottom: 2 }}
          >
            Usage Terms
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 2 }}
          >
            By accessing our platform, you agree to:
          </Typography>
          <List sx={{ paddingLeft: 2 }}>
            <ListItem>
              <ListItemText primary="Comply with all applicable laws and regulations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Use our services only for lawful purposes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Refrain from violating the rights of others." />
            </ListItem>
          </List>
          {/* Limitation of Liability */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1E293B"
            sx={{ marginBottom: 2 }}
          >
            Limitation of Liability
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 3 }}
          >
            Exccollo is not liable for any damages arising from your use of our
            services. This includes, but is not limited to, direct, indirect, or
            consequential damages.
          </Typography>
          {/* Intellectual Property */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1E293B"
            sx={{ marginBottom: 2 }}
          >
            Intellectual Property
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ marginBottom: 3 }}
          >
            All content, trademarks, and data on this platform are the property
            of Exccollo. Unauthorized use is strictly prohibited.
          </Typography>
          {/* Contact Us */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1E293B"
            sx={{ marginBottom: 2 }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary">
            If you have any questions about these terms, please reach out to us
            at{" "}
            <Link href="mailto:info@exccollo.com" color="primary">
              info@exccollo.com
            </Link>
            .
          </Typography>
        </Paper>
      </Container>
      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#1E293B",
          color: "white",
          textAlign: "center",
          padding: "20px 0",
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
