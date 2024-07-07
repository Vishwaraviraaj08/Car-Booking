import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

function Contact() {
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
        <section className="contact-page">
          <h1 style={{textAlign:'center', fontSize:'4em'}}>Contact ZeroDropTaxi</h1>
          <div className="container">
            <div className="contact-div">
              <div className="contact-div__text">
                <h2>Need additional information?</h2>
                <p>
                  Our Car Booking Service is available 24/7. If you have any questions or need assistance, please feel free to contact us. We're here to help you with all your car booking service needs.
                </p>
                <a href="tel:+917999222000">
                  <i className="fa-solid fa-phone"></i>&nbsp; (+91) 7-999-222-000
                </a>
                <a href="mailto:support@droptaxi.in">
                  <i className="fa-solid fa-envelope"></i>&nbsp;
                  support@droptaxi.in
                </a>
                <a href="/">
                  <i className="fa-solid fa-location-dot"></i>&nbsp; DropTaxi, 286, GST Road, Chromepet, Chennai
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
