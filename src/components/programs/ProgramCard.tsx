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
    title: string;
    list: Array<any>;
  };
  tag?: String;
  courses?: Array<any>;
};

const ProgramCard: FC<Props> = ({ program, courses, tag }) => {
  const [more, setMore] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="programCard">
      <h2>{program.title}</h2>
      <ul>
        {more
          ? courses?.map((item, index) => {
              // const param = item
              //   .toLowerCase()
              //   .split(" ")
              //   .join("-")
              //   .concat(`-${tag}`);
              return (
                <li key={index}>
                  <Link
                    to={`/programme/${item._id}/${tag}`}
                    className={"anchor"}
                  >
                    <span>
                      <AiOutlineArrowRight color="var(--main-color)" />
                    </span>{" "}
                    {item.title}
                  </Link>
                </li>
              );
            })
          : courses?.slice(0, 2).map((item, index) => {
              // const param = item
              //   .toLowerCase()
              //   .split(" ")
              //   .join("-")
              //   .concat(`-${tag}`);
              return (
                <li key={index}>
                  <Link
                    to={`/programme/${item._id}/${tag}`}
                    className={"anchor"}
                  >
                    <span>
                      <AiOutlineArrowRight color="var(--main-color)" />
                    </span>{" "}
                    {item.title}
                  </Link>
                </li>
              );
            })}
      </ul>
      <div className="seeMore">
        <div className="button" onClick={() => setMore(!more)}>
          <p>{more ? t("program_card.less") : t("program_card.more")}</p>
          {more ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
