import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection5 = ({onAnimationComplete}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const textRef = useRef(null);
  const svgTopRefs = useRef([]);
  const svgBottomRefs = useRef([]);
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    const headingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 5,
      },
    });

    headingTimeline.fromTo(
      textRef.current,
      { scale: 2 },
      { scale: 1, ease: "power1.out" }
    );

    const svgTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".svg-container",
        start: "bottom 50%",
        end: "center center",
        scrub: 4,
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to([...svgTopRefs.current, ...svgBottomRefs.current], {
              clipPath: "polygon(0 0,0 0, 0 0, 0% 0%)",
              opacity: 0,
              duration: 0.1,
              ease: "power2.in",
            });
          }
        },
      },
    });

    svgTimeline.fromTo(
      svgTopRefs.current,
      {
        clipPath: "polygon(0 0,0 0, 0 0, 0% 0%)",
        opacity: 0,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        opacity: 1,
        duration: 5,
        ease: "power10.out",
        stagger: 0,
      }
    );

    svgTimeline.fromTo(
      svgBottomRefs.current,
      {
        clipPath: "polygon(0 0, 0% 0, 0 0, 0% 0%)",
        opacity: 0,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        opacity: 1,
        duration: 5,
        ease: "power10.out",
        stagger: 0,
      },
      "<"
    );

    const iconTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".svg-container",
        start: "bottom 45%",
        end: "center center",
        scrub: 2,
        onUpdate: (self) => {
          if (self.direction === -1) {
            iconRefs.current.forEach((ref) => {
              if (ref) ref.style.opacity = 1;
            });
          }
        },
        onComplete: () => {
          onAnimationComplete();
        },
      },
    });

    iconTimeline
      .set(iconRefs.current, {
        y: "320",
        opacity: 0,
        duration: 0.01,
      })
      .to(iconRefs.current, {
        opacity: 1,
        duration: 0.01,
      })
      .to(iconRefs.current, {
        y: "-50",
        duration: 3,
        stagger: 0.0,
      })
      .to(iconRefs.current, {
        y: "0",
        duration: 2,
        stagger: 0.0,
      });

    iconTimeline
      .set(
        contentRefs.current,
        {
          scale: 0,
          opacity: 0,
          duration: 1.0,
        },
        "<+=1"
      )
      .to(contentRefs.current, {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          onAnimationComplete();
        },
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onAnimationComplete]);

  const steps = [
    {
      icon: (
        <Box
          ref={(el) => (iconRefs.current[0] = el)}
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
            opacity: 0,
            transform: "translateY(340px)",
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
          ref={(el) => (iconRefs.current[1] = el)}
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
            opacity: 0,
            transform: "translateY(340px)",
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
          ref={(el) => (iconRefs.current[2] = el)}
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
            opacity: 0,
            transform: "translateY(340px)",
          }}
        />
      ),
      title: "Deliver and Iterate",
      description:
        "Continuous improvement ensures solutions stay ahead of the curve.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "78%",
          left: "15%",
          width: "70%",
          height: "6%",
          background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 75%)`,
          zIndex: 0,
        }}
      />
      <Box sx={{ marginBottom: "-5rem" }}>
        <Typography
          sx={{
            textAlign: "center",
          }}
          ref={textRef}
          variant="h2"
          fontWeight="bold"
        >
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
      <Grid container justifyContent="center" className="svg-container">
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
              position="relative"
              zIndex={1}
              sx={{
                mb: 2,
                marginTop: "15rem",
                zIndex: 2,
              }}
            >
              {step.icon}
            </Box>
            <Box
              ref={(el) => (contentRefs.current[index] = el)}
              sx={{
                opacity: 0,
                transform: "scale(0)",
                marginTop: "4rem",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  zIndex: 1,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                width={380}
                marginLeft={2}
                sx={{
                  zIndex: 1,
                }}
              >
                {step.description}
              </Typography>
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
              zIndex={2}
              ref={(el) => (svgTopRefs.current[index] = el)}
              sx={{
                marginLeft: "38%",
                marginTop: "10rem",
                display: "block",
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
              ref={(el) => (svgBottomRefs.current[index] = el)}
              sx={{
                marginLeft: "38%",
                marginTop: "-20px",
                display: "block",
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
  );
};

export default HeroPageSection5;
