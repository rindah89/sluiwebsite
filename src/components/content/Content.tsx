import React from "react";
import { Link } from "react-router-dom";

// styles
import "./content.css";

type Props = {
  direction: string;
  caption: string;
  title: string;
  subText: string;
  description: string;
  refLink: string;
  img: string;
  btnText: string;
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
}) => {
  return (
    <div className={`content ${direction === "LEFT" ? "reverse" : null}`}>
      <div className="text">
        <h3 className="caption">{caption}</h3>
        <h2 style={{ fontWeight: "700" }}>{title}</h2>
        <h3 className="subcaption">{subText}</h3>
        <p>{description}</p>
        <Link to={refLink}>
          <button>{btnText}</button>
        </Link>
      </div>
      <div className="image">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default Content;
