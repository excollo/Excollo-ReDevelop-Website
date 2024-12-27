import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection5 = ({ onComplete }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  const svgRefs = useRef([]);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [isScrollingDown, setIsScrollingDown] = useState(true); // Track scroll direction

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setIsScrollingDown(newScrollY > scrollY);
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    // Flag to track whether the heading animation has started
    let headingAnimationStarted = false;

    const headingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom", // Trigger the heading animation
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none reverse",
        onEnter: () => {
          headingAnimationStarted = true;
          svgRefs.current.forEach((refs) => {
            if (refs.top && refs.top.scrollTrigger) {
              refs.top.scrollTrigger.kill();
            }
            if (refs.bottom && refs.bottom.scrollTrigger) {
              refs.bottom.scrollTrigger.kill();
            }
          });
        },
        onLeave: () => {
          if (onComplete) {
            onComplete();
          }
        },
      },
    });

    headingTimeline.fromTo(
      textRef.current,
      { fontSize: "8rem" },
      {
        fontSize: "3.5rem",
        fontWeight: "bold",
        duration: 0.5,
        ease: "power6.out",
      }
    );

    // Ensure icons are in sync and clipPath animations are applied to all SVGs
    svgRefs.current.forEach((refs, index) => {
      const threshold = isScrollingDown ? 1 : 0.7;

      if (refs.top && !headingAnimationStarted) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: refs.top,
            start: `top ${threshold * 100}%`,
            end: `top ${threshold * 30}%`,
            scrub: true,
            toggleActions: "play none none reverse",
            onComplete: () => {
              if (index === svgRefs.current.length - 1 && onComplete) {
                onComplete();
              }
            },
          },
        });

        timeline
          .fromTo(
            refs.top,
            { clipPath: "polygon(0 0, 100% 0, 0 0, 0% 100%)" },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              duration: 0.3, // Make it consistent across all icons
              ease: "power2.out",
            }
          )
          .fromTo(
            `.icon-${index}`,
            { y: 200 },
            { y: -50, duration: 0.5, ease: "power2.out" }
          );
      }

      if (refs.bottom && !headingAnimationStarted) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: refs.bottom,
            start: `top ${threshold * 100}%`,
            end: `top ${threshold * 30}%`,
            scrub: true,
            toggleActions: "play none none reverse",
            onComplete: () => {
              if (index === svgRefs.current.length - 1 && onComplete) {
                onComplete();
              }
            },
          },
        });

        timeline
          .fromTo(
            refs.bottom,
            { clipPath: "polygon(0 0, 100% 0, 0 0, 0% 100%)" },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              duration: 0.3, // Consistent across all SVGs
              ease: "power2.out",
            }
          )
          .fromTo(
            `.icon-${index}`,
            { y: 300 },
            { y: -50, duration: 0.5, ease: "power2.out" }
          )
          .fromTo(
            `.title-${index}`,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
            "<"
          )
          .fromTo(
            `.description-${index}`,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
            "<"
          );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onComplete, isScrollingDown]);

  const steps = [
    {
      icon: (
        <Box
          className="icon icon-0"
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            position: "relative",
            margin: "0 auto",
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: 1,
          }}
        />
      ),
      title: "Understand Your Needs",
      description:
        "In-depth discovery to align with your business goals and make your business .",
    },
    {
      icon: (
        <Box
          className="icon icon-1"
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M9 21h6v-2H9v2zm3-19a7 7 0 0 0-7 7c0 2.62 1.64 4.87 4 5.65V17a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.35c2.36-.78 4-3.03 4-5.65a7 7 0 0 0-7-7z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            position: "relative",
            margin: "0 auto",
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: 1,
          }}
        />
      ),
      title: "Craft a Tailored Plan",
      description:
        "Strategy, implementation, and optimization designed for measurable outcomes.",
    },
    {
      icon: (
        <Box
          className="icon icon-2"
          sx={{
            background: "linear-gradient(180deg, #2579e3, #8e54f7)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22black%22><path d=%22M19.41 7.41 12 14.83 8.59 11.41 7.17 12.83l4.83 4.83 8.25-8.25z%22/></svg>');",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            height: "48px",
            width: "48px",
            position: "relative",
            margin: "0 auto",
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: 1,
          }}
        />
      ),
      title: "Deliver and Iterate",
      description:
        "Continuous improvement ensures solutions stay ahead of the curve.",
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{ color: "#fff", marginTop: "-5rem", minHeight: "100vh" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          marginTop: "-10rem",
          fontFamily: '"Inter", sans-serif',
          position: "relative",
          zIndex: 0,
        }}
      >
        {/* Main Heading */}
        <Box
          ref={ref}
          sx={{
            textAlign: "center",
            zIndex: 2, // Make sure it transitions over the content
          }}
        >
          <Typography ref={textRef} variant="h2" fontWeight="bold">
            How We{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work?
            </Box>
          </Typography>
        </Box>
        <Grid container justifyContent="center" sx={{ marginTop: "-5rem" }}>
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                textAlign: "center",
                borderRadius: 2,
                p: 3,
                position: "relative",
              }}
            >
              <Box
                className="scroll"
                position="relative"
                zIndex={1}
                sx={{
                  mb: 2,
                  marginTop: "15rem",
                  zIndex: 1,
                }}
                ref={(el) =>
                  (svgRefs.current[index] = {
                    ...svgRefs.current[index],
                  })
                }
              >
                {step.icon}
              </Box>
              <Typography
                className={`title-${index}`}
                variant="h6"
                gutterBottom
                sx={{
                  zIndex: 1,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                className={`description-${index}`}
                variant="body2"
                sx={{
                  zIndex: 2,
                }}
              >
                {step.description}
              </Typography>
              <Box
                component="svg"
                width="157"
                height="20"
                viewBox="0 0 400 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                position="relative"
                zIndex={2} // Adjusted to be above other elements
                ref={(el) =>
                  (svgRefs.current[index] = {
                    ...svgRefs.current[index],
                    top: el,
                  })
                }
                sx={{
                  marginLeft: "38%",
                  marginTop: "7rem", // Adjusted for visibility
                  display: "block",
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", // Initially hidden
                  transition: "clip-path 1s ease-in-out",
                }}
              >
                <path
                  d="M6.78125 10.64L13.8769 2C14.0663 1.77 14.3453 1.64 14.6443 1.64L144.913 2C145.241 2 145.55 2.17 145.74 2.44L151.5 11"
                  stroke="#6b3f9d"
                  strokeWidth="4"
                ></path>
              </Box>
              <Box
                component="svg"
                width="157"
                height="20"
                viewBox="0 0 400 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                position="relative"
                zIndex={3}
                ref={(el) =>
                  (svgRefs.current[index] = {
                    ...svgRefs.current[index],
                    bottom: el,
                  })
                }
                sx={{
                  marginLeft: "38%",
                  marginTop: "-18px",
                  display: "block",
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", // Initially hidden
                  transition: "clip-path 1s ease-in-out",
                }}
              >
                <path
                  d="M150.802 10L155.822 17.44C156.272 18.1 155.792 19 154.992 19H2.00249C1.15249 19 0.692494 18.02 1.23249 17.36L7.30249 10"
                  stroke="#6b3f9d"
                  strokeWidth="4"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroPageSection5;
