import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

// stylesheet
import styles from "./campuscard.module.css";

type Props = {
  image: string;
  name: string;
  title: string;
  refLink: string;
};

const CampusCard: React.FC<Props> = ({ image, name, title, refLink }) => {
  return (
    <div className={styles.leader}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.body}>
        <div>
          <h2>{name}</h2>
          <h3>{title}</h3>
        </div>
        <div>
          <button>
            Know More{" "}
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusCard;
