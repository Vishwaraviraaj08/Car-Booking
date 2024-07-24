import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import {Link} from "react-router-dom";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Zero Drop Taxi</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                 Choosing Zero Drop Taxi ensures you receive exceptional service quality, 
                  as we prioritize reliable and comfortable outstation travel across South India. 
                  Our competitive one-way tariffs provide excellent value, allowing you to travel cost-effectively. 
                  With a team of professional drivers committed to your safety and comfort, you can expect a pleasant journey every time. 
                  Our easy-to-use online booking platform simplifies scheduling your ride, saving you time and effort. We cover all major destinations in
                  South India, ensuring convenient travel to any location. Our dedication to customer satisfaction means we are always ready to assist you
                  promptly. Additionally, our modern, well-maintained fleet guarantees a smooth and stylish ride, enhancing your overall travel experience.
                </p>
                <Link to="about">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross State Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      best vehicles for your cross-state adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
