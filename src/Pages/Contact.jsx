import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Zero Drop Taxi";
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xjmzqf', 'template_uyacqxi', form.current, 'fjNGl4fwZtpvtiI0h')
        .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        }, (error) => {
          console.log(error.text);
          alert("An error occurred, Please try again");
        });

    e.target.reset();
  };

  return (
      <>
        <title>Zero Drop Taxi : Contact us</title>
        <section className="contact-page">
          <h1 style={{textAlign:'center', fontSize:'4em'}}>Contact Zero Drop Taxi</h1>
          <div className="container">
            <div className="contact-div">
              <div className="contact-div__text">
                <h2>Need additional information?</h2>
                <p>
                  Our Car Booking Service is available 24/7. If you have any questions or need assistance, please feel free to contact us. We're here to help you with all your car booking service needs.
                </p>
                <a href="tel:+917358380026">
                  <i className="fa-solid fa-phone"></i>&nbsp; (+91) 7358380026
                </a>
                <a href="mailto:zerodroptaxi@gmail.com">
                  <i className="fa-solid fa-envelope"></i>&nbsp;
                  zerodroptaxi@gmail.com
                </a>
                <a href="/">
                  <i className="fa-solid fa-location-dot"></i>&nbsp; Zero Drop Taxi, 55, Devi Karumariamman Street, Kodungaiyur
                  Chennai - 600073
                </a>
              </div>
              <div className="contact-div__form">
                <form ref={form} onSubmit={sendEmail}>
                  <label>
                    Full Name <b>*</b>
                  </label>
                  <input type="text" name="user_name" placeholder='E.g: "ABC"'></input>

                  <label>
                    Email <b>*</b>
                  </label>
                  <input type="email" name="user_email" placeholder="abc@example.com"></input>

                  <label>
                    Tell us about it <b>*</b>
                  </label>
                  <textarea name="user_message" placeholder="Write Here.."></textarea>

                  <button type="submit">
                    <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                    Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <Footer />
        </section>
      </>
  );
}

export default Contact;
