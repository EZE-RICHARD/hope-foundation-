import "./qoute.scss";
// import QouteText from "../QouteText/QouteText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Qoute = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="slider-container qoute_section">
      <Slider {...settings} className="qoute_container">
        <div className="pad">
          <h2>{props.qoute.stats[0].header}</h2>
          <p>{props.qoute.stats[0].paragraph}</p>
        </div>
        <div className="pad">
          <h2>{props.qoute.stats[1].header}</h2>
          <p>{props.qoute.stats[1].paragraph}</p>
        </div>
        <div className="pad">
          <h2>{props.qoute.stats[2].header}</h2>
          <p>{props.qoute.stats[2].paragraph}</p>
        </div>
        <div className="pad">
          <h2>{props.qoute.stats[3].header}</h2>
          <p>{props.qoute.stats[3].paragraph}</p>
        </div>
        <div className="pad">
          <h2>{props.qoute.stats[4].header}</h2>
          <p>{props.qoute.stats[4].paragraph}</p>
        </div>
      </Slider>
    </div>
  );
};

export default Qoute;
