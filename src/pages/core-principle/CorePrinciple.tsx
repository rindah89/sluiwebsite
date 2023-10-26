import React, { useEffect } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./core.module.css";

// imports
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import { programmes } from "../landing/Landing";
import Membership from "../../components/membership/Membership";

const CorePrinciple = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className={styles.hero}>
        <h3>OUR CORE PRINCIPLE</h3>
        <Fade left>
          <h1 style={{ lineHeight: "1.1", margin: "2rem 0" }}>
            Learning with head, heart and hands
          </h1>
          <h4 style={{ fontSize: "1.8rem", color: "#fff" }}>
            The SLUI Approach - Our study concept!
          </h4>
        </Fade>
      </div>
      <div style={{ minHeight: "10vh", padding: "4rem 4vw" }} className="about">
        <div className="desc">
          <Fade up>
            <h2>Everything Revolves Around You</h2>
          </Fade>
          <h4>
            We support you personally and continuously in achieving your goals.
            Based on our proven Approach, we have aligned all learning
            objectives, forms of examination, teaching and learning methods for
            you, in order to make learning as fun and successful as possible.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Here you learn step by step</h2>
        </div>

        <div className={styles.content}>
          <h4>
            We believe that sustainable learning is only possible if there is
            enough space for experimentation, games and critical thinking. That
            is why we have completely restructured the classical course of
            studies.
          </h4>
          <h4 style={{ marginTop: "4rem" }}>
            Our principles Knowledge on demand?{" "}
          </h4>
          <h4>No, thanks!</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Learning at eye level</h2>
        </div>

        <div className={styles.content}>
          <h4>
            Pure frontal teaching does not exist in our classrooms. Instead, our
            instructors become individual learning coaches for you. Together,
            you will not only acquire specialist knowledge, but also hone your
            soft and hard skills. In order to achieve this, we rely on direct
            communication.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>No fear of making mistakes</h2>
        </div>

        <div className={styles.content}>
          <h4>
            Trying out is allowed here! Even welcomed, since we rely on
            <span style={{ fontWeight: "600" }}>experience-based learning</span>
            . It's not always about right or wrong, above all it's about trying
            things out and getting to know each other. At SLUI, you don't study
            for the professor or the examinations office, but primarily for your
            own projects and your whole (professional) life.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Learning for the real world</h2>
        </div>

        <div className={styles.content}>
          <h4>
            You don't have to do countless internships after you graduate.
            Practical teamwork on real projects and semester internships with
            partners from the real world will prepare you optimally for the
            professional world. At the same time, you will develop social skills
            such as the ability to accept criticism, to think outside the box
            and to solve problems creatively. These are exactly the skills that
            employers expect from their employees today.
          </h4>
          <h4>
            In addition, you will not only have a certificate in your hand, but
            also project references from real world partners, that you can
            provide alongside your job applications. AND: you'll know where your
            personal strengths lie.
          </h4>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>JUST THE RIGHT FIT FOR YOU.</h3>
          <h2>Exciting Programmes</h2>
        </div>
        <ProgramGrid programs={programmes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>Memberships and Partnerships</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default CorePrinciple;
