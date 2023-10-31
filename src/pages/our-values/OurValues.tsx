import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import ProgramGrid from "../../components/program-grid/ProgramGrid";

// styles
import styles from "./values.module.css";
import { programmesEN, programmesFR } from "../landing/Landing";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";

const OurValues = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  const programmes = i18n.language === "en" ? programmesEN : programmesFR;

  return (
    <div>
      <div className="hero">
        <h3>{t("values.name")}</h3>
        <Fade left>
          <h1>{t("values.value")}</h1>
        </Fade>
      </div>

      <div style={{ minHeight: "10vh", padding: "4rem 0" }} className="about">
        <div className="desc">
          <h4>{t("values.para")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("values.ethical")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("values.ethical_text")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("values.freedom")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("values.freedom_text")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("values.diversity")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
            {t("values.diversity_text1")}{" "}
            <span style={{ fontWeight: "600" }}>
              {t("values.diversity_text2")}
            </span>{" "}
            {t("values.diversity_text3")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("values.student")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("values.student_text")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("values.impact")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("values.impact_text1")}</h4>
          <h4>• {t("values.impact_text2")}</h4>
          <h4>• {t("values.impact_text3")}</h4>
          <h4>• {t("values.impact_text4")}</h4>
          <h4>{t("values.impact_text5")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("values.steward")}</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("values.steward_text1")}</h4>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>{t("values.just_fit")}</h3>
          <h2>{t("values.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={programmes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("values.membership_partnership")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default OurValues;
