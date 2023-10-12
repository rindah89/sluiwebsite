import React from "react";

// styles
import "./programgrid.css";
import Card, { ProgramCardProps } from "../card/Card";

type Props = {
  programs: ProgramCardProps[];
};

const ProgramGrid: React.FC<Props> = ({ programs }) => {
  return (
    <div className="grid">
      {programs.length > 0 &&
        programs.map((program, index) => {
          return (
            <Card
              key={index}
              image={program.image}
              label={program.label}
              desc={program.desc}
              link={program?.link}
            />
          );
        })}
    </div>
  );
};

export default ProgramGrid;
