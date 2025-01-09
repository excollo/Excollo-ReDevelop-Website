import React from "react";
import { Box, Typography } from "@mui/material";
import ThreeDE from "../ThreeDE";
import AIAutomation from "./AIAutomation";
import ProductDevelopment from "./ProductDevelopment";
import TechConsultancy from "./TechConsultancy";
import SalesChannelDevelopment from "./SalesChannelDevelopment";
import MLDrivenDataAnalysis from "./MLDrivenDataAnalysis";

const OurServices = () => {
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
              mt: 10,
            }}
          >
            Our Core
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
    </Box>
  );
};

export default OurServices;
