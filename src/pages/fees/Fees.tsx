import React, { useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./fees.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Fees = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  const [isBouncing, setIsBouncing] = useState(false);

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
              Back
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
            FEES
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        <h3>Fees and financial requirements</h3>
        <div className={styles.event_section}>
          <p className={styles.normal}>
            Explore the tuition fees and financial aid options available at our
            university.
          </p>
          <div style={{ marginTop: 20 }}>
            <p className={styles.heading2}>
              Faculty of Health and Biomedical Sciences
            </p>
            <div
              style={{
                display: "grid",
                rowGap: "1rem",
                marginTop: 20,
              }}
            >
              <p className={styles.heading2}>HND PROGRAMS</p>
              <p className={styles.sub_heading}>NDU CAMPUS</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>Yearly Tuition Fee</th>
                      <th>Level 100</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>Total Amount (FCFA)</td>
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
              <p className={styles.sub_heading}>BAMENDA CAMPUS</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>Yearly Tuition Fee</th>
                      <th>Level 100</th>
                      <th>Level 200</th>
                      <th>Level 300</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>Total Amount (FCFA)</td>
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
              <p className={styles.heading2}>HND & BTS PROGRAMS</p>
              <p className={styles.sub_heading}>DOUALA & YAOUNDE CAMPUSES</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>Items</th>
                      <th>Level 100</th>
                      <th>Level 200</th>
                      <th>Level 300</th>
                      <th>Foundation Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>Total free</td>
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
                      <td>Internship/Supervision</td>
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
                      <td>Research Supervision</td>
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
                      <td style={{ fontWeight: "600" }}>Total Amount (FCFA)</td>
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
              <p className={styles.heading2}>DEGREE PROGRAMS</p>
              <p className={styles.sub_heading}>ALL CAMPUSES</p>
              <div className={styles.table_container}>
                <table className={styles.responsive_table}>
                  <thead>
                    <tr
                      style={{
                        borderTop: "1px solid #ccc",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <th>Program</th>
                      <th>Bachelors</th>
                      <th>Masters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>Onsite</td>
                      <td>645,000 FCFA</td>
                      <td>920,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>Online Hybrid</td>
                      <td>745,000 FCFA</td>
                      <td>920,000 FCFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.heading2}>Faculty of Agriculture</p>
              <div
                style={{
                  display: "grid",
                  rowGap: "1rem",
                  marginTop: 20,
                }}
              >
                <p className={styles.heading2}>HND PROGRAMS</p>
                <div className={styles.table_container}>
                  <table className={styles.responsive_table}>
                    <thead>
                      <tr
                        style={{
                          borderTop: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <th>Item</th>
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
                        <td>Yearly Tuition Fee (FCFA)</td>
                        <td>365,000</td>
                        <td>382,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>Internship / Supervision</td>
                        <td>20,000</td>
                        <td>20,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>Research</td>
                        <td>-</td>
                        <td>20,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td style={{ fontWeight: "600" }}>Total amount</td>
                        <td style={{ fontWeight: "600" }}>385,000</td>
                        <td style={{ fontWeight: "600" }}>422,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={styles.heading2}>DEGREE PROGRAMS</p>
                <div className={styles.table_container}>
                  <table className={styles.responsive_table}>
                    <thead>
                      <tr
                        style={{
                          borderTop: "1px solid #ccc",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <th>Item</th>
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
                        <td>Yearly Tuition Fee (FCFA)</td>
                        <td>327,000</td>
                        <td>347,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>Internship / Supervision</td>
                        <td>50,000</td>
                        <td>50,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>Research</td>
                        <td>25,000</td>
                        <td>25,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td style={{ fontWeight: "600" }}>Total amount</td>
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
                Faculty of Engineering & Technology
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
                        <th>Item</th>
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
                        <td>Yearly Tuition Fee (FCFA)</td>
                        <td>390,000</td>
                        <td>380,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>Internship / Supervision</td>
                        <td>25,000</td>
                        <td>25,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td>Research</td>
                        <td>-</td>
                        <td>20,000</td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        <td style={{ fontWeight: "600" }}>Total amount</td>
                        <td style={{ fontWeight: "600" }}>415,000</td>
                        <td style={{ fontWeight: "600" }}>425,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>Other financial requiremens</p>
            <ul>
              <li>Profressional Certification Examinations for level 200 (optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
