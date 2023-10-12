import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./scholarships.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const Scholarships = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

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
              Back
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
            Scholarships
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        <h3>Special scholarship schemes</h3>
        <div className={styles.event_section}>
          <p className={styles.normal}>
            Education fund, student loan or scholarship? There are many ways to
            finance your studies. We have put together some information to help
            you find a suitable financing option.
          </p>
          <p className={styles.sub_heading}>
            <i>
              -- Please note that the university does not offer fully funded
              scholarships --
            </i>
          </p>
          <div style={{ marginTop: 20 }}>
            <div style={{ marginTop: 40 }}>
              <p className={styles.sub_heading}>
                Reduction on tuition fee for HND students
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
                      <th>LEVEL</th>
                      <th>CRITERIA</th>
                      <th>AMOUNT(FCFA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Incoming Level 100</td>
                      <td>21 - 24 points or BAC 18/20</td>
                      <td>50,000</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>25 points or BAC 20/20</td>
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
                      <td>Promotion Level 100</td>
                      <td>No Resit + GPA 3.6</td>
                      <td>25,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>Promotion Level 200</td>
                      <td>No Resit + GPA 3.6</td>
                      <td>25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.sub_heading}>
                Reduction on tuition fee for BARCHELOR STUDENTS
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
                      <th>CRITERIA</th>
                      <th>AMOUNT(FCFA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>St. Louis Graduate with distinction</td>
                      <td>50,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>All St. Louis HND graduates</td>
                      <td>25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>
              <p className={styles.sub_heading}>
                Reduction on tuition fee for MASTERS STUDENTS
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
                      <th>CRITERIA</th>
                      <th>AMOUNT(FCFA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>St. Louis Graduate with distinction</td>
                      <td>50,000</td>
                    </tr>
                    <tr
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <td>All St. Louis graduates Alumni</td>
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
