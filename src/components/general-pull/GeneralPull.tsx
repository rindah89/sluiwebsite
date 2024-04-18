import React from "react";

// styles
import styles from "./generalpull.module.css";

// imports
import ProgramGrid from "../program-grid/ProgramGrid";
import { useTranslation } from "react-i18next";

const GeneralPull = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.general__pull}>
      <div className="programs_">
        <div className="headline">
          <h2>{t("general_pull.undecided")}</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image1: "/images/landing.webp",
              desc: t("general_pull.more_more"),
              label: t("general_pull.why"),
              link: "/why-us",
            },
            {
              image1: "/images/landing2.webp",
              desc: t("general_pull.insight"),
              label: t("general_pull.core"),
              link: "/core-principles",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default GeneralPull;
