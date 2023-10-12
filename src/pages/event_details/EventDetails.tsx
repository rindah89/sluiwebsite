import React, { FC, useEffect, useState } from "react";
import styles from "./event_details.module.css";
import { CiLocationOn } from "react-icons/ci";
import { events } from "../news&events/News&events";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

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
  const event = events[0];
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  const navigate = useNavigate();

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
              Back
            </p>
          </div>
        </Fade>
        <div className={styles.heading}>{event.heading}</div>
        <p className={styles.tag}>Let's talk about business</p>
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
        <p className={styles.sub_head}>
          Are you interested in starting a management degree at SLUI?
        </p>
        <p className={styles.body}>
          We invite you to attend 3 virtual lectures to learn more about the
          Bachelor's, Master's and MBA programmes in Business and management
        </p>
        <p className={styles.body}>
          After a short introduction to SLUI, our campuses, Douala, Yaounde and
          Bamenda and our unique CORE teaching principle, you dive into our
          lectures
        </p>
      </div>
    </>
  );
};

export default EventDetails;
