import React, { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeScroller, setActiveScroller] = useState(null);

  return (
    <ScrollContext.Provider
      value={{
        scrollPosition,
        setScrollPosition,
        activeScroller,
        setActiveScroller,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
