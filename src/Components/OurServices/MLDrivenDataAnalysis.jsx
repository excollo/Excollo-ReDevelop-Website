import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
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
  useTheme,
  useMediaQuery,
  Card,
  Collapse,
  CardContent,
  Button,
} from "@mui/material";
import { ChevronDown, Circle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueeCarousel3 from "./MarqueeCarousel/MarqueeCarousel3";

gsap.registerPlugin(ScrollTrigger);

const MLDrivenDataAnalysis = forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false);
  const [currentDotIndex, setCurrentDotIndex] = useState(0);
  const symbolRefs = useRef([]);
  const circleRef = useRef(null);
  const lastAccordionRef = useRef(null);

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isSpecified = useMediaQuery(theme.breakpoints.up("md"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isXtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    if (isExpanded && panel === services[services.length - 1].id) {
      setTimeout(() => {
        const element = symbolRefs.current[services.length - 1];
        const offset = 480; // Adjust this value to scroll slightly (in pixels)
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      }, 0);
    }
  };

  useImperativeHandle(ref, () => ({
    collapsePanel: () => {
      setExpanded(false);
    },
  }));

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentDotIndex(() => {
          const newIndex = Math.floor(Math.random() * services.length);
          return newIndex;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      updateCirclePosition();
      window.addEventListener("resize", updateCirclePosition);
      return () => window.removeEventListener("resize", updateCirclePosition);
    }
  }, [currentDotIndex, isMobile]);

  const updateCirclePosition = () => {
    if (symbolRefs.current[currentDotIndex] && circleRef.current) {
      const symbol = symbolRefs.current[currentDotIndex];
      const rect = symbol.getBoundingClientRect();
      const parentRect = symbol
        .closest(".services-container")
        .getBoundingClientRect();

      console.log("Updating circle position for index:", currentDotIndex); // Debug log
      gsap.to(circleRef.current, {
        top: rect.top - parentRect.top + rect.height / 2 - 320,
        left: rect.left - parentRect.left + rect.width / 2 - 1, // Adjusted left position
        ease: "power2.inOut",
      });
    } else {
      console.log("Conditions not met for updating circle position"); // Debug log
    }
  };

  useEffect(() => {
    if (!isMobile && !isTablet) {
      gsap.set(".animate-content-3", {
        x: "100%",
        opacity: 0,
      });

      gsap.set(".services-title-3", {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline();

      tl.fromTo(
        ".fade-in-heading3",
        {
          opacity: 1,
          y: 300,
        },
        {
          opacity: 1,
          y: 300,
          duration: 1,
          scrollTrigger: {
            trigger: ".fade-in-heading3",
            start: "top 100%",
            end: "top 50%",
            scrub: 1,
          },
        }
      )
        .to(".fade-in-heading3", {
          x: "-100%",
          opacity: 1,
          scrollTrigger: {
            trigger: ".fade-in-heading3",
            start: "top 40%",
            end: "top 35%",
            scrub: 1,
            duration: 2,
          },
        })
        .to(".animate-content-3", {
          x: "0%",
          opacity: 1,
          delay: 1,
          scrollTrigger: {
            trigger: ".animate-content-3",
            start: "top 20%",
            end: "top 10%",
            scrub: 1,
          },
        })
        .to(".services-title-3", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.3,
          scrollTrigger: {
            trigger: ".services-title-3",
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
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (isTablet) {
      gsap.set(".tablet-heading", {
        y: 100,
        opacity: 0,
      });

      gsap.set(".tablet-service-item", {
        y: 10,
        opacity: 0,
      });

      gsap.to(".tablet-heading", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".tablet-heading",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".tablet-service-item").forEach((item, index) => {
        gsap.to(item, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        });
      });

      gsap.utils
        .toArray(".tablet-gradient-divider")
        .forEach((divider, index) => {
          gsap.to(divider, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1 + 0.3,
            scrollTrigger: {
              trigger: divider,
              start: "top 80%",
              end: "top 60%",
              scrub: 1,
            },
          });
        });
    }
  }, [isTablet]);

  const services = [
    {
      id: "panel1",
      title: isMobile
        ? "Uncover hidden patterns."
        : "\u00A0\u00A0\u00A0Uncover hidden patterns.",
      details: [
        "Analyze vast datasets to identify trends and correlations.",
        "Use clustering algorithms to segment data effectively.",
        "Employ anomaly detection for identifying outliers and potential issues.",
      ],
    },
    {
      id: "panel2",
      title: isMobile
        ? "Predict future outcomes."
        : "\u00A0\u00A0\u00A0Predict future outcomes.",
      details: [
        "Leverage predictive modeling to forecast customer behaviors.",
        "Use time-series analysis for trend predictions.",
        "Apply decision trees for scenario-based outcomes.",
      ],
    },
    {
      id: "panel3",
      title: isMobile
        ? "Improve operational efficiency."
        : "\u00A0\u00A0\u00A0Improve operational efficiency.",
      details: [
        "Optimize resource allocation through data insights.",
        "Automate data-driven decision-making processes.",
        "Implement reinforcement learning for continuous improvement.",
      ],
    },
    {
      id: "panel4",
      title: isMobile
        ? "Enhance decision-making."
        : "\u00A0\u00A0\u00A0Enhance decision-making.",
      details: [
        "Provide actionable, data-backed recommendations.",
        "Develop custom dashboards for real-time insights.",
        "Use sentiment analysis to inform business strategies.",
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

  if (isTablet) {
    return (
      <Box className="services-container" sx={containerStyles}>
        {!isTablet && (
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
                sx={{ fontWeight: "500", textAlign: "center" }}
              >
                ML Driven Analysis
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
        )}

        <Box
          className={isTablet ? "" : "animate-content"}
          sx={{
            position: isTablet ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: isTablet ? "auto" : "100vh",
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
          <Box sx={contentStyles}>
            {isTablet && (
              <Typography
                variant="h2"
                sx={{
                  ...titleStyles,
                  background: "linear-gradient(180deg, #2579e3, #8e54f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  textAlign: "center",
                  fontSize: "2.8rem",
                  fontWeight: 500,
                  mb: 4,
                }}
                className="tablet-heading"
              >
                ML Driven Analysis
              </Typography>
            )}
            {services.map((service, index) => (
              <Box className="tablet-service-item" key={service.id}>
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
                        minHeight: isTablet ? 80 : 105,
                        margin: 0,
                      },
                      minHeight: isTablet ? 80 : 105,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: isTablet ? "1.1rem" : "1.7rem",
                        position: "relative",
                        ml: isTablet ? -5 : "1%",
                      }}
                      className={isTablet ? "tablet-service-item" : ""}
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
                        <ListItem
                          key={index}
                          className={isTablet ? "tablet-service-item" : ""}
                        >
                          <ListItemIcon sx={{ minWidth: 25 }}>
                            <Circle size={6} color="#fff" />
                          </ListItemIcon>
                          <ListItemText
                            primary={detail}
                            primaryTypographyProps={{
                              sx: { fontSize: isTablet ? "0.8rem" : "0.9rem" },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <GradientDivider
                  className={
                    isTablet ? "tablet-gradient-divider" : "gradient-divider"
                  }
                />
              </Box>
            ))}

            {!isTablet && (
              <Box
                ref={circleRef}
                sx={{
                  position: "absolute",
                  width: 20,
                  height: 30,
                  background:
                    "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                  borderRadius: "50%",
                  zIndex: 2,
                  boxShadow: "0 0 20px rgba(255, 87, 34, 0.5)",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </Box>
          <Box sx={{ mt: 10 }}>
            <MarqueeCarousel3 />
          </Box>
        </Box>
      </Box>
    );
  }

  if (isMobile) {
    return (
      <Box sx={{ padding: "1rem", width: "95%" }}>
        <Card
          sx={{
            background: "linear-gradient(180deg, #05000A 0%, #1B1125 100%)",
            color: "#fff",
            m: 2,
            border: "2px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "30px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              m: 3,
              mb: 1,
              fontSize: "2rem",
              background: "linear-gradient(90deg,#2579e3, #8e54f7)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ML Driven Analysis
          </Typography>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: expanded ? "left" : "center",
                fontSize: "1.2rem",
                width: "100%",
              }}
            >
              {services[0].title}
            </Typography>
            <Collapse in={expanded}>
              <List sx={{ width: "100%" }}>
                {services[0].details.map((detail, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      alignItems: "flex-start",
                      py: 1,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "24px", mt: 1.5 }}>
                      <Circle size={8} color="#8E54F7" />
                    </ListItemIcon>
                    <ListItemText
                      primary={detail}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "0.95rem",
                          ml: -1,
                          color: "rgba(255, 255, 255, 0.85)",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              {services.slice(1).map((service, index) => (
                <Box key={index} sx={{ mt: 2, width: "100%" }}>
                  <Typography variant="h6" sx={{ textAlign: "left" }}>
                    {service.title}
                  </Typography>
                  <List>
                    {service.details.map((detail, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          alignItems: "flex-start",
                          py: 1,
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "24px", mt: 1.5 }}>
                          <Circle size={8} color="#8E54F7" />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: "0.95rem",
                              ml: -1,
                              color: "rgba(255, 255, 255, 0.85)",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Collapse>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => setExpanded(!expanded)}
                sx={{
                  color: "#8E54F7",
                  textTransform: "none",
                  fontSize: "1rem",
                  p: 0,
                  m: 2,
                  "&:hover": {
                    background: "transparent",
                    opacity: 0.8,
                  },
                }}
              >
                {expanded ? "View Less" : "View More"}
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ mt: 5 }}>
          <MarqueeCarousel3 />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      className="services-container"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Box
        className="fade-in-heading3"
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
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
            ML Driven Analysis
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "500", mt: 2 }}
          >
            Gain Actionable Insights
          </Typography>
        </Box>
      </Box>

      <Box
        className="animate-content-3"
        sx={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          padding: {
            md: "0 2%",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              ml: {
                md: "3%",
              },
              mb: {
                md: "1%",
                lg: "2%",
                xl: "1.5%",
              },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
              },
            }}
            className="services-title-3"
          >
            ML Driven Analysis
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
                    marginRight: {
                      md: "0%",
                      lg: "0%",
                      xl: "0%",
                    },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ChevronDown style={{ color: "#fff", marginRight: "0%" }} />
                  }
                  sx={{
                    width: {
                      md: "95%",
                    },
                    height: {
                      md: "clamp(100px, 16vh, 250px)",
                      lg: "clamp(100px, 16vh, 250px)",
                      xl: "clamp(100px, 18vh, 250px)",
                    },
                    minHeight: "auto",
                    "&.Mui-expanded": {
                      minHeight: {
                        md: 70,
                        lg: 120,
                        xl: 140,
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: {
                        xs: "1.3rem",
                        sm: "1.5rem",
                        md: "1.7rem",
                        lg: "1.9rem",
                        xl: "2.1rem",
                      },
                      position: "relative",
                      marginLeft: {
                        md: "2%",
                        lg: "2.5%",
                        xl: "2.5%",
                      },
                    }}
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
                  ref={index === services.length - 1 ? lastAccordionRef : null}
                  sx={{
                    maxWidth: "100%",
                    ml: {
                      md: "4%",
                      lg: "4.5%",
                      xl: "5%",
                    },
                  }}
                >
                  <List
                    sx={{
                      padding: 0,
                      "& .MuiListItem-root": {
                        padding: {
                          md: "4px 0px",
                        },
                      },
                    }}
                  >
                    {service.details.map((detail, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <Circle size={8} color="#fff" />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.1rem",
                                lg: "1.2rem",
                              },
                            },
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
              width: {
                xs: 20,
                sm: 25,
                md: 30,
              },
              height: {
                xs: 20,
                sm: 25,
                md: 30,
              },
              background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
              borderRadius: "50%",
              zIndex: 2,
              boxShadow: "0 0 20px rgba(255, 87, 34, 0.5)",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
        <Box
          sx={{
            mt: {
              md: 10,
              lg: 12,
              xl: 14,
            },
            ml: {
              md: "-5%",
              lg: "-6%",
              xl: "-7%",
            },
          }}
        >
          <MarqueeCarousel3 />
        </Box>
      </Box>
    </Box>
  );
});

export default MLDrivenDataAnalysis;
