import dove from "/images/bird.png";
import health from "/images/cardiogram.png";
import counseling from "/images/conversation.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about_section">
      <div>
        <h1>Bridging the divide, addressing vulnerabilities</h1>
      </div>

      <section>
        <span>
          <figure>
            <img src={dove} alt="Hand of hope extended (HOPE) foundation" />
          </figure>
          <h2>In Hope's Embrace, Our Journey Finds Light</h2>
          <p>
            Hand of Peace Extended (HOPE), a foundation that operates in
            multiple cities. Our primary objective is to bring hope to the lives
            of many individuals.
          </p>
        </span>

        <span>
          <figure>
            <img src={health} alt="Hand of hope extended (HOPE) foundation" />
          </figure>
          <h2>Healthcare For all, We Fabricate Wellness</h2>
          <p>
            With every touch we make, we are building a healthy world for all.
            Our mission is to reach millions of vulnerable individuals all over
            the world, through intense teaching with various teaching aids for
            the enhancement of a well balanced society.
          </p>
        </span>

        <span>
          <figure>
            <img
              src={counseling}
              alt="Hand of hope extended (HOPE) foundation"
            />
          </figure>
          <h2>Healthy Minds, For Healthy Living</h2>
          <p>
            knowledge is power and prevention is key, it's certain that our
            actions and thougths affects our health, We spread awareness of the
            importance of a healthy mind and body. Together we promote a culture
            of healthy living.
          </p>
        </span>

      </section>
    </div>
  );
};

export default About;
