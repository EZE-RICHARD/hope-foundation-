import back_ride from "/details/carousel-img/back-ride.jpg";
import drinking_water from "/details/carousel-img/drinking-water.jpg";
import medical_clinic from "/details/carousel-img/medical-clinic.jpg";
import volunteer_doctors from "/details/carousel-img/Volunteer-doctors.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.scss";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-container carousel">
      <Slider {...settings} className="carousel_container">
        <img src={back_ride} alt="Hand of Hope Extended (HOPE) foundation" />

        <img
          src={drinking_water}
          alt="Hand of Hope Extended (HOPE) foundation"
        />

        <img
          src={medical_clinic}
          alt="Hand of Hope Extended (HOPE) foundation"
        />

        <img
          src={volunteer_doctors}
          alt="Hand of Hope Extended (HOPE) foundation"
        />
      </Slider>
    </section>
  );
};
export default Carousel;
