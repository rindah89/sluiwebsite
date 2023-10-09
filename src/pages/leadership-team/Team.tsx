import React, { FC, useState } from "react";
import styles from "./team.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

import image1 from "../../assets/english_language.jpg";

const Team: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

  const navigate = useNavigate();

  const Team = [
    {
      image: "",
      name: "MR. CHEGHE PEREZ K",
      tel: "679 933 329",
      position: "Dean of Studies, Health",
    },
    {
      image: "",
      name: "MR SIMON MUFOR",
      tel: "652 615 379",
      position: "Dean of Studies, ICT",
    },
    {
      image: "",
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
      image: "",
      name: "MR. KUM CYPRIAN N.",
      tel: "681 200 836",
      position: "Administravie Assistant I",
    },
    {
      image: "",
      name: "NDIPENDOH KINGSLY MUKOM",
      tel: "679 201 766",
      position: "Administrative Representative",
    },
  ];
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
              Back
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
            Our Team
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.heading}>Let us introduce ourself</p>
        <p className={styles.paragraph}>
          Learn more about the faculty and staff of SLUI. Our greatest concern
          is to support you during your studies and to prepare you for your
          future.
        </p>
      </div>
      <div className={styles.event_section}>
        {Team.map((facility, index) => {
          return (
            <div className={styles.facility}>
              <div className={styles.image}>
                <div
                  className={styles.backgroundImage}
                  style={{
                    background: `#f0edeb`,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      rowGap: "1rem",
                      padding: "2rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "2.8rem",
                        color: "var(--main-color)",
                        fontWeight: "500",
                      }}
                    >
                      {facility.name}
                    </p>
                    <p
                      style={{
                        color: "#aaa9a7",
                      }}
                    >
                      {facility.tel}
                    </p>
                    <p
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {facility.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
