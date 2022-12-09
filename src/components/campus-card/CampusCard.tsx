import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-reveal";

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
    <Fade up>
      <div className={styles.leader}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.body}>
          <div>
            <h2>{name}</h2>
            <h3>
              {title.length > 150 ? title.substring(0, 150) + "..." : title}
            </h3>
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
    </Fade>
  );
};

export default CampusCard;
