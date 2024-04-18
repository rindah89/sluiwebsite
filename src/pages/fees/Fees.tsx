import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./fees.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Fees = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

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
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: isHover ? "#902d28" : "var(--main-color)",
              }}
            >
              {t("fees.back")}
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "3.5rem" : "5rem",
              fontWeight: "bold",
              color: "var(--main-color)",
              width: "80%",
            }}
          >
            {t("fees.fees")}
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        <h3>{t("fees.ffr")}s</h3>
        <div className={styles.event_section}>
          <p className={styles.normal}>{t("fees.explore")}</p>
          <div style={{ marginTop: 20 }}>
            <p className={styles.heading2}>{t("fees.fhbs")}</p>
            <div
              style={{
                display: "grid",
                rowGap: "1rem",
                marginTop: 20,
              }}
            >
              <p className={styles.heading2}>{t("fees.hnd")}</p>
              <p className={styles.sub_heading}>{t("fees.ndu")}</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("fees.yearly")}</th>
                      <th>{t("fees.100")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.total")} (FCFA)</td>
                      <td>230,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                rowGap: "1rem",
                marginTop: 20,
              }}
            >
              <p className={styles.sub_heading}>{t("fees.bamenda")}</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("fees.yearly")}</th>
                      <th>{t("fees.100")}</th>
                      <th>{t("fees.200")}</th>
                      <th>{t("fees.300")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.total")} (FCFA)</td>
                      <td>290,000</td>
                      <td>290,000</td>
                      <td>350,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                rowGap: "1rem",
                marginTop: 20,
              }}
            >
              <p className={styles.heading2}>{t("fees.hnd_bts")}</p>
              <p className={styles.sub_heading}>{t("fees.douala_yaounde")}</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("fees.items")}</th>
                      <th>{t("fees.100")}</th>
                      <th>{t("fees.200")}</th>
                      <th>{t("fees.300")}</th>
                      <th>{t("fees.foundation")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.total")}</td>
                      <td>585,000</td>
                      <td>495,000</td>
                      <td>495,000</td>
                      <td>1,000,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.internship")}</td>
                      <td>-</td>
                      <td>30,000</td>
                      <td>10,000</td>
                      <td>-</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.research")}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>20,000</td>
                      <td>-</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td style={{ fontWeight: "600" }}>
                        {t("fees.total")} (FCFA)
                      </td>
                      <td style={{ fontWeight: "600" }}>585,000</td>
                      <td style={{ fontWeight: "600" }}>525,000</td>
                      <td style={{ fontWeight: "600" }}>525,000</td>
                      <td style={{ fontWeight: "600" }}>1,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                rowGap: "1rem",
                marginTop: 20,
              }}
            >
              <p className={styles.heading2}>{t("fees.degree")}</p>
              <p className={styles.sub_heading}>{t("fees.all")}</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>{t("fees.program")}</th>
                      <th>{t("fees.bachelors")}</th>
                      <th>{t("fees.masters")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.onsite")}</td>
                      <td>645,000 FCFA</td>
                      <td>920,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>{t("fees.online_hybrid")}</td>
                      <td>745,000 FCFA</td>
                      <td>920,000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.heading2}>{t("fees.fans")}</p>
              <div
                style={{
                  display: "grid",
                  rowGap: "1rem",
                  marginTop: 20,
                }}
              >
                <p className={styles.heading2}>{t("fees.hnd")}</p>
                <div className={styles.table_container}>
                  <table className={styles.responsive_table}>
                    <thead>
                      <tr
                        style={{
                          borderTop: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <th>{t("fees.items")}</th>
                        <th>Level 100</th>
                        <th>Level 200</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.yearly")} (FCFA)</td>
                        <td>365,000</td>
                        <td>382,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.internship")}</td>
                        <td>20,000</td>
                        <td>20,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.research")}</td>
                        <td>-</td>
                        <td>20,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td style={{ fontWeight: "600" }}>{t("fees.total")}</td>
                        <td style={{ fontWeight: "600" }}>385,000</td>
                        <td style={{ fontWeight: "600" }}>422,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={styles.heading2}>{t("fees.degree")}</p>
                <div className={styles.table_container}>
                  <table className={styles.responsive_table}>
                    <thead>
                      <tr
                        style={{
                          borderTop: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <th>{t("fees.items")}</th>
                        <th>Level 100</th>
                        <th>Level 200</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.yearly")} (FCFA)</td>
                        <td>327,000</td>
                        <td>347,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.internship")}</td>
                        <td>50,000</td>
                        <td>50,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.research")}</td>
                        <td>25,000</td>
                        <td>25,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td style={{ fontWeight: "600" }}>{t("fees.total")}</td>
                        <td style={{ fontWeight: "600" }}>402,000</td>
                        <td style={{ fontWeight: "600" }}>422,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.heading2}>
              {t("fees.fet")}
              </p>
              <div
                style={{
                  display: "grid",
                  rowGap: "1rem",
                  marginTop: 20,
                }}
              >
                <div className={styles.table_container}>
                  <table className={styles.responsive_table}>
                    <thead>
                      <tr
                        style={{
                          borderTop: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <th>{t("fees.items")}</th>
                        <th>Level 100</th>
                        <th>Level 200</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.yearly")} (FCFA)</td>
                        <td>390,000</td>
                        <td>380,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.internship")}</td>
                        <td>25,000</td>
                        <td>25,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>{t("fees.research")}</td>
                        <td>-</td>
                        <td>20,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td style={{ fontWeight: "600" }}>{t("fees.total")}</td>
                        <td style={{ fontWeight: "600" }}>415,000</td>
                        <td style={{ fontWeight: "600" }}>425,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <p>Other financial requiremens</p>
            <ul>
              <li>
                Profressional Certification Examinations for level 200
                (optional)
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Fees;
