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
              image={program.image}
              label={program.label}
              desc={program.desc}
            />
          );
        })}
    </div>
  );
};

export default ProgramGrid;
