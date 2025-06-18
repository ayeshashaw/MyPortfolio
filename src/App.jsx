
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > prevScrollY ? "down" : "up";
      
      if (
        direction !== scrollDirection &&
        (currentScrollY - prevScrollY > 10 || currentScrollY - prevScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection, prevScrollY]);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar scrollDirection={scrollDirection} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
