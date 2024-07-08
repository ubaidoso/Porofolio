import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <Image src="/hammer_project.jpg" alt={portfolios} ></Image>
            </Slider>
    </div>
  )
}

export default PortfolioSlider
