import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

const PortfolioSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
  };


  return (
    <div>
       <Slider {...settings} >
              <img src="/hammer_project.jpg" alt="" />
              <img src="/hammer_project.jpg" alt="" />
              <img src="/hammer_project.jpg" alt="" />
              <img src="/hammer_project.jpg" alt="" />
            </Slider>
    </div>
  )
}

export default PortfolioSlider
