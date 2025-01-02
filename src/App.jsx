import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage1 from "./Pages/HeroPage1";
import AboutUsPage from "./Pages/AboutUs";
import { Box } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Routes>
          <Route path="/" element={<HeroPage1 />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;