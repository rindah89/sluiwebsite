import React, { FC, useEffect, useState } from "react";
import styles from "./research_details.module.css";
import { CiLocationOn } from "react-icons/ci";
import { eventsEN, eventsFR } from "../news&events/News&events";
import { Fade } from "react-reveal";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { getResearchSingle } from "../../redux/reducers/app";

interface ResearchDetails {
  image: string;
  title: string;
  date: string;
  details: string;
  summary: string;
  location: string;
  category: string;
}

const ResearchDetails: FC = () => {
  const { i18n } = useTranslation();

  const events = i18n.language === "fr" ? eventsFR : eventsEN;

  // const event = events[0];
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

  const { id } = useParams();
  const [event, setEvent] = useState<ResearchDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const handlerGetEventDetails = async () => {
    try {
      setLoading(true);
      await getResearchSingle(id)
        .then((res: any) => {
          if (res.status === 200) {
            setEvent(res.data);
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
    handlerGetEventDetails();
  }, [id]);
  return (
    <>
      <div className={styles.main}>
        {event ? (
          <>
            <div className={styles.inner}>
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
              <div className={styles.heading}>{event?.category}</div>
              <p className={styles.tag}>{event?.title}</p>
              <p className={styles.sub_head}>
                {moment(event?.date).format("D MMM YYYY")}
              </p>
              <div className={styles.location}>
                <CiLocationOn className={styles.body} />
                <p className={styles.body}>{event?.location}</p>
              </div>
              <div className={styles.container}>
                <div className={styles.bodyContainer}>
                  <p className={`${styles.body} ${styles.p}`}>
                    {event?.summary}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${event?.image}`}
                alt=""
                className={styles.image}
              />
            </div>
          </>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: 20 }}>No Data Found</p>
          </div>
        )}
      </div>
      <div className={styles.divider} />
      <div className={`${styles.sub} ${styles.lower}`}>
        {event?.details && (
          <p
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: event.details }}
          />
        )}
        {/* <p className={styles.sub_head}>{t("event_details.interested")}</p> */}
        {/* <p className={styles.body}>{t("event_details.invite")}</p> */}
        {/* <p className={styles.body}>{t("event_details.after")}</p> */}
      </div>
    </>
  );
};

export default ResearchDetails;
