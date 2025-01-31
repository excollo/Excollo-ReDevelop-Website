import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Page ko top pe le jao
  }, [location.pathname]); // Jab bhi route change ho

  return null; // Kuch render nahi karna hai
};

export default ScrollToTop;
