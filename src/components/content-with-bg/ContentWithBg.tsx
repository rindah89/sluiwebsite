import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

// styles
import "./contentwithbg.css";

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

const ContentWithBg: React.FC<Props> = ({
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
    <div className={`content con ${direction === "LEFT" ? "reverse" : null}`}>
      <div className="text two">
        <h3 style={{ color: "#fff" }} className="caption">
          {caption}
        </h3>
        <Fade up>
          <h2 style={{ color: "#fff" }}>{title}</h2>
        </Fade>
        <p style={{ color: "#fff" }}>{description}</p>
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

export default ContentWithBg;
