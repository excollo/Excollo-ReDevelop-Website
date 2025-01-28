import React, { useRef, useEffect, useState, useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ScrollContext } from "./ScrollProvider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";

const CARD_WIDTH = 620;
const GAP = 950;
const TOTAL_WIDTH = CARD_WIDTH + GAP;
const SCROLL_COOLDOWN = 800;
const INITIAL_SCROLL_THRESHOLD = 20;

const carouselContent = [
  {
    title: "AI & Automation",
    description:
      " Identify gaps in processes, align technology to bridge those gaps, and implement transformative solutions tailored for success.",
    link: "/services",
  },
  {
    title: "Sales Channel Development",
    description:
      "Scalable websites, web apps, and mobile apps tailored to meet your business's unique challenges and goals.",
    link: "/services",
  },
  {
    title: "ML Driven Analysis",
    description:
      "Harness cutting-edge machine learning to decode data, predict trends, and empower precise, forward-thinking business strategies.",
    link: "/services",
  },
  {
    title: "Product Development",
    description:
      "Set up or enhance e-commerce and WhatsApp sales channels to unlock new growth opportunities and expand reach.",
    link: "/services",
  },
  {
    title: "Tech Consultancy",
    description:
      "From intelligent chatbots to workflow automation, we bring AI solutions that optimize operations and reduce costs.",
    link: "/services",
  },
];

const ResponsiveCard = ({ title, description, type, isTablet, isMobile }) => {
  return (
    <Box
      sx={{
        width: "90%",
        mb: 4,
        p: 2,
        ml: isTablet ? "50px" : "0",
        borderRadius: 2,
        fontFamily: '"Inter", sans-serif',
        backgroundColor: "linear-gradient(180deg, #2579e3, #8e54f7 100%)",
        // backdropFilter: "blur(-10px)",
        boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 10px 0px",
        border: "1px solid #7e22ce",

        alignItems: "center",
        cursor: "pointer",
        transition: "transform 0.3s",
        ...(isTablet && {
          width: "100%",
          height: "auto",
        }),
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 400,
          fontSize: isTablet ? "2rem" : "1.5rem",
          mb: 2,
          textAlign: "center",
          background: isTablet
            ? "linear-gradient(180deg, #2579e3, #8e54f7 100%)"
            : "linear-gradient(90deg, #2579e3, #8e54f7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#ddd",
          fontWeight: 200,
          letterSpacing: "0.001em",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const ResponsiveView = ({ type, isTablet }) => {
  return (
    <Box sx={{ p: 2, height: "150vh" }}>
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: isTablet ? "repeat(1, 600px)" : "repeat(1, 1fr)",
          gridTemplateRows: isTablet ? "repeat(5, 200px)" : "repeat(5, 1fr)",
          gap: 1,
        }}
      >
        {carouselContent.map((item, index) => (
          <ResponsiveCard
            key={index}
            {...item}
            type={type}
            isTablet={isTablet}
          />
        ))}
      </Box>
    </Box>
  );
};

const DesktopCarousel = ({ isReverse, type = "title" }) => {
  const containerRef = useRef(null);
  const {
    scrollPosition,
    setScrollPosition,
    activeScroller,
    setActiveScroller,
    hoveredIndex,
    setHoveredIndex,
    rotation,
    setRotation,
  } = useContext(ScrollContext);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOverCard, setIsOverCard] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const initialScrollDirection = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const specificCondition = useMediaQuery(
    "(min-width: 1800px) and (max-width: 2700px) and ( max-height: 1600px)"
  );
  const specificGap2400 = useMediaQuery(
    "(min-width: 2100px) and (max-width: 2400px) and ( max-height: 1600px)"
  );
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  const isSpecificSize = useMediaQuery(
    "(max-width: 1024px) and (max-height: 725px)"
  );

  const handleMouseMove = (e, index) => {
    if (isMobile || isTablet) return;

    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const isCursorOverCard =
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom;

    setIsOverCard(isCursorOverCard);

    if (isCursorOverCard) {
      if (type === "title") {
        const x = ((clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((clientY - rect.top) / rect.height - 0.5) * -15;
        setRotation({ x, y });
        setHoveredIndex(index);
      }
    } else {
      setRotation({ x: 0, y: 0 });
      setHoveredIndex(null);
    }
  };

  const handleMouseLeave = () => {
    if (type === "title") {
      setRotation({ x: 0, y: 0 });
      setHoveredIndex(null);
    }
  };

  const handleWheelEvent = (e) => {
    if (isMobile || isTablet) return;

    if (!isOverCard) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
      return;
    }

    e.stopPropagation();
    e.preventDefault();

    if (!containerRef.current || isScrolling) return;

    const currentTime = Date.now();
    if (currentTime - lastScrollTime.current < SCROLL_COOLDOWN) return;

    if (
      !isScrolling &&
      (Math.abs(e.deltaY) > INITIAL_SCROLL_THRESHOLD ||
        Math.abs(e.deltaX) > INITIAL_SCROLL_THRESHOLD)
    ) {
      const direction = isReverse
        ? e.deltaY > 0 || e.deltaX > 0
          ? -1
          : 1
        : e.deltaY > 0 || e.deltaX > 0
        ? 1
        : -1;
      initialScrollDirection.current = direction;

      const currentPosition = containerRef.current.scrollLeft;
      const currentIndex = Math.round(currentPosition / TOTAL_WIDTH);
      const targetIndex = Math.max(
        0,
        Math.min(carouselContent.length - 1, currentIndex + direction)
      );
      const targetPosition = targetIndex * TOTAL_WIDTH;

      if (targetPosition !== currentPosition) {
        setIsScrolling(true);
        lastScrollTime.current = currentTime;
        setActiveScroller(isReverse ? "reverse" : "normal");
        setScrollPosition(targetPosition);

        containerRef.current.scrollTo({
          left: targetPosition,
          behavior: "smooth",
        });

        setTimeout(() => {
          setIsScrolling(false);
          initialScrollDirection.current = null;
          setActiveScroller(null);
        }, SCROLL_COOLDOWN);
      }
    }
  };

  const handleContainerMouseLeave = () => {
    setIsOverCard(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheelEvent, { passive: false });
    container.addEventListener("touchmove", (e) => e.preventDefault(), {
      passive: false,
    });
    container.addEventListener("mouseleave", handleContainerMouseLeave);

    return () => {
      container.removeEventListener("wheel", handleWheelEvent);
      container.removeEventListener("touchmove", (e) => e.preventDefault());
      container.removeEventListener("mouseleave", handleContainerMouseLeave);
    };
  }, [isScrolling, isOverCard]);

  useEffect(() => {
    if (!isOverCard) {
      setRotation({ x: 0, y: 0 });
      setHoveredIndex(null);
    }
  }, [isOverCard]);

  const handleButtonClick = (direction) => {
    if (!containerRef.current || isScrolling) return;

    const currentPosition = containerRef.current.scrollLeft;
    const currentIndex = Math.round(currentPosition / TOTAL_WIDTH);
    const targetIndex = Math.max(
      0,
      Math.min(carouselContent.length - 1, currentIndex + direction)
    );
    const targetPosition = targetIndex * TOTAL_WIDTH;

    if (targetPosition !== currentPosition) {
      setIsScrolling(true);
      setActiveScroller(isReverse ? "reverse" : "normal");
      setScrollPosition(targetPosition);

      containerRef.current.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
        setActiveScroller(null);
      }, SCROLL_COOLDOWN);
    }
  };

  const handleDotClick = (index) => {
    if (!containerRef.current || isScrolling) return;

    const targetPosition = index * TOTAL_WIDTH;

    setIsScrolling(true);
    setActiveScroller(isReverse ? "reverse" : "normal");
    setScrollPosition(targetPosition);

    containerRef.current.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
      setActiveScroller(null);
    }, SCROLL_COOLDOWN);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheelEvent, { passive: false });
    container.addEventListener("touchmove", (e) => e.preventDefault(), {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheelEvent);
      container.removeEventListener("touchmove", (e) => e.preventDefault());
    };
  }, [isScrolling]);

  useEffect(() => {
    if (containerRef.current) {
      const position = isReverse
        ? (carouselContent.length - 1) * TOTAL_WIDTH - scrollPosition
        : scrollPosition;

      containerRef.current.scrollTo({
        left: position,
        behavior: activeScroller ? "smooth" : "auto",
      });
    }
  }, [scrollPosition, activeScroller]);

  const getCardStyle = (index) => {
    const isHovered = hoveredIndex === index;
    const baseStyle = {
      flex: "0 0 auto",
      width: isMobile || isTablet ? "80%" : specificGap2400 ? "50%" : "80%",
      height:
        isMobile || isTablet
          ? "auto"
          : specificCondition
          ? "650px"
          : md ? "400px" : lg ? "400px" : "500px",
      marginTop: isMobile || isTablet ? "1rem" : "3rem",
      marginBottom: isMobile || isTablet ? "1rem" : "3rem",
      padding: isMobile || isTablet ? "1rem" : "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: type === "description" ? "60px" : "20px",
      scrollSnapAlign: "center",
      cursor: type === "title" ? "pointer" : "default",
      color: isReverse ? "white" : "black",
      textAlign: "center",
      marginLeft: index === 0 ? (type === "title" ? "40%" : "30%") : "0",
      marginRight: index === carouselContent.length - 1 ? "40%" : "0",
      transition: "all 0.3s ease",
      transformStyle: "preserve-3d",
      backgroundColor:
        type === "description" ? "rgba(255, 255, 255, 0.1)" : "transparent",

      boxShadow:
        type === "title"
          ? "0 10px 30px -15px rgba(0,0,0,0.3)"
          : "0 10px 30px -15px rgba(0,0,0,0.3)",
      transform: isHovered
        ? `perspective(1000px) scale(1) rotateX(${rotation.y}deg) rotateY(${
            rotation.x
          }deg) translateZ(${type === "title" ? "100px" : "40px"}) translateZ(${
            type === "description" ? "100px" : "50px"
          })`
        : `perspective(1000px) scale(1.05) rotateX(${rotation.y}deg) rotateY(${
            rotation.x
          }deg) translateZ(${type === "title" ? "30px" : "20px"}) translateZ(${
            type === "description" ? "40px" : "10px"
          })`,
    };

    return baseStyle;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "none",
        position: "relative",
        perspective: "1000px",
      }}
    >
      {!isMobile && !isTablet && (
        <IconButton
          onClick={() => handleButtonClick(-1)}
          disabled={scrollPosition === 0}
          sx={{
            position: "absolute",
            left: "10px",
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            marginLeft: "7rem",
            "&.Mui-disabled": {
              color: "#716b6b",
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          width: "100%",
          height: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": { display: "none" },
          touchAction: "pan-x pinch-zoom",
          gap: {
            xs: "1rem",
            sm: "1rem",
            md: `${GAP}px`,
            lg: `${GAP}px`,
            xl: specificCondition ? "19%" : "20%",
          },
          paddingLeft: "15%", // Add padding for left side
          paddingRight: "30%", // Add padding for right side
        }}
      >
        <Box
          sx={{
            display: specificCondition ? "block" : "none",
            width: "12%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></Box>
        {carouselContent.map((item, index) => (
          <Box
            key={index}
            className="carousel-card"
            sx={getCardStyle(index)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              if (type === "title") {
                navigate(item.link, { replace: true });
                window.scrollTo(0, 0);
              }
            }}
          >
            {type === "title" ? (
              <Link
                to={item.link || "#"}
                style={{
                  marginTop: isSpecificSize ? "-10rem" : "-8rem",
                  transformStyle: "preserve-3d",
                  display: "block",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="400"
                  sx={{
                    background:
                      "linear-gradient(180deg, #2579e3 30%, #8e54f7 100%)",
                    fontSize:
                      isMobile || isTablet || isSpecificSize
                        ? "2.5rem"
                        : "3rem",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    // transform:
                    //   hoveredIndex === index
                    //     ? "translateZ(120px) scale(1.1)"
                    //     : "translateZ(80px) scale(1)",
                    // transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    marginBottom: "1rem",
                    textShadow:
                      hoveredIndex === index
                        ? "4px 4px 8px rgba(0,0,0,0.2), 0 0 30px rgba(137, 84, 247, 0.3)"
                        : "2px 2px 4px rgba(0,0,0,0.1)",
                    letterSpacing: hoveredIndex === index ? "1px" : "0px",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-10px",
                      left: "0",
                      width: "100%",
                      // height: "2px",
                      // background:
                      //   "linear-gradient(90deg, transparent, #8e54f7, transparent)",
                      transform:
                        hoveredIndex === index ? "scaleX(0.5)" : "scaleX(0)",
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            ) : (
              <Typography
                variant="h5"
                fontWeight="300"
                sx={{
                  color: "#ddd",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  width: "95%",
                  marginTop: "12%",
                  transform: "translateZ(40px)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                {item.description}
              </Typography>
            )}
          </Box>
        ))}
        <Box
          sx={{
            display: specificCondition ? "block" : "none",
            width: "12%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 3,
            position: "absolute",
            top: 0,
            right: 0,
          }}
        ></Box>
      </Box>
      {!isMobile && !isTablet && (
        <IconButton
          onClick={() => handleButtonClick(1)}
          disabled={
            scrollPosition === (carouselContent.length - 1) * TOTAL_WIDTH
          }
          sx={{
            position: "absolute",
            right: "10px",
            zIndex: 3,
            color: "white",
            "&.Mui-disabled": {
              color: "#716b6b",
            },
            marginRight: "7rem",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
      <Box
        sx={{
          position: "absolute",
          bottom: "-2rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 3,
        }}
      >
        {carouselContent.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                scrollPosition / TOTAL_WIDTH === index ? "white" : "gray",
              margin: "0 8px",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Carousel = ({ isReverse, type = "title" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  if (isMobile || isTablet) {
    return <ResponsiveView type={type} isTablet={isTablet} />;
  }

  return <DesktopCarousel isReverse={isReverse} type={type} />;
};

export const TitleCarousel = () => <Carousel isReverse={false} type="title" />;
export const DescriptionCarousel = () => (
  <Carousel isReverse={true} type="description" />
);
