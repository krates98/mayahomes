import React from "react";
import logoImage from "../images/maya2.png"; // Import the image file

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  // Attach scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSize = isScrolled ? 50 : 150; // Adjust the logo size based on the scroll position

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-dark ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-links">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            About
          </a>
        </div>
        <div className="navbar-logo">
          <img src={logoImage} height={logoSize} alt="Logo" />
        </div>
        <div className="navbar-links">
          <a className="nav-link" href="/">
            Luxury
          </a>
          <a className="nav-link" href="/">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
