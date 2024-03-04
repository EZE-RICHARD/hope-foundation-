import Navbar from "../Navbar/Navbar";
import "./hero.scss";

//hero figure
import world from "/images/earth.png";
import africonot from "/images/africa.png";
import hands from "/images/hands.png";
// icons
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

// illustration images
// import doubleStorke from "/details/doubble stroke.png";
import multipleStorke from "/details/multiple strokes.png";
import orangeStroke from "/details/orange stoke.png";
import yellowDot from "/details/yellow dot.png";

const Hero = () => {
  return (
    <section className="hero">
      {/* illustrations */}
      <Navbar />
      <section className="hero_parent">
        <figure className="hero_figure">
          <img src={africonot} alt="Hand of hope extended (HOPE) foundation" />
        </figure>

        <div className="hero_cta">
          <div className="ctas1">
            <h1>Health Summit</h1>
            <h2>15.06.24</h2>
            <div>
              <p>#health</p>
              <p>#heathy_heart</p>
            </div>
          </div>

          <div className="ctas2">
            <span className="socials">
              <a href="javascript:void(0)">
                <FaFacebook className="social_iocns" />
              </a>
              <a href="javascript:void(0)">
                <FaSquareXTwitter className="social_iocns" />
              </a>
              <a href="javascript:void(0)">
                <FaSquareWhatsapp className="social_iocns" />
              </a>
              <a href="javascript:void(0)">
                <FaInstagramSquare className="social_iocns" />
              </a>
            </span>

            <span className="hero_cta_text">
              <p>
                Hand of Peace Extended (HOPE), a foundation that operates in
                multiple cities. Our primary objective is to bring hope to the
                lives of many individuals. One of the ways we achieve this is
                through our free medical care services, and other humanitarian
                services that we offer.
              </p>
              <h1 className="action">Get Involved</h1>
            </span>
          </div>
        </div>
      </section>

      <img
        src={orangeStroke}
        alt="Hand of hope extended (HOPE) foundation"
        className="illustration orange_stroke"
      />

      {/* illustrations */}
      <img
        src={multipleStorke}
        alt="Hand of hope extended (HOPE) foundation"
        className="illustration multiple_stroke"
      />
      <img
        src={yellowDot}
        alt="Hand of hope extended (HOPE) foundation"
        className="illustration yellow_dot"
      />
    </section>
  );
};

export default Hero;
