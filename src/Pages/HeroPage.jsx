import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ThreeDE from "../Components/ThreeDE";
import NavBar from "../Components/NavBar";
import HeroPageSection1 from "../Components/HeroPageSection1";
import HeroPageSection2 from "../Components/HeroPageSection2";
import HeroPageSection3 from "../Components/HeroPageSection3/HeroPageSection3";
import HeroPageSection4 from "../Components/HeroPageSection4";
import HeroPageSection5 from "../Components/HeroPageSection5";
import Footer from "../Components/Footer";
import HeroPageSection6 from "../Components/HeroPageSection6";
import HeroPageSection7 from "../Components/HeroPageSection7";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const HeroPage = () => {
  const [showThreeDE, setShowThreeDE] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hero1Complete, setHero1Complete] = useState(false);
  const [hero2Complete, setHero2Complete] = useState(false);
  const [hero4Complete, setHero4Complete] = useState(false);
  const threeDERef = useRef(null);

  useEffect(() => {
    document.body.style.overflow =
      !hero1Complete || showThreeDE ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hero1Complete, showThreeDE]);

  useEffect(() => {
    const rotationDuration = 2;
    const timer = setTimeout(() => {
      setShowThreeDE(false);
    }, rotationDuration * 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showThreeDE) {
      const timeline = gsap.timeline();

      timeline.to(".threeDE", {
        x: "24%",
        y: "-2%",
        duration: 1,
        ease: "power2.out",
      });

      timeline.to(".gradient-background", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      timeline.add([
        gsap.to(".navbar", {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        }),
        gsap.to(".hero-content", {
          opacity: 1,
          x: 0,
          duration: 0.5, // Match duration with navbar
          ease: "power2.out",
          onComplete: () => {
            setAnimationComplete(true);
            setTimeout(() => {
              setHero1Complete(true);
            }, 500);
          },
        }),
      ]);
    }
  }, [showThreeDE]);

  useEffect(() => {
    if (hero1Complete) {
      gsap.fromTo(
        ".hero-section-2",
        {
          x: "50%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-section-2",
            start: "top center",
            end: "top center",
            toggleActions: "play none none reverse",
            onEnter: () => setHero2Complete(true),
          },
        }
      );

      gsap.to(threeDERef.current, {
        scrollTrigger: {
          trigger: ".hero-section-2",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        motionPath: {
          path: [
            { x: "24%", y: "0%" },
            { x: "12%", y: "50%" },
            { x: "-23vw", y: "113vh" },
          ],
          curviness: 1.5,
        },
        duration: 1.5,
        ease: "power2.out",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [hero1Complete]);

  useEffect(() => {
    if (hero4Complete) {
      gsap.fromTo(
        ".hero-page-section-5",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-page-section-5",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [hero4Complete]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
        background: "#000000",
      }}
    >
      <Box
        className="threeDE"
        ref={threeDERef}
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2, // Set consistent z-index
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <ThreeDE />
        </Box>
      </Box>
      <Box
        className="gradient-background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: "5%",
          background: `radial-gradient(ellipse at top, rgba(154, 106, 255, 0.6) 0%, rgba(0, 0, 0, 0) 60%)`,
          zIndex: 1, // Set consistent z-index
          opacity: 0,
        }}
      />
      <Box
        className="navbar"
        sx={{
          position: "relative",
          zIndex: 10, 
          marginTop: "1rem",
          opacity: 0,
          transform: "translateX(-100px)",
        }}
      >
        <NavBar />
      </Box>
      <Box
        className="hero-content"
        sx={{
          display: "flex",
          position: "relative",
          zIndex: 3,
          marginTop: "-6rem",
          opacity: 1,
          transform: "translateX(-100px)",
        }}
      >
        <HeroPageSection1 animationComplete={animationComplete} />
      </Box>
      <Box sx={{ visibility: hero1Complete ? "visible" : "hidden" }}>
        <Box
          className="hero-section-2"
          sx={{
            position: "relative",
            zIndex: 3,
            opacity: 1,
          }}
        >
          <HeroPageSection2
            onAnimationComplete={() => setHero2Complete(true)}
          />
        </Box>
        <Box className="hero-page-section-3" sx={{ opacity: 1 }}>
          <HeroPageSection3 />
        </Box>
        <Box>
          <HeroPageSection4 onComplete={() => setHero4Complete(true)} />
        </Box>
        <Box>
          <HeroPageSection5 />
        </Box>
        <Box>
          <HeroPageSection6 />
        </Box>
        <Box>
          <HeroPageSection7 />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default HeroPage;
