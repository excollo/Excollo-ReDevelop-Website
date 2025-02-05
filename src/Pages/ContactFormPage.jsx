import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  useTheme,
  Dialog,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NavBar from "../Components/NavBar";
import Footer from "../Components/OurServices/Footer";
import ThreeDE from "../Components/ThreeDE";

// Styled Components
const StyledFormContainer = styled(Box)(({ theme }) => ({
  background: "#12101A",
  borderRadius: theme.spacing(4),
  padding: theme.spacing(6),
  border: "1px solid #7E22CE",
  boxShadow: "0px 0px 100px 0px rgba(133, 86, 245, 0.4)",
  margin: "0 auto",
  maxWidth: "95%",
  maxHeight: "fit-content", // Increased to accommodate the new form fields
  "@media (min-width: 320px) and (max-width:480px)": {
    padding: theme.spacing(4),
    maxHeight: "950px",
  },
  // "@media (min-width: 481px) and (max-width:768px)": {
  //   padding: theme.spacing(5),
  //   maxHeight: "950px",
  // },
  // "@media (min-width: 769px) and (max-width:1024px)": {
  //   padding: theme.spacing(6),
  //   maxHeight: "950px",
  // },
  // "@media (min-width: 1025px) and (max-width:1300px)": {
  //   padding: theme.spacing(7),
  //   maxHeight: "950px",
  // },
  // "@media (min-width: 1301px) and (max-width:1600px)": {
  //   padding: theme.spacing(7),
  //   maxHeight: "1000px",
  // },
  // "@media (min-width: 1601px) and (max-width:2600px) and (max-height:1600px)": {
  //   padding: theme.spacing(8),
  //   maxHeight: "1100px",
  // },
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
  fontSize: {
    md: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
    lg: `clamp(0.5rem, calc(0.8rem + 0.7vw), 1.8rem)`,
    xl: `clamp(0.5rem, calc(0.8rem + 0.8vw), 2.1rem)`,
  },
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.grey[400],
  "&.Mui-checked": {
    color: "#8E54F7",
  },
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
  "@media (min-width: 320px) and (max-width:480px)": {
    padding: theme.spacing(1),
    fontSize: "0.8rem",
  },
}));

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    services: [],
    otherService: "",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  // Google Form Field IDs
  const GOOGLE_FORM_IDS = {
    firstName: "entry.1875910263",
    lastName: "entry.654080252",
    phoneNumber: "entry.1490732534",
    email: "entry.321715765",
    services: "entry.1314171994",
    message: "entry.580072994",
  };

  const GOOGLE_FORM_BASE_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdH1-pOT7JDOFpBe_Vd9wNJcu32PqLbKVIfumtIzp5gJ6uUTg/formResponse";

  const serviceOptions = [
    "AI & Automation Solutions",
    "Sales Channel Development",
    "Technical Consultancy",
    "Website or Application Development",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const submitToGoogleForm = () => {
    const formURL = new URL(GOOGLE_FORM_BASE_URL);
    // Add regular fields
    formURL.searchParams.append(GOOGLE_FORM_IDS.firstName, formData.firstName);
    formURL.searchParams.append(GOOGLE_FORM_IDS.lastName, formData.lastName);
    formURL.searchParams.append(GOOGLE_FORM_IDS.email, formData.email);
    formURL.searchParams.append(
      GOOGLE_FORM_IDS.phoneNumber,
      formData.phoneNumber
    );
    formURL.searchParams.append(GOOGLE_FORM_IDS.message, formData.message);
    // Add selected services
    formData.services.forEach((service) => {
      formURL.searchParams.append(GOOGLE_FORM_IDS.services, service);
    });
    // Add other service if specified
    if (formData.otherService) {
      formURL.searchParams.append(
        `${GOOGLE_FORM_IDS.services}.other_option_response`,
        formData.otherService
      );
      formURL.searchParams.append(GOOGLE_FORM_IDS.services, "__other_option__");
    }
    // Create and submit hidden iframe
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.src = formURL.toString();
    // Cleanup and show calendar
    setTimeout(() => {
      document.body.removeChild(iframe);
      setShowCalendar(true);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitToGoogleForm();
  };

  return (
    <Box sx={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      {/* Gradient Overlay */}
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
      <Container
        maxWidth="lg"
        sx={{ paddingTop: theme.spacing(8), position: "relative", zIndex: 2 }}
      >
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            sx={{
              fontSize: {
                xs: `clamp(1.75rem, calc(1.25rem + 2vw), 9rem)`,
                md: `clamp(1.75rem, calc(1.25rem + 2.5vw), 9rem)`,
                lg: `clamp(1.75rem, calc(1.37rem + 3vw), 8rem)`,
                xl: `clamp(2.25rem, calc(2rem + 3vw), 10rem)`,
              },
            }}
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
          <Typography
            color="grey.300"
            sx={{
              fontSize: {
                xs: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
                md: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
                lg: `clamp(0.5rem, calc(0.8rem + 0.7vw), 1.8rem)`,
                xl: `clamp(0.5rem, calc(0.8rem + 0.8vw), 2.1rem)`,
              },
              fontWeight: 200,
              lineHeight: 1.7,
            }}
          >
            Reach out, and let's create a universe of possibilities together!
          </Typography>
        </Box>
        {/* Main Form Container */}
        <StyledFormContainer>
          <Box display="grid" gridTemplateColumns={{ md: "1fr 1fr" }} gap={2}>
            {/* 3D Element Section */}
            <Box
              display={{ xs: "none", md: "flex" }}
              alignItems="center"
              justifyContent="center"
              sx={{
                marginTop: "-40%",
                marginBottom: "-25%",
                position: "relative",
              }}
            >
              <ThreeDE />
            </Box>
            {/* Form Section */}
            <Box>
              <Typography
                variant="h4"
                color="common.white"
                mb={1}
                sx={{
                  fontSize: {
                    md: `clamp(1rem, calc(1rem + 1.5vw), 6rem)`,
                    lg: `clamp(1rem, calc(1rem + 1.68vw), 6rem)`,
                    xl: `clamp(1rem, calc(1rem + 1.80vw), 6rem)`,
                  },
                }}
              >
                Let's connect constellations
              </Typography>
              <Typography
                color="grey.400"
                mb={4}
                sx={{
                  fontSize: {
                    xs: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
                    md: `clamp(0.5rem, calc(0.8rem + 0.5vw), 1.5rem)`,
                    lg: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.8rem)`,
                    xl: `clamp(0.5rem, calc(0.8rem + 0.7vw), 2.1rem)`,
                  },
                  fontWeight: 200,
                  lineHeight: 1.7,
                }}
              >
                Let's align our constellations! Reach out and let the magic of
                collaboration illuminate our skies.
              </Typography>
              <form onSubmit={handleSubmit}>
                {/* Name Fields */}
                <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                  <StyledTextField
                    name="firstName"
                    placeholder="First Name"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <StyledTextField
                    name="lastName"
                    placeholder="Last Name"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Box>
                {/* Contact Fields */}
                <StyledTextField
                  name="email"
                  placeholder="Email"
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  type="email"
                />
                <StyledTextField
                  name="phoneNumber"
                  placeholder="Phone Number"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                {/* Services Selection */}
                <Typography
                  color="grey.300"
                  sx={{
                    fontSize: {
                      xs: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
                      md: `clamp(0.5rem, calc(0.8rem + 0.5vw), 1.5rem)`,
                      lg: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.8rem)`,
                      xl: `clamp(0.5rem, calc(0.8rem + 0.7vw), 2.1rem)`,
                    },
                    fontWeight: 200,
                    lineHeight: 1.7,
                  }}
                >
                  Services Required:
                </Typography>
                <FormGroup
                  sx={{
                    mb: 1,
                    fontSize: {
                      xs: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.5rem)`,
                      md: `clamp(0.5rem, calc(0.8rem + 0.5vw), 1.5rem)`,
                      lg: `clamp(0.5rem, calc(0.8rem + 0.6vw), 1.8rem)`,
                      xl: `clamp(0.5rem, calc(0.8rem + 0.7vw), 2.1rem)`,
                    },
                    fontWeight: 200,
                    lineHeight: 1.7,
                  }}
                >
                  {serviceOptions.map((service) => (
                    <FormControlLabel
                      key={service}
                      control={
                        <StyledCheckbox
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                        />
                      }
                      label={service}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: {
                            xs: "clamp(0.5rem, calc(0.8rem + 0.2vw), 1rem)", // Default/mobile
                            md: `clamp(0.5rem, calc(0.8rem + 0.3vw), 1.5rem)`,
                            lg: `clamp(0.5rem, calc(0.8rem + 0.4vw), 1.8rem)`,
                            xl: `clamp(0.5rem, calc(0.8rem + 0.5vw), 2.1rem)`,
                          },
                          fontWeight: 200,
                          lineHeight: 1.7,
                        },
                      }}
                    />
                  ))}
                  <StyledTextField
                    name="otherService"
                    placeholder="Other Service (Optional)"
                    fullWidth
                    value={formData.otherService}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                {/* Message Field */}
                <StyledTextField
                  name="message"
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {/* Submit Button */}
                <SubmitButton
                  type="submit"
                  fullWidth
                  sx={{
                    background:
                      "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                    fontSize: "1.0rem",
                    fontWeight: "400",
                  }}
                >
                  Submit & Schedule Meeting
                </SubmitButton>
              </form>
            </Box>
          </Box>
        </StyledFormContainer>
      </Container>
      {/* Calendar Dialog */}
      <Dialog
        open={showCalendar}
        onClose={() => setShowCalendar(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <iframe
            src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2aNDl_midhT_0sp4OMzqwX_h8inTRRLY8QlOToNJjU1dFkdKrLBoHp9BSTBLZ0iaDCTpCwt0cY"
            style={{ width: "100%", height: "600px", border: "none" }}
            title="Schedule Appointment"
          />
        </DialogContent>
      </Dialog>
      {/* Footer */}
      <Box sx={{ position: "relative", zIndex: 1, marginTop: 5 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactForm;
