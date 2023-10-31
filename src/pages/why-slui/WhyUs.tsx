import React, { useEffect } from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./why-us.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.hero}>
        <h3>{t("why_us.name")}</h3>
        <Fade left>
          <h1>{t("why_us.why")}</h1>
        </Fade>
      </div>
      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("why_us.explore")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <strong style={{ fontWeight: "600" }}>
              {`“${t("why_us.serve")}”.`}
            </strong>
            <br />
            {t("why_us.exploring")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("why_us.immersion")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <strong style={{ fontWeight: "600" }}>
              {`“${t("why_us.pursue")}”.`}
            </strong>
            <br /> {t("why_us.while")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("why_us.innovation")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <strong style={{ fontWeight: "600" }}>
              {`“${t("why_us.innovation1")}”.`}
            </strong>
            <br /> {t("why_us.innovation2")}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
