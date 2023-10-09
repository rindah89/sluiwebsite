import React from "react";
import { FaArrowRight } from "react-icons/fa";

// styles
import styles from "./styles.module.css";

export type Attrib = {
  title: string;
  desc: string;
  subDesc?: string;
  programs?: any[];
};

const FacultyPopup: React.FC<Attrib> = ({ title, desc, subDesc, programs }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>
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
              {program?.title}
              {program.allCampuses && <span> - All Campuses</span>}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
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
                    {campus.programs.map((item: string, index: number) => {
                      return (
                        <h5 key={index}>
                          <FaArrowRight style={{ marginRight: "1rem" }} />{" "}
                          {item}
                        </h5>
                      );
                    })}
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
