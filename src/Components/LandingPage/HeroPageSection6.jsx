import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

const HeroPageSection6 = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const targetLetters = ["e", "a", "d", "y", "o", "n", "s"];

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  useEffect(() => {
    if (
      !textRef1.current ||
      !textRef2.current ||
      !circleRef.current ||
      !containerRef.current
    )
      return;

    const splitTextIntoSpans = (textRef) => {
      const text = textRef.textContent;
      textRef.innerHTML = text
        .split("")
        .map((char) => {
          const isTarget = targetLetters.includes(char.toLowerCase());
          return `<span class="${
            isTarget ? "target-letter" : "letter"
          }" data-letter="${char}">${char}</span>`;
        })
        .join("");
    };

    splitTextIntoSpans(textRef1.current);
    splitTextIntoSpans(textRef2.current);

    const letters1 = textRef1.current.querySelectorAll(".target-letter");
    const letters2 = textRef2.current.querySelectorAll(".target-letter");
    const allLetters = [...letters1, ...letters2];

    const offsetY = 8;

    const containerRect = containerRef.current.getBoundingClientRect();
    let letterPositions = allLetters.map((letter) => {
      const rect = letter.getBoundingClientRect();
      return {
        element: letter,
        x:
          rect.left -
          containerRect.left +
          containerRef.current.scrollLeft +
          rect.width / 2,
        y:
          rect.top -
          containerRect.top +
          containerRef.current.scrollTop +
          rect.height / 2 +
          offsetY,
      };
    });

    if (letterPositions.length === 0) return;

    letterPositions = shuffleArray(letterPositions);

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    letterPositions.forEach((pos, index) => {
      const prevPos = index > 0 ? letterPositions[index - 1] : null;

      // Move to position
      tl.to(circleRef.current, {
        x: pos.x,
        y: pos.y,
        duration: 0.8,
        onStart: () => {
          gsap.to(pos.element, { opacity: 0, duration: 0.4 });
          if (prevPos) {
            gsap.to(prevPos.element, {
              opacity: 1,
              duration: 0.3,
              delay: 0.2,
            });
          }
        },
      });

      // Add pulse animation
      tl.to(
        circleRef.current,
        {
          scale: 1.3,
          duration: 0.3,
          ease: "power2.out",
        },
        ">"
      );

      tl.to(
        circleRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        ">"
      );

      // Pause for remaining time to complete 1 second
      tl.to({}, { duration: 0.4 });

      if (index === letterPositions.length - 1) {
        tl.add(() => {
          gsap.to(pos.element, {
            opacity: 1,
            duration: 0.3,
            delay: 0.2,
          });
        });
      }
    });

    // Set initial position
    gsap.set(circleRef.current, {
      x: letterPositions[0].x,
      y: letterPositions[0].y,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "5rem 2rem",
        color: "#fff",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          position: "relative",
          width: "100%",
          marginBottom: "4rem",
        }}
      >
        <Box
          ref={circleRef}
          sx={{
            width: "50px",
            height: "50px",
            background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
            borderRadius: "50%",
            position: "absolute",
            zIndex: 2,
            boxShadow: "0 0 15px rgba(147, 112, 219, 0.5)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Typography
          variant="h1"
          fontWeight="500"
          sx={{
            letterSpacing: "0.01em",
            "& .letter": {
              display: "inline-block",
              position: "relative",
              transition: "opacity 0.2s",
            },
            "& .target-letter": {
              display: "inline-block",
              position: "relative",
              transition: "opacity 0.2s",
              color: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
            },
          }}
        >
          <Box
            variant="h1"
            ref={textRef1}
            sx={{
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Ready&nbsp;for&nbsp;your
          </Box>
          <Box
            ref={textRef2}
            variant="h1"
            sx={{
              maxWidth: "100%",
              color: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:
                "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
            }}
          >
            digital&nbsp;Transformation?
          </Box>
        </Typography>
      </Box>
      <Typography
        component="a"
        href="#scheduleaconsultation"
        sx={{
          display: "inline-block",
          color: "#ffffff",
          textDecoration: "none",
          fontSize: "18px",
          border: "1px solid transparent",
          padding: "20px 70px",
          borderRadius: "40px",
          background:
            "linear-gradient(to right, #000, #000) padding-box, linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%) border-box",
          zIndex: 3,
          position: "relative",
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
            color: "#ffffff",
          },
        }}
      >
        Talk to Us
      </Typography>
    </Box>
  );
};

export default HeroPageSection6;