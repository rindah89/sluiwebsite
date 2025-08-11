import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

// styles
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

type Program = {
  title: string;
  summary: string;
  icon?: React.JSX.Element;
  link: string;
  _id: string;
};

export type Attrib = {
  programs: Program[];
};

const ProgramPopup: React.FC<Attrib> = ({ programs }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <img
          style={{ marginBottom: "3rem" }}
          width={400}
          src="/images/logo_red.webp"
          alt="logo"
          className={`${styles.desktop__version}`}
        />

        <img
          className={`${styles.mobile__version}`}
          style={{ marginBottom: "3rem" }}
          width={100}
          src="/logos/logomobile.png"
          alt="logo"
        />

        <h2>{t("program_popup.find")}</h2>

        <div className={styles.programs}>
          {programs &&
            programs.map((program, index) => {
              return (
                <Link
                  style={{
                    height: "100%",
                  }}
                  to={`/program-details/${program._id}`}
                >
                  <div
                    title={t("program_popup.insight")}
                    key={index}
                    className={styles.program}
                    style={{
                      height: "100%",
                    }}
                  >
                    <div className={styles.icon__abs}>
                      <AiOutlineArrowRight
                        color="var(--main-color)"
                        size={20}
                      />
                    </div>
                    <div className={styles.icon}>
                      {" "}
                      <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
                    </div>
                    <div className={styles.data}>
                      <div className={styles.head}>
                        <h2>{program.title}</h2>
                      </div>

                      <div className={styles.desc}>
                        {program.summary && <h4>{program.summary}</h4>}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProgramPopup;
