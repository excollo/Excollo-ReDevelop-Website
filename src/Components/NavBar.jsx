import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const NavBar = () => {
  const commonLinkStyles = {
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
  };

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
          <Link to="/">
            <img
              src="https://www.excollo.com/images/logo.svg"
              alt="excollo"
              loading="lazy"
            />
          </Link>
        </Box>

        <Box display="flex" gap="20px" sx={{ position: "relative", zIndex: 0 }}>
          <Typography component={Link} to="/" sx={commonLinkStyles}>
            Home
          </Typography>
          <Typography component={Link} to="/about" sx={commonLinkStyles}>
            About
          </Typography>
          <Typography component={Link} to="/services" sx={commonLinkStyles}>
            Services
          </Typography>
          <Typography
            component={Link}
            to="/contact"
            sx={{
              ...commonLinkStyles,
              display: "flex",
              alignItems: "center",
              position: "relative",
              padding: "10px 20px",
              borderRadius: "40px",
              background: "transparent",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: -1,
                padding: "1px",
                borderRadius: "40px",
                background:
                  "linear-gradient(180deg, rgba(170, 63, 255, 0.9), rgba(94, 129, 235, 0.9))",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              },
              "&:hover": {
                "&::before": {
                  opacity: 0,
                },
                background:
                  "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
              },
            }}
          >
            <Box>LET'S TALK</Box>
            <Box>
              <FaChevronRight
                style={{ marginLeft: "10px", marginTop: "3px" }}
              />
            </Box>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
