import React, { FC, useEffect, useState } from "react";
import styles from "./alumni.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getBuddies } from "../../redux/reducers/app";

const Alumni: FC = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [buddies, setBuddies] = useState([]);
  const [alumni, setalumniEN] = useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handlerGetBuddies = async () => {
    try {
      await getBuddies()
        .then((res: any) => {
          if (res.status === 200) {
            setBuddies(res.data);
            return;
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handlerGetBuddies();
  }, []);

  const filterBuddies = () => {
    const alumnis = buddies.filter((item: any) => item.role === "ALUMNI");
    setalumniEN(alumnis);
  };

  useEffect(() => {
    filterBuddies();
  }, [buddies]);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };

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
              {t("alumni.back")}
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
            {t("alumni.alumni")}
          </p>
        </Fade>
      </div>
      <div className={styles.intro}>
        <p className={styles.heading}>{t("alumni.meet")}</p>
        <p className={styles.paragraph}>{t("alumni.celebrating")}</p>
      </div>
      <div className={styles.event_section}>
        {alumni.map((item: any, index) => {
          // const image = new URL(facility.image, import.meta.url);
          const image = `${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item.image}`;
          return (
            <div className={styles.facility} key={index}>
              <div className={styles.image}>
                <div
                  className={styles.backgroundImage}
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${image}) no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                      {item.name}
                    </p>
                    <p
                      style={{
                        color: "#aaa9a7",
                      }}
                    >
                      {item.phone}
                    </p>
                    <p
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {item.position}
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
