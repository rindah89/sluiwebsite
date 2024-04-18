import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./scholarships.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Scholarships = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Fade left>
          <div
            className={styles.back}
            onMouseEnter={() => {
              setIsHover(true);
              startBounceAnimation();
            }}
            onClick={() => navigate(-1)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className={isBouncing ? styles.bounce : ""}>
              <BsArrowLeft
                size={isHover ? 14 : 16}
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: isHover ? "#902d28" : "var(--main-color)",
              }}
            >
              {t("scholarships.back")}
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "2rem" : "3.5rem",
              fontWeight: "bold",
              color: "var(--main-color)",
              width: "80%",
            }}
          >
            {t("scholarships.scholarships")}
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        <h3>{t("scholarships.special")}</h3>
        <div className={styles.event_section}>
          <p className={styles.normal}>
          {t("scholarships.education")}
          </p>
          <p className={styles.sub_heading}>
            <i>
            {t("scholarships.please")}
            </i>
          </p>
          <div style={{ marginTop: 20 }}>
            <div style={{ marginTop: 40 }}>
              <p className={styles.sub_heading}>
              {t("scholarships.reduction")}
              </p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("scholarships.level")}</th>
                      <th>{t("scholarships.criteria")}</th>
                      <th>{t("scholarships.amount")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t("scholarships.100")}</td>
                      <td>21 - 24 {t("scholarships.points")} {t("scholarships.or")} BAC 18/20</td>
                      <td>50,000</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>25 points {t("scholarships.or")} BAC 20/20</td>
                      <td>75,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td></td>
                      <td>SALUCON SCHOLARSHIP</td>
                      <td>50,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("scholarships.promotion_100")} </td>
                      <td>{t("scholarships.no_resit")}  + GPA 3.6</td>
                      <td>25,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("scholarships.promotion_200")} </td>
                      <td>{t("scholarships.no_resit")}  + GPA 3.6</td>
                      <td>25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.sub_heading}>
              {t("scholarships.reduction_bsc")} 
              </p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("scholarships.criteria")} </th>
                      <th>{t("scholarships.amount")} </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("scholarships.graduate")} </td>
                      <td>50,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("scholarships.all")} </td>
                      <td>25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.sub_heading}>
              {t("scholarships.reduction_msc")} 
              </p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("scholarships.criteria")} </th>
                      <th>{t("scholarships.amount")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("scholarships.graduate")} </td>
                      <td>50,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("scholarships.alumni")} </td>
                      <td>25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
