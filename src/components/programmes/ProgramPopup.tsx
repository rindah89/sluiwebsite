import React from "react";

// styles
import styles from "./styles.module.css";

type Program = {
  title: string;
  desc: string;
  icon?: JSX.Element;
};

export type Attrib = {
  programs: Program[];
};

const ProgramPopup: React.FC<Attrib> = ({ programs }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <img
          style={{ marginBottom: "3rem" }}
          width={400}
          src="/images/logo_red.webp"
          alt="logo"
        />

        <h2>Our Engaging Programmes</h2>

        <div className={styles.programs}>
          {programs &&
            programs.map((program, index) => {
              return (
                <div key={index} className={styles.program}>
                  <div className={styles.icon}>{program.icon}</div>
                  <div className={styles.data}>
                    <div className={styles.head}>
                      <h2>{program.title}</h2>
                    </div>

                    <div className={styles.desc}>
                      {program.desc && <h4>{program.desc}</h4>}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProgramPopup;
