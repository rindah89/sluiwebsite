import React, { FC, useState } from "react";
import styles from "./facilities.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Facilities: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

  const navigate = useNavigate();

  const facilities = [
    {
      image: require("../../assets/study_abroad.jpg"),
      name: "Work & study opportunieis in Germany, Canada, UK, etc..",
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
            We are here to help!
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.sub_heading}>At A GLANCE</p>
        <p className={styles.heading}>Services and facilities</p>
        <p className={styles.paragraph}>
          We hope that you find your way around SLUI and feel completely at ease
          here. The staff at our numerous services and facilities are happy to
          provide help and advice and answer all your questions
        </p>
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
