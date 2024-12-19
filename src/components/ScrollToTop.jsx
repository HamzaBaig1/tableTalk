import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when pathname changes
  }, [pathname]);

  return null; // No need to render anything
}

export default ScrollToTop;
