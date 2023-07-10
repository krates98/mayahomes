import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content"></div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Maya Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
