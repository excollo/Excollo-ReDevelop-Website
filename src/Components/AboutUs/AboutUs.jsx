import React, { useEffect, useState, useCallback } from "react";
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

    "@media (min-width: 769px) and (max-width:1100px) ": {
      width: "95%",
      height: "fit-content",
      "& p": {
        fontSize: "1.8rem",
      },
    },
  })
);

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSpecificSize = useMediaQuery(
    "(min-width: 600px) and (max-width: 900px)"
  );
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 900px)");
  const isLandscapeMedium = useMediaQuery(
      "(min-width: 625px) and (max-width: 899px) and (orientation: landscape)"
    );

  const [showButton, setShowButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  // Handle window resize and trigger refresh if needed
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      const newWidth = window.innerWidth;

      // Check if we're crossing major breakpoints
      const oldBreakpoint = getBreakpoint(windowWidth);
      const newBreakpoint = getBreakpoint(newWidth);

      if (oldBreakpoint !== newBreakpoint) {
        setShouldRefresh(true);
      }

      setWindowWidth(newWidth);

      // Debounce the refresh
      resizeTimer = setTimeout(() => {
        if (shouldRefresh) {
          window.location.reload();
        }
      }, 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [windowWidth, shouldRefresh]);

  // Helper function to determine breakpoint category
  const getBreakpoint = (width) => {
    if (width < 600) return "xs";
    if (width < 900) return "sm";
    if (width < 1200) return "md";
    return "lg";
  };

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
          {isMobile || isTablet || isSpecificSize ? (
            <>
              <TitleContainer>
                <h2>Our {!isMobile || (isSpecificSize && <br />)} Mission</h2>
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
    [isMobile, isTablet, isSpecificSize]
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
          minHeight: isLandscapeMedium ? "120vh" : "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "85%", xl: "85%" },
            margin: isLandscapeMedium
              ? "120px auto 60px"
              : { xs: "20px auto", md: "0px auto" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minHeight: isLandscapeMedium
                ? "auto"
                : { xs: "auto", md: "auto" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              mt: isLandscapeMedium
                ? "0"
                : { xs: "10%", md: "-10%", lg: "-10%" },
              mb: { xs: 0, md: 0 },
              position: "relative",
            }}
          >
            <Box sx={{ width: { md: "70%", lg: "70%", xl: "70%" } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "flex-start" },
                  marginBottom: isLandscapeMedium ? "40px" : undefined,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    fontSize: isLandscapeMedium
                      ? "3rem"
                      : {
                          xs: "2.5rem",
                          sm: "3rem",
                          md: "3.5rem",
                          lg: "5rem",
                        },
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: "600",
                    color: "#fff",
                    whiteSpace: "nowrap", // Prevent line break
                    ml: isLandscapeMedium ? "5%" : 0,
                  }}
                >
                  <span className="highlight">About </span>
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
                  maxWidth: isLandscapeMedium ? "90%" : { xs: "100%" },
                  fontSize: isLandscapeMedium
                    ? "1.1rem"
                    : {
                        xs: "1.1rem",
                        sm: "1.2rem",
                        md: "1.3rem",
                        lg: "1.3rem",
                        xl: "1.7rem",
                      },
                  fontWeight: 200,
                  lineHeight: 1.7,
                  textAlign: { xs: "center", md: "left" },
                  ml: isLandscapeMedium ? "5%" : { xs: 0, md: "1%" },
                  px: { xs: 2, md: 0 },
                  mt: isLandscapeMedium ? 2 : { xs: 3, md: 5 },
                }}
              >
                Excollo bridges today’s challenges and tomorrow’s opportunities.
                We harness cutting-edge technology, AI, and tailored solutions
                to deliver outcomes and make businesses future-ready.
              </Typography>
            </Box>

            {!isMobile && !isTablet && (
              <Box
                sx={{
                  width: isLandscapeMedium ? "50%" : { md: "50%", lg: "40%" },
                  mr: { md: "0%", lg: "0%" },
                  "@media (min-width: 200px) and (max-width: 899px)": {
                    display: "none",
                  },
                }}
              >
                <ThreeDE />
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <VisionSection />
      <MissionSection />
      <PhilosophySection />
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
