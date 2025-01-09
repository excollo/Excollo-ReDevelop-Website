import React from "react";
import {
  Box,
  Stack,
  Container,
  TextField,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Contact/Footer";
import ThreeDE from "../Components/ThreeDE";
const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  maxWidth: "100%",
  background: `linear-gradient(90deg, #0A0D17,#1A1424,#0A0D17,#1A1424
)`,
  padding: theme.spacing(2),
}));
const StyledNavItem = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.grey[300],
  },
}));
const StyledFormContainer = styled(Box)(({ theme }) => ({
  background: "#12101A",
  borderRadius: theme.spacing(4),
  padding: theme.spacing(6),
  border: "1px solid #7E22CE",
  boxShadow: "0px 0px 100px 0px rgba(133, 86, 245, 0.4)",
  margin: "0 auto",
  maxWidth: "1000px",
  maxHeight: "600px",
}));
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(30, 32, 37, 0.6)",
    borderRadius: theme.spacing(1),
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "rgba(30, 32, 37, 0.8)",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.grey[600],
  },
  marginBottom: theme.spacing(2),
}));
const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#8E54F7",
  color: "white",
  border: "2px",
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  borderRadius: theme.spacing(6),
  "&:hover": {
    backgroundColor: "#7E22CE",
  },
}));
const ContactForm = () => {
  const theme = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <Box>
       <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "30%",
                background: `radial-gradient(ellipse at top, rgba(154, 106, 255, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
                zIndex: 1,
                opacity: 1,
              }}
      />
      <NavBar />
      <Container maxWidth="lg" sx={{ paddingTop: theme.spacing(8) }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            color="common.white"
            fontWeight="bold"
            mb={2}
          >
            Get in{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              touch
            </Box>
          </Typography>
          <Typography color="grey.300">
            Reach out, and let's create a universe of possibilities together!
          </Typography>
        </Box>
        <StyledFormContainer>
          <Box display="grid" gridTemplateColumns={{ md: "1fr 1fr" }} gap={2}>
            <Box
              display={{ xs: "none", md: "flex" }}
              alignItems="center"
              justifyContent="center"
              sx={{ marginTop: "-20%"}}
            >
              <ThreeDE />
            </Box>
            <Box>
              <Typography variant="h4" color="common.white" mb={1}>
                Let's connect constellations
              </Typography>
              <Typography color="grey.400" mb={4}>
                Let's align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                  gap={2}
                >
                  <StyledTextField
                    placeholder="First Name"
                    fullWidth
                    variant="outlined"
                  />
                  <StyledTextField
                    placeholder="Last Name"
                    fullWidth
                    variant="outlined"
                  />
                </Box>
                <StyledTextField
                  placeholder="Email"
                  fullWidth
                  variant="outlined"
                />
                <StyledTextField
                  placeholder="Phone Number"
                  fullWidth
                  variant="outlined"
                />
                <StyledTextField
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <SubmitButton type="submit" fullWidth sx={{ background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)", fontSize: "1.2rem", fontWeight: "400" }}>
                  Submit
                </SubmitButton>
              </form>
            </Box>
          </Box>
        </StyledFormContainer>
      </Container>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
export default ContactForm;
