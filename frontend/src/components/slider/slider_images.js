import React, { useState } from "react";
import "./slider.css";
import Slider from "react-slick";
import candles from "../../assets/candles.jpeg";
import flower from "../../assets/flower.jpeg";
import rockBathtub from "../../assets/rockBathtub.jpeg";
import whiteBath from "../../assets/whiteBath.jpeg";
import whiteFlower from "../../assets/whiteFlower.jpeg";
//import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const images = [candles, flower, rockBathtub, whiteBath, whiteFlower];

function Slider_images() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 200,
    cssEase: "ease-in-out",
    infinite: true,
    lazyLoad: true,
    pauseOnHover: true,
  };
  return (
    <div className="Slider_App">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slider_images;
