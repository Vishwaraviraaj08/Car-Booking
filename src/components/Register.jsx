import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import 'https://kit.fontawesome.com/a81368914c.js';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('https://car-booking-api.netlify.app/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        setLoading(false);
        if (data.created) {
            navigate('/login');
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
                    <img src="https://th.bing.com/th/id/R.1efa549df250eb0940d5c9fccd2458ae?rik=MqNtlILhKv3QuQ&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f6cp%2f67k%2f6cp67k9di.png&ehk=azpc%2fUcO0cyrlundAvuLCVGjR1tMZLjuHH%2fZHx6Yfjw%3d&risl=&pid=ImgRaw&r=0" alt="background" />
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
                                <h5 className="login-h5">Username</h5>
                                <input style={{fontSize:'1.5rem'}}  type="text" className="login-input" onChange={(event) => { setName(event.target.value) }} />
                            </div>
                        </div>
                        <div className="login-input-div login-input-div-one">
                            <div className="login-i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="login-div">
                                <h5 className="login-h5">Email</h5>
                                <input style={{fontSize:'1.5rem'}}  type="email" className="login-input" onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                        </div>
                        <div className="login-input-div login-input-div-pass">
                            <div className="login-i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="login-div">
                                <h5 className="login-h5">Password</h5>
                                <input style={{fontSize:'1.5rem'}} type="password" className="login-input" onChange={(event) => { setPassword(event.target.value) }} />
                            </div>
                        </div>
                        <input style={{fontSize:'1.5rem'}} type="submit" className="login-btn" value="Register" onClick={handleSubmit} />
                        {loading && (
                            <div className="spinner-container">
                                <div className="spinner"></div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
