import React, { FC, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

import "./program.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  program: {
    title: String;
    list: String[];
  };
  tag?: String;
};
const ProgramCard: FC<Props> = ({ program, tag }) => {
  const [more, setMore] = useState(false);
  const {t} = useTranslation()
  return (
    <div className="programCard">
      <h2>{program.title}</h2>
      <ul>
        {more
          ? program.list.map((item) => {
              const param = item
                .toLowerCase()
                .split(" ")
                .join("-")
                .concat(`-${tag}`);
              return (
                <li>
                  <Link to={`/programme?id=${param}`} className={"anchor"}>
                    <AiOutlineArrowRight /> {item}
                  </Link>
                </li>
              );
            })
          : program.list.slice(0, 2).map((item) => {
              const param = item
                .toLowerCase()
                .split(" ")
                .join("-")
                .concat(`-${tag}`);
              return (
                <li>
                  <Link to={`/programme?id=${param}`} className={"anchor"}>
                    <AiOutlineArrowRight /> {item}
                  </Link>
                </li>
              );
            })}
      </ul>
      <div className="seeMore">
        <div className="button" onClick={() => setMore(!more)}>
          <p>{more ? t("program_card.more") : t("program_card.less")}</p>
          {more ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
