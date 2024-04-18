import React from "react";
import { Fade } from "react-reveal";
import { LuLinkedin } from "react-icons/lu";
import { Link } from "react-router-dom";
import styles from "./leadercard.module.css";

type Props = {
  image: string;
  name: string;
  title: string;
  link: string;
  id: string;
};

const LeaderCard: React.FC<Props> = ({ image, name, title, link, id }) => {
  return (
    <Fade up>
      <div className={styles.leader}>
        <Link to={`/leadership-team/${id}`}>
          <div className={styles.image}>
            {image.length > 0 ? <img src={image} alt={name} /> : ""}
          </div>
          <div className={styles.body}>
            <h2>{name}</h2>
            <h3>{title}</h3>
          </div>
        </Link>
        <a
          href={link}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <LuLinkedin size={30} color="red" />
        </a>
      </div>
    </Fade>
  );
};

export default LeaderCard;
