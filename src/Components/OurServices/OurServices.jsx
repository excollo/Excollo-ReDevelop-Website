import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Fade } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ThreeDE from "../ThreeDE";
import AIAutomation from "./AIAutomation";
import ProductDevelopment from "./ProductDevelopment";
import TechConsultancy from "./TechConsultancy";
import SalesChannelDevelopment from "./SalesChannelDevelopment";
import MLDrivenDataAnalysis from "./MLDrivenDataAnalysis";

const OurServices = () => {
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

  return (
    <Box className="services-section">
      <Box sx={{ minHeight: "50vh", display: "flex", maxWidth: "85%" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              backgroundColor: "#000",
              fontWeight: "600",
              justifyContent: "left",
              textAlign: "left",
              ml: "17%",
              mt: 15,
              display: "flex",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                backgroundColor: "#000",
                fontWeight: "600",
                justifyContent: "left",
                textAlign: "left",
                display: "flex",
                marginRight: "2%",
              }}
            >
              Our 
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontFamily: '"Inter", sans-serif',
                fontWeight: "600",
                background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontWeight: 200,
              fontSize: { xs: "1.3rem" },
              lineHeight: 1.5,
              ml: "17.5%",
              mt: 3,
              maxWidth: "60%",
            }}
          >
            Excollo is future-ready, offering unparalleled expertise to
            enterprises seeking to transform their digital stack. By leveraging
            cutting-edge AI, automation, and innovative consultancy, we identify
            opportunities, close gaps, and implement strategies that empower
            businesses to achieve scalable success.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "-11%", marginRight: "-3%" }}>
          <ThreeDE />
        </Box>
      </Box>
      <Box>
        <AIAutomation />
      </Box>
      <Box>
        <SalesChannelDevelopment />
      </Box>
      <Box>
        <MLDrivenDataAnalysis />
      </Box>
      <Box>
        <ProductDevelopment />
      </Box>
      <Box>
        <TechConsultancy />
      </Box>
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

export default OurServices;
