import { useState } from "react";
import faqQuestions from "../components/faqQuestions";
import Footer from "../components/Footer";
import React, { useEffect } from "react";

function Faq() {
  useEffect(() => {
    document.title = "Drop Taxi Service Frequently Asked Quesions | Zero Drop Taxi";
  }, []);
  const [activeQ, setActiveQ] = useState("");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    
  <div> 
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              {faqQuestions.map((set, index) => {
                const questionId = `q${index}`;
                return (
                    <div key={index} className="faq-box">
                      <div
                          id={questionId}
                          onClick={() => openQ(questionId)}
                          className={`faq-box__question ${getClassQuestion(questionId)}`}
                      >
                        <p>{index + 1}. {set.question}</p>
                        <i className="fa-solid fa-angle-down"></i>
                      </div>
                      <div
                          id={`a${index}`}
                          className={`faq-box__answer ${getClassAnswer(questionId)}`}
                      >
                        {set.answer}
                      </div>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>


      </div>

  );
}

export default Faq;
