
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
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
      <div className="modern-loader">
        <div className="loader-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
          </div>
        </div>
        
        <div className="loader-content">
          <div className="logo-container">
            <div className="logo-text">
              <span className="letter">A</span>
              <span className="letter">y</span>
              <span className="letter">e</span>
              <span className="letter">s</span>
              <span className="letter">h</span>
              <span className="letter">a</span>
            </div>
            <div className="logo-subtitle">Portfolio</div>
          </div>
          
          <div className="loading-animation">
            <div className="loading-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="loading-text">
              <span className="loading-word">Loading</span>
              <span className="dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </div>
          </div>
          
          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">Preparing your experience</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar scrollDirection={scrollDirection} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
