import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";

function Hero() {



  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content" style={{height: '70vh', paddingTop: '5rem'}}>
            <div className="hero-content__text">
              <h4>Plan your trip with Zero Drop Taxi</h4>
              <h1>
                Your <span>Trusted</span> Outstation Taxi Partner
              </h1>
              <p>
                At Zero Drop Taxi, we prioritize your comfort and safety. Book your next outstation trip with us and experience exceptional service.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <a className="hero-content__text__btns__learn-more" href="tel:7358380026">
                  Call Now &nbsp; <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

      
      </section>
    </>
  );
}

export default Hero;
