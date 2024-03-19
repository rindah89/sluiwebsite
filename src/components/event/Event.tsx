import React, { FC } from "react";
import moment from "moment";
import styles from "./event.module.css";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type Props = {
  event: {
    _id: string;
    title: string;
    category: string;
    date: string;
    details: string;
    location: string;
  };
};
const Event: FC<Props> = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.main}
      onClick={() => navigate(`/event-details/${event._id}`)}
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
      <p className={styles.body}>{event.details}</p>
    </div>
  );
};

export default Event;
