import React, { FC } from "react";
import styles from "./event.module.css";
import { CiLocationOn } from "react-icons/ci";

type Props = {
  event: {
    heading: string;
    tag: string;
    subHeading: string;
    body: string;
    footer: string;
  };
};
const Event: FC<Props> = ({ event }) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>{event.heading}</div>
      <p className={styles.tag}>{event.tag}</p>
      <p className={styles.sub_head}>{event.subHeading}</p>
      <p className={styles.body}>{event.body}</p>

      <div className={styles.location}>
        <CiLocationOn className={styles.body} />
        <p className={styles.body}>{event.footer}</p>
      </div>
    </div>
  );
};

export default Event;
