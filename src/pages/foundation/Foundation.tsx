import React, { useEffect } from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./foundation.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Foundation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t } = useTranslation();

  return (
    <div className={styles.bachelors}>
      <div className="hero">
        {/* <h3>{t("foundation.courses")}</h3> */}
        <Fade left>
          <h1 style={{ lineHeight: "1.1", margin: "3rem 0" }}>
            {t("foundation.medical")}
          </h1>
          <h4 className={styles.para}>{t("foundation.desc")}</h4>
        </Fade>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("foundation.prep")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("foundation.pres_desc1")}</h4>

          <h4>{t("foundation.pres_desc2")}</h4>

          <h4>
            <span>{t("foundation.note")}</span>
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("foundation.gateway")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("foundation.thanks")}</h4>

          <h4>{t("foundation.by_joining")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("foundation.details")}</h2>
        </div>

        <ul>
          <li>
            <span>{t("foundation.duration")}</span>{" "}
            {t("foundation.duration_text")}
          </li>
          <li>
            <span>{t("foundation.start")}</span> {t("foundation.october")}
          </li>
          <li>
            <span>{t("foundation.tuition")}</span> 1,000,000 FCFA
          </li>
        </ul>

        <div className={styles.links}>
          <Link to="/">{t("foundation.request")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
