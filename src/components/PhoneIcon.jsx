// PhoneIcon.js
import React from 'react';
import '../styles/PhoneIcon.css';

const PhoneIcon = () => {
  return (
    <div className="phone-icon">
      <a href="tel:0123456789">
        <img src="/phone.png" alt="Phone" />
      </a>
    </div>
  );
};

export default PhoneIcon;