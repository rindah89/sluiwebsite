import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-reveal";

// styles
import styles from "./masters.module.css";

// imports
import GeneralPull from "../../components/general-pull/GeneralPull";
import ProgramCard from "../../components/programs/ProgramCard";
import { useTranslation } from "react-i18next";

const tag = "bsc";
export const bachelorsProgramsEN = [
  {
    title: "Health and Biomedical Sciences",
    list: [
      "Clinical Optimetry and Ophtamology",
      "Nutrition and Dietetics",
      "Radiology and ultrasonography",
      "Physiotherapy",
      "Midwifery",
      "Pharmaceutical Technology",
      "Dental Therapy",
      "Medical Lab Sciences",
      "Pharmaceutical Sciences",
      "Nursing",
    ],
  },
  {
    title: "Agriculture and Natural Sciences",
    list: ["Agronomy", "Animal Production"],
  },
];

export const bachelorsProgramsFR = [
  {
    title: "Santé et Sciences Biomédicales",
    list: [
      "Optimétrie Clinique et Ophtamologie",
      "Nutrition et Diététique",
      "Radiologie et Échographie",
      "Physiothérapie",
      "Sages-femmes",
      "Technologie de la Pharmacie",
      "Thérapie Dentaire",
      "Sciences de Laboratoire Médical",
      "Sciences Pharmaceutiques",
      "Soins Infirmiers",
    ],
  },
  {
    title: "Agriculture et Sciences Naturelles",
    list: ["Agronomie", "Production Animale"],
  },
];

const Bachelors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  const programs = i18n.language === "en" ?bachelorsProgramsEN : bachelorsProgramsFR;

  return (
    <div className={`${styles.bachelors}`}>
      <div className="hero">
        {/* <h3>{t("bachelors.start")}</h3> */}
        <Fade left>
          <h1>{t("bachelors.bachelors")}</h1>
          <h4 className={styles.para}>{t("bachelors.para")}</h4>
        </Fade>
      </div>

      <div style={{ minHeight: "10vh", marginTop: "30px" }} className="about">
        <div className={styles.desc}>
          <h3>{t("bachelors.start")}</h3>
        </div>
      </div>

      <div className={styles.list}>
        {programs.map((program, index) => (
          <ProgramCard program={program} tag={tag} key={index} />
        ))}
      </div>

      <GeneralPull />
    </div>
  );
};

export default Bachelors;
