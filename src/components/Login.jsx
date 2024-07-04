import React, { useEffect, useState } from 'react';
import '../styles/Login.css';
import 'https://kit.fontawesome.com/a81368914c.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://car-booking-api.netlify.app/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user, password }),
        });
        const data = await response.json();
        console.log(data);
        if (data.auth) {
            navigate('/');
        }

    }

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
                    <form className="login-form">
                        <img src="/avatar.svg" alt="avatar" />
                        <h2 className="login-title">Welcome</h2>
                        <div className="login-input-div login-input-div-one">
                            <div className="login-i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="login-div">
                                <h5 className="login-h5">Email</h5>
                                <input type="email" className="login-input" onChange={(event) => {setUser(event.target.value)}}/>
                            </div>
                        </div>
                        <div className="login-input-div login-input-div-pass">
                            <div className="login-i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="login-div">
                                <h5 className="login-h5">Password</h5>
                                <input type="password" className="login-input" onChange={(event) => {setPassword(event.target.value)}}/>
                            </div>
                        </div>
                        <input type="submit" className="login-btn" value="Login" onClick={handleSubmit}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
