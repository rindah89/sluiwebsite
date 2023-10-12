import React, { FC, useEffect } from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./programme.module.css";

const staffs = [
  {
    name: "Ewang Atabe",
    position: "Programme Coordinator",
    bail: "ewang.atabe@stlui.org",
    phoneNumber: "+237676363684",
    image:
      "https://drive.google.com/file/d/1cwew8JXG_kuC3JMfDTlCizW-V1ibQ4MO/view?usp=drive_link",
  },
  {
    name: "Ewane Rienti",
    position: "Professor",
    bail: "ewane.rienti@stlui.org",
    phoneNumber: "+237676363684",
    image:
      "https://drive.google.com/file/d/1cwew8JXG_kuC3JMfDTlCizW-V1ibQ4MO/view?usp=drive_link",
  },
];

const Programme: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="hero">
        <h3>Bachelor</h3>
        <Fade left>
          <h1>International Business Administration</h1>
        </Fade>
      </div>

      <div className={styles.main}>
        <div className={styles.heads}>
          <h3>Bachelor of Arts</h3>
          <h3>3 Years</h3>
          <h3>On Campus</h3>
          <h3>500,000 XAF</h3>
          <h3>Full time</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.left_content}>
            <p>
              Digitalisation, globalisation, social change - today's companies
              are facing many challenges. Strengthen your international profile:
              study business administration and develop innovative solutions and
              sustainable management concepts for tomorrow.
            </p>
            <div className={styles.buttons}>
              <button>Request for information</button>
              <button>Apply now</button>
            </div>
          </div>
          <div className={styles.right_content}>
            <div className={styles.list1}>
              <ul>
                <li>English</li>
                <li>Starts in October</li>
              </ul>
            </div>
            <div className={styles.list2}>
              <ul>
                <li>Yaounde</li>
                <li>Bamenda</li>
                <li>Bonaberi - Douala</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.backgroundImage} />
        <div className={styles.section}>
          <h4>Your course content</h4>
          <h3>
            Study Bussiness Administration at St. Louis University Institute
          </h3>
          <p>
            The International Business Administration programme offers you a
            holistic management education that helps you develop your soft
            skills. You get to understand economic contexts and know-how, in
            order to develop innovative and solution-oriented strategies for
            international companies. As a student, you will bbark on a journey
            with people from different cultures and countries and you will
            strengthen your international profile.
          </p>
        </div>
        <div className={styles.section}>
          <h4>Your career prospectus</h4>
          <h3>Our innovative approach that pays off</h3>
          <p>
            During your management studies you work on projects with other
            students from around the globe and solve complex issues together.
            You learn about your own strengths and develop your communication,
            team working, intercultural and leadership skills - skills that are
            needed in the job market.
          </p>
          <p>Choose from the following career paths:</p>
          <ul>
            <li>Human resource manager</li>
            <li>Marketing & sales manager</li>
            <li>Management consultant</li>
            <li>Management positions in banking and finance</li>
            <li>And many more...</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Your lecturers</h4>
          <h3>We help you meet your goals</h3>
          <div className={styles.imageSection}>
            {staffs.map((staff, index) => {
              const image = new URL(staff.image, import.meta.url);
              return (
                <div className={styles.image}>
                  <div
                    className={styles.staffImage}
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), no-repeat`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className={styles.topContent}>
                      <p>{staff.position}</p>
                    </div>
                    <div className={styles.bottomContent}>
                      <p>{staff.name}</p>
                      <p>{staff.bail}</p>
                      <p>{staff.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.section}>
          <h4>Admission requirments</h4>
          <h3>Our requirbents</h3>
          <p>To submit your application, please provide us the following:</p>
          <ul>
            <li>
              General Higher Education Entrance Qualification (GCE Advanced
              Level)
            </li>
            <li>Proof of English Language Proficiency</li>
            <li>Curriculum Vitae</li>
            <li>Copy of your passport/ID</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Fees and Funding</h4>
          <h3>Your tuition fees</h3>
          <h5>Tuition fees: </h5>
          <ul>
            <li>Registration fee: 30,000 CFAF</li>
            <li>
              Total anual tuition:
              <ul>
                <li>
                  First installment: 250,000 CFAF due upon issuance of
                  conditional offer{" "}
                </li>
                <li>
                  Second installment: 150,000 CFAF Due at the end of first
                  semester
                </li>
              </ul>
            </li>
          </ul>
          <h5>Scholarships</h5>
          <p>
            Information on financing options & scholarships can be found{" "}
            <a href="/scholarships">here</a>
          </p>
        </div>

        <div className={styles.section}>
          <h4>Apply now</h4>
          <h3>Application process and deadlines</h3>
          <p>
            Please find the Application and Late Arrivals deadlines{" "}
            <a href="#">here</a>
          </p>
          <p>
            We are happy to welcome you to our university. This is our
            application process:{" "}
          </p>
          <ul>
            <li>
              You submit your online application via{" "}
              <a href="#">SLUI application portal</a>
            </li>
            <li>
              If you meet the admission requirements, we will invite you to a
              personal/phone interview
            </li>
            <li>
              If the inverview is successful, you will receive an acceptance
              letter and the study contract
            </li>
            <li>You sign the study contract and send it back to us</li>
            <li>
              You pay the enrollment fee (all students) and - if you are an
              international student - a 100,000 CFAF deposit
            </li>
            <li>You receive your letter of admission</li>
            <li>
              You take part in our Welcome Week and then you are good to go!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programme;
