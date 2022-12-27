import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import ProgramGrid from "../../components/program-grid/ProgramGrid";

// styles
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h3>St. LOUIS UNIVERSITY INSTITUTE</h3>
        <Fade left>
          <h1>About Our Marvelous Institute.</h1>
        </Fade>
      </div>
      <div className="about">
        <div className="desc">
          <Fade up>
            <h2>Brief Background.</h2>
          </Fade>
          <h4>
            St. Louis University Institute is a Private Higher Education
            Institution, born out of a clear conviction of the promoter to
            position in a Cameroon, a learning Centre dedicated to excellence
            and tact, and a burning desire to excel and deliver quality at the
            acme of the Higher education ecosystem in Cameroon and Africa, with
            reference to world class standards.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Vision:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            St. Louis sees itself as a center of university-based,
            non-university, and industrial research, and thus takes a role as a
            guarantor of research-based teaching in Cameroon, focused on quality
            and holism. To become the afore-mentioned is the vision in simple
            terms, of St. Louis University Institute.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Mission:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <span style={{ fontWeight: "600" }}>
              "To educate and equip impact change makers, solution-creators and
              disruptive thinkers in all walks of life, and to engender all
              stakeholders of the institution towards taking responsibility in
              the achievement of it".
            </span>
          </h4>
          <h4>
            Towards the achievement of the above mission, friendly but tough
            performance standards shall be adopted and clearly elaborated. At
            St. Louis,{" "}
            <span style={{ fontWeight: "600" }}>
              "what&apos;s worth doing is worth doing well".
            </span>
          </h4>
          <h4>
            To achieve this mission, the St Louis Management shall engage in the
            following priorities, hereinafter referred to as its{" "}
            <span style={{ fontWeight: "600" }}>
              Unique Value Propositions (UVP).
            </span>
          </h4>
          <h4>
            The trainings will be delivered in English and in French languages,
            satisfying bth systems of education in Cameroon.{" "}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Goal:</h2>
        </div>

        <div className={styles.content}>
          <h4 style={{ fontWeight: "600" }}>
            Promoting the welfare of people worldwide through quality teaching,
            research, innovation and community engagement.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Objectives:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            1. Become a revered of excellence for teaching innovation, research
            and community engagement in Cameroon and Africa
          </h4>
          <h4>
            2. Become the number one higher institution of choice for
            Cameroonian students
          </h4>
          <h4>
            3. Establish a domain as an emphatic sustainable development
            institution
          </h4>
          <h4>
            4. Establish as a hub of partnership learning and international
            networking
          </h4>
          <h4>
            5. Establish a clear demonstration as the employers&apos; number one
            trainer
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Motto/Mantra:</h2>
        </div>

        <div className={styles.content}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "2.3rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            <FaQuoteLeft size={10} style={{ margin: "0 2rem" }} />
            Quality goes in before the name goes on
            <FaQuoteRight size={10} style={{ margin: "0 2rem" }} />
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Slogan:</h2>
        </div>

        <div className={styles.content}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "2.3rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            <FaQuoteLeft size={10} style={{ margin: "0 2rem" }} />
            St. Louis - The Pathfinder.
            <FaQuoteRight size={10} style={{ margin: "0 2rem" }} />
          </h4>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>JUST THE RIGHT FIT FOR YOU.</h3>
          <h2>Exciting Programs</h2>
        </div>
        <ProgramGrid
          programs={[
            {
              image: "/images/test4.JPG",
              desc: "More and more exciting programs to be explored at our campuses.",
              label: "Bachelor",
            },
            {
              image: "/images/test5.JPG",
              desc: "Explore our best masters programs. Find a fit for yourself.",
              label: "Masters",
            },
            {
              image: "/images/test7.JPG",
              desc: "We offer a variety of short courses. Explore today!",
              label: "Short Course",
            },
            {
              image: "/images/test6.JPG",
              desc: "HND programs are just so exciting start a career in one of these programmes.",
              label: "HND",
            },
          ]}
        />
      </div>
      
      <div className="programs_">
        <div className="headline">
          <h2>Memberships and Partnerships</h2>
        </div>
        <div className="logos">
          <Fade up delay={100}>
            <img src="/logos/logo.webp" alt="logo" />
          </Fade>
          <Fade up delay={300}>
            <img src="/logos/logo2.webp" alt="logo" />
          </Fade>
          <Fade up delay={500}>
            <img src="/logos/logo3.webp" alt="logo" />
          </Fade>
          <Fade up delay={700}>
            <img src="/logos/logo4.webp" alt="logo" />
          </Fade>
          <Fade up delay={900}>
            <img src="/logos/logo5.webp" alt="logo" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
