import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1Image from "../images/project1.jpg";
import project2Image from "../images/project2.jpg";
import project3Image from "../images/project3.jpg";
import project4Image from "../images/project4.jpg";

const products = [
  {
    id: 1,
    image: project1Image,
    headline: "Project 1",
    description: "Description for Project 1",
  },
  {
    id: 2,
    image: project2Image,
    headline: "Project 2",
    description: "Description for Project 2",
  },
  {
    id: 3,
    image: project3Image,
    headline: "Project 3",
    description: "Description for Project 3",
  },
  {
    id: 4,
    image: project4Image,
    headline: "Project 4",
    description: "Description for Project 4",
  },
];

function FeaturedProductsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="featured-products-carousel">
      <h2 className="carousel-heading">Featured Projects</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="carousel-slide">
            <img src={product.image} alt={product.headline} />
            <div className="carousel-content">
              <h3>{product.headline}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedProductsCarousel;
