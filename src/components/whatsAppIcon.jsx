// PhoneIcon.js
import React from 'react';
import '../styles/whatsAppIcon.css';

const WhatsAppIcon = () => {
  return (
    <div className="whatsApp-icon">
      <a href="https://wa.me/7358380026?text=hi" target={"_blank"}>
        <img src="/whatsApp.png" alt="Phone" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;