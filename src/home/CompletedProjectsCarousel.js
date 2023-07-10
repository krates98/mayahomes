import React from "react";
import project1Image from "../images/project1.jpg";
import project2Image from "../images/project2.jpg";
import project3Image from "../images/project3.jpg";
import project4Image from "../images/project3.jpg";
import project5Image from "../images/project3.jpg";
import project6Image from "../images/project3.jpg";
import project7Image from "../images/project3.jpg";

function CompletedProjectsCarousel() {
  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    const carousel = carouselRef.current;
    let isMoving = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleDragStart = (event) => {
      isMoving = true;
      startX = event.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleDragEnd = () => {
      isMoving = false;
    };

    const handleDragMove = (event) => {
      if (!isMoving) return;
      event.preventDefault();
      const x = event.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed if needed
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener("mousedown", handleDragStart);
    carousel.addEventListener("mouseup", handleDragEnd);
    carousel.addEventListener("mouseleave", handleDragEnd);
    carousel.addEventListener("mousemove", handleDragMove);

    return () => {
      carousel.removeEventListener("mousedown", handleDragStart);
      carousel.removeEventListener("mouseup", handleDragEnd);
      carousel.removeEventListener("mouseleave", handleDragEnd);
      carousel.removeEventListener("mousemove", handleDragMove);
    };
  }, []);

  return (
    <div className="completed-projects-carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper" ref={carouselRef}>
          <div className="carousel-slide">
            <img src={project1Image} alt="Project 1" />
            <div className="carousel-content">
              <h3>Project 1</h3>
              <p>Description for Project 1</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={project2Image} alt="Project 2" />
            <div className="carousel-content">
              <h3>Project 2</h3>
              <p>Description for Project 2</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={project3Image} alt="Project 3" />
            <div className="carousel-content">
              <h3>Project 3</h3>
              <p>Description for Project 3</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={project4Image} alt="Project 4" />
            <div className="carousel-content">
              <h3>Project 4</h3>
              <p>Description for Project 4</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={project5Image} alt="Project 5" />
            <div className="carousel-content">
              <h3>Project 5</h3>
              <p>Description for Project 5</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={project6Image} alt="Project 6" />
            <div className="carousel-content">
              <h3>Project 6</h3>
              <p>Description for Project 6</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={project7Image} alt="Project 7" />
            <div className="carousel-content">
              <h3>Project 7</h3>
              <p>Description for Project 7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedProjectsCarousel;
