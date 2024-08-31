import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }} className='carousel'>
      <Slider {...settings}>
        <div>
          <img src="../img/slider/slider-1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="../img/slider/slider-2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="../img/slider/slider-3.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}
