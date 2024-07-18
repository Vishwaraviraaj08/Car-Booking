import React, {useEffect} from 'react';
import '../styles/ForgotPassword.css';
import {Link} from "react-router-dom";

const ForgotPassword = () => {


    return (
        <div className="info-box" style={{marginTop:'10%'}}>
            <h2 className="info-title">You are requested to change the password</h2>
            <p className="info-description">The link to change the password has been sent to your mail. Change the password from that link and Click the button below to Login Again</p>
            <Link to={"/login"} ><button className="info-button">Login</button></Link>
        </div>
    );
}

export default ForgotPassword;