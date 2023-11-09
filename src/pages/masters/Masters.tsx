import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-reveal";

// styles
import styles from "./masters.module.css";

// imports
import GeneralPull from "../../components/general-pull/GeneralPull";
import ProgramCard from "../../components/programs/ProgramCard";
import { useTranslation } from "react-i18next";

const tag = "msc";
const programsEN = [
  {
    title: "Masters Programmes List",
    list: [
      "Midwifery",
      "Pediatric Nursing",
      "Medical Surgical Nursing",
      "Oncology Nursing",
      "Nurse Anesthesia",
      "Geriatric Nursing",
      "Public Health",
      "Physiotherapy",
      "Medical Imaging Technology",
    ],
  },
];

const programsFR = [
  {
    title: "Liste des Programmes de Master",
    list: [
      "Sages-femmes",
      "Soins Infirmiers Pédiatriques",
      "Soins Infirmiers Médico-chirurgicaux",
      "Soins Infirmiers en Oncologie",
      "Infirmière Anesthésiste",
      "Soins Infirmiers Gériatriques",
      "Santé Publique",
      "Physiothérapie",
      "Technologie de L'imagerie Médicale",
    ],
  },
];

const Masters = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  const programs = i18n.language === "en" ? programsEN : programsFR;

  return (
    <div className={styles.bachelors}>
      <div className="hero">
        <h3>{t("masters.start")}</h3>
        <Fade left>
          <h1>{t("masters.masters")}</h1>
          <h4 className={styles.para}>{t("masters.para1")}</h4>
        </Fade>
      </div>

      <div
        style={{ minHeight: "40vh", background: "#F5F4F3" }}
        className="about"
      >
        <div className="desc">
          <h4 style={{ fontSize: "2.2rem" }}>{t("masters.para2")}</h4>
        </div>
      </div>

      <div style={{ minHeight: "25vh" }} className="about">
        <div className="desc">
          <h4>{t("masters.para3")}</h4>
        </div>
      </div>

      <div className={styles.list}>
        {programs.map((program, index) => (
          <ProgramCard program={program} tag={tag} key={index} />
        ))}
        <div className="core-program">
          <h2>{t("masters.core")}</h2>
          <ul>
            <li>
              <span>
                <AiOutlineArrowRight color="var(--main-color)" />
              </span>{" "}
              {t("masters.core1")}
            </li>
            <li>
              <span>
                <AiOutlineArrowRight color="var(--main-color)" />
              </span>{" "}
              {t("masters.core2")}
            </li>
          </ul>
        </div>

        <div className="core-program">
          <h2>{t("masters.req")}</h2>
          <p className={styles.requirement}>{t("masters.req_text")}</p>
        </div>
      </div>

      <GeneralPull />
    </div>
  );
};

export default Masters;
