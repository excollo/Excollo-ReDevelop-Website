import React, { createContext, useState, useContext } from "react";

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  return (
    <HoverContext.Provider value={{ hoveredCardIndex, setHoveredCardIndex }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHoverContext = () => useContext(HoverContext);
