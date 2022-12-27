import React from "react";

// stylesheet
import styles from "./buddycard.module.css";

type Props = {
  image: string;
  name: string;
  title: string;
};

const BuddyCard: React.FC<Props> = ({ image, name, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.blank}></div>
        <div className={styles.get__info}>
          <div className={styles.image}>
            <img src={image} alt="title" />
          </div>
          <div className={styles.head__text}>
            <h2>{name}</h2>
            <h4>{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuddyCard;
