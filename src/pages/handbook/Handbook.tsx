import React, { useEffect } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./handbook.module.css";
import { useTranslation } from "react-i18next";

const Handbook = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.hero}>
        {/* <h3>OUR HANDBOOK</h3> */}
        <Fade left>
          <h1 style={{ lineHeight: "1.1", margin: "2rem 0" }}>
            {t("handbook.our")}
          </h1>
          <h4 style={{ fontSize: "1.8rem", color: "#fff" }}>
            {t("handbook.unlocking")}
          </h4>
        </Fade>
      </div>
      <div
        style={{
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="desc">
          <Fade up>
            <h2
              style={{
                fontSize: "5rem",
                marginBottom: "2rem",
                textAlign: "center",
                fontWeight: "700",
                color: "#ffffff",
              }}
            >
              {t("handbook.explore")}
            </h2>
          </Fade>
          <h4
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.8)",
              lineHeight: 1.5,
              padding: "0 10rem",
            }}
          >
            {t("handbook.welcome")}
          </h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "2rem 0",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://drive.google.com/file/d/1haZOp-XxJ2eWfEUBg_8S1b51B9LJ1iSD/view?usp=sharing"
          style={{ fontSize: "2rem", margin: "auto" }}
        >
          {t("handbook.click")}
        </a>
      </div>
    </div>
  );
};

export default Handbook;
