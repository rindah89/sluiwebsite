import React from "react";

// stylesheet
import styles from "./buddycard.module.css";

type Props = {
  image: string;
  name: string;
  title: string;
  whatsapp: string;
};

const BuddyCard: React.FC<Props> = ({ image, name, title, whatsapp }) => {
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
            {title.split("/n").map((name, index) => (
              <h4>{name}</h4>
            ))}
          </div>
          <div className={styles.button}>
            <a target="_blank" rel="noreferrer" href={whatsapp}>
              Chat With Buddy
            </a>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <h4>
          <span>Campus: </span> Douala
        </h4>
      </div>
    </div>
  );
};

export default BuddyCard;
