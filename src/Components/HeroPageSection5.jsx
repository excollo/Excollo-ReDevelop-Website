import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroPageSection5.css";

gsap.registerPlugin(ScrollTrigger);

const HeroPageSection5 = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { fontSize: "7rem" },
      {
        fontSize: "3.5rem",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <Box ref={sectionRef} sx={{ minHeight: "95vh" }}>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant="h2"
          fontWeight="bold"
          ref={textRef}
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
      <div className="row">
        <div className="col-md-12">
          <div className="gradientCardBox">
            <div
              className="box aos-init aos-animate"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <span></span>
              <div className="content">
                <h2>Understand Your Needs</h2>
                <p>In-depth discovery to align with your business goals.</p>
              </div>
            </div>
            <div
              className="box aos-init aos-animate"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <span></span>
              <div className="content">
                <h2>Craft a Tailored Plan</h2>
                <p>
                  Strategy, implementation, and optimization designed for
                  measurable outcomes.
                </p>
              </div>
            </div>
            <div
              className="box aos-init aos-animate"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <span></span>
              <div className="content">
                <h2>Deliver and Iterate</h2>
                <p>
                  Continuous improvement ensures solutions stay ahead of the
                  curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeroPageSection5;
