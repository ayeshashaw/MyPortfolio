
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title fade-in">404</h1>
        <p className="not-found-text fade-in delay-1">Oops! Page not found</p>
        <a href="/" className="button fade-in delay-2">
          Return to Home
        </a>
      </div>
      <style jsx="true">{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: var(--dark-navy);
          padding: 0 20px;
        }
        
        .not-found-title {
          font-size: 120px;
          color: var(--green);
          margin: 0;
          line-height: 1;
        }
        
        .not-found-text {
          font-size: 24px;
          margin: 20px 0 40px;
          color: var(--lightest-slate);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
