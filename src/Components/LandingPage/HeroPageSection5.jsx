import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroPageSection5.css";
gsap.registerPlugin(ScrollTrigger);
const HeroPageSection5 = () => {
  // const textRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: "70%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <Box
      ref={sectionRef}
      sx={{ minHeight: "70vh", fontFamily: '"Inter", sans-serif' }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-35%",
          left: "0",
          right: "0%",
          bottom: 0,
          height: "80%",
          background: `radial-gradient(closest-corner, rgba(115, 80, 190, 0.6) 0%, rgba(0, 0, 0, 0) 50%)`,
          zIndex: -1,
          pointerEvents: "none",
          transformOrigin: "center center",
        }}
      />
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant="h2"
          fontWeight="bold"
        >
          How We{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Work?
          </Box>
        </Typography>
      </Box>
      <div className="row">
        <div className="col-md-12">
          <div className="gradientCardBox">
            {[
              "Understand Your Needs",
              "Craft a Tailored Plan",
              "Deliver and Iterate",
            ].map((title, index) => (
              <div
                className="box aos-init aos-animate"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration={`${500 + index * 100}`}
                ref={(el) => (cardRefs.current[index] = el)}
                key={index}
              >
                <span></span>
                <div className="content">
                  <h2>{title}</h2>
                  <p>
                    {index === 0
                      ? "In-depth discovery to align with your business goals."
                      : index === 1
                      ? "Strategy, implementation, and optimization designed for measurable outcomes."
                      : "Continuous improvement ensures solutions stay ahead of the curve."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};
export default HeroPageSection5;
