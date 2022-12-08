import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FcCustomerSupport, FcOnlineSupport } from "react-icons/fc";

// styles
import "./contacticon.css";

const ContactIcon = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="chat__icon">
      <div className={`contacts ${active ? "active" : null}`}>
        <a href="#">
          <FcCustomerSupport size={20} /> Communication Dept.
        </a>
        <a href="#">
          <FcOnlineSupport size={20} />
          Admission Dept.
        </a>
      </div>
      <div onClick={() => setActive(!active)} className="icon">
        <AiOutlineWhatsApp size={20} color="#fff" />
        <h4>Chat With Us</h4>
      </div>
    </div>
  );
};

export default ContactIcon;
