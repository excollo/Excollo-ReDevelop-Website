import React, { useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import { useCursor } from "./context/CursorContext";
const CursorContainer = styled(Box)({
  position: "fixed",
  left: 0,
  top: 0,
  pointerEvents: "none",
  zIndex: 9999,
  mixBlendMode: "difference", // This helps with visibility on different backgrounds
});
const CursorOuter = styled(Box)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  transition:
    "width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  background:
    "linear-gradient(180deg, rgb(169, 63, 255) 0%, rgb(94, 129, 235) 100%)",
  boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 15px 2px", // Changed to white with transparency
  "&.default": {
    background:
      "linear-gradient(180deg, rgb(169, 63, 255) 0%, rgb(94, 129, 235) 100%)",
  },
  "&.hovered": {
    width: 60,
    height: 60,
    boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 15px 2px",
    background: "rgba(255, 255, 255, 1)",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
}));
const CursorInner = styled(Box)({
  width: 6,
  height: 6,
  borderRadius: "50%",
  position: "absolute",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
  transition: "width 0.2s ease, height 0.2s ease",
});
const CustomCursor = () => {
  const { cursorType, isHovered } = useCursor();
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 }); // Current mouse position
  const cursorOuter = useRef({ x: 0, y: 0 }); // Outer cursor position
  const cursorInner = useRef({ x: 0, y: 0 }); // Inner cursor position
  const lastMousePosition = useRef({ x: 0, y: 0 }); // Previous mouse position
  const velocity = useRef({ x: 0, y: 0 }); // Movement velocity
  const requestRef = useRef();
  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Calculate velocity
      velocity.current = {
        x: mouse.current.x - lastMousePosition.current.x,
        y: mouse.current.y - lastMousePosition.current.y,
      };
      lastMousePosition.current = { x: mouse.current.x, y: mouse.current.y };
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  const animate = () => {
    if (cursorOuterRef.current && cursorInnerRef.current) {
      // Smooth outer cursor with easing
      cursorOuter.current.x += (mouse.current.x - cursorOuter.current.x) * 0.15;
      cursorOuter.current.y += (mouse.current.y - cursorOuter.current.y) * 0.15;
      // Calculate inner cursor position with velocity influence
      const innerTargetX = mouse.current.x + velocity.current.x * 0.5;
      const innerTargetY = mouse.current.y + velocity.current.y * 0.5;
      // Smooth inner cursor with faster response
      cursorInner.current.x += (innerTargetX - cursorInner.current.x) * 0.2;
      cursorInner.current.y += (innerTargetY - cursorInner.current.y) * 0.2;
      // Apply positions
      cursorOuterRef.current.style.transform = `translate3d(${cursorOuter.current.x}px, ${cursorOuter.current.y}px, 0) translate(-50%, -50%)`;
      cursorInnerRef.current.style.transform = `translate3d(${cursorInner.current.x}px, ${cursorInner.current.y}px, 0) translate(-50%, -50%)`;
      // Gradually reduce velocity
      velocity.current.x *= 0.85;
      velocity.current.y *= 0.85;
    }
    requestRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  return (
    <CursorContainer>
      <CursorOuter
        ref={cursorOuterRef}
        className={`${cursorType} ${isHovered ? "hovered" : ""}`}
        sx={{
          opacity: isHovered ? 1 : 0.7,
        }}
      />
      <CursorInner
        ref={cursorInnerRef}
        sx={{
          width: isHovered ? "35px" : "8px",
          height: isHovered ? "35px" : "8px",
          opacity: isHovered ? 1 : 0.95,
          // border: "1px solid black",
          background: isHovered
            ? "white"
            : "linear-gradient(90deg, rgb(169, 63, 255) 0%, rgb(94, 129, 235) 100%) ",
          transform: `scale(${isHovered ? 1.2 : 1})`,
          boxShadow: isHovered
            ? "0 0 10px rgba(255, 255, 255, 0.8)"
            : "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
      />
    </CursorContainer>
  );
};
export default CustomCursor;
