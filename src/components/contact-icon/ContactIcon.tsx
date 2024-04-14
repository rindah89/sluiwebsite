import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FcCustomerSupport, FcOnlineSupport } from "react-icons/fc";

// styles
import "./contacticon.css";
import { useTranslation } from "react-i18next";

const ContactIcon = () => {
  const [active, setActive] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="chat__icon">
      <div className={`contacts ${active ? "active" : null}`}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=671710928&text=Hello20%there"
        >
          <FcCustomerSupport size={20} />{" "}
          {t("contact_icon_component.communication")}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=678425922&text=Hello20%there"
        >
          <FcOnlineSupport size={20} />
          {t("contact_icon_component.admission")}
        </a>
      </div>
      <div onClick={() => setActive(!active)} className="icon">
        <AiOutlineWhatsApp size={20} color="#fff" />
        <h4>{t("contact_icon_component.chat")}</h4>
      </div>
    </div>
  );
};

export default ContactIcon;
