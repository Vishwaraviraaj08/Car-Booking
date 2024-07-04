import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/luggage-policy">
                Luggage Policy
              </Link>
            </li>
          
            <li>
              <Link onClick={openNav} to="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/luggage-policy">
                Luggage Policy
              </Link>
            </li>

            <li>
              {" "}
              <Link className="contact-link" to="/terms">
                Terms
              </Link>
            </li>
          
            
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/login">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" style={{ justifyContent:"space-between"}}onClick={openNav}>
          <i className="fa fa-bars" aria-hidden="true"></i> 
          {/* <img  className="burger_menu"  style={{width:"10%" , height:"10%"}} src="https://clipground.com/images/navbar-icons-png-2.png" alt="" /> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
