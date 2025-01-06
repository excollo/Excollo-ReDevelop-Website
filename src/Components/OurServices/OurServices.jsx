import React from "react";
import { Box, Typography } from "@mui/material";
import ThreeDE from "../ThreeDE";
import AIAutomation from "./AIAutomation";
import ProductDevelopment from "./ProductDevelopment";

const OurServices = () => {
  return (
    <Box className="services-section">
      <Box sx={{ minHeight: "100vh", display: "flex" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              backgroundColor: "#000",
              fontWeight: "500",
              justifyContent: "left",
              textAlign: "left",
              ml: "23%",
              mt: 20,
            }}
          >
            Our Core <br /> Services
          </Typography>
          <Typography sx={{ ml: "23%", mt: 5, maxWidth: "70%" }}>
            Excollo is future-ready, offering unparalleled expertise to
            enterprises seeking to transform their digital stack. By leveraging
            cutting-edge AI, automation, and innovative consultancy, we identify
            opportunities, close gaps, and implement strategies that empower
            businesses to achieve scalable success.
          </Typography>
        </Box>
        <Box sx={{ marginRight: "18%", marginTop: "-6%" }}>
          <ThreeDE />
        </Box>
      </Box>
      <AIAutomation />
      <ProductDevelopment />
    </Box>
  );
};

export default OurServices;
