import React from "react";
import { FaArrowRight } from "react-icons/fa";

// styles
import styles from "./styles.module.css";

export type Attrib = {
  title: string;
  desc: string;
  subDesc?: string;
  hnds?: string[];
  bdps?: string[];
  mdps?: string[];
  fps?: string[];
};

const FacultyPopup: React.FC<Attrib> = ({
  title,
  desc,
  subDesc,
  hnds,
  bdps,
  mdps,
  fps,
}) => {
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

        {hnds && (
          <>
            <h2 className={styles.title}>
              Higher National Diploma(HND) Programmes
            </h2>
            <div className={styles.list}>
              {hnds.map((item, index) => {
                return (
                  <h5 key={index}>
                    <FaArrowRight style={{ marginRight: "1rem" }} /> {item}
                  </h5>
                );
              })}
            </div>
          </>
        )}

        {bdps && (
          <>
            <h2 className={styles.title}>Bachelor Degree Programmes</h2>
            <div className={styles.list}>
              {bdps.map((item, index) => {
                return (
                  <h5 key={index}>
                    <FaArrowRight style={{ marginRight: "1rem" }} /> {item}
                  </h5>
                );
              })}
            </div>
          </>
        )}

        {mdps && (
          <>
            <h2 className={styles.title}>Master Degree Programmes</h2>
            <div className={styles.list}>
              {mdps.map((item, index) => {
                return (
                  <h5 key={index}>
                    <FaArrowRight style={{ marginRight: "1rem" }} /> {item}
                  </h5>
                );
              })}
            </div>
          </>
        )}

        {fps && (
          <>
            <h2 className={styles.title}>Foundation Programmes</h2>
            <div className={styles.list}>
              {fps.map((item, index) => {
                return (
                  <h5 key={index}>
                    <FaArrowRight style={{ marginRight: "1rem" }} /> {item}
                  </h5>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FacultyPopup;
