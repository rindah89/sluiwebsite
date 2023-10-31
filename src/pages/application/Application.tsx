import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./application.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Application = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  const [isBouncing, setIsBouncing] = useState(false);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Fade left>
          <div
            className={styles.back}
            onMouseEnter={() => {
              setIsHover(true);
              startBounceAnimation();
            }}
            onClick={() => navigate(-1)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className={isBouncing ? styles.bounce : ""}>
              <BsArrowLeft
                size={isHover ? 14 : 16}
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: isHover ? "#902d28" : "var(--main-color)",
              }}
            >
              {t("application.back")}
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "2rem" : "3.5rem",
              fontWeight: "bold",
              color: "var(--main-color)",
              width: "80%",
            }}
          >
            {t("application.application")}
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        <h3>{t("application.processes")}</h3>
        <div className={styles.event_section}>
          <p className={styles.heading}>{t("application.heading")}</p>
          <div style={{ marginTop: 20 }}>
            <div style={{ marginBottom: 20 }}>
              <p className={styles.heading}>{t("application.hta")}</p>
              <p className={styles.normal}>
                <span className={styles.numbering}>1.</span>
                <span>
                  {t("application.hta1")}{" "}
                  <a href="www.slui.org" target="_blank">
                    www.slui.org
                  </a>
                </span>
              </p>
              <p className={styles.normal}>
                <span className={styles.numbering}>2.</span>
                <span>{t("application.hta2")}</span>
              </p>
            </div>
            <div>
              <p className={styles.heading}>{t("application.doc")}</p>
              <ul
                style={{
                  marginLeft: 10,
                }}
              >
                <li className={styles.normal}>{t("application.doc1")}</li>
                <li className={styles.normal}>{t("application.doc2")}</li>
                <li className={styles.normal}>{t("application.doc3")}</li>
                <li className={styles.normal}>
                  {t("application.doc41")}{" "}
                  <strong>{t("application.doc42")}</strong>
                </li>
                <li className={styles.normal}>
                  {t("application.doc51")}{" "}
                  <strong>{t("application.doc52")}</strong>
                </li>
                <li className={styles.normal}>
                  {t("application.doc61")}{" "}
                  <strong>{t("application.doc62")}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
