import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/lorem-ipsum1.png';
import image2 from '../assets/lorem-ipsum2.jpg';
import image3 from '../assets/lorem-ipsum3.png';

const Slideshow = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Adjust the autoplay speed in milliseconds
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-[1000px] max-w-xl mx-auto">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white"
        onClick={onClick}
      >
        <FaArrowLeft />
      </button>
    );
  };
  
  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white"
        onClick={onClick}
      >
        <FaArrowRight />
      </button>
    );
  };

  export default Slideshow;