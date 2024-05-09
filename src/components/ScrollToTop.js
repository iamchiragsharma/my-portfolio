import { useEffect } from "react"; // Import the useEffect hook from React
import { useLocation } from "react-router-dom"; // Import the useLocation hook from react-router-dom

// Define a functional component named ScrollToTop
function ScrollToTop() {
  // Retrieve the current location using the useLocation hook
  const { pathname } = useLocation();

  // Use the useEffect hook to perform a side effect when pathname changes
  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array ensures the effect runs when pathname changes

  // Return null because this component doesn't render any UI
  return null;
}

export default ScrollToTop; // Export ScrollToTop as the default export
