import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ChevronDown, Circle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SalesChannelDevelopment = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentDotIndex, setCurrentDotIndex] = useState(0);
  const symbolRefs = useRef([]);
  const circleRef = useRef(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDotIndex(() => {
        const newIndex = Math.floor(Math.random() * services.length);
        console.log("Current Dot Index:", newIndex);
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateCirclePosition();
    console.log("Circle position updated");

    // Update position on resize
    window.addEventListener("resize", updateCirclePosition);
    return () => window.removeEventListener("resize", updateCirclePosition);
  }, [currentDotIndex]);

  const updateCirclePosition = () => {
    if (symbolRefs.current[currentDotIndex] && circleRef.current) {
      const symbol = symbolRefs.current[currentDotIndex];
      const rect = symbol.getBoundingClientRect();
      const parentRect = symbol
        .closest(".services-container")
        .getBoundingClientRect();

      console.log("Updating circle position for index:", currentDotIndex); // Debug log
      gsap.to(circleRef.current, {
        top: rect.top - parentRect.top + rect.height / 2 - 30,
        left: rect.left - parentRect.left + rect.width / 2 - 150, // Adjusted left position
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else {
      console.log("Conditions not met for updating circle position"); // Debug log
    }
  };

  useEffect(() => {
    gsap.set(".animate-content-2", {
      x: "100%",
      opacity: 0,
    });

    gsap.set(".services-title-2", {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline();

    tl.fromTo(
      ".fade-in-heading-2",
      {
        opacity: 1,
        y: 200,
      },
      {
        opacity: 1,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade-in-heading-2",
          start: "top 100%",
          end: "top 60%",
          scrub: 1,
        },
      }
    )
      .to(".fade-in-heading-2", {
        x: "-100%",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade-in-heading-2",
          start: "top 40%",
          end: "top 60%",
          scrub: 1,
          duration: 2,
        },
      })
      .to(".animate-content-2", {
        x: "0%",
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".animate-content-2",
          start: "top 10%",
          end: "top 30%",
          scrub: 1,
        },
      })
      .to(".services-title-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".services-title-2",
          start: "top 10%",
          end: "top 10%",
          scrub: 1,
        },
      });

    // Animate service items
    gsap.utils.toArray(".service-item").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = [
    {
      id: "panel1",
      title: "\u00A0\u00A0\u00A0Launch or optimize your e-commerce platforms.",
      details: [
        "Set up and configure your e-commerce store seamlessly on Shopify.",
        "Design visually appealing and user-friendly interfaces tailored to your brand.",
        "Provide comprehensive support, including user training, SEO optimization, integrations, and more.",
      ],
    },
    {
      id: "panel2",
      title:
        "\u00A0\u00A0\u00A0Set up WhatsApp sales channels to enhance customer engagement and convenience.",
      details: [
        "Use machine learning algorithms to retarget customers effectively.",
        "Design high-conversion templates tailored to customer needs.",
        "Build automation workflows to streamline operations within the WhatsApp channel.",
      ],
    },
    {
      id: "panel3",
      title: "\u00A0\u00A0\u00A0Social Media Marketing with content creation.",
      details: [
        "Develop engaging, brand-consistent content for various platforms.",
        "Schedule and manage posts to ensure optimal reach and engagement.",
        "Monitor performance metrics to refine strategies and maximize impact.",
      ],
    },
    {
      id: "panel4",
      title: "\u00A0\u00A0\u00A0Search Engine Optimization (SEO)",
      details: [
        "Conduct keyword research to improve search rankings.",
        "Optimize website content and metadata for better visibility.",
        "Monitor analytics to ensure consistent improvements in organic traffic.",
      ],
    },
  ];

  const GradientDivider = () => (
    <Box
      sx={{
        height: "1px",
        width: "125%",
        ml: "-13%",
        background: "linear-gradient(90deg, #2579e3 0%, #8e54f7 100%)",
        mb: 2,
        mt: 3,
        opacity: 1,
      }}
    />
  );

  return (
    <Box
      className="services-container"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        className="fade-in-heading-2"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Sales Channel Development
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "500", mt: 2 }}
          >
            Unlock growth potential
          </Typography>
        </Box>
      </Box>

      <Box
        className="animate-content-2"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          padding: "2rem",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(0, 0, 0, 0.1)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(37, 121, 227, 0.5)",
            borderRadius: "4px",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            pb: "2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "gray" }}
            className="services-title-2"
          >
            Sales Channel Development
          </Typography>
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <Accordion
                expanded={expanded === service.id}
                onChange={handleChange(service.id)}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  boxShadow: "none",
                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown style={{ color: "#fff" }} />}
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: 145,
                      margin: 0,
                    },
                    minHeight: 145,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "1.7rem", position: "relative" }}
                  >
                    <span
                      ref={(el) => (symbolRefs.current[index] = el)}
                      style={{ display: "inline-block" }}
                    >
                      ✤
                    </span>
                    {service.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "0 16px 8px 16px",
                    maxWidth: "120%",
                    ml: "1%",
                  }}
                >
                  <List
                    sx={{
                      padding: 0,
                      "& .MuiListItem-root": {
                        padding: "4px 0",
                      },
                    }}
                  >
                    {service.details.map((detail, index) => (
                      <ListItem key={index}>
                        <ListItemIcon sx={{ minWidth: 25 }}>
                          <Circle size={8} color="#fff" />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{
                            sx: { fontSize: "0.9rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              {index < services.length && <GradientDivider />}
            </React.Fragment>
          ))}

          <Box
            ref={circleRef}
            sx={{
              position: "absolute",
              width: 30,
              height: 30,
              background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
              borderRadius: "50%",
              zIndex: 2,
              boxShadow: "0 0 20px rgba(255, 87, 34, 0.5)",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SalesChannelDevelopment;
