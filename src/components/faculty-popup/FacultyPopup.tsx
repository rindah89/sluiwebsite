import React, { useEffect, useRef, useState } from "react";

// styles
import styles from "./styles.module.css";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

export type Attrib = {
  title: string;
  desc: string;
  subDesc?: string;
  programs?: any[];
};

const FacultyPopup: React.FC<Attrib> = ({ title, desc, subDesc, programs }) => {
  const [more, setMore] = useState("");

  return (
    <div className={styles.popup} id="mainRef">
      <div className={styles.content} id="content">
        <img
          style={{ marginBottom: "3rem" }}
          width={400}
          src="/images/logo_red.webp"
          alt="logo"
        />
        <div className={styles.head}>
          <h2>{title}</h2>
        </div>

        <div className={styles.desc}>
          {desc && <h4>{desc}</h4>}
          {subDesc && <h4>{subDesc}</h4>}
        </div>

        {programs?.map((program: any, index) => (
          <>
            <h2 className={styles.title}>
              {program?.title}AIzaSyADu28rozLacj_e1qthivzoENsKUU_ii1c
              {program.allCampuses && <span> - All Campuses</span>}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "4rem",
              }}
            >
              {program.campuses.map((campus: any, index: number) => (
                <div
                  style={{
                    gridColumn: "span 1 / span 1",
                  }}
                  key={index}
                >
                  <h3
                    style={{
                      color: "var(--main-color)",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      marginBottom: "2rem",
                    }}
                  >
                    {campus.title}
                  </h3>
                  <div className={styles.list}>
                    {/* {campus.programs.map((item: string, index: number) => {
                      console.log({ item });
                      return (
                        <h5 key={index}>
                          <FaArrowRight style={{ marginRight: "1rem" }} />{" "}
                          {item}
                        </h5>
                      );
                    })} */}
                    <div className="programCard" style={{}}>
                      <ul>
                        {more === campus.title
                          ? campus.programs.map((item: any) => {
                              return (
                                <li>
                                  <a href="/programme" className={"anchor"}>
                                    <AiOutlineArrowRight /> {item}
                                  </a>
                                </li>
                              );
                            })
                          : campus.programs.slice(0, 2).map((item: any) => {
                              return (
                                <li>
                                  <a href="/programme" className={"anchor"}>
                                    <AiOutlineArrowRight /> {item}
                                  </a>
                                </li>
                              );
                            })}
                      </ul>
                      <div className="seeMore" id="seeMore">
                        <div
                          id="button"
                          className="button"
                          onClick={() =>
                            more === ""
                              ? setMore(`${campus.title}-${program.title}`)
                              : setMore("")
                          }
                        >
                          <p id="link">
                            {more === `${campus.title}-${program.title}` ? "See less" : "See more"}
                          </p>
                          {more === `${campus.title}-${program.title}` ? (
                            <AiOutlineArrowUp />
                          ) : (
                            <AiOutlineArrowDown />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FacultyPopup;
