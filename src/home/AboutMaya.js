import React from "react";
import brandImage from "../images/maya2.png";

function AboutMaya() {
  return (
    <div className="about-maya">
      <div className="about-maya-content">
        <h2 className="about-maya-heading">About Maya</h2>
        <div className="about-maya-info">
          <div className="about-maya-image">
            <img src={brandImage} alt="Maya Brand" className="brand-image" />
          </div>
          <div className="about-maya-description">
            <h3>Our Story</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus risus nec vestibulum consequat. Nullam cursus lacus et orci
              feugiat facilisis. Nulla eget dapibus tellus. Integer sodales,
              nunc sit amet auctor rutrum, elit ligula vulputate turpis, ut
              vulputate est tellus eu nibh.
            </p>
            <p>
              Sed tincidunt dolor nec ligula luctus maximus. Suspendisse vitae
              sem eu mi dictum facilisis. Nullam eu arcu a lectus ultrices
              blandit sed id sapien. Vivamus eget massa lectus. Etiam faucibus
              sed urna ac consectetur.
            </p>
            <a href="/about">
              <button>Know More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMaya;
