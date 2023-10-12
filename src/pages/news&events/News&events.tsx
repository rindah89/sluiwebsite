import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./news&events.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Event from "../../components/event/Event";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";

const pastEvents = [
  {
    heading: "Resist exams",
    tag: "All levels",
    subHeading: "04.09.23",
    body: "Commencement of resit exams for 2022/23 academic year",
    footer: "All campuses",
  },
  {
    heading: "Admission",
    tag: "L200",
    subHeading: "21.09.23",
    body: "Ongoing admission and registration into level 200",
    footer: "All campuses",
  },
  {
    heading: "Resist exams",
    tag: "All levels",
    subHeading: "04.09.23",
    body: "Commencement of resit exams for 2022/23 academic year",
    footer: "All campuses",
  },
  {
    heading: "Admission",
    tag: "L200",
    subHeading: "21.09.23",
    body: "Ongoing admission and registration into level 200",
    footer: "All campuses",
  },
];

const futureEvents = [
  {
    heading: "Club activities",
    tag: "All levels",
    subHeading: "11.10.23",
    body: "Lectures / launching of club activities",
    footer: "Bonamoussadi campus",
  },
  {
    heading: "Party",
    tag: "11.11.23",
    subHeading: "L200",
    body: "Weekend/Welcome party for freshmen",
    footer: "All campuses",
  },
  {
    heading: "Career orientation",
    tag: "06.12.23",
    subHeading: "L200",
    body: "Lectures/ Revision / Career orientation day",
    footer: "Bonamoussadi",
  },
  {
    heading: "Career orientation",
    tag: "06.12.23",
    subHeading: "L200",
    body: "Lectures/ Revision / Career orientation day",
    footer: "Bonamoussadi",
  },
];

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
  ...pastEvents,
  ...futureEvents,
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NewsnEvents = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
                size={isHover ? 24 : 32}
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                  transition: "0.5s ease-out",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "2.5rem",
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
              fontSize: width <= 450 ? "3rem" : "5rem",
              fontWeight: "bold",
              color: "var(--main-color)",
              width: "80%",
            }}
          >
            Let's meet at SLUI
          </p>
        </Fade>
      </div>
      <div className={styles.divider} />
      <div className={styles.event}>
        {/* <h3>Onsite, Online & Hybrid Events</h3> */}
        <h3>Upcoming events</h3>
        {/* <div className={styles.event_section}> */}
        <Carousel responsive={responsive}>
          {futureEvents.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </Carousel>
        {/* </div> */}
        <h3>Past events</h3>
        {/* <div className={styles.event_section}> */}
        <Carousel responsive={responsive}>
          {pastEvents.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NewsnEvents;
