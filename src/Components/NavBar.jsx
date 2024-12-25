import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Logo from "../assets/logo/large-full-logo.png";

const NavBar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent", // Transparent background
        boxShadow: "none", // Removes the default AppBar shadow
        position: "fixed", // Make the navbar scroll with content
      }}
    >
      <Toolbar sx={{ justifyContent: "space-around", position: "relative" }}>
        {/* Logo Section */}
        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          padding={4}
          ml={-4}
          mb={2}
          sx={{ position: "relative", zIndex: 2 }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Box>

        {/* Navigation Links */}
        <Box display="flex" gap="30px" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            component="a"
            href="#about"
            sx={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "16px",
              ml: "200px",
              padding: "5px 10px",
              borderRadius: "5px",
              "&:hover": {
                background: "linear-gradient(to right, #4A306D, #3F51B5)",
                borderRadius: "15px",
                padding: "5px 10px",
                color: "#FFFFFF",
              },
            }}
          >
            About
          </Typography>
          <Typography
            component="a"
            href="#services"
            sx={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
              "&:hover": {
                background: "linear-gradient(to right, #4A306D, #3F51B5)",
                borderRadius: "15px",
                padding: "5px 10px",
                color: "#FFFFFF",
              },
            }}
          >
            Services
          </Typography>
          <Typography
            component="a"
            href="#contact"
            sx={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              padding: "5px 10px",
              borderRadius: "5px",
              "&:hover": {
                background: "linear-gradient(to right, #4A306D, #3F51B5)",
                borderRadius: "15px",
                padding: "5px 10px",
                color: "#ffffff",
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
