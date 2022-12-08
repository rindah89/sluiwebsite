import React, { useState } from "react";
import { AiOutlineUser, AiOutlineWhatsApp } from "react-icons/ai";

// styles
import "./contacticon.css";

const ContactIcon = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="chat__icon">
      <div className={`contacts ${active ? "active" : null}`}>
        <a href="#">
          <AiOutlineUser size={20} /> Communication Dept.
        </a>
        <a href="#">
          <AiOutlineUser size={20} />
          Admission Dept.
        </a>
      </div>
      <div onClick={() => setActive(!active)} className="icon">
        <AiOutlineWhatsApp size={25} color="#075E54" />
        <h4>Chat With Us</h4>
      </div>
    </div>
  );
};

export default ContactIcon;
