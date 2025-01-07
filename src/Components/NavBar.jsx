import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/large-full-logo.png";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "fixed", // Changed to fixed for scroll behavior
        width: "85%",
        zIndex: 10,
        margin: "0 auto",
        left: "50%",
        transform: `translate(-50%, ${visible ? "0" : "-100%"})`,
        transition: "transform 0.3s ease-in-out",
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
              display: "inline-block",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "16px",
              zIndex: 3,
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
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
