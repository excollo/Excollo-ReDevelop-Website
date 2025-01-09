import React, { useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import HowWeWork from "./HowWeWork";
import NavBar from "../../Components/NavBar";
import ThreeDE from "../../Components/ThreeDE";
import Footer from "../../Components/Footer";
import Excollo3D from "./Excollo3D";

const ContentSection = styled("section")(({ theme }) => ({
  display: "flex",
  width: "85%",
  margin: "auto",
  padding: "100px 0 0px 0",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: "90%",
    padding: "50px 0 0px 0",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    padding: "20px 0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "10px 10px",
  },
}));

const TitleContainer = styled(motion.div)(({ theme }) => ({
  flex: "0 0 480px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  padding: 10,
  opacity: 1,
  "& h2": {
    textAlign: "left",
    padding: "55px",
    fontSize: "4rem",
    fontFamily: '"Inter", sans-serif',
    fontWeight: "bold",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    letterSpacing: "-0.00833em",
    lineHeight: 1.2,
    "& br": {
      display: "block",
    },
  },
  [theme.breakpoints.down("lg")]: {
    flex: "0 0 400px",
    "& h2": {
      fontSize: "3.5rem",
      // padding: "40px",
      paddingBottom: "-50px",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "-300px",
    "& h2": {
      fontSize: "2.5rem",
      // padding: "20px",
      paddingBottom: "-50px",
      textAlign: "center",
      "& br": {
        display: "none",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "-275px",
    "& h2": {
      fontSize: "2.0rem",
    },
  },
}));

const Card = styled(motion.div)(
  ({ theme, direction = "90deg", isMobile = false }) => ({
    width: "50%",
    height: "350px",
    background: `linear-gradient(${direction}, rgba(142, 84, 247, 0.5), rgba(51, 46, 108, 0.8), rgba(0, 0, 0, 1))`,
    borderRadius: "60px",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    border: "10px solid #090101",

    // Create a gradient border effect that blends with background
    "&::before": {
      content: '""',
      position: "absolute",
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      borderRadius: "61px", // Slightly larger to account for the blur
      background: `linear-gradient(${direction}, rgba(142, 84, 247, 0.3), rgba(51, 46, 108, 0.4), rgba(0, 0, 0, 0.5))`,
      zIndex: -1,
      filter: "blur(1px)", // Add slight blur for better blending
    },

    "& p": {
      fontSize: "1.8rem",
      fontFamily: '"Inter", sans-serif',
      color: "#D1D1E2",
      lineHeight: 1.4,
      textAlign: "left",
      letterSpacing: "-0.00833em",
      padding: 20,
      margin: 15,
    },

    [theme.breakpoints.down("lg")]: {
      height: "200px",
      "& p": {
        fontSize: "1.6rem",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "auto",
      minHeight: isMobile ? "auto" : "250px",
      marginBottom: "20px",
      background: isMobile
        ? "none"
        : `linear-gradient(${direction}, rgba(142, 84, 247, 0.5), rgba(51, 46, 108, 0.8), rgba(0, 0, 0, 1))`,
      padding: isMobile ? "0" : "30px",
      "&::before": {
        display: isMobile ? "none" : "block", // Hide border effect on mobile if no background
      },
      "& p": {
        fontSize: "1.4rem",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
      },
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "-30px",
      borderRadius: "30px",
      padding: isMobile ? "0" : "20px",
      "&::before": {
        borderRadius: "31px", // Match the smaller border radius
      },
      "& p": {
        fontSize: "1.2rem",
        padding: "10px",
        margin: "5px",
      },
    },
  })
);

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-60px",
      }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const VisionSection = () => (
    <ContentSection>
      <TitleContainer className="animate">
        <h2>Our {!isMobile && <br />} Vision</h2>
      </TitleContainer>
      <Box
                          sx={{
                            position: "absolute",
                            top: "70%",
                            left: "0",
                            right: "80%",
                            bottom: 0,
                            height: "90%",
                            background: `radial-gradient(ellipse at left, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`,
                            zIndex: 1,
                            pointerEvents: "none",
                            transformOrigin: "center center",
                          }}
    />
      <Card className="animate" isMobile={isMobile}>
        <p>
          To empower businesses with future-ready technology that drives
          measurable results and lasting partnerships.
        </p>
      </Card>
    </ContentSection>
  );

  const MissionSection = () => {
    if (isMobile) {
      return (
        <ContentSection>
          <TitleContainer className="animate">
            <h2>Our Mission</h2>
          </TitleContainer>
          <Card className="animate" isMobile={true}>
            <p>
              To bridge the gap between technology and business objectives by
              delivering cutting-edge solutions that guarantee outcomes.
            </p>
          </Card>
        </ContentSection>
      );
    }

    return (
      <ContentSection>
        <Card direction="270deg" className="animate">
          <p>
            To bridge the gap between technology and business objectives by
            delivering cutting-edge solutions that guarantee outcomes.
          </p>
        </Card>
        <TitleContainer className="animate">
          <h2>
            Our <br /> Mission
          </h2>
        </TitleContainer>
      </ContentSection>
    );
  };

  const PhilosophySection = () => (
    <ContentSection>
      <TitleContainer className="animate">
        <h2>Our {!isMobile && <br />} Philosophy</h2>
      </TitleContainer>
      <Card className="animate" isMobile={isMobile}>
        <p>
          At Excollo, we commit to results, not just solutions. Our "Outcome as
          a Service" (OaaS) approach ensures every strategy, technology, and
          action is aligned to achieve measurable success for our clients.
        </p>
      </Card>
    </ContentSection>
  );

  return (
    <Box
      sx={{
        bgcolor: "#000",
        minHeight: "100vh",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: "30%",
          background: `radial-gradient(ellipse at top, rgba(154, 106, 255, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 1,
        }}
      />
      <NavBar />
      <Box
        sx={{
          maxWidth: { xs: "95%", sm: "90%", md: "85%" },
          margin: { xs: "20px auto", md: "50px auto" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "auto", md: "50vh" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mt: { xs: 0, md: "-15%" },
            mb: { xs: 0, md: "-15%" },
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                fontFamily: '"Inter", sans-serif',
                fontWeight: "600",
                background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                ml: { xs: 0, md: "2%", lg: "6%" },
                // mt: { xs: 3, md: 25 },
              }}
            >
              <span className="highlight">About Us</span>
            </Typography>

            <Typography
              sx={{
                maxWidth: { xs: "100%", md: "70%" },
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.2rem",
                  md: "1.3rem",
                  lg: "1.3rem",
                },
                fontWeight: 200,
                lineHeight: 1.5,
                textAlign: { xs: "center", md: "left" },
                ml: { xs: 0, md: "2%", lg: "6%" },
                px: { xs: 2, md: 0 },
                mt: { xs: 3, md: 5 },
              }}
            >
              Excollo is future-ready, offering unparalleled expertise to
              enterprises seeking to transform their digital stack. By
              leveraging cutting-edge AI, automation, and innovative
              consultancy, we identify opportunities, close gaps, and implement
              strategies that empower businesses to achieve scalable success.
            </Typography>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                width: { sm: "60%", md: "45%" },
                mr: { md: "2%", lg: "6%" },
              }}
            >
              <ThreeDE />
            </Box>
          )}
        </Box>
      </Box>

      <VisionSection />
      <MissionSection />
      <PhilosophySection />
      <HowWeWork />
      <Excollo3D />
      <Footer />
    </Box>
  );
};

export default AboutUs;