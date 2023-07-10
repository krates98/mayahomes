import React from "react";
import Delivered from "../home/Delivered";
import CompletedProjectsCarousel from "../home/CompletedProjectsCarousel";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to MayaHomes</h1>
          <p>We bring you the best in class homes in Ghaziabad.</p>
        </div>
      </div>
      <Delivered />
      <CompletedProjectsCarousel />
    </>
  );
}

export default Home;
