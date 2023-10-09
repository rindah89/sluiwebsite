import React, { useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./news&events.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Event from "../../components/event/Event";
import { useNavigate } from "react-router-dom";

export const events = [
  {
    heading: "Resumption of lectures",
    tag: "L100",
    subHeading: "02.10.23",
    body: "Resumption of lectures for level 100 medicals, level 100 Agriculture and level 100 Enginnering",
    footer: "All campuses",
  },
  {
    heading: "Resumption of lectures",
    tag: "L400|L500|L600",
    subHeading: "16.10.23",
    body: "Resumption of lectures for level 400, 500 and 600 Health science",
    footer: "All campuses",
  },
  {
    heading: "Sourcing for internship",
    tag: "Internship",
    subHeading: "30.10.20",
    body: "Sourcing of internship sites for the faculties of Engineering, Agriculture and Health sceinces / obtain authorization for internship and prospection of internship sites",
    footer: "All campuses",
  },
  {
    heading: "Socials",
    tag: "",
    subHeading: "01.11.23",
    body: "Welcome party for freshmen",
    footer: "All campuses",
  },
];

const NewsnEvents = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  const navigate = useNavigate();

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
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: isHover ? "#902d28" : "var(--main-color)",
              }}
            >
              Back
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "2rem" : "3.5rem",
              fontWeight: "bold",
              color: "var(--main-color)",
              width: "80%",
            }}
          >
            Join our events and get to know about our university!
          </p>
        </Fade>
        <Fade bottom>
          <p
            style={{
              fontSize: width <= 450 ? "1.5rem" : "2rem",
              fontWeight: "semi-bold",
              color: "#575756",
              wordSpacing: "1rem",
            }}
          >
            Online // Onsite // Hybrid events
          </p>
        </Fade>
      </div>
      <div className={styles.divider} />
      <div className={styles.event}>
        <h3>Online & Hybrid events</h3>
        <div className={styles.event_section}>
          {events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsnEvents;
