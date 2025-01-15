import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const commonLinkStyles = {
    textDecoration: "none",
    fontSize: "16px",
    position: "relative",
    padding: "10px 20px",
    color: "white",
    "&:hover": {
      background:
        "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
      border: "1px solid transparent",
      borderRadius: "40px",
    },
  };

  const menuItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "About Us", path: "/about", icon: <InfoIcon /> },
    { text: "Our Services", path: "/services", icon: <BuildIcon /> },
    { text: "Contact us", path: "/contact", icon: <ContactMailIcon /> },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        bgcolor: "#262427",
        color: "white",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <img
            style={{ height: "50px", width: "60%" }}
            src="https://www.excollo.com/images/logo.svg"
            alt="excollo"
            loading="lazy"
          />
        </Box>
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              mb: 2,
              color: "#fff",
              "&:hover": {
                background: "gray",
                color: "#fff",
                // border: "1px solid transparent",
                // borderRadius: "40px",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
            <FaChevronRight />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "relative",
          width: "85%",
          zIndex: 10,
          margin: "0 auto",
          "@media (max-width: 320px)": {
            margin: "0 auto 0 -20px", // Adjust the left margin for smaller screens
          },
          "@media (min-width: 375px && max-width: 725px)": {
            margin: "0 auto", // Adjust for slightly wider but small screens
          },
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

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon
                sx={{ color: "#ADA7FF", height: "40px", width: "40px" }}
              />
            </IconButton>
          ) : (
            <Box
              display="flex"
              gap="20px"
              sx={{ position: "relative", zIndex: 0, overflow: "hidden" }}
            >
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
                    inset: 0,
                    padding: "2px", // Adjust the thickness of the border
                    background:
                      "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                    borderRadius: "40px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    zIndex: -1,
                  },
                  "&:hover": {
                    "&::before": {
                      background:
                        "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                    },
                    background:
                      "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
                  },
                }}
              >
                <Box>LET'S TALK</Box>
                <Box>
                  <FaChevronRight
                    style={{ marginLeft: "20px", marginTop: "3px" }}
                  />
                </Box>
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 270,
            overflowX: "hidden",
            backgroundColor: "#1a1a1a",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
