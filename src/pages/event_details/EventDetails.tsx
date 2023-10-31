import React, { FC, useEffect, useState } from "react";
import styles from "./event_details.module.css";
import { CiLocationOn } from "react-icons/ci";
import { eventsEN, eventsFR } from "../news&events/News&events";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";

type Props = {
  event: {
    heading: string;
    tag: string;
    subHeading: string;
    body: string;
    footer: string;
  };
};

const EventDetails: FC = () => {
  const { i18n } = useTranslation();

  const events = i18n.language === "fr" ? eventsFR : eventsEN;
  
  const event = events[0];
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };
  return (
    <>
      <div className={styles.main}>
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
                size={isHover ? 16 : 20}
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                  transition: "0.5s ease-out",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: isHover ? "#902d28" : "var(--main-color)",
              }}
            >
              {t("event_details.back")}
            </p>
          </div>
        </Fade>
        <div className={styles.heading}>{event.heading}</div>
        <p className={styles.tag}>{t("event_details.talk_business")}s</p>
        <p className={styles.sub_head}>{event.subHeading}</p>
        <div className={styles.location}>
          <CiLocationOn className={styles.body} />
          <p className={styles.body}>{event.footer}</p>
        </div>
        <div className={styles.container}>
          <div className={styles.bodyContainer}>
            <p className={styles.body}>{event.body}</p>
          </div>
          <div>
            <img
              src={require("../../assets/core.jpg")}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.sub}>
        <p className={styles.sub_head}>{t("event_details.interested")}</p>
        <p className={styles.body}>{t("event_details.invite")}</p>
        <p className={styles.body}>{t("event_details.after")}</p>
      </div>
    </>
  );
};

export default EventDetails;
