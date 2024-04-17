import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import styles from "./content.module.css";

type Props = {
  direction: string;
  caption: string;
  title: string;
  subText: string;
  description: string;
  refLink: string;
  img?: string;
  otherContent?: string;
  btnText: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Content: React.FC<Props> = ({
  direction,
  caption,
  title,
  subText,
  description,
  refLink,
  btnText,
  img,
  otherContent,
  onClick,
}) => {
  return (
    <div
      className={`${styles.content} ${
        direction === "LEFT" ? styles.reverse : null
      }`}
    >
      <div className={styles.text}>
        <h3 className={styles.caption}>{caption}</h3>
        <h2 style={{ fontWeight: "700" }}>{title}</h2>
        <h3 className={styles.subcaption}>{subText}</h3>
        {/<[a-z][\s\S]*>/i.test(description) ? (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p>{description}</p>
        )}
        {onClick ? (
          <button onClick={onClick}>{btnText}</button>
        ) : (
          <Link to={refLink}>
            <button>{btnText}</button>
          </Link>
        )}
      </div>
      {img ? (
        <div className={styles.image}>
          <Fade right={direction === "RIGHT"} left={direction === "LEFT"}>
            <img src={img} alt={title} />
          </Fade>
        </div>
      ) : (
        <div className={styles.image}>
          <p>{otherContent}</p>
        </div>
      )}
    </div>
  );
};

export default Content;
