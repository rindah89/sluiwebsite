import React from "react";
import { Fade } from "react-reveal";

// stylesheet
import styles from "./leadercard.module.css";

type Props = {
  image: string;
  name: string;
  title: string;
};

const LeaderCard: React.FC<Props> = ({ image, name, title }) => {
  return (
    <Fade up>
      <div className={styles.leader}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.body}>
          <h2>{name}</h2>
          <h3>{title}</h3>
        </div>
      </div>
    </Fade>
  );
};

export default LeaderCard;
