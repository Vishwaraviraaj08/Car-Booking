import React from 'react';
import "../styles/luggagePolicy.css";
import Footer from './Footer';
const LuggagePolicy = () => {
    return (
        <div>
            <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
             
              <h2>Luggage Policy</h2>
              {/* <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p> */}
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                We understand luggages are not only suitcases. They are of different shapes and sizes. <br /> <br />
 <b>Table below is only indicative. Excess luggage charges, if any, will be at the discretion of driver.</b> <br /> <br />
Kindly note, taxis are passenger vehicles only. 
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    {/* <img src={Img2} alt="user_img" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




            {/* cards */}

    <div className="slide-container">
  
  <div class="wrapper">
    <div class="clash-card barbarian">
      <div class="clash-card__image clash-card__image--barbarian">
        <img class="img" src="https://th.bing.com/th/id/R.e42a772f947fadb287486d2743655538?rik=%2b4qFnwjX58WT1A&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftaxi%2ftaxi_PNG6.png&ehk=cYAxiwtrHxeME3mrxl6i530ELmwR08iomnk9EjG9fhs%3d&risl=&pid=ImgRaw&r=0" alt="barbarian" />
      </div>
      {/* <div class="clash-card__level clash-card__level--barbarian">Level 4</div> */}
      <div class="clash-card__unit-name">Sedan Taxis</div>
      <div class="clash-card__unit-description">
       3 - 4 persons <br /> <br />
   3 Suitcases of 10kg each
      Pieces of Luggage
      <br /> <br />
     Rs 300
      Luggage Charges if any extra.
      </div>

    </div> 
  </div> 
  
  <div class="wrapper">
    <div class="clash-card archer">
      <div class="clash-card__image clash-card__image--archer">
        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" alt="archer" /> */}
        <img src="https://www.bokarotaxi.com/wp-content/themes/bokarotaxi/images/fleet-muv.png" alt="archer" />
      </div>
      {/* <div class="clash-card__level clash-card__level--archer">Level 5</div> */}
      <div class="clash-card__unit-name">MUVs Taxis
      </div>
      <div class="clash-card__unit-description">
     6 - 7 persons <br /> <br />
     6 Suitcases of 10kg each
      Pieces of Luggage
      <br /> <br />
      Rs 300
      Luggage Charges if any extra.
      </div>


    </div> 
  </div> 
  
  
</div> 
</section>
<Footer></Footer>

        </div>
    );
};

export default LuggagePolicy;