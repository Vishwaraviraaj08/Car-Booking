import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/car-discussion.jpg";

function About() {
  return (
    <>
      <section className="about-page">
        <div className="container">
          <h1 style={{textAlign: 'center', fontSize: '4rem'}}>About ZeroDrop Taxi</h1>

          <div className="about-main">
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2 style={{fontSize:'2rem'}}>You start the engine and your adventure begins</h2>
              <p>
                ZeroDropTaxi is an Inter-city taxi booking facilitator. It is owned and operated by Sanviv Services Private
                Limited, a company incorporated in India, having its registered office at No 286 GST Road, Chrompet,
                Chennai -600044. It is involved in Supporting and auxiliary transport activities; activities of travel
                agencies.
                <br/>
                We started this venture out of a personal pain point of having to pay two way charges for a one way drop
                trip.
                <br/>

                Market taxis charge two-ways, usually citing the reason of returning empty.
                <br/>

                By harnessing information and communication technologies, we have disrupted the conventional practice.
              </p>
            </div>
          </div>
  <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.29160960703!2d80.24433008039675!3d13.14399695415116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526513ff549a35%3A0x907f516dde825d42!2sNarayana%20Swamy%20Thottam%2C%205%2F23%2C%20Parvathi%20Nagar%2C%20Kodungaiyur%2C%20Chennai%2C%20Tamil%20Nadu%20600118!5e0!3m2!1sen!2sin!4v1720725572961!5m2!1sen!2sin"
                width="100%" style={{border: "0", minHeight: "350px"}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/*<PlanTrip/>*/}
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default About;
