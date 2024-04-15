import React, { FC } from "react";
import moment from "moment";
import styles from "./event.module.css";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type Props = {
  event: {
    summary?: string;
    _id: string;
    title: string;
    category: string;
    date: string;
    details: string;
    location: string;
  };
  link: string;
};
const Event: FC<Props> = ({ event, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.main}
      onClick={() => navigate(`/${link}/${event._id}`)}
    >
      <div className={styles.heading}>{event.title}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className={styles.sub_head}>
          {moment(event.date).format("D MMM YYYY")}
        </p>
        <div className={styles.location}>
          <CiLocationOn className={styles.body} />
          <p className={styles.body}>{event.location}</p>
        </div>
      </div>
      <p className={styles.tag}>{event.category}</p>
      {event?.summary ? (
        <p className={styles.body}>{event.summary}</p>
      ) : (
        <p className={styles.body}>{event.details}</p>
      )}
    </div>
  );
};

export default Event;
