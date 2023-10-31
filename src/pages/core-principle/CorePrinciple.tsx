import React, { useEffect } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./core.module.css";

// imports
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import { programmesEN, programmesFR } from "../landing/Landing";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";

const CorePrinciple = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {t, i18n} = useTranslation()

  const programmes = i18n.language === 'en' ? programmesEN : programmesFR;

  return (
    <div>
      <div className={styles.hero}>
        <h3>{t("core_principles.core_principles")}</h3>
        <Fade left>
          <h1 style={{ lineHeight: "1.1", margin: "2rem 0" }}>
          {t("core_principles.hhh")}
          </h1>
          <h4 style={{ fontSize: "1.8rem", color: "#fff" }}>
          {t("core_principles.slui_approach")}
          </h4>
        </Fade>
      </div>
      <div style={{ minHeight: "10vh", padding: "4rem 4vw" }} className="about">
        <div className="desc">
          <Fade up>
            <h2>{t("core_principles.around_you")}</h2>
          </Fade>
          <h4>
          {t("core_principles.around_you_tag")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("core_principles.sbs")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
          {t("core_principles.we_believe")}
          </h4>
          <h4 style={{ marginTop: "4rem" }}>
          {t("core_principles.principles")}?{" "}
          </h4>
          <h4>{t("core_principles.no_thanks")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("core_principles.eye_level")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
          {t("core_principles.eye_level_text")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("core_principles.mistakes")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
          {t("core_principles.mistakes_text1")}
            <span style={{ fontWeight: "600" }}>{t("core_principles.mistakes_text2")}</span>
            {t("core_principles.mistakes_text3")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("core_principles.real_world")}</h2>
        </div>

        <div className={styles.content}>
          <h4>
          {t("core_principles.real_world_text1")}
          </h4>
          <h4>
          {t("core_principles.real_world_text2")}
          </h4>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>{t("core_principles.just_fit")}</h3>
          <h2>{t("core_principles.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={programmes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("core_principles.membership_partnership")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default CorePrinciple;
