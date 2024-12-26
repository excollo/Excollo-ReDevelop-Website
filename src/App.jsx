import React from "react";
import HeroPage1 from "./Pages/HeroPage1";
import { Box } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      <HeroPage1 />
    </Box>
  );
};

export default App;
