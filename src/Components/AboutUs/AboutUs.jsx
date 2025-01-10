import React, { useEffect, useState , useCallback} from "react";
import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
  Button,
  Fade,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
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

const TitleContainer = styled("div")(({ theme }) => ({
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
      paddingBottom: "-50px",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "-300px",
    "& h2": {
      fontSize: "2.5rem",
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

const Card = styled("div")(
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

    "&::before": {
      content: '""',
      position: "absolute",
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      borderRadius: "61px",
      background: `linear-gradient(${direction}, rgba(142, 84, 247, 0.3), rgba(51, 46, 108, 0.4), rgba(0, 0, 0, 0.5))`,
      zIndex: -1,
      filter: "blur(1px)",
    },

    "& p": {
      fontSize: "1.8rem",
      alignItems: "center",
      justifyContent: "center",
      alignText: "center",
      fontFamily: '"Inter", sans-serif',
      color: "#D1D1E2",
      lineHeight: 1.6,
      fontWeight: 200,
      textAlign: "left",
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
        display: isMobile ? "none" : "block",
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
        borderRadius: "31px",
      },
      "& p": {
        fontSize: "1.2rem",
        padding: "10px",
        margin: "5px",
      },
    },

    "@media (min-width: 769px) and (max-width:1024px) ": {
      width: "60%",
      height: "450px",
      "& p": {
        fontSize: "1.8rem",
      },
    },
  })
);

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const VisionSection = useCallback(
    () => (
      <div>
        <ContentSection>
          <TitleContainer>
            <h2>Our {!isMobile && <br />} Vision</h2>
          </TitleContainer>
          <Card>
            <p>
              To empower businesses with future-ready technology that drives
              measurable results and lasting partnerships.
            </p>
          </Card>
        </ContentSection>
      </div>
    ),
    [isMobile]
  );

  const MissionSection = useCallback(
    () => (
      <div>
        <ContentSection>
          {isMobile || isTablet ? (
            <>
              <TitleContainer>
                <h2>Our {!isMobile && <br />} Mission</h2>
              </TitleContainer>
              <Card>
                <p>
                  To bridge the gap between technology and business objectives
                  by delivering cutting-edge solutions that guarantee outcomes.
                </p>
              </Card>
            </>
          ) : (
            <>
              <Card direction="270deg">
                <p>
                  To bridge the gap between technology and business objectives
                  by delivering cutting-edge solutions that guarantee outcomes.
                </p>
              </Card>
              <TitleContainer>
                <h2>
                  Our <br /> Mission
                </h2>
              </TitleContainer>
            </>
          )}
        </ContentSection>
      </div>
    ),
    [isMobile]
  );

  const PhilosophySection = useCallback(
    () => (
      <div>
        <ContentSection>
          <TitleContainer>
            <h2>Our {!isMobile && <br />} Philosophy</h2>
          </TitleContainer>
          <Card>
            <p>
              At Excollo, we commit to results, not just solutions. Our "Outcome
              as a Service" (OaaS) approach ensures every action is aligned to
              achieve measurable success for our clients.
            </p>
          </Card>
        </ContentSection>
      </div>
    ),
    [isMobile]
  );

  return (
    <Box
      sx={{
        bgcolor: "#000",
        minHeight: "100vh",
        fontFamily: '"Inter", sans-serif',
        overflow: "hidden", 
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
          maxWidth: { xs: "95%", sm: "90%", md: "90%" },
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
            mt: { xs: "10%", md: "-15%", lg: "-14%" },
            mb: { xs: 0, md: 0 },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: "600",
                  color: "#fff",
                  whiteSpace: "nowrap", // Prevent line break on larger screens
                  ml: { xs: 0, md: "13%", lg: "10%" },
                }}
              >
                <span className="highlight">About</span>
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: "600",
                  color: "#fff",
                  whiteSpace: "nowrap", // Prevent line break on larger screens
                  ml: { xs: 0, md: "2%", lg: "1.5%" },
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Excollo
                </span>
              </Typography>
            </Box>

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
                lineHeight: 1.7,
                textAlign: { xs: "center", md: "left" },
                ml: { xs: 0, md: "13%", lg: "10%" },
                px: { xs: 2, md: 0 },
                mt: { xs: 3, md: 5 },
              }}
            >
              Excollo bridges today’s challenges and tomorrow’s opportunities.
              We harness cutting-edge technology, AI, and tailored solutions to
              deliver outcomes and make businesses future-ready.
            </Typography>
          </Box>

          {!isMobile && !isTablet && (
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
      <PhilosophySection sx={{ fontSize: "1rem" }} />
      <HowWeWork />
      <Excollo3D />
      <Footer />
      <Fade in={showButton}>
        <Button
          onClick={handleScrollToTop}
          variant="contained"
          color="primary"
          sx={{
            position: "fixed",
            bottom: 50,
            height: 60,
            right: 50,
            zIndex: 1000,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
            },
            "@media (max-width: 768px)": {
              position: "fixed",
              bottom: 50,
              right: 50,
            },
            "@media (max-width: 480px)": {
              position: "fixed",
              bottom: 50,
              right: 50,
            },
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Fade>
    </Box>
  );
};

export default AboutUs;
