import React from "react";

// stylesheet
import styles from "./buddycard.module.css";
import { useTranslation } from "react-i18next";

type Props = {
  image: string;
  name: string;
  position: string;
  whatsapp: string;
  campus: string;
};

const BuddyCard: React.FC<Props> = ({
  image,
  name,
  position,
  whatsapp,
  campus,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.blank}></div>
        <div className={styles.get__info}>
          <div className={styles.image}>
            <img
              src={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${image}`}
              alt="title"
            />
          </div>
          <div className={styles.head__text}>
            <h2>{name}</h2>
            {position.split("/n").map((name, index) => (
              <h4>{name}</h4>
            ))}
          </div>
          <div className={styles.button}>
            <a target="_blank" rel="noreferrer" href={whatsapp}>
              {t("buddy_card_component.chat")}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <h4>
          <span>{t("buddy_card_component.campus")}: </span> {campus}
        </h4>
      </div>
    </div>
  );
};

export default BuddyCard;
