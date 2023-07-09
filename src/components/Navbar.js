import React from "react";
import logoImage from "../images/maya.png"; // Import the image file

function Navbar() {
  // Function to handle the scroll event
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    }
  };

  // Attach scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
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
          <img src={logoImage} height={150} alt="Logo" />
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
