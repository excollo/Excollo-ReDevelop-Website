import React, { useRef, useEffect, useState, useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ScrollContext } from "./ScrollProvider";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const CARD_WIDTH = 620;
const CARD_HEIGHT = 620;
const GAP = 950;
const TOTAL_WIDTH = CARD_WIDTH + GAP;
const SCROLL_COOLDOWN = 800;
const INITIAL_SCROLL_THRESHOLD = 20;

const carouselContent = [
  {
    title: "AI & Automation",
    description:
      "From intelligent chatbots to workflow automation, we bring AI solutions that optimize operations and reduce costs.",
  },
  {
    title: "Product Development",
    description:
      "Scalable websites, web apps, and mobile apps tailored to your business's unique needs.",
  },
  {
    title: "Tech Consultancy",
    description:
      "Identify gaps in processes, align technology to bridge those gaps, and implement transformative solutions tailored for success.",
  },
  {
    title: "Sales Channel Development",
    description:
      "Set up or enhance e-commerce and WhatsApp sales channels to unlock new growth avenues.",
  },
  {
    title: "Machine Learning-Driven Data Analysis",
    description:
      "Harness cutting-edge machine learning to decode data, predict trends, and empower precise, forward-thinking business strategies.",
  },
];

const Carousel = ({ isReverse, backgroundColor }) => {
  const containerRef = useRef(null);
  const {
    scrollPosition,
    setScrollPosition,
    activeScroller,
    setActiveScroller,
  } = useContext(ScrollContext);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const initialScrollDirection = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((clientY - rect.top) / rect.height - 0.5) * -5;

    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleWheelEvent = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!containerRef.current || isScrolling) return;

    const currentTime = Date.now();
    if (currentTime - lastScrollTime.current < SCROLL_COOLDOWN) {
      return;
    }

    if (!isScrolling && Math.abs(e.deltaY) > INITIAL_SCROLL_THRESHOLD) {
      const direction = isReverse
        ? e.deltaY > 0
          ? -1
          : 1
        : e.deltaY > 0
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventScroll = (e) => {
      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheelEvent, { passive: false });
    container.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheelEvent);
      container.removeEventListener("touchmove", preventScroll);
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "none",
        zIndex: 1,
        position: "relative",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          width: "100%",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          touchAction: "pan-x pinch-zoom",
          gap: `${GAP}px`,
        }}
      >
        {carouselContent.map((item, index) => (
          <Box
            key={index}
            className="carousel-card"
            sx={{
              flex: "0 0 auto",
              width: `${CARD_WIDTH}px`,
              height: `${CARD_HEIGHT}px`,
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100px",
              scrollSnapAlign: "center",
              cursor: "pointer",
              color: isReverse ? "white" : "black",
              textAlign: "center",
              marginLeft: index === 0 ? "30%" : "0",
              marginRight: index === carouselContent.length - 1 ? "30%" : "0",
              transition: "transform 0.3s ease, z-index 0.3s ease",
              zIndex: 1,
              transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => console.log(`Card ${item.title} clicked`)}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                background: "linear-gradient(to bottom right ,#2579e3, #8e54f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const TitleCarousel = () => <Carousel isReverse={false} />;
