import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import styles from "./research.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Event from "../../components/event/Event";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

import { getEvents, getResearch } from "../../redux/reducers/app";

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

const Research = () => {
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
  const [loading, setLoading] = useState(false);

  const handlerGetEvents = async () => {
    try {
      setLoading(true);
      await getResearch()
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
            {t("research.meet")}
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <Event key={index} event={event} link={"research-details"} />
          ))
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: 20 }}>No Data Found</p>
          </div>
        )}
        {/* <h3>{t("research.published")}</h3>
        <Carousel responsive={responsive}>
          {events.length > 0 ? (
            events.map((event, index) => (
              <Event key={index} event={event} link={"research-details"} />
            ))
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontSize: 20 }}>No Data Found</p>
            </div>
          )}
        </Carousel> */}
        {/* <h3>{t("research.unpublished")}</h3>
        <Carousel responsive={responsive}>
          {events.length > 0 ? (
            events.map((event, index) => (
              <Event key={index} event={event} link={"research-details"} />
            ))
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontSize: 20 }}>No Data Found</p>
            </div>
          )}
        </Carousel> */}
      </div>
    </div>
  );
};

export default Research;
