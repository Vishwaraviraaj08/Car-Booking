import React, { useEffect } from 'react';
import '../styles/Login.css';
import 'https://kit.fontawesome.com/a81368914c.js';

const Login = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll(".login-input");

        function addFocusClass() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("login-input-div-focus");
        }

        function removeFocusClass() {
            let parent = this.parentNode.parentNode;
            if (this.value === "") {
                parent.classList.remove("login-input-div-focus");
            }
        }

        inputs.forEach(input => {
            input.addEventListener("focus", addFocusClass);
            input.addEventListener("blur", removeFocusClass);
        });
    }, []);

    return (
        <div className="login-body">
            <img className="login-wave" src="/wave.png" alt="background wave" />
            <div className="login-container">
                <div className="login-img">
                    <img src="/bg.svg" alt="background" />
                </div>
                <div className="login-content">
                    <form className="login-form" action="index.html">
                        <img src="/avatar.svg" alt="avatar" />
                        <h2 className="login-title">Welcome</h2>
                        <div className="login-input-div login-input-div-one">
                            <div className="login-i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="login-div">
                                <h5 className="login-h5">Username</h5>
                                <input type="text" className="login-input" />
                            </div>
                        </div>
                        <div className="login-input-div login-input-div-pass">
                            <div className="login-i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="login-div">
                                <h5 className="login-h5">Password</h5>
                                <input type="password" className="login-input" />
                            </div>
                        </div>
                        <a href="#" className="login-a">Forgot Password?</a>
                        <input type="submit" className="login-btn" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
