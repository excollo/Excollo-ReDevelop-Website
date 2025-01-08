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
              fontWeight: "500",
              justifyContent: "left",
              textAlign: "left",
              ml: "17%",
              mt: 20,
            }}
          >
            Our Core <br /> Services
          </Typography>
          <Typography sx={{ ml: "17%", mt: 5, maxWidth: "60%" }}>
            Excollo is future-ready, offering unparalleled expertise to
            enterprises seeking to transform their digital stack. By leveraging
            cutting-edge AI, automation, and innovative consultancy, we identify
            opportunities, close gaps, and implement strategies that empower
            businesses to achieve scalable success.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "-6%", marginRight: "-3%" }}>
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
