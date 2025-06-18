
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on route changes only
const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
};

export default useScrollToTop;
