import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

// styles
import "./content.css";

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
    <div className={`content ${direction === "LEFT" ? "reverse" : null}`}>
      <div className="text">
        <h3 className="caption">{caption}</h3>
        <h2 style={{ fontWeight: "700" }}>{title}</h2>
        <h3 className="subcaption">{subText}</h3>
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
        <div className="image">
          <Fade right={direction === "RIGHT"} left={direction === "LEFT"}>
            <img src={img} alt={title} />
          </Fade>
        </div>
      ) : (
        <div className="image">
          <p>{otherContent}</p>
        </div>
      )}
    </div>
  );
};

export default Content;
