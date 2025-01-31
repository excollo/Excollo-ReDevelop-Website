import React, { useEffect, useRef } from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom"; // Import useNavigate
gsap.registerPlugin(ScrollTrigger);
const CTAContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  top: -10,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2.5),
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up(2000)]: {
    padding: theme.spacing(4),
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  background:
    "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
  color: "white",
  "&:hover": {
    backgroundColor: "#0077ED",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
    padding: "10px 20px",
    minWidth: "120px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    padding: "12px 24px",
    minWidth: "150px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.0625rem",
    padding: "14px 28px",
    minWidth: "180px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.125rem",
    padding: "16px 32px",
    minWidth: "200px",
  },
  [theme.breakpoints.up(2000)]: {
    fontSize: "1.25rem",
    padding: "20px 40px",
    minWidth: "240px",
  },
  [theme.breakpoints.up(2550)]: {
    fontSize: "1.375rem",
    padding: "24px 48px",
    minWidth: "280px",
  },
}));
const AnimatedCTA = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    // Initial state
    gsap.set(container, {
      opacity: 0,
      scale: 0,
    });
    gsap.set(button, {
      width: "80px",
      height: "80px",
      padding: 0,
      borderRadius: "50%",
      fontSize: 0,
      minWidth: "50px",
      opacity: 0,
      scale: 0,
    });
    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        scrub: false,
      },
    });
    // Bounce animation sequence
    tl.to(container, {
      opacity: 1,
      scale: 1,
      duration: 0.24,
    })
      .to(container, {
        duration: 0.48,
      })
      .to(container, {
        duration: 0.24,
      })
      .to(container, {
        duration: 0.24,
      });
    // Morph button animation
    const buttonTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 30%",
        toggleActions: "play reverse play reverse",
        scrub: false,
      },
    });
    buttonTl
      .to(button, {
        opacity: 1,
        scale: 1,
        duration: 0.1,
      })
      .to(button, {
        width: "80px",
        height: "80px",
        padding: 0,
        borderRadius: "50%",
        fontSize: 0,
        minWidth: "50px",
        duration: 0.6,
      })
      .to(button, {
        width: "200px",
        height: "80px",
        padding: "12px 24px",
        borderRadius: "980px",
        fontSize: "1.25rem",
        minWidth: "200px",
        duration: 0.36,
      })
      .to(button, {
        y: "10%",
        duration: 0.24,
        ease: "power2.out",
      });
    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      if (buttonTl.scrollTrigger) {
        buttonTl.scrollTrigger.kill();
      }
      tl.kill();
      buttonTl.kill();
    };
  }, []);
  // Handle button click to navigate to ContactUs page
  const handleButtonClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0); // Navigate to the ContactUs page
  };
  return (
    <CTAContainer ref={containerRef}>
      <StyledButton
        ref={buttonRef}
        variant="contained"
        disableElevation
        onClick={handleButtonClick} // Add onClick handler
      >
        Talk to Us
      </StyledButton>
    </CTAContainer>
  );
};
export default AnimatedCTA;
