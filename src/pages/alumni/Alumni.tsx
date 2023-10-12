import React, { FC, useEffect, useState } from "react";
import styles from "./alumni.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Alumni: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

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

  const alumni = [
    {
      image: "",
      name: "CHEFON BRANDON",
      tel: "+592 680 4363",
      position: "Doctor of Medicine (Texila American University) Zambia",
    },
    {
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaAgl_S8fws6MD-0HS2ruZNhaJhDhVzz8j4MNA-_-CviN2Id5p8KHDTatERbhejG2q1pWRadHIgEedCL0qn4AomGsWrXbg=s1600",
      name: "MENGOT SYLVIA",
      tel: "+237 651 428 708",
      position: "Lecturer, Nursing",
    },
    {
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBTwh_BvWY-ul1eESuYwrbSTbNvGfM1dyoNTAPMhAcrPALsRdkl18n9H3ZjFkieOVug5U8bHGYuJen1oHNn6IcQJkNIuw=s1600",
      name: "VUSENG VERA",
      tel: "+237 670 878 721",
      position: "Acting HOD Physiotherapy",
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
            Alumni
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.heading}>Meet our Alumni</p>
        <p className={styles.paragraph}>
          Celebrating Our Accomplished Alumni: Inspring success Stories and
          Lasting Connections
        </p>
      </div>
      <div className={styles.event_section}>
        {alumni.map((facility, index) => {
          const image = new URL(facility.image, import.meta.url);
          return (
            <div className={styles.facility}>
              <div className={styles.image}>
                <div
                  className={styles.backgroundImage}
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
                    url(${image}), no-repeat`,
                    backgroundSize: "cover",
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

export default Alumni;
