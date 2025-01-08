import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/large-full-logo.png";

const NavBar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "relative",
        width: "85%",
        zIndex: 10,
        margin: "0 auto",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
        <Box
          display="flex"
          alignItems="center"
          padding={4}
          sx={{ position: "relative", zIndex: 0 }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Box>

        <Box display="flex" gap="20px" sx={{ position: "relative", zIndex: 0 }}>
          <Typography
            component={Link}
            to="/about"
            sx={{
              display: "inline-block",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              position: "relative",
              padding: "10px 20px",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                color: "#ffffff",
                border: "1px solid transparent",
                borderRadius: "40px",
              },
            }}
          >
            About
          </Typography>
          <Typography
            component={Link}
            to="/services"
            sx={{
              display: "inline-block",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              position: "relative",
              padding: "10px 20px",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                color: "#ffffff",
                border: "1px solid transparent",
                borderRadius: "40px",
              },
            }}
          >
            Services
          </Typography>
          <Typography
            component={Link}
            to="/about"
            sx={{
              display: "inline-block", // Ensures the button behaves like a block
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              zIndex: 3, // Ensure the button is above other elements
              position: "relative",
              padding: "10px 20px",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%);",
                color: "#ffffff",
                border: "1px solid transparent",
                borderRadius: "40px",
              },
            }}
          >
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
