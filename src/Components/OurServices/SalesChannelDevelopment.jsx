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
import MarqueeCarousel2 from "./MarqueeCarousel/MarqueeCarousel2";

gsap.registerPlugin(ScrollTrigger);

const SalesChannelDevelopment = forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false);
  const [currentDotIndex, setCurrentDotIndex] = useState(0);
  const symbolRefs = useRef([]);
  const circleRef = useRef(null);
  const lastAccordionRef = useRef(null);
  const sectionRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSpecified = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isXtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const is1536pxto1789px = useMediaQuery(
    "(min-width: 1536px) and (max-width: 1789px)"
  );
  const is1790pxto2000px = useMediaQuery(
    "(min-width: 1790px) and (max-width: 2000px)"
  );
  const is2001pxto2250px = useMediaQuery(
    "(min-width: 2001px) and (max-width: 2275px)"
  );
  const is2251pxto2550px = useMediaQuery(
    "(min-width: 2251px) and (max-width: 2550px)"
  );

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setExpanded(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      }, 1000);

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

      let topOffset = rect.top - parentRect.top + rect.height / 2 - 170;
      let leftOffset = rect.left - parentRect.left + rect.width / 2 - 20;

      if (isLargeScreen) {
        topOffset = rect.top - parentRect.top + rect.height / 2 - 170;
        leftOffset = rect.left - parentRect.left + rect.width / 2 - 27;
      }
      if (is1536pxto1789px) {
        topOffset = rect.top - parentRect.top + rect.height / 2 - 170;
        leftOffset = rect.left - parentRect.left + rect.width / 2 - 32;
      }
      if (is1790pxto2000px) {
        topOffset = rect.top - parentRect.top + rect.height / 2 - 170;
        leftOffset = rect.left - parentRect.left + rect.width / 2 - 37;
      }
      if (is2001pxto2250px) {
        topOffset = rect.top - parentRect.top + rect.height / 2 - 170;
        leftOffset = rect.left - parentRect.left + rect.width / 2 - 42;
      }

      if (is2251pxto2550px) {
        topOffset = rect.top - parentRect.top + rect.height / 2 - 170;
        leftOffset = rect.left - parentRect.left + rect.width / 2 - 48;
      }
      gsap.to(circleRef.current, {
        top: topOffset,
        left: leftOffset,
        ease: "power2.inOut",
        visibility: "visible",
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    if (!isMobile && !isTablet) {
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
          y: 300,
        },
        {
          opacity: 1,
          y: 300,
          duration: 1,
          scrollTrigger: {
            trigger: ".fade-in-heading-2",
            start: "top 100%",
            end: "top 50%",
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
            end: "top 35%",
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
            start: "top 20%",
            end: "top 10%",
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
        ? "Launch or optimize your e-commerce platforms."
        : "\u00A0\u00A0\u00A0Launch or optimize your e-commerce platforms.",
      details: [
        "Set up and configure your e-commerce store seamlessly on Shopify.",
        "Design visually appealing and user-friendly interfaces tailored to your brand.",
        "Provide comprehensive support, including user training, SEO optimization, integrations, and more.",
      ],
    },
    {
      id: "panel2",
      title: isMobile
        ? "Set up WhatsApp sales channels to enhance customer engagement and convenience."
        : "\u00A0\u00A0\u00A0Set up WhatsApp sales channels to enhance customer engagement and convenience.",
      details: [
        "Use machine learning algorithms to retarget customers effectively.",
        "Design high-conversion templates tailored to customer needs.",
        "Build automation workflows to streamline operations within the WhatsApp channel.",
      ],
    },
    {
      id: "panel3",
      title: isMobile
        ? "Social Media Marketing with content creation."
        : "\u00A0\u00A0\u00A0Social Media Marketing with content creation.",
      details: [
        "Develop engaging, brand-consistent content for various platforms.",
        "Schedule and manage posts to ensure optimal reach and engagement.",
        "Monitor performance metrics to refine strategies and maximize impact.",
      ],
    },
    {
      id: "panel4",
      title: isMobile
        ? "Search Engine Optimization (SEO)"
        : "\u00A0\u00A0\u00A0Search Engine Optimization (SEO)",
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

  const containerStyles = {
    width: "100%",
    minHeight: isTablet || isSpecified ? "auto" : "120vh",
    position: "relative",
    marginBottom: "5rem",
    padding: isTablet || isSpecified ? "1rem" : 0,
    ml: isTablet || isSpecified ? -5 : "-5%",
  };

  const contentStyles = {
    maxWidth: isTablet || isSpecified ? "90%" : "1200px",
    margin: "0 auto",
    position: "relative",
    padding: isTablet || isSpecified ? "1rem" : "2rem",
  };

  const titleStyles = {
    fontSize: isTablet || isSpecified ? "2rem" : "3rem",
    textAlign: "center",
    ml: isTablet ? 0 : "5%",
    marginBottom: isTablet || isSpecified ? "2rem" : "3rem",
  };

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
                Sales Channel Development
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
                    ref={
                      index === services.length - 1 ? lastAccordionRef : null
                    }
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
            <MarqueeCarousel2 />
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
            Sales Channel Development
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
          <MarqueeCarousel2 />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      ref={sectionRef}
      className="services-container"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Box
        className="fade-in-heading-2"
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
            Sales Channel Development
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "500", mt: 2 }}
          >
            Unlock Growth Potential
          </Typography>
        </Box>
      </Box>

      <Box
        className="animate-content-2"
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
              color: "grey.500",
              ml: {
                md: "3%",
              },
              mb: {
                md: "1%",
                lg: "2%",
                xl: "1.5%",
              },
              fontSize: {
                md: `clamp(0.5rem, calc(0.5rem + 1vw), 1.5rem)`,
                lg: `clamp(0.5rem, calc(0.8rem + 1vw), 2rem)`,
                xl: `clamp(0.5rem, calc(0.5rem + 1vw), 3rem)`,
              },
            }}
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
                        md: `clamp(0.5rem, calc(0.5rem + 1vw), 1.5rem)`,
                        lg: `clamp(0.5rem, calc(0.8rem + 1vw), 2rem)`,
                        xl: `clamp(0.5rem, calc(0.5rem + 1vw), 3rem)`,
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
                                md: `clamp(0.5rem, calc(0.3rem + 1vw), 1.5rem)`,
                                lg: `clamp(0.5rem, calc(0.3rem + 1vw), 1.5rem)`,
                                xl: `clamp(0.5rem, calc(0.3rem + 1vw), 1.5rem)`,
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
          <MarqueeCarousel2 />
        </Box>
      </Box>
    </Box>
  );
});

export default SalesChannelDevelopment;
