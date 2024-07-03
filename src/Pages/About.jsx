import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/car-discussion.jpg";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
              Droptaxi is an Inter-city taxi booking facilitator. It is owned and operated by Sanviv Services Private Limited, a company incorporated in India, having its registered office at No 286 GST Road, Chrompet, Chennai -600044. It is involved in Supporting and auxiliary transport activities; activities of travel agencies.
              <br />
              We started this venture out of a personal pain point of having to pay two way charges for a one way drop trip.
              <br />

              Market taxis charge two-ways, usually citing the reason of returning empty.
              <br />

              By harnessing information and communication technologies, we have disrupted the conventional practice.
              </p>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.738962166319!2d80.1066256622427!3d12.92797266200983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fd3e28cbac5%3A0xeaeac9936985f7d9!2sTambaram%20bus%20stand!5e0!3m2!1sen!2sin!4v1719941368472!5m2!1sen!2sin" width="100%" style={{border: "0", minHeight: "350px"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
