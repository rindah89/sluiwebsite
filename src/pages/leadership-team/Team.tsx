import React, { FC, useEffect, useState } from "react";
import styles from "./team.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import LeaderCard from "../../components/leader-card/LeaderCard";
import { useTranslation } from "react-i18next";

const Team: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const { t, i18n } = useTranslation();

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

  const navigate = useNavigate();

  const TeamEN = [
    {
      image: "/images/nick.jpeg",
      name: "Dr. Nick Nganyam",
      position: "President",
    },
    {
      image: "/images/florence.jpg",
      name: "Dr. Manjong Florence",
      position: "DVC. Academic Affairs",
    },
    {
      image: "/images/olivier.jpg",
      name: "Mr. Tolly Olivier",
      position: "DVC. Admin and Finance",
    },
    {
      image: "/new/perez.jpg",
      name: "MR. CHEGHE PEREZ K",
      tel: "679 933 329",
      position: "Dean of Studies, Health",
    },
    {
      image: "/new/simon.jpeg",
      name: "MR SIMON MUFOR",
      tel: "652 615 379",
      position: "Dean of Studies, ICT",
    },
    {
      image: "/new/mandi.jpg",
      name: "MR. MANDI DERICK",
      tel: "672 137 794",
      position: "Registrar/Lecturer Nursing",
    },
    {
      image: "",
      name: "MME. ASHUBENG EMILE B.",
      tel: "678 933 452",
      position: "Administrative Secretary",
    },
    {
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDkiHhIGnzHzWofwBaSfusOd9NSn7FBSykwKyci36okkO89EF4b29Hf3WnaJepW2IhDbNE5hvMSbEbcPruzgOycteL7yQ=s1600",
      name: "MR. KUM CYPRIAN N.",
      tel: "681 200 836",
      position: "Administravie Assistant I",
    },
    {
      image: "/new/kingsley.jpeg",
      name: "NDIPENDOH KINGSLY MUKOM",
      tel: "679 201 766",
      position: "Administrative Representative",
    },
  ];

  const TeamFR = [
    {
      image: "/images/nick.jpeg",
      name: "Dr. Nick Nganyam",
      position: "Président",
    },
    {
      image: "/images/florence.jpg",
      name: "Dr. Manjong Florence",
      position: "DVC. Affaires Académiques",
    },
    {
      image: "/images/olivier.jpg",
      name: "Mr. Tolly Olivier",
      position: "DVC. Administration et Finances",
    },
    {
      image: "/new/perez.jpg",
      name: "MR. CHEGHE PEREZ K",
      tel: "679 933 329",
      position: "Doyen des Études, Santé",
    },
    {
      image: "/new/simon.jpeg",
      name: "MR SIMON MUFOR",
      tel: "652 615 379",
      position: "Doyen des Études, TIC",
    },
    {
      image: "/new/mandi.jpg",
      name: "MR. MANDI DERICK",
      tel: "672 137 794",
      position: "Registraire/Conférencier en Soins Infirmiers",
    },
    {
      image: "",
      name: "MME. ASHUBENG EMILE B.",
      tel: "678 933 452",
      position: "Secrétaire Administrative",
    },
    {
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDkiHhIGnzHzWofwBaSfusOd9NSn7FBSykwKyci36okkO89EF4b29Hf3WnaJepW2IhDbNE5hvMSbEbcPruzgOycteL7yQ=s1600",
      name: "MR. KUM CYPRIAN N.",
      tel: "681 200 836",
      position: "Assistant Administratif I",
    },
    {
      image: "/new/kingsley.jpeg",
      name: "NDIPENDOH KINGSLY MUKOM",
      tel: "679 201 766",
      position: "Représentant Administratif",
    },
  ];

  const Team = i18n.language === "en" ? TeamEN : TeamFR;

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
              {t("team.back")}
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
            {t("team.team")}
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.heading}>{t("team.introduce")}</p>
        <p className={styles.paragraph}>{t("team.intro_para")}</p>
      </div>
      <div className={styles.event_section}>
        {Team.map((facility, index) => {
          return (
            <LeaderCard
              key={index}
              name={facility.name}
              title={facility.position}
              image={facility.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
