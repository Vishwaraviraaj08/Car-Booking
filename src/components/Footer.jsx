function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Zero Drop </span> Taxi
              </li>
              <li>
                We offers Car Booking Service for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:+917999222000">
                  <i className="fa-solid fa-phone"></i> &nbsp; +91 7-999-222-0
                </a>
              </li>

            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/luggage-policy">Luggage Policy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/refund-policy">Refund Policy</a>
              </li>
              <li>
                <a href="/cancellation-policy">Cancellation Policy</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>ZeroDropTaxi</li>
              <li>286, GST Road</li>
              <li>Chromepet, Chennai, 600044</li>
              <li>support@ZeroDropTaxi.in</li>
            </ul>

            <ul className="footer-content__2">
              <li>Need to Contact us ? </li>
              <li>
                <p>Contact us with your Email address for queries</p>
              </li>
              <li>
                <input type="text" placeholder="Query ... "></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
