import logo from "/images/logo.png";
import "./advert.scss"

const Advert = () => {
  return (
    <div className="advert_section">
      <span>
        <img src={logo} alt="Hand of Hope Extended (HOPE) foundation" />
        <section>
          <h1>Coming soon! join us today and share hope to your world</h1>
          <form action="">
            <input type="text" placeholder="example@example.com" />
            <button>SIGN UP</button>
          </form>
        </section>
        
      </span>
    </div>
  );
};

export default Advert;
