import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

const HeroPageSection6 = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const textRef1 = useRef(null); // Ref for "Ready for your"
  const textRef2 = useRef(null); // Ref for "digital-transformation?"
  const targetLetters = ["e", "a", "d", "y", "o", "f", "n", "s", "i"];

  // Helper function to shuffle an array
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

    // Split both text contents into spans
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

    // Collect all target letters from both refs
    const letters1 = textRef1.current.querySelectorAll(".target-letter");
    const letters2 = textRef2.current.querySelectorAll(".target-letter");
    const allLetters = [...letters1, ...letters2];

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
          rect.height / 2,
      };
    });

    if (letterPositions.length === 0) return;

    // Shuffle letter positions
    letterPositions = shuffleArray(letterPositions);

    // Create timeline
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 0.8, ease: "power10.inOut" },
    });

    letterPositions.forEach((pos, index) => {
      const prevPos = index > 0 ? letterPositions[index - 1] : null;
      tl.to(circleRef.current, {
        x: pos.x,
        y: pos.y,
        onStart: () => {
          gsap.to(pos.element, { opacity: 0, duration: 0.8 }); // Make the letter invisible
          if (prevPos) {
            gsap.to(prevPos.element, {
              opacity: 1,
              duration: 0.3,
              delay: 0.2,
            });
          }
        },
      });

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

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        marginLeft: "10.5%",
        color: "#fff",
        gap: "10rem",
        paddingBottom: "5rem",
      }}
    >
      <Box
        ref={containerRef}
        sx={{ flex: "1", maxWidth: "600px", position: "relative" }}
      >
        <Box
          ref={circleRef}
          sx={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, #E6E6FA, #9370DB)",
            borderRadius: "50%",
            position: "absolute",
            zIndex: 2,
            boxShadow: "0 0 15px rgba(147, 112, 219, 0.5)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "400",
            marginBottom: "1rem",
            "& .letter": {
              display: "inline-block",
              position: "relative",
              transition: "opacity 0.2s",
            },
            "& .target-letter": {
              display: "inline-block",
              position: "relative",
              transition: "opacity 0.2s",
              color: "#E6E6FA",
            },
          }}
        >
          <Box
            variant="h3"
            fontWeight="bold"
            ref={textRef1}
            sx={{
              display: "flex",
            }}
          >
            Ready&nbsp;for&nbsp;your
          </Box>
          <Box
            ref={textRef2}
            component="span"
            variant="h3"
            sx={{
              background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "#a559c8",
              color: "#a559c8",
              fontWeight: "bold",
            }}
          >
            digital&nbsp;Transformation?
          </Box>
        </Typography>
      </Box>
      <Box>
        <Typography
          component="a"
          href="#scheduleaconsultation"
          sx={{
            display: "inline-block",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "16px",
            border: "1px solid transparent",
            padding: "20px 60px",
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
    </Box>
  );
};

export default HeroPageSection6;
