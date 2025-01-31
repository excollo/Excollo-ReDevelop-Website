import React, { useEffect, useRef, useState } from "react";
import { Box, styled, keyframes } from "@mui/material";
import { useCursor } from "./context/CursorContext";
const moveUpDown = keyframes`
  0%  {
    transform: translateY(42px) scale(0);
    opacity: 0;
  }
  50% {
    transform: translateY(42px) scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: translateY(8px) scale(1);
    opacity: 1;
  }
`;
const CursorContainer = styled(Box)({
  position: "fixed",
  left: 0,
  top: 0,
  pointerEvents: "none",
  zIndex: 9999,
  mixBlendMode: "difference",
  "@media (min-width: 200px) and (max-width: 999px)": {
    display: "none",
  },
});
const CursorOuter = styled(Box)(({ theme, isIdle, isPointer, isHovered }) => ({
  width: isIdle || isPointer || isHovered ? 30 : 30,
  height: isIdle || isPointer || isHovered ? 60 : 30,
  borderRadius: isIdle || isPointer || isHovered ? "50px" : "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  transition:
    "width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  background:
    "linear-gradient(180deg, rgb(169, 63, 255) 0%, rgb(94, 129, 235) 100%)",
  boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 15px 2px",
  "&.hovered": {
    width: 60,
    height: 60,
    boxShadow: "rgba(133, 86, 245, 0.4) 0px 0px 15px 2px",
    background: "rgba(255, 255, 255, 1)",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  "&.pointer": {
    width: 40,
    height: 40,
    background: " black transparent",
    boxShadow: "rgba(133, 86, 245, 0.6) 0px 0px 20px 3px",
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
}));
const CursorInner = styled(Box)({
  width: 10,
  height: 10,
  zIndex: 9999,
  borderRadius: "50%",
  position: "absolute",
  backgroundColor: "#FFFFFF",
  transform: "translate(-50%, -50%)",
  transition: "width 0.2s ease, height 0.2s ease",
});
const CustomCursor = ({ idleTimeout = 5000 }) => {
  const { cursorType, isHovered } = useCursor();
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const cursorOuter = useRef({ x: 0, y: 0 });
  const cursorInner = useRef({ x: 0, y: 0 });
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const [isIdle, setIsIdle] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());
  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      velocity.current = {
        x: mouse.current.x - lastMousePosition.current.x,
        y: mouse.current.y - lastMousePosition.current.y,
      };
      lastMousePosition.current = { x: mouse.current.x, y: mouse.current.y };
      setLastActivity(Date.now());
      setIsIdle(false);
      // Check if hovering over button or link
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);
    };
    const handleActivity = () => {
      setLastActivity(Date.now());
      setIsIdle(false);
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("scroll", handleActivity);
    const idleTimer = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivity;
      console.log(timeSinceLastActivity);
      if (timeSinceLastActivity >= idleTimeout && !isHovered) {
        setIsIdle(true);
      }
    }, 500000);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      clearInterval(idleTimer);
    };
  }, [idleTimeout, isHovered]);
  const animate = () => {
    if (cursorOuterRef.current && cursorInnerRef.current) {
      cursorOuter.current.x += (mouse.current.x - cursorOuter.current.x) * 0.15;
      cursorOuter.current.y += (mouse.current.y - cursorOuter.current.y) * 0.15;
      const innerTargetX = mouse.current.x + velocity.current.x * 0.5;
      const innerTargetY = mouse.current.y + velocity.current.y * 0.5;
      cursorInner.current.x += (innerTargetX - cursorInner.current.x) * 0.2;
      cursorInner.current.y += (innerTargetY - cursorInner.current.y) * 0.2;
      cursorOuterRef.current.style.transform = `translate3d(${
        cursorOuter.current.x
      }px, ${cursorOuter.current.y}px, 0) translate(-50%, -50%) ${
        isPointer ? "rotate(45deg)" : ""
      }`;
      cursorInnerRef.current.style.transform = `translate3d(${cursorInner.current.x}px, ${cursorInner.current.y}px, 0) translate(-50%, -50%)`;
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
    <CursorContainer
      onClick={() => isIdle && window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <CursorOuter
        ref={cursorOuterRef}
        className={`${cursorType} ${isHovered ? "hovered" : ""} ${
          isPointer ? "pointer" : "none"
        }`}
        isIdle={isIdle}
        isPointer={isPointer}
        sx={{
          opacity: isHovered ? 1 : 0.7,
          display: isPointer ? "none" : isIdle ? "block" : "none",
        }}
      >
        {/* Inner cursor is now a child of outer cursor to contain the animation */}
        <CursorInner
          ref={cursorInnerRef}
          sx={{
            display: isIdle ? "block" : "none",
            width: isHovered ? "35px" : isIdle ? "10px" : "8px",
            height: isHovered ? "35px" : isIdle ? "10px" : "8px",
            opacity: isHovered ? 1 : 0.95,
            background: isHovered ? "white" : "black",
            transform: `scale(${isHovered ? 1.2 : 1})`,
            zIndex: 9999,
            // boxShadow: isHovered
            //   ? "0 0 10px rgba(255, 255, 255, 0.8)"
            //   : "0 0 10px rgba(255, 255, 255, 0.5)",
            position: isIdle ? "absolute" : "fixed",
            animation: isIdle
              ? `${moveUpDown} 1.7s ease-in-out infinite`
              : "none",
            left: isIdle ? "35%" : "auto",
          }}
        />
      </CursorOuter>
      <CursorInner
        ref={cursorInnerRef}
        sx={{
          display: isIdle || isPointer ? "none" : "block",
          width: isHovered ? "50px" : isIdle ? "10px" : "15px",
          height: isHovered ? "50px" : isIdle ? "10px" : "15px",
          opacity: isHovered ? 1 : 0.95,
          zIndex: 9999,
          background:
            isHovered || isPointer
              ? "white"
              : "linear-gradient(90deg, rgb(169, 63, 255) 0%, rgb(94, 129, 235) 100%)",
          transform: `scale(${isHovered || isPointer ? 1.2 : 1})`,
          // boxShadow:
          //   isHovered || isPointer
          //     ? "0 0 10px rgba(255, 255, 255, 0.8)"
          //     : "0 0 10px rgba(255, 255, 255, 0.5)",
          "&.pointer": {
            width: 40,
            height: 40,
          },
        }}
      />
    </CursorContainer>
  );
};
export default CustomCursor;
