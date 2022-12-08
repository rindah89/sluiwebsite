import React from "react";

// styles
import "./card.css";

export type ProgramCardProps = {
  image: string;
  label: string;
  desc: string;
};

const Card: React.FC<ProgramCardProps> = ({ image, label, desc }) => {
  return (
    <div className="card">
      <div className="preview">
        <img src={image} alt={label} />
      </div>
      <div className="details">
        <h2>{label}</h2>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default Card;
