import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-reveal";

// styles
import styles from "./masters.module.css";

// imports
import GeneralPull from "../../components/general-pull/GeneralPull";
import ProgramCard from "../../components/programs/ProgramCard";
import { useTranslation } from "react-i18next";

const tag = "hnd";
const HND = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  const programsEN = [
    {
      title: "Health and Biomedical Sciences",
      list: [
        "Clinical Optimetry and Ophtamology",
        "Nutrition and Dietetics",
        "Radiology and ultrasonography",
        "Physiotherapy",
        "Midwifery",
        "Pharmaceutical Technology",
        "Nursing",
      ],
    },
    {
      title: "Engineering and Technology",
      list: [
        "Networking and Security",
        "Telecommunication",
        "Electrical Power Systems",
        "Software Engineering",
        "Computer Hardware Maintenance",
      ],
    },
    {
      title: "Agriculture and Natural Sciences",
      list: [
        "Agricultural Production Technology",
        "Animal Production",
        "Crop production",
        "Agro-Pastoral Advisor",
        "Food Processing Technology",
      ],
    },
  ];

  const programsFR = [
    {
      title: "Santé et Sciences Biomédicales",
      list: [
        "Optimétrie Clinique et Ophtamologie",
        "Nutrition et Diététique",
        "Radiologie et échographie",
        "Physiothérapie",
        "Sages-femmes",
        "Technologie de la Pharmacie",
        "Soins Infirmiers",
      ],
    },
    {
      title: "Ingénierie et Technologie",
      list: [
        "Réseau et Sécurité",
        "Télécommunications",
        "Systèmes d'Alimentation Électrique",
        "Génie Logiciel",
        "Maintenance du Matériel Informatique",
      ],
    },
    {
      title: "Agriculture et Sciences Naturelles",
      list: [
        "Technologie de la Production Agricole",
        "Production Animale",
        "Production Végétale",
        "Conseiller Agro-Pastoral",
        "Technologie de Transformation des Aliments",
      ],
    },
  ];

  const programs = i18n.language === "en" ? programsEN : programsFR;
  return (
    <div>
      <div className="hero">
        <h3>{t("hnd.start")}</h3>
        <Fade left>
          <h1>{t("hnd.programmes")}</h1>
          <h4 className={styles.para}>
          {t("hnd.desc")}
          </h4>
        </Fade>
      </div>

      <div style={{ minHeight: "25vh" }} className="about">
        <div className="desc">
          <h4>{t("hnd.below")}</h4>
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

export default HND;
