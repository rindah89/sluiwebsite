import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { FcCustomerSupport, FcOnlineSupport } from "react-icons/fc";
import { GrLogin } from "react-icons/gr";

// styles
import styles from "./contacticon.module.css";
import { useTranslation } from "react-i18next";

const ContactIcon = () => {
  // const [active, setActive] = useState(false);

  const { t } = useTranslation();

  return (
    <div className={styles.chat__icon}>
      {/* <div className={`${styles.contacts} ${active ? styles.active : null}`}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://apply.stlouissystems.org/"
        >
          <FcCustomerSupport size={20} />{" "}
          {t("contact_icon_component.communication")}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://apply.stlouissystems.org/"
        >
          <FcOnlineSupport size={20} />
          {t("contact_icon_component.admission")}
        </a>
      </div> */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://apply.stlouissystems.org/"
        className={styles.icon}
      >
        {/* <GrLogin size={20} color="#fff"/> */}
        <h4>{t("header.apply")}</h4>
      </a>
    </div>
  );
};

export default ContactIcon;
