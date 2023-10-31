import React, { FC, useEffect, useState } from "react";
import styles from "./facilities.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const facilitiesEN = [
  {
    image: require("../../assets/study_abroad.jpg"),
    name: "Work & study opportunities in Germany, Canada, UK, etc..",
  },
  {
    image: require("../../assets/laboratory.JPG"),
    name: "Well-equiped laboratories for practicals",
  },
  {
    image: require("../../assets/internship.jpg"),
    name: "Internship partnership with Top Notch Hospitals and Clinics",
  },
  {
    image: require("../../assets/scholarship.jpg"),
    name: "Scholarship for deserving students",
  },
  {
    image: require("../../assets/social.jpg"),
    name: "Opportunities for students to develop alternative Talents through club activities",
  },
  {
    image: require("../../assets/german_language.jpg"),
    name: "Free German Language course for freshers",
  },
  {
    image: require("../../assets/english_language.jpg"),
    name: "Free English Language course for French speaking students",
  },
];

const facilitiesFR = [
  {
    image: require("../../assets/study_abroad.jpg"),
    name: "Opportunités de travail et d'études en Allemagne, au Canada, au Royaume-Uni, etc.",
  },
  {
    image: require("../../assets/laboratory.JPG"),
    name: "Laboratoires bien équipés pour les travaux pratiques",
  },
  {
    image: require("../../assets/internship.jpg"),
    name: "Partenariat de stage avec les hôpitaux et cliniques Top Notch",
  },
  {
    image: require("../../assets/scholarship.jpg"),
    name: "Bourse d'études pour les étudiants méritants",
  },
  {
    image: require("../../assets/social.jpg"),
    name: "Possibilités pour les étudiants de développer d'autres talents par le biais d'activités de club",
  },
  {
    image: require("../../assets/german_language.jpg"),
    name: "Cours d'allemand gratuit pour les nouveaux arrivants",
  },
  {
    image: require("../../assets/english_language.jpg"),
    name: "Cours d'Anglais gratuits pour les étudiants Francophones",
  },
];

const Facilities: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const facilities = i18n.language === "en" ? facilitiesEN : facilitiesFR;
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
            onMouseLeave={() => setIsHover(false)}
            onClick={() => navigate(-1)}
          >
            <div className={isBouncing ? styles.bounce : ""}>
              <BsArrowLeft
                size={isHover ? 14 : 16}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: isHover ? "#ffffff80" : "#ffffff",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                color: isHover ? "#ffffff80" : "#ffffff",
              }}
            >
              {t("facilities.back")}
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "4rem" : "6rem",
              fontWeight: "bold",
              color: "#ffffff",
              width: "80%",
            }}
          >
            {t("facilities.h2h")}
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.sub_heading}>{t("facilities.glance")}</p>
        <p className={styles.heading}>{t("facilities.services")}</p>
        <p className={styles.paragraph}>{t("facilities.we_hope")}</p>
      </div>
      <div className={styles.event_section}>
        {facilities.map((facility, index) => {
          return (
            <div className={styles.facility}>
              <div className={styles.image}>
                <img
                  src={facility.image}
                  alt="facility"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    marginTop:
                      index === 1
                        ? "-1.5rem"
                        : index === 3
                        ? "-3rem"
                        : index === 5
                        ? "-3rem"
                        : "0rem",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                />
              </div>
              <p
                style={{
                  padding: "3rem",
                  fontWeight: "400",
                }}
              >
                {facility.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
