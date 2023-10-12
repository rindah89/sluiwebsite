import React, { FC, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

import "./program.css";

type Props = {
  program: {
    title: String;
    list: String[];
  };
};
const ProgramCard: FC<Props> = ({ program }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="programCard">
      <h2>{program.title}</h2>
      <ul>
        {more
          ? program.list.map((item) => {
              return (
                <li>
                  <a href="/programme" className={"anchor"}>
                    <AiOutlineArrowRight /> {item}
                  </a>
                </li>
              );
            })
          : program.list.slice(0, 2).map((item) => {
              return (
                <li>
                  <a href="/programme" className={"anchor"}>
                    <AiOutlineArrowRight /> {item}
                  </a>
                </li>
              );
            })}
      </ul>
      <div className="seeMore">
        <div className="button" onClick={() => setMore(!more)}>
          <p>{more ? "See less" : "See more"}</p>
          {more ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
