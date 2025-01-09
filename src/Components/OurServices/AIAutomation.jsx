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
import MarqueeCarousel1 from "./MarqueeCarousel/MarqueeCarousel1";

gsap.registerPlugin(ScrollTrigger);

const AIAutomation = () => {
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
        ease: "power2.inOut",
      });
    } else {
      console.log("Conditions not met for updating circle position"); // Debug log
    }
  };

  useEffect(() => {
    gsap.set(".animate-content", {
      x: "100%",
      opacity: 0,
    });

    gsap.set(".services-title", {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline();

    tl.fromTo(
      ".fade-in-heading",
      {
        opacity: 1,
        y: 200,
      },
      {
        opacity: 1,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade-in-heading",
          start: "top 100%",
          end: "top 60%",
          scrub: 1,
        },
      }
    )
      .to(".fade-in-heading", {
        x: "-100%",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fade-in-heading",
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      })
      .to(".animate-content", {
        x: "0%",
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".animate-content",
          start: "top 30%",
          end: "top 25%",
          scrub: 1,
        },
      })
      .to(".services-title", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 22%",
          end: "top 15%",
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
          markers: true,
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
      title:
        "\u00A0\u00A0\u00A0Intelligent conversational chatbots to enhance customer interactions.",
      details: [
        "Automate repetitive queries to save time and resources.",
        "Provide personalized recommendations based on customer data.",
        "Seamlessly integrate with existing communication platforms for effortless engagement.",
      ],
    },
    {
      id: "panel2",
      title:
        "\u00A0\u00A0\u00A0Internal AI agents that streamline knowledge retrieval and boost efficiency.",
      details: [
        "Enable faster access to critical business insights.",
        "Integrate with existing systems for seamless data sharing.",
        "Enhance productivity by simplifying complex information retrieval processes.",
      ],
    },
    {
      id: "panel3",
      title:
        "\u00A0\u00A0\u00A0Automation workflows for better efficiency and reduced costs.",
      details: [
        "Streamline repetitive tasks with minimal human intervention.",
        "Ensure consistency and accuracy across all processes.",
        "Reduce operational overhead by optimizing resource utilization.",
      ],
    },
    {
      id: "panel4",
      title:
        "\u00A0\u00A0\u00A0Machine learning-driven data analysis to uncover useful insights.",
      details: [
        "Analyze vast datasets to identify hidden patterns and trends.",
        "Use predictive modeling to forecast outcomes and inform strategy.",
        "Enhance decision-making with actionable, data-backed recommendations.",
      ],
    },
    {
      id: "panel5",
      title:
        "\u00A0\u00A0\u00A0Advanced AI voice agents that redefine engagement and operations.",
      details: [
        "Enable seamless, human-like customer interactions for better user experiences.",
        "Integrate across multiple platforms to ensure consistent communication.",
        "Automate call handling, freeing up resources for more complex tasks.",
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
        minHeight: "120vh",
        position: "relative",
        marginBottom: "5rem",
      }}
    >
      <Box
        className="fade-in-heading"
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
            AI & Automation
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "500", mt: 2 }}
          >
            Empower your business with AI
          </Typography>
        </Box>
      </Box>

      <Box
        className="animate-content"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
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
            className="services-title"
          >
            AI & Automation
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
                      minHeight: 105,
                      margin: 0,
                    },
                    minHeight: 105,
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
                            sx: { fontSize: "1.1rem" },
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
        <Box sx={{ mt: 10, ml: "-5%" }}>
          <MarqueeCarousel1 />
        </Box>
      </Box>
    </Box>
  );
};

export default AIAutomation;
