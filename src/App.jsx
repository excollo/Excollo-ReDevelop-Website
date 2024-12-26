import React from "react";
import HeroPage from "./Pages/HeroPage";
import { Box } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      <HeroPage />
    </Box>
  );
};

export default App;
