import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./Pages/HeroPage";
import AboutUsPage from "./Pages/AboutUsPage";
import { Box } from "@mui/material";
import "./App.css";
import ServicesPage from "./Pages/ServicesPage";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
