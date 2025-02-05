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
          <Typography
            sx={{
              fontSize: {
                xs: `clamp(1rem, calc(1.25rem + 1.5vw), 9rem)`,
                md: `clamp(1rem, calc(1.25rem + 1.5vw), 9rem)`,
                lg: `clamp(1rem, calc(1.37rem + 2vw), 8rem)`,
                xl: `clamp(1.5rem, calc(2rem + 2vw), 10rem)`,
              },
              fontFamily: '"Inter", sans-serif',
              fontWeight: "600",
            }}
          >
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
            <Box
              sx={{
                position: "fixed",
                top: "55%",
                left: "50%",
                width: "80%",
                height: "100%",
                background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.22) 0%, rgba(0, 0, 0, 0) 60%)`,
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            />
            {/* Introduction */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Introduction
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              sx={{
                marginBottom: 3,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              Welcome to the Excollo website. By accessing or using our site,
              you agree to these Terms of Service. If you do not agree, please
              refrain from using the website.
            </Typography>

            {/* Website Use */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Website Use
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              Purpose: This website is for informational purposes only,
              showcasing Excollo's services and allowing prospective clients to
              connect with us.
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              Prohibited Activities: You agree not to:
            </Typography>
            <List
              sx={{
                color: "white",
                paddingLeft: 2,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="Use the website for any unlawful purpose." />
              </ListItem>
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="Attempt to access restricted areas or disrupt website functionality." />
              </ListItem>
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="Submit false or misleading information through our contact form." />
              </ListItem>
            </List>

            {/* Intellectual Property */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Intellectual Property
            </Typography>
            <List
              sx={{
                color: "white",
                paddingLeft: 2,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="All content on this website, including text, images, logos, and graphics, is the property of Excollo and is protected by intellectual property laws." />
              </ListItem>
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="You may not reproduce, distribute, or modify website content without prior written consent from Excollo." />
              </ListItem>
            </List>

            {/* Disclaimer */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Disclaimer
            </Typography>
            <List
              sx={{
                color: "white",
                paddingLeft: 2,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="No Guarantees: While we strive to keep our website content accurate and up-to-date, we make no guarantees regarding its completeness or accuracy." />
              </ListItem>
              <ListItem
                sx={{
                  fontSize: {
                    md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                    lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                    xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 200,
                }}
              >
                <ListItemText primary="Third-Party Links: Our website may contain links to external sites. Excollo is not responsible for the content or functionality of third-party websites." />
              </ListItem>
            </List>

            {/* Limitation of Liability */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Limitation of Liability
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              sx={{
                marginBottom: 3,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              To the maximum extent permitted by law, Excollo will not be liable
              for any indirect or consequential damages resulting from the use
              or inability to use our website.
            </Typography>

            {/* Changes to These Terms */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Changes to These Terms
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              sx={{
                marginBottom: 3,
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              Excollo reserves the right to modify these Terms of Service at any
              time. Updated terms will be posted on this page.
            </Typography>

            {/* Governing Law */}
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#fff"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xs: "1.5rem",
                  md: `clamp(1rem, calc(0.5rem + 1vw), 9rem)`,
                  lg: `clamp(1rem, calc(1.25rem + 2vw), 9rem)`,
                  xl: `clamp(1rem, calc(1rem + 2vw), 8rem)`,
                },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Governing Law
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: `clamp(0.2rem, calc(0.5rem + 0.6vw), 1rem)`,
                  lg: `clamp(0.2rem, calc(0.5rem + 0.7vw), 1.2rem)`,
                  xl: `clamp(0.2rem, calc(0.5rem + 0.8vw), 1.5rem)`,
                },
                fontFamily: '"Inter", sans-serif',
                fontWeight: 200,
              }}
              color="#fff"
            >
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
