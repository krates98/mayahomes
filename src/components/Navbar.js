import React from "react";
import logoImage from "../images/maya2.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSize = isScrolled ? 50 : 150;

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-dark ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-logo">
          <img src={logoImage} height={logoSize} alt="Logo" />
        </div>
        <button
          className={`navbar-toggler ${isExpanded ? "collapsed" : ""}`}
          type="button"
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isExpanded ? "show" : ""
          } justify-content-end`}
        >
          <div className="navbar-links">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              About
            </a>
            <a className="nav-link" href="/">
              Luxury
            </a>
            <a className="nav-link" href="/">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
