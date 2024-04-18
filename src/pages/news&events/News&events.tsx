import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./news&events.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Event from "../../components/event/Event";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

import { getEvents } from "../../redux/reducers/app";

const pastEventsEN = [
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

const pastEventsFR = [
  {
    heading: "Résister aux examens",
    tag: "Tous les niveaux",
    subHeading: "04.09.23",
    body: "Début des examens de rattrapage pour l'année académique 2022/23",
    footer: "Tous les campus",
  },
  {
    heading: "Admission",
    tag: "L200",
    subHeading: "21.09.23",
    body: "Admission et inscription en cours au niveau 200",
    footer: "Tous les campus",
  },
  {
    heading: "Résister aux examens",
    tag: "Tous les niveaux",
    subHeading: "04.09.23",
    body: "Début des examens de rattrapage pour l'année académique 2022/23",
    footer: "Tous les campus",
  },
  {
    heading: "Admission",
    tag: "L200",
    subHeading: "21.09.23",
    body: "Admission et inscription en cours au niveau 200",
    footer: "Tous les campus",
  },
];

const futureEventsEN = [
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

const futureEventsFR = [
  {
    heading: "Activités du club",
    tag: "Tous les niveaux",
    subHeading: "11.10.23",
    body: "Conférences / lancement des activités du club",
    footer: "Campus de Bonamoussadi",
  },
  {
    heading: "Parti",
    tag: "11.11.23",
    subHeading: "L200",
    body: "Week-end/fête de bienvenue pour les nouveaux étudiants",
    footer: "Tous les campus",
  },
  {
    heading: "Orientation Professionnelle",
    tag: "06.12.23",
    subHeading: "L200",
    body: "Cours magistraux / Révision / Journée d'orientation professionnelle",
    footer: "Bonamoussadi",
  },
  {
    heading: "Orientation Professionnelle",
    tag: "06.12.23",
    subHeading: "L200",
    body: "Cours magistraux / Révision / Journée d'orientation professionnelle",
    footer: "Bonamoussadi",
  },
];

export const eventsFR = [
  {
    heading: "Reprise des cours",
    tag: "L100",
    subHeading: "02.10.23",
    body: "Reprise des cours pour le niveau 100 en médecine, le niveau 100 en agriculture et le niveau 100 en ingénierie.",
    footer: "Tous les campus",
  },
  {
    heading: "Reprise des cours",
    tag: "L400|L500|L600",
    subHeading: "16.10.23",
    body: "Reprise des cours pour les niveaux 400, 500 et 600 Sciences de la santé",
    footer: "Tous les campus",
  },
  {
    heading: "Recherche de stages",
    tag: "Stage",
    subHeading: "30.10.20",
    body: "Recherche de lieux de stage pour les facultés d'ingénierie, d'agriculture et de santé / obtention de l'autorisation de stage et prospection de lieux de stage",
    footer: "Tous les campus",
  },
  {
    heading: "Socials",
    tag: "",
    subHeading: "01.11.23",
    body: "Fête de bienvenue pour les nouveaux étudiants",
    footer: "Tous les campus",
  },
  ...pastEventsFR,
  ...futureEventsFR,
];

export const eventsEN = [
  {
    heading: "Resumption of lectures",
    tag: "L100",
    subHeading: "02-10-23",
    body: "Resumption of lectures for level 100 medicals, level 100 Agriculture and level 100 Enginnering",
    footer: "All campuses",
  },
  {
    heading: "Resumption of lectures",
    tag: "L400|L500|L600",
    subHeading: "16-10-23",
    body: "Resumption of lectures for level 400, 500 and 600 Health science",
    footer: "All campuses",
  },
  {
    heading: "Sourcing for internship",
    tag: "Internship",
    subHeading: "30-10-20",
    body: "Sourcing of internship sites for the faculties of Engineering, Agriculture and Health sceinces / obtain authorization for internship and prospection of internship sites",
    footer: "All campuses",
  },
  {
    heading: "Socials",
    tag: "",
    subHeading: "01-11-23",
    body: "Welcome party for freshmen",
    footer: "All campuses",
  },
  ...pastEventsFR,
  ...futureEventsFR,
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

  const { t, i18n } = useTranslation();

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

  const [events, setEvents] = useState([]);
  const [isFrechEvents, setIsFrenchEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerGetEvents = async () => {
    try {
      setLoading(true);
      await getEvents()
        .then((res: any) => {
          if (res.status === 200) {
            setEvents(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlerGetEvents();
  }, []);

  useEffect(() => {
    filterData();
  }, [i18n.language]);

  useEffect(() => {
    filterData();
  }, [events]);

  const filterData = () => {
    if (i18n.language === "fr") {
      const eventFilter = events.filter((item: any) => item.isFrench);
      setIsFrenchEvents(eventFilter);
    } else {
      const eventFilter = events.filter((item: any) => !item.isFrench);
      setIsFrenchEvents(eventFilter);
    }
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
              {t("news_events.back")}
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
            {t("news_events.meet")}
          </p>
        </Fade>
      </div>
      <div className={styles.divider} />
      <div className={styles.event}>
        {/* <h3>Onsite, Online & Hybrid Events</h3> */}
        <h3>{t("news_events.upcoming")}</h3>
        {/* <div className={styles.event_section}> */}
        <Carousel responsive={responsive}>
          {isFrechEvents.length > 0 ? (
            isFrechEvents.map((event: any, index) => {
              const eventDate = new Date(event.date);
              if (new Date() < eventDate) {
                return (
                  <Event key={index} event={event} link={"event-details"} />
                );
              } else {
                return null;
              }
            })
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontSize: 20 }}>No Data Found</p>
            </div>
          )}
        </Carousel>
        {/* </div> */}
        <h3>{t("news_events.past")}</h3>
        {/* <div className={styles.event_section}> */}
        <Carousel responsive={responsive}>
          {isFrechEvents.length > 0 ? (
            isFrechEvents.map((event: any, index) => {
              const eventDate = new Date(event.date);
              if (new Date() > eventDate) {
                return (
                  <Event key={index} event={event} link={"event-details"} />
                );
              } else {
                return null;
              }
            })
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontSize: 20 }}>No Data Found</p>
            </div>
          )}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NewsnEvents;
