import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      id: 1,
      src: "/img/hero-image-1.jpg",
      alt: "Hero Image 1",
    },
    {
      id: 2,
      src: "/img/hero-image-2.jpg",
      alt: "Hero Image 2",
    },
    {
      id: 3,
      src: "/img/hero-image-3.jpg",
      alt: "Hero Image 3",
    },
  ];

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} className="d-block mx-lg-auto img-fluid" loading="lazy" />
        </div>
      ))}
    </Slider>
  );
};

export default HeroCarousel;