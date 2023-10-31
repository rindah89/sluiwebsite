import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

// styles
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

type Program = {
  title: string;
  desc: string;
  icon?: JSX.Element;
  link: string;
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
        />

        <h2>{t("program_popup.engaging")}</h2>

        <p>{t("program_popup.find")}</p>

        <div className={styles.programs}>
          {programs &&
            programs.map((program, index) => {
              return (
                <Link to={program.link}>
                  <div
                    title={t('program_popup.insight')}
                    key={index}
                    className={styles.program}
                  >
                    <div className={styles.icon__abs}>
                      <AiOutlineArrowRight
                        color="var(--main-color)"
                        size={20}
                      />
                    </div>
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
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProgramPopup;
