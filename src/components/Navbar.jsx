import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState, useEffect } from "react";
import ProfileMenu from "./ProfileMenu";

function Navbar({userData, setUserData}) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const prevData = sessionStorage.getItem('userData');
    if (prevData) {
        setUserData(JSON.parse(prevData));
    }
  }, []);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div
        // style={{position:'sticky'}}
    >
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
            <hr/>
            {userData && <ProfileMenu userData={userData} setUserData={setUserData} openNav={openNav}/>}
            {!userData && <div>
            <li>
              <Link className="" onClick={openNav} to="/login">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="" onClick={openNav} to="/register">
                Register
              </Link>
            </li>
            </div>
            }
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:'none'}}>
              <div style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
                <img src={"/company_logo.png"} alt="logo-img" style={{width:"40px", height:'auto', marginLeft: '55px'}}/>
                <h2 style={{color: "green", fontSize:'2rem',marginLeft:"10px" }}>Zero Drop Taxi</h2>
              </div>
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
            {userData && <ProfileMenu userData={userData} setUserData={setUserData}/>}
            {!userData && 
            <Link className="navbar__buttons__sign-in" to="/login">
              Sign In
            </Link>}
            {!userData &&
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
            }
            
          </div>
          

          {/* mobile */}
          <div className="mobile-hamb" style={{ justifyContent:"space-between"}} onClick={openNav}>
          <i className="fa fa-bars" aria-hidden="true"></i> 
          {/* <img  className="burger_menu"  style={{width:"10%" , height:"10%"}} src="https://clipground.com/images/navbar-icons-png-2.png" alt="" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
