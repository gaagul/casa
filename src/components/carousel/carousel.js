import React from "react";
import Slider from "react-slick";
import './carousel.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(props)

  return (
    <>
      <Slider {...settings}>
        {props.images.map((image)=>(<div className="carousel-img-wrapper"> 
          <img height="300" src={image}></img>
        </div>))}
      </Slider>
    </>
  );
}
